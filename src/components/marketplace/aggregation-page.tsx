import Image from "next/image";
import { Fragment } from "react";
import { ArrowRight, Factory, PackageSearch } from "lucide-react";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { FaqGrid } from "@/components/faq-grid";
import { JsonLd } from "@/components/json-ld";
import { SupplierList } from "@/components/supplier-list";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { marketplaceBreadcrumbTrail, relatedSearches, type MarketplacePage } from "@/lib/data/seo-marketplace-pages";
import { getPublicSupplierDirectory } from "@/lib/public-supplier-directory";
import { loadApprovedSupplierProducts } from "@/lib/products/ugc-queries";
import { CURRENT_SITE_URL } from "@/lib/sites";

type Filters = { verified?: boolean; exportReady?: boolean; iso?: boolean; moq?: boolean };

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ");
}

export async function MarketplaceAggregationPage({
  page,
  filters = {},
}: {
  page: MarketplacePage;
  filters?: Filters;
}) {
  const [allSuppliers, products] = await Promise.all([
    getPublicSupplierDirectory("en"),
    loadApprovedSupplierProducts({
      category: page.category,
      material: page.material,
      process: page.process,
      application: page.application,
      standard: page.standard,
    }),
  ]);
  const terms = page.supplierTerms.map(normalize);
  const matched = allSuppliers.filter((supplier) => {
    const haystack = normalize([
      supplier.name,
      supplier.description,
      ...supplier.products,
      ...supplier.processList,
      ...supplier.capabilities,
      ...supplier.standardsSupported,
    ].join(" "));
    if (!terms.some((term) => haystack.includes(term))) return false;
    if (filters.verified && !supplier.verified) return false;
    if (filters.exportReady && !supplier.exportReady) return false;
    if (filters.iso && !supplier.certifications.some((cert) => /iso\s*9001/i.test(cert))) return false;
    if (filters.moq && supplier.moqKg == null) return false;
    return true;
  });
  // The brief explicitly forbids padding combination pages with made-up data.
  const suppliers = matched.length >= 3 ? matched.slice(0, 18) : [];
  const pageUrl = `${CURRENT_SITE_URL}${page.path}`;
  const related = relatedSearches(page);
  const breadcrumbs = marketplaceBreadcrumbTrail(page);

  return (
    <main>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: page.h1,
        description: page.summary,
        url: pageUrl,
        inLanguage: "en",
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: suppliers.length,
          itemListElement: suppliers.map((supplier, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: `${CURRENT_SITE_URL}/suppliers/${supplier.slug}`,
            name: supplier.name,
          })),
        },
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }} />
      <BreadcrumbJsonLd items={breadcrumbs.map((item) => ({ name: item.name, url: `${CURRENT_SITE_URL}${item.href === "/" ? "" : item.href}` }))} />

      <section className="border-b border-border/80">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <nav className="text-xs text-muted-foreground" aria-label="Breadcrumb">{breadcrumbs.map((item, index) => <Fragment key={item.href}>{index ? <span className="mx-2">›</span> : null}{index === breadcrumbs.length - 1 ? <span>{item.name}</span> : <Link href={item.href as never}>{item.name}</Link>}</Fragment>)}</nav>
          <div className="mt-7 max-w-4xl"><div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">{page.eyebrow}</div><h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">{page.h1}</h1><p className="mt-5 text-[16px] leading-7 text-muted-foreground">{page.summary}</p></div>
          <div className="mt-8 flex flex-wrap gap-3"><a href="#products" className={buttonVariants({ size: "lg" })}>Product List</a><a href="#suppliers" className={buttonVariants({ size: "lg", variant: "outline" })}>Supplier List</a><Link href="/rfq" className={buttonVariants({ size: "lg", variant: "ghost" })}>Submit RFQ</Link></div>
        </div>
      </section>

      <section className="border-b border-border/80"><div className="mx-auto max-w-6xl px-4 py-14 sm:px-6"><h2 className="text-2xl font-semibold">Buying notes and qualification boundaries</h2><div className="mt-5 max-w-4xl space-y-5 text-[15px] leading-7 text-muted-foreground">{page.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div></section>

      <section className="border-b border-border/80 bg-muted/15"><div className="mx-auto max-w-6xl px-4 py-12 sm:px-6"><h2 className="text-2xl font-semibold">Browse subcategories</h2><div className="mt-6 grid gap-4 md:grid-cols-3">{page.subcategories.map((item) => <Link key={item.href} href={item.href as never} className="rounded-xl border bg-background p-5 transition-colors hover:border-foreground/40"><div className="flex items-center justify-between gap-3 font-semibold">{item.label}<ArrowRight size={15} /></div><p className="mt-2 text-sm leading-6 text-muted-foreground">{item.note}</p></Link>)}</div></div></section>

      <section className="border-b border-border/80" id="suppliers"><div className="mx-auto max-w-7xl px-4 py-14 sm:px-6"><div className="flex flex-wrap items-end justify-between gap-4"><div><div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">REAL REVIEWED DATA</div><h2 className="mt-2 text-2xl font-semibold">Approved supplier matches</h2></div><form method="get" className="flex flex-wrap gap-2 text-xs"><Filter name="verified" label="Factory verified" checked={filters.verified} /><Filter name="export" label="Export ready" checked={filters.exportReady} /><Filter name="moq" label="MOQ declared" checked={filters.moq} /><Filter name="iso" label="ISO 9001" checked={filters.iso} /><button className="rounded-md bg-foreground px-3 py-2 text-background">Apply filters</button></form></div>
        {suppliers.length ? <SupplierList suppliers={suppliers} className="mt-7" /> : <EmptyState related={related} />}
      </div></section>

      <section className="border-b border-border/80 bg-muted/15" id="products"><div className="mx-auto max-w-7xl px-4 py-14 sm:px-6"><div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">APPROVED UGC PRODUCTS</div><h2 className="mt-2 text-2xl font-semibold">Supplier-uploaded products</h2><p className="mt-3 max-w-3xl text-sm text-muted-foreground">Only approved supplier submissions appear here. Pending, rejected and demo rows are excluded from public queries and sitemap output.</p>{products.length ? <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{products.map((product) => <Link key={product.id} href={`/suppliers/${product.supplier.slug}/${product.slug}` as never} className="overflow-hidden rounded-xl border bg-background"><div className="relative aspect-[4/3] bg-muted"><Image src={product.images[0]} alt={product.name} fill sizes="(max-width: 1023px) 50vw, 33vw" className="object-cover" /></div><div className="p-5"><h3 className="font-semibold">{product.name}</h3><p className="mt-2 text-xs text-muted-foreground">{product.supplier.name} · {product.material}</p></div></Link>)}</div> : <div className="mt-7 rounded-xl border border-dashed bg-background p-8 text-center"><PackageSearch className="mx-auto" /><h3 className="mt-3 font-semibold">No approved supplier products in this combination yet</h3><p className="mt-2 text-sm text-muted-foreground">Browse the reviewed supplier profiles above or submit an RFQ. GetFRP does not fill empty categories with synthetic products.</p></div>}</div></section>

      <section className="border-b border-border/80"><div className="mx-auto max-w-6xl px-4 py-14 sm:px-6"><h2 className="text-2xl font-semibold">Buyer FAQ</h2><FaqGrid items={page.faqs} className="mt-6" /></div></section>

      <section className="border-b border-border/80 bg-muted/15"><div className="mx-auto max-w-6xl px-4 py-12 sm:px-6"><h2 className="text-xl font-semibold">Related searches</h2><div className="mt-5 flex flex-wrap gap-2">{related.map((item) => <Link key={item.href} href={item.href as never} className="rounded-full border bg-background px-4 py-2 text-sm hover:border-foreground/50">{item.label}</Link>)}</div><Link href={page.guideHref as never} className="mt-7 inline-flex items-center gap-2 font-medium underline underline-offset-4">Read the related China sourcing guide <ArrowRight size={15} /></Link></div></section>

      <section className="bg-foreground py-14 text-background"><div className="mx-auto max-w-3xl px-4 text-center sm:px-6"><Factory className="mx-auto" /><h2 className="mt-4 text-3xl font-semibold">Need current factory evidence and quotations?</h2><p className="mt-4 text-sm leading-6 text-background/75">Send one controlled specification. GetFRP checks the matching public network without inventing supply records.</p><Link href="/rfq" className={`${buttonVariants({ size: "lg", variant: "secondary" })} mt-7`}>Submit an RFQ <ArrowRight size={15} /></Link></div></section>
    </main>
  );
}

function Filter({ name, label, checked }: { name: string; label: string; checked?: boolean }) {
  return <label className="flex items-center gap-2 rounded-md border bg-background px-3 py-2"><input type="checkbox" name={name} value="1" defaultChecked={checked} />{label}</label>;
}

function EmptyState({ related }: { related: MarketplacePage["related"] }) {
  return <div className="mt-7 rounded-xl border border-dashed p-8 text-center"><PackageSearch className="mx-auto" /><h3 className="mt-3 font-semibold">Fewer than three approved matches</h3><p className="mt-2 text-sm text-muted-foreground">This page intentionally shows no supplier rows until at least three real reviewed records match. Try a related category.</p><div className="mt-5 flex flex-wrap justify-center gap-2">{related.slice(0, 4).map((item) => <Link key={item.href} href={item.href as never} className="rounded-full border px-3 py-1.5 text-xs">{item.label}</Link>)}</div></div>;
}
