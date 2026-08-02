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

import { FrpWeightCalculator } from "./weight-calculator";

const title = "FRP Weight Calculator — Plate, Rod & Tube | getfrp";
const description =
  "Calculate estimated FRP plate, rectangular bar, solid rod and round tube weight from dimensions and GFRP, CFRP or BFRP planning density.";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: alternates("/tools/frp-weight-calculator"),
    openGraph: og("/tools/frp-weight-calculator", { title, description }),
  };
}

export default async function FrpWeightCalculatorPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") notFound();
  setRequestLocale(locale);
  const pageUrl = `${CURRENT_SITE_URL}/tools/frp-weight-calculator`;

  return (
    <main>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "FRP Weight Calculator",
        url: pageUrl,
        description,
        applicationCategory: "EngineeringApplication",
        operatingSystem: "Web",
        offers: { "@type": "Offer", price: 0, priceCurrency: "USD" },
      }} />
      <BreadcrumbJsonLd items={[
        { name: "Home", url: `${CURRENT_SITE_URL}/` },
        { name: "Tools", url: `${CURRENT_SITE_URL}/tools` },
        { name: "FRP weight calculator", url: pageUrl },
      ]} />

      <section className="border-b border-border/80 bg-[#071d2a] text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <nav className="text-xs text-[#aac0c8]" aria-label="Breadcrumb"><Link href="/">Home</Link><span className="mx-2">›</span><Link href="/tools">Tools</Link><span className="mx-2">›</span><span>FRP weight calculator</span></nav>
          <div className="mt-8 max-w-4xl">
            <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#75d3c8]">FREE ENGINEERING TOOL</div>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">FRP weight calculator</h1>
            <p className="mt-5 max-w-3xl text-[16px] leading-8 text-[#b8ccd3]">Estimate fiberglass, carbon-fiber or basalt-FRP plate, rod and tube mass from geometry and density. Use the result for early material and freight screening before the supplier confirms product mass.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <FrpWeightCalculator />
        <div className="mt-12 grid gap-8 border-t border-border/70 pt-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">How the calculation works</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">The calculator converts dimensions to cubic meters and applies mass = volume × density. Hollow tube volume subtracts the inside cylinder. Grating and complex molded parts should use supplier-published mass per area or a CAD/production volume.</p>
            <div className="mt-5 flex gap-3"><Link href="/technical/frp-density" className={buttonVariants({ variant: "outline" })}>Read the density guide</Link><Link href="/rfq" className={buttonVariants()}>Verify a product <ArrowRight size={14} /></Link></div>
          </div>
          <ul className="space-y-3">
            {["Density presets are planning values, not product specifications", "Surface grit, coating, inserts and tolerances add delivered mass", "Long profiles may reach container volume limits before payload limits", "Use the approved supplier weight for purchase and shipping documents"].map((item) => <li key={item} className="flex gap-3 rounded-lg border border-border/70 p-4 text-sm leading-6 text-muted-foreground"><CheckCircle2 size={15} className="mt-1 shrink-0 text-[#0a756f]" />{item}</li>)}
          </ul>
        </div>
      </section>
    </main>
  );
}
