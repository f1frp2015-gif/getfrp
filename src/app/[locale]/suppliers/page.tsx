import type { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import { JsonLd } from "@/components/json-ld";
import { AskAiButton } from "@/components/ask-ai-button";
import { alternates } from "@/lib/seo";
import { CURRENT_SITE_URL } from "@/lib/sites";
import { SUPPLIER_CATEGORY_PAGES } from "@/lib/data/supplier-category-pages";
import {
  Atom,
  ArrowRight,
  Building2,
  Factory,
  FlaskConical,
  MapPin,
  Search,
  ShieldCheck,
} from "lucide-react";
import {
  supplierDirectoryPageCount,
  supplierDirectoryPath,
} from "@/lib/supplier-directory";
import {
  SUPPLIER_CAPABILITIES,
  SUPPLIER_CAPABILITY_GROUPS,
  supplierMatchesCapability,
} from "@/lib/data/supplier-capability-directory";
import { getPublicSupplierDirectory } from "@/lib/public-supplier-directory";
export const revalidate = 3600;

const SEARCH_FILTER_KEYS = [
  "q",
  "category",
  "region",
  "certification",
  "profile",
  "capability",
  "page",
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
        "Find China FRP manufacturers and suppliers by fiber type, resin system, manufacturing process, product, region and verified capability.",
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
  const supplierSearchBasePath =
    locale === "en" ? "/suppliers/search" : `/${locale}/suppliers/search`;
  const forwardedFilters = new URLSearchParams();
  SEARCH_FILTER_KEYS.forEach((key) => {
    const value = firstParam(sp[key]).slice(0, 200);
    if (value) forwardedFilters.set(key, value);
  });
  if (firstParam(sp.verified) === "1") {
    forwardedFilters.set("profile", "verified");
  }
  if (forwardedFilters.size > 0) {
    redirect(`${supplierSearchBasePath}?${forwardedFilters.toString()}`);
  }

  const serialized = await getPublicSupplierDirectory(locale);
  const inLanguage = locale;
  const directoryPages = Array.from(
    { length: supplierDirectoryPageCount(serialized.length) },
    (_, index) => index + 1,
  );
  const capabilityCounts = new Map(
    SUPPLIER_CAPABILITIES.map((capability) => [
      capability.id,
      serialized.filter((supplier) =>
        supplierMatchesCapability(capability.id, [
          supplier.name,
          supplier.category,
          supplier.location,
          supplier.description,
          supplier.products,
          supplier.processList,
          supplier.certifications,
        ]),
      ).length,
    ]),
  );
  const verifiedCount = serialized.filter((supplier) => supplier.verified).length;
  const regionCount = new Set(
    serialized.map((supplier) => supplier.location).filter(Boolean),
  ).size;
  const supplierSearchAction = `${supplierSearchBasePath}#supplier-results`;
  const capabilityDirectoryJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${CURRENT_SITE_URL}/suppliers#capability-directory`,
    url: `${CURRENT_SITE_URL}/suppliers`,
    inLanguage,
    name: "China FRP manufacturer and supplier directory",
    description:
      "Browse China FRP suppliers by fiber reinforcement, resin system and composite manufacturing process.",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: SUPPLIER_CAPABILITIES.length,
      itemListElement: SUPPLIER_CAPABILITIES.map((capability, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: capability.label,
        url: `${CURRENT_SITE_URL}/suppliers/search?capability=${encodeURIComponent(capability.id)}`,
      })),
    },
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <JsonLd data={capabilityDirectoryJsonLd} />

      <section className="relative overflow-hidden rounded-2xl bg-[#073d3a] px-5 py-10 text-white shadow-sm sm:px-10 sm:py-14 lg:px-14">
        <Image
          src="/images/glass-fiber-strands.webp"
          alt=""
          fill
          preload
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(100deg,rgba(3,35,40,.94)_0%,rgba(5,62,61,.82)_52%,rgba(3,43,48,.76)_100%)]"
        />
        <div className="relative max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-50">
            <ShieldCheck size={13} />
            China FRP supplier directory
          </div>
          <h1 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl sm:leading-[1.08]">
            Find China FRP manufacturers by material and process
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-emerald-50/80 sm:text-base sm:leading-7">
            Search public manufacturer profiles, then narrow the directory by
            fiber reinforcement, resin system, FRP manufacturing process,
            product capability, region and certification evidence.
          </p>

          <form
            action={supplierSearchAction}
            method="get"
            className="mt-7 flex max-w-3xl flex-col gap-2 rounded-xl bg-white p-2 shadow-xl shadow-black/15 sm:flex-row"
          >
            <label htmlFor="supplier-directory-search" className="sr-only">
              Search suppliers by product, material or process
            </label>
            <div className="flex min-w-0 flex-1 items-center gap-3 px-3">
              <Search size={18} className="shrink-0 text-slate-400" />
              <input
                id="supplier-directory-search"
                name="q"
                type="search"
                placeholder="Search product, fiber, resin, process or company..."
                className="h-11 min-w-0 flex-1 bg-transparent text-sm text-slate-950 outline-none placeholder:text-slate-400"
              />
            </div>
            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#0a756f] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#08645f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a756f] focus-visible:ring-offset-2"
            >
              Search suppliers
              <ArrowRight size={15} />
            </button>
          </form>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-emerald-50/70">
            <span className="font-medium text-white">Popular:</span>
            {[
              ["Pultrusion", "process-pultrusion"],
              ["Vinyl ester", "resin-vinyl-ester"],
              ["Carbon fiber", "fiber-carbon"],
              ["Vacuum infusion", "process-vacuum-infusion"],
            ].map(([label, capability]) => (
              <a
                key={capability}
                href={`${supplierSearchBasePath}?capability=${capability}#supplier-results`}
                className="border-b border-white/30 pb-0.5 transition-colors hover:border-white hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <AskAiButton
              prompt="Match a China FRP supplier to my fiber, resin, process, certification, quantity and delivery requirements. Explain the shortlist and any evidence I should verify."
              label="Ask AI to match suppliers"
            />
            <Link
              href={"/rfq" as never}
              className={buttonVariants({
                variant: "secondary",
                size: "lg",
                className: "bg-white text-[#073d3a] hover:bg-emerald-50",
              })}
            >
              Submit one RFQ
              <ArrowRight />
            </Link>
          </div>
        </div>

        <dl className="relative mt-10 grid gap-px overflow-hidden rounded-xl border border-white/15 bg-white/15 sm:grid-cols-3">
          {[
            {
              icon: Building2,
              value: serialized.length.toLocaleString(),
              label: "public supplier profiles",
            },
            {
              icon: ShieldCheck,
              value: verifiedCount.toLocaleString(),
              label: "verified business records",
            },
            {
              icon: MapPin,
              value: regionCount.toLocaleString(),
              label: "represented China locations",
            },
          ].map((stat) => {
            const StatIcon = stat.icon;
            return (
              <div key={stat.label} className="flex items-center gap-3 bg-[#073d3a]/90 p-4 sm:p-5">
                <StatIcon size={18} className="text-[#6ee7dc]" />
                <div>
                  <dt className="font-mono text-xl font-semibold tracking-tight text-white">
                    {stat.value}
                  </dt>
                  <dd className="text-xs text-emerald-50/65">{stat.label}</dd>
                </div>
              </div>
            );
          })}
        </dl>
      </section>

      <section id="capability-categories" className="scroll-mt-24 py-12 sm:py-16">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#0a756f]">
              Explore suppliers by category
            </div>
            <h2 className="mt-2 max-w-3xl text-2xl font-semibold tracking-tight sm:text-3xl">
              Browse the FRP supply base from material system to manufacturing route
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-muted-foreground">
            Select a capability to open a focused search page. Results are
            matched against each supplier&apos;s products, process list and
            published profile evidence, with 25 companies shown per page.
          </p>
        </div>

        <div className="mt-8 grid items-start gap-5 lg:grid-cols-3">
          {SUPPLIER_CAPABILITY_GROUPS.map((group, groupIndex) => {
            const GroupIcon =
              group.id === "fiber"
                ? Atom
                : group.id === "resin"
                  ? FlaskConical
                  : Factory;
            return (
              <article
                key={group.id}
                className="overflow-hidden rounded-xl border border-border/80 bg-background shadow-sm"
              >
                <header className="border-b border-border/70 bg-muted/25 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0a756f]/10 text-[#0a756f]">
                      <GroupIcon size={19} />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">
                      0{groupIndex + 1}
                    </span>
                  </div>
                  <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {group.eyebrow}
                  </div>
                  <h3 className="mt-1 text-xl font-semibold tracking-tight">
                    {group.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {group.description}
                  </p>
                </header>
                <div className="divide-y divide-border/60">
                  {group.items.map((capability) => {
                    const count = capabilityCounts.get(capability.id) ?? 0;
                    return (
                      <a
                        key={capability.id}
                        href={`${supplierSearchBasePath}?capability=${capability.id}#supplier-results`}
                        className="group flex items-start justify-between gap-4 p-4 transition-colors hover:bg-[#0a756f]/5"
                      >
                        <span className="min-w-0">
                          <span className="flex items-center gap-2 text-sm font-semibold group-hover:text-[#0a756f]">
                            {capability.label}
                          </span>
                          <span className="mt-1 block text-xs leading-5 text-muted-foreground">
                            {capability.description}
                          </span>
                          <span className="mt-1.5 block font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                            {count > 0
                              ? `${count.toLocaleString()} matching ${count === 1 ? "profile" : "profiles"}`
                              : "Search directory"}
                          </span>
                        </span>
                        <ArrowRight
                          size={15}
                          className="mt-1 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-[#0a756f]"
                        />
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section
        id="product-categories"
        className="mb-12 scroll-mt-24 border-y border-border/70 py-9"
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Browse by product family
            </div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              Start with the FRP part or material you need
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            Product pages add specification fields, buying checks and
            capability-specific supplier matching.
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
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-border/70 bg-muted/20 p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Crawlable company index
            </div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              Browse every public supplier profile
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
              Open the dedicated search page for interactive filtering, or use
              the server-rendered alphabetical index for a stable route to all {serialized.length.toLocaleString()} company profiles.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={supplierSearchBasePath}
              className={buttonVariants({ variant: "outline" })}
            >
              Search all suppliers <ArrowRight size={14} />
            </a>
            <Link
              href={supplierDirectoryPath(1) as never}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0a756f] hover:underline"
            >
              Alphabetical index <ArrowRight size={14} />
            </Link>
          </div>
        </div>
        <nav
          className="mt-6 flex flex-wrap gap-2"
          aria-label="Supplier directory pages"
        >
          {directoryPages.map((page) => (
            <Link
              key={page}
              href={supplierDirectoryPath(page) as never}
              className="inline-flex h-9 min-w-9 items-center justify-center rounded-md border border-border bg-background px-3 text-sm hover:border-foreground/50"
            >
              {page}
            </Link>
          ))}
        </nav>
      </section>

      <div className="mt-10 rounded-xl border bg-muted/30 p-8 text-center">
        <h3 className="text-xl font-bold">
          Ready to source?
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Send your specification through the RFQ form. First reply within 24 hours, no account required.
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={"/rfq" as never}
            className={buttonVariants({ size: "lg" })}
          >
            Submit an RFQ
          </Link>
        </div>
      </div>
    </div>
  );
}
