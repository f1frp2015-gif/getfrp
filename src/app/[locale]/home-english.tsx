import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  ClipboardCheck,
  Factory,
  FileSearch,
  Search,
} from "lucide-react";
import { count, eq } from "drizzle-orm";
import Image from "next/image";

import { JsonLd } from "@/components/json-ld";
import { FaqGrid } from "@/components/faq-grid";
import { SupplierList } from "@/components/supplier-list";
import { Link } from "@/i18n/navigation";
import { db } from "@/lib/db";
import { supplierListings } from "@/lib/db/schema";
import { getPublicSupplierDirectory } from "@/lib/public-supplier-directory";

import { HomeMarketplaceSearch } from "./home-marketplace-search";

export const HOME_TITLE =
  "China FRP Marketplace & Sourcing Platform | GetFRP";
export const HOME_DESCRIPTION =
  "Source composite materials and products through one China FRP marketplace for specifications, factory matching, evidence review and export-ready RFQs.";

// Supply-chain capacity basis checked 2026-08-04: China Jushi (2.0M t/yr),
// Taishan Fiberglass (800K+ t/yr) and CPIC (1.2M+ t/yr) official profiles;
// Jilin government disclosure (70K t/yr carbon fiber), Zhongfu Shenying's
// 2025 annual-report release (29K t/yr) and Guangwei's 2024 annual report
// (7,685 t/yr). Display values are deliberately rounded.

const PROCESS_LINKS = [
  {
    name: "Pultrusion",
    detail: "Profiles · rods · cable tray",
    query: "pultrusion",
    href: "/processes/pultrusion",
  },
  {
    name: "Compression molding",
    detail: "SMC · BMC · matched tooling",
    query: "compression molding",
    href: "/processes/compression-molding",
  },
  {
    name: "Filament winding",
    detail: "Pipe · tanks · pressure vessels",
    query: "filament winding",
    href: "/processes/filament-winding",
  },
  {
    name: "Vacuum infusion",
    detail: "Large parts · marine · wind",
    query: "vacuum infusion",
    href: "/suppliers/search?q=vacuum%20infusion",
  },
  {
    name: "Hand lay-up / RTM",
    detail: "Low-volume complex components",
    query: "hand lay-up RTM",
    href: "/suppliers/search?q=hand%20lay-up%20RTM",
  },
  {
    name: "CNC & assembly",
    detail: "Cutting · drilling · bonded kits",
    query: "CNC assembly",
    href: "/suppliers/search?q=CNC%20assembly",
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

const SERVICE_COUNTRIES = [
  "United States",
  "Canada",
  "United Kingdom",
  "Germany",
  "Netherlands",
  "Australia",
  "India",
  "United Arab Emirates",
] as const;

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Search the right product and process",
    body: "Start with the FRP family, manufacturing route, service condition and target standard.",
    Icon: Search,
  },
  {
    step: "02",
    title: "Compare capability and evidence",
    body: "Review manufacturer identity, process fit, certificate scope and product-level proof.",
    Icon: BadgeCheck,
  },
  {
    step: "03",
    title: "Submit one controlled RFQ",
    body: "Send one English specification for matched quotes, QA checks and export follow-up.",
    Icon: ClipboardCheck,
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
      <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#123f8c]">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#0a1f44] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-[14px] leading-6 text-[#5d6672] sm:text-[15px]">
        {body}
      </p>
    </div>
  );
}

async function loadVerifiedPlantCount(): Promise<number | null> {
  try {
    const [result] = await db
      .select({ value: count() })
      .from(supplierListings)
      .where(eq(supplierListings.verified, true));
    const value = Number(result?.value ?? 0);
    return value > 0 ? value : null;
  } catch {
    return null;
  }
}

function formatPlantCount(value: number | null): string {
  if (value === null) return "China-wide";
  if (value < 100) return String(value);
  return `${Math.floor(value / 10) * 10}+`;
}

export async function HomePageEnglish() {
  const [verifiedPlantCount, publicSuppliers] = await Promise.all([
    loadVerifiedPlantCount(),
    getPublicSupplierDirectory("en"),
  ]);
  const featuredSuppliers = publicSuppliers
    .filter((supplier) => supplier.verified && supplier.profilePublished)
    .slice(0, 4);

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
              name: HOME_TITLE,
              inLanguage: "en",
              description: HOME_DESCRIPTION,
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
              areaServed: SERVICE_COUNTRIES.map((name) => ({
                "@type": "Country",
                name,
              })),
              availableLanguage: "English",
              provider: { "@id": "https://getfrp.com/#organization" },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "China FRP product and manufacturer sourcing",
                itemListElement: CATEGORY_LINKS.map(([name, slug]) => ({
                  "@type": "Offer",
                  url: `https://getfrp.com/products/${slug}`,
                  itemOffered: {
                    "@type": "Service",
                    name: `${name} manufacturer sourcing in China`,
                  },
                })),
              },
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

      <section className="relative overflow-hidden bg-[#0a1f44] text-white">
        <Image
          src="/images/home-frp-fiber-hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="pointer-events-none scale-[1.02] object-cover object-center blur-[4px]"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(5,17,37,.84)_0%,rgba(8,28,58,.66)_52%,rgba(5,17,37,.82)_100%)]" />

        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-16 lg:pt-20">
          <div className="mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#19c3c8]/35 bg-[#19c3c8]/10 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7be4e1]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7be4e1]" />
              China&apos;s specialist FRP marketplace
            </div>
            <h1 className="mt-4 text-[38px] font-semibold leading-[1.02] tracking-[-0.05em] sm:mt-6 sm:text-6xl lg:text-[64px]">
              China FRP Sourcing Platform &amp; Marketplace
            </h1>
            <p className="mx-auto mt-4 max-w-4xl text-[12px] leading-5 text-[#d9dfe8] sm:whitespace-nowrap sm:text-sm sm:leading-6">
              Define the product, compare factory evidence and manage an export-ready RFQ across China&apos;s composite supply chain.
            </p>
          </div>

          <div className="mx-auto mt-7 max-w-5xl sm:mt-8">
            <HomeMarketplaceSearch />
          </div>

          <section
            aria-labelledby="china-frp-supply-chain"
            className="mx-auto mt-6 max-w-6xl overflow-hidden rounded-2xl border border-white/15 bg-white/[0.07] backdrop-blur-sm"
          >
            <div className="grid gap-3 border-b border-white/10 px-4 py-4 sm:px-6 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <div className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#7be4e1]">
                  China FRP supply chain
                </div>
                <h2
                  id="china-frp-supply-chain"
                  className="mt-1.5 text-xl font-semibold tracking-[-0.025em] text-white sm:text-2xl"
                >
                  From reinforcement and resin to finished composite parts.
                </h2>
              </div>
              <p className="max-w-md text-[11px] leading-5 text-[#d9dfe8] md:text-right">
                Representative market leaders and rounded public disclosures
                available August 2026 — a sourcing map, not a universal ranking.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  value: "≈4.0M t/yr",
                  label: "Glass fiber capacity",
                  leaders: "China Jushi · Taishan Fiberglass · CPIC",
                  detail: "Roving, yarn, mat, fabric and electronic glass.",
                },
                {
                  value: "100K+ t/yr",
                  label: "Carbon fiber capacity",
                  leaders: "Jilin Chemical Fiber · Zhongfu Shenying · Guangwei",
                  detail: "Precursor, carbon fiber, prepreg and pultruded parts.",
                },
                {
                  value: "3 material platforms",
                  label: "Resin & chemistry",
                  leaders: "Wanhua Chemical · Sinopec · Swancor",
                  detail: "Epoxy, vinyl ester, polyester, PU and curing systems.",
                },
                {
                  value: `${formatPlantCount(verifiedPlantCount)} plants`,
                  label: "Finished FRP products",
                  leaders: "8 structured product families",
                  detail: "Grating, profiles, pipe, rebar, SMC/BMC and custom parts.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border-b border-white/10 px-4 py-4 last:border-b-0 sm:px-5 sm:py-5 sm:[&:nth-child(3)]:border-b-0 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
                >
                  <div className="text-xl font-semibold tracking-tight text-white">
                    {item.value}
                  </div>
                  <h3 className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.11em] text-[#7be4e1]">
                    {item.label}
                  </h3>
                  <p className="mt-3 text-[11px] font-medium leading-4 text-[#d9dfe8]">
                    {item.leaders}
                  </p>
                  <p className="mt-1 text-[10px] leading-4 text-[#d9dfe8]">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 px-4 py-3 text-[10px] leading-5 text-[#d9dfe8] sm:px-6">
              Source trail: official company disclosures summarized in the reviewed profiles for{" "}
              <Link href="/suppliers/jushi" className="underline underline-offset-2">China Jushi</Link>,{" "}
              <Link href="/suppliers/taishan-fiberglass" className="underline underline-offset-2">Taishan Fiberglass</Link>,{" "}
              <Link href="/suppliers/chongqing-polycomp-international" className="underline underline-offset-2">CPIC</Link> and{" "}
              <Link href="/suppliers/zhongfu-shenying" className="underline underline-offset-2">Zhongfu Shenying</Link>.{" "}
              <Link href="/methodology" className="font-semibold text-[#7be4e1] underline underline-offset-2">Review methodology</Link>.
            </div>

            <div className="grid gap-5 border-t border-white/10 bg-[#0a1f44]/35 px-4 py-5 sm:px-6 md:grid-cols-[1fr_auto] md:items-center">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#7be4e1]">
                  <BadgeCheck size={13} />
                  For overseas buyers
                </div>
                <h3 className="mt-2 text-xl font-semibold tracking-[-0.025em] text-white">
                  One search. Verified suppliers. One RFQ.
                </h3>
                <p className="mt-2 text-[12px] leading-5 text-[#d9dfe8]">
                  Access China&apos;s full FRP supply chain through GetFRP. Search
                  immediately; create a free buyer account to compare verified
                  companies side by side, review certification evidence, save a
                  shortlist and send one structured RFQ to matched factories.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row md:flex-col lg:flex-row">
                <Link
                  href="/suppliers/search"
                  className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-[#7be4e1] px-4 text-[11px] font-semibold text-[#0a1f44] transition-colors hover:bg-[#7be4e1]"
                >
                  Search the supply chain <ArrowRight size={13} />
                </Link>
                <Link
                  href="/sign-up"
                  className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-white/20 px-4 text-[11px] font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/[0.06]"
                >
                  Create buyer account <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="border-b border-[#d9dfe8] bg-[#f4f6f9]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div>
            <SectionIntro eyebrow="Reviewed supplier profiles" title="Certified and verified suppliers." body="Public company profiles with reviewed identity and certification signals. Product-level compliance remains a separate order check." />
            <SupplierList suppliers={featuredSuppliers} className="mt-7" />
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9dfe8] bg-[#f4f6f9]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.25fr_.75fr] lg:gap-16">
          <div>
            <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#123f8c]">
              China FRP sourcing
            </div>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#0a1f44] sm:text-4xl">
              Why source FRP from China with GetFRP?
            </h2>
            <div className="mt-6 space-y-5 text-[14px] leading-7 text-[#5d6672] sm:text-[15px]">
              <p>
                China has one of the world&apos;s broadest FRP manufacturing
                ecosystems, with specialist factory clusters for pultrusion,
                filament winding, molded grating, SMC/BMC compression molding,
                resin systems and fiber reinforcement. Jiangsu is strong in
                resin and pultruded profiles; Hebei and Shandong combine
                grating, pipe, tanks and corrosion equipment; Guangdong adds
                custom fabrication, machining and export consolidation. This
                depth gives overseas buyers more choices, but it also makes a
                generic search for a &ldquo;China FRP factory&rdquo; too broad to
                produce a dependable shortlist.
              </p>
              <p>
                GetFRP narrows the China FRP supplier market around the product
                and process actually required. Public company identity,
                production location, manufacturing capability, certificate
                scope, product evidence and export readiness are kept as
                separate checks. A verified company record does not imply that
                every FRP grade is certified; the offered resin, construction,
                thickness, production site and current test report still need
                to match the project. Buyers can review the structured
                <Link href="/suppliers" className="mx-1 font-medium text-[#123f8c] underline underline-offset-2">
                  China FRP manufacturer directory
                </Link>
                before a commercial conversation starts.
              </p>
              <p>
                A useful sourcing request begins with service conditions and an
                acceptance basis, not only dimensions and target price. State
                the load case, chemical exposure, operating temperature, fire
                requirement, governing ASTM, EN, ISO or project standard,
                quantity, destination and documentation package. GetFRP then
                maps that controlled specification to the relevant product
                family and factory process. This makes quotations comparable
                and exposes technical deviations before tooling, samples or a
                purchase order create switching costs.
              </p>
              <p>
                The final step is evidence. Use approved samples, current
                certificates, batch traceability, measurable inspection points,
                packaging requirements and export documents against the same
                RFQ revision. The detailed
                <Link href="/source-from-china" className="mx-1 font-medium text-[#123f8c] underline underline-offset-2">
                  FRP sourcing process
                </Link>
                covers standards, regional clusters, supplier checks and the
                path from specification to shipment. When the scope is ready,
                one English-language RFQ keeps the manufacturer comparison,
                quality plan and delivery handoff tied to the same requirement.
              </p>
            </div>
          </div>

          <aside className="h-fit rounded-2xl border border-[#d9dfe8] bg-white p-5 shadow-sm sm:p-7">
            <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#123f8c]">
              How it works
            </div>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#0a1f44]">
              Search → Compare → RFQ
            </h3>
            <ol className="mt-7 space-y-6">
              {HOW_IT_WORKS.map((item) => (
                <li key={item.step} className="flex gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#f4f6f9] text-[#123f8c]">
                    <item.Icon size={18} />
                  </span>
                  <div>
                    <div className="font-mono text-[9px] font-semibold tracking-[0.14em] text-[#5d6672]">
                      STEP {item.step}
                    </div>
                    <div className="mt-1 text-[14px] font-semibold text-[#0a1f44]">
                      {item.title}
                    </div>
                    <p className="mt-1 text-[12px] leading-5 text-[#5d6672]">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <Link
              href="/rfq"
              className="mt-8 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#123f8c] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#0a1f44]"
            >
              Submit your FRP RFQ <ArrowRight size={14} />
            </Link>
          </aside>
        </div>
      </section>

      <section className="border-b border-[#d9dfe8] bg-[#f4f6f9]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionIntro
              eyebrow="Browse the market"
              title="Search by process or product category."
              body="Use the manufacturing route when the process is fixed, or begin with the part family when you are still comparing production options."
            />
            <Link
              href="/suppliers"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#123f8c] hover:underline"
            >
              Open supplier directory <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="mt-9 grid gap-5 lg:grid-cols-2">
            <div className="rounded-xl border border-[#d9dfe8] bg-white p-5 sm:p-6">
              <div className="flex items-center gap-3 border-b border-[#d9dfe8] pb-4">
                <span className="grid size-9 place-items-center rounded-lg bg-[#f4f6f9] text-[#123f8c]">
                  <Factory size={18} />
                </span>
                <div>
                  <h3 className="font-semibold text-[#0a1f44]">By manufacturing process</h3>
                  <p className="mt-0.5 text-[11px] text-[#5d6672]">Match suppliers to the way the part must be made.</p>
                </div>
              </div>
              <div className="mt-2 divide-y divide-[#d9dfe8]">
                {PROCESS_LINKS.map((process) => (
                  <Link
                    key={process.name}
                    href={process.href as never}
                    className="group flex items-center justify-between gap-4 py-3.5"
                  >
                    <div>
                      <div className="text-[13px] font-semibold text-[#0a1f44] group-hover:text-[#123f8c]">
                        {process.name}
                      </div>
                      <div className="mt-0.5 text-[10px] text-[#5d6672]">{process.detail}</div>
                    </div>
                    <ArrowRight size={14} className="shrink-0 text-[#5d6672] transition-transform group-hover:translate-x-1 group-hover:text-[#123f8c]" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-[#d9dfe8] bg-white p-5 sm:p-6">
              <div className="flex items-center gap-3 border-b border-[#d9dfe8] pb-4">
                <span className="grid size-9 place-items-center rounded-lg bg-[#f4f6f9] text-[#123f8c]">
                  <Boxes size={18} />
                </span>
                <div>
                  <h3 className="font-semibold text-[#0a1f44]">By product category</h3>
                  <p className="mt-0.5 text-[11px] text-[#5d6672]">Compare specifications, factory capability and buying checks.</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-3">
                {CATEGORY_LINKS.map(([label, slug]) => (
                  <Link
                    key={slug}
                    href={`/products/${slug}` as never}
                    className="group flex min-h-20 flex-col justify-between rounded-lg border border-[#d9dfe8] bg-[#f4f6f9] p-3.5 transition-colors hover:border-[#7be4e1] hover:bg-[#f4f6f9]"
                  >
                    <Search size={14} className="text-[#5d6672] group-hover:text-[#123f8c]" />
                    <span className="mt-3 text-[12px] font-semibold text-[#0a1f44] group-hover:text-[#123f8c]">
                      {label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9dfe8] bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#123f8c]">
            <FileSearch size={15} /> FRP SOURCING FAQ
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#0a1f44] sm:text-4xl">
            Questions overseas FRP buyers ask first.
          </h2>
          <FaqGrid
            items={HOME_FAQS}
            className="mt-8 border-[#d9dfe8]"
            itemClassName="border-[#d9dfe8]"
            questionClassName="text-[#0a1f44] focus-visible:ring-[#123f8c] [&_[data-slot=accordion-trigger-icon]]:text-[#5d6672]"
            answerClassName="text-[13px] text-[#5d6672]"
          />
        </div>
      </section>
    </>
  );
}
