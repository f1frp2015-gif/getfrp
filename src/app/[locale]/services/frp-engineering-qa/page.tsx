import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, ClipboardCheck, FileCheck2, Factory, Ruler } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { JsonLd } from "@/components/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { alternates, og } from "@/lib/seo";
import { CURRENT_SITE_URL } from "@/lib/sites";

const title = "FRP Engineering & QA Services in China | GetFRP";
const description =
  "FRP specification review, supplier qualification, sample and first-article control, factory audit, pre-shipment inspection and NCR/CAPA support in China.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: alternates("/services/frp-engineering-qa"),
  openGraph: og("/services/frp-engineering-qa", { title, description }),
};

const DELIVERABLES = [
  {
    Icon: Ruler,
    title: "Specification & standards review",
    body: "Normalize drawings, resin/reinforcement requirements, tolerances, test methods and acceptance criteria; flag unresolved ASTM/ISO/EN/GB equivalence before quotation.",
    output: "Controlled RFQ and deviation register",
  },
  {
    Icon: Factory,
    title: "Supplier capability qualification",
    body: "Check legal identity, production site, process fit, equipment, relevant product history and the scope of certificates or test reports.",
    output: "Evidence-linked shortlist and risk notes",
  },
  {
    Icon: ClipboardCheck,
    title: "Sample & first-article control",
    body: "Tie approved samples to revision, material system, dimensions, appearance, mechanical tests and packaging so production does not drift from the reviewed baseline.",
    output: "FAI / sample approval record",
  },
  {
    Icon: FileCheck2,
    title: "Factory audit & pre-shipment inspection",
    body: "Build a project-specific checklist for incoming materials, process controls, dimensional sampling, test documents, quantity, marking and export packaging.",
    output: "Audit or PSI report with release status",
  },
] as const;

export default async function EngineeringQaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const pageUrl = `${CURRENT_SITE_URL}/services/frp-engineering-qa`;

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${pageUrl}#service`,
          url: pageUrl,
          name: "FRP engineering and quality assurance services",
          description,
          provider: { "@id": `${CURRENT_SITE_URL}/#organization` },
          areaServed: { "@type": "Country", name: "China" },
          serviceType: [
            "FRP specification review",
            "Supplier qualification",
            "Factory audit",
            "Pre-shipment inspection",
            "NCR and CAPA support",
          ],
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${CURRENT_SITE_URL}/` },
          { name: "FRP Engineering & QA", url: pageUrl },
        ]}
      />

      <section className="border-b border-border/80 bg-[#0a1f44] text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7be4e1]">
            Buyer-side technical control in China
          </div>
          <h1 className="mt-4 max-w-5xl text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
            FRP engineering and QA services tied to one specification.
          </h1>
          <p className="mt-6 max-w-3xl text-[16px] leading-8 text-slate-200">
            GetFRP helps overseas engineering and procurement teams turn an
            FRP requirement into comparable factory responses, documented
            evidence and a controlled release decision—not a generic supplier list.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/rfq" className={buttonVariants({ size: "lg", variant: "secondary" })}>
              Send specification <ArrowRight size={15} />
            </Link>
            <Link href="/methodology" className="inline-flex min-h-11 items-center rounded-md border border-white/25 px-5 text-sm font-semibold">
              Review our methodology
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight">Defined deliverables at each sourcing gate</h2>
          <p className="mt-4 text-[15px] leading-7 text-muted-foreground">
            Scope is agreed before work starts. Each deliverable identifies the
            source documents reviewed, open deviations and the decision the
            buyer still needs to make.
          </p>
        </div>
        <div className="mt-9 grid gap-5 md:grid-cols-2">
          {DELIVERABLES.map(({ Icon, title: itemTitle, body, output }) => (
            <article key={itemTitle} className="rounded-xl border border-border/70 p-6">
              <Icon size={20} className="text-[#123f8c]" />
              <h3 className="mt-4 text-xl font-semibold">{itemTitle}</h3>
              <p className="mt-3 text-[14px] leading-7 text-muted-foreground">{body}</p>
              <p className="mt-5 border-t border-border/70 pt-4 text-[12px] font-semibold text-[#123f8c]">
                OUTPUT · {output}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border/80 bg-[#f4f6f9]">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">Typical evidence pack</h2>
            <ul className="mt-6 space-y-3 text-[14px] leading-7 text-muted-foreground">
              {[
                "Legal company and production-site identity",
                "Drawing, BOM and revision-controlled RFQ",
                "Resin, reinforcement and batch traceability records",
                "Certificate scope and applicable test reports",
                "Sample, FAI or inspection photos and measured results",
                "Packing, marking and shipment-release records",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 size={16} className="mt-1.5 shrink-0 text-[#123f8c]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Limits stated up front</h2>
            <p className="mt-5 text-[14px] leading-7 text-muted-foreground">
              GetFRP does not act as a notified body, accredited laboratory or
              engineer of record. We organize and review supplier evidence,
              coordinate agreed inspections and expose deviations. Where an
              accredited test, certification or sealed design is required, the
              buyer&apos;s approved third party remains authoritative.
            </p>
            <p className="mt-5 text-[14px] leading-7 text-muted-foreground">
              Pricing depends on product, plant location, document volume,
              inspection duration and travel. Submit the scope first; we return
              a written work package before any paid activity.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight">Start with the controlling documents.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-muted-foreground">
          Send the drawing, standard, quantity, destination and current supplier
          status. GetFRP will identify the missing inputs before proposing a scope.
        </p>
        <Link href="/rfq" className={`${buttonVariants({ size: "lg" })} mt-7`}>
          Submit engineering / QA request <ArrowRight size={15} />
        </Link>
      </section>
    </main>
  );
}
