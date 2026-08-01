import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  Building2,
  Factory,
  Search,
  Sparkles,
} from "lucide-react";

import { JsonLd } from "@/components/json-ld";
import { SupplierCategoryCardImage } from "@/components/supplier-category-card-image";
import { Link } from "@/i18n/navigation";
import { newsList } from "@/lib/data/news";

import { HomeMarketplaceSearch } from "./home-marketplace-search";

const FEATURED_PRODUCTS = [
  {
    slug: "frp-grating",
    eyebrow: "Corrosion infrastructure",
    title: "FRP Grating",
    description: "Molded and pultruded panels, stair treads and handrail systems.",
    detail: "VE · anti-slip · fire options",
  },
  {
    slug: "pultruded-profiles",
    eyebrow: "Structural profiles",
    title: "Pultruded Profiles",
    description: "Angles, channels, beams, tubes and custom constant sections.",
    detail: "EN 13706 · CNC finishing",
  },
  {
    slug: "frp-pipe",
    eyebrow: "Process equipment",
    title: "FRP Pipe & Tanks",
    description: "Filament-wound pipe, fittings, vessels and corrosion equipment.",
    detail: "VE · pressure · chemical service",
  },
  {
    slug: "smc-bmc",
    eyebrow: "Molded components",
    title: "SMC / BMC Parts",
    description: "Compression-molded enclosures, covers and engineered components.",
    detail: "Tooling · volume production",
  },
] as const;

const PROCESS_LINKS = [
  {
    name: "Pultrusion",
    detail: "Profiles · rods · cable tray",
    query: "pultrusion",
  },
  {
    name: "Compression molding",
    detail: "SMC · BMC · matched tooling",
    query: "compression molding",
  },
  {
    name: "Filament winding",
    detail: "Pipe · tanks · pressure vessels",
    query: "filament winding",
  },
  {
    name: "Vacuum infusion",
    detail: "Large parts · marine · wind",
    query: "vacuum infusion",
  },
  {
    name: "Hand lay-up / RTM",
    detail: "Low-volume complex components",
    query: "hand lay-up RTM",
  },
  {
    name: "CNC & assembly",
    detail: "Cutting · drilling · bonded kits",
    query: "CNC assembly",
  },
] as const;

const CATEGORY_LINKS = [
  ["FRP grating", "frp-grating"],
  ["Pultruded profiles", "pultruded-profiles"],
  ["Fiberglass sheet", "fiberglass-sheet"],
  ["FRP rebar", "frp-rebar"],
  ["FRP pipe", "frp-pipe"],
  ["SMC / BMC", "smc-bmc"],
  ["Resin & gelcoat", "resin-gelcoat"],
  ["Glass fiber", "fiber-glass"],
] as const;

const INSIGHT_LABELS: Record<string, string> = {
  industry: "Market",
  policy: "Standards",
  tech: "Technology",
  company: "Company",
  expo: "Events",
};

function SectionIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="max-w-2xl">
      <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0a756f]">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#0b2938] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-[14px] leading-6 text-[#62747d] sm:text-[15px]">
        {body}
      </p>
    </div>
  );
}

export async function HomePageEnglish() {
  const insights = newsList.slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://getfrp.com/#webpage",
              url: "https://getfrp.com/",
              name: "Find FRP products and suppliers in China",
              inLanguage: "en",
              description:
                "Search FRP products and qualified composite suppliers in China by product category, manufacturing process and sourcing specification.",
              about: [
                { "@type": "Thing", name: "FRP products" },
                { "@type": "Thing", name: "China FRP suppliers" },
                { "@type": "Thing", name: "Composite manufacturing" },
              ],
            },
            {
              "@type": "Service",
              "@id": "https://getfrp.com/#service",
              name: "AI-assisted FRP product and supplier search",
              serviceType:
                "Product discovery, supplier matching, specification alignment and China sourcing support for FRP and composite products",
              areaServed: "Worldwide",
              provider: { "@id": "https://getfrp.com/#organization" },
            },
          ],
        }}
      />

      <section className="relative overflow-hidden bg-[#071d2a] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(70,188,174,.2),transparent_34%),linear-gradient(135deg,#071d2a_0%,#0a2d3a_58%,#0d3c45_100%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.1] [background-image:linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)] [background-size:40px_40px]" />

        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 sm:pb-20 sm:pt-20 lg:pt-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#6bbdb3]/35 bg-[#58aa9f]/10 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8ed8ce]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#69d2c5]" />
              China&apos;s specialist FRP marketplace
            </div>
            <h1 className="mt-4 text-[38px] font-semibold leading-[1.02] tracking-[-0.05em] sm:mt-6 sm:text-6xl lg:text-[68px]">
              Find the right FRP product
              <br className="hidden sm:block" />
              <span className="text-[#72d4c9]"> and the factory behind it.</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#b6cbd2] sm:mt-5 sm:text-[17px] sm:leading-7">
              <span className="sm:hidden">
                Search China&apos;s FRP network by product, process,
                specification or factory capability.
              </span>
              <span className="hidden sm:inline">
                Search China&apos;s composite supply network by product,
                manufacturing process, technical specification or supplier
                capability—then use one RFQ to verify the shortlist.
              </span>
            </p>
          </div>

          <div className="mx-auto mt-7 max-w-5xl sm:mt-10">
            <HomeMarketplaceSearch />
          </div>

          <div className="mx-auto mt-8 hidden max-w-4xl flex-wrap items-center justify-center gap-x-7 gap-y-3 text-[11px] text-[#a8c0c8] sm:flex">
            <span className="inline-flex items-center gap-1.5">
              <BadgeCheck size={14} className="text-[#69d2c5]" />
              Supplier identity and capability evidence
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Sparkles size={14} className="text-[#69d2c5]" />
              AI-assisted specification matching
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Building2 size={14} className="text-[#69d2c5]" />
              Human RFQ, QA and export support
            </span>
          </div>
        </div>
      </section>

      <section className="border-b border-[#dce4e6] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionIntro
              eyebrow="Recommended products"
              title="Start with proven sourcing categories."
              body="Popular product families with established China factory clusters, repeatable specifications and export-ready supply routes."
            />
            <Link
              href="/suppliers#product-categories"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0a756f] hover:underline"
            >
              View all products <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED_PRODUCTS.map((product) => (
              <Link
                key={product.slug}
                href={`/suppliers/${product.slug}` as "/suppliers/[id]"}
                className="group overflow-hidden rounded-xl border border-[#d8e1e4] bg-white transition-all hover:-translate-y-0.5 hover:border-[#96bbb6] hover:shadow-lg"
              >
                <SupplierCategoryCardImage slug={product.slug} />
                <div className="p-5">
                  <div className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-[#0a756f]">
                    {product.eyebrow}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight text-[#102d3b]">
                    {product.title}
                  </h3>
                  <p className="mt-2 min-h-10 text-[12px] leading-5 text-[#677982]">
                    {product.description}
                  </p>
                  <div className="mt-4 border-t border-[#e3e9eb] pt-3 font-mono text-[9px] text-[#7c8d94]">
                    {product.detail}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#d5e0e2] bg-[#f2f6f6]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionIntro
              eyebrow="Browse the market"
              title="Search by process or product category."
              body="Use the manufacturing route when the process is fixed, or begin with the part family when you are still comparing production options."
            />
            <Link
              href="/suppliers"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0a756f] hover:underline"
            >
              Open supplier directory <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="mt-9 grid gap-5 lg:grid-cols-2">
            <div className="rounded-xl border border-[#d6e0e2] bg-white p-5 sm:p-6">
              <div className="flex items-center gap-3 border-b border-[#e1e8ea] pb-4">
                <span className="grid size-9 place-items-center rounded-lg bg-[#e6f2f0] text-[#0a756f]">
                  <Factory size={18} />
                </span>
                <div>
                  <h3 className="font-semibold text-[#102d3b]">By manufacturing process</h3>
                  <p className="mt-0.5 text-[11px] text-[#75868e]">Match suppliers to the way the part must be made.</p>
                </div>
              </div>
              <div className="mt-2 divide-y divide-[#e5ebed]">
                {PROCESS_LINKS.map((process) => (
                  <Link
                    key={process.name}
                    href={`/suppliers?q=${encodeURIComponent(process.query)}` as "/suppliers"}
                    className="group flex items-center justify-between gap-4 py-3.5"
                  >
                    <div>
                      <div className="text-[13px] font-semibold text-[#173440] group-hover:text-[#0a756f]">
                        {process.name}
                      </div>
                      <div className="mt-0.5 text-[10px] text-[#7c8d94]">{process.detail}</div>
                    </div>
                    <ArrowRight size={14} className="shrink-0 text-[#8ca0a7] transition-transform group-hover:translate-x-1 group-hover:text-[#0a756f]" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-[#d6e0e2] bg-white p-5 sm:p-6">
              <div className="flex items-center gap-3 border-b border-[#e1e8ea] pb-4">
                <span className="grid size-9 place-items-center rounded-lg bg-[#e6f2f0] text-[#0a756f]">
                  <Boxes size={18} />
                </span>
                <div>
                  <h3 className="font-semibold text-[#102d3b]">By product category</h3>
                  <p className="mt-0.5 text-[11px] text-[#75868e]">Compare specifications, factory capability and buying checks.</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-3">
                {CATEGORY_LINKS.map(([label, slug]) => (
                  <Link
                    key={slug}
                    href={`/suppliers/${slug}` as "/suppliers/[id]"}
                    className="group flex min-h-20 flex-col justify-between rounded-lg border border-[#e0e7e9] bg-[#fbfcfc] p-3.5 transition-colors hover:border-[#9cc1bc] hover:bg-[#f1f8f7]"
                  >
                    <Search size={14} className="text-[#6f858d] group-hover:text-[#0a756f]" />
                    <span className="mt-3 text-[12px] font-semibold text-[#26434f] group-hover:text-[#0a756f]">
                      {label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionIntro
              eyebrow="Insights"
              title="What sourcing teams need to know now."
              body="Short, practical updates on composite markets, standards, manufacturing technology and China supply."
            />
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0a756f] hover:underline"
            >
              Read all insights <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-9 grid gap-4 lg:grid-cols-3">
            {insights.map((insight, index) => (
              <Link
                key={insight.slug}
                href={`/articles/${insight.slug}` as "/articles/[slug]"}
                className="group flex min-h-72 flex-col rounded-xl border border-[#d9e2e5] p-6 transition-all hover:-translate-y-0.5 hover:border-[#9bbeb9] hover:shadow-lg"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-[#eaf4f2] px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-[#0a756f]">
                    {INSIGHT_LABELS[insight.category] ?? insight.category}
                  </span>
                  <span className="font-mono text-[10px] text-[#85959c]">0{index + 1}</span>
                </div>
                <h3 className="mt-7 text-xl font-semibold leading-snug tracking-[-0.025em] text-[#102d3b] group-hover:text-[#0a756f]">
                  {insight.titleEn}
                </h3>
                <p className="mt-3 line-clamp-3 text-[13px] leading-6 text-[#697b83]">
                  {insight.summaryEn}
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-[#e4eaec] pt-4 text-[10px] text-[#7d8d94]">
                  <span>{insight.date}</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-[#31505c] group-hover:text-[#0a756f]">
                    {insight.readTimeEn} read <ArrowUpRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
