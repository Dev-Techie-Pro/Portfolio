import { NextResponse } from "next/server";
import { fetchPublishedBlogCatalog } from "@/lib/blog/catalog";

export async function GET() {
  try {
    const catalog = await fetchPublishedBlogCatalog();
    return NextResponse.json(catalog);
  } catch (err) {
    console.error("[blogs] catalog error:", err);
    return NextResponse.json(
      { error: "Could not load blogs." },
      { status: 500 },
    );
  }
}
