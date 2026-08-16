import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Gauge,
  Layers3,
  Microscope,
  Route,
  ShieldCheck,
} from "lucide-react";
import { Fragment } from "react";

import { ProcessCardVisual } from "@/components/marketplace/process-card-visual";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import type { ManufacturingProcessGuide } from "@/lib/data/manufacturing-process-guides";
import type { MarketplacePage } from "@/lib/data/seo-marketplace-pages";

type Breadcrumb = { name: string; href: string };

export function ProcessGuideContent({
  page,
  guide,
  breadcrumbs,
}: {
  page: MarketplacePage;
  guide: ManufacturingProcessGuide;
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <>
      <section className="overflow-hidden border-b border-border/80 bg-[linear-gradient(180deg,#f8fbfc_0%,#ffffff_100%)]">
        <div className="mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6 sm:pb-20">
          <nav className="text-xs text-muted-foreground" aria-label="Breadcrumb">
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

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                Process engineering guide · China supplier discovery
              </div>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
                {page.h1}
              </h1>
              <p className="mt-6 text-[16px] leading-8 text-muted-foreground">
                {guide.answer}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[guide.primaryKeyword, ...guide.keywords.slice(0, 3)].map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full border border-primary/15 bg-primary/[0.035] px-3 py-1.5 text-xs text-foreground/75"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#how-it-works" className={buttonVariants({ size: "lg" })}>
                  Explore the process <ArrowRight size={15} />
                </a>
                <Link href="/rfq" className={buttonVariants({ size: "lg", variant: "outline" })}>
                  Submit a process RFQ
                </Link>
              </div>
            </div>

            <figure>
              <ProcessCardVisual process={guide.slug} variant="hero" />
              <figcaption className="mt-3 flex items-start gap-2 text-xs leading-5 text-muted-foreground">
                <Route size={14} className="mt-0.5 shrink-0 text-primary" />
                Animated technical schematic: follow material movement, forming action and consolidation. Motion is disabled automatically when reduced motion is preferred.
              </figcaption>
            </figure>
          </div>

          <dl className="mt-12 grid overflow-hidden rounded-xl border border-border/70 bg-background sm:grid-cols-2 lg:grid-cols-4">
            {guide.snapshot.map((item, index) => (
              <div
                key={item.label}
                className={`p-5 ${index ? "border-t border-border/70 sm:border-l sm:border-t-0" : ""} ${index === 2 ? "sm:border-l-0 lg:border-l" : ""}`}
              >
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {item.label}
                </dt>
                <dd className="mt-2 text-sm font-semibold">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <nav className="sticky top-0 z-20 border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85" aria-label="On this page">
        <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-4 py-3 text-xs font-medium sm:px-6">
          <a className="whitespace-nowrap hover:text-primary" href="#how-it-works">How it works</a>
          <a className="whitespace-nowrap hover:text-primary" href="#materials">Materials</a>
          <a className="whitespace-nowrap hover:text-primary" href="#process-controls">Process controls</a>
          <a className="whitespace-nowrap hover:text-primary" href="#defects">Defects</a>
          <a className="whitespace-nowrap hover:text-primary" href="#suppliers">Suppliers</a>
          <a className="whitespace-nowrap hover:text-primary" href="#references">References</a>
        </div>
      </nav>

      <section className="border-b border-border/80" id="how-it-works">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
            <div>
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                <Gauge size={14} /> Process principle
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
                How the {guide.shortName.toLowerCase()} process works
              </h2>
              <p className="mt-5 text-[15px] leading-7 text-muted-foreground">{guide.principle}</p>
            </div>
            <ol className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
              {guide.steps.map((step, index) => (
                <li key={step.title} className="relative rounded-xl border border-border/70 bg-background p-5">
                  <div className="font-mono text-[11px] text-primary">{String(index + 1).padStart(2, "0")}</div>
                  <h3 className="mt-3 font-semibold">{step.title}</h3>
                  <p className="mt-2 text-[13px] leading-6 text-muted-foreground">{step.description}</p>
                  <div className="mt-4 border-t border-border/70 pt-3 text-[12px] leading-5 text-foreground/75">
                    <span className="font-semibold text-foreground">Control:</span> {step.control}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-b border-border/80 bg-[#f4f7f8]" id="materials">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                <Layers3 size={14} /> Material system
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">What enters the process</h2>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {guide.materialStack.map((item, index) => (
              <article key={item.label} className="rounded-xl border border-border/70 bg-background p-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/8 font-mono text-xs text-primary">
                  {index + 1}
                </div>
                <h3 className="mt-4 font-semibold">{item.label}</h3>
                <p className="mt-2 text-[13px] leading-6 text-muted-foreground">{item.detail}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <article className="rounded-xl border border-emerald-900/10 bg-emerald-50/50 p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-emerald-950">
                <CheckCircle2 size={16} /> Strong process fit
              </div>
              <ul className="mt-4 space-y-3 text-sm text-emerald-950/75">
                {guide.bestFor.map((item) => <li key={item} className="flex gap-3"><span aria-hidden>•</span><span>{item}</span></li>)}
              </ul>
            </article>
            <article className="rounded-xl border border-amber-900/10 bg-amber-50/60 p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-amber-950">
                <AlertTriangle size={16} /> Engineering watch-outs
              </div>
              <ul className="mt-4 space-y-3 text-sm text-amber-950/75">
                {guide.watchFor.map((item) => <li key={item} className="flex gap-3"><span aria-hidden>•</span><span>{item}</span></li>)}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="border-b border-border/80" id="process-controls">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
            <ShieldCheck size={14} /> Buyer audit map
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">Critical process controls and evidence</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
            A supplier claim is useful only when the process window is tied to the offered material, tooling, drawing revision and production batch.
          </p>
          <div className="mt-8 overflow-x-auto rounded-xl border border-border/70">
            <table className="w-full min-w-[760px] text-left text-[13px]">
              <thead className="border-b border-border/70 bg-muted/35">
                <tr><th className="px-5 py-4">Stage</th><th className="px-5 py-4">What must be controlled</th><th className="px-5 py-4">Evidence to request</th></tr>
              </thead>
              <tbody>
                {guide.controls.map((row) => (
                  <tr key={row.stage} className="border-b border-border/60 last:border-0">
                    <th className="px-5 py-5 align-top font-semibold">{row.stage}</th>
                    <td className="px-5 py-5 align-top leading-6 text-muted-foreground">{row.control}</td>
                    <td className="px-5 py-5 align-top leading-6 text-muted-foreground">{row.evidence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-b border-border/80 bg-[#0a1f44] text-white" id="defects">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#7be4e1]">
            <Microscope size={14} /> Defect diagnosis
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">Common defects, causes and detection</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {guide.defects.map((item, index) => (
              <article key={item.defect} className="rounded-xl border border-white/15 bg-white/[0.045] p-6">
                <div className="font-mono text-[11px] text-[#7be4e1]">DEFECT {String(index + 1).padStart(2, "0")}</div>
                <h3 className="mt-3 text-lg font-semibold">{item.defect}</h3>
                <p className="mt-4 text-[13px] leading-6 text-slate-300"><strong className="text-white">Likely cause:</strong> {item.cause}</p>
                <p className="mt-3 text-[13px] leading-6 text-slate-300"><strong className="text-white">Detection:</strong> {item.detection}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/80">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-3xl font-semibold tracking-[-0.03em]">Typical {guide.shortName.toLowerCase()} applications</h2>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {guide.applications.map((application) => (
              <div key={application} className="flex min-h-24 items-end rounded-xl border border-border/70 bg-[radial-gradient(circle_at_85%_10%,rgba(25,195,200,0.14),transparent_40%)] p-5 text-sm font-semibold">
                {application}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/80 bg-muted/15" id="references">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="max-w-3xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">Source transparency</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">Technical references reviewed</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              This guide uses the JEC process taxonomy, CAMX/ACMA/SAMPE review framework and process-specific material from industry associations, national research centers or government laboratories. Sources explain the process; they do not endorse listed suppliers.
            </p>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {guide.sources.map((source) => (
              <a
                key={source.url}
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className="group rounded-xl border border-border/70 bg-background p-5 transition-colors hover:border-primary/50"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-primary">{source.organization}</div>
                    <h3 className="mt-2 font-semibold group-hover:text-primary">{source.title}</h3>
                  </div>
                  <ExternalLink size={15} className="mt-1 shrink-0 text-muted-foreground" />
                </div>
                <p className="mt-3 text-[13px] leading-6 text-muted-foreground">{source.relevance}</p>
              </a>
            ))}
          </div>
          <p className="mt-6 text-xs leading-6 text-muted-foreground">
            Reviewed 16 August 2026. Verify current standards editions, material datasheets and project-specific acceptance requirements before award.
          </p>
        </div>
      </section>
    </>
  );
}
