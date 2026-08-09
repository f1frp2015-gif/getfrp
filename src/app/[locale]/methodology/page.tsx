import type { Metadata } from "next";
import { CheckCircle2, FileSearch, RefreshCw, ShieldCheck } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { JsonLd } from "@/components/json-ld";
import { Link } from "@/i18n/navigation";
import { alternates, og } from "@/lib/seo";
import { CURRENT_SITE_URL } from "@/lib/sites";

const title = "GetFRP Research, Supplier Verification & Editorial Methodology";
const description =
  "How GetFRP researches China FRP suppliers, separates company claims from verified evidence, reviews product-family guidance and corrects public records.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: alternates("/methodology"),
  openGraph: og("/methodology", { title, description }),
};

const EVIDENCE_LEVELS = [
  {
    level: "Public record",
    meaning: "A company identity or capability is visible in the directory, but GetFRP has not completed a standalone profile review.",
    search: "Browsable; the company detail page is excluded from search indexing until it passes the publication gate.",
  },
  {
    level: "Company-published",
    meaning: "The claim is traceable to the supplier's official website, catalog, technical document or company-domain contact.",
    search: "Attributed to the company; not presented as an independent test or certification result.",
  },
  {
    level: "GetFRP reviewed",
    meaning: "The source, company identity, product scope and review date have been recorded and the page meets the public-profile completeness gate.",
    search: "Eligible for the supplier sitemap, with a visible source trail and review limitation.",
  },
  {
    level: "RFQ-verified",
    meaning: "Documents, test scope, plant identity and offered grade are checked against one buyer specification during a live sourcing project.",
    search: "Project-specific evidence; it does not become a blanket endorsement of every product from the company.",
  },
] as const;

export default async function MethodologyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const pageUrl = `${CURRENT_SITE_URL}/methodology`;

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${pageUrl}#webpage`,
          url: pageUrl,
          name: title,
          description,
          inLanguage: "en",
          dateModified: "2026-08-09",
          reviewedBy: { "@id": `${CURRENT_SITE_URL}/#organization` },
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${CURRENT_SITE_URL}/` },
          { name: "Methodology", url: pageUrl },
        ]}
      />

      <section className="border-b border-border/80 bg-[#0a1f44] text-white">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7be4e1]">
            Research &amp; editorial policy
          </div>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
            Evidence before visibility.
          </h1>
          <p className="mt-5 max-w-3xl text-[16px] leading-8 text-slate-200">
            GetFRP is a specialist China FRP supply-chain platform. We publish
            enough detail for a buyer to understand what is known, who said it,
            when it was reviewed and what still requires project-level proof.
          </p>
          <p className="mt-5 font-mono text-[11px] text-[#7be4e1]">
            Policy last reviewed: 9 August 2026 · Owner: GetFRP research desk
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Four evidence states</h2>
            <p className="mt-3 max-w-3xl text-[15px] leading-7 text-muted-foreground">
              A directory record, an official company claim and a document
              checked for one purchase are not interchangeable. The labels and
              search-index rules below keep those states separate.
            </p>
            <div className="mt-8 overflow-hidden rounded-xl border border-border/70">
              {EVIDENCE_LEVELS.map((item) => (
                <article key={item.level} className="border-b border-border/70 p-6 last:border-0">
                  <h3 className="text-lg font-semibold">{item.level}</h3>
                  <p className="mt-2 text-[14px] leading-7 text-muted-foreground">{item.meaning}</p>
                  <p className="mt-2 text-[12px] leading-6 text-[#123f8c]">{item.search}</p>
                </article>
              ))}
            </div>
          </div>
          <aside className="h-fit rounded-xl border border-border/70 bg-[#f4f6f9] p-6">
            <FileSearch size={20} className="text-[#123f8c]" />
            <h2 className="mt-4 text-lg font-semibold">Minimum supplier publication gate</h2>
            <ul className="mt-4 space-y-3 text-[13px] leading-6 text-muted-foreground">
              {[
                "Stable English company name and canonical URL",
                "Substantive, non-duplicated company description",
                "At least two products and one manufacturing process",
                "Official website or official catalog source",
                "Recorded editorial review date",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2 size={15} className="mt-1 shrink-0 text-[#123f8c]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="border-y border-border/80 bg-muted/20">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 py-14 sm:px-6 md:grid-cols-3">
          {[
            {
              Icon: FileSearch,
              title: "Source selection",
              body: "Official company sites, catalogs, regulatory records and standards publishers are preferred. Secondary directories are discovery leads, not proof.",
            },
            {
              Icon: ShieldCheck,
              title: "Claim boundaries",
              body: "Capacity, certification and performance statements remain attributed. Certificate scope, site, grade and validity are rechecked before reliance.",
            },
            {
              Icon: RefreshCw,
              title: "Updates & corrections",
              body: "Material changes update the visible review date. Suppliers and buyers can submit corrections; disputed claims are downgraded or removed while reviewed.",
            },
          ].map(({ Icon, title: cardTitle, body }) => (
            <article key={cardTitle} className="rounded-xl border border-border/70 bg-background p-6">
              <Icon size={18} className="text-[#123f8c]" />
              <h2 className="mt-4 text-lg font-semibold">{cardTitle}</h2>
              <p className="mt-3 text-[13px] leading-6 text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-semibold">What this policy does not mean</h2>
        <p className="mt-4 text-[15px] leading-8 text-muted-foreground">
          Inclusion is not an endorsement, and a public profile is not a product
          certificate. Typical engineering ranges are screening inputs, not a
          design value. The purchase specification, drawings, sample approval,
          test plan and inspection release remain the controlling records.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/services/frp-engineering-qa" className="rounded-md bg-[#123f8c] px-5 py-3 text-sm font-semibold text-white">
            See engineering &amp; QA scope
          </Link>
          <Link href="/rfq" className="rounded-md border border-border px-5 py-3 text-sm font-semibold">
            Submit a correction or RFQ
          </Link>
        </div>
      </section>
    </main>
  );
}
