import type { Metadata } from "next";
import { and, asc, eq, isNotNull, ne, sql } from "drizzle-orm";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { db } from "@/lib/db";
import { materials as materialsTable } from "@/lib/db/schema";
import { MaterialsClient } from "./materials-client";
import { materialCategories } from "@/lib/data/materials";
import { JsonLd } from "@/components/json-ld";
import { alternates } from "@/lib/seo";
import { CURRENT_SITE_URL } from "@/lib/sites";
import {
  dedupeEnglishMaterials,
  isIndexableEnglishMaterial,
} from "@/lib/material-publication";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Materials" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: alternates("/materials"),
  };
}

export default async function MaterialsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const [{ locale }, sp] = await Promise.all([params, searchParams]);
  setRequestLocale(locale);
  const isEn = locale === "en";
  const firstParam = (value: string | string[] | undefined) =>
    Array.isArray(value) ? value[0] ?? "" : value ?? "";
  const initialSearch = firstParam(sp.q).slice(0, 200);
  const requestedCategory = firstParam(sp.category);
  const initialCategory = materialCategories.some(
    (category) => category.id === requestedCategory,
  )
    ? requestedCategory
    : "all";

  // The English catalog requires translated names and ASCII-safe route IDs.
  const rows = await db
    .select()
    .from(materialsTable)
    .where(
      and(
        // Public results include verified submissions and curated records.
        eq(materialsTable.status, "verified"),
        isEn
          ? and(
              isNotNull(materialsTable.nameEn),
              ne(materialsTable.nameEn, ""),
              sql`${materialsTable.id} ~ '^[\\x00-\\x7F]+$'`,
            )
          : undefined,
      ),
    )
    .orderBy(asc(materialsTable.category), asc(materialsTable.name))
    .limit(isEn ? 5000 : 500);

  // Keep the underlying data intact. The English procurement product only
  // publishes records with a useful specification body, then collapses exact
  // brand/grade duplicates before rendering and indexing.
  const publicRows = isEn
    ? dedupeEnglishMaterials(rows.filter(isIndexableEnglishMaterial)).slice(0, 1000)
    : rows;

  const inLanguage = locale === "en" ? "en" : "zh-CN";
  const t = await getTranslations({ locale, namespace: "Materials" });
  const top20 = publicRows.slice(0, 20);
  const materialsItemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    url: `${CURRENT_SITE_URL}/materials`,
    inLanguage,
    name: t("metaTitle"),
    numberOfItems: top20.length,
    itemListElement: top20.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: isEn ? r.nameEn ?? r.name : r.name,
        description: isEn ? r.descriptionEn ?? undefined : r.description ?? undefined,
        url: `${CURRENT_SITE_URL}/materials/${encodeURIComponent(r.id)}`,
        brand: (isEn ? r.brandEn : r.brand)
          ? { "@type": "Brand", name: (isEn ? r.brandEn : r.brand) as string }
          : undefined,
      },
    })),
  };

  // Do not fall back to source-language fields after the SQL filter.
  const serialized = publicRows.map((r) => ({
    id: r.id,
    name: isEn ? r.nameEn ?? "" : r.name,
    nameEn: r.nameEn ?? "",
    category: r.category,
    subCategory: isEn ? r.subCategoryEn ?? "" : r.subCategory ?? "",
    brand: isEn ? r.brandEn ?? "" : r.brand ?? "",
    model: isEn ? r.modelEn ?? "" : r.model ?? "",
    properties: (isEn ? r.propertiesEn ?? {} : r.properties ?? {}) as Record<string, string>,
    applications: (isEn ? r.applicationsEn ?? [] : r.applications ?? []) as string[],
    description: isEn ? r.descriptionEn ?? "" : r.description ?? "",
  }));

  return (
    <>
      <JsonLd data={materialsItemListJsonLd} />
      <MaterialsClient
        materials={serialized}
        initialSearch={initialSearch}
        initialCategory={initialCategory}
        categories={materialCategories.map((category) => ({
          id: category.id,
          name: category.nameEn ?? category.id,
          iconKey: category.iconKey,
          count: category.count,
        }))}
      />
    </>
  );
}
