import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { MarketplaceAggregationPage } from "@/components/marketplace/aggregation-page";
import { findPage, MANUFACTURING_PAGES } from "@/lib/data/seo-marketplace-pages";
import { alternates, og } from "@/lib/seo";

export const revalidate = 3600;
export function generateStaticParams() { return MANUFACTURING_PAGES.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const page = findPage(MANUFACTURING_PAGES, slug); if (!page) return { robots: { index: false, follow: true } }; return { title: { absolute: page.title }, description: page.summary, alternates: alternates(page.path), openGraph: og(page.path, { title: page.title, description: page.summary }) }; }
export default async function ManufacturingPage({ params, searchParams }: { params: Promise<{ locale: string; slug: string }>; searchParams: Promise<Record<string, string | string[] | undefined>> }) { const [{ locale, slug }, sp] = await Promise.all([params, searchParams]); setRequestLocale(locale); const page = findPage(MANUFACTURING_PAGES, slug); if (!page) notFound(); return <MarketplaceAggregationPage page={page} filters={{ verified: sp.verified === "1", exportReady: sp.export === "1", iso: sp.iso === "1", moq: sp.moq === "1" }} />; }
