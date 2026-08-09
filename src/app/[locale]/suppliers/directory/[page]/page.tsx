import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { JsonLd } from "@/components/json-ld";
import { alternates, og } from "@/lib/seo";
import { CURRENT_SITE_URL } from "@/lib/sites";
import {
  getSupplierDirectoryCount,
  getSupplierDirectoryPage,
  SUPPLIER_DIRECTORY_PAGE_SIZE,
  supplierDirectoryPageCount,
  supplierDirectoryPath,
} from "@/lib/supplier-directory";

export const revalidate = 3600;
export const dynamicParams = true;

function parsePage(value: string): number | null {
  if (!/^\d+$/.test(value)) return null;
  const page = Number(value);
  return Number.isSafeInteger(page) && page > 0 ? page : null;
}

export async function generateStaticParams() {
  const total = await getSupplierDirectoryCount();
  return Array.from(
    { length: supplierDirectoryPageCount(total) },
    (_, index) => ({ page: String(index + 1) }),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; page: string }>;
}): Promise<Metadata> {
  const { page: rawPage } = await params;
  const page = parsePage(rawPage);
  if (!page) return { robots: { index: false, follow: false } };
  const directory = await getSupplierDirectoryPage(page);
  if (page > directory.pageCount || directory.items.length === 0) {
    return { robots: { index: false, follow: false } };
  }
  const path = supplierDirectoryPath(page);
  const title = `China FRP Supplier Directory — Page ${page} | getfrp`;
  const description = `Browse page ${page} of the GetFRP China supplier directory. Compare public FRP company profiles by product capability, location and sourcing evidence.`;
  return {
    title: { absolute: title },
    description,
    alternates: alternates(path),
    openGraph: og(path, { title, description }),
    robots: page === 1
      ? { index: true, follow: true }
      : { index: false, follow: true },
  };
}

export default async function SupplierDirectoryPage({
  params,
}: {
  params: Promise<{ locale: string; page: string }>;
}) {
  const { locale, page: rawPage } = await params;
  setRequestLocale(locale);
  if (locale !== "en") notFound();
  const page = parsePage(rawPage);
  if (!page) notFound();

  const directory = await getSupplierDirectoryPage(page);
  if (page > directory.pageCount || directory.items.length === 0) notFound();

  const path = supplierDirectoryPath(page);
  const pageUrl = `${CURRENT_SITE_URL}${path}`;
  const startPosition = (page - 1) * SUPPLIER_DIRECTORY_PAGE_SIZE;
  const pageNumbers = Array.from(
    { length: directory.pageCount },
    (_, index) => index + 1,
  );

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "@id": `${pageUrl}#directory`,
          name: `China FRP Supplier Directory — Page ${page}`,
          url: pageUrl,
          numberOfItems: directory.total,
          itemListElement: directory.items.map((supplier, index) => ({
            "@type": "ListItem",
            position: startPosition + index + 1,
            url: `${CURRENT_SITE_URL}/suppliers/${supplier.slug}`,
            name: supplier.name,
          })),
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${CURRENT_SITE_URL}/` },
          { name: "Suppliers", url: `${CURRENT_SITE_URL}/suppliers` },
          { name: `Directory page ${page}`, url: pageUrl },
        ]}
      />

      <header className="max-w-3xl">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#123f8c]">
          Crawlable supplier index
        </div>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
          China FRP Supplier Directory
        </h1>
        <p className="mt-5 text-[16px] leading-7 text-muted-foreground">
          Page {page} of {directory.pageCount} · {directory.total.toLocaleString()} public company profiles.
          Open a profile to review products, process capability, location and available sourcing evidence.
        </p>
      </header>

      <section className="mt-10" aria-labelledby="supplier-directory-results">
        <h2 id="supplier-directory-results" className="sr-only">
          Supplier directory results
        </h2>
        <div className="hidden grid-cols-[minmax(0,1.15fr)_minmax(0,1.85fr)_8.5rem] rounded-t-xl border-x border-t border-border/70 bg-muted/30 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground lg:grid">
          <span>Supplier</span>
          <span>Profile summary</span>
          <span className="text-right">Profile</span>
        </div>
        <ol
          start={startPosition + 1}
          className="divide-y divide-border/70 overflow-hidden rounded-xl border border-border/70 bg-background lg:rounded-t-none"
        >
          {directory.items.map((supplier, index) => (
            <li key={supplier.slug} value={startPosition + index + 1}>
              <Link
                href={`/suppliers/${supplier.slug}` as never}
                className="group grid min-h-32 gap-4 px-5 py-5 transition-colors hover:bg-muted/35 focus-visible:bg-muted/35 focus-visible:outline-none lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1.85fr)_8.5rem] lg:items-center"
              >
                <div className="min-w-0">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-7 min-w-7 shrink-0 items-center justify-center rounded-full bg-[#123f8c]/8 px-2 font-mono text-[10px] font-semibold text-[#123f8c]">
                      {startPosition + index + 1}
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-semibold leading-6 text-foreground transition-colors group-hover:text-[#123f8c]">
                        {supplier.name}
                      </h3>
                      <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                        {supplier.location ? <span>{supplier.location}</span> : null}
                        {supplier.category ? <span>{supplier.category}</span> : null}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="line-clamp-3 text-sm leading-6 text-muted-foreground lg:line-clamp-2">
                  {supplier.description?.trim() ||
                    "Public China FRP supplier record. Confirm product scope and evidence through a controlled RFQ."}
                </p>

                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#123f8c] lg:justify-end">
                  View profile
                  <ArrowRight
                    size={13}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <nav className="mt-12 border-t border-border/70 pt-8" aria-label="Supplier directory pagination">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {page > 1 ? (
            <Link href={supplierDirectoryPath(page - 1) as never} className="inline-flex items-center gap-2 text-sm hover:underline">
              <ArrowLeft size={14} /> Previous page
            </Link>
          ) : <span />}
          {page < directory.pageCount ? (
            <Link href={supplierDirectoryPath(page + 1) as never} className="inline-flex items-center gap-2 text-sm hover:underline">
              Next page <ArrowRight size={14} />
            </Link>
          ) : null}
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {pageNumbers.map((pageNumber) => (
            <Link
              key={pageNumber}
              href={supplierDirectoryPath(pageNumber) as never}
              aria-current={pageNumber === page ? "page" : undefined}
              className={`inline-flex h-9 min-w-9 items-center justify-center rounded-md border px-3 text-sm ${
                pageNumber === page
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-background hover:border-foreground/50"
              }`}
            >
              {pageNumber}
            </Link>
          ))}
        </div>
      </nav>
    </main>
  );
}
