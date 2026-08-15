// 2026-06-16: DE-SCHEDULED. Removed from vercel.json crons — this pipeline
// auto-PUBLISHED thin (~800-char) Gemini rewrites of RSS snippets, which is
// being replaced by the human-reviewed deep-research digest (drafts only, see
// /api/cron/article-draft). The route is kept
// for manual one-off triggering with CRON_SECRET, but no longer runs on a cron.
import { NextResponse } from "next/server";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";
import { db } from "@/lib/db";
import { articles } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 300;

const CAP = 5;

const RSS_FEEDS = [
  { url: "https://www.compositesworld.com/rss/articles", name: "CompositesWorld" },
  { url: "https://www.jeccomposites.com/rss.xml", name: "JEC" },
  { url: "https://www.netcomposites.com/feed/", name: "NetComposites" },
  { url: "https://www.aibangfrp.com/feed", name: "aibangfrp" },
];

function authorized(req: Request): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) return false;
  const header = req.headers.get("authorization");
  if (header === `Bearer ${secret}`) return true;
  const url = new URL(req.url);
  if (url.searchParams.get("secret") === secret) return true;
  return false;
}

// Minimal RSS/Atom XML parser using regex — no extra deps.
type RssItem = {
  title: string;
  link: string;
  description: string;
  pubDate?: string;
};

function extractText(xml: string, tag: string): string {
  // Try CDATA first, then plain text.
  const cdataRe = new RegExp(`<${tag}[^>]*>\\s*<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>\\s*</${tag}>`, "i");
  const plainRe = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i");
  const cdataM = xml.match(cdataRe);
  if (cdataM) return cdataM[1].trim();
  const plainM = xml.match(plainRe);
  if (plainM) return plainM[1].replace(/<[^>]+>/g, "").trim();
  return "";
}

function parseRss(xml: string): RssItem[] {
  const items: RssItem[] = [];
  // Match <item> or <entry> (Atom) blocks.
  const itemRe = /<(?:item|entry)[\s>]([\s\S]*?)<\/(?:item|entry)>/gi;
  let m: RegExpExecArray | null;
  while ((m = itemRe.exec(xml)) !== null) {
    const block = m[1];
    const title = extractText(block, "title");
    // Atom uses <link href="..."/> or <link>url</link>
    let link = extractText(block, "link");
    if (!link) {
      const hrefM = block.match(/<link[^>]+href=["']([^"']+)["']/i);
      if (hrefM) link = hrefM[1];
    }
    const description =
      extractText(block, "description") ||
      extractText(block, "summary") ||
      extractText(block, "content");
    const pubDate =
      extractText(block, "pubDate") ||
      extractText(block, "published") ||
      extractText(block, "updated");
    if (title && link) {
      items.push({ title, link, description, pubDate });
    }
  }
  return items;
}

function slugFromUrl(url: string, title: string): string {
  const base =
    title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .slice(0, 60) || "article";
  const ts = Date.now().toString(36);
  return `${base}-${ts}`;
}

async function fetchFeed(feedUrl: string): Promise<RssItem[]> {
  try {
    const res = await fetch(feedUrl, {
      headers: { "User-Agent": "getfrp-bot/1.0 (+https://getfrp.com)" },
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) return [];
    const xml = await res.text();
    return parseRss(xml);
  } catch {
    return [];
  }
}

async function articleExistsBySlug(slug: string): Promise<boolean> {
  const bySlug = await db
    .select({ id: articles.id })
    .from(articles)
    .where(eq(articles.slug, slug))
    .limit(1);
  if (bySlug.length) return true;
  // articles has no source_url column; slug collision handles repeated runs.
  return false;
}

async function rewriteWithGemini(
  item: RssItem,
  google: ReturnType<typeof createGoogleGenerativeAI>
): Promise<{ title: string; body: string } | null> {
  const prompt = `You are a composites industry editor. Rewrite the following article snippet in natural, professional English for international FRP engineers and buyers. Avoid stock AI phrases and keyword stuffing. Produce a concise English headline and an article of about 800 words.

Article title: ${item.title}
Original content: ${item.description.slice(0, 1500)}

Output EXACTLY in this format (no extra text):
[TITLE]
<English headline>
[BODY]
<English article>`;

  try {
    const { text } = await generateText({
      model: google("gemini-2.5-flash"),
      prompt,
      maxOutputTokens: 700,
    });
    const titleM = text.match(/\[TITLE\]\s*([\s\S]*?)\[BODY\]/);
    const bodyM = text.match(/\[BODY\]\s*([\s\S]*)/);
    const title = titleM?.[1]?.trim() ?? "";
    const body = bodyM?.[1]?.trim() ?? "";
    if (!title || !body) return null;
    return { title, body };
  } catch {
    return null;
  }
}

export async function GET(req: Request) {
  if (!authorized(req)) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "GOOGLE_GENERATIVE_AI_API_KEY not set" }, { status: 503 });
  }

  const google = createGoogleGenerativeAI({ apiKey });

  const results = {
    inserted: [] as string[],
    skipped: [] as string[],
    errors: [] as string[],
  };


  for (const feed of RSS_FEEDS) {
    if (results.inserted.length >= CAP) break;

    const items = await fetchFeed(feed.url);
    if (!items.length) {
      results.skipped.push(`${feed.name}: no items or fetch failed`);
      continue;
    }

    for (const item of items) {
      if (results.inserted.length >= CAP) break;

      const slug = slugFromUrl(item.link, item.title);

      if (await articleExistsBySlug(slug)) {
        results.skipped.push(`${item.title.slice(0, 60)}: duplicate`);
        continue;
      }

      const rewritten = await rewriteWithGemini(item, google);
      if (!rewritten) {
        results.errors.push(`${item.title.slice(0, 60)}: rewrite failed`);
        continue;
      }

      const body = rewritten.body;
      const excerpt = rewritten.body.slice(0, 200);

      try {
        const rows = await db
          .insert(articles)
          .values({
            slug,
            title: rewritten.title.slice(0, 500),
            excerpt,
            body,
            category: "industry",
            publishedAt: new Date(),
          })
          .returning({ id: articles.id });

        const id = rows[0]?.id;
        if (id) {
          results.inserted.push(slug);
        }
      } catch (e) {
        results.errors.push(
          `${item.title.slice(0, 60)}: db error — ${e instanceof Error ? e.message : String(e)}`
        );
      }
    }
  }

  return NextResponse.json({ ok: true, ...results });
}
