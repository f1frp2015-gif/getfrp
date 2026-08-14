import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { MarketplaceAggregationPage } from "@/components/marketplace/aggregation-page";
import { COMBINATION_PAGES } from "@/lib/data/seo-marketplace-pages";
import { alternates, og } from "@/lib/seo";

export const revalidate = 3600;
function getPage(application: string, product: string) { return COMBINATION_PAGES.find((page) => page.path === `/applications/${application}/${product}`) ?? null; }
export function generateStaticParams() { return COMBINATION_PAGES.filter((page) => page.path.startsWith("/applications/")).map((page) => { const [, , application, product] = page.path.split("/"); return { application, product }; }); }
export async function generateMetadata({ params }: { params: Promise<{ application: string; product: string }> }): Promise<Metadata> { const { application, product } = await params; const page = getPage(application, product); if (!page) return { robots: { index: false, follow: true } }; return { title: { absolute: page.title }, description: page.summary, alternates: alternates(page.path), openGraph: og(page.path, { title: page.title, description: page.summary }) }; }
export default async function ApplicationProductPage({ params, searchParams }: { params: Promise<{ locale: string; application: string; product: string }>; searchParams: Promise<Record<string, string | string[] | undefined>> }) { const [{ locale, application, product }, sp] = await Promise.all([params, searchParams]); setRequestLocale(locale); const page = getPage(application, product); if (!page) notFound(); return <MarketplaceAggregationPage page={page} filters={{ verified: sp.verified === "1", exportReady: sp.export === "1", iso: sp.iso === "1", moq: sp.moq === "1" }} />; }
