// Central sitemap data + XML serializers.
//
// Split out of the old monolithic app/sitemap.ts so the sitemap can be served
// as an INDEX (app/sitemap.xml) pointing at per-type child sitemaps
// (app/sitemaps/[type].xml). Next 16's MetadataRoute.Sitemap can only emit a
// flat <urlset> — it has no <sitemapindex> support (see resolveSitemap in
// next/dist/build/.../resolve-route-data.js) — so we render the XML ourselves.
//
// Invariants preserved from the single-file version:
//   - EN deploy (getfrp.com) only lists English public content.
//   - GetFRP is English-only and emits no cross-domain hreflang.
// Changed on purpose:
//   - The old 1,000 / 2,000 / 500 row caps are lifted to the 50k sitemap
//     ceiling so the full supporting corpus gets crawled.

import type { MetadataRoute } from "next";
import { and, eq, isNotNull, ne } from "drizzle-orm";
import { db } from "@/lib/db";
import {
  products,
  supplierListings,
} from "@/lib/db/schema";
import { CURRENT_SITE_URL } from "@/lib/sites";
import { CURATED_SUPPLIER_PROFILES } from "@/lib/data/curated-supplier-profiles";
import { enrichSupplierWithCuratedProfile } from "@/lib/data/curated-supplier-profiles";
import { sourcingTopicSlugs } from "@/lib/data/sourcing-topics";
import { SUPPLIER_REGION_SLUGS } from "@/lib/data/supplier-region-pages";
import { PRODUCT_SEED_RECORDS } from "@/lib/data/products";
import { SEO_REFERENCE_PAGES } from "@/lib/data/seo-reference-pages";
import {
  supplierDirectoryPath,
} from "@/lib/supplier-directory";
import { supplierRouteSlug } from "@/lib/supplier-slugs";
import { isSupplierProfileIndexable } from "@/lib/supplier-indexability";

export type SitemapType =
  | "core"
  | "products"
  | "suppliers"
  | "sourcing"
  | "resources"
  | "data"
  | "tools";

// A single sitemap file may hold at most 50,000 URLs. Every table is well
// under that, so one child sitemap per type is sufficient.
const MAX_PER_SITEMAP = 50000;
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

export type StaticRoute = {
  path: string;
  lastModified: string;
};

const CONTENT_REVIEW_DATE = "2026-08-09";

export const CORE_SITEMAP_ROUTES: StaticRoute[] = [
  { path: "/", lastModified: CONTENT_REVIEW_DATE },
  { path: "/products", lastModified: CONTENT_REVIEW_DATE },
  { path: "/suppliers", lastModified: CONTENT_REVIEW_DATE },
  { path: "/services/frp-engineering-qa", lastModified: CONTENT_REVIEW_DATE },
  { path: "/methodology", lastModified: CONTENT_REVIEW_DATE },
  { path: "/ai", lastModified: "2026-08-04" },
  { path: "/about", lastModified: CONTENT_REVIEW_DATE },
  { path: "/source-from-china", lastModified: "2026-08-04" },
  { path: "/sitemap", lastModified: CONTENT_REVIEW_DATE },
];

export const DATA_SITEMAP_ROUTES: StaticRoute[] = [
  { path: "/data/china-frp-trade-remedies", lastModified: "2026-08-04" },
];

export const TOOL_SITEMAP_ROUTES: StaticRoute[] = [
  { path: "/tools", lastModified: "2026-08-04" },
  { path: "/tools/buy-america-frp-checker", lastModified: "2026-08-04" },
  { path: "/tools/frp-weight-calculator", lastModified: "2026-08-04" },
  { path: "/tools/frp-cost-estimator", lastModified: "2026-08-04" },
  { path: "/tech", lastModified: "2026-08-04" },
  { path: "/tech/calculator", lastModified: "2026-08-04" },
  { path: "/tech/u-value-calculator", lastModified: "2026-08-04" },
];

export const RESOURCE_SITEMAP_PATHS = [
  "/compare",
  "/technical",
  "/guides",
  "/suppliers/resources",
  "/processes/pultrusion",
  "/processes/filament-winding",
  "/processes/compression-molding",
  ...SEO_REFERENCE_PAGES.map((page) => `/${page.group}/${page.slug}`),
];

const toEntry = (
  path: string,
  updatedAt?: Date | string | null,
): MetadataRoute.Sitemap[number] => ({
  url: urlFor(path),
  ...(updatedAt ? { lastModified: updatedAt } : {}),
});

// ── per-type entry builders ───────────────────────────────────────────────

function coreEntries(): MetadataRoute.Sitemap {
  const staticEntries = CORE_SITEMAP_ROUTES.map((r) => ({
      url: urlFor(r.path),
      lastModified: r.lastModified,
    }));

  // Matrix combinations are supporting engineering tools, not primary search
  // landing pages. Keep the hub discoverable, but exclude the 55 templated
  // combinations until each has unique product/supplier evidence.
  return staticEntries;
}

export async function buildSitemapEntries(
  type: SitemapType,
): Promise<MetadataRoute.Sitemap> {
  const isEn = true;

  switch (type) {
    case "core":
      return coreEntries();

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
            updatedAt: CONTENT_REVIEW_DATE,
          }));
      return publishedRows.map((row) =>
        toEntry(`/products/${row.slug}`, row.updatedAt),
      );
    }

    case "suppliers": {
      const networkEntries = SUPPLIER_REGION_SLUGS.map((slug) =>
        toEntry(`/suppliers/${slug}`, CONTENT_REVIEW_DATE),
      );
      const rows = (await safeFetch(() =>
        db
          .select()
          .from(supplierListings)
          .where(
            and(
              isNotNull(supplierListings.slug),
              isNotNull(supplierListings.nameEn),
              ne(supplierListings.nameEn, ""),
            ),
          )
          .limit(MAX_PER_SITEMAP),
      )) as Array<typeof supplierListings.$inferSelect>;
      const enrichedRows = rows.map(enrichSupplierWithCuratedProfile);
      const companyEntries = enrichedRows
        .filter(isSupplierProfileIndexable)
        .map((row) =>
          toEntry(
            `/suppliers/${supplierRouteSlug(row)}`,
            row.profileReviewedAt ?? row.updatedAt,
          ),
        );
      const databaseIds = new Set(rows.map((row) => row.id));
      const databaseSlugs = new Set(
        rows.flatMap((row) => row.slug ? [row.slug] : []),
      );
      const curatedCompanyEntries = CURATED_SUPPLIER_PROFILES.flatMap(
        ({ profile }) => {
          const slug = supplierRouteSlug(profile);
          if (
            !profile.profilePublished ||
            !profile.nameEn?.trim() ||
            databaseIds.has(profile.id) ||
            databaseSlugs.has(slug)
          ) {
            return [];
          }
          return [
            toEntry(
              `/suppliers/${slug}`,
              profile.profileReviewedAt ?? profile.updatedAt,
            ),
          ];
        },
      );
      const allCompanyEntries = [...companyEntries, ...curatedCompanyEntries];
      const totalBrowsableCompanies = rows.length + curatedCompanyEntries.length;
      const directoryEntries = totalBrowsableCompanies > 0
        ? [toEntry(supplierDirectoryPath(1), CONTENT_REVIEW_DATE)]
        : [];
      return [...networkEntries, ...directoryEntries, ...allCompanyEntries];
    }

    case "sourcing": {
      // Curated English long-tail hubs — EN deploy only.
      if (!isEn) return [];
      return sourcingTopicSlugs.map((slug) => ({
        ...toEntry(`/sourcing/${slug}`, "2026-08-04"),
      }));
    }

    case "resources": {
      if (!isEn) return [];
      return RESOURCE_SITEMAP_PATHS.map((path) => ({
        ...toEntry(path, path.startsWith("/processes/") ? CONTENT_REVIEW_DATE : "2026-08-04"),
      }));
    }

    case "data":
      return DATA_SITEMAP_ROUTES.map((route) => ({
        ...toEntry(route.path, route.lastModified),
      }));

    case "tools":
      return TOOL_SITEMAP_ROUTES.map((route) => ({
        ...toEntry(route.path, route.lastModified),
      }));

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
  ];
  return [...base, "sourcing", "resources", "data", "tools"];
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
  children: { loc: string; lastmod?: string }[],
): string {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  for (const c of children) {
    xml += "  <sitemap>\n";
    xml += `    <loc>${xmlEscape(c.loc)}</loc>\n`;
    if (c.lastmod) xml += `    <lastmod>${c.lastmod}</lastmod>\n`;
    xml += "  </sitemap>\n";
  }
  xml += "</sitemapindex>\n";
  return xml;
}
