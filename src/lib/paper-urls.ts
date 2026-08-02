import { cache } from "react";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { papers } from "@/lib/db/schema";
import { paperCanonicalSlug } from "@/lib/slug";

export type PaperRouteRecord = {
  id: string;
  slug: string | null;
  titleEn: string | null;
  year: number | null;
};

export type PaperRouteIndex = {
  byRoute: Map<string, string>;
  canonicalById: Map<string, string>;
};

const ROUTE_INDEX_TTL_MS = 10 * 60 * 1000;
let routeIndexPromise: Promise<PaperRouteIndex> | null = null;
let routeIndexExpiresAt = 0;

export function buildCanonicalPaperSlugMap(
  rows: PaperRouteRecord[],
): Map<string, string> {
  const groups = new Map<string, PaperRouteRecord[]>();
  for (const row of rows) {
    if (!row.titleEn?.trim()) continue;
    const base = paperCanonicalSlug(row.titleEn, row.year, row.id);
    const group = groups.get(base) ?? [];
    group.push(row);
    groups.set(base, group);
  }

  const result = new Map<string, string>();
  for (const row of rows) {
    if (!row.titleEn?.trim()) {
      result.set(row.id, row.slug ?? row.id);
      continue;
    }
    const base = paperCanonicalSlug(row.titleEn, row.year, row.id);
    result.set(
      row.id,
      paperCanonicalSlug(
        row.titleEn,
        row.year,
        row.id,
        (groups.get(base)?.length ?? 0) > 1,
      ),
    );
  }
  return result;
}

function buildPaperRouteIndex(rows: PaperRouteRecord[]): PaperRouteIndex {
  const canonicalById = buildCanonicalPaperSlugMap(rows);
  const byRoute = new Map<string, string>();

  for (const row of rows) {
    byRoute.set(row.id, row.id);
    if (row.slug) byRoute.set(row.slug, row.id);
    const canonical = canonicalById.get(row.id);
    if (canonical) byRoute.set(canonical, row.id);
  }

  return { byRoute, canonicalById };
}

async function loadPaperRouteIndex(): Promise<PaperRouteIndex> {
  const rows = await db
    .select({
      id: papers.id,
      slug: papers.slug,
      titleEn: papers.titleEn,
      year: papers.year,
    })
    .from(papers);
  return buildPaperRouteIndex(rows);
}

export async function getPaperRouteIndex(): Promise<PaperRouteIndex> {
  const now = Date.now();
  if (routeIndexPromise && now < routeIndexExpiresAt) return routeIndexPromise;

  routeIndexExpiresAt = now + ROUTE_INDEX_TTL_MS;
  routeIndexPromise = loadPaperRouteIndex().catch((error) => {
    routeIndexPromise = null;
    routeIndexExpiresAt = 0;
    throw error;
  });
  return routeIndexPromise;
}

export const resolvePaperRoute = cache(async (route: string) => {
  const index = await getPaperRouteIndex();
  const paperId = index.byRoute.get(route);
  if (!paperId) return null;

  const [paper] = await db
    .select()
    .from(papers)
    .where(eq(papers.id, paperId))
    .limit(1);
  if (!paper) return null;

  return {
    paper,
    canonicalSlug: index.canonicalById.get(paper.id) ?? paper.slug ?? paper.id,
  };
});
