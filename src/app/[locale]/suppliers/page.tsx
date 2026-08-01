import type { Metadata } from "next";
import { desc, asc, eq, sql } from "drizzle-orm";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import { db } from "@/lib/db";
import { enterprises, supplierListings } from "@/lib/db/schema";
import { supplierCategories } from "@/lib/data/suppliers";
import { SuppliersClient, type SerializedSupplier } from "./suppliers-client";
import { JsonLd } from "@/components/json-ld";
import { AskAiButton } from "@/components/ask-ai-button";
import { alternates } from "@/lib/seo";
import { CURRENT_SITE_URL } from "@/lib/sites";
import { SUPPLIER_CATEGORY_PAGES } from "@/lib/data/supplier-category-pages";
import { ArrowRight } from "lucide-react";
export const revalidate = 3600;

const PINNED_SUPPLIER_ID = "sup-yaoyi";
const SUPPLIER_PROVINCES_EN = [
  "Jiangsu",
  "Zhejiang",
  "Shandong",
  "Hebei",
  "Guangdong",
  "Sichuan",
  "Hubei",
  "Anhui",
  "Henan",
  "Shanghai",
  "Chongqing",
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Suppliers" });
  if (locale === "en") {
    return {
      title: {
        absolute:
          "FRP & Composite Suppliers China — Manufacturer Directory | getfrp",
      },
      description:
        "Browse public China FRP supplier profiles by grating, pultruded profile, fiberglass sheet, rebar, pipe, SMC/BMC, resin and fiber capability.",
      alternates: alternates("/suppliers"),
    };
  }
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: alternates("/suppliers"),
  };
}

export default async function SuppliersPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const [{ locale }, sp] = await Promise.all([params, searchParams]);
  setRequestLocale(locale);

  const firstParam = (value: string | string[] | undefined) =>
    Array.isArray(value) ? value[0] ?? "" : value ?? "";
  const initialSearch = firstParam(sp.q).slice(0, 200);
  const initialCategory = firstParam(sp.category);
  const initialRegion = firstParam(sp.region);
  const initialCertification = firstParam(sp.certification);
  const initialProfileStatus = firstParam(sp.profile);

  const t = await getTranslations("Suppliers");

  const isEn = locale === "en";
  const pinnedRank = sql<number>`CASE WHEN ${supplierListings.id} = ${PINNED_SUPPLIER_ID} THEN 1 ELSE 0 END`;
  const tierRank = sql`CASE ${supplierListings.scaleTier} WHEN 'XL' THEN 4 WHEN 'L' THEN 3 WHEN 'M' THEN 2 WHEN 'S' THEN 1 ELSE 0 END`;
  const joinedRows = await db
    .select({
      supplier: supplierListings,
      enterpriseLogo: enterprises.logo,
      enterpriseWebsite: enterprises.website,
      employeeCount: enterprises.employeeCount,
      annualRevenue: enterprises.annualRevenue,
    })
    .from(supplierListings)
    .leftJoin(enterprises, eq(supplierListings.enterpriseId, enterprises.id))
    .orderBy(
      // F1 stays permanently first. Published company profiles follow as one
      // contiguous group, then the remaining directory-only records.
      desc(pinnedRank),
      desc(supplierListings.profilePublished),
      desc(supplierListings.verified),
      desc(supplierListings.brandPriority),
      desc(tierRank),
      desc(supplierListings.viewCount),
      asc(supplierListings.name),
    );
  const rows = joinedRows.map((row) => row.supplier);
  const companyFields = new Map(
    joinedRows.map((row) => [
      row.supplier.id,
      {
        logo: row.supplier.logo ?? row.enterpriseLogo ?? null,
        website: row.supplier.website ?? row.enterpriseWebsite ?? null,
        employeeCount: row.employeeCount ?? null,
        annualRevenue: row.annualRevenue ?? null,
      },
    ]),
  );
  const inLanguage = isEn ? "en" : "zh-CN";
  const top20Verified = rows.filter((s) => s.verified).slice(0, 20);
  const suppliersItemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    url: `${CURRENT_SITE_URL}/suppliers`,
    inLanguage,
    name: t("pageDirectoryTitle"),
    numberOfItems: rows.length,
    itemListElement: top20Verified.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "LocalBusiness",
        name: isEn ? s.nameEn ?? "" : s.name,
        description: isEn ? s.descriptionEn ?? undefined : s.description ?? undefined,
        address: (isEn ? s.locationEn : s.location)
          ? {
              "@type": "PostalAddress",
              addressLocality: (isEn ? s.locationEn : s.location) as string,
              addressCountry: "CN",
            }
          : undefined,
        url:
          s.profilePublished
            ? `${CURRENT_SITE_URL}/suppliers/${s.id}`
            : `${CURRENT_SITE_URL}/suppliers#${s.id}`,
      },
    })),
  };

  const serialized: SerializedSupplier[] = rows.map((s) => {
    const fields = companyFields.get(s.id);
    return {
      id: s.id,
      name: isEn ? s.nameEn ?? "" : s.name,
      category: s.category ?? "",
      location: isEn ? s.locationEn ?? "" : s.location ?? "",
      established: s.established ?? null,
      description:
        isEn ? s.descriptionEn ?? "" : s.description ?? "",
      products: (isEn ? s.productsEn ?? [] : s.products ?? []) as string[],
      processList: (isEn ? s.processListEn ?? [] : s.processList ?? []) as string[],
      certifications: (isEn
        ? s.certificationsEn ?? []
        : s.certifications ?? []) as string[],
      verified: Boolean(s.verified),
      profilePublished: Boolean(s.profilePublished),
      enterpriseId: s.enterpriseId ?? null,
      website: fields?.website ?? null,
      logo: fields?.logo ?? null,
      scaleTier: s.scaleTier ?? null,
      employeeCount: fields?.employeeCount ?? null,
      annualRevenue: fields?.annualRevenue ?? null,
      sponsored: s.id === PINNED_SUPPLIER_ID,
    };
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <JsonLd data={suppliersItemListJsonLd} />
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">{t("pageDirectoryTitle")}</h1>
          <p className="mt-2 text-muted-foreground">{t("subtitle")}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <AskAiButton
            prompt={`Match me a verified Chinese supplier. I'm looking for [fiber type / product category] with [certification, e.g. CE, ISO 9001, EN 13706] and approximate volume [MOQ]. Suggest 3-5 candidates ranked by scale tier and certification fit.`}
            label="Ask AI to match a supplier"
          />
          <Link href={"/rfq" as never} className={buttonVariants()}>
            Submit an RFQ
          </Link>
        </div>
      </div>

      <section id="product-categories" className="mb-10 scroll-mt-20 border-y border-border/70 py-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                BROWSE BY PRODUCT
              </div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                Start with the part or material you need
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
              Product pages apply capability-specific filters and buying checks before you compare company profiles.
            </p>
          </div>
          <div className="mt-6 grid gap-px overflow-hidden rounded-lg border border-border/70 bg-border/70 sm:grid-cols-2 lg:grid-cols-4">
            {SUPPLIER_CATEGORY_PAGES.map((category) => (
              <Link
                key={category.slug}
                href={`/products/${category.slug}` as never}
                className="group flex min-h-28 flex-col justify-between bg-background p-4 transition-colors hover:bg-muted/40"
              >
                <span className="font-semibold">{category.shortName}</span>
                <span className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  Compare capabilities
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
      </section>

      <SuppliersClient
        suppliers={serialized}
        initialSearch={initialSearch}
        initialCategory={initialCategory}
        initialRegion={initialRegion}
        initialCertification={initialCertification}
        initialProfileStatus={initialProfileStatus}
        categories={supplierCategories.map((category) => ({
          id: category.id,
          name: category.nameEn,
        }))}
        provinces={SUPPLIER_PROVINCES_EN}
      />

      <div className="mt-10 rounded-lg border bg-muted/30 p-8 text-center">
        <h3 className="text-xl font-bold">
          Ready to source?
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Email tech support with what you need. First reply within 24 hours, no account required.
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={"/rfq" as never}
            className={buttonVariants({ size: "lg" })}
          >
            Submit an RFQ
          </Link>
          <a
            href="mailto:f1frp2015@gmail.com"
            className={buttonVariants({ size: "lg", variant: "outline" })}
          >
            Email tech support
          </a>
        </div>
      </div>
    </div>
  );
}
