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

export const revalidate = 3600;
export const dynamicParams = true;

const SOURCING_GUIDE_BY_PRODUCT: Record<string, string> = {
  "frp-grating": "/sourcing/frp-grating",
  "frp-rebar": "/sourcing/frp-rebar",
  "pultruded-profiles": "/sourcing/pultruded-profiles",
  "frp-pipe": "/sourcing/frp-piping",
};

export function generateStaticParams() {
  return PRODUCT_SEED_RECORDS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await loadProductBySlug(slug);
  if (!product) return { robots: { index: false, follow: false } };
  const title = `${product.nameEn} Manufacturers & Suppliers in China | getfrp`;
  return {
    title: { absolute: title },
    description: product.summary,
    alternates: alternates(`/products/${product.slug}`),
    openGraph: og(`/products/${product.slug}`, {
      title,
      description: product.summary,
    }),
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const product = await loadProductBySlug(slug);
  if (!product) notFound();
  const suppliers = await loadSuppliersForProduct(product);
  const pageUrl = `${CURRENT_SITE_URL}/products/${product.slug}`;
  const sourcingGuideHref = SOURCING_GUIDE_BY_PRODUCT[product.slug];
  const directoryCategories = supplierCategories
    .filter((category) => suppliers.some((supplier) => supplier.category === category.id))
    .map((category) => ({ id: category.id, name: category.nameEn }));

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          "@id": `${pageUrl}#product`,
          url: pageUrl,
          name: product.nameEn,
          description: product.summary,
          category: product.category,
          image: product.imageUrl ? `${CURRENT_SITE_URL}${product.imageUrl}` : undefined,
          material: product.materials,
          additionalProperty: [
            ...product.manufacturingProcesses.map((value) => ({
              "@type": "PropertyValue",
              name: "Manufacturing process",
              value,
            })),
            ...product.standards.map((value) => ({
              "@type": "PropertyValue",
              name: "Relevant standard",
              value,
            })),
          ],
          manufacturer: suppliers.map((supplier) => ({
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
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#0a756f]">
                {product.category}
              </div>
              <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
                {product.nameEn}
              </h1>
              <p className="mt-5 max-w-3xl text-[16px] leading-7 text-muted-foreground">
                {product.summary}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href={`/rfq?product=${encodeURIComponent(product.slug)}` as never}
                  className={buttonVariants({ size: "lg" })}
                >
                  Request matched suppliers <ArrowRight size={15} />
                </Link>
                <a href="#suppliers" className={buttonVariants({ size: "lg", variant: "outline" })}>
                  Compare {suppliers.length} suppliers
                </a>
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
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_360px]">
          <div>
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
                  <CheckCircle2 size={16} className="mt-1 shrink-0 text-[#0a756f]" />
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
              ["FRP landed cost estimator", "/tools/frp-cost-estimator"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href as never}
                className="group flex items-center justify-between rounded-xl border border-border/70 bg-background px-4 py-4 text-sm font-medium transition-colors hover:border-[#0a756f]/50"
              >
                {label}<ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Buyer FAQ</div>
        <div className="mt-6 divide-y divide-border/70 border-y border-border/70">
          {product.faqs.map((faq) => (
            <article key={faq.question} className="py-6">
              <h2 className="font-semibold">{faq.question}</h2>
              <p className="mt-2 text-[14px] leading-7 text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
