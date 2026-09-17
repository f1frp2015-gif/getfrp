import { Fragment } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  FileCheck,
  Layers3,
  PackageSearch,
  ShieldCheck,
} from "lucide-react";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { FaqGrid } from "@/components/faq-grid";
import { JsonLd } from "@/components/json-ld";
import { SupplierList } from "@/components/supplier-list";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import type { IndustryApplicationPageData } from "@/lib/data/industry-application-pages";
import type { MarketplacePage } from "@/lib/data/seo-marketplace-pages";
import { CURRENT_SITE_URL } from "@/lib/sites";
import type { SerializedSupplier } from "@/lib/types/supplier-directory";

type Filters = { verified?: boolean; exportReady?: boolean; iso?: boolean; moq?: boolean };

export function IndustryApplicationContent({
  data,
  page,
  suppliers,
  filters = {},
}: {
  data: IndustryApplicationPageData;
  page: MarketplacePage;
  suppliers: SerializedSupplier[];
  filters?: Filters;
}) {
  const pageUrl = `${CURRENT_SITE_URL}${page.path}`;
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Applications", href: "/applications" },
    { name: data.industryName, href: page.path },
  ];

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": `${pageUrl}#collection`,
          name: data.h1,
          description: data.metaDescription,
          url: pageUrl,
          inLanguage: "en",
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: suppliers.length,
            itemListElement: suppliers.map((supplier, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `${CURRENT_SITE_URL}/suppliers/${supplier.slug}`,
              name: supplier.name,
            })),
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: data.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }}
      />
      <BreadcrumbJsonLd
        items={breadcrumbs.map((item) => ({
          name: item.name,
          url: `${CURRENT_SITE_URL}${item.href === "/" ? "" : item.href}`,
        }))}
      />

      {/* Hero */}
      <section className="fiber-surface-dark border-b border-white/10 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <nav className="text-xs text-[#d9dfe8]" aria-label="Breadcrumb">
            {breadcrumbs.map((item, index) => (
              <Fragment key={item.href}>
                {index ? <span className="mx-2">›</span> : null}
                {index === breadcrumbs.length - 1 ? (
                  <span>{item.name}</span>
                ) : (
                  <Link href={item.href as never}>{item.name}</Link>
                )}
              </Fragment>
            ))}
          </nav>

          <div className="mt-8 max-w-4xl">
            <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7be4e1]">
              {data.eyebrow}
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">
              {data.h1}
            </h1>
            <p className="mt-5 max-w-3xl text-[16px] leading-7 text-[#d9dfe8] sm:text-lg">
              {data.summary}
            </p>

            <div className="mt-6 rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
              <div className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7be4e1]">
                <ShieldCheck size={14} />
                Industry Engineering Criteria
              </div>
              <p className="mt-2 text-sm leading-6 text-[#d9dfe8]">
                {data.heroNote}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#fit" className={buttonVariants({ size: "lg", variant: "default" })}>
                Where Composites Fit
              </a>
              <a href="#standards" className={buttonVariants({ size: "lg", variant: "outline" })}>
                ASTM / EN Standards
              </a>
              <a href="#suppliers" className={buttonVariants({ size: "lg", variant: "outline" })}>
                Supplier Matches ({suppliers.length})
              </a>
              <Link href="/rfq" className={buttonVariants({ size: "lg", variant: "secondary" })}>
                Request Sourcing Shortlist <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Where composites fit in <industry> */}
      <section id="fit" className="scroll-mt-16 border-b border-border/80 bg-background py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#123f8c]">
            Sector Engineering Analysis
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Where composites fit in {data.industryName}
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-7 text-muted-foreground">
            <p>{data.whereCompositesFit.overview}</p>
            {data.whereCompositesFit.tbds.map((tbd) => (
              <div key={tbd} className="rounded-lg border border-dashed border-border/80 bg-muted/20 p-4 font-mono text-xs text-muted-foreground">
                {tbd}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Component families used in this sector */}
      <section id="components" className="scroll-mt-16 border-b border-border/80 bg-muted/15 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#123f8c]">
            Functional Architecture
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Component families used in this sector
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
            Explore the structural assemblies and specialized composite products engineered for {data.industryName} service conditions.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {data.componentFamilies.map((component) => (
              <div
                key={component.name}
                className="flex flex-col justify-between rounded-xl border bg-background p-6 shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                    <Layers3 size={14} />
                    Component Family
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">
                    {component.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {component.description}
                  </p>
                  <div className="mt-3 rounded border border-dashed border-border/60 bg-muted/30 p-2.5 font-mono text-[11px] leading-5 text-muted-foreground">
                    {component.tbd}
                  </div>
                </div>

                <div className="mt-6 space-y-2 border-t pt-4 text-xs font-medium">
                  <Link
                    href={component.productHref as never}
                    className="flex items-center justify-between text-[#123f8c] hover:underline"
                  >
                    <span>View {component.productLabel}</span>
                    <ArrowRight size={13} />
                  </Link>
                  <Link
                    href={component.processHref as never}
                    className="flex items-center justify-between text-muted-foreground hover:text-foreground hover:underline"
                  >
                    <span>Process: {component.processLabel}</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Service conditions and applicable standards */}
      <section id="standards" className="scroll-mt-16 border-b border-border/80 bg-background py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#123f8c]">
            Acceptance Criteria &amp; Testing
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Service conditions and applicable standards
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
            {data.serviceConditions.description}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border bg-muted/20 p-4">
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Operating Envelope
              </div>
              <div className="mt-1.5 text-sm font-semibold text-foreground">
                {data.serviceConditions.temperatureRange}
              </div>
            </div>
            <div className="rounded-lg border bg-muted/20 p-4">
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Exposure Media
              </div>
              <div className="mt-1.5 text-sm font-semibold text-foreground">
                {data.serviceConditions.exposureMedium}
              </div>
            </div>
            <div className="rounded-lg border bg-muted/20 p-4">
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Critical Mechanical Target
              </div>
              <div className="mt-1.5 text-sm font-semibold text-foreground">
                {data.serviceConditions.criticalMechanicalProperty}
              </div>
            </div>
          </div>

          <div className="mt-5 space-y-2">
            {data.serviceConditions.tbds.map((tbd) => (
              <div key={tbd} className="rounded border border-dashed border-border/80 bg-muted/20 p-3 font-mono text-xs text-muted-foreground">
                {tbd}
              </div>
            ))}
          </div>

          {/* Three-Tier Standards Comparison Table */}
          <div className="mt-8 overflow-hidden rounded-xl border border-border/80">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-left text-[13px]">
                <thead className="border-b border-border/80 bg-muted/40 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th className="px-5 py-3.5">Component / Scope</th>
                    <th className="px-5 py-3.5">ASTM Standard (USA)</th>
                    <th className="px-5 py-3.5">EN Standard (Europe)</th>
                    <th className="px-5 py-3.5">GB Standard (China)</th>
                    <th className="px-5 py-3.5">Engineering Test Basis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {data.serviceConditions.standardsTable.map((row) => (
                    <tr key={row.requirement} className="hover:bg-muted/10">
                      <th className="px-5 py-3.5 font-medium text-foreground">{row.requirement}</th>
                      <td className="px-5 py-3.5 font-mono text-xs text-primary">{row.astm}</td>
                      <td className="px-5 py-3.5 font-mono text-xs text-primary">{row.en}</td>
                      <td className="px-5 py-3.5 font-mono text-xs text-primary">{row.gb}</td>
                      <td className="px-5 py-3.5 text-xs text-muted-foreground">{row.testBasis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Supplier matches for <industry> */}
      <section id="suppliers" className="scroll-mt-16 border-b border-border/80 bg-muted/15 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                VERIFIED PUBLIC DATA
              </div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Supplier matches for {data.industryName}
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                Reviewed Chinese manufacturing records matching the resin, reinforcement, and application scope of this sector.
              </p>
            </div>
            <form method="get" className="flex flex-wrap gap-2 text-xs">
              <Filter name="verified" label="Factory verified" checked={filters.verified} />
              <Filter name="export" label="Export ready" checked={filters.exportReady} />
              <Filter name="moq" label="MOQ declared" checked={filters.moq} />
              <Filter name="iso" label="ISO 9001" checked={filters.iso} />
              <button className="rounded-md bg-foreground px-3 py-2 text-background">Apply filters</button>
            </form>
          </div>

          {suppliers.length > 0 ? (
            <SupplierList suppliers={suppliers} className="mt-8" />
          ) : (
            <div className="mt-8 rounded-xl border border-dashed border-border/80 bg-background p-10 text-center">
              <PackageSearch className="mx-auto text-muted-foreground" size={28} />
              <h3 className="mt-3 font-semibold text-foreground">
                No approved supplier products in this combination yet
              </h3>
              <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
                GetFRP displays only reviewed public factory records and approved products. If fewer than three credible records match, we direct buyers to adjacent product and process categories rather than fabricating listings.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {data.relatedSearches.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href as never}
                    className="rounded-full border bg-background px-4 py-1.5 text-xs text-primary hover:border-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. Buying checks before you send an RFQ */}
      <section id="buying-checks" className="scroll-mt-16 border-b border-border/80 bg-background py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#123f8c]">
            Procurement Risk Control
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Buying checks before you send an RFQ
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Protect quality, freeze test acceptance boundaries, and prevent material substitutions before commercial commitment.
          </p>

          <ul className="mt-7 space-y-3.5">
            {data.buyingChecks.checks.map((check) => (
              <li key={check} className="flex items-start gap-3 rounded-xl border bg-muted/15 p-4 text-sm leading-6 text-foreground">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#123f8c]" />
                <span>{check}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 rounded-lg border border-dashed border-border/80 bg-muted/20 p-4 font-mono text-xs text-muted-foreground">
            {data.buyingChecks.tbd}
          </div>
        </div>
      </section>

      {/* 6. Buyer FAQ */}
      <section id="faqs" className="scroll-mt-16 border-b border-border/80 bg-muted/15 py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#123f8c]">
            People Also Ask
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Buyer FAQ
          </h2>
          <FaqGrid items={data.faqs} className="mt-8" />
        </div>
      </section>

      {/* Related Searches */}
      <section className="border-b border-border/80 bg-background py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-xl font-semibold">Related searches &amp; categories</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {data.relatedSearches.map((item) => (
              <Link
                key={item.href}
                href={item.href as never}
                className="rounded-full border bg-background px-4 py-2 text-xs font-medium hover:border-foreground/50"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RFQ CTA */}
      <section className="bg-foreground py-14 text-background">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Factory className="mx-auto text-primary" size={32} />
          <h2 className="mt-4 text-3xl font-semibold">
            Need vetted {data.industryName} composite suppliers?
          </h2>
          <p className="mt-4 text-sm leading-6 text-background/80">
            Submit your technical specification, drawings, and delivery requirements. GetFRP matches audited Chinese manufacturers without synthetic supply records.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/rfq" className={`${buttonVariants({ size: "lg", variant: "secondary" })}`}>
              Submit an RFQ <ArrowRight size={15} />
            </Link>
            <Link href="/applications" className={buttonVariants({ size: "lg", variant: "outline" })}>
              All Industries
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Filter({ name, label, checked }: { name: string; label: string; checked?: boolean }) {
  return (
    <label className="flex items-center gap-2 rounded-md border bg-background px-3 py-2">
      <input type="checkbox" name={name} value="1" defaultChecked={checked} />
      {label}
    </label>
  );
}
