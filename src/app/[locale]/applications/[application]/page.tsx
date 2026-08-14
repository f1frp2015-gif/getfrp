import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { MarketplaceAggregationPage } from "@/components/marketplace/aggregation-page";
import { APPLICATION_PAGES, findPage } from "@/lib/data/seo-marketplace-pages";
import { alternates, og } from "@/lib/seo";

export const revalidate = 3600;
export function generateStaticParams() { return APPLICATION_PAGES.map(({ slug }) => ({ application: slug })); }
export async function generateMetadata({ params }: { params: Promise<{ application: string }> }): Promise<Metadata> { const { application } = await params; const page = findPage(APPLICATION_PAGES, application); if (!page) return { robots: { index: false, follow: true } }; return { title: { absolute: page.title }, description: page.summary, alternates: alternates(page.path), openGraph: og(page.path, { title: page.title, description: page.summary }) }; }
export default async function ApplicationPage({ params, searchParams }: { params: Promise<{ locale: string; application: string }>; searchParams: Promise<Record<string, string | string[] | undefined>> }) { const [{ locale, application }, sp] = await Promise.all([params, searchParams]); setRequestLocale(locale); const page = findPage(APPLICATION_PAGES, application); if (!page) notFound(); return <MarketplaceAggregationPage page={page} filters={{ verified: sp.verified === "1", exportReady: sp.export === "1", iso: sp.iso === "1", moq: sp.moq === "1" }} />; }
