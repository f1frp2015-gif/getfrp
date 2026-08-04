import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { buttonVariants } from "@/components/ui/button";
import { supplierCategories } from "@/lib/data/suppliers";
import { alternates } from "@/lib/seo";
import { CURRENT_SITE_URL } from "@/lib/sites";
import { getPublicSupplierDirectory } from "@/lib/public-supplier-directory";
import { SUPPLIER_RESULTS_PAGE_SIZE } from "@/lib/supplier-directory-config";
import { SuppliersClient } from "../suppliers-client";

export const revalidate = 3600;

const SUPPLIER_PROVINCES_EN = [
  "Jiangsu",
  "Zhejiang",
  "Shandong",
  "Hebei",
  "Guangdong",
  "Sichuan",
  "Hubei",
  "Anhui",
  "Henan",
  "Shanghai",
  "Chongqing",
];

function firstParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] ?? "" : value ?? "";
}

function positiveInteger(value: string) {
  if (!/^\d+$/.test(value)) return 1;
  const parsed = Number(value);
  return Number.isSafeInteger(parsed) && parsed > 0 ? parsed : 1;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  await params;
  return {
    title: {
      absolute: "Search China FRP Manufacturers & Suppliers | getfrp",
    },
    description:
      "Search and compare China FRP suppliers by product, fiber, resin, manufacturing process, region, certification and profile status.",
    alternates: alternates("/suppliers/search"),
    robots: { index: false, follow: true },
  };
}

export default async function SupplierSearchPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const [{ locale }, sp] = await Promise.all([params, searchParams]);
  setRequestLocale(locale);

  const suppliers = await getPublicSupplierDirectory(locale);
  const initialSearch = firstParam(sp.q).slice(0, 200);
  const initialCategory = firstParam(sp.category).slice(0, 100);
  const initialRegion = firstParam(sp.region).slice(0, 100);
  const initialCertification = firstParam(sp.certification).slice(0, 100);
  const initialProfileStatus = firstParam(sp.profile).slice(0, 100);
  const initialCapability = firstParam(sp.capability).slice(0, 100);
  const directoryPageCount = Math.max(
    1,
    Math.ceil(suppliers.length / SUPPLIER_RESULTS_PAGE_SIZE),
  );
  const initialPage = Math.min(
    positiveInteger(firstParam(sp.page)),
    directoryPageCount,
  );
  const clientKey = [
    initialSearch,
    initialCategory,
    initialRegion,
    initialCertification,
    initialProfileStatus,
    initialCapability,
    initialPage,
  ].join("|");

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${CURRENT_SITE_URL}/` },
          { name: "Suppliers", url: `${CURRENT_SITE_URL}/suppliers` },
          {
            name: "Supplier search",
            url: `${CURRENT_SITE_URL}/suppliers/search`,
          },
        ]}
      />

      <section id="supplier-results" className="scroll-mt-24">
        <SuppliersClient
          key={clientKey}
          suppliers={suppliers}
          initialSearch={initialSearch}
          initialCategory={initialCategory}
          initialRegion={initialRegion}
          initialCertification={initialCertification}
          initialProfileStatus={initialProfileStatus}
          initialCapability={initialCapability}
          initialPage={initialPage}
          categories={supplierCategories.map((category) => ({
            id: category.id,
            name: category.nameEn,
          }))}
          provinces={SUPPLIER_PROVINCES_EN}
          layout="sidebar"
        />
      </section>

      <section className="mt-8 flex flex-col gap-4 rounded-xl border bg-muted/30 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold">Need a supplier shortlist?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Send one controlled specification and let GetFRP coordinate
            capability checks and quotations.
          </p>
        </div>
        <Link
          href={"/rfq" as never}
          className={buttonVariants({ size: "lg" })}
        >
          Submit an RFQ <ArrowRight />
        </Link>
      </section>
    </main>
  );
}
