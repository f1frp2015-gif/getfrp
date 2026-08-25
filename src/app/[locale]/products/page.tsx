import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Boxes,
  Factory,
  Layers3,
  Route,
  Search,
  ShieldCheck,
} from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/badge";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { JsonLd } from "@/components/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { alternates, og } from "@/lib/seo";
import { CURRENT_SITE_URL } from "@/lib/sites";
import { loadPublishedProducts } from "@/lib/products/queries";
import {
  PRIMARY_BUYER_PATHS,
  PROCESS_SEARCH_CLUSTERS,
  PRODUCT_SEARCH_CATEGORIES,
  SEARCH_CATALOG_DESTINATION_COUNT,
} from "@/lib/data/search-demand-catalog";

export const revalidate = 3600;

const title = "Composite Products from China | FRP Materials & Suppliers";
const description =
  "Source composite materials and FRP products from China across 13 buyer categories, with product specifications, manufacturing routes and reviewed supplier evidence.";

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
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const products = await loadPublishedProducts();
  const supplierRelationships = products.reduce(
    (total, product) => total + product.supplierCount,
    0,
  );
  const pageUrl = `${CURRENT_SITE_URL}/products`;
  const destinations = Array.from(
    new Map(
      PRODUCT_SEARCH_CATEGORIES.flatMap((category) => category.destinations)
        .map((destination) => [destination.href, destination]),
    ).values(),
  );

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
          dateModified: "2026-08-25",
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: destinations.length,
            itemListElement: destinations.map((destination, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: destination.label,
              url: `${CURRENT_SITE_URL}${destination.href}`,
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

      <section className="fiber-surface-dark border-b border-border/80 text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_390px] lg:items-end">
            <div className="max-w-4xl">
              <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7be4e1]">
                China composites sourcing map
              </div>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
                Composite products from China, organized around buyer intent.
              </h1>
              <p className="mt-5 max-w-3xl text-[15px] leading-7 text-[#d9dfe8]">
                Move from fibers and resins to profiles, corrosion systems and
                finished components. Each path separates the product buyers need,
                the process that makes it and the evidence required to approve a supplier.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#product-map" className={buttonVariants({ size: "lg" })}>
                  Explore product categories
                </a>
                <Link
                  href="/suppliers"
                  className={buttonVariants({ size: "lg", variant: "outline", className: "border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white" })}
                >
                  Find China suppliers
                </Link>
              </div>
            </div>
            <dl className="grid grid-cols-3 gap-3">
              {[
                { icon: Layers3, value: PRODUCT_SEARCH_CATEGORIES.length, label: "value-chain categories" },
                { icon: Route, value: SEARCH_CATALOG_DESTINATION_COUNT, label: "buyer landing paths" },
                { icon: Factory, value: supplierRelationships, label: "supplier links" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-white/15 bg-white/5 p-4">
                  <item.icon size={17} className="text-[#7be4e1]" />
                  <dd className="mt-3 text-2xl font-semibold">{item.value}</dd>
                  <dt className="mt-1 text-[11px] leading-4 text-[#d9dfe8]">{item.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="border-b border-border/70 bg-[#f3f6fa]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#123f8c]">
                Highest-intent paths
              </div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                Start with a product buyers already name
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                These pages own the broad product term and the China sourcing modifier on one canonical URL.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
              {PRIMARY_BUYER_PATHS.map((path) => (
                <Link
                  key={path.href}
                  href={path.href as never}
                  className="group flex min-h-48 flex-col rounded-xl border border-border/70 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-[#123f8c]/40 hover:shadow-md"
                >
                  <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#123f8c]">
                    {path.signal}
                  </div>
                  <h3 className="mt-3 font-semibold leading-5">{path.label}</h3>
                  <p className="mt-3 text-xs leading-5 text-muted-foreground">{path.note}</p>
                  <ArrowRight size={15} className="mt-auto text-[#123f8c] transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="product-map" className="scroll-mt-20 mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18">
        <div className="max-w-3xl">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Product search architecture
          </div>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Browse the full composite value chain
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            Thirteen categories cover the actual procurement chain without creating a separate low-value page for every “China” keyword combination.
          </p>
        </div>

        <nav aria-label="Product category shortcuts" className="mt-7 flex flex-wrap gap-2 border-y border-border/70 py-4">
          {PRODUCT_SEARCH_CATEGORIES.map((category, index) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="rounded-full border border-border bg-background px-3 py-2 text-xs font-medium transition-colors hover:border-[#123f8c]/40 hover:text-[#123f8c]"
            >
              {String(index + 1).padStart(2, "0")} · {category.title}
            </a>
          ))}
        </nav>

        <div className="mt-10 space-y-6">
          {PRODUCT_SEARCH_CATEGORIES.map((category, index) => (
            <section
              id={category.id}
              key={category.id}
              className="scroll-mt-24 grid gap-6 rounded-2xl border border-border/70 bg-background p-5 sm:p-7 lg:grid-cols-[270px_1fr]"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold text-[#123f8c]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Badge variant="secondary">{category.stage}</Badge>
                </div>
                <h3 className="mt-4 text-xl font-semibold">{category.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{category.summary}</p>
                <div className="mt-5 border-l-2 border-[#19c3c8] pl-3">
                  <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">RFQ focus</div>
                  <p className="mt-1 text-xs leading-5">{category.buyingFocus}</p>
                </div>
              </div>
              <div className="grid content-start gap-3 md:grid-cols-2 xl:grid-cols-3">
                {category.destinations.map((destination) => (
                  <Link
                    key={`${category.id}-${destination.href}`}
                    href={destination.href as never}
                    className="group flex min-h-44 flex-col rounded-xl border border-border/70 bg-[#f8fafc] p-4 transition-colors hover:border-[#123f8c]/40 hover:bg-white"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="font-semibold leading-5">{destination.label}</h4>
                      <Badge variant={destination.priority === "core" ? "default" : "outline"}>
                        {destination.priority}
                      </Badge>
                    </div>
                    <p className="mt-3 font-mono text-[10px] leading-5 text-[#123f8c]">
                      {destination.buyerLanguage}
                    </p>
                    <p className="mt-2 text-xs leading-5 text-muted-foreground">{destination.note}</p>
                    <ArrowRight size={14} className="mt-auto text-[#123f8c] transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="border-y border-border/70 bg-[#07111c] text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
            <div>
              <Route size={22} className="text-[#7be4e1]" />
              <h2 className="mt-4 text-2xl font-semibold">Product intent hands off to process proof</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                A product page answers “what to buy.” The manufacturing directory answers “how a factory proves it can make it.”
              </p>
              <Link href="/manufacturing" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#7be4e1]">
                Compare all manufacturing routes <ArrowRight size={15} />
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {PROCESS_SEARCH_CLUSTERS.map((cluster) => (
                <Link
                  key={cluster.id}
                  href={cluster.href as never}
                  className="rounded-xl border border-white/15 bg-white/5 p-4 transition-colors hover:border-[#7be4e1]/60 hover:bg-white/10"
                >
                  <h3 className="text-sm font-semibold">{cluster.title}</h3>
                  <p className="mt-2 font-mono text-[9px] leading-4 text-[#7be4e1]">{cluster.buyerLanguage}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18">
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="flex items-end justify-between gap-4 border-b border-border/70 pb-4">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Published product records
                </div>
                <h2 className="mt-2 text-2xl font-semibold">Products with structured supplier relationships</h2>
              </div>
              <Boxes size={20} className="text-[#123f8c]" />
            </div>

            {products.length > 0 ? (
              <div className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {products.map((product) => (
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
                          sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1279px) 50vw, 33vw"
                          className="object-cover transition duration-500 group-hover:scale-[1.025]"
                        />
                      </div>
                    )}
                    <div className="p-5">
                      <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#123f8c]">{product.category}</div>
                      <h3 className="mt-2 text-lg font-semibold">{product.nameEn}</h3>
                      <p className="mt-3 line-clamp-3 text-xs leading-5 text-muted-foreground">{product.summary}</p>
                      <div className="mt-4 text-xs font-medium text-[#123f8c]">
                        {product.supplierCount} matched supplier{product.supplierCount === 1 ? "" : "s"}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="mt-7 rounded-xl border border-dashed border-border p-12 text-center">
                <h3 className="font-semibold">No product families are currently published.</h3>
              </div>
            )}
          </div>

          <aside className="h-fit rounded-2xl border border-[#123f8c]/15 bg-[#f3f6fa] p-6">
            <ShieldCheck size={20} className="text-[#123f8c]" />
            <h2 className="mt-4 text-xl font-semibold">Search the evidence, not only the label</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Supplier selection should verify the offered product, process controls, standards, test records and export readiness for the exact RFQ.
            </p>
            <form action="/suppliers/search" method="get" className="mt-6">
              <label className="flex min-h-12 items-center gap-3 rounded-lg border border-border bg-white px-4 focus-within:border-[#19c3c8]">
                <Search size={17} className="text-muted-foreground" />
                <span className="sr-only">Search products and suppliers</span>
                <input
                  type="search"
                  name="q"
                  placeholder="Product, process or standard"
                  className="min-w-0 flex-1 bg-transparent text-sm outline-none"
                />
              </label>
              <button type="submit" className="mt-3 min-h-11 w-full rounded-lg bg-[#123f8c] px-5 text-sm font-semibold text-white hover:bg-[#0a1f44]">
                Search suppliers
              </button>
            </form>
          </aside>
        </div>
      </section>
    </main>
  );
}
