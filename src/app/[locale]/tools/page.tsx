import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { ArrowRight, Calculator, Scale, ShieldCheck, Wind } from "lucide-react";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { JsonLd } from "@/components/json-ld";
import { Link } from "@/i18n/navigation";
import { alternates, og } from "@/lib/seo";
import { CURRENT_SITE_URL } from "@/lib/sites";

const title = "FRP Engineering & Sourcing Calculators | getfrp";
const description = "Free FRP engineering and sourcing tools for weight, landed cost, pultruded profile, wind load, U-value and Buy America compliance screening.";
const tools = [
  { href: "/tools/frp-weight-calculator", title: "FRP weight calculator", body: "Estimate plate, rod and tube mass from dimensions and planning density.", Icon: Scale },
  { href: "/tools/frp-cost-estimator", title: "FRP landed cost estimator", body: "Normalize supplier price, freight, duty assumption, inspection and delivery.", Icon: Calculator },
  { href: "/tech/calculator", title: "Pultruded profile calculator", body: "Screen profile geometry and engineering inputs for pultrusion.", Icon: Calculator },
  { href: "/tech/wind-load-calculator", title: "FRP wind-load calculator", body: "Estimate wind actions for preliminary FRP component screening.", Icon: Wind },
  { href: "/tech/u-value-calculator", title: "FRP U-value calculator", body: "Estimate thermal transmittance through composite assemblies.", Icon: Calculator },
  { href: "/tools/buy-america-frp-checker", title: "Buy America FRP checker", body: "Screen product and project facts against domestic-content requirements.", Icon: ShieldCheck },
] as const;

export function generateMetadata(): Metadata { return { title: { absolute: title }, description, alternates: alternates("/tools"), openGraph: og("/tools", { title, description }) }; }

export default async function ToolsHubPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") notFound();
  setRequestLocale(locale);
  const pageUrl = `${CURRENT_SITE_URL}/tools`;
  return <main><JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", url: pageUrl, name: title, description, inLanguage: "en", mainEntity: { "@type": "ItemList", numberOfItems: tools.length, itemListElement: tools.map((tool, index) => ({ "@type": "ListItem", position: index + 1, name: tool.title, url: `${CURRENT_SITE_URL}${tool.href}` })) } }} /><BreadcrumbJsonLd items={[{ name: "Home", url: `${CURRENT_SITE_URL}/` }, { name: "Tools", url: pageUrl }]} /><section className="border-b border-border/80 bg-[#071d2a] text-white"><div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20"><nav className="text-xs text-[#aac0c8]" aria-label="Breadcrumb"><Link href="/">Home</Link><span className="mx-2">›</span><span>Tools</span></nav><div className="mt-8 max-w-4xl"><div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#75d3c8]">FREE FRP TOOLS</div><h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">FRP engineering and sourcing calculators</h1><p className="mt-5 max-w-3xl text-[16px] leading-8 text-[#b8ccd3]">Use interactive calculators to screen product weight, landed cost, profile inputs, wind load, thermal performance and procurement compliance before requesting supplier evidence.</p></div></div></section><section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{tools.map((tool) => <Link key={tool.href} href={tool.href as never} className="group flex min-h-56 flex-col rounded-xl border border-border/70 p-6 transition-all hover:-translate-y-0.5 hover:border-[#8dbab5] hover:shadow-lg"><tool.Icon size={20} className="text-[#0a756f]" /><h2 className="mt-7 text-xl font-semibold tracking-tight group-hover:text-[#0a756f]">{tool.title}</h2><p className="mt-3 text-[13px] leading-6 text-muted-foreground">{tool.body}</p><div className="mt-auto flex items-center justify-between border-t border-border/70 pt-4 text-xs font-semibold text-[#0a756f]">Open tool <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></div></Link>)}</div></section></main>;
}
