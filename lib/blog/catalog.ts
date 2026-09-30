import {
  applyPrevNextLinks,
  buildCatalogIndexes,
  mapRowToPortfolioPost,
} from "@/lib/blog/map";
import type { BlogCatalogResponse, PortfolioBlogPost } from "@/lib/blog/types";
import { getSiteId, getSupabaseAdmin } from "@/lib/supabase/admin";

type DbBlogRow = {
  id: string;
  legacy_id: number | null;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  category_key: string | null;
  featured_image_url: string | null;
  featured_image_alt: string | null;
  published_at: string | null;
  sort_order: number | null;
  is_featured: boolean | null;
};

type TagRow = {
  blog_post_id: string;
  tag: string;
  sort_order: number | null;
};

export async function fetchPublishedBlogCatalog(): Promise<BlogCatalogResponse> {
  const supabase = getSupabaseAdmin();
  const siteId = getSiteId();

  const { data: rows, error } = await supabase
    .from("blog_posts")
    .select(
      "id, legacy_id, title, slug, excerpt, content, category_key, featured_image_url, featured_image_alt, published_at, sort_order, is_featured",
    )
    .eq("site_id", siteId)
    .eq("status", "Published")
    .is("deleted_at", null)
    .order("sort_order", { ascending: true })
    .order("published_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  const postRows = (rows || []) as DbBlogRow[];
  const postIds = postRows.map((r) => r.id);

  const { data: categoryRows } = await supabase
    .from("blog_categories")
    .select("key, label")
    .eq("site_id", siteId)
    .is("deleted_at", null);

  const categoryLabelByKey = new Map<string, string>();
  for (const row of categoryRows || []) {
    if (row.key && row.label) {
      categoryLabelByKey.set(String(row.key).toLowerCase(), row.label);
    }
  }

  const tagsByPost = new Map<string, string[]>();
  if (postIds.length > 0) {
    const { data: tagRows, error: tagError } = await supabase
      .from("blog_post_tags")
      .select("blog_post_id, tag, sort_order")
      .in("blog_post_id", postIds)
      .order("sort_order", { ascending: true });

    if (tagError) {
      throw new Error(tagError.message);
    }

    for (const row of (tagRows || []) as TagRow[]) {
      const tag = row.tag?.trim();
      if (!tag) continue;
      const list = tagsByPost.get(row.blog_post_id) || [];
      list.push(tag);
      tagsByPost.set(row.blog_post_id, list);
    }
  }

  const posts: PortfolioBlogPost[] = postRows.map((row) =>
    mapRowToPortfolioPost(
      row,
      tagsByPost.get(row.id) || [],
      categoryLabelByKey.get((row.category_key || "").toLowerCase()),
    ),
  );

  const postsById: Record<string, PortfolioBlogPost> = {};
  for (const post of posts) {
    postsById[post.id] = post;
  }

  const { order, galleryOrder } = buildCatalogIndexes(posts);
  applyPrevNextLinks(postsById, order);

  return {
    posts: order.map((id) => postsById[id]).filter(Boolean),
    order,
    galleryOrder,
  };
}

export async function fetchPublishedBlogBySlug(
  slug: string,
): Promise<PortfolioBlogPost | null> {
  const catalog = await fetchPublishedBlogCatalog();
  return catalog.posts.find((p) => p.id === slug) ?? null;
}
