import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  ExternalLink,
  FileText,
} from "lucide-react";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { JsonLd } from "@/components/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import {
  SEO_REFERENCE_GROUPS,
  type SeoReferencePage,
} from "@/lib/data/seo-reference-pages";
import { CURRENT_SITE_URL } from "@/lib/sites";

export function SeoReferencePageView({ page }: { page: SeoReferencePage }) {
  const group = SEO_REFERENCE_GROUPS[page.group];
  const path = `/${page.group}/${page.slug}`;
  const pageUrl = `${CURRENT_SITE_URL}${path}`;

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "@id": `${pageUrl}#article`,
          url: pageUrl,
          headline: page.title,
          description: page.metaDescription,
          inLanguage: "en",
          dateModified: page.reviewedDate,
          author: { "@id": `${CURRENT_SITE_URL}/#organization` },
          publisher: { "@id": `${CURRENT_SITE_URL}/#organization` },
          mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
          citation: page.sources.map((source) => source.href),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: page.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${CURRENT_SITE_URL}/` },
          { name: group.label, url: `${CURRENT_SITE_URL}/${page.group}` },
          { name: page.shortTitle, url: pageUrl },
        ]}
      />

      <section className="border-b border-border/80 bg-[#071d2a] text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <nav className="text-xs text-[#aac0c8]" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="mx-2">›</span>
            <Link href={`/${page.group}` as never}>{group.label}</Link>
            <span className="mx-2">›</span>
            <span>{page.shortTitle}</span>
          </nav>
          <div className="mt-8 max-w-4xl">
            <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#75d3c8]">
              {page.eyebrow}
            </div>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
              {page.title}
            </h1>
            <p className="mt-6 max-w-3xl text-[16px] leading-8 text-[#b8ccd3]">
              {page.intro}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3 text-xs text-[#9fb6be]">
              <span className="inline-flex items-center gap-1.5">
                <BookOpenCheck size={14} className="text-[#75d3c8]" />
                Technical sourcing reference
              </span>
              <span>Updated {page.reviewedDate}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/80 bg-muted/20">
        <div className="mx-auto grid max-w-6xl gap-3 px-4 py-7 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {page.highlights.map((item) => (
            <div key={item.label} className="rounded-xl border border-border/70 bg-background p-4">
              <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                {item.label}
              </div>
              <div className="mt-2 text-sm font-semibold">{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      {page.table && (
        <section className="border-b border-border/80">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              QUICK COMPARISON
            </div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              Decision matrix
            </h2>
            <div className="mt-6 overflow-hidden rounded-xl border border-border/70">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[820px] text-left text-[13px]">
                  <thead className="border-b border-border/70 bg-muted/40 text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                    <tr>
                      {page.table.headers.map((header) => (
                        <th key={header} className="px-4 py-3 font-medium">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {page.table.rows.map((row) => (
                      <tr key={row.join("|")} className="border-b border-border/50 last:border-0">
                        {row.map((cell, index) => (
                          <td
                            key={`${cell}-${index}`}
                            className={`px-4 py-4 align-top leading-6 ${
                              index === 0 ? "font-medium text-foreground" : "text-muted-foreground"
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="mt-3 text-xs leading-5 text-muted-foreground">
              {page.table.caption}
            </p>
          </div>
        </section>
      )}

      <section className="border-b border-border/80">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="space-y-12">
            {page.sections.map((section) => (
              <article key={section.heading}>
                <h2 className="text-2xl font-semibold tracking-tight">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 text-[15px] leading-8 text-muted-foreground">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets && (
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 rounded-lg border border-border/70 bg-muted/20 p-4 text-[13px] leading-6 text-muted-foreground"
                      >
                        <CheckCircle2 size={15} className="mt-1 shrink-0 text-[#0a756f]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/80 bg-muted/15">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            BUYER FAQ
          </div>
          <div className="mt-6 divide-y divide-border/70 border-y border-border/70">
            {page.faqs.map((faq) => (
              <article key={faq.question} className="py-6">
                <h2 className="text-base font-semibold">{faq.question}</h2>
                <p className="mt-2 text-[14px] leading-7 text-muted-foreground">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/80">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_1fr]">
          <div>
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              <FileText size={14} /> Primary technical references
            </div>
            <ul className="mt-4 space-y-3">
              {page.sources.map((source) => (
                <li key={source.href}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start gap-2 text-sm font-medium text-[#0a756f] hover:underline"
                  >
                    {source.label}
                    <ExternalLink size={13} className="mt-1 shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-5 text-muted-foreground">
              References support screening and terminology. Use the applicable paid standard,
              governing design code and product-specific evidence for final engineering decisions.
            </p>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              CONTINUE RESEARCH
            </div>
            <div className="mt-4 grid gap-2">
              {page.related.map((item) => (
                <Link
                  key={item.href}
                  href={item.href as never}
                  className="flex items-center justify-between rounded-lg border border-border/70 p-4 text-sm font-medium transition-colors hover:border-[#8dbab5] hover:text-[#0a756f]"
                >
                  {item.label}
                  <ArrowRight size={14} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#071d2a] py-12 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#75d3c8]">
            TURN THE RESEARCH INTO ONE CONTROLLED RFQ
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Need product data or a supplier checked?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#b8ccd3]">
            Send the product, environment, standards, quantity and destination.
            GetFRP matches the specification to relevant Chinese manufacturers and evidence.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/rfq" className={buttonVariants({ size: "lg", variant: "secondary" })}>
              Submit an RFQ <ArrowRight size={15} />
            </Link>
            <Link
              href="/suppliers"
              className="inline-flex items-center rounded-md border border-white/25 px-5 py-2.5 text-sm hover:bg-white/10"
            >
              Browse suppliers
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
