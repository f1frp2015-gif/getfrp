import { ArrowRight, BookOpenCheck } from "lucide-react";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { JsonLd } from "@/components/json-ld";
import { Link } from "@/i18n/navigation";
import {
  SEO_REFERENCE_GROUPS,
  type SeoReferenceGroup,
  type SeoReferencePage,
} from "@/lib/data/seo-reference-pages";
import { CURRENT_SITE_URL } from "@/lib/sites";

export function SeoReferenceHub({
  group,
  pages,
}: {
  group: SeoReferenceGroup;
  pages: SeoReferencePage[];
}) {
  const config = SEO_REFERENCE_GROUPS[group];
  const pageUrl = `${CURRENT_SITE_URL}/${group}`;

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": `${pageUrl}#collection`,
          url: pageUrl,
          name: config.title,
          description: config.description,
          inLanguage: "en",
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: pages.length,
            itemListElement: pages.map((page, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `${pageUrl}/${page.slug}`,
              name: page.shortTitle,
            })),
          },
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${CURRENT_SITE_URL}/` },
          { name: config.label, url: pageUrl },
        ]}
      />

      <section className="fiber-surface-dark border-b border-border/80 text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <nav className="text-xs text-[#d9dfe8]" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="mx-2">›</span><span>{config.label}</span>
          </nav>
          <div className="mt-8 max-w-4xl">
            <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7be4e1]">
              {config.label}
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
              {config.title}
            </h1>
            <p className="mt-5 max-w-3xl text-[16px] leading-8 text-[#d9dfe8]">
              {config.description}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-5 md:grid-cols-2">
          {pages.map((page) => (
            <Link
              key={page.slug}
              href={`/${group}/${page.slug}` as never}
              className="group flex min-h-64 flex-col rounded-xl border border-border/70 bg-background p-6 transition-all hover:-translate-y-0.5 hover:border-[#7be4e1] hover:shadow-lg"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#123f8c]">
                  {page.eyebrow}
                </span>
                <BookOpenCheck size={16} className="text-muted-foreground" />
              </div>
              <h2 className="mt-7 text-2xl font-semibold leading-snug tracking-tight group-hover:text-[#123f8c]">
                {page.title}
              </h2>
              <p className="mt-3 line-clamp-3 text-[13px] leading-6 text-muted-foreground">
                {page.intro}
              </p>
              <div className="mt-auto flex items-center justify-between border-t border-border/70 pt-4 text-xs font-semibold text-[#123f8c]">
                Read the guide <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
