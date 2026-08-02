// Central sitemap data + XML serializers.
//
// Split out of the old monolithic app/sitemap.ts so the sitemap can be served
// as an INDEX (app/sitemap.xml) pointing at per-type child sitemaps
// (app/sitemaps/[type].xml). Next 16's MetadataRoute.Sitemap can only emit a
// flat <urlset> — it has no <sitemapindex> support (see resolveSitemap in
// next/dist/build/.../resolve-route-data.js) — so we render the XML ourselves.
//
// Invariants preserved from the single-file version:
//   - EN deploy (getfrp.com) only lists ASCII paths with English content.
//   - Thin papers (abstract < 80 chars) are excluded on EN.
//   - GetFRP is English-only and emits no cross-domain hreflang.
// Changed on purpose:
//   - The old 1,000 / 2,000 / 500 row caps are lifted to the 50k sitemap
//     ceiling so the full supporting corpus gets crawled.

import type { MetadataRoute } from "next";
import { desc, eq, isNotNull } from "drizzle-orm";
import { db } from "@/lib/db";
import {
  standards,
  papers,
  products,
  supplierListings,
} from "@/lib/db/schema";
import { CURRENT_SITE_URL } from "@/lib/sites";
import { sourcingTopicSlugs } from "@/lib/data/sourcing-topics";
import { GB_STANDARDS_EN } from "@/lib/data/gb-standards-en";
import { SUPPLIER_REGION_SLUGS } from "@/lib/data/supplier-region-pages";
import { PRODUCT_SEED_RECORDS } from "@/lib/data/products";
import { SEO_REFERENCE_PAGES } from "@/lib/data/seo-reference-pages";

export type SitemapType =
  | "core"
  | "products"
  | "papers"
  | "standards"
  | "suppliers"
  | "sourcing"
  | "resources";

// A single sitemap file may hold at most 50,000 URLs. Every table is well
// under that, so one child sitemap per type is sufficient.
const MAX_PER_SITEMAP = 50000;
// Google thin-content heuristic; below this an abstract triggers noindex and
// exclusion from the EN sitemap to avoid wasting crawl budget.
const MIN_ABSTRACT_LEN = 80;

const isAsciiPath = (s: string) => /^[\x00-\x7F]+$/.test(s);

async function safeFetch<T>(fn: () => Promise<T>): Promise<T | []> {
  try {
    return await fn();
  } catch {
    return [] as unknown as T;
  }
}

function urlFor(path: string): string {
  return `${CURRENT_SITE_URL}${path === "/" ? "" : path}` || CURRENT_SITE_URL;
}

type StaticRoute = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const staticRoutes: StaticRoute[] = [
  { path: "/", changeFrequency: "daily", priority: 1.0 },
  { path: "/products", changeFrequency: "weekly", priority: 0.95 },
  { path: "/standards", changeFrequency: "weekly", priority: 0.8 },
  { path: "/papers", changeFrequency: "daily", priority: 0.8 },
  { path: "/suppliers", changeFrequency: "daily", priority: 0.9 },
  { path: "/tech", changeFrequency: "weekly", priority: 0.7 },
  { path: "/fibers", changeFrequency: "monthly", priority: 0.7 },
  { path: "/matrix", changeFrequency: "monthly", priority: 0.6 },
  { path: "/ai", changeFrequency: "monthly", priority: 0.7 },
  { path: "/news", changeFrequency: "weekly", priority: 0.6 },
  { path: "/community", changeFrequency: "weekly", priority: 0.5 },
  { path: "/trade", changeFrequency: "weekly", priority: 0.6 },
  { path: "/about", changeFrequency: "monthly", priority: 0.5 },
  { path: "/source-from-china", changeFrequency: "weekly", priority: 0.8 },
  { path: "/data/china-frp-trade-remedies", changeFrequency: "weekly", priority: 0.8 },
  { path: "/tools/buy-america-frp-checker", changeFrequency: "monthly", priority: 0.7 },
];

const toEntry = (
  path: string,
  updatedAt: Date | null,
  priority: number,
  now: Date,
): MetadataRoute.Sitemap[number] => ({
  url: urlFor(path),
  lastModified: updatedAt ?? now,
  changeFrequency: "monthly",
  priority,
});

// ── per-type entry builders ───────────────────────────────────────────────

function coreEntries(now: Date): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map((r) => ({
      url: urlFor(r.path),
      lastModified: now,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    }));

  // Matrix combinations are supporting engineering tools, not primary search
  // landing pages. Keep the hub discoverable, but exclude the 55 templated
  // combinations until each has unique product/supplier evidence.
  return staticEntries;
}

export async function buildSitemapEntries(
  type: SitemapType,
): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const isEn = true;

  switch (type) {
    case "core":
      return coreEntries(now);

    case "products": {
      const rows = (await safeFetch(() =>
        db
          .select({
            slug: products.slug,
            updatedAt: products.updatedAt,
          })
          .from(products)
          .where(eq(products.status, "published"))
          .limit(MAX_PER_SITEMAP),
      )) as Array<{ slug: string; updatedAt: Date | null }>;
      const publishedRows = rows.length > 0
        ? rows
        : PRODUCT_SEED_RECORDS.map((product) => ({
            slug: product.slug,
            updatedAt: now,
          }));
      return publishedRows.map((row) =>
        toEntry(`/products/${row.slug}`, row.updatedAt, 0.85, now),
      );
    }

    case "papers": {
      const rows = (await safeFetch(() =>
        db
          .select({
            id: papers.id,
            slug: papers.slug,
            titleEn: papers.titleEn,
            abstractEn: papers.abstractEn,
            updatedAt: papers.updatedAt,
          })
          .from(papers)
          .orderBy(desc(papers.updatedAt))
          .limit(MAX_PER_SITEMAP),
      )) as Array<{
        id: string;
        slug: string | null;
        titleEn: string | null;
        abstractEn: string | null;
        updatedAt: Date | null;
      }>;
      return rows
        .map((r) => ({ urlSlug: r.slug ?? r.id, ...r }))
        .filter((r) =>
          isEn
            ? isAsciiPath(r.urlSlug) &&
              (r.titleEn ?? "").trim() !== "" &&
              (r.abstractEn ?? "").trim().length >= MIN_ABSTRACT_LEN
            : true,
        )
        .map((r) => toEntry(`/papers/${r.urlSlug}`, r.updatedAt, 0.6, now));
    }

    case "standards": {
      const rows = (await safeFetch(() =>
        db
          .select({
            id: standards.id,
            titleEn: standards.titleEn,
            updatedAt: standards.updatedAt,
          })
          .from(standards)
          .limit(MAX_PER_SITEMAP),
      )) as Array<{ id: string; titleEn: string | null; updatedAt: Date | null }>;
      const entries = rows
        .filter((r) =>
          isEn ? isAsciiPath(r.id) && (r.titleEn ?? "").trim() !== "" : true,
        )
        .map((r) => toEntry(`/standards/${r.id}`, r.updatedAt, 0.7, now));
      if (!isEn) return entries;
      const seen = new Set(entries.map((entry) => entry.url));
      return [
        ...entries,
        ...GB_STANDARDS_EN.map((standard) =>
          toEntry(`/standards/${standard.id}`, now, 0.7, now),
        ).filter((entry) => !seen.has(entry.url)),
      ];
    }

    case "suppliers": {
      const networkEntries = SUPPLIER_REGION_SLUGS.map((slug) => ({
          ...toEntry(`/suppliers/${slug}`, now, 0.85, now),
          changeFrequency: "weekly" as const,
        }));
      const rows = (await safeFetch(() =>
        db
          .select({
            slug: supplierListings.slug,
            nameEn: supplierListings.nameEn,
            updatedAt: supplierListings.updatedAt,
          })
          .from(supplierListings)
          .where(
            isNotNull(supplierListings.slug),
          )
          .limit(MAX_PER_SITEMAP),
      )) as Array<{ slug: string | null; nameEn: string | null; updatedAt: Date | null }>;
      const companyEntries = rows
        .filter((r): r is typeof r & { slug: string } => Boolean(r.slug && (r.nameEn ?? "").trim()))
        .map((r) => toEntry(`/suppliers/${r.slug}`, r.updatedAt, 0.7, now));
      return [...networkEntries, ...companyEntries];
    }

    case "sourcing": {
      // Curated English long-tail hubs — EN deploy only.
      if (!isEn) return [];
      return sourcingTopicSlugs.map((slug) => ({
        ...toEntry(`/sourcing/${slug}`, now, 0.75, now),
        changeFrequency: "weekly" as const,
      }));
    }

    case "resources": {
      if (!isEn) return [];
      const paths = [
        "/compare",
        "/technical",
        "/guides",
        "/tools",
        ...SEO_REFERENCE_PAGES.map((page) => `/${page.group}/${page.slug}`),
        "/tools/frp-weight-calculator",
        "/tools/frp-cost-estimator",
      ];
      return paths.map((path) => ({
        ...toEntry(path, now, path.split("/").length === 2 ? 0.75 : 0.7, now),
        changeFrequency: "monthly" as const,
      }));
    }

    default:
      return [];
  }
}

// Child sitemaps applicable to the current deploy. The index lists exactly
// these; the [type] route prerenders exactly these.
export function childSitemapTypes(): SitemapType[] {
  const base: SitemapType[] = [
    "core",
    "products",
    "suppliers",
    "standards",
    "papers",
  ];
  return [...base, "sourcing", "resources"];
}

export async function indexedChildSitemapTypes(): Promise<SitemapType[]> {
  return childSitemapTypes();
}

// ── XML serializers (Next can't emit <sitemapindex>; match its <urlset>) ───

function xmlEscape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function renderUrlset(entries: MetadataRoute.Sitemap): string {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  for (const e of entries) {
    xml += "  <url>\n";
    xml += `    <loc>${xmlEscape(e.url)}</loc>\n`;
    if (e.lastModified) {
      const d =
        e.lastModified instanceof Date
          ? e.lastModified.toISOString()
          : e.lastModified;
      xml += `    <lastmod>${d}</lastmod>\n`;
    }
    if (e.changeFrequency) xml += `    <changefreq>${e.changeFrequency}</changefreq>\n`;
    if (typeof e.priority === "number") xml += `    <priority>${e.priority}</priority>\n`;
    xml += "  </url>\n";
  }
  xml += "</urlset>\n";
  return xml;
}

export function renderSitemapIndex(
  children: { loc: string; lastmod: string }[],
): string {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  for (const c of children) {
    xml += "  <sitemap>\n";
    xml += `    <loc>${xmlEscape(c.loc)}</loc>\n`;
    xml += `    <lastmod>${c.lastmod}</lastmod>\n`;
    xml += "  </sitemap>\n";
  }
  xml += "</sitemapindex>\n";
  return xml;
}
