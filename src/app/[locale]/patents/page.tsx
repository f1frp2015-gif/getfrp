import type { Metadata } from "next";
import { and, desc, isNotNull, ne, sql } from "drizzle-orm";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { db } from "@/lib/db";
import { patents as patentsTable } from "@/lib/db/schema";
import {
  patentCategories,
  patentCountries,
  patentStatusLabelsEn,
} from "@/lib/data/patents";
import { PatentsClient, type SerializedPatent } from "./patents-client";
import { alternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Patents" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: alternates("/patents"),
  };
}

export const revalidate = 600;

export default async function PatentsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const rows = await db
    .select({
      id: patentsTable.id,
      slug: patentsTable.slug,
      titleEn: patentsTable.titleEn,
      applicationNo: patentsTable.applicationNo,
      publicationNo: patentsTable.publicationNo,
      grantNo: patentsTable.grantNo,
      applicantEn: patentsTable.applicantEn,
      filingDate: patentsTable.filingDate,
      publicationDate: patentsTable.publicationDate,
      grantDate: patentsTable.grantDate,
      classification: patentsTable.classification,
      status: patentsTable.status,
      countryEn: patentsTable.countryEn,
      countryCode: patentsTable.countryCode,
      category: patentsTable.category,
      categoryEn: patentsTable.categoryEn,
      abstractEn: patentsTable.abstractEn,
      // claims/inventors excluded — only loaded on /patents/[id]
    })
    .from(patentsTable)
    .where(
      and(
        isNotNull(patentsTable.titleEn),
        ne(patentsTable.titleEn, ""),
        sql`COALESCE(${patentsTable.slug}, ${patentsTable.id}) ~ '^[\\x00-\\x7F]+$'`,
      ),
    )
    .orderBy(desc(patentsTable.filingDate));

  const serialized: SerializedPatent[] = rows.map((r) => ({
    id: r.slug ?? r.id,
    title: r.titleEn ?? "",
    titleEn: r.titleEn ?? "",
    applicationNo: r.applicationNo ?? "",
    publicationNo: r.publicationNo ?? "",
    grantNo: r.grantNo ?? "",
    applicant: r.applicantEn ?? "",
    inventors: [],
    filingDate: r.filingDate ?? "",
    publicationDate: r.publicationDate ?? "",
    grantDate: r.grantDate ?? "",
    classification: (r.classification ?? []) as string[],
    status: (r.status ?? "pending") as SerializedPatent["status"],
    country: r.countryEn ?? "",
    countryCode: r.countryCode ?? "",
    category: r.categoryEn ?? "",
    abstract: r.abstractEn ?? "",
  }));

  return (
    <PatentsClient
      patents={serialized}
      categories={patentCategories.map((option) => ({
        id: option.id,
        name: option.nameEn || option.id,
      }))}
      countries={patentCountries.map((option) => ({
        id: option.id,
        name: option.nameEn || option.id.toUpperCase(),
      }))}
      statusLabels={patentStatusLabelsEn}
    />
  );
}
