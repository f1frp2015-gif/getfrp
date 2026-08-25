import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import {
  ClipboardCheck,
  FileSearch,
  Truck,
  Receipt,
  FileText,
  Search,
  ChevronRight,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { alternates } from "@/lib/seo";
import { CURRENT_SITE_URL } from "@/lib/sites";
import {
  PlatformHero,
  PlatformSectionHeading,
  PlatformCard,
  PlatformCardGrid,
} from "@/components/platform-card";
import { JsonLd } from "@/components/json-ld";
import { PageBreadcrumbs } from "@/components/page-breadcrumbs";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { TestimonialsBlock } from "@/components/testimonials-block";
import { ChinaSourcingMapDashboard } from "@/components/china-sourcing-map-dashboard";
import { supplierCategories } from "@/lib/data/suppliers";
import { buildChinaSourcingMapData } from "@/lib/data/china-sourcing-map";
import { getPublicSupplierRows } from "@/lib/public-supplier-directory";
import { isSupplierProfileIndexable } from "@/lib/supplier-indexability";

export const revalidate = 3600;

type PublicMapRow = {
  category: string | null;
  province: string | null;
};

export function generateMetadata(): Metadata {
  return {
    title: { absolute: "Source FRP from China | Products & Factory Sourcing | GetFRP" },
    description:
      "Source FRP products from China with matched manufacturers, regional supply-cluster insights, factory verification and export support.",
    alternates: alternates("/source-from-china"),
  };
}

export default async function SourceFromChinaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "en") notFound();
  setRequestLocale(locale);

  // Use the same database + Git merge as the public supplier directory. A
  // partial database response must not erase reviewed Git-backed profiles from
  // this aggregate map. Only counts reach the client; no supplier identity is
  // exposed by the visualization.
  const publicProfiles: PublicMapRow[] = (await getPublicSupplierRows())
    .filter(({ supplier }) => isSupplierProfileIndexable(supplier))
    .map(({ supplier }) => ({
      category: supplier.category,
      province: supplier.province,
    }));

  const sourcingMapData = buildChinaSourcingMapData(
    publicProfiles,
    supplierCategories.map((category) => ({
      id: category.id,
      label: category.nameEn,
    })),
  );

  const url = `${CURRENT_SITE_URL}/source-from-china`;

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          url,
          inLanguage: "en",
          name: "Source composites from China",
          description:
            "Reviewed public Chinese FRP supplier profiles mapped by province and category, with supply-cluster insights and a sourcing playbook for overseas buyers.",
        }}
      />
      {/* FAQPage schema: explicit Q&A surface that Perplexity, Google AI
          Overviews and ChatGPT search preferentially extract and cite.
          Pulled from the questions overseas buyers actually ask the
          sourcing desk; mirrors content visible on this page. */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How do I source FRP composites from China without speaking Mandarin?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Use a curated directory like getfrp.com that has already verified suppliers and translated their certifications, then submit an RFQ in English. A bilingual sourcing desk handles the factory-side conversation in Mandarin and reports back in your unit system. Most overseas buyers shortlist 3-5 verified plants and request samples before placing the first PO.",
              },
            },
            {
              "@type": "Question",
              name: "Which Chinese province makes which FRP product?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Jiangsu dominates resin (unsaturated polyester, vinyl ester, epoxy) and downstream pultrusion. Shandong is the fiber heartland (E-glass, ECR-glass, S-glass, carbon fiber tow). Zhejiang covers mid-volume manufacturing, especially fabric and prepreg. Henan and Shanxi are the basalt fiber clusters. Knowing the province before the RFQ filters out three-quarters of the no-fit responses.",
              },
            },
            {
              "@type": "Question",
              name: "Does EU CBAM apply to FRP imported from China?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. EU CBAM's definitive scope from 2026 covers six high-carbon goods — iron and steel, aluminium, cement, fertilisers, electricity and hydrogen — and fibre-reinforced polymers (GFRP / CFRP / BFRP) are not on the list, so there is no CBAM declaration or embedded-carbon document pack required to import Chinese FRP into the EU. What actually changes your landed cost is trade remedy: anti-dumping / countervailing duties on glass fibre and US Section 301. getfrp prices those in per shipment and tracks any future CBAM extension to polymers.",
              },
            },
            {
              "@type": "Question",
              name: "How are Chinese FRP suppliers tier-classified (Major / Large / Mid / Small)?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Major = publicly listed groups and Tier-1 manufacturers, annual output > 50,000 tons. Large = established mid-cap producers, 10,000-50,000 tons. Mid = regional specialists, 1,000-10,000 tons. Small = SME niche players, < 1,000 tons. The tier is field-validated by a site visit, not self-reported. Most overseas RFQs go to Major or Large for risk-managed volume; Mid and Small win when you need niche capability the big plants won't bother with.",
              },
            },
            {
              "@type": "Question",
              name: "What payment terms are standard for first-time FRP imports from China?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Standard terms: 30% deposit against proforma invoice, 70% on B/L copy. For first-time orders above USD 50,000, prefer an LC at sight to limit counterparty risk. Always name in the contract: exact certifications required, batch traceability format, packaging spec, and the AQL sampling plan for pre-shipment inspection.",
              },
            },
          ],
        }}
      />

      <PageBreadcrumbs
        trail={[{ label: "Source from China", href: "/source-from-china" }]}
      />

      <PlatformHero
        eyebrow="FOR OVERSEAS BUYERS"
        title="Source FRP from China — products, clusters, one accountable desk"
        description="The whole China FRP supply base, audited and mapped. See what you can source, where each product category is concentrated, and the step-by-step path — then appoint one bilingual desk for the agreed China-side work under a separate buyer service engagement."
      />

      {/* ═══ 01 — Verified suppliers by region ═══ */}
      <section id="regions" className="scroll-mt-20">
        <PlatformSectionHeading
          eyebrow="MODULE 01 · CHINA SOURCING MAP"
          title="Find the right composites cluster before you send the RFQ"
        />
        <p className="mb-7 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
          Filter reviewed public supplier profiles by supply-chain role, compare
          province-level density, and inspect the category mix behind each hub.
          Counts are generated from the same resilient directory used across GetFRP and refreshed with
          this page every hour.
        </p>
        <ChinaSourcingMapDashboard data={sourcingMapData} />
      </section>

      {/* ═══ 02 — Sourcing playbook ═══ */}
      <section id="playbook" className="mt-20 scroll-mt-20">
        <PlatformSectionHeading
          eyebrow="MODULE 02 · SOURCING PLAYBOOK"
          title="From spec to delivered cargo: the 6-step path"
        />
        <p className="mb-8 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
          A condensed operational guide if this is your first time buying FRP
          from China. Each step links to the tool on this site that does the
          heavy lifting for it.
        </p>

        <PlatformCardGrid columns={3}>
          <PlatformCard
            Icon={FileText}
            monoLabel="STEP 01"
            number="01"
            title="Lock the specification"
            accent
          >
            <p>
              Before talking to any supplier, write a one-page spec: product, grade,
              geometry, key property targets (tensile / flexural / HDT), applicable
              standard, and end-use environment.
            </p>
            <p className="mt-2 font-mono text-[11px] text-background/70">
              Tool: <span className="underline">/products</span> to compare product specifications
            </p>
          </PlatformCard>

          <PlatformCard Icon={Search} monoLabel="STEP 02" number="02" title="Shortlist 3–5 suppliers">
            <p>
              Filter by province (capability cluster), by process capability, and by
              certifications that match your market. Aim for 3–5 — more creates RFQ
              overhead without improving price discovery.
            </p>
            <p className="mt-2 font-mono text-[11px] text-muted-foreground/80">
              Tool: the <Link href="/suppliers" className="underline">vetted network</Link> + RFQ
            </p>
          </PlatformCard>

          <PlatformCard Icon={ClipboardCheck} monoLabel="STEP 03" number="03" title="Issue the RFQ">
            <p>
              Send identical RFQ packets with the spec, target volume (3-month & 12-month),
              Incoterms (FOB / CIF / DAP), required documentation (MTC, test reports), and
              target price range.
            </p>
            <p className="mt-2 font-mono text-[11px] text-muted-foreground/80">
              Tool: AI-assisted RFQ drafting at <Link href="/ai" className="underline">/ai</Link>
            </p>
          </PlatformCard>

          <PlatformCard Icon={FileSearch} monoLabel="STEP 04" number="04" title="Qualify with samples">
            <p>
              Request 3–5 pieces for independent third-party testing (SGS / Bureau Veritas /
              TÜV labs in China). Never skip this for structural or safety-critical parts.
              Cost: typically USD 500–2,000 per test panel.
            </p>
            <p className="mt-2 font-mono text-[11px] text-muted-foreground/80">
              Guide: <Link href="/sourcing/gb-vs-astm-frp" className="underline">GB vs ASTM crosswalk</Link> for test-method selection
            </p>
          </PlatformCard>

          <PlatformCard Icon={Receipt} monoLabel="STEP 05" number="05" title="Contract & payment">
            <p>
              Standard terms: 30% deposit against PI, 70% on B/L copy. First-time orders
              should use LC at sight for &gt; USD 50k. Always name the exact certifications,
              batch traceability, and packaging spec in the contract.
            </p>
            <p className="mt-2 font-mono text-[11px] text-muted-foreground/80">
              Reference: Incoterms 2020, ICC Publication 723E
            </p>
          </PlatformCard>

          <PlatformCard Icon={Truck} monoLabel="STEP 06" number="06" title="Pre-shipment QC & delivery">
            <p>
              Pre-shipment inspection (PSI) at factory — random sampling per AQL. MTC,
              CoC, and packing list must match the PO. For FRP, verify cure state and
              visual defect class per ASTM D4385 or EN 13706.
            </p>
            <p className="mt-2 font-mono text-[11px] text-muted-foreground/80">
              QC vendors: SGS, Intertek, Bureau Veritas, TÜV Rheinland China
            </p>
          </PlatformCard>
        </PlatformCardGrid>
      </section>

      {/* ═══ 03 — Buyer-side on-the-ground services ═══ */}
      <section id="offline-services" className="mt-20 scroll-mt-20">
        <PlatformSectionHeading
          eyebrow="MODULE 03 · ON-THE-GROUND PROCUREMENT SUPPORT"
          title="Delegate the China-side work to GetFRP"
        />
        <p className="mb-8 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
          Overseas buyers can appoint GetFRP for a defined part of the sourcing
          process. Each offline engagement is scoped and contracted separately
          with the buyer before work begins, with clear deliverables, timing and
          responsibility boundaries.
        </p>

        <PlatformCardGrid columns={3}>
          <PlatformCard Icon={Search} monoLabel="SOURCE" title="Supplier sourcing & verification">
            <p>
              Identify and shortlist suitable manufacturers, then cross-check
              legal identity, production location, process fit and relevant
              supporting documents.
            </p>
          </PlatformCard>

          <PlatformCard Icon={FileSearch} monoLabel="ASSESS" title="Factory visits & capability assessment">
            <p>
              Coordinate and attend factory visits, review equipment, capacity,
              process and quality controls, and return an evidence-linked report
              with open risks.
            </p>
          </PlatformCard>

          <PlatformCard Icon={FileText} monoLabel="ALIGN" title="Technical translation & negotiation">
            <p>
              Translate RFQs, drawings, standards and meeting decisions; keep
              technical deviations, MOQ, lead time, payment and commercial terms
              visible to both sides.
            </p>
          </PlatformCard>

          <PlatformCard Icon={Receipt} monoLabel="FOLLOW" title="Samples & production follow-up">
            <p>
              Coordinate samples and first articles, follow the production plan,
              document changes and provide progress updates before issues reach
              the shipment stage.
            </p>
          </PlatformCard>

          <PlatformCard Icon={ClipboardCheck} monoLabel="CONTROL" title="Inspection & corrective action">
            <p>
              Build a project-specific inspection checklist, coordinate in-process
              or pre-shipment checks, and track non-conformities and corrective
              actions to an agreed release decision.
            </p>
          </PlatformCard>

          <PlatformCard Icon={Truck} monoLabel="DELIVER" title="Logistics & export coordination">
            <p>
              Coordinate packaging, freight quotations, Incoterms, export
              documents and the shipment handoff with the buyer&apos;s approved
              forwarder and other third-party providers.
            </p>
          </PlatformCard>
        </PlatformCardGrid>

        <div className="mt-6 flex flex-col gap-5 border border-border/70 bg-foreground p-6 text-background sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="max-w-3xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-background/70">
              SCOPE &amp; PRICING
            </div>
            <h3 className="mt-2 text-xl font-semibold tracking-tight">
              Request a defined China-side work package
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-background/80">
              Pricing depends on the product, supplier status, factory location,
              onsite work, documentation and delivery schedule. Contact us for a
              written service scope and quotation.
            </p>
          </div>
          <a
            href="mailto:inquiry@getfrp.com?subject=GetFRP%20China%20Procurement%20Support"
            className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-md bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-background/90"
          >
            inquiry@getfrp.com
          </a>
        </div>
      </section>

      {/* ═══ 04 — Sourcing topic deep dives ═══ */}
      <section id="topics" className="mt-20 scroll-mt-20">
        <PlatformSectionHeading
          eyebrow="MODULE 04 · DEEP DIVES"
          title="Topic-specific sourcing guides"
        />
        <p className="mb-8 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
          Buying-intent guides for the specific FRP product, compliance, and
          standards questions overseas buyers ask the sourcing desk most often.
          Each page covers process choice, certifications, pricing benchmarks,
          and the verified Chinese plants that already ship into the target
          market.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              slug: "frp-grating",
              title: "FRP grating supplier shortlist",
              sub: "Molded vs pultruded, CE / EN 13706 / DNV — pricing & MOQs",
            },
            {
              slug: "frp-rebar",
              title: "FRP rebar (GFRP / BFRP / CFRP)",
              sub: "ACI 440.6 / ASTM D7957 — fiber system selection",
            },
            {
              slug: "cbam-frp-china",
              title: "CBAM & FRP — what actually applies",
              sub: "FRP isn't in CBAM scope — trade remedy is the real driver",
            },
            {
              slug: "gb-vs-astm-frp",
              title: "GB ⇄ ASTM ⇄ ISO ⇄ EN test method crosswalk",
              sub: "30+ FRP test methods mapped side-by-side",
            },
            {
              slug: "china-frp-import-tariffs",
              title: "China FRP import tariffs & anti-dumping",
              sub: "MFN duty, EU GFF AD 34–69%, Section 301 — scoped honestly",
            },
            {
              slug: "pultruded-profiles",
              title: "Pultruded FRP profiles (I-beam, channel, tube)",
              sub: "EN 13706 E17 / E23 — grades, resin systems, tolerances",
            },
            {
              slug: "frp-cable-tray",
              title: "FRP cable tray & ladder",
              sub: "NEMA FG-1 / IEC 61537 — corrosion-proof cable support",
            },
            {
              slug: "frp-baba-buy-america",
              title: "FRP & Build America, Buy America (BABA)",
              sub: "US federal-project eligibility — scoped honestly",
            },
            {
              slug: "frp-tanks-vessels",
              title: "FRP / GRP tanks & vessels",
              sub: "ASME RTP-1 / EN 13121 — corrosion barrier & resin",
            },
            {
              slug: "frp-piping",
              title: "FRP / GRP / GRE pipe",
              sub: "AWWA C950 / ISO 14692 — PN × SN, jointing",
            },
            {
              slug: "frp-conformity-china",
              title: "Will Chinese FRP pass my standard?",
              sub: "Conformity, accredited testing & acceptance certs",
            },
          ].map((it) => (
            <Link
              key={it.slug}
              href={`/sourcing/${it.slug}` as never}
              className="group flex items-start justify-between gap-4 border border-border/70 bg-background p-5 transition-colors hover:border-foreground"
            >
              <div>
                <div className="text-sm font-semibold tracking-tight">
                  {it.title}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {it.sub}
                </div>
              </div>
              <ChevronRight
                size={14}
                className="mt-1 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          ))}
        </div>
      </section>

      {/* Buyer testimonials (renders null until populated) */}
      <TestimonialsBlock className="mt-20" />

      {/* Newsletter signup */}
      <div className="mt-16">
        <NewsletterSignup topic="source-from-china" />
      </div>

      {/* CTA */}
      <section className="mt-16 border border-border/70 bg-foreground p-10 text-background sm:p-14">
        <div className="max-w-3xl">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-background/70">
            ASK THE AI
          </div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Get a shortlist in 30 seconds
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-background/80">
            Describe what you need: product, target market, certifications you
            care about. The AI pulls from the supplier, material and standards
            tables and gives back a shortlist with the row link for each
            claim, so you can verify before forwarding to procurement.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/ai?q=I+need+to+source+FRP+gratings+with+EN+13706+E23+class+and+CE+marking+for+the+EU+market.+Recommend+verified+Chinese+suppliers."
              className="inline-flex items-center gap-1.5 rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-background/90"
            >
              Try a sample sourcing query →
            </Link>
            <Link
              href="/rfq"
              className="inline-flex items-center gap-1.5 rounded-md border border-background/30 px-4 py-2 text-sm text-background transition-colors hover:bg-background/10"
            >
              Contact the sourcing desk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
