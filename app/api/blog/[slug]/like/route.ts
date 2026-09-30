import { NextRequest, NextResponse } from "next/server";
import { getPublishedBlogPostBySlug } from "@/lib/blog/post";
import { parseBlogSlug } from "@/lib/blog/slug";
import { parseVisitorKey, visitorKeyFromRequest } from "@/lib/blog/visitor";
import { getSiteId, getSupabaseAdmin } from "@/lib/supabase/admin";

type RouteContext = { params: Promise<{ slug: string }> };

export async function POST(request: NextRequest, context: RouteContext) {
  const { slug: rawSlug } = await context.params;
  const slug = parseBlogSlug(rawSlug);
  if (!slug) {
    return NextResponse.json({ error: "Invalid post." }, { status: 400 });
  }

  let visitorKey = visitorKeyFromRequest(request);
  if (!visitorKey) {
    try {
      const body = (await request.json()) as { visitor?: unknown };
      visitorKey = parseVisitorKey(
        typeof body.visitor === "string" ? body.visitor : null,
      );
    } catch {
      visitorKey = null;
    }
  }
  if (!visitorKey) {
    return NextResponse.json(
      { error: "Missing or invalid visitor id." },
      { status: 400 },
    );
  }

  try {
    const supabase = getSupabaseAdmin();
    const siteId = getSiteId();
    const post = await getPublishedBlogPostBySlug(slug, supabase);
    if (!post) {
      return NextResponse.json({ error: "Post not found." }, { status: 404 });
    }
    if (!post.likes_enabled) {
      return NextResponse.json(
        { error: "Likes are disabled for this post." },
        { status: 403 },
      );
    }

    const { data: existing } = await supabase
      .from("blog_post_likes")
      .select("id")
      .eq("blog_post_id", post.id)
      .eq("visitor_key", visitorKey)
      .maybeSingle();

    if (existing) {
      const { error: delError } = await supabase
        .from("blog_post_likes")
        .delete()
        .eq("id", existing.id);

      if (delError) {
        console.error("[blog like] delete:", delError.message);
        return NextResponse.json(
          { error: "Could not update like." },
          { status: 500 },
        );
      }
    } else {
      const { error: insError } = await supabase.from("blog_post_likes").insert({
        site_id: siteId,
        blog_post_id: post.id,
        visitor_key: visitorKey,
      });

      if (insError) {
        console.error("[blog like] insert:", insError.message);
        return NextResponse.json(
          { error: "Could not save like." },
          { status: 500 },
        );
      }
    }

    const { count: likeCount, error: countError } = await supabase
      .from("blog_post_likes")
      .select("*", { count: "exact", head: true })
      .eq("blog_post_id", post.id);

    if (countError) {
      console.error("[blog like] count:", countError.message);
      return NextResponse.json(
        { error: "Could not load like count." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      liked: !existing,
      likeCount: likeCount ?? 0,
    });
  } catch (err) {
    console.error("[blog like] error:", err);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 },
    );
  }
}
