import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { MarketplaceAggregationPage } from "@/components/marketplace/aggregation-page";
import { getManufacturingProcessGuide } from "@/lib/data/manufacturing-process-guides";
import { findPage, MANUFACTURING_PAGES } from "@/lib/data/seo-marketplace-pages";
import { alternates, og } from "@/lib/seo";

export const revalidate = 3600;
export const dynamicParams = false;
export function generateStaticParams() { return MANUFACTURING_PAGES.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const page = findPage(MANUFACTURING_PAGES, slug); const guide = getManufacturingProcessGuide(slug); if (!page) return { robots: { index: false, follow: true } }; const title = guide?.seoTitle ?? page.title; const description = guide?.metaDescription ?? page.summary; return { title: { absolute: title }, description, keywords: guide ? [guide.primaryKeyword, ...guide.keywords] : undefined, alternates: alternates(page.path), openGraph: og(page.path, { title, description }) }; }
export default async function ManufacturingPage({ params, searchParams }: { params: Promise<{ locale: string; slug: string }>; searchParams: Promise<Record<string, string | string[] | undefined>> }) { const [{ locale, slug }, sp] = await Promise.all([params, searchParams]); setRequestLocale(locale); const page = findPage(MANUFACTURING_PAGES, slug); const processGuide = getManufacturingProcessGuide(slug); if (!page || !processGuide) notFound(); return <MarketplaceAggregationPage page={page} processGuide={processGuide} filters={{ verified: sp.verified === "1", exportReady: sp.export === "1", iso: sp.iso === "1", moq: sp.moq === "1" }} />; }
