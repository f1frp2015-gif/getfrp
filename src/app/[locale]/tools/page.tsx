import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { JsonLd } from "@/components/json-ld";
import { AnimatedToolIcon, type ToolIconKind } from "@/components/tools/animated-tool-icon";
import { Link } from "@/i18n/navigation";
import { alternates, og } from "@/lib/seo";
import { CURRENT_SITE_URL } from "@/lib/sites";

const title = "FRP Weight & Standards Tools | FRP Calculator | GetFRP";
const description =
  "Use an FRP weight calculator and standards comparison tools, then open specialist profile, span, pricing and thermal references for deeper engineering checks.";

type ToolCardData = {
  title: string;
  body: string;
  detail: string;
  icon: ToolIconKind;
};

const getfrpTools = [
  {
    href: "/tools/frp-weight-calculator",
    title: "FRP weight calculator",
    body: "Estimate profile, rod, tube and panel mass from geometry and material density.",
    detail: "Geometry × density",
    icon: "weight",
  },
  {
    href: "/tools/standard-comparison",
    title: "EN 13706 vs ASTM D3917 vs GB 50608",
    body: "Compare scope, edition, procurement use and the limits of each FRP standard.",
    detail: "Procurement standards",
    icon: "standards",
  },
] as const satisfies readonly (ToolCardData & { href: string })[];

const tools = [
  {
    href: "https://www.f1composite.com/frp-profile-calculator",
    title: "FRP profile calculator",
    body: "Check bending, shear and Timoshenko-corrected deflection for pultruded FRP sections.",
    detail: "ASCE/SEI 74-23 · CEN/TS 19101 · EN 13706",
    icon: "calculator",
  },
  {
    href: "https://www.f1composite.com/frp-span-tables",
    title: "FRP span tables",
    body: "Review allowable uniform loads for published I-beams, channels and tubes over 1–6 m spans.",
    detail: "Static, citable load tables",
    icon: "span",
  },
  {
    href: "https://www.f1composite.com/fiberglass-pultruded-profile-price",
    title: "FRP profile price estimator",
    body: "Screen budgetary USD-per-meter and USD-per-kilogram ranges before preparing an RFQ.",
    detail: "Budgetary pricing reference",
    icon: "price",
  },
  {
    href: "https://www.f1composite.com/technology/frp-u-value-calculator",
    title: "Window U-value calculator",
    body: "Calculate whole-window thermal transmittance for FRP, aluminum, PVC and timber frames.",
    detail: "EN ISO 10077-1 · Passive House",
    icon: "thermal",
  },
  {
    href: "https://www.f1composite.com/frp-profile-calculator/methodology",
    title: "Calculator methodology",
    body: "Review the equations, design assumptions, standards scope and stated calculation limits.",
    detail: "Published calculation basis",
    icon: "method",
  },
  {
    href: "https://www.f1composite.com/frp-profile-calculator/validation",
    title: "Validation benchmarks",
    body: "Compare the profile engine against reproducible closed-form geometry benchmarks.",
    detail: "Engineering verification record",
    icon: "validation",
  },
] as const satisfies readonly (ToolCardData & { href: string })[];

const toolCardClassName =
  "group relative flex min-h-72 flex-col overflow-hidden rounded-xl border border-border/70 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#7be4e1] hover:shadow-[0_18px_45px_-24px_rgba(10,31,68,0.45)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#123f8c] motion-reduce:transform-none motion-reduce:transition-none";

function ToolCardContents({ tool, index, cta }: { tool: ToolCardData; index: number; cta: string }) {
  return (
    <>
      <div className="pointer-events-none absolute -right-10 -top-12 size-36 rounded-full bg-[#7be4e1]/10 blur-2xl transition-transform duration-500 group-hover:scale-150 motion-reduce:transform-none motion-reduce:transition-none" />
      <div className="relative flex items-start justify-between">
        <AnimatedToolIcon kind={tool.icon} />
        <span className="font-mono text-[10px] font-semibold tracking-[0.16em] text-[#123f8c]/40">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h2 className="relative mt-5 text-xl font-semibold tracking-tight transition-colors group-hover:text-[#123f8c]">
        {tool.title}
      </h2>
      <p className="relative mt-3 text-[13px] leading-6 text-muted-foreground">
        {tool.body}
      </p>
      <div className="relative mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
        {tool.detail}
      </div>
      <div className="relative mt-auto flex items-center justify-between border-t border-border/70 pt-4 text-xs font-semibold text-[#123f8c]">
        {cta}
        <ArrowUpRight
          size={14}
          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
        />
      </div>
    </>
  );
}

export function generateMetadata(): Metadata { return { title: { absolute: title }, description, alternates: alternates("/tools"), openGraph: og("/tools", { title, description }) }; }

export default async function ToolsHubPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") notFound();
  setRequestLocale(locale);
  const pageUrl = `${CURRENT_SITE_URL}/tools`;
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          url: pageUrl,
          name: title,
          description,
          inLanguage: "en",
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: getfrpTools.length + tools.length,
            itemListElement: [
              ...getfrpTools.map((tool) => ({ ...tool, href: `${CURRENT_SITE_URL}${tool.href}` })),
              ...tools,
            ].map((tool, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: tool.title,
              url: tool.href,
            })),
          },
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${CURRENT_SITE_URL}/` },
          { name: "Tools", url: pageUrl },
        ]}
      />

      <section className="fiber-surface-dark border-b border-border/80 text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <nav className="text-xs text-[#d9dfe8]" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="mx-2">›</span>
            <span>Tools</span>
          </nav>
          <div className="mt-8 max-w-4xl">
            <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7be4e1]">
              GETFRP BUYER TOOLS
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
              FRP calculators and standards tools
            </h1>
            <p className="mt-5 max-w-3xl text-[16px] leading-8 text-[#d9dfe8]">
              Use GetFRP&apos;s weight and standards tools for procurement screening, then open the deeper F1 Composite engineering references when structural calculations are required.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-8 grid gap-5 md:grid-cols-2">
          {getfrpTools.map((tool, index) => (
            <Link key={tool.href} href={tool.href} className={toolCardClassName}>
              <ToolCardContents tool={tool} index={index} cta="Open GetFRP tool" />
            </Link>
          ))}
        </div>
        <div className="mb-7 rounded-xl border border-[#123f8c]/20 bg-[#123f8c]/5 p-5 text-sm leading-7 text-muted-foreground">
          These are external references hosted on <span className="font-semibold text-foreground">f1composite.com</span>. Use them for preliminary screening and confirm final design with the governing code, product-specific evidence and a qualified engineer.
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, index) => (
            <a
              key={tool.href}
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
              className={toolCardClassName}
            >
              <ToolCardContents
                tool={tool}
                index={getfrpTools.length + index}
                cta="Open on F1 Composite"
              />
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
