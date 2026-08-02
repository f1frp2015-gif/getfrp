import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { JsonLd } from "@/components/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { alternates, og } from "@/lib/seo";
import { CURRENT_SITE_URL } from "@/lib/sites";

import { FrpCostEstimator } from "./cost-estimator";

const title = "FRP Cost Estimator — Landed Import Cost | getfrp";
const description = "Estimate landed FRP import cost from supplier unit price, quantity, freight, planning duty, inspection, destination delivery and contingency.";

export function generateMetadata(): Metadata {
  return { title: { absolute: title }, description, alternates: alternates("/tools/frp-cost-estimator"), openGraph: og("/tools/frp-cost-estimator", { title, description }) };
}

export default async function FrpCostEstimatorPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") notFound();
  setRequestLocale(locale);
  const pageUrl = `${CURRENT_SITE_URL}/tools/frp-cost-estimator`;
  return (
    <main>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "FRP Landed Cost Estimator", url: pageUrl, description, applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: 0, priceCurrency: "USD" } }} />
      <BreadcrumbJsonLd items={[{ name: "Home", url: `${CURRENT_SITE_URL}/` }, { name: "Tools", url: `${CURRENT_SITE_URL}/tools` }, { name: "FRP cost estimator", url: pageUrl }]} />
      <section className="border-b border-border/80 bg-[#071d2a] text-white"><div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20"><nav className="text-xs text-[#aac0c8]" aria-label="Breadcrumb"><Link href="/">Home</Link><span className="mx-2">›</span><Link href="/tools">Tools</Link><span className="mx-2">›</span><span>FRP cost estimator</span></nav><div className="mt-8 max-w-4xl"><div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#75d3c8]">FREE PROCUREMENT TOOL</div><h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">FRP landed cost estimator</h1><p className="mt-5 max-w-3xl text-[16px] leading-8 text-[#b8ccd3]">Turn a Chinese supplier quote into an early landed-cost model. Add freight, planning duty, inspection, destination delivery and contingency so competing FRP quotations share the same commercial boundary.</p></div></div></section>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16"><FrpCostEstimator /><div className="mt-12 grid gap-8 border-t border-border/70 pt-10 lg:grid-cols-2"><div><h2 className="text-2xl font-semibold">What this estimate includes</h2><p className="mt-3 text-sm leading-7 text-muted-foreground">The calculator adds goods, international freight, a user-entered duty assumption, inspection/testing, destination delivery and contingency. It deliberately does not guess tariff classification, trade-remedy rates, VAT/GST, brokerage or demurrage.</p><div className="mt-5 flex gap-3"><Link href="/source-from-china" className={buttonVariants({ variant: "outline" })}>Read the sourcing playbook</Link><Link href="/rfq" className={buttonVariants()}>Request a controlled quote <ArrowRight size={14} /></Link></div></div><ul className="space-y-3">{["Use one Incoterm and destination for every supplier comparison", "Confirm HS classification and trade remedies with a customs professional", "Separate tooling, samples, tests and recurring production", "Model packing efficiency and unusable container volume"].map((item) => <li key={item} className="flex gap-3 rounded-lg border border-border/70 p-4 text-sm leading-6 text-muted-foreground"><CheckCircle2 size={15} className="mt-1 shrink-0 text-[#0a756f]" />{item}</li>)}</ul></div></section>
    </main>
  );
}
