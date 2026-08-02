import type { Metadata } from "next";
import { and, desc, isNotNull, ne } from "drizzle-orm";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { db } from "@/lib/db";
import { papers as papersTable } from "@/lib/db/schema";
import { alternates } from "@/lib/seo";
import { paperCategories } from "@/lib/data/papers";
import { PapersClient, type SerializedPaper } from "./papers-client";
import { buildCanonicalPaperSlugMap } from "@/lib/paper-urls";

// 2026-04-27: list query now skips the heavy `abstract` field (only loaded
// on detail pages). Pre-fix the page was force-dynamic with full-row select,
// shipping ~20MB of JSON for 3.5k papers. Post-fix the response is ~2MB
// gzipped — fast enough to restore 10-min ISR.
export const revalidate = 600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Papers" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: alternates("/papers"),
  };
}

export default async function PapersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const rows = await db
    .select({
      id: papersTable.id,
      slug: papersTable.slug,
      titleEn: papersTable.titleEn,
      authors: papersTable.authors,
      affiliationEn: papersTable.affiliationEn,
      journalEn: papersTable.journalEn,
      year: papersTable.year,
      doi: papersTable.doi,
      keywordsEn: papersTable.keywordsEn,
      categoryEn: papersTable.categoryEn,
      language: papersTable.language,
      citationCount: papersTable.citationCount,
      sourceUrl: papersTable.sourceUrl,
      // abstract excluded — heavy field, only loaded on /papers/[id]
    })
    .from(papersTable)
    .where(
      // English records require a translated title. Public routes are built
      // from that title below, so a legacy Chinese storage slug is harmless.
      and(
        isNotNull(papersTable.titleEn),
        ne(papersTable.titleEn, ""),
      ),
    )
    .orderBy(desc(papersTable.year), desc(papersTable.citationCount));

  const canonicalById = buildCanonicalPaperSlugMap(rows);
  const serialized: SerializedPaper[] = rows.map((r) => ({
    id: canonicalById.get(r.id) ?? r.id,
    title: r.titleEn ?? "",
    titleEn: r.titleEn ?? "",
    authors: (r.authors ?? []).filter(
      (author): author is string =>
        typeof author === "string" && !/[\u3400-\u9fff]/u.test(author),
    ),
    affiliation: r.affiliationEn ?? "",
    journal: r.journalEn ?? "",
    year: r.year ?? null,
    doi: r.doi ?? "",
    keywords: (r.keywordsEn ?? []).filter(
      (keyword): keyword is string =>
        typeof keyword === "string" && !/[\u3400-\u9fff]/u.test(keyword),
    ),
    category: r.categoryEn ?? "",
    language: (r.language as "zh" | "en" | null) ?? null,
    citationCount: r.citationCount ?? 0,
    sourceUrl: r.sourceUrl ?? "",
  }));

  return (
    <PapersClient
      papers={serialized}
      categories={paperCategories.map((option) => ({
        id: option.id,
        name: option.nameEn || option.id,
      }))}
    />
  );
}
