import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Factory,
} from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/badge";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { FaqGrid } from "@/components/faq-grid";
import { JsonLd } from "@/components/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { PRODUCT_SEED_RECORDS } from "@/lib/data/products";
import {
  loadProductBySlug,
  loadSuppliersForProduct,
} from "@/lib/products/queries";
import { alternates, og } from "@/lib/seo";
import { CURRENT_SITE_URL } from "@/lib/sites";
import { supplierCategories } from "@/lib/data/suppliers";
import { SuppliersClient } from "../../suppliers/suppliers-client";
import { MarketplaceAggregationPage } from "@/components/marketplace/aggregation-page";
import {
  ADDITIONAL_PRODUCT_PAGES,
  COMBINATION_PAGES,
  findPage,
} from "@/lib/data/seo-marketplace-pages";
import { loadApprovedSupplierProducts } from "@/lib/products/ugc-queries";
import { getProductSearchIntent } from "@/lib/data/product-search-intents";
import { rfqHref } from "@/lib/rfq-links";

export const revalidate = 3600;
export const dynamicParams = true;

const SOURCING_GUIDE_BY_PRODUCT: Record<string, string> = {
  "frp-grating": "/sourcing/frp-grating",
  "frp-rebar": "/sourcing/frp-rebar",
  "pultruded-profiles": "/sourcing/pultruded-profiles",
  "frp-pipe": "/sourcing/frp-piping",
};

const RELATED_PRODUCT_SLUGS: Record<string, string[]> = {
  "frp-grating": ["pultruded-profiles", "fiberglass-sheet", "frp-rebar"],
  "pultruded-profiles": ["frp-grating", "fiberglass-sheet", "frp-rebar"],
  "fiberglass-sheet": ["smc-bmc", "resin-gelcoat", "fiber-glass"],
  "frp-rebar": ["pultruded-profiles", "frp-grating", "frp-pipe"],
  "frp-pipe": ["resin-gelcoat", "pultruded-profiles", "frp-grating"],
  "smc-bmc": ["resin-gelcoat", "fiber-glass", "fiberglass-sheet"],
  "resin-gelcoat": ["fiber-glass", "frp-pipe", "smc-bmc"],
  "fiber-glass": ["resin-gelcoat", "pultruded-profiles", "smc-bmc"],
};

export function generateStaticParams() {
  return [
    ...PRODUCT_SEED_RECORDS.map((product) => ({ slug: product.slug })),
    ...ADDITIONAL_PRODUCT_PAGES.map((page) => ({ slug: page.slug })),
    ...COMBINATION_PAGES.filter((page) => page.path.split("/").length === 3).map((page) => ({ slug: page.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const marketplacePage = findPage(
    [...ADDITIONAL_PRODUCT_PAGES, ...COMBINATION_PAGES],
    slug,
  );
  if (marketplacePage && marketplacePage.path === `/products/${slug}`) {
    return {
      title: { absolute: marketplacePage.title },
      description: marketplacePage.summary,
      alternates: alternates(marketplacePage.path),
      openGraph: og(marketplacePage.path, {
        title: marketplacePage.title,
        description: marketplacePage.summary,
      }),
    };
  }
  const product = await loadProductBySlug(slug);
  if (!product) return { robots: { index: false, follow: false } };
  const searchIntent = getProductSearchIntent(slug);
  const title = searchIntent?.title
    ?? `China ${product.nameEn} Manufacturers, Suppliers & Wholesale | getfrp`;
  return {
    title: { absolute: title },
    description: product.summary,
    alternates: alternates(`/products/${product.slug}`),
    openGraph: og(`/products/${product.slug}`, {
      title,
      description: product.summary,
      image: product.imageUrl
        ? {
            path: product.imageUrl,
            alt: product.imageAlt ?? product.nameEn,
            width: 960,
            height: 600,
          }
        : undefined,
    }),
  };
}

export default async function ProductDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string; slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const [{ locale, slug }, sp] = await Promise.all([params, searchParams]);
  setRequestLocale(locale);
  const marketplacePage = findPage(
    [...ADDITIONAL_PRODUCT_PAGES, ...COMBINATION_PAGES],
    slug,
  );
  if (marketplacePage && marketplacePage.path === `/products/${slug}`) {
    return <MarketplaceAggregationPage page={marketplacePage} filters={{
      verified: sp.verified === "1",
      exportReady: sp.export === "1",
      iso: sp.iso === "1",
      moq: sp.moq === "1",
    }} />;
  }
  const product = await loadProductBySlug(slug);
  if (!product) notFound();
  const searchIntent = getProductSearchIntent(product.slug);
  const [allSuppliers, supplierProductPages] = await Promise.all([
    loadSuppliersForProduct(product),
    loadApprovedSupplierProducts({ category: product.slug }),
  ]);
  const suppliers = allSuppliers.filter((supplier) => {
    if (sp.verified === "1" && !supplier.verified) return false;
    if (sp.export === "1" && !supplier.exportReady) return false;
    if (sp.moq === "1" && supplier.moq == null && supplier.moqKg == null) return false;
    if (sp.iso === "1" && !supplier.certifications.some((certification) => /iso\s*9001/i.test(certification))) return false;
    return true;
  });
  const pageUrl = `${CURRENT_SITE_URL}/products/${product.slug}`;
  const sourcingGuideHref = SOURCING_GUIDE_BY_PRODUCT[product.slug];
  const relatedProducts = (RELATED_PRODUCT_SLUGS[product.slug] ?? [])
    .map((relatedSlug) =>
      PRODUCT_SEED_RECORDS.find((record) => record.slug === relatedSlug),
    )
    .filter((record): record is (typeof PRODUCT_SEED_RECORDS)[number] => Boolean(record));
  const directoryCategories = supplierCategories
    .filter((category) => suppliers.some((supplier) => supplier.category === category.id))
    .map((category) => ({ id: category.id, name: category.nameEn }));

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${pageUrl}#webpage`,
          url: pageUrl,
          name: product.nameEn,
          description: product.summary,
          inLanguage: "en",
          dateModified: "2026-08-25",
          mainEntity: {
            "@type": "DefinedTerm",
            "@id": `${pageUrl}#product-family`,
            name: product.nameEn,
            description: product.summary,
            inDefinedTermSet: `${CURRENT_SITE_URL}/products`,
          },
          mentions: suppliers.map((supplier) => ({
            "@type": "Organization",
            "@id": `${CURRENT_SITE_URL}/suppliers/${supplier.slug}#organization`,
            name: supplier.name,
            url: `${CURRENT_SITE_URL}/suppliers/${supplier.slug}`,
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `${product.nameEn} suppliers in China`,
          numberOfItems: suppliers.length,
          itemListElement: suppliers.map((supplier, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: supplier.name,
            url: `${CURRENT_SITE_URL}/suppliers/${supplier.slug}`,
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: product.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${CURRENT_SITE_URL}/` },
          { name: "Products", url: `${CURRENT_SITE_URL}/products` },
          { name: product.shortName ?? product.nameEn, url: pageUrl },
        ]}
      />

      <section className="border-b border-border/80">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
          <nav className="text-xs text-muted-foreground" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span className="mx-2">›</span>
            <Link href="/products">Products</Link><span className="mx-2">›</span>
            <span>{product.shortName ?? product.nameEn}</span>
          </nav>
          <div className="mt-7 grid gap-8 lg:grid-cols-[1fr_440px] lg:items-center">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#123f8c]">
                {product.category}
              </div>
              <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
                {searchIntent?.h1 ?? `China ${product.nameEn} Manufacturers & Suppliers`}
              </h1>
              <p className="mt-5 max-w-3xl text-[16px] leading-7 text-muted-foreground">
                {searchIntent?.openingParagraph ?? product.summary}
              </p>
              {searchIntent && (
                <div className="mt-5 max-w-3xl rounded-xl border border-[#123f8c]/15 bg-[#123f8c]/[0.035] p-4">
                  <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#123f8c]">
                    Buyer scope
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {searchIntent.audienceNote}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {searchIntent.primaryTerms.map((term) => (
                      <Badge key={term} variant="outline">{term}</Badge>
                    ))}
                  </div>
                </div>
              )}
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#products" className={buttonVariants({ size: "lg" })}>
                  Product List
                </a>
                <a href="#suppliers" className={buttonVariants({ size: "lg", variant: "outline" })}>
                  Supplier List
                </a>
                <Link
                  href={rfqHref({ product: product.slug }) as never}
                  className={buttonVariants({ size: "lg", variant: "ghost" })}
                >
                  Request matched suppliers <ArrowRight size={15} />
                </Link>
                {sourcingGuideHref && (
                  <Link
                    href={sourcingGuideHref as never}
                    className={buttonVariants({ size: "lg", variant: "ghost" })}
                  >
                    Read the China sourcing guide
                  </Link>
                )}
              </div>
            </div>
            {product.imageUrl && (
              <div className="relative aspect-[8/5] overflow-hidden rounded-2xl border border-border/70 bg-muted">
                <Image
                  src={product.imageUrl}
                  alt={product.imageAlt ?? product.nameEn}
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 440px"
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="products" className="scroll-mt-20 border-b border-border/80 bg-muted/15">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">APPROVED UGC PRODUCTS</div>
          <h2 className="mt-2 text-3xl font-semibold">Supplier-uploaded {product.shortName ?? product.nameEn} products</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">Only reviewed and approved supplier submissions are listed. Pending, rejected and demo records remain private and are excluded from sitemap output.</p>
          {supplierProductPages.length ? (
            <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {supplierProductPages.map((item) => (
                <Link key={item.id} href={`/suppliers/${item.supplier.slug}/${item.slug}` as never} className="overflow-hidden rounded-xl border bg-background">
                  <div className="relative aspect-[4/3] bg-muted"><Image src={item.images[0]} alt={item.name} fill sizes="(max-width: 1023px) 50vw, 33vw" className="object-cover" /></div>
                  <div className="p-5"><h3 className="font-semibold">{item.name}</h3><p className="mt-2 text-xs text-muted-foreground">{item.supplier.name} · {item.material}</p></div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-7 rounded-xl border border-dashed bg-background p-8 text-center"><h3 className="font-semibold">No approved supplier products yet</h3><p className="mt-2 text-sm text-muted-foreground">Browse the real supplier relationships below or submit an RFQ. GetFRP does not fill this section with synthetic products.</p></div>
          )}
        </div>
      </section>

      <section className="border-b border-border/80 bg-[#f4f6f9]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#123f8c]">
              Evidence and review method
            </div>
            <h2 className="mt-2 text-2xl font-semibold">
              A product-family brief, not a purchasable SKU
            </h2>
            <p className="mt-4 max-w-3xl text-[14px] leading-7 text-muted-foreground">
              GetFRP separates generally used engineering ranges from a
              supplier&apos;s commercial offer. Standards, properties and buying
              checks on this page define the questions for an RFQ; the linked
              company profiles identify the published source and the supplier-
              product relationship records the offer-specific evidence.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm font-medium text-[#123f8c]">
              <Link href="/methodology" className="underline underline-offset-4">
                Read the research methodology
              </Link>
              <Link href="/services/frp-engineering-qa" className="underline underline-offset-4">
                Engineering &amp; QA service scope
              </Link>
            </div>
          </div>
          <dl className="rounded-xl border border-border/70 bg-white p-6 text-sm">
            <div className="flex justify-between gap-5 border-b border-border/70 pb-3">
              <dt className="text-muted-foreground">Last editorial review</dt>
              <dd className="font-medium">25 August 2026</dd>
            </div>
            <div className="flex justify-between gap-5 border-b border-border/70 py-3">
              <dt className="text-muted-foreground">Supplier records linked</dt>
              <dd className="font-medium">{suppliers.length}</dd>
            </div>
            <div className="flex justify-between gap-5 pt-3">
              <dt className="text-muted-foreground">Evidence status</dt>
              <dd className="text-right font-medium">Rechecked per RFQ</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="border-b border-border/80 bg-muted/20">
        <div className="mx-auto grid max-w-7xl gap-3 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {[
            ["Materials", product.materials],
            ["Processes", product.manufacturingProcesses],
            ["Applications", product.applications],
            ["Standards", product.standards],
          ].map(([label, values]) => (
            <div key={label as string} className="rounded-xl border border-border/70 bg-background p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                {label as string}
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {(values as string[]).slice(0, 4).map((value) => (
                  <Badge key={value} variant="secondary">{value}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-border/80">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Related product families
          </div>
          <h2 className="mt-2 text-2xl font-semibold">
            Compare adjacent specifications before sending the RFQ
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.slug}
                href={`/products/${relatedProduct.slug}` as never}
                className="group overflow-hidden rounded-xl border border-border/70 bg-background transition-colors hover:border-[#123f8c]/50"
              >
                <div className="relative aspect-[8/5] bg-muted">
                  <Image
                    src={relatedProduct.imageUrl}
                    alt={relatedProduct.imageAlt ?? relatedProduct.nameEn}
                    fill
                    sizes="(max-width: 767px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between gap-4 p-4">
                  <div>
                    <div className="font-semibold">{relatedProduct.shortName ?? relatedProduct.nameEn}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{relatedProduct.category}</div>
                  </div>
                  <ArrowRight size={15} className="shrink-0 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/80">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_360px]">
          <div className="min-w-0">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Product structure
            </div>
            <h2 className="mt-2 text-2xl font-semibold">Specifications buyers and suppliers share</h2>
            <div className="mt-7 overflow-hidden rounded-xl border border-border/70">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[680px] text-left text-[13px]">
                  <thead className="border-b border-border/70 bg-muted/30 text-[10px] uppercase tracking-wider text-muted-foreground">
                    <tr><th className="px-5 py-3">Field</th><th className="px-5 py-3">Typical range</th><th className="px-5 py-3">Sourcing note</th></tr>
                  </thead>
                  <tbody>
                    {product.specifications.map((specification) => (
                      <tr key={specification.field} className="border-b border-border/50 last:border-0">
                        <th className="px-5 py-4 font-medium">{specification.field}</th>
                        <td className="px-5 py-4">{specification.typicalRange}</td>
                        <td className="px-5 py-4 text-muted-foreground">{specification.sourcingNote}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-10 space-y-4 text-[15px] leading-7 text-muted-foreground">
              {searchIntent?.selectionParagraph && <p>{searchIntent.selectionParagraph}</p>}
              {product.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
          <aside className="h-fit rounded-xl border border-border/70 bg-muted/20 p-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Buying checks
            </div>
            <ul className="mt-5 space-y-4">
              {product.buyingChecks.map((check) => (
                <li key={check} className="flex gap-3 text-[13px] leading-6 text-muted-foreground">
                  <CheckCircle2 size={16} className="mt-1 shrink-0 text-[#123f8c]" />
                  <span>{check}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section id="suppliers" className="scroll-mt-20 border-b border-border/80 bg-muted/15">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="max-w-3xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Supplier relationships
            </div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              Suppliers connected to {product.shortName ?? product.nameEn}
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Every row is an explicit supplier-product relationship. Verification
              applies to the recorded capability and evidence state, not a blanket
              certification of every specification.
            </p>
          </div>
          <form method="get" className="mt-6 flex flex-wrap gap-2 text-xs">
            {[['verified', 'Factory verified'], ['export', 'Export ready'], ['moq', 'MOQ declared'], ['iso', 'ISO 9001']].map(([name, label]) => (
              <label key={name} className="flex items-center gap-2 rounded-md border bg-background px-3 py-2"><input type="checkbox" name={name} value="1" defaultChecked={sp[name] === "1"} />{label}</label>
            ))}
            <button className="rounded-md bg-foreground px-3 py-2 text-background">Apply filters</button>
          </form>
          {suppliers.length > 0 ? (
            <div className="mt-8">
              <SuppliersClient
                suppliers={suppliers}
                categories={directoryCategories}
                provinces={[]}
              />
            </div>
          ) : (
            <div className="mt-8 rounded-xl border border-dashed border-border p-10 text-center">
              <Factory className="mx-auto text-muted-foreground" />
              <h3 className="mt-4 font-semibold">Supplier relationships are being reviewed.</h3>
              <p className="mt-2 text-sm text-muted-foreground">Submit an RFQ and the sourcing desk will verify a shortlist.</p>
            </div>
          )}
        </div>
      </section>

      <section className="border-b border-border/80 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Buyer research
          </div>
          <h2 className="mt-2 text-2xl font-semibold">Validate the material, supplier and landed cost</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["FRP vs steel", "/compare/frp-vs-steel"],
              ["FRP material properties", "/technical/frp-properties"],
              ["Supplier quality inspection", "/guides/frp-quality-inspection"],
              ["F1 Composites engineering tools", "/tools"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href as never}
                className="group flex items-center justify-between rounded-xl border border-border/70 bg-background px-4 py-4 text-sm font-medium transition-colors hover:border-[#123f8c]/50"
              >
                {label}<ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Buyer FAQ</div>
        <FaqGrid items={product.faqs} className="mt-6" />
      </section>
    </main>
  );
}
