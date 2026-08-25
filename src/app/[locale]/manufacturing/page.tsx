import type { Metadata } from "next";
import {
  ArrowRight,
  Factory,
  Gauge,
  Layers3,
  Route,
  ShieldCheck,
} from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/badge";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { JsonLd } from "@/components/json-ld";
import { ProcessCardVisual } from "@/components/marketplace/process-card-visual";
import { buttonVariants } from "@/components/ui/button";
import {
  MANUFACTURING_PAGES,
} from "@/lib/data/seo-marketplace-pages";
import { PROCESS_SEARCH_CLUSTERS } from "@/lib/data/search-demand-catalog";
import { alternates, og } from "@/lib/seo";
import { CURRENT_SITE_URL } from "@/lib/sites";

const title = "Composite Manufacturing Processes in China | FRP Suppliers";
const description =
  "Compare 14 composite manufacturing processes in China across eight buyer decision clusters, with product fit, factory controls and supplier evidence requirements.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: alternates("/manufacturing"),
  openGraph: og("/manufacturing", { title, description }),
};

export default async function ManufacturingHub({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const pageUrl = `${CURRENT_SITE_URL}/manufacturing`;

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": `${pageUrl}#collection`,
          url: pageUrl,
          name: title,
          description,
          inLanguage: "en",
          dateModified: "2026-08-25",
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: MANUFACTURING_PAGES.length,
            itemListElement: MANUFACTURING_PAGES.map((process, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: process.h1,
              url: `${CURRENT_SITE_URL}${process.path}`,
            })),
          },
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${CURRENT_SITE_URL}/` },
          { name: "Manufacturing", url: pageUrl },
        ]}
      />

      <section className="fiber-surface-dark border-b border-border/80 text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:items-end">
            <div className="max-w-4xl">
              <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7be4e1]">
                China composite manufacturing directory
              </div>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
                Match the composite part to the right process—and the right factory proof.
              </h1>
              <p className="mt-5 max-w-3xl text-[15px] leading-7 text-[#d9dfe8]">
                Compare open-mold, closed-mold, continuous, pressure-cure and
                thermoplastic routes by geometry, volume and the controls a Chinese supplier should document.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#process-map" className={buttonVariants({ size: "lg" })}>
                  Compare process routes
                </a>
                <Link
                  href="/products"
                  className={buttonVariants({ size: "lg", variant: "outline", className: "border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white" })}
                >
                  Browse composite products
                </Link>
              </div>
            </div>
            <dl className="grid grid-cols-3 gap-3">
              {[
                { icon: Route, value: PROCESS_SEARCH_CLUSTERS.length, label: "decision clusters" },
                { icon: Factory, value: MANUFACTURING_PAGES.length, label: "process routes" },
                { icon: ShieldCheck, value: "3-part", label: "evidence screen" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-white/15 bg-white/5 p-4">
                  <item.icon size={17} className="text-[#7be4e1]" />
                  <dd className="mt-3 text-2xl font-semibold">{item.value}</dd>
                  <dt className="mt-1 text-[11px] leading-4 text-[#d9dfe8]">{item.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="border-b border-border/70 bg-[#f3f6fa]">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 py-10 sm:px-6 lg:grid-cols-3">
          {[
            {
              icon: Layers3,
              title: "1. Define the part",
              text: "Geometry, laminate direction, size, surface, tolerance and annual volume set the viable process window.",
            },
            {
              icon: Gauge,
              title: "2. Compare process controls",
              text: "Material handling, tooling, pressure or vacuum, cure and dimensional control distinguish capability from a process label.",
            },
            {
              icon: ShieldCheck,
              title: "3. Verify factory evidence",
              text: "Approve the exact product-process relationship through records, trials, inspection and product-level test evidence.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-xl border border-border/70 bg-white p-5">
              <item.icon size={19} className="text-[#123f8c]" />
              <h2 className="mt-4 font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="process-animations"
        className="border-b border-border/70 bg-background"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18">
          <div className="max-w-3xl">
            <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#123f8c]">
              14 manufacturing routes · animated
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
              See how each composite process moves material
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-[15px]">
              Use the motion diagrams to distinguish feed, tooling, pressure,
              cure and consolidation before opening the detailed factory-control
              guide for each route.
            </p>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {MANUFACTURING_PAGES.map((process) => (
              <Link
                key={process.path}
                href={process.path as never}
                className="group rounded-xl border border-border/80 bg-white p-6 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-foreground/40 hover:shadow-lg hover:shadow-brand-navy/5 focus-visible:ring-2 focus-visible:ring-brand-teal motion-reduce:transform-none motion-reduce:transition-none"
              >
                <ProcessCardVisual process={process.slug} />
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold">{process.h1}</h3>
                  <ArrowRight
                    size={16}
                    className="mt-1 shrink-0 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {process.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="process-map" className="scroll-mt-20 mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18">
        <div className="grid gap-7 lg:grid-cols-[280px_1fr]">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Process search architecture
            </div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              Eight decisions cover 14 manufacturing routes
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Search demand often mixes a product, a machine and a process. These clusters give every route a clear role while keeping the product page as the commercial destination.
            </p>
            <nav aria-label="Manufacturing cluster shortcuts" className="mt-6 flex flex-wrap gap-2 lg:flex-col">
              {PROCESS_SEARCH_CLUSTERS.map((cluster, index) => (
                <a
                  key={cluster.id}
                  href={`#${cluster.id}`}
                  className="rounded-lg border border-border bg-background px-3 py-2 text-xs font-medium transition-colors hover:border-[#123f8c]/40 hover:text-[#123f8c]"
                >
                  {String(index + 1).padStart(2, "0")} · {cluster.title}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-5">
            {PROCESS_SEARCH_CLUSTERS.map((cluster, index) => (
              <article
                id={cluster.id}
                key={cluster.id}
                className="scroll-mt-24 rounded-2xl border border-border/70 bg-background p-5 sm:p-7"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-semibold text-[#123f8c]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <Badge variant="secondary">process cluster</Badge>
                    </div>
                    <h3 className="mt-3 text-2xl font-semibold">{cluster.title}</h3>
                    <p className="mt-2 font-mono text-[10px] leading-5 text-[#123f8c]">{cluster.buyerLanguage}</p>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{cluster.summary}</p>
                  </div>
                  <Link
                    href={cluster.relatedProductHref as never}
                    className="group min-w-52 rounded-xl border border-[#123f8c]/15 bg-[#f3f6fa] p-4"
                  >
                    <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">Related product intent</div>
                    <div className="mt-2 flex items-center justify-between gap-3 text-sm font-semibold text-[#123f8c]">
                      {cluster.relatedProductLabel}
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </div>

                <div className="mt-6 grid gap-4 border-t border-border/70 pt-5 md:grid-cols-[1fr_1fr]">
                  <div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">Factory controls to verify</div>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-3 md:grid-cols-1 xl:grid-cols-3">
                      {cluster.controls.map((control) => (
                        <li key={control} className="rounded-lg bg-muted/40 px-3 py-2 text-xs leading-5">{control}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">Compare routes</div>
                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      {cluster.routes.map((route) => (
                        <Link
                          key={route.href}
                          href={route.href as never}
                          className="group flex items-center justify-between rounded-lg border border-border px-3 py-2 text-xs font-semibold transition-colors hover:border-[#123f8c]/40 hover:text-[#123f8c]"
                        >
                          {route.label}
                          <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/70 bg-[#07111c] text-white">
        <div className="mx-auto grid max-w-7xl gap-7 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#7be4e1]">Supplier qualification</div>
            <h2 className="mt-2 text-2xl font-semibold">A claimed process is not yet a qualified capability.</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
              Use the process page to build the audit checklist, then validate the factory against the exact material, geometry, tolerance, volume and acceptance plan.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/suppliers" className={buttonVariants({ size: "lg" })}>
              Search manufacturers
            </Link>
            <Link
              href="/services/frp-engineering-qa"
              className={buttonVariants({ size: "lg", variant: "outline", className: "border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white" })}
            >
              Engineering &amp; QA
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
