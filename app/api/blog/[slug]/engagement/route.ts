import { NextRequest, NextResponse } from "next/server";
import { getPublishedBlogPostBySlug } from "@/lib/blog/post";
import { parseBlogSlug } from "@/lib/blog/slug";
import { parseVisitorKey } from "@/lib/blog/visitor";
import { getSupabaseAdmin } from "@/lib/supabase/admin";

type RouteContext = { params: Promise<{ slug: string }> };

export async function GET(request: NextRequest, context: RouteContext) {
  const { slug: rawSlug } = await context.params;
  const slug = parseBlogSlug(rawSlug);
  if (!slug) {
    return NextResponse.json({ error: "Invalid post." }, { status: 400 });
  }

  const visitorKey =
    parseVisitorKey(request.nextUrl.searchParams.get("visitor")) ??
    parseVisitorKey(request.headers.get("x-blog-visitor"));

  try {
    const supabase = getSupabaseAdmin();
    const post = await getPublishedBlogPostBySlug(slug, supabase);
    if (!post) {
      return NextResponse.json({ error: "Post not found." }, { status: 404 });
    }

    let likeCount = 0;
    let liked = false;

    if (post.likes_enabled) {
      const { count, error: likeCountError } = await supabase
        .from("blog_post_likes")
        .select("*", { count: "exact", head: true })
        .eq("blog_post_id", post.id);

      if (likeCountError) {
        console.error("[blog engagement] like count:", likeCountError.message);
        return NextResponse.json(
          { error: "Could not load engagement." },
          { status: 500 },
        );
      }
      likeCount = count ?? 0;

      if (visitorKey) {
        const { data: likeRow } = await supabase
          .from("blog_post_likes")
          .select("id")
          .eq("blog_post_id", post.id)
          .eq("visitor_key", visitorKey)
          .maybeSingle();
        liked = Boolean(likeRow);
      }
    }

    let comments: {
      id: string;
      author_name: string;
      body: string;
      created_at: string;
    }[] = [];

    if (post.comments_enabled) {
      const { data, error: commentsError } = await supabase
        .from("blog_post_comments")
        .select("id, author_name, body, created_at")
        .eq("blog_post_id", post.id)
        .eq("status", "approved")
        .is("deleted_at", null)
        .order("created_at", { ascending: false })
        .limit(100);

      if (commentsError) {
        console.error("[blog engagement] comments:", commentsError.message);
        return NextResponse.json(
          { error: "Could not load comments." },
          { status: 500 },
        );
      }
      comments = data ?? [];
    }

    return NextResponse.json({
      postSlug: slug,
      likesEnabled: post.likes_enabled,
      commentsEnabled: post.comments_enabled,
      likeCount,
      liked,
      comments,
    });
  } catch (err) {
    console.error("[blog engagement] GET error:", err);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 },
    );
  }
}
