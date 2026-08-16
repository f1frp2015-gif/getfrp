import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { JsonLd } from "@/components/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { getProcessPage, PROCESS_PAGES } from "@/lib/data/process-pages";
import { PRODUCT_SEED_RECORDS } from "@/lib/data/products";
import { alternates, og } from "@/lib/seo";
import { CURRENT_SITE_URL } from "@/lib/sites";

export const dynamicParams = false;

export function generateStaticParams() {
  return PROCESS_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getProcessPage(slug);
  if (!page) return { robots: { index: false, follow: false } };
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: alternates(`/processes/${page.slug}`),
    openGraph: og(`/processes/${page.slug}`, { title: page.title, description: page.description }),
  };
}

export default async function ProcessDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const page = getProcessPage(slug);
  if (!page) notFound();
  const pageUrl = `${CURRENT_SITE_URL}/processes/${page.slug}`;
  const relatedProducts = page.productSlugs.flatMap((productSlug) => {
    const product = PRODUCT_SEED_RECORDS.find((item) => item.slug === productSlug);
    return product ? [product] : [];
  });

  return (
    <main>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: page.title,
        description: page.description,
        dateModified: "2026-08-09",
        inLanguage: "en",
        mainEntity: { "@type": "DefinedTerm", name: page.name, description: page.definition },
      }} />
      <BreadcrumbJsonLd items={[
        { name: "Home", url: `${CURRENT_SITE_URL}/` },
        { name: "Products", url: `${CURRENT_SITE_URL}/products` },
        { name: page.name, url: pageUrl },
      ]} />

      <section className="fiber-surface-dark border-b border-border/80 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7be4e1]">China FRP process guide</div>
          <h1 className="mt-4 max-w-5xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">{page.name}</h1>
          <p className="mt-6 max-w-4xl text-[16px] leading-8 text-slate-200">{page.definition}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/suppliers/search?q=${encodeURIComponent(page.supplierQuery)}` as never} className={buttonVariants({ size: "lg", variant: "secondary" })}>
              Find matched suppliers <ArrowRight size={15} />
            </Link>
            <Link href="/services/frp-engineering-qa" className="inline-flex min-h-11 items-center rounded-md border border-white/25 px-5 text-sm font-semibold">Plan process QA</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-semibold">When this process fits</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {page.suitableFor.map((item) => <li key={item} className="flex gap-3 rounded-lg border border-border/70 p-4 text-sm"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#123f8c]" />{item}</li>)}
        </ul>
      </section>

      <section className="border-y border-border/80 bg-muted/20">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-semibold">Process controls a buyer can audit</h2>
          <div className="mt-7 overflow-x-auto rounded-xl border border-border/70 bg-background">
            <table className="w-full min-w-[760px] text-left text-[13px]">
              <thead className="border-b border-border/70 bg-muted/30"><tr><th className="px-5 py-3">Control field</th><th className="px-5 py-3">Factory control</th><th className="px-5 py-3">Buyer evidence</th></tr></thead>
              <tbody>{page.processWindow.map((row) => <tr key={row.field} className="border-b border-border/60 last:border-0"><th className="px-5 py-4 font-medium">{row.field}</th><td className="px-5 py-4 text-muted-foreground">{row.control}</td><td className="px-5 py-4 text-muted-foreground">{row.buyerCheck}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold">Common failure modes</h2>
          <div className="mt-6 space-y-4">{page.failureModes.map((item) => <article key={item.risk} className="rounded-xl border border-border/70 p-5"><h3 className="font-semibold">{item.risk}</h3><p className="mt-2 text-[13px] leading-6 text-muted-foreground"><strong className="text-foreground">Likely cause:</strong> {item.cause}</p><p className="mt-1 text-[13px] leading-6 text-muted-foreground"><strong className="text-foreground">Evidence:</strong> {item.evidence}</p></article>)}</div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">RFQ inputs before supplier matching</h2>
          <ol className="mt-6 divide-y divide-border/70 border-y border-border/70">{page.rfqInputs.map((item, index) => <li key={item} className="flex gap-4 py-4 text-sm"><span className="font-mono text-[#123f8c]">{String(index + 1).padStart(2, "0")}</span><span>{item}</span></li>)}</ol>
          <p className="mt-5 text-[13px] leading-6 text-muted-foreground">Missing inputs should be recorded as deviations, not silently filled with a factory default.</p>
        </div>
      </section>

      <section className="fiber-surface-light border-y border-border/80">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-semibold">Related product families</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">{relatedProducts.map((product) => <Link key={product.slug} href={`/products/${product.slug}` as never} className="rounded-xl border border-border/70 bg-background p-5 transition-colors hover:border-[#123f8c]"><div className="font-semibold">{product.nameEn}</div><p className="mt-2 line-clamp-3 text-[13px] leading-6 text-muted-foreground">{product.summary}</p><span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#123f8c]">Open product evidence <ArrowRight size={12} /></span></Link>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6"><h2 className="text-3xl font-semibold">Match the process, then the factory.</h2><p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-muted-foreground">Send the product definition and required evidence. GetFRP will return process-fit suppliers and identify open controls.</p><Link href="/rfq" className={`${buttonVariants({ size: "lg" })} mt-7`}>Submit controlled RFQ <ArrowRight size={15} /></Link></section>
    </main>
  );
}
