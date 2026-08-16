import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { setRequestLocale } from "next-intl/server";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { JsonLd } from "@/components/json-ld";
import { SupplierList } from "@/components/supplier-list";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { loadApprovedSupplierProduct } from "@/lib/products/ugc-queries";
import { alternates, og } from "@/lib/seo";
import { CURRENT_SITE_URL } from "@/lib/sites";

export const revalidate = 3600;

type Props = { params: Promise<{ locale: string; id: string; productSlug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id, productSlug } = await params;
  const product = await loadApprovedSupplierProduct(id, productSlug);
  if (!product) return { robots: { index: false, follow: true } };
  const path = `/suppliers/${product.supplier.slug}/${product.slug}`;
  const description = product.description.slice(0, 160);
  return {
    title: { absolute: `${product.name} | ${product.supplier.name} | getfrp` },
    description,
    alternates: alternates(path),
    openGraph: og(path, { title: product.name, description }),
    robots: { index: true, follow: true },
  };
}

export default async function SupplierProductPage({ params }: Props) {
  const { locale, id, productSlug } = await params;
  setRequestLocale(locale);
  const product = await loadApprovedSupplierProduct(id, productSlug);
  if (!product) notFound();
  const path = `/suppliers/${product.supplier.slug}/${product.slug}`;
  const pageUrl = `${CURRENT_SITE_URL}${path}`;
  const offer = product.priceRange || product.moq
    ? {
        "@type": "Offer",
        url: pageUrl,
        availability: "https://schema.org/InStock",
        seller: { "@id": `${CURRENT_SITE_URL}/suppliers/${product.supplier.slug}#organization` },
        description: [
          product.priceRange ? `Indicative price: ${product.priceRange}` : null,
          product.moq ? `MOQ: ${product.moq} ${product.moqUnit ?? "units"}` : null,
        ].filter(Boolean).join("; "),
      }
    : undefined;

  return (
    <main>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": `${pageUrl}#product`,
        name: product.name,
        description: product.description,
        image: product.images,
        category: product.category.name,
        material: product.material,
        brand: { "@type": "Brand", name: product.supplier.name },
        manufacturer: { "@id": `${CURRENT_SITE_URL}/suppliers/${product.supplier.slug}#organization` },
        additionalProperty: Object.entries(product.parameters).map(([name, value]) => ({ "@type": "PropertyValue", name, value })),
        offers: offer,
      }} />
      <BreadcrumbJsonLd items={[
        { name: "Home", url: `${CURRENT_SITE_URL}/` },
        { name: "Products", url: `${CURRENT_SITE_URL}/products` },
        { name: product.category.name, url: `${CURRENT_SITE_URL}/products/${product.category.slug}` },
        { name: product.supplier.name, url: `${CURRENT_SITE_URL}/suppliers/${product.supplier.slug}` },
        { name: product.name, url: pageUrl },
      ]} />

      <section className="border-b border-border/80">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
          <nav className="text-xs text-muted-foreground" aria-label="Breadcrumb"><Link href="/">Home</Link><span className="mx-2">›</span><Link href="/products">Products</Link><span className="mx-2">›</span><Link href={`/products/${product.category.slug}` as never}>{product.category.name}</Link><span className="mx-2">›</span><Link href={`/suppliers/${product.supplier.slug}` as never}>{product.supplier.name}</Link><span className="mx-2">›</span><span>{product.name}</span></nav>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_.95fr]">
            <div className="grid gap-3 sm:grid-cols-2">
              {product.images.map((src, index) => <div key={src} className={`relative overflow-hidden rounded-xl border bg-muted ${index === 0 ? "aspect-[4/3] sm:col-span-2" : "aspect-[4/3]"}`}><Image src={src} alt={`${product.name} product image ${index + 1}`} fill priority={index === 0} sizes="(max-width: 1023px) 100vw, 620px" className="object-cover" /></div>)}
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">APPROVED SUPPLIER PRODUCT</div>
              <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{product.name}</h1>
              <p className="mt-5 text-[15px] leading-7 text-muted-foreground">{product.description}</p>
              <dl className="mt-7 divide-y rounded-xl border">
                <Row label="Material" value={product.material} />
                <Row label="Manufacturing process" value={product.manufacturingProcesses.join(", ")} />
                <Row label="MOQ" value={product.moq ? `${product.moq} ${product.moqUnit ?? "units"}` : "Confirm with supplier"} />
                <Row label="Export markets" value={product.exportMarkets.join(", ")} />
                {product.priceRange ? <Row label="Price range" value={product.priceRange} /> : null}
              </dl>
              <Link href={`/rfq?product=${encodeURIComponent(product.name)}&supplier=${encodeURIComponent(product.supplier.name)}` as never} className={`${buttonVariants({ size: "lg" })} mt-7`}>Request a quote <ArrowRight size={15} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/80 bg-muted/15"><div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2"><div><h2 className="text-2xl font-semibold">Product specifications</h2><div className="mt-5 overflow-hidden rounded-xl border bg-background"><table className="w-full text-left text-sm"><tbody>{Object.entries(product.parameters).map(([key, value]) => <tr key={key} className="border-b last:border-0"><th className="w-2/5 px-4 py-3 font-medium">{key}</th><td className="px-4 py-3 text-muted-foreground">{value}</td></tr>)}</tbody></table></div></div><div><h2 className="text-2xl font-semibold">Compliance and supply scope</h2><dl className="mt-5 divide-y rounded-xl border bg-background"><Row label="Standards" value={product.standards.join(", ") || "Not declared"} /><Row label="Certifications" value={product.certifications.join(", ") || "Not declared"} /><Row label="Applications" value={product.applications.join(", ") || "General industrial use"} /></dl><p className="mt-4 text-xs leading-5 text-muted-foreground">Approval confirms that the submitted page passed GetFRP content review. Buyers must still verify current certificate scope, product grade and project-specific test evidence before purchase.</p></div></div></section>

      <section className="border-b border-border/80"><div className="mx-auto max-w-6xl px-4 py-14 sm:px-6"><h2 className="text-xl font-semibold">Supplier profile</h2><SupplierList suppliers={[{ id: product.supplier.id, slug: product.supplier.slug, name: product.supplier.name, location: product.supplier.location, description: `Approved product listing for ${product.name}. Review the company profile for current factory scope and order-specific evidence.`, certifications: product.supplier.certifications, verified: product.supplier.verified, profilePublished: true }]} className="mt-5" /></div></section>

      <section className="border-b border-border/80 bg-muted/15"><div className="mx-auto max-w-6xl px-4 py-12 sm:px-6"><h2 className="text-xl font-semibold">Related products and suppliers</h2><div className="mt-5 flex flex-wrap gap-2"><Link href={`/products/${product.category.slug}` as never} className="rounded-full border bg-background px-4 py-2 text-sm">{product.category.name} products</Link><Link href={`/suppliers/${product.supplier.slug}` as never} className="rounded-full border bg-background px-4 py-2 text-sm">{product.category.name} supplier — {product.supplier.name}</Link><Link href="/suppliers" className="rounded-full border bg-background px-4 py-2 text-sm">All China FRP suppliers</Link><Link href="/products" className="rounded-full border bg-background px-4 py-2 text-sm">All FRP product categories</Link></div></div></section>

      <section className="bg-foreground py-14 text-background"><div className="mx-auto max-w-3xl px-4 text-center sm:px-6"><h2 className="text-3xl font-semibold">Compare this product with matching China suppliers</h2><p className="mt-4 text-sm text-background/75">Send drawings, standards, quantity and destination in one RFQ. GetFRP keeps the comparison tied to the same specification.</p><div className="mt-7 flex flex-wrap justify-center gap-3"><Link href="/rfq" className={buttonVariants({ size: "lg", variant: "secondary" })}>Submit RFQ</Link><Link href={`/products/${product.category.slug}` as never} className="inline-flex items-center rounded-md border border-background/30 px-5 py-2.5 text-sm">Back to {product.category.name}</Link></div></div></section>
    </main>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return <div className="grid grid-cols-[140px_1fr] gap-4 px-4 py-3 text-sm"><dt className="font-medium">{label}</dt><dd className="text-muted-foreground">{value}</dd></div>;
}
