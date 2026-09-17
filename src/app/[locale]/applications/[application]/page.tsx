import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { MarketplaceAggregationPage } from "@/components/marketplace/aggregation-page";
import { IndustryApplicationContent } from "@/components/marketplace/industry-application-content";
import { getIndustryApplicationPage } from "@/lib/data/industry-application-pages";
import { APPLICATION_PAGES, findPage } from "@/lib/data/seo-marketplace-pages";
import { getPublicSupplierDirectory } from "@/lib/public-supplier-directory";
import { alternates, og } from "@/lib/seo";

export const revalidate = 3600;

export function generateStaticParams() {
  return APPLICATION_PAGES.map(({ slug }) => ({ application: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ application: string }>;
}): Promise<Metadata> {
  const { application } = await params;
  const page = findPage(APPLICATION_PAGES, application);
  if (!page) return { robots: { index: false, follow: true } };
  return {
    title: { absolute: page.title },
    description: page.summary,
    alternates: alternates(page.path),
    openGraph: og(page.path, { title: page.title, description: page.summary }),
  };
}

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ");
}

export default async function ApplicationPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string; application: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const [{ locale, application }, sp] = await Promise.all([params, searchParams]);
  setRequestLocale(locale);
  const page = findPage(APPLICATION_PAGES, application);
  if (!page) notFound();

  const industryData = getIndustryApplicationPage(application);
  if (industryData) {
    const allSuppliers = await getPublicSupplierDirectory("en");
    const terms = industryData.supplierTerms.map(normalize);
    const matched = allSuppliers.filter((supplier) => {
      const haystack = normalize(
        [
          supplier.name,
          supplier.description,
          ...supplier.products,
          ...supplier.processList,
          ...supplier.capabilities,
          ...supplier.standardsSupported,
        ].join(" "),
      );
      if (!terms.some((term) => haystack.includes(term))) return false;
      if (sp.verified === "1" && !supplier.verified) return false;
      if (sp.export === "1" && !supplier.exportReady) return false;
      if (sp.iso === "1" && !supplier.certifications.some((cert) => /iso\s*9001/i.test(cert))) return false;
      if (sp.moq === "1" && supplier.moqKg == null) return false;
      return true;
    });

    return (
      <IndustryApplicationContent
        data={industryData}
        page={page}
        suppliers={matched}
        filters={{
          verified: sp.verified === "1",
          exportReady: sp.export === "1",
          iso: sp.iso === "1",
          moq: sp.moq === "1",
        }}
      />
    );
  }

  return (
    <MarketplaceAggregationPage
      page={page}
      filters={{
        verified: sp.verified === "1",
        exportReady: sp.export === "1",
        iso: sp.iso === "1",
        moq: sp.moq === "1",
      }}
    />
  );
}
