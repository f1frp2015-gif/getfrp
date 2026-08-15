import type { Metadata } from "next";
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  ExternalLink,
  FileCheck2,
  ShieldCheck,
} from "lucide-react";
import { setRequestLocale } from "next-intl/server";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { JsonLd } from "@/components/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import {
  INTERNATIONAL_STANDARDS_CROSSWALK,
  INTERNATIONAL_STANDARDS_SOURCES,
  STANDARDS_REGIONS,
  type StandardsCoverage,
} from "@/lib/data/international-standards-crosswalk";
import { alternates, og } from "@/lib/seo";
import { CURRENT_SITE_URL } from "@/lib/sites";

const PAGE_PATH = "/standards";
const PAGE_TITLE =
  "FRP Standards: EU, US, Australia & Canada | GetFRP";
const PAGE_DESCRIPTION =
  "Compare FRP standards for seven manufacturing processes and glass fibre, carbon fibre, epoxy and polyurethane across Europe, the USA, Australia and Canada.";
const REVIEWED_DATE = "2026-08-14";

const COVERAGE_LABELS: Record<
  StandardsCoverage,
  { label: string; className: string }
> = {
  direct: {
    label: "Direct standard",
    className: "border-emerald-200 bg-emerald-50 text-emerald-800",
  },
  sector: {
    label: "Sector-specific",
    className: "border-sky-200 bg-sky-50 text-sky-800",
  },
  contract: {
    label: "Contract-adopted",
    className: "border-amber-200 bg-amber-50 text-amber-900",
  },
};

const FAMILIES = ["Manufacturing processes", "Raw materials"] as const;

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: alternates(PAGE_PATH),
  openGraph: og(PAGE_PATH, {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  }),
};

export default async function StandardsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const pageUrl = `${CURRENT_SITE_URL}${PAGE_PATH}`;
  const processCount = INTERNATIONAL_STANDARDS_CROSSWALK.filter(
    (row) => row.family === "Manufacturing processes",
  ).length;
  const materialCount = INTERNATIONAL_STANDARDS_CROSSWALK.filter(
    (row) => row.family === "Raw materials",
  ).length;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "@id": `${pageUrl}#article`,
          url: pageUrl,
          headline: PAGE_TITLE.replace(" | GetFRP", ""),
          description: PAGE_DESCRIPTION,
          inLanguage: "en",
          dateModified: REVIEWED_DATE,
          author: { "@id": `${CURRENT_SITE_URL}/#organization` },
          publisher: { "@id": `${CURRENT_SITE_URL}/#organization` },
          citation: INTERNATIONAL_STANDARDS_SOURCES.map((source) => source.href),
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${CURRENT_SITE_URL}/` },
          { name: "Standards", url: pageUrl },
        ]}
      />

      <section className="overflow-hidden border-b border-border/80 bg-[#0a1f44] text-white">
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <div
            className="pointer-events-none absolute -right-24 -top-40 size-[440px] rounded-full border border-[#19c3c8]/20"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-4 -top-24 size-[300px] rounded-full border border-[#19c3c8]/20"
            aria-hidden="true"
          />

          <nav className="relative text-xs text-[#d9dfe8]" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="mx-2">›</span>
            <span>Standards</span>
          </nav>

          <div className="relative mt-8 max-w-5xl">
            <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7be4e1]">
              FRP STANDARD CROSSWALK · EU / US / AU / CA
            </div>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-6xl">
              FRP process and raw-material standards compared
            </h1>
            <p className="mt-6 max-w-4xl text-[16px] leading-8 text-[#d9dfe8] sm:text-lg">
              Compare the main standards used for composite manufacturing and
              constituent materials across Europe, the United States, Australia
              and Canada. Each row separates direct standards from sector-specific
              routes and contract-adopted international methods.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#manufacturing-processes"
                className="rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-[#0a1f44] transition-colors hover:bg-[#e8fbfb]"
              >
                Compare manufacturing processes
              </a>
              <a
                href="#raw-materials"
                className="rounded-md border border-white/30 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Compare raw materials
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/80 bg-muted/20">
        <div className="mx-auto grid max-w-7xl gap-3 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {[
            { value: processCount, label: "Manufacturing processes", note: "From pultrusion to filament winding" },
            { value: materialCount, label: "Raw-material families", note: "Fibres and resin systems" },
            { value: STANDARDS_REGIONS.length, label: "Regional systems", note: "Europe, USA, Australia, Canada" },
            { value: "3 levels", label: "Coverage made explicit", note: "Direct, sector-specific, contract-adopted" },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-border/70 bg-background p-4">
              <div className="text-2xl font-semibold tracking-tight text-[#0a1f44]">
                {item.value}
              </div>
              <div className="mt-1 text-sm font-semibold">{item.label}</div>
              <div className="mt-1 text-xs leading-5 text-muted-foreground">{item.note}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-border/80">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(300px,0.65fr)]">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#123f8c]">
                HOW TO READ THE TABLE
              </div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Similar purpose does not mean technical equivalence
              </h2>
              <p className="mt-4 max-w-3xl text-[15px] leading-7 text-muted-foreground">
                A process name rarely identifies the complete conformity route.
                RTM, vacuum infusion and roll wrapping often have no single national
                finished-product standard; the applicable product, sector and test
                methods must be assembled into one controlled specification. Verify
                the current edition in the official catalogue before issuing an RFQ.
              </p>
            </div>
            <div className="rounded-xl border border-border/70 bg-muted/20 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Coverage key
              </div>
              <div className="mt-4 space-y-3">
                {(Object.keys(COVERAGE_LABELS) as StandardsCoverage[]).map((key) => (
                  <div key={key} className="flex items-start gap-3">
                    <span className={`mt-0.5 shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${COVERAGE_LABELS[key].className}`}>
                      {COVERAGE_LABELS[key].label}
                    </span>
                    <span className="text-xs leading-5 text-muted-foreground">
                      {key === "direct"
                        ? "A named standard directly covers the material or delivered product."
                        : key === "sector"
                          ? "A standard applies only to a defined product, market or authority."
                          : "The market commonly adopts ISO, ASTM, IEC or another basis by contract."}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {FAMILIES.map((family, familyIndex) => {
        const rows = INTERNATIONAL_STANDARDS_CROSSWALK.filter(
          (row) => row.family === family,
        );
        const anchor = family === "Manufacturing processes" ? "manufacturing-processes" : "raw-materials";

        return (
          <section
            id={anchor}
            key={family}
            className={`scroll-mt-20 border-b border-border/80 ${familyIndex % 2 === 1 ? "bg-muted/15" : ""}`}
          >
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#123f8c]">
                    {family === "Manufacturing processes" ? "PROCESS STANDARDS" : "CONSTITUENT STANDARDS"}
                  </div>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight">{family}</h2>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
                    {family === "Manufacturing processes"
                      ? "Product and qualification routes for seven common thermoset-composite manufacturing processes."
                      : "Purchase-specification baselines for the four reinforcement and resin families requested most often."}
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                  <BookOpenCheck size={14} className="text-[#19c3c8]" />
                  Reviewed {REVIEWED_DATE}
                </div>
              </div>

              <div className="mt-7 overflow-hidden rounded-xl border border-border/80 bg-background shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[1180px] table-fixed text-left" aria-label={`${family} standards comparison`}>
                    <caption className="sr-only">
                      Major FRP standards compared across Europe, the United States,
                      Australia and Canada.
                    </caption>
                    <colgroup>
                      <col className="w-[220px]" />
                      {STANDARDS_REGIONS.map((region) => (
                        <col key={region.id} className="w-[240px]" />
                      ))}
                    </colgroup>
                    <thead className="border-b border-border/80 bg-[#f4f6f9]">
                      <tr>
                        <th className="sticky left-0 z-20 border-r border-border/80 bg-[#f4f6f9] px-5 py-4 align-bottom">
                          <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                            Process / material
                          </div>
                          <div className="mt-1 text-xs font-medium text-foreground">Control point</div>
                        </th>
                        {STANDARDS_REGIONS.map((region) => (
                          <th key={region.id} className="border-r border-border/70 px-5 py-4 align-bottom last:border-r-0">
                            <div className="flex items-center gap-2">
                              <span className="inline-flex h-6 min-w-9 items-center justify-center rounded border border-[#123f8c]/20 bg-white px-2 font-mono text-[10px] tracking-[0.12em] text-[#123f8c]">
                                {region.code}
                              </span>
                              <span className="text-sm font-semibold text-[#0a1f44]">{region.label}</span>
                            </div>
                            <div className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
                              {region.system}
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row) => (
                        <tr key={row.id} className="border-b border-border/70 last:border-b-0">
                          <th className="sticky left-0 z-10 border-r border-border/80 bg-white px-5 py-5 align-top">
                            <div className="text-[15px] font-semibold text-[#0a1f44]">{row.name}</div>
                            <div className="mt-1 text-[11px] leading-5 text-muted-foreground">{row.qualifier}</div>
                            <div className="mt-4 border-l-2 border-[#19c3c8] pl-3 text-[11px] font-normal leading-5 text-muted-foreground">
                              <span className="font-semibold text-foreground">Buyer check: </span>
                              {row.buyerCheck}
                            </div>
                          </th>
                          {STANDARDS_REGIONS.map((region) => {
                            const cell = row.regions[region.id];
                            const coverage = COVERAGE_LABELS[cell.coverage];

                            return (
                              <td key={region.id} className="border-r border-border/70 px-5 py-5 align-top last:border-r-0">
                                <span className={`inline-flex rounded-full border px-2 py-0.5 text-[10px] font-semibold ${coverage.className}`}>
                                  {coverage.label}
                                </span>
                                <div className="mt-3 space-y-3">
                                  {cell.references.map((reference) => (
                                    <div key={`${reference.code}-${reference.title}`}>
                                      <div className="font-mono text-[11px] font-semibold leading-5 text-[#123f8c]">
                                        {reference.code}
                                      </div>
                                      <div className="mt-0.5 text-[11px] leading-5 text-foreground/75">
                                        {reference.title}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                                <p className="mt-4 border-t border-border/60 pt-3 text-[11px] leading-5 text-muted-foreground">
                                  {cell.note}
                                </p>
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="border-t border-border/70 bg-muted/20 px-5 py-3 text-[11px] leading-5 text-muted-foreground">
                  Scroll horizontally on smaller screens. Edition identifiers are shown where they were verified in the current publisher catalogue; always confirm amendments and project adoption before purchase or testing.
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="border-b border-border/80 bg-[#f4f6f9]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#123f8c]">
                RFQ EVIDENCE RULE
              </div>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                Turn the selected standard into inspectable evidence
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-muted-foreground">
                A certificate logo or catalogue claim is not enough. Put the
                edition, product scope, acceptance values and report requirements
                into the RFQ so every supplier quotes against the same basis.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/rfq" className={buttonVariants({ className: "bg-[#123f8c] text-white hover:bg-[#0a1f44]" })}>
                  Submit a standards-led RFQ <ArrowRight size={14} />
                </Link>
                <Link href="/services/frp-engineering-qa" className={buttonVariants({ variant: "outline" })}>
                  Engineering &amp; QA review
                </Link>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { icon: FileCheck2, title: "Edition and scope", text: "Standard number, year/amendment, product type, dimensions, service and exclusions." },
                { icon: ShieldCheck, title: "Acceptance basis", text: "Minimum or characteristic values, conditioning, sampling, retest rule and failure mode." },
                { icon: BookOpenCheck, title: "Traceable reports", text: "Specimen direction, batch, laboratory status, test date, raw data and signed report number." },
                { icon: CheckCircle2, title: "Finished-product match", text: "Evidence must match the quoted grade, site, process, tooling and delivered construction." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border/70 bg-white p-5">
                  <item.icon size={18} className="text-[#19c3c8]" />
                  <h3 className="mt-3 text-sm font-semibold">{item.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#123f8c]">
                PRIMARY CATALOGUES
              </div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">Verify the current edition at source</h2>
            </div>
            <span className="hidden text-xs text-muted-foreground sm:block">Last cross-check: {REVIEWED_DATE}</span>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {INTERNATIONAL_STANDARDS_SOURCES.map((source) => (
              <a
                key={source.href}
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-24 items-start justify-between gap-3 rounded-xl border border-border/70 p-4 text-sm font-medium leading-6 text-[#123f8c] transition-colors hover:border-[#123f8c]/50 hover:bg-muted/20"
              >
                <span>{source.label}</span>
                <ExternalLink size={13} className="mt-1 shrink-0 transition-transform group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
