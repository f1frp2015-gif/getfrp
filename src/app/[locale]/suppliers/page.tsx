import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  ArrowRight,
  Building2,
  FolderSearch,
  MapPin,
  Search,
  ShieldCheck,
} from "lucide-react";

import { JsonLd } from "@/components/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import {
  supplierDirectoryPageCount,
  supplierDirectoryPath,
} from "@/lib/supplier-directory";
import {
  SUPPLIER_SOURCING_CATALOG_ITEM_COUNT,
  SUPPLIER_SOURCING_CATALOGS,
} from "@/lib/data/supplier-sourcing-catalogs";
import { getPublicSupplierDirectory } from "@/lib/public-supplier-directory";
import { alternates } from "@/lib/seo";
import { CURRENT_SITE_URL } from "@/lib/sites";

export const revalidate = 3600;

const POPULAR_SEARCHES = [
  {
    label: "FRP grating factories",
    href: "/products/frp-grating",
  },
  {
    label: "Pultrusion manufacturers",
    href: "/manufacturing/pultrusion",
  },
  {
    label: "Filament winding",
    href: "/manufacturing/filament-winding",
  },
  {
    label: "Carbon fiber prepreg",
    href: "/manufacturing/prepreg-autoclave",
  },
  {
    label: "SMC & BMC molding",
    href: "/products/smc-bmc",
  },
] as const;

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
        absolute: "China FRP Manufacturers & Suppliers Directory | getfrp",
      },
      description:
        "Search China FRP manufacturers and source by composites catalog, including fibers, resins, intermediates, processes, products, equipment and application markets.",
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
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const supplierSearchBasePath =
    locale === "en" ? "/suppliers/search" : `/${locale}/suppliers/search`;
  const suppliers = await getPublicSupplierDirectory(locale);
  const verifiedCount = suppliers.filter((supplier) => supplier.verified).length;
  const regionCount = new Set(
    suppliers.map((supplier) => supplier.location).filter(Boolean),
  ).size;
  const directoryPages = Array.from(
    { length: supplierDirectoryPageCount(suppliers.length) },
    (_, index) => index + 1,
  );
  const supplierSearchAction = `${supplierSearchBasePath}#supplier-results`;
  const catalogItems = SUPPLIER_SOURCING_CATALOGS.flatMap((catalog) =>
    catalog.items.map((item) => ({
      name: item.label,
      href: item.href,
    })),
  );
  const catalogDirectoryJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${CURRENT_SITE_URL}/suppliers#supplier-catalogs`,
    url: `${CURRENT_SITE_URL}/suppliers`,
    inLanguage: locale,
    name: "China FRP supplier sourcing catalogs",
    description:
      "Browse China FRP suppliers across the composites value chain, manufacturing processes, products and application markets.",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: catalogItems.length,
      itemListElement: catalogItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: `${CURRENT_SITE_URL}${item.href}`,
      })),
    },
  };

  return (
    <main className="bg-background">
      <JsonLd data={catalogDirectoryJsonLd} />

      <section className="relative overflow-hidden border-b border-white/10 bg-[#081725] text-white">
        <div
          aria-hidden="true"
          className="absolute inset-[-8px] scale-[1.02] bg-cover bg-[position:center_52%] opacity-95 blur-[1.5px]"
          style={{
            backgroundImage:
              "url('/images/carbon-fiber-search-background.webp')",
            filter: "brightness(0.72) contrast(1.2)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(12,38,62,0.34)_0%,rgba(5,18,30,0.68)_78%),linear-gradient(180deg,rgba(5,17,29,0.28)_0%,rgba(5,17,29,0.62)_100%)]"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-5xl text-center">
            <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7be4e1]">
              China composites supplier directory
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              China FRP Manufacturers &amp; Suppliers Directory
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-200 sm:text-base">
              Find manufacturers by product, material, process, company or end-use market—then compare published capability and verification records.
            </p>

            <div className="mt-9 overflow-hidden rounded-xl border border-white/20 bg-[#07111c]/75 text-left shadow-2xl shadow-black/35 backdrop-blur-md">
              <nav
                aria-label="Supplier directory views"
                className="grid grid-cols-2 border-b border-white/20 bg-black/15 sm:grid-cols-4"
              >
                <Link
                  href={supplierSearchBasePath as never}
                  className="border-b-2 border-[#4f70ff] px-3 py-4 text-center text-xs font-semibold text-white sm:text-sm"
                >
                  All suppliers
                </Link>
                <Link
                  href={`${supplierSearchBasePath}?profile=verified#supplier-results` as never}
                  className="border-b-2 border-transparent px-3 py-4 text-center text-xs font-semibold text-slate-300 transition-colors hover:bg-white/5 hover:text-white sm:text-sm"
                >
                  Verified suppliers
                </Link>
                <a
                  href="#supplier-catalogs"
                  className="border-b-2 border-transparent px-3 py-4 text-center text-xs font-semibold text-slate-300 transition-colors hover:bg-white/5 hover:text-white sm:text-sm"
                >
                  FRP catalogs
                </a>
                <Link
                  href="/products"
                  className="border-b-2 border-transparent px-3 py-4 text-center text-xs font-semibold text-slate-300 transition-colors hover:bg-white/5 hover:text-white sm:text-sm"
                >
                  Product specifications
                </Link>
              </nav>

              <form
                action={supplierSearchAction}
                method="get"
                className="flex flex-col gap-2 bg-black/10 p-4 sm:flex-row sm:p-5"
              >
                <label htmlFor="supplier-directory-search" className="sr-only">
                  Search suppliers by product, capability, service or company
                </label>
                <div className="flex min-h-14 min-w-0 flex-1 items-center gap-3 rounded-lg bg-white px-4">
                  <Search size={20} className="shrink-0 text-slate-400" />
                  <input
                    id="supplier-directory-search"
                    name="q"
                    type="search"
                    placeholder="Search product, capability, process, service or company..."
                    className="h-12 min-w-0 flex-1 bg-transparent text-sm text-slate-950 outline-none placeholder:text-slate-500 sm:text-[15px]"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-[#365ce8] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#294bd0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                >
                  Search suppliers
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>

            <div className="mt-6">
              <div className="text-[11px] font-medium text-slate-400">
                Popular searches
              </div>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {POPULAR_SEARCHES.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href as never}
                    className="rounded-full bg-[#07111c]/70 px-4 py-2 text-xs text-slate-200 ring-1 ring-white/15 backdrop-blur-sm transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d7e0ea] bg-[#eef3f8]">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:gap-4 lg:py-10">
          {[
            {
              icon: Building2,
              value: suppliers.length.toLocaleString(),
              label: "public supplier profiles",
            },
            {
              icon: ShieldCheck,
              value: verifiedCount.toLocaleString(),
              label: "verified business records",
            },
            {
              icon: FolderSearch,
              value: SUPPLIER_SOURCING_CATALOG_ITEM_COUNT.toLocaleString(),
              label: "FRP catalog entry points",
            },
            {
              icon: MapPin,
              value: regionCount.toLocaleString(),
              label: "represented China locations",
            },
          ].map((stat) => {
            const StatIcon = stat.icon;
            return (
              <div
                key={stat.label}
                className="border border-[#d7e0ea] bg-white px-4 py-6 text-center shadow-sm sm:px-6"
              >
                <StatIcon size={18} className="mx-auto text-[#365ce8]" />
                <dt className="mt-3 text-3xl font-semibold tracking-tight text-[#123f8c] sm:text-4xl">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-xs leading-5 text-slate-600">
                  {stat.label}
                </dd>
              </div>
            );
          })}
        </dl>
      </section>

      <section
        id="supplier-catalogs"
        className="mx-auto max-w-7xl scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20"
      >
        <div className="mx-auto max-w-3xl text-center">
          <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#365ce8]">
            Sourcing by catalog
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#102840] sm:text-4xl">
            Explore the composites supply chain by catalog
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-[15px]">
            Start with an industry-defined value-chain category, process, product or application market. Every entry opens a focused supplier result or structured product specification.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {SUPPLIER_SOURCING_CATALOGS.map((catalog) => (
            <article key={catalog.id}>
              <div className="border-b border-[#cfd9e4] pb-4">
                <div className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-[#365ce8]">
                  {catalog.sourceLabel}
                </div>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#173a5e]">
                  {catalog.title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">
                  {catalog.description}
                </p>
              </div>
              <ul className="mt-3">
                {catalog.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href as never}
                      className="group flex items-center justify-between gap-3 border-b border-border/60 py-2.5 text-sm text-[#29445f] transition-colors hover:text-[#365ce8]"
                    >
                      <span>{item.label}</span>
                      <ArrowRight
                        size={13}
                        className="shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-[#365ce8]"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 border-l-2 border-[#365ce8] bg-[#eef3f8] px-5 py-4 text-xs leading-6 text-slate-600 sm:px-6">
          <span className="font-semibold text-[#173a5e]">Classification basis:</span>{" "}
          the{" "}
          <a
            href="https://www.jeccomposites.com/discover-composites/activities-scope/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-[#123f8c] hover:underline"
          >
            JEC composites value chain
          </a>
          ,{" "}
          <a
            href="https://www.jeccomposites.com/applications/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-[#123f8c] hover:underline"
          >
            JEC application sectors
          </a>{" "}
          and{" "}
          <a
            href="https://acmanet.org/composites-manufacturing-magazine/market-segments/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-[#123f8c] hover:underline"
          >
            ACMA market segments
          </a>
          . GetFRP condenses those definitions into practical sourcing routes; the organizations do not endorse individual profiles.
        </div>
      </section>

      <section className="border-y border-[#d7e0ea] bg-[#f7f9fb]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#365ce8]">
                Company index
              </div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#102840] sm:text-3xl">
                Browse every public supplier profile
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
                Use interactive search for buyer filters, or open the server-rendered index for stable access to all {suppliers.length.toLocaleString()} public company records.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={supplierSearchBasePath as never}
                className={buttonVariants({ variant: "outline" })}
              >
                Search all suppliers <ArrowRight size={14} />
              </Link>
              <Link
                href={supplierDirectoryPath(1) as never}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#123f8c] hover:underline"
              >
                Alphabetical index <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          <nav
            className="mt-7 flex flex-wrap gap-2"
            aria-label="Supplier directory pages"
          >
            {directoryPages.map((page) => (
              <Link
                key={page}
                href={supplierDirectoryPath(page) as never}
                className="inline-flex h-9 min-w-9 items-center justify-center rounded-md border border-[#cfd9e4] bg-white px-3 text-sm text-[#173a5e] hover:border-[#365ce8] hover:text-[#365ce8]"
              >
                {page}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="bg-[#102840] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:py-14">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#7be4e1]">
              Move from catalog to qualified shortlist
            </div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Ready to source a defined FRP requirement?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
              Send the product, process, standards, quantity and destination. GetFRP keeps quotations tied to one controlled specification.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/rfq"
              className={buttonVariants({
                size: "lg",
                variant: "secondary",
                className: "bg-white text-[#102840] hover:bg-slate-100",
              })}
            >
              Submit an RFQ <ArrowRight size={15} />
            </Link>
            <Link
              href="/suppliers/claim"
              className="inline-flex h-11 items-center rounded-md border border-white/25 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Claim your company
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
