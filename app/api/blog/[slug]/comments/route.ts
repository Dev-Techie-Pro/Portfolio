import { NextRequest, NextResponse } from "next/server";
import {
  getPublishedBlogPostBySlug,
  nextCommentLegacyId,
} from "@/lib/blog/post";
import { clientIp } from "@/lib/blog/request";
import { parseBlogSlug } from "@/lib/blog/slug";
import { getSiteId, getSupabaseAdmin } from "@/lib/supabase/admin";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
const MAX_NAME = 80;
const MAX_EMAIL = 254;
const MAX_BODY = 4000;

type CommentPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

type RouteContext = { params: Promise<{ slug: string }> };

function asTrimmed(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: NextRequest, context: RouteContext) {
  const { slug: rawSlug } = await context.params;
  const slug = parseBlogSlug(rawSlug);
  if (!slug) {
    return NextResponse.json({ error: "Invalid post." }, { status: 400 });
  }

  let body: CommentPayload;
  try {
    body = (await request.json()) as CommentPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = asTrimmed(body.name);
  const emailRaw = asTrimmed(body.email).toLowerCase();
  const message = asTrimmed(body.message);

  if (!name || name.length < 2) {
    return NextResponse.json(
      { error: "Please enter your name." },
      { status: 400 },
    );
  }
  if (name.length > MAX_NAME) {
    return NextResponse.json({ error: "Name is too long." }, { status: 400 });
  }
  if (emailRaw && (!EMAIL_RE.test(emailRaw) || emailRaw.length > MAX_EMAIL)) {
    return NextResponse.json(
      { error: "Please enter a valid email or leave it blank." },
      { status: 400 },
    );
  }
  if (!message || message.length < 1) {
    return NextResponse.json(
      { error: "Please write a comment." },
      { status: 400 },
    );
  }
  if (message.length > MAX_BODY) {
    return NextResponse.json({ error: "Comment is too long." }, { status: 400 });
  }

  try {
    const supabase = getSupabaseAdmin();
    const siteId = getSiteId();
    const post = await getPublishedBlogPostBySlug(slug, supabase);
    if (!post) {
      return NextResponse.json({ error: "Post not found." }, { status: 404 });
    }
    if (!post.comments_enabled) {
      return NextResponse.json(
        { error: "Comments are disabled for this post." },
        { status: 403 },
      );
    }

    const status = post.comments_auto_approve ? "approved" : "pending";
    const legacyId = await nextCommentLegacyId(supabase, siteId);
    const ip = clientIp(request);

    const { data, error } = await supabase
      .from("blog_post_comments")
      .insert({
        site_id: siteId,
        blog_post_id: post.id,
        legacy_id: legacyId,
        author_name: name,
        author_email: emailRaw || null,
        body: message,
        status,
        sender_ip: ip,
      })
      .select("id, author_name, body, created_at, status")
      .single();

    if (error) {
      console.error("[blog comment] insert:", error.message);
      return NextResponse.json(
        { error: "Could not post comment. Please try again." },
        { status: 500 },
      );
    }

    const responseComment =
      data.status === "approved"
        ? {
            id: data.id,
            author_name: data.author_name,
            body: data.body,
            created_at: data.created_at,
          }
        : null;

    return NextResponse.json({
      ok: true,
      pending: data.status === "pending",
      message:
        data.status === "pending"
          ? "Thanks! Your comment is awaiting moderation."
          : undefined,
      comment: responseComment,
    });
  } catch (err) {
    console.error("[blog comment] error:", err);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 },
    );
  }
}
