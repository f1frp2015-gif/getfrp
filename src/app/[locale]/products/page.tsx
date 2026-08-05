import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Boxes, Factory, Search } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/badge";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { JsonLd } from "@/components/json-ld";
import { alternates, og } from "@/lib/seo";
import { CURRENT_SITE_URL } from "@/lib/sites";
import { loadPublishedProducts } from "@/lib/products/queries";

export const revalidate = 3600;

const title = "FRP Products from China | Product & Supplier Catalog | getfrp";
const description =
  "Explore structured FRP product families with materials, processes, specifications, standards and direct links to matched Chinese manufacturers and suppliers.";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: { absolute: title },
    description,
    alternates: alternates("/products"),
    openGraph: og("/products", { title, description }),
  };
}

export default async function ProductsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const [{ locale }, query] = await Promise.all([params, searchParams]);
  setRequestLocale(locale);
  const rawQuery = Array.isArray(query.q) ? query.q[0] : query.q;
  const search = (rawQuery ?? "").trim().toLowerCase().slice(0, 120);
  const products = await loadPublishedProducts();
  const filtered = search
    ? products.filter((product) =>
        [
          product.nameEn,
          product.category,
          product.summary,
          ...product.materials,
          ...product.manufacturingProcesses,
          ...product.applications,
          ...product.standards,
          ...product.searchTerms,
        ]
          .join(" ")
          .toLowerCase()
          .includes(search),
      )
    : products;
  const supplierRelationships = products.reduce(
    (total, product) => total + product.supplierCount,
    0,
  );
  const pageUrl = `${CURRENT_SITE_URL}/products`;

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": `${pageUrl}#collection`,
          url: pageUrl,
          name: title,
          description,
          inLanguage: "en",
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: products.length,
            itemListElement: products.map((product, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Product",
                "@id": `${pageUrl}/${product.slug}#product`,
                name: product.nameEn,
                description: product.summary,
                category: product.category,
                image: product.imageUrl
                  ? `${CURRENT_SITE_URL}${product.imageUrl}`
                  : undefined,
                url: `${pageUrl}/${product.slug}`,
              },
            })),
          },
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${CURRENT_SITE_URL}/` },
          { name: "Products", url: pageUrl },
        ]}
      />

      <section className="border-b border-border/80 bg-[#0a1f44] text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="max-w-3xl">
            <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7be4e1]">
              Structured product database
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
              FRP products from China, connected to qualified suppliers.
            </h1>
            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#d9dfe8]">
              Compare product materials, manufacturing routes, applications,
              standards and buying checks—then open the matched supplier network
              behind each category.
            </p>
          </div>
          <div className="mt-9 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-white/15 bg-white/5 p-4">
              <Boxes size={17} className="text-[#7be4e1]" />
              <div className="mt-3 text-2xl font-semibold">{products.length}</div>
              <div className="mt-1 text-xs text-[#d9dfe8]">Structured product families</div>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 p-4">
              <Factory size={17} className="text-[#7be4e1]" />
              <div className="mt-3 text-2xl font-semibold">{supplierRelationships}</div>
              <div className="mt-1 text-xs text-[#d9dfe8]">Supplier relationships</div>
            </div>
            <div className="col-span-2 rounded-xl border border-white/15 bg-white/5 p-4 sm:col-span-1">
              <Search size={17} className="text-[#7be4e1]" />
              <div className="mt-3 text-2xl font-semibold">2-way</div>
              <div className="mt-1 text-xs text-[#d9dfe8]">Product ↔ supplier navigation</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <form action="/products" method="get" className="flex max-w-2xl flex-col gap-2 sm:flex-row">
          <label className="flex min-h-12 flex-1 items-center gap-3 rounded-lg border border-border bg-background px-4 focus-within:border-[#19c3c8]">
            <Search size={18} className="text-muted-foreground" />
            <span className="sr-only">Search products</span>
            <input
              type="search"
              name="q"
              defaultValue={rawQuery ?? ""}
              placeholder="Search FRP products or specifications"
              className="min-w-0 flex-1 bg-transparent text-sm outline-none"
            />
          </label>
          <button
            type="submit"
            className="min-h-12 rounded-lg bg-[#123f8c] px-5 text-sm font-semibold text-white hover:bg-[#0a1f44]"
          >
            Search
          </button>
        </form>

        <div className="mt-8 flex items-end justify-between gap-4 border-b border-border/70 pb-4">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Product catalog
            </div>
            <h2 className="mt-2 text-2xl font-semibold">
              {search ? `${filtered.length} matching products` : "Browse all product families"}
            </h2>
          </div>
          {search && (
            <Link href="/products" className="text-sm font-medium text-[#123f8c] hover:underline">
              Clear search
            </Link>
          )}
        </div>

        {filtered.length > 0 ? (
          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}` as never}
                className="group overflow-hidden rounded-xl border border-border/70 bg-background transition-all hover:-translate-y-0.5 hover:border-[#7be4e1] hover:shadow-lg"
              >
                {product.imageUrl && (
                  <div className="relative aspect-[8/5] overflow-hidden bg-muted">
                    <Image
                      src={product.imageUrl}
                      alt={product.imageAlt ?? product.nameEn}
                      fill
                      sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.025]"
                    />
                  </div>
                )}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#123f8c]">
                        {product.category}
                      </div>
                      <h3 className="mt-2 text-xl font-semibold tracking-tight">
                        {product.nameEn}
                      </h3>
                    </div>
                    <ArrowRight size={16} className="mt-1 shrink-0 transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="mt-3 line-clamp-3 text-[13px] leading-6 text-muted-foreground">
                    {product.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {product.manufacturingProcesses.slice(0, 2).map((process) => (
                      <Badge key={process} variant="secondary">{process}</Badge>
                    ))}
                  </div>
                  <div className="mt-5 border-t border-border/70 pt-4 text-xs font-medium text-[#123f8c]">
                    {product.supplierCount} matched supplier{product.supplierCount === 1 ? "" : "s"}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-7 rounded-xl border border-dashed border-border p-12 text-center">
            <h3 className="font-semibold">No product family matches this search.</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Try a material, process, standard or application term.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
