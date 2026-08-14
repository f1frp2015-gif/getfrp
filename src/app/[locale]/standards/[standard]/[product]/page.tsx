import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { MarketplaceAggregationPage } from "@/components/marketplace/aggregation-page";
import { COMBINATION_PAGES } from "@/lib/data/seo-marketplace-pages";
import { alternates, og } from "@/lib/seo";

export const revalidate = 3600;
function getPage(standard: string, product: string) { return COMBINATION_PAGES.find((page) => page.path === `/standards/${standard}/${product}`) ?? null; }
export function generateStaticParams() { return COMBINATION_PAGES.filter((page) => page.path.startsWith("/standards/")).map((page) => { const [, , standard, product] = page.path.split("/"); return { standard, product }; }); }
export async function generateMetadata({ params }: { params: Promise<{ standard: string; product: string }> }): Promise<Metadata> { const { standard, product } = await params; const page = getPage(standard, product); if (!page) return { robots: { index: false, follow: true } }; return { title: { absolute: page.title }, description: page.summary, alternates: alternates(page.path), openGraph: og(page.path, { title: page.title, description: page.summary }) }; }
export default async function StandardProductPage({ params, searchParams }: { params: Promise<{ locale: string; standard: string; product: string }>; searchParams: Promise<Record<string, string | string[] | undefined>> }) { const [{ locale, standard, product }, sp] = await Promise.all([params, searchParams]); setRequestLocale(locale); const page = getPage(standard, product); if (!page) notFound(); return <MarketplaceAggregationPage page={page} filters={{ verified: sp.verified === "1", exportReady: sp.export === "1", iso: sp.iso === "1", moq: sp.moq === "1" }} />; }
