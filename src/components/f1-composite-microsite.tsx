import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  FileCheck2,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { JsonLd } from "@/components/json-ld";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import {
  F1_COMPOSITES_BRAND_NAME,
  F1_COMPOSITES_COMPANY_PROFILE,
  F1_COMPOSITES_COMPANY_SEO,
  F1_COMPOSITES_PRODUCT_FAMILIES,
  F1_COMPOSITES_REVIEW_DATE,
  F1_COMPOSITES_SUPPLIER_SLUG,
  type F1CompositesEvidenceItem,
  type F1CompositesLink,
  type F1CompositesProductFamily,
} from "@/lib/data/f1-composite-microsite";
import { rfqHref } from "@/lib/rfq-links";
import { CURRENT_SITE_URL } from "@/lib/sites";

const LOGO_PATH = "/supplier-assets/f1-composite-logo.png";
const COMPANY_PATH = `/suppliers/${F1_COMPOSITES_SUPPLIER_SLUG}`;
const REVIEW_DATE_LABEL = "1 September 2026";
const LIGHT_LINK_FOCUS =
  "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const DARK_LINK_FOCUS = "focus-visible:ring-2 focus-visible:ring-brand-aqua";
const WRAPPING_BUTTON =
  "h-auto min-h-11 whitespace-normal! py-2 text-center leading-5";

function VisibleBreadcrumbs({
  current,
}: {
  current?: F1CompositesProductFamily;
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-1 text-xs text-brand-cool-gray"
    >
      <Link href="/" className={`rounded-sm hover:text-white ${DARK_LINK_FOCUS}`}>Home</Link>
      <span className="mx-1" aria-hidden="true">›</span>
      <Link href="/suppliers" className={`rounded-sm hover:text-white ${DARK_LINK_FOCUS}`}>Suppliers</Link>
      <span className="mx-1" aria-hidden="true">›</span>
      {current ? (
        <>
          <Link href={COMPANY_PATH as never} className={`rounded-sm hover:text-white ${DARK_LINK_FOCUS}`}>
            {F1_COMPOSITES_BRAND_NAME}
          </Link>
          <span className="mx-1" aria-hidden="true">›</span>
          <span className="text-white" aria-current="page">{current.shortTitle}</span>
        </>
      ) : (
        <span className="text-white" aria-current="page">{F1_COMPOSITES_BRAND_NAME}</span>
      )}
    </nav>
  );
}

function F1Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl border border-border/70 bg-white ${
        compact ? "h-36 p-3" : "min-h-44 p-4"
      }`}
    >
      <Image
        src={LOGO_PATH}
        alt="F1 Composites logo"
        width={1895}
        height={1300}
        loading="eager"
        sizes={compact ? "240px" : "(max-width: 1023px) calc(100vw - 4rem), 300px"}
        className="h-auto max-h-full w-auto max-w-full object-contain"
      />
    </div>
  );
}

function EvidenceBadge({ status }: { status: F1CompositesEvidenceItem["status"] }) {
  if (status === "Document-verified") {
    return <Badge variant="signal">Document-verified</Badge>;
  }
  if (status === "GetFRP editorial summary") {
    return <Badge variant="secondary">GetFRP editorial summary</Badge>;
  }
  return <Badge variant="outline">Supplier-reported</Badge>;
}

function SourceLinks({ sources }: { sources: readonly F1CompositesLink[] }) {
  return (
    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
      {sources.map((source) => (
        <li key={source.href}>
          <a
            href={source.href}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className={`flex items-start justify-between gap-3 rounded-lg border border-border/70 bg-background p-3 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary ${LIGHT_LINK_FOCUS}`}
          >
            <span>
              {source.label}
              <span className="sr-only"> (opens in a new tab)</span>
            </span>
            <ExternalLink size={13} className="mt-0.5 shrink-0" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}

function EvidenceCards({ items }: { items: readonly F1CompositesEvidenceItem[] }) {
  const columnClass = items.length === 2 ? "sm:grid-cols-2" : "lg:grid-cols-3";
  return (
    <div className={`mt-6 grid gap-4 ${columnClass}`}>
      {items.map((item) => (
        <article key={item.title} className="rounded-xl border border-border/70 bg-background p-5">
          <EvidenceBadge status={item.status} />
          <h3 className="mt-4 font-semibold leading-snug">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
        </article>
      ))}
    </div>
  );
}

export function F1CompositesCompanyProfile() {
  const companyUrl = `${CURRENT_SITE_URL}${F1_COMPOSITES_COMPANY_SEO.path}`;
  const officialWebsite = F1_COMPOSITES_COMPANY_PROFILE.contact.website;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ProfilePage",
              "@id": `${companyUrl}#webpage`,
              url: companyUrl,
              name: F1_COMPOSITES_COMPANY_SEO.title,
              description: F1_COMPOSITES_COMPANY_SEO.description,
              inLanguage: "en",
              dateModified: F1_COMPOSITES_REVIEW_DATE,
              isPartOf: { "@id": `${CURRENT_SITE_URL}/#website` },
              mainEntity: { "@id": `${companyUrl}#organization` },
            },
            {
              "@type": "Organization",
              "@id": `${companyUrl}#organization`,
              name: F1_COMPOSITES_BRAND_NAME,
              url: officialWebsite,
              sameAs: [officialWebsite],
              logo: `${CURRENT_SITE_URL}${LOGO_PATH}`,
              description: F1_COMPOSITES_COMPANY_PROFILE.summary,
              email: F1_COMPOSITES_COMPANY_PROFILE.contact.email,
              telephone: F1_COMPOSITES_COMPANY_PROFILE.contact.phone,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Chongqing",
                addressCountry: "CN",
              },
            },
          ],
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${CURRENT_SITE_URL}/` },
          { name: "Suppliers", url: `${CURRENT_SITE_URL}/suppliers` },
          { name: F1_COMPOSITES_BRAND_NAME, url: companyUrl },
        ]}
      />

      <section className="fiber-surface-dark border-b border-border/80 text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <VisibleBreadcrumbs />
          <div className="mt-8 grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
            <div className="min-w-0">
              <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-aqua">
                CLAIMED SUPPLIER PROFILE
              </div>
              <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
                {F1_COMPOSITES_BRAND_NAME}
              </h1>
              <p className="mt-4 max-w-3xl text-lg font-medium leading-8 text-white">
                {F1_COMPOSITES_COMPANY_PROFILE.tagline}
              </p>
              <p className="mt-5 max-w-3xl text-[15px] leading-7 text-brand-cool-gray">
                {F1_COMPOSITES_COMPANY_PROFILE.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-2" aria-label="GetFRP profile status">
                <Badge variant="secondary">Claimed</Badge>
                <Badge variant="signal" className="border-brand-aqua/40 bg-brand-aqua/15 text-brand-aqua">
                  <ShieldCheck size={12} /> Verified — F1 Composites
                </Badge>
                <Badge className="border border-amber-300/60 bg-amber-300/10 text-amber-100 shadow-none hover:bg-amber-300/10">
                  Sponsored
                </Badge>
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href={rfqHref({ supplier: F1_COMPOSITES_SUPPLIER_SLUG }) as never}
                  className={`${buttonVariants({ size: "lg", variant: "signal" })} w-full sm:w-auto`}
                >
                  Request a quote <ArrowRight size={15} />
                </Link>
                <a
                  href={officialWebsite}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className={`${buttonVariants({ size: "lg", variant: "outline" })} w-full border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white sm:w-auto`}
                >
                  Visit official website <ExternalLink size={14} />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </div>
            <div>
              <F1Logo />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/80 bg-muted/15">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                COMPANY ROLE
              </div>
              <h2 className="mt-2 text-2xl font-semibold">An export-facing supplier profile</h2>
              <p className="mt-4 text-[15px] leading-7 text-muted-foreground">
                {F1_COMPOSITES_COMPANY_PROFILE.relationship}
              </p>
            </div>
            <aside className="rounded-xl border border-border/70 bg-background p-5">
              <div className="text-sm font-semibold">Published network scope</div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {F1_COMPOSITES_COMPANY_PROFILE.networkStatement}
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-b border-border/80">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            CORE PRODUCT SYSTEMS
          </div>
          <h2 className="mt-2 text-3xl font-semibold">Four focused product families</h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {F1_COMPOSITES_PRODUCT_FAMILIES.map((family) => (
              <Link
                key={family.slug}
                href={family.path as never}
                className={`group rounded-xl border border-border/70 bg-background p-5 transition-colors hover:border-primary/60 ${LIGHT_LINK_FOCUS}`}
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                  {family.productLine}
                </div>
                <div className="mt-3 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold leading-snug">{family.shortTitle}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {family.cardSummary}
                    </p>
                  </div>
                  <ArrowRight size={16} className="mt-1 shrink-0 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/80 bg-muted/15">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            SOURCING CAPABILITIES
          </div>
          <h2 className="mt-2 text-2xl font-semibold">From selection to export delivery</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {F1_COMPOSITES_COMPANY_PROFILE.capabilities.map((item) => (
              <article key={item.title} className="rounded-xl border border-border/70 bg-background p-5">
                <CheckCircle2 size={17} className="text-primary" aria-hidden="true" />
                <h3 className="mt-3 text-sm font-semibold">{item.title}</h3>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/80">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            <FileCheck2 size={14} aria-hidden="true" /> Evidence snapshot
          </div>
          <h2 className="mt-2 text-2xl font-semibold">Read each claim within its scope</h2>
          <EvidenceCards items={F1_COMPOSITES_COMPANY_PROFILE.evidence} />
          <p className="mt-5 text-xs leading-5 text-muted-foreground">
            GetFRP verification identifies this F1 Composites profile. It does not certify every product, performance statement or manufacturing location.
          </p>
        </div>
      </section>

      <section className="border-b border-border/80 bg-muted/15">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            PROJECT EVIDENCE
          </div>
          <h2 className="mt-2 text-2xl font-semibold">Selected supplier-reported references</h2>
          <EvidenceCards items={F1_COMPOSITES_COMPANY_PROFILE.projects} />
        </div>
      </section>

      <section className="border-b border-border/80">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              BUYER NEXT STEP
            </div>
            <h2 className="mt-2 text-3xl font-semibold">Send one controlled RFQ</h2>
            <p className="mt-4 max-w-3xl text-[15px] leading-7 text-muted-foreground">
              Include a drawing or target dimensions, quantity, loads and service environment, resin or standard requirements, destination and target date. Confirm the legal seller, production location, evidence scope, inspection records, packing and delivery basis in the quotation.
            </p>
            <Link
              href={rfqHref({ supplier: F1_COMPOSITES_SUPPLIER_SLUG }) as never}
              className={`${buttonVariants({ size: "lg" })} mt-6 w-full sm:w-auto`}
            >
              Contact F1 Composites <ArrowRight size={15} />
            </Link>
          </div>
          <aside className="rounded-xl border border-border/70 bg-muted/15 p-6">
            <h3 className="font-semibold">Official contact</h3>
            <div className="mt-5 space-y-4 text-sm">
              <a href={`mailto:${F1_COMPOSITES_COMPANY_PROFILE.contact.email}`} className={`flex items-start gap-3 rounded-sm hover:text-primary ${LIGHT_LINK_FOCUS}`}>
                <Mail size={15} className="mt-0.5 shrink-0" />
                <span className="break-all">{F1_COMPOSITES_COMPANY_PROFILE.contact.email}</span>
              </a>
              <a href="tel:+8613883338993" className={`flex items-start gap-3 rounded-sm hover:text-primary ${LIGHT_LINK_FOCUS}`}>
                <Phone size={15} className="mt-0.5 shrink-0" />
                <span>{F1_COMPOSITES_COMPANY_PROFILE.contact.phone}</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={15} className="mt-0.5 shrink-0" />
                <span>{F1_COMPOSITES_COMPANY_PROFILE.contact.location}</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-border/80 bg-muted/15">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-lg font-semibold">Official sources</h2>
            <span className="text-xs text-muted-foreground">Reviewed {REVIEW_DATE_LABEL}</span>
          </div>
          <SourceLinks sources={F1_COMPOSITES_COMPANY_PROFILE.sources} />
        </div>
      </section>
    </>
  );
}

export function F1CompositesProductFamilyPage({
  family,
}: {
  family: F1CompositesProductFamily;
}) {
  const pageUrl = `${CURRENT_SITE_URL}${family.path}`;
  const companyUrl = `${CURRENT_SITE_URL}${COMPANY_PATH}`;
  const otherFamilies = F1_COMPOSITES_PRODUCT_FAMILIES.filter(
    (candidate) => candidate.slug !== family.slug,
  );

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${pageUrl}#webpage`,
              url: pageUrl,
              name: family.title,
              description: family.metaDescription,
              inLanguage: "en",
              dateModified: F1_COMPOSITES_REVIEW_DATE,
              isPartOf: { "@id": `${CURRENT_SITE_URL}/#website` },
              about: { "@id": `${pageUrl}#product-group` },
              mainEntity: { "@id": `${pageUrl}#product-group` },
              citation: family.sources.map((source) => source.href),
            },
            {
              "@type": "ProductGroup",
              "@id": `${pageUrl}#product-group`,
              name: family.title,
              description: family.answer,
              category: family.shortTitle,
              brand: {
                "@type": "Brand",
                name: F1_COMPOSITES_BRAND_NAME,
              },
              subjectOf: { "@id": `${pageUrl}#webpage` },
            },
          ],
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${CURRENT_SITE_URL}/` },
          { name: "Suppliers", url: `${CURRENT_SITE_URL}/suppliers` },
          { name: F1_COMPOSITES_BRAND_NAME, url: companyUrl },
          { name: family.shortTitle, url: pageUrl },
        ]}
      />

      <section className="fiber-surface-dark border-b border-border/80 text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <VisibleBreadcrumbs current={family} />
          <div className="mt-8 grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_260px]">
            <div>
              <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-aqua">
                {family.eyebrow}
              </div>
              <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                {family.title}
              </h1>
              <p className="mt-5 max-w-4xl text-[16px] leading-8 text-brand-cool-gray">
                {family.answer}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href={rfqHref({
                    supplier: F1_COMPOSITES_SUPPLIER_SLUG,
                    product: family.rfqProduct,
                  }) as never}
                  className={`${buttonVariants({ size: "lg", variant: "signal" })} ${WRAPPING_BUTTON} w-full sm:w-auto`}
                >
                  {family.primaryActionLabel} <ArrowRight size={15} className="shrink-0" />
                </Link>
                <Link
                  href={family.internalCategory.href as never}
                  className={`${buttonVariants({ size: "lg", variant: "outline" })} ${WRAPPING_BUTTON} w-full border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white sm:w-auto`}
                >
                  {family.internalCategory.label}
                </Link>
              </div>
            </div>
            <div>
              <F1Logo compact />
              <div className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-brand-cool-gray">
                Reviewed {REVIEW_DATE_LABEL}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/80 bg-muted/15">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <div className="grid gap-5 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start">
            <div>
              <Badge variant="outline" className="h-auto max-w-full whitespace-normal! text-left">
                {family.evidenceStatus}
              </Badge>
            </div>
            <div>
              <p className="text-sm leading-6 text-muted-foreground">{family.evidenceSummary}</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{family.selectionNote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/80">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            PRODUCT TYPES
          </div>
          <h2 className="mt-2 text-2xl font-semibold">What this family covers</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {family.productTypes.map((item) => (
              <article key={item.title} className="rounded-xl border border-border/70 bg-background p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/80 bg-muted/15">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            APPLICATION FIT
          </div>
          <h2 className="mt-2 text-2xl font-semibold">Where to evaluate it—and where to pause</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {family.fit.map((item) => (
              <article key={item.title} className="rounded-xl border border-border/70 bg-background p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/80">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            <FileCheck2 size={14} aria-hidden="true" /> EVIDENCE BOUNDARIES
          </div>
          <h2 className="mt-2 text-2xl font-semibold">What the published evidence does—and does not—support</h2>
          <EvidenceCards items={family.evidenceBoundaries} />
        </div>
      </section>

      <section className="border-b border-border/80 bg-muted/15">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              RFQ CHECKLIST
            </div>
            <h2 className="mt-2 text-2xl font-semibold">Give the supplier a controlled starting point</h2>
            <ol className="mt-6 grid gap-3 sm:grid-cols-2">
              {family.rfqChecklist.map((item, index) => (
                <li key={item} className="flex gap-3 rounded-xl border border-border/70 bg-background p-4 text-sm leading-6 text-muted-foreground">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-border text-[11px] font-semibold text-foreground">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
          <aside className="rounded-xl border border-border/70 bg-background p-6">
            <h3 className="font-semibold">Start this RFQ</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Keep drawings, performance criteria, evidence requirements and commercial terms tied to the same revision.
            </p>
            <Link
              href={rfqHref({
                supplier: F1_COMPOSITES_SUPPLIER_SLUG,
                product: family.rfqProduct,
              }) as never}
              className={`${buttonVariants({ size: "lg" })} ${WRAPPING_BUTTON} mt-5 w-full`}
            >
              {family.primaryActionLabel} <ArrowRight size={15} className="shrink-0" />
            </Link>
          </aside>
        </div>
      </section>

      <section className="border-b border-border/80">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold">Official sources</h2>
            <p className="mt-2 text-xs leading-5 text-muted-foreground">
              Source links open F1 Composites&apos; official website or its published documents.
            </p>
            <SourceLinks sources={family.sources} />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Explore other F1 Composites families</h2>
            <div className="mt-5 grid gap-2">
              {otherFamilies.map((other) => (
                <Link
                  key={other.slug}
                  href={other.path as never}
                  className={`flex items-center justify-between gap-3 rounded-lg border border-border/70 p-4 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary ${LIGHT_LINK_FOCUS}`}
                >
                  <span>{other.shortTitle}</span>
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              ))}
              <Link
                href={COMPANY_PATH as never}
                className={`flex items-center justify-between gap-3 rounded-lg border border-primary/30 bg-primary/5 p-4 text-sm font-medium hover:border-primary ${LIGHT_LINK_FOCUS}`}
              >
                <span>Back to the F1 Composites company profile</span>
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
