import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { and, asc, desc, eq, isNotNull, ne, or, sql } from "drizzle-orm";
import { cache } from "react";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  Factory,
  FileCheck2,
  Globe2,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { JsonLd } from "@/components/json-ld";
import { db } from "@/lib/db";
import {
  enterprises,
  materials as materialsTable,
  supplierListings,
} from "@/lib/db/schema";
import {
  getSupplierCategoryPage,
  SUPPLIER_CATEGORY_PAGES,
  supplierMatchesCategory,
  type SupplierCategoryPage,
} from "@/lib/data/supplier-category-pages";
import { provincesEn, supplierCategories } from "@/lib/data/suppliers";
import {
  ALTA_PERFORMANCE_MATERIALS_LEGAL_NAME_EN,
  ALTA_PERFORMANCE_MATERIALS_SUPPLIER_ID,
} from "@/lib/data/alta-performance-materials-supplier-profile";
import {
  AOC_LEGAL_NAME_EN,
  AOC_SUPPLIER_ID,
} from "@/lib/data/aoc-supplier-profile";
import {
  NOAH_COMPOSITES_LEGAL_NAME_EN,
  NOAH_COMPOSITES_SUPPLIER_ID,
} from "@/lib/data/noah-composites-supplier-profile";
import {
  F1_COMPOSITE_ENTERPRISE_ID,
  F1_COMPOSITE_LEGAL_NAME_EN,
  F1_COMPOSITE_SUPPLIER_ID,
} from "@/lib/data/f1-composite-supplier-profile";
import {
  CROTTI_LEGAL_NAME_EN,
  CROTTI_SUPPLIER_ID,
} from "@/lib/data/crotti-supplier-profile";
import {
  SPARE_COMPOSITES_LEGAL_NAME_EN,
  SPARE_COMPOSITES_SUPPLIER_ID,
} from "@/lib/data/spare-composites-supplier-profile";
import {
  STRONGFIBRE_LEGAL_NAME_EN,
  STRONGFIBRE_SUPPLIER_ID,
} from "@/lib/data/strongfibre-supplier-profile";
import { SHENGLI_LIMITED_SUPPLIER_ID } from "@/lib/data/shengli-limited-supplier-profile";
import {
  CURATED_SUPPLIER_PROFILES,
  enrichSupplierWithCuratedProfile,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "@/lib/data/curated-supplier-profiles";
import { buildSupplierSeoBrief } from "@/lib/data/supplier-seo-briefs";
import { alternates, og } from "@/lib/seo";
import { CURRENT_SITE_URL } from "@/lib/sites";
import {
  inferProductPagesForSupplier,
  loadProductsForSupplier,
} from "@/lib/products/queries";
import {
  getSupplierRegionByName,
  getSupplierRegionPage,
  SUPPLIER_REGION_SLUGS,
  type SupplierRegionPage,
} from "@/lib/data/supplier-region-pages";
import {
  SuppliersClient,
  type SerializedSupplier,
} from "../suppliers-client";
import { supplierRouteSlug } from "@/lib/supplier-slugs";
import { SupplierClaimButton } from "@/components/supplier-claim-button";
import { isSupplierProfileIndexable } from "@/lib/supplier-indexability";

export const revalidate = 3600;
export const dynamicParams = true;

const EXTRA_PROVINCES_EN: Record<string, string> = {
  "\u91cd\u5e86": "Chongqing",
  "\u5c71\u897f": "Shanxi",
  "\u5409\u6797": "Jilin",
  "\u5185\u8499\u53e4": "Inner Mongolia",
  "\u9752\u6d77": "Qinghai",
  "\u6c5f\u897f": "Jiangxi",
  "\u9655\u897f": "Shaanxi",
  "\u4e91\u5357": "Yunnan",
  "\u65b0\u7586": "Xinjiang",
  "\u8d35\u5dde": "Guizhou",
  "\u9ed1\u9f99\u6c5f": "Heilongjiang",
  "\u5e7f\u897f": "Guangxi",
  "\u6d77\u5357": "Hainan",
  "\u7518\u8083": "Gansu",
};

function englishProvince(province: string | null): string {
  if (!province) return "China";
  return provincesEn[province] ?? EXTRA_PROVINCES_EN[province] ?? "China";
}

export async function generateStaticParams() {
  let databaseSlugs: string[] = [];
  try {
    const rows = await db
      .select()
      .from(supplierListings)
      .where(
        and(
          isNotNull(supplierListings.slug),
          isNotNull(supplierListings.nameEn),
          ne(supplierListings.nameEn, ""),
        ),
      );
    databaseSlugs = rows
      .map(enrichSupplierWithCuratedProfile)
      .map(supplierRouteSlug);
  } catch {
    // Curated Git-backed profiles remain buildable during a DB outage.
  }
  return Array.from(new Set([
    ...SUPPLIER_REGION_SLUGS,
    ...SUPPLIER_CATEGORY_PAGES.map((page) => page.slug),
    ...getCuratedSupplierSlugs(),
    ...databaseSlugs,
  ])).map((id) => ({ id }));
}

type NetworkRow = SerializedSupplier & {
  province: string;
  exportReady: boolean;
};

type JoinedNetworkRow = {
  supplier: typeof supplierListings.$inferSelect;
  enterpriseLogo: string | null;
  enterpriseWebsite: string | null;
  employeeCount: string | null;
  annualRevenue: string | null;
};

const PINNED_SUPPLIER_ID = F1_COMPOSITE_SUPPLIER_ID;
const DIRECTORY_CATEGORIES = supplierCategories.map((category) => ({
  id: category.id,
  name: category.nameEn,
}));

function serializeNetworkRow(row: JoinedNetworkRow): NetworkRow {
  const supplier = row.supplier;
  return {
    id: supplier.id,
    slug: supplierRouteSlug(supplier),
    name: supplier.nameEn ?? "",
    category: supplier.category ?? "",
    location: supplier.locationEn ?? "",
    established: supplier.established ?? null,
    description: supplier.descriptionEn ?? "",
    products: (supplier.productsEn ?? []) as string[],
    processList: (supplier.processListEn ?? []) as string[],
    certifications: (supplier.certificationsEn ?? []) as string[],
    verified: Boolean(supplier.verified),
    profilePublished: Boolean(supplier.profilePublished),
    enterpriseId: supplier.enterpriseId ?? null,
    website: supplier.website ?? row.enterpriseWebsite ?? null,
    logo: supplier.logo ?? row.enterpriseLogo ?? null,
    scaleTier: supplier.scaleTier ?? null,
    employeeCount: row.employeeCount ?? null,
    annualRevenue: row.annualRevenue ?? null,
    capabilities: supplier.capabilities ?? [],
    standardsSupported: supplier.standardsSupported ?? [],
    moqKg: supplier.moqKg ?? null,
    leadTimeDays: supplier.leadTimeDays ?? null,
    sponsored: supplier.id === PINNED_SUPPLIER_ID,
    province: englishProvince(supplier.province),
    exportReady: Boolean(supplier.exportReady),
  };
}

function publicNetworkRows(rows: JoinedNetworkRow[]): JoinedNetworkRow[] {
  return rows
    .map((row) => ({
      ...row,
      supplier: enrichSupplierWithCuratedProfile(row.supplier),
    }))
    .filter(({ supplier }) => isSupplierProfileIndexable(supplier));
}

function directoryProvinces(rows: NetworkRow[]): string[] {
  return Array.from(
    new Set(rows.map((row) => row.province).filter(Boolean)),
  ).sort((a, b) => a.localeCompare(b));
}

type SupplierProfile = {
  supplier: typeof supplierListings.$inferSelect;
  enterprise: typeof enterprises.$inferSelect | null;
};

const loadSupplierProfile = cache(async (id: string): Promise<SupplierProfile | null> => {
  try {
    const [row] = await db
      .select({ supplier: supplierListings, enterprise: enterprises })
      .from(supplierListings)
      .leftJoin(enterprises, eq(supplierListings.enterpriseId, enterprises.id))
      .where(
        and(
          or(eq(supplierListings.slug, id), eq(supplierListings.id, id)),
          isNotNull(supplierListings.nameEn),
          ne(supplierListings.nameEn, ""),
        ),
      )
      .limit(1);
    if (row) {
      return {
        ...row,
        supplier: enrichSupplierWithCuratedProfile(row.supplier),
      };
    }
  } catch {
    // Curated Git-backed profiles below remain available if the database is
    // temporarily unavailable during a build or request.
  }

  const curatedSupplier = getCuratedSupplierProfile(id);
  return curatedSupplier ? { supplier: curatedSupplier, enterprise: null } : null;
});

function categoryLabel(category: string | null): string {
  const labels: Record<string, string> = {
    manufacturer: "Composite product supplier",
    fiber: "Fiber supplier",
    resin: "Resin supplier",
    additive: "Additives supplier",
    distributor: "Specialty materials distributor",
    equipment: "Equipment supplier",
    mold: "Mold maker",
    tooling: "Tooling / NDT equipment",
    service: "Testing / certification service",
  };
  const value = category ? labels[category] : undefined;
  return value ?? category ?? "Supplier";
}

async function renderSupplierProfile(profile: SupplierProfile) {
  const { supplier, enterprise } = profile;
  const seoBrief = buildSupplierSeoBrief(supplier);
  const isSponsored = supplier.id === F1_COMPOSITE_SUPPLIER_ID;
  const hasGitBackedF1Identity = Boolean(
    isSponsored && supplier.enterpriseId === F1_COMPOSITE_ENTERPRISE_ID,
  );
  const isVerified = Boolean(
    supplier.verified && (enterprise || hasGitBackedF1Identity),
  );
  const isClaimed = Boolean(enterprise || hasGitBackedF1Identity);
  const isShengliLimited = supplier.id === SHENGLI_LIMITED_SUPPLIER_ID;
  const addressCountry = supplier.id === ALTA_PERFORMANCE_MATERIALS_SUPPLIER_ID
    ? "GB"
    : isShengliLimited
      ? "NZ"
      : "CN";
  const name = supplier.nameEn ?? "Supplier";
  const legalName = supplier.id === F1_COMPOSITE_SUPPLIER_ID
    ? F1_COMPOSITE_LEGAL_NAME_EN
    : supplier.id === ALTA_PERFORMANCE_MATERIALS_SUPPLIER_ID
      ? ALTA_PERFORMANCE_MATERIALS_LEGAL_NAME_EN
      : supplier.id === AOC_SUPPLIER_ID
        ? AOC_LEGAL_NAME_EN
        : supplier.id === NOAH_COMPOSITES_SUPPLIER_ID
          ? NOAH_COMPOSITES_LEGAL_NAME_EN
          : supplier.id === CROTTI_SUPPLIER_ID
            ? CROTTI_LEGAL_NAME_EN
            : supplier.id === STRONGFIBRE_SUPPLIER_ID
              ? STRONGFIBRE_LEGAL_NAME_EN
              : supplier.id === SPARE_COMPOSITES_SUPPLIER_ID
                ? SPARE_COMPOSITES_LEGAL_NAME_EN
                : supplier.nameEn ?? name;
  const description = supplier.descriptionEn ?? "";
  const location = supplier.locationEn ?? "China";
  const productNames = (supplier.productsEn ?? []) as string[];
  const structuredProducts = await loadProductsForSupplier(supplier);
  const relatedProductPages = structuredProducts.length === 0
    ? inferProductPagesForSupplier(supplier)
    : [];
  const supplierCategoryPage = SUPPLIER_CATEGORY_PAGES.find((page) =>
    supplierMatchesCategory(page, supplier),
  );
  const supplierRegionPage = getSupplierRegionByName(
    englishProvince(supplier.province),
  );
  const relatedSuppliers = CURATED_SUPPLIER_PROFILES
    .map(({ profile: relatedSupplier }) => relatedSupplier)
    .filter((relatedSupplier) => {
      if (relatedSupplier.id === supplier.id) return false;
      if (supplierCategoryPage) {
        return supplierMatchesCategory(supplierCategoryPage, relatedSupplier);
      }
      return relatedSupplier.category === supplier.category;
    })
    .sort((a, b) => b.brandPriority - a.brandPriority)
    .slice(0, 3);
  const processes = (supplier.processListEn ?? []) as string[];
  const certifications = (supplier.certificationsEn ?? []) as string[];
  const productsServicesSummary =
    supplier.productsServicesSummaryEn ?? description;
  const ecatalogs = (supplier.ecatalogs ?? []).filter(
    (catalog) => Boolean(catalog.titleEn?.trim()),
  );
  const website = supplier.website ?? enterprise?.website ?? null;
  const logo = supplier.logo ?? enterprise?.logo ?? null;
  const logoNeedsDarkBackground = Boolean(
    logo?.includes("zhongfu-shenying") ||
    logo?.includes("alta-performance-materials-logo") ||
    logo?.includes("strongfibre") ||
    logo?.includes("aoc-logo-white") ||
    logo?.includes("runsing-logo") ||
    logo?.includes("tengjun-frp-logo") ||
    logo?.includes("pulwell-logo") ||
    logo?.includes("zhejiang-huafeng-logo"),
  );
  const structuredLogo = logo
    ? new URL(logo, CURRENT_SITE_URL).toString()
    : null;
  const contactEmail = supplier.contactEmail ?? enterprise?.contactEmail ?? null;
  const contactPhone = supplier.contactPhone ?? enterprise?.contactPhone ?? null;
  const address = supplier.address ?? null;
  const phoneHref = contactPhone
    ? `tel:${contactPhone.trim().startsWith("+") ? contactPhone.replace(/[^\d+]/g, "") : `+86${contactPhone.replace(/\D/g, "")}`}`
    : null;
  const routeSlug = supplierRouteSlug(supplier);
  const pageUrl = `${CURRENT_SITE_URL}/suppliers/${routeSlug}`;
  const profileKind = isVerified
    ? "verified company profile"
    : isClaimed
      ? "claimed company profile"
      : "public company profile";
  const profileJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: `${name} — ${profileKind}`,
    abstract: seoBrief.searchIntent,
    inLanguage: "en",
    dateModified: (supplier.profileReviewedAt ?? supplier.updatedAt).toISOString(),
    isPartOf: { "@id": `${CURRENT_SITE_URL}/#website` },
    mainEntity: {
      "@type": "Organization",
      "@id": `${pageUrl}#organization`,
      name,
      legalName,
      url: website ?? pageUrl,
      sameAs: website ? [website] : undefined,
      logo: structuredLogo ?? undefined,
      foundingDate: supplier.established ? String(supplier.established) : undefined,
      description,
      email: contactEmail ?? undefined,
      telephone: contactPhone ?? undefined,
      address: location
        ? {
            "@type": "PostalAddress",
            streetAddress: address ?? undefined,
            addressLocality: location,
            addressCountry,
          }
        : undefined,
      knowsAbout: [
        ...productNames,
        ...processes,
      ],
      subjectOf: ecatalogs.map((catalog) => ({
        "@type": "CreativeWork",
        name: catalog.titleEn ?? "Product catalog",
        url: catalog.url,
        encodingFormat: catalog.format ?? "application/pdf",
      })),
    },
  };

  const labels = {
        home: "Home",
        suppliers: "Suppliers",
        eyebrow: isVerified ? "VERIFIED COMPANY PROFILE" : isClaimed ? "CLAIMED COMPANY PROFILE" : "PUBLIC COMPANY PROFILE",
        verified: isVerified ? "Verified business profile" : isClaimed ? "Claimed company profile" : "Public profile · Not claimed",
        legal: "Legal entity",
        established: isVerified
          ? "Legal entity established"
          : supplier.category === "distributor"
            ? "Legal entity established"
          : isShengliLimited
            ? "Operating since (company statement)"
            : "Manufacturing since (company statement)",
        location: "Location",
        category: "Business type",
        about: "Company overview",
        products: "Products and supply scope",
        processes: "Capabilities and services",
        certifications: isVerified ? "Document-backed certifications" : "Company-published certifications",
        noCerts: "No company-level certification is listed on this profile.",
        productsServices: "Products & services summary",
        sourcingReview: "Procurement review",
        applications: "Application fit to evaluate",
        qualification: "Supplier qualification checks",
        evidence: "Evidence and review scope",
        ecatalog: "eCatalog",
        ecatalogSub: "Official product catalogs, web directories and technical guides published by the supplier.",
        openCatalog: "Open catalog",
        contact: isVerified ? "Official company contact" : "Public company contact",
        contactSupplier: isVerified ? "Contact supplier" : "Send inquiry via GetFRP",
        website: "Visit official website",
        verification: isVerified ? "What GetFRP verified" : "Profile status",
        verifyItems: isVerified
          ? [
              "The business identity is linked to an approved GetFRP enterprise record.",
              "The official website and company-domain contact match this profile.",
              "Product and certification claims remain subject to document-level review.",
            ]
          : [
              "GetFRP compiled this profile from the company's official website.",
              "The website, published contact email and telephone are provided as contact references.",
              "The company has not claimed or completed business-identity verification for this profile.",
            ],
        note: isVerified
          ? "The verified badge covers the business identity and official-domain association. It does not certify every product, standard or performance claim."
          : "Company, product and certification statements are attributed to the official website and have not been independently audited by GetFRP.",
      };

  return (
    <main>
      <JsonLd data={profileJsonLd} />
      <BreadcrumbJsonLd
        items={[
          { name: labels.home, url: `${CURRENT_SITE_URL}/` },
          { name: labels.suppliers, url: `${CURRENT_SITE_URL}/suppliers` },
          { name, url: pageUrl },
        ]}
      />

      <section className="border-b border-border/80">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <nav className="text-xs text-muted-foreground" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-foreground">{labels.home}</Link>
            <span className="mx-2">›</span>
            <Link href="/suppliers" className="hover:text-foreground">{labels.suppliers}</Link>
            <span className="mx-2">›</span>
            <span>{name}</span>
          </nav>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px]">
            <div className="min-w-0">
              <div className="flex flex-col items-start gap-5 sm:flex-row">
                {logo ? (
                  // Supplier logos have very different source aspect ratios.
                  // Use a generous, centered box and preserve each source's
                  // intrinsic ratio so wide wordmarks remain legible without
                  // stretching or cropping.
                  <div className={`flex h-24 w-full shrink-0 items-center justify-center rounded-xl border border-border/70 p-3 sm:h-28 sm:w-64 sm:p-4 ${logoNeedsDarkBackground ? "bg-[#1b2430]" : "bg-white"}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={logo}
                      alt={`${name} logo`}
                      className="block h-auto max-h-full w-auto max-w-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex h-24 w-full shrink-0 items-center justify-center rounded-xl border border-border/70 bg-muted text-2xl font-semibold sm:h-28 sm:w-64">
                    {name.slice(0, 2).toUpperCase()}
                  </div>
                )}
                <div className="min-w-0 sm:flex-1">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {labels.eyebrow}
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <h1 className="text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">{name}</h1>
                    {isSponsored && isVerified ? (
                      <Badge className="gap-1.5 border border-amber-300 bg-amber-50 text-amber-900 shadow-none hover:bg-amber-50">
                        <ShieldCheck size={13} /> Sponsored · Verified Supplier
                      </Badge>
                    ) : (
                      <Badge variant={isVerified ? "default" : "outline"} className="gap-1.5"><ShieldCheck size={13} />{labels.verified}</Badge>
                    )}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">{legalName}{location ? ` · ${location}` : ""}</div>
                  <p className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-foreground/85">
                    {seoBrief.positioning}
                  </p>
                </div>
              </div>
              <p className="mt-5 max-w-3xl text-[16px] leading-7 text-muted-foreground">{description}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                <Link
                  href={`/rfq?supplier=${encodeURIComponent(supplier.id)}` as never}
                  className={buttonVariants()}
                >
                  {labels.contactSupplier} <ArrowRight size={15} />
                </Link>
                {website && (
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ variant: "outline" })}
                  >
                    {labels.website} <ExternalLink size={15} />
                  </a>
                )}
                {contactPhone && phoneHref && (
                  <a href={phoneHref} className={buttonVariants({ variant: "outline" })}>
                    <Phone size={15} /> {contactPhone}
                  </a>
                )}
              </div>
              {!isClaimed && (
                <div className="mt-6 rounded-xl border border-dashed border-primary/40 bg-primary/[0.04] p-4">
                  <div className="flex items-start gap-3">
                    <ShieldCheck size={18} className="mt-0.5 shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-semibold">Is this your business?</p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        Register or sign in to claim your company, update this public profile and respond to buyer inquiries.
                      </p>
                      <div className="mt-3">
                        <SupplierClaimButton
                          supplierId={supplier.id}
                          supplierName={name}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <aside className="rounded-xl border border-border/70 bg-muted/20 p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{labels.verification}</div>
              <ul className="mt-4 space-y-3 text-[13px] leading-relaxed text-muted-foreground">
                {labels.verifyItems.map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-foreground" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-border/70 pt-4 text-[11px] leading-relaxed text-muted-foreground">{labels.note}</p>
            </aside>
          </div>
        </div>
      </section>

      <nav className="border-b border-border/80 bg-background" aria-label="Company profile sections">
        <div className="mx-auto flex max-w-6xl gap-6 overflow-x-auto px-4 py-3 text-sm font-medium sm:px-6">
          <a href="#company-profile" className="whitespace-nowrap hover:text-primary">{labels.about}</a>
          <a href="#products-services" className="whitespace-nowrap hover:text-primary">{labels.productsServices}</a>
          <a href="#sourcing-review" className="whitespace-nowrap hover:text-primary">{labels.sourcingReview}</a>
          <a href="#qualification" className="whitespace-nowrap hover:text-primary">{labels.qualification}</a>
          <a href="#ecatalog" className="whitespace-nowrap hover:text-primary">{labels.ecatalog}</a>
          <a href="#contact" className="whitespace-nowrap hover:text-primary">{labels.contact}</a>
        </div>
      </nav>

      <section className="border-b border-border/80 bg-muted/15">
        <div className="mx-auto grid max-w-6xl gap-3 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          <div className="rounded-xl border border-border/70 bg-background p-5"><Building2 size={18} /><div className="mt-3 text-xs text-muted-foreground">{labels.legal}</div><div className="mt-1 text-sm font-semibold">{legalName}</div></div>
          <div className="rounded-xl border border-border/70 bg-background p-5"><CalendarDays size={18} /><div className="mt-3 text-xs text-muted-foreground">{labels.established}</div><div className="mt-1 text-sm font-semibold">{supplier.established ?? "—"}</div></div>
          <div className="rounded-xl border border-border/70 bg-background p-5"><MapPin size={18} /><div className="mt-3 text-xs text-muted-foreground">{labels.location}</div><div className="mt-1 text-sm font-semibold">{location || "China"}</div></div>
          <div className="rounded-xl border border-border/70 bg-background p-5"><Factory size={18} /><div className="mt-3 text-xs text-muted-foreground">{labels.category}</div><div className="mt-1 text-sm font-semibold">{categoryLabel(supplier.category)}</div></div>
        </div>
      </section>

      <section id="company-profile" className="scroll-mt-20 border-b border-border/80">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_340px]">
          <div className="min-w-0 space-y-10">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{labels.about}</div>
              <div className="mt-4 space-y-4 text-[15px] leading-7 text-muted-foreground">
                {seoBrief.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
            <div id="products-services" className="scroll-mt-20">
              <h2 className="text-xl font-semibold">{labels.productsServices}</h2>
              <p className="mt-3 text-[15px] leading-7 text-muted-foreground">{productsServicesSummary}</p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold">{labels.products}</h3>
                  <div className="mt-3 grid gap-2">
                    {structuredProducts.map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.slug}` as never}
                        className="flex items-center justify-between rounded-lg border border-border/70 px-3 py-2.5 text-sm font-medium hover:border-foreground/40"
                      >
                        {product.shortName ?? product.nameEn}
                        <ArrowRight size={14} />
                      </Link>
                    ))}
                    {relatedProductPages.map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.slug}` as never}
                        className="flex items-center justify-between rounded-lg border border-dashed border-border/70 px-3 py-2.5 text-sm font-medium hover:border-foreground/40"
                      >
                        <span>
                          {product.shortName ?? product.nameEn}
                          <span className="mt-0.5 block text-[10px] font-normal text-muted-foreground">
                            Related specification · capability checked at RFQ
                          </span>
                        </span>
                        <ArrowRight size={14} />
                      </Link>
                    ))}
                  </div>
                  {productNames.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {productNames.map((item) => <Badge key={item} variant="outline" className="h-auto max-w-full whitespace-normal break-words px-3 py-1.5 text-left leading-snug">{item}</Badge>)}
                    </div>
                  )}
                </div>
                <div className="min-w-0"><h3 className="text-sm font-semibold">{labels.processes}</h3><div className="mt-3 flex flex-wrap gap-2">{processes.map((item) => <Badge key={item} variant="secondary" className="h-auto max-w-full whitespace-normal break-words px-3 py-1.5 text-left leading-snug">{item}</Badge>)}</div></div>
              </div>
            </div>
            <div><h2 className="text-xl font-semibold">{labels.certifications}</h2>{certifications.length > 0 ? <div className="mt-4 flex flex-wrap gap-2">{certifications.map((item) => <Badge key={item} variant="outline" className="h-auto max-w-full whitespace-normal break-words border-amber-400 px-3 py-1.5 text-left leading-snug text-amber-700">{item}</Badge>)}</div> : <p className="mt-3 text-sm text-muted-foreground">{labels.noCerts}</p>}</div>

            <section id="sourcing-review" className="scroll-mt-20 space-y-9 border-t border-border/70 pt-10">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">SOURCE-REVIEWED PROCUREMENT PROFILE</div>
                <h2 className="mt-3 text-2xl font-semibold">How to evaluate {name} for {seoBrief.topicLabel}</h2>
                <p className="mt-4 text-[15px] leading-7 text-muted-foreground">{seoBrief.searchIntent}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Published product scope, translated into buying checks</h3>
                <div className="mt-4 grid gap-4">
                  {seoBrief.productNotes.map((item) => (
                    <article key={item.title} className="rounded-xl border border-border/70 bg-muted/15 p-5">
                      <h4 className="font-semibold leading-snug">{item.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  {supplier.category === "distributor"
                    ? "Distribution and technical-service review"
                    : "Manufacturing and service capability review"}
                </h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {seoBrief.capabilityNotes.map((item) => (
                    <article key={item.title} className="rounded-xl border border-border/70 p-5">
                      <h4 className="font-semibold leading-snug">{item.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold">{labels.applications}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  These are sourcing contexts suggested by the published product scope, not confirmed project references. Validate the exact application, design basis and evidence in the RFQ.
                </p>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {seoBrief.applicationNotes.map((item) => (
                    <article key={item.title} className="rounded-xl border border-border/70 bg-background p-5">
                      <h4 className="text-sm font-semibold leading-snug">{item.title}</h4>
                      <p className="mt-2 text-xs leading-5 text-muted-foreground">{item.body}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section id="qualification" className="scroll-mt-20 space-y-9 border-t border-border/70 pt-10">
              <div>
                <h2 className="text-2xl font-semibold">{labels.qualification}</h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {seoBrief.qualificationChecks.map((check) => (
                    <div key={check} className="flex gap-3 rounded-xl border border-border/70 p-4 text-sm leading-6 text-muted-foreground">
                      <CheckCircle2 size={16} className="mt-1 shrink-0 text-foreground" />
                      <span>{check}</span>
                    </div>
                  ))}
                </div>
              </div>

              {seoBrief.supplementalGuidance.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold">Category-specific sourcing guidance</h3>
                  <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground">
                    {seoBrief.supplementalGuidance.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-lg font-semibold">What to include in an RFQ</h3>
                <ol className="mt-4 space-y-3">
                  {seoBrief.rfqChecklist.map((item, index) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border text-[11px] font-semibold text-foreground">{index + 1}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            <section className="space-y-7 border-t border-border/70 pt-10">
              <div>
                <h2 className="text-2xl font-semibold">{labels.evidence}</h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground">
                  {seoBrief.evidenceNotes.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </div>

              {(supplierCategoryPage || supplierRegionPage || relatedSuppliers.length > 0) && (
                <div>
                  <h3 className="text-lg font-semibold">Continue the sourcing comparison</h3>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {supplierCategoryPage && (
                      <Link href={`/suppliers/${supplierCategoryPage.slug}` as never} className="rounded-xl border border-border/70 p-4 text-sm font-semibold hover:border-foreground/40">
                        Compare China {supplierCategoryPage.shortName} suppliers <ArrowRight size={14} className="ml-1 inline" />
                      </Link>
                    )}
                    {supplierRegionPage && (
                      <Link href={`/suppliers/${supplierRegionPage.slug}` as never} className="rounded-xl border border-border/70 p-4 text-sm font-semibold hover:border-foreground/40">
                        Explore {supplierRegionPage.name} composite suppliers <ArrowRight size={14} className="ml-1 inline" />
                      </Link>
                    )}
                    {relatedSuppliers.map((relatedSupplier) => (
                      <Link key={relatedSupplier.id} href={`/suppliers/${supplierRouteSlug(relatedSupplier)}` as never} className="rounded-xl border border-border/70 p-4 text-sm font-semibold hover:border-foreground/40">
                        {relatedSupplier.nameEn} <ArrowRight size={14} className="ml-1 inline" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </section>

            <div id="ecatalog" className="scroll-mt-20">
              <h2 className="text-xl font-semibold">{labels.ecatalog}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{labels.ecatalogSub}</p>
              {ecatalogs.length > 0 ? (
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {ecatalogs.map((catalog) => {
                    const catalogTitle = catalog.titleEn ?? "Product catalog";
                    const catalogDescription = catalog.descriptionEn;
                    return (
                      <a
                        key={catalog.url}
                        href={catalog.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group rounded-xl border border-border/70 bg-background p-5 transition-colors hover:border-foreground/40"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <FileCheck2 size={20} className="shrink-0" />
                          <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{catalog.format ?? "PDF"}</span>
                        </div>
                        <h3 className="mt-4 font-semibold group-hover:underline">{catalogTitle}</h3>
                        {catalogDescription && <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{catalogDescription}</p>}
                        <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium">{labels.openCatalog}<ExternalLink size={12} /></span>
                      </a>
                    );
                  })}
                </div>
              ) : (
                <p className="mt-4 text-sm text-muted-foreground">No eCatalog has been published yet.</p>
              )}
            </div>
          </div>

          <aside id="contact" className="h-fit min-w-0 scroll-mt-20 rounded-xl border border-border/70 bg-background p-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{labels.contact}</div>
            <Link href={`/rfq?supplier=${encodeURIComponent(supplier.id)}` as never} className={`${buttonVariants()} mt-5 w-full`}>
              {labels.contactSupplier} <ArrowRight size={15} />
            </Link>
            <div className="mt-5 space-y-4 text-sm">
              {website && <a href={website} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:underline"><Globe2 size={16} className="mt-0.5 shrink-0" /><span>{website.replace(/^https?:\/\//, "").replace(/\/$/, "")}</span></a>}
              {contactEmail && <a href={`mailto:${contactEmail}`} className="flex items-start gap-3 hover:underline"><Mail size={16} className="mt-0.5 shrink-0" /><span>{contactEmail}</span></a>}
              {contactPhone && phoneHref && <a href={phoneHref} className="flex items-start gap-3 hover:underline"><Phone size={16} className="mt-0.5 shrink-0" /><span>{contactPhone}</span></a>}
              {address && <div className="flex items-start gap-3 text-muted-foreground"><MapPin size={16} className="mt-0.5 shrink-0" /><span>{address}</span></div>}
            </div>
            {!isClaimed && (
              <div className="mt-6 border-t border-border/70 pt-5">
                <p className="text-sm font-semibold">Is this your business?</p>
                <Link
                  href={`/sign-up?intent=supplier&redirect_url=${encodeURIComponent(`/suppliers/claim?supplier=${routeSlug}`)}` as never}
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  Claim your company <ArrowRight size={14} />
                </Link>
              </div>
            )}
          </aside>
        </div>
      </section>
    </main>
  );
}

async function loadCategoryNetwork(
  category: SupplierCategoryPage,
): Promise<NetworkRow[]> {
  try {
    const pinnedRank = sql<number>`CASE WHEN ${supplierListings.id} = ${PINNED_SUPPLIER_ID} THEN 1 ELSE 0 END`;
    const tierRank = sql`CASE ${supplierListings.scaleTier} WHEN 'XL' THEN 4 WHEN 'L' THEN 3 WHEN 'M' THEN 2 WHEN 'S' THEN 1 ELSE 0 END`;
    const rows = await db
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
        desc(pinnedRank),
        desc(supplierListings.profilePublished),
        desc(supplierListings.verified),
        desc(supplierListings.brandPriority),
        desc(tierRank),
        desc(supplierListings.viewCount),
        asc(supplierListings.name),
      );
    return publicNetworkRows(rows)
      .filter((row) => supplierMatchesCategory(category, row.supplier))
      .map(serializeNetworkRow);
  } catch {
    return [];
  }
}

function normalizedCerts(row: NetworkRow): string[] {
  return Array.from(
    new Set(
      row.certifications
        .map((cert) => cert.trim())
        .filter(Boolean),
    ),
  );
}

const CATEGORY_SEO_TITLES: Record<string, string> = {
  "frp-grating": "FRP Grating Suppliers China — Manufacturer Directory | getfrp",
  "pultruded-profiles": "Pultruded FRP Profile Suppliers China — Manufacturer Directory | getfrp",
  "fiberglass-sheet": "Fiberglass Sheet Suppliers China — Manufacturer Directory | getfrp",
  "frp-rebar": "FRP Rebar Suppliers China — Manufacturer Directory | getfrp",
  "frp-pipe": "FRP Pipe Suppliers China — Manufacturer Directory | getfrp",
  "smc-bmc": "SMC BMC Manufacturers China — Supplier Directory | getfrp",
  "resin-gelcoat": "FRP Resin & Gelcoat Manufacturers China — Supplier Directory | getfrp",
  "fiber-glass": "Fiberglass & Composite Fiber Suppliers China | getfrp",
};

const CATEGORY_STANDARD_LINKS: Record<string, Array<{ id: string; label: string }>> = {
  "frp-grating": [
    { id: "cn-002", label: "GB/T 1447 — tensile properties of FRP" },
    { id: "cn-004", label: "GB/T 1449 — flexural properties of FRP" },
  ],
  "pultruded-profiles": [
    { id: "cn-006", label: "GB/T 1451 — short-beam strength" },
    { id: "cn-009", label: "GB/T 3354 — tensile properties of carbon fibre" },
  ],
  "fiberglass-sheet": [
    { id: "cn-002", label: "GB/T 1447 — tensile properties of FRP" },
    { id: "cn-004", label: "GB/T 1449 — flexural properties of FRP" },
  ],
  "frp-rebar": [
    { id: "cn-002", label: "GB/T 1447 — tensile properties of FRP" },
    { id: "cn-005", label: "GB/T 1450.1 — shear strength" },
  ],
  "frp-pipe": [
    { id: "cn-003", label: "GB/T 1448 — compression properties of FRP" },
    { id: "cn-006", label: "GB/T 1451 — short-beam strength" },
  ],
  "smc-bmc": [
    { id: "cn-002", label: "GB/T 1447 — tensile properties of FRP" },
    { id: "cn-004", label: "GB/T 1449 — flexural properties of FRP" },
  ],
  "resin-gelcoat": [
    { id: "cn-001", label: "GB/T 1446 — general test methods" },
    { id: "cn-010", label: "GB/T 3355 — compressive properties of carbon fibre" },
  ],
  "fiber-glass": [
    { id: "cn-007", label: "GB/T 1458 — winding-tube tensile test" },
    { id: "cn-009", label: "GB/T 3354 — tensile properties of carbon fibre" },
  ],
};

type RelatedMaterial = { id: string; name: string; category: string | null };

async function loadRelatedMaterials(category: SupplierCategoryPage): Promise<RelatedMaterial[]> {
  try {
    const rows = await db
      .select({
        id: materialsTable.id,
        name: materialsTable.nameEn,
        category: materialsTable.category,
      })
      .from(materialsTable)
      .where(
        and(
          eq(materialsTable.status, "verified"),
          isNotNull(materialsTable.nameEn),
          ne(materialsTable.nameEn, ""),
        ),
      )
      .limit(400);
    const terms = category.match.keywords.map((term) => term.toLowerCase());
    return rows
      .filter((row) => {
        const haystack = `${row.name ?? ""} ${row.category ?? ""}`.toLowerCase();
        return terms.some((term) => haystack.includes(term));
      })
      .slice(0, 6)
      .map((row) => ({
        id: row.id,
        name: row.name ?? row.id,
        category: row.category,
      }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata> {
  const { locale, id } = await params;
  const category = getSupplierCategoryPage(id);
  const region = getSupplierRegionPage(id);
  if (locale === "en" && region) {
    const title = `FRP Manufacturers in ${region.name}, China | getfrp`;
    return {
      title: { absolute: title },
      description: region.summary,
      alternates: alternates(`/suppliers/${region.slug}`),
      openGraph: og(`/suppliers/${region.slug}`, { title, description: region.summary }),
    };
  }
  if (locale === "en" && category) {
    const title = CATEGORY_SEO_TITLES[category.slug] ??
      `${category.name} Suppliers China — Manufacturer Directory | getfrp`;
    return {
      title: { absolute: title },
      description: category.summary,
      alternates: alternates(`/suppliers/${category.slug}`),
      openGraph: og(`/suppliers/${category.slug}`, {
        title,
        description: category.summary,
      }),
    };
  }
  const profile = await loadSupplierProfile(id);
  if (!profile) {
    return {
      robots: { index: false, follow: false },
      alternates: alternates(`/suppliers/${id}`),
    };
  }
  const seoBrief = buildSupplierSeoBrief(profile.supplier);
  const routeSlug = supplierRouteSlug(profile.supplier);
  const title = seoBrief.pageTitle;
  const description = seoBrief.metaDescription;
  const indexable = isSupplierProfileIndexable(profile.supplier);
  return {
    title: { absolute: title },
    description,
    alternates: alternates(`/suppliers/${routeSlug}`),
    openGraph: og(`/suppliers/${routeSlug}`, {
      title,
      description,
    }),
    robots: { index: indexable, follow: true },
  };
}

async function loadRegionNetwork(region: SupplierRegionPage): Promise<NetworkRow[]> {
  try {
    const pinnedRank = sql<number>`CASE WHEN ${supplierListings.id} = ${PINNED_SUPPLIER_ID} THEN 1 ELSE 0 END`;
    const tierRank = sql`CASE ${supplierListings.scaleTier} WHEN 'XL' THEN 4 WHEN 'L' THEN 3 WHEN 'M' THEN 2 WHEN 'S' THEN 1 ELSE 0 END`;
    const rows = await db
      .select({
        supplier: supplierListings,
        enterpriseLogo: enterprises.logo,
        enterpriseWebsite: enterprises.website,
        employeeCount: enterprises.employeeCount,
        annualRevenue: enterprises.annualRevenue,
      })
      .from(supplierListings)
      .leftJoin(enterprises, eq(supplierListings.enterpriseId, enterprises.id))
      .where(eq(supplierListings.province, region.provinceToken))
      .orderBy(
        desc(pinnedRank),
        desc(supplierListings.profilePublished),
        desc(supplierListings.verified),
        desc(supplierListings.brandPriority),
        desc(tierRank),
        desc(supplierListings.viewCount),
        asc(supplierListings.name),
      );
    return publicNetworkRows(rows).map(serializeNetworkRow);
  } catch {
    return [];
  }
}

async function renderRegionPage(region: SupplierRegionPage) {
  const network = await loadRegionNetwork(region);
  const provinceCount = network.length;
  const certCount = network.filter((row) => normalizedCerts(row).length > 0).length;
  const exportReadyCount = network.filter((row) => row.exportReady).length;
  const pageUrl = `${CURRENT_SITE_URL}/suppliers/${region.slug}`;
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: region.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `FRP & Composite Manufacturers in ${region.name}, China`,
    description: region.summary,
    url: pageUrl,
    inLanguage: "en",
    isPartOf: { "@id": `${CURRENT_SITE_URL}/#website` },
    about: { "@type": "Place", name: `${region.name}, China` },
    mainEntity: {
      "@type": "ItemList",
      name: `Public FRP capability records in ${region.name}`,
      numberOfItems: provinceCount,
    },
  };

  return (
    <main>
      <JsonLd data={collectionJsonLd} />
      <JsonLd data={faqJsonLd} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${CURRENT_SITE_URL}/` },
          { name: "Suppliers", url: `${CURRENT_SITE_URL}/suppliers` },
          { name: region.name, url: pageUrl },
        ]}
      />
      <section className="border-b border-border/80">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <nav className="text-xs text-muted-foreground" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/suppliers" className="hover:text-foreground">Suppliers</Link>
            <span className="mx-2">›</span>
            <span>{region.name}</span>
          </nav>
          <div className="mt-6 max-w-4xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              VERIFIED REGIONAL CLUSTER
            </div>
            <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
              FRP &amp; Composite Manufacturers in {region.name}, China
            </h1>
            <p className="mt-5 max-w-3xl text-[16px] leading-7 text-muted-foreground">
              {region.summary}
            </p>
          </div>
          <div className="mt-9 grid grid-cols-2 gap-3 md:grid-cols-4">
            <div className="rounded-xl border border-border/70 bg-background p-5"><Factory size={18} strokeWidth={1.5} /><div className="mt-4 text-3xl font-semibold">{provinceCount}</div><div className="mt-1 text-xs text-muted-foreground">Public regional records</div></div>
            <div className="rounded-xl border border-border/70 bg-background p-5"><MapPin size={18} strokeWidth={1.5} /><div className="mt-4 text-3xl font-semibold">{region.categoryFocus.length}+</div><div className="mt-1 text-xs text-muted-foreground">Priority categories</div></div>
            <div className="rounded-xl border border-border/70 bg-background p-5"><FileCheck2 size={18} strokeWidth={1.5} /><div className="mt-4 text-3xl font-semibold">{certCount || "RFQ"}</div><div className="mt-1 text-xs text-muted-foreground">Records with documents</div></div>
            <div className="rounded-xl border border-border/70 bg-background p-5"><ShieldCheck size={18} strokeWidth={1.5} /><div className="mt-4 text-3xl font-semibold">{exportReadyCount || "QA"}</div><div className="mt-1 text-xs text-muted-foreground">Export-ready matches</div></div>
          </div>
          <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">Public regional records are searchable here. Verification status and certificate scope are rechecked against the requested product before release.</p>
        </div>
      </section>

      <section className="border-b border-border/80">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">REGIONAL CAPABILITY OVERVIEW</div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">How to use the {region.name} cluster</h2>
          <div className="mt-5 max-w-4xl space-y-4 text-[15px] leading-7 text-muted-foreground">
            {region.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section className="border-b border-border/80 bg-muted/15">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">PRIORITY CATEGORIES</div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">Move from province to product specification</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {region.categoryFocus.map((focus) => (
              <Link key={focus.slug} href={`/products/${focus.slug}` as never} className="rounded-xl border border-border/70 bg-background p-5 transition-colors hover:border-foreground/40">
                <div className="flex items-center justify-between gap-2"><span className="font-semibold">{focus.label}</span><ArrowRight size={15} /></div>
                <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">{focus.note}</p>
                <span className="mt-4 inline-block text-xs underline underline-offset-4">View public network</span>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <Link href="/sourcing/gb-vs-astm-frp" className="rounded-md border border-border px-4 py-2 hover:bg-background">GB ↔ ASTM ↔ ISO ↔ EN sourcing guide</Link>
            <Link href="/source-from-china" className="rounded-md border border-border px-4 py-2 hover:bg-background">China sourcing playbook</Link>
            <Link href="/products" className="rounded-md border border-border px-4 py-2 hover:bg-background">Browse product specifications</Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border/80">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">PUBLIC NETWORK COMPOSITION</div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">Capability records in the {region.name} cluster</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Search and compare every matched company in the same one-supplier-per-row directory used across GetFRP. Company scale, products, website, verification and profile status remain visible.
          </p>
          <div className="mt-8">
            <SuppliersClient
              suppliers={network}
              categories={DIRECTORY_CATEGORIES}
              provinces={directoryProvinces(network)}
            />
          </div>
        </div>
      </section>

      <section className="border-b border-border/80">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">REGIONAL FAQ</div>
          <div className="mt-7 divide-y divide-border/70 border-y border-border/70">{region.faqs.map((faq) => <article key={faq.question} className="py-6"><h3 className="text-base font-semibold">{faq.question}</h3><p className="mt-2 text-[14px] leading-7 text-muted-foreground">{faq.answer}</p></article>)}</div>
        </div>
      </section>

      <section className="bg-foreground py-14 text-background"><div className="mx-auto max-w-3xl px-4 text-center sm:px-6"><div className="font-mono text-[10px] uppercase tracking-[0.18em] text-background/65">MATCHED WITHIN 24 HOURS</div><h2 className="mt-3 text-3xl font-semibold tracking-tight">Need a {region.name} capability checked?</h2><p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-background/75">Send the product, standards, quantity, destination and evidence requirements. We compare the regional cluster with the wider verified network and return a controlled shortlist.</p><div className="mt-7 flex flex-wrap justify-center gap-3"><Link href="/rfq" className={buttonVariants({ size: "lg", variant: "secondary" })}>Submit RFQ <ArrowRight size={15} /></Link><Link href="/suppliers" className="inline-flex items-center rounded-md border border-background/30 px-5 py-2.5 text-sm hover:bg-background/10">Browse all suppliers</Link></div></div></section>
    </main>
  );
}

export default async function SupplierCategoryPageRoute({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  setRequestLocale(locale);
  const category = getSupplierCategoryPage(id);
  const region = getSupplierRegionPage(id);
  if (region) {
    if (locale !== "en") notFound();
    return renderRegionPage(region);
  }
  if (!category) {
    const profile = await loadSupplierProfile(id);
    if (!profile) notFound();
    const canonicalSlug = supplierRouteSlug(profile.supplier);
    if (id !== canonicalSlug) permanentRedirect(`/suppliers/${canonicalSlug}`);
    return await renderSupplierProfile(profile);
  }
  if (locale !== "en") notFound();

  const network = await loadCategoryNetwork(category);
  const relatedMaterials = await loadRelatedMaterials(category);
  const provinceCounts = new Map<string, number>();
  for (const row of network) {
    if (!row.province) continue;
    const label = row.province;
    provinceCounts.set(label, (provinceCounts.get(label) ?? 0) + 1);
  }
  const provinces = [...provinceCounts.entries()].sort((a, b) => b[1] - a[1]);
  const provinceCount =
    provinces.length || Object.keys(category.provinceNotes).length;
  const documentedCount = network.filter(
    (row) => normalizedCerts(row).length > 0,
  ).length;
  const exportReadyCount = network.filter((row) => row.exportReady).length;

  const pageUrl = `${CURRENT_SITE_URL}/suppliers/${category.slug}`;
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: category.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `China ${category.name} Manufacturers — Public Supplier Network`,
    description: category.summary,
    url: pageUrl,
    inLanguage: "en",
    isPartOf: { "@id": `${CURRENT_SITE_URL}/#website` },
    about: {
      "@type": "Thing",
      name: `${category.name} manufacturing in China`,
    },
    mainEntity: {
      "@type": "ItemList",
      name: `Public ${category.name} supplier records`,
      numberOfItems: network.length,
    },
  };

  return (
    <main>
      <JsonLd data={collectionJsonLd} />
      <JsonLd data={faqJsonLd} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${CURRENT_SITE_URL}/` },
          { name: "Suppliers", url: `${CURRENT_SITE_URL}/suppliers` },
          { name: category.shortName, url: pageUrl },
        ]}
      />

      <section className="border-b border-border/80">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <nav className="text-xs text-muted-foreground" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/suppliers" className="hover:text-foreground">Suppliers</Link>
            <span className="mx-2">›</span>
            <span>{category.shortName}</span>
          </nav>
          <div className="mt-6 max-w-4xl">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              PUBLIC CHINA SUPPLY NETWORK
            </div>
            <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
              China {category.name} Manufacturers — Public Supplier Network
            </h1>
            <p className="mt-5 max-w-3xl text-[16px] leading-7 text-muted-foreground">
              {category.summary}
            </p>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-3 md:grid-cols-4">
            <div className="rounded-xl border border-border/70 bg-background p-5">
              <Factory size={18} strokeWidth={1.5} />
              <div className="mt-4 text-3xl font-semibold">{network.length}</div>
              <div className="mt-1 text-xs text-muted-foreground">Public supplier records</div>
            </div>
            <div className="rounded-xl border border-border/70 bg-background p-5">
              <MapPin size={18} strokeWidth={1.5} />
              <div className="mt-4 text-3xl font-semibold">{provinceCount}</div>
              <div className="mt-1 text-xs text-muted-foreground">Production clusters covered</div>
            </div>
            <div className="rounded-xl border border-border/70 bg-background p-5">
              <FileCheck2 size={18} strokeWidth={1.5} />
              <div className="mt-4 text-3xl font-semibold">
                {documentedCount}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                Records with published certifications
              </div>
            </div>
            <div className="rounded-xl border border-border/70 bg-background p-5">
              <ShieldCheck size={18} strokeWidth={1.5} />
              <div className="mt-4 text-3xl font-semibold">
                {exportReadyCount || "RFQ"}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                {exportReadyCount ? "Export-ready matches" : "Evidence rechecked before release"}
              </div>
            </div>
          </div>
          <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">
            Public records are searchable before an RFQ. Verification status,
            certificate scope and validity are rechecked against the offered
            product before each commercial shortlist.
          </p>
        </div>
      </section>

      <section className="border-b border-border/80">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              CAPABILITY OVERVIEW
            </div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              What to compare before requesting prices
            </h2>
            <div className="mt-5 space-y-4 text-[15px] leading-7 text-muted-foreground">
              {category.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <aside className="h-fit rounded-xl border border-border/70 bg-muted/20 p-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              MATCHING PRINCIPLE
            </div>
            <h2 className="mt-2 text-lg font-semibold">
              Capability and identity, visible from the start.
            </h2>
            <ul className="mt-4 space-y-3 text-[13px] leading-relaxed text-muted-foreground">
              {[
                "Factory legal identity and manufacturing status checked",
                "Product and process capability matched to the RFQ",
                "Certificate scope and validity reviewed before reliance",
                "Samples and inspection criteria tied to one specification",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-foreground" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="border-b border-border/80 bg-muted/15">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            TYPICAL SPECIFICATIONS
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            Build a quote sheet factories can answer consistently
          </h2>
          <div className="mt-7 overflow-hidden rounded-xl border border-border/70 bg-background">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-left text-[13px]">
                <thead className="border-b border-border/70 bg-muted/30 text-[11px] uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th className="px-5 py-3 font-medium">Field</th>
                    <th className="px-5 py-3 font-medium">Typical range</th>
                    <th className="px-5 py-3 font-medium">Sourcing note</th>
                  </tr>
                </thead>
                <tbody>
                  {category.specifications.map((spec) => (
                    <tr key={spec.field} className="border-b border-border/50 last:border-0">
                      <th className="px-5 py-4 font-medium text-foreground">{spec.field}</th>
                      <td className="px-5 py-4 text-foreground/85">{spec.typicalRange}</td>
                      <td className="px-5 py-4 text-muted-foreground">{spec.sourcingNote}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-lg font-semibold tracking-tight">
              Procurement checks before supplier release
            </h3>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {category.buyingChecks.map((check) => (
                <li
                  key={check}
                  className="flex gap-3 rounded-lg border border-border/70 bg-background p-4 text-[13px] leading-relaxed text-muted-foreground"
                >
                  <CheckCircle2
                    size={15}
                    className="mt-0.5 shrink-0 text-foreground"
                  />
                  <span>{check}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-border/80">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            NETWORK COMPOSITION
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            Public supplier profiles from the composite network
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Search and compare every matched company in the same one-supplier-per-row
            directory used across GetFRP. Company scale, products, website,
            verification and profile status remain visible.
          </p>

          <div className="mt-8">
            <SuppliersClient
              suppliers={network}
              categories={DIRECTORY_CATEGORIES}
              provinces={directoryProvinces(network)}
            />
          </div>
        </div>
      </section>

      <section className="border-b border-border/80 bg-muted/15">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            PROVINCE DISTRIBUTION
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            China production clusters in this category
          </h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(category.provinceNotes).map(([province, note]) => (
              <article key={province} className="rounded-xl border border-border/70 bg-background p-5">
                <div className="flex items-center justify-between gap-3">
                  {getSupplierRegionByName(province) ? (
                    <Link
                      href={`/suppliers/${getSupplierRegionByName(province)!.slug}` as "/suppliers/[id]"}
                      className="font-semibold hover:underline"
                    >
                      {province} cluster
                    </Link>
                  ) : (
                    <h3 className="font-semibold">{province}</h3>
                  )}
                  {provinceCounts.has(province) && (
                    <span className="font-mono text-xs text-muted-foreground">
                      {provinceCounts.get(province)} matched
                    </span>
                  )}
                </div>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/80 bg-muted/15">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            RELATED EVIDENCE
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            Product specifications and standards to check
          </h2>
          <div className="mt-7 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-base font-semibold">Product specification inputs</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Move from a supplier capability to a defined product, resin
                system, reinforcement and performance requirement before asking
                for a price. These inputs are carried into product matching.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {relatedMaterials.map((material) => (
                  <span
                    key={encodeURIComponent(material.id)}
                    className="rounded-md border border-border bg-background px-3 py-2 text-xs"
                  >
                    {material.name}
                  </span>
                ))}
                <Link href="/products" className="rounded-md border border-border bg-background px-3 py-2 text-xs hover:border-foreground/50">
                  Browse FRP products →
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-base font-semibold">Standards cross-reference</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Confirm the test method and certificate scope before treating a
                factory claim as a compliance result. Start with the relevant
                GB records, then compare the project’s ASTM, ISO or EN call-up.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {(CATEGORY_STANDARD_LINKS[category.slug] ?? []).map((standard) => (
                  <span
                    key={standard.id}
                    className="rounded-md border border-border bg-background px-3 py-2 text-xs"
                  >
                    {standard.label}
                  </span>
                ))}
                <Link href="/sourcing/gb-vs-astm-frp" className="rounded-md border border-border bg-background px-3 py-2 text-xs hover:border-foreground/50">
                  Read the standards sourcing guide →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/80">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            BUYER FAQ
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            Questions specific to sourcing {category.shortName}
          </h2>
          <div className="mt-7 divide-y divide-border/70 border-y border-border/70">
            {category.faqs.map((faq) => (
              <article key={faq.question} className="py-6">
                <h3 className="text-base font-semibold">{faq.question}</h3>
                <p className="mt-2 text-[14px] leading-7 text-muted-foreground">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foreground py-14 text-background">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-background/65">
            MATCHED WITHIN 24 HOURS
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Need this category? Submit one controlled RFQ.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-background/75">
            Send the specification, quantity, destination and required
            documentation. We compare the public supplier network, flag gaps and
            return a shortlist without exposing your request to an open marketplace.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href={"/rfq" as never}
              className={buttonVariants({ size: "lg", variant: "secondary" })}
            >
              Submit RFQ <ArrowRight size={15} />
            </Link>
            <Link
              href="/suppliers"
              className="inline-flex items-center rounded-md border border-background/30 px-5 py-2.5 text-sm hover:bg-background/10"
            >
              Browse all categories
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
