import type { Metadata } from "next";
import { and, asc, isNotNull, ne } from "drizzle-orm";
import { setRequestLocale } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { JsonLd } from "@/components/json-ld";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { db } from "@/lib/db";
import { supplierListings } from "@/lib/db/schema";
import { PRODUCT_SEED_RECORDS } from "@/lib/data/products";
import { sourcingTopics } from "@/lib/data/sourcing-topics";
import { SUPPLIER_REGION_PAGES } from "@/lib/data/supplier-region-pages";
import { SEO_REFERENCE_PAGES } from "@/lib/data/seo-reference-pages";
import {
  CORE_SITEMAP_ROUTES,
  DATA_SITEMAP_ROUTES,
  TOOL_SITEMAP_ROUTES,
} from "@/lib/sitemap-data";
import { alternates, og } from "@/lib/seo";
import { CURRENT_SITE_URL } from "@/lib/sites";

export const revalidate = 3600;

const CORE_LABELS: Record<string, string> = {
  "/": "Home",
  "/products": "FRP product specifications",
  "/suppliers": "China supplier directory",
  "/standards": "Standards cross-reference",
  "/papers": "Composite research papers",
  "/ai": "Composite sourcing AI",
  "/about": "About GetFRP",
  "/source-from-china": "China sourcing process",
  "/sitemap": "HTML sitemap",
};

const TOOL_LABELS: Record<string, string> = {
  "/tools": "Procurement tools",
  "/tools/buy-america-frp-checker": "Buy America FRP checker",
  "/tools/frp-weight-calculator": "FRP weight calculator",
  "/tools/frp-cost-estimator": "FRP landed-cost estimator",
  "/tech": "Engineering tools",
  "/tech/calculator": "Pultrusion calculator",
  "/tech/u-value-calculator": "U-value calculator",
  "/tech/wind-load-calculator": "Wind-load calculator",
};

export async function generateMetadata(): Promise<Metadata> {
  const title = "GetFRP HTML Sitemap — Products, Suppliers, Guides & Tools";
  const description =
    "Browse GetFRP product specifications, China supplier profiles, sourcing guides, standards, data pages and engineering tools from one index.";
  return {
    title: { absolute: title },
    description,
    alternates: alternates("/sitemap"),
    openGraph: og("/sitemap", { title, description }),
  };
}

async function loadSupplierLinks() {
  try {
    const rows = await db
      .select({
        slug: supplierListings.slug,
        name: supplierListings.nameEn,
      })
      .from(supplierListings)
      .where(
        and(
          isNotNull(supplierListings.slug),
          isNotNull(supplierListings.nameEn),
          ne(supplierListings.nameEn, ""),
        ),
      )
      .orderBy(asc(supplierListings.nameEn));
    return rows.filter(
      (row): row is { slug: string; name: string } =>
        Boolean(row.slug && row.name?.trim()),
    );
  } catch {
    return [];
  }
}

function LinkGrid({
  links,
}: {
  links: Array<{ href: string; label: string; note?: string }>;
}) {
  return (
    <div className="mt-5 grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href as never}
          className="group flex items-start justify-between gap-3 rounded-lg border border-border/70 bg-background px-4 py-3 text-sm transition-colors hover:border-[#0a756f]/50"
        >
          <span>
            <span className="font-medium">{link.label}</span>
            {link.note && (
              <span className="mt-0.5 block text-xs text-muted-foreground">
                {link.note}
              </span>
            )}
          </span>
          <ArrowRight
            size={13}
            className="mt-1 shrink-0 transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      ))}
    </div>
  );
}

export default async function HtmlSitemapPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const suppliers = await loadSupplierLinks();
  const pageUrl = `${CURRENT_SITE_URL}/sitemap`;

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "GetFRP HTML Sitemap",
          description:
            "Human-readable index of GetFRP products, suppliers, sourcing resources, data and engineering tools.",
          url: pageUrl,
          inLanguage: "en",
          isPartOf: { "@id": `${CURRENT_SITE_URL}/#website` },
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${CURRENT_SITE_URL}/` },
          { name: "Sitemap", url: pageUrl },
        ]}
      />

      <header className="max-w-3xl">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#0a756f]">
          Site directory
        </div>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
          GetFRP HTML Sitemap
        </h1>
        <p className="mt-5 text-[16px] leading-7 text-muted-foreground">
          Find product specifications, public supplier profiles, sourcing
          guides, standards, research, trade data and engineering tools. The
          XML sitemap for search engines is available at{" "}
          <a href="/sitemap.xml" className="font-medium text-foreground underline underline-offset-4">
            /sitemap.xml
          </a>
          .
        </p>
      </header>

      <div className="mt-12 space-y-12">
        <section>
          <h2 className="text-2xl font-semibold">Core buying paths</h2>
          <LinkGrid
            links={CORE_SITEMAP_ROUTES.map((route) => ({
              href: route.path,
              label: CORE_LABELS[route.path] ?? route.path,
            }))}
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold">FRP product families</h2>
          <LinkGrid
            links={PRODUCT_SEED_RECORDS.map((product) => ({
              href: `/products/${product.slug}`,
              label: product.shortName ?? product.nameEn,
              note: product.category,
            }))}
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold">China sourcing guides</h2>
          <LinkGrid
            links={sourcingTopics.map((topic) => ({
              href: `/sourcing/${topic.slug}`,
              label: topic.metaTitle.replace(/ \|.*$/, ""),
              note: topic.pillar,
            }))}
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Technical references and buyer guides</h2>
          <LinkGrid
            links={SEO_REFERENCE_PAGES.map((page) => ({
              href: `/${page.group}/${page.slug}`,
              label: page.shortTitle,
              note: page.group,
            }))}
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Data and engineering tools</h2>
          <LinkGrid
            links={[
              ...DATA_SITEMAP_ROUTES.map((route) => ({
                href: route.path,
                label: "China FRP trade remedies data",
              })),
              ...TOOL_SITEMAP_ROUTES.map((route) => ({
                href: route.path,
                label: TOOL_LABELS[route.path] ?? route.path,
              })),
            ]}
          />
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Supplier clusters</h2>
          <LinkGrid
            links={SUPPLIER_REGION_PAGES.map((region) => ({
              href: `/suppliers/${region.slug}`,
              label: `${region.name} FRP manufacturers`,
            }))}
          />
        </section>

        {suppliers.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold">Supplier profiles</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {suppliers.length.toLocaleString()} public company profiles,
              ordered alphabetically. Product capability and verification
              scope are shown on each profile.
            </p>
            <LinkGrid
              links={suppliers.map((supplier) => ({
                href: `/suppliers/${supplier.slug}`,
                label: supplier.name,
              }))}
            />
          </section>
        )}
      </div>
    </main>
  );
}
