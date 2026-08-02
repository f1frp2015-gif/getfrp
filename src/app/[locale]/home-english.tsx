import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BookOpenCheck,
  Boxes,
  Building2,
  ClipboardCheck,
  Factory,
  FileSearch,
  Ruler,
  Search,
  Sparkles,
  Truck,
} from "lucide-react";

import { JsonLd } from "@/components/json-ld";
import { SupplierCategoryCardImage } from "@/components/supplier-category-card-image";
import { Link } from "@/i18n/navigation";

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

const BUYER_PATHS = [
  {
    eyebrow: "ENGINEER",
    title: "Define properties and standards",
    description:
      "Compare FRP properties, density, manufacturing limits and ASTM / EN / GB references before freezing the product specification.",
    href: "/technical",
    cta: "Open technical references",
    Icon: Ruler,
  },
  {
    eyebrow: "PROCUREMENT",
    title: "Compare manufacturers on one scope",
    description:
      "Search Chinese FRP suppliers by product, process and region, then close capability, certificate and commercial deviations through one RFQ.",
    href: "/suppliers",
    cta: "Compare suppliers",
    Icon: ClipboardCheck,
  },
  {
    eyebrow: "DISTRIBUTOR",
    title: "Build a repeatable product line",
    description:
      "Screen factory-direct products, catalog data, OEM options, packaging and landed cost before committing to wholesale or private-label volume.",
    href: "/products",
    cta: "Browse product families",
    Icon: Truck,
  },
] as const;

const INSIGHTS = [
  {
    eyebrow: "BUYER PLAYBOOK",
    title: "How to source FRP from China",
    description:
      "Move from specification and shortlist to samples, inspection, payment, export documents and delivered cargo.",
    href: "/source-from-china",
  },
  {
    eyebrow: "MATERIAL DECISION",
    title: "FRP vs steel",
    description:
      "Compare corrosion, stiffness, weight, connections, fire and lifecycle cost before choosing a structural system.",
    href: "/compare/frp-vs-steel",
  },
  {
    eyebrow: "ENGINEERING DATA",
    title: "FRP properties explained",
    description:
      "Read directional mechanical properties, test methods and the evidence needed before using supplier datasheets.",
    href: "/technical/frp-properties",
  },
  {
    eyebrow: "QUALITY CONTROL",
    title: "Inspect FRP before shipment",
    description:
      "Turn drawings, materials, process controls, tests and packaging into an RFQ-to-release inspection plan.",
    href: "/guides/frp-quality-inspection",
  },
] as const;

const HOME_FAQS = [
  {
    question: "How do I find an FRP manufacturer in China?",
    answer:
      "Start with the product and manufacturing process, then filter public supplier records by location, certification and profile status. Send one controlled RFQ with drawings, standards, quantity and destination so GetFRP can recheck factory identity, capability and evidence before a shortlist is released.",
  },
  {
    question: "Which FRP products can I source through GetFRP?",
    answer:
      "The marketplace covers molded and pultruded FRP grating, structural profiles, fiberglass sheet, GFRP/BFRP rebar, filament-wound pipe and tanks, SMC/BMC parts, resin and gelcoat, and glass, carbon or basalt reinforcement.",
  },
  {
    question: "Does a verified supplier mean every FRP product is certified?",
    answer:
      "No. Company identity and profile verification are separate from product-level compliance. Certificate scope, test specimen, grade, thickness, production site and validity must be matched to the offered product and project requirement.",
  },
  {
    question: "Can overseas buyers submit an RFQ in English?",
    answer:
      "Yes. Provide the product, process, technical standard, quantity, target delivery and evidence requirements in English. GetFRP structures the request for Chinese manufacturers and keeps the comparison tied to one specification.",
  },
] as const;

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
              name: "FRP Products & Suppliers China | getfrp Marketplace",
              inLanguage: "en",
              description:
                "Find FRP products, manufacturers and suppliers in China. Compare grating, profiles, pipe, rebar, resin and fiber, then verify factories through one RFQ.",
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
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: HOME_FAQS.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
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
              Find FRP Products &amp;
              <br className="hidden sm:block" />
              <span className="text-[#72d4c9]"> Manufacturers in China</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#b6cbd2] sm:mt-5 sm:text-[17px] sm:leading-7">
              <span className="sm:hidden">
                Search China FRP products and suppliers by product, process,
                specification or factory capability.
              </span>
              <span className="hidden sm:inline">
                Search China FRP products and manufacturers by product family,
                manufacturing process, technical specification or verified supplier
                capability. Compare Chinese FRP suppliers, then use one RFQ for
                factory, certification, quality and export checks.
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
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0a756f] hover:underline"
            >
              View all products <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED_PRODUCTS.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}` as never}
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
                    href={`/products/${slug}` as never}
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
              eyebrow="Connected data model"
              title="Products and suppliers, linked in both directions."
              body="The catalog separates reusable product specifications from company records, then connects them with explicit capability and evidence relationships."
            />
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0a756f] hover:underline"
            >
              Explore product data <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-9 grid gap-4 lg:grid-cols-3">
            {[
              {
                label: "01 · PRODUCT",
                title: "One structured specification",
                body: "Materials, processes, applications, standards, specification fields and buying checks live on the product—not in duplicated supplier copy.",
                href: "/products" as const,
                cta: "Browse products",
              },
              {
                label: "02 · SUPPLIER",
                title: "One company capability record",
                body: "Legal identity, location, processes, certification evidence, export readiness and contact data remain attached to the supplier.",
                href: "/suppliers" as const,
                cta: "Browse suppliers",
              },
              {
                label: "03 · RELATIONSHIP",
                title: "A verified connection",
                body: "MOQ, lead time, customization, supplier product name and evidence belong to the supplier-product relationship and can be reviewed independently.",
                href: "/rfq" as const,
                cta: "Verify by RFQ",
              },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex min-h-64 flex-col rounded-xl border border-[#d9e2e5] p-6 transition-all hover:-translate-y-0.5 hover:border-[#9bbeb9] hover:shadow-lg"
              >
                <div className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-[#0a756f]">
                  {item.label}
                </div>
                <h3 className="mt-7 text-xl font-semibold leading-snug tracking-[-0.025em] text-[#102d3b] group-hover:text-[#0a756f]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[13px] leading-6 text-[#697b83]">
                  {item.body}
                </p>
                <div className="mt-auto border-t border-[#e4eaec] pt-4 text-[11px] font-semibold text-[#31505c] group-hover:text-[#0a756f]">
                  {item.cta} <ArrowUpRight size={12} className="ml-1 inline" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#d5e0e2] bg-[#f2f6f6]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <SectionIntro
            eyebrow="Built for industrial buying"
            title="One China FRP marketplace for each decision maker."
            body="Engineers, procurement teams and distributors enter the same supply chain with different questions. Each path connects technical evidence to product and manufacturer records instead of separating research from sourcing."
          />
          <div className="mt-9 grid gap-4 lg:grid-cols-3">
            {BUYER_PATHS.map((item) => (
              <Link
                key={item.eyebrow}
                href={item.href as never}
                className="group flex min-h-64 flex-col rounded-xl border border-[#d9e2e5] bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[#9bbeb9] hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-[#0a756f]">
                    {item.eyebrow}
                  </span>
                  <item.Icon size={18} className="text-[#779099]" />
                </div>
                <h3 className="mt-7 text-xl font-semibold tracking-[-0.025em] text-[#102d3b] group-hover:text-[#0a756f]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[13px] leading-6 text-[#697b83]">
                  {item.description}
                </p>
                <div className="mt-auto border-t border-[#e4eaec] pt-4 text-[11px] font-semibold text-[#0a756f]">
                  {item.cta} <ArrowRight size={12} className="ml-1 inline" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#d5e0e2] bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0a756f]">
            <FileSearch size={15} /> FRP SOURCING FAQ
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#0b2938] sm:text-4xl">
            Questions overseas FRP buyers ask first.
          </h2>
          <div className="mt-8 grid gap-x-10 border-y border-[#dce4e6] md:grid-cols-2">
            {HOME_FAQS.map((faq) => (
              <article key={faq.question} className="border-b border-[#e1e8ea] py-6 md:[&:nth-last-child(-n+2)]:border-b-0">
                <h3 className="font-semibold leading-6 text-[#173440]">{faq.question}</h3>
                <p className="mt-2 text-[13px] leading-7 text-[#697b83]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f2f6f6]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionIntro
              eyebrow="Insights"
              title="Technical answers that lead to better RFQs."
              body="Use objective material comparisons, property references and quality-control guides to define the requirement before comparing factory prices."
            />
            <Link href="/guides" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0a756f] hover:underline">
              Explore buyer guides <ArrowRight size={14} />
            </Link>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INSIGHTS.map((item) => (
              <Link
                key={item.href}
                href={item.href as never}
                className="group flex min-h-64 flex-col rounded-xl border border-[#d9e2e5] bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-[#9bbeb9] hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-[#0a756f]">{item.eyebrow}</span>
                  <BookOpenCheck size={16} className="text-[#789099]" />
                </div>
                <h3 className="mt-8 text-lg font-semibold leading-snug tracking-tight text-[#102d3b] group-hover:text-[#0a756f]">{item.title}</h3>
                <p className="mt-3 text-[12px] leading-6 text-[#697b83]">{item.description}</p>
                <div className="mt-auto border-t border-[#e4eaec] pt-4 text-[11px] font-semibold text-[#0a756f]">Read insight <ArrowUpRight size={12} className="ml-1 inline" /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
