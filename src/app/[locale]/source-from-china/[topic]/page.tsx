import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { LongformMarketplacePage } from "@/components/marketplace/longform-page";
import { SOURCE_FROM_CHINA_PAGES } from "@/lib/data/longform-pages";
import { alternates, og } from "@/lib/seo";
export const revalidate = 86400;
function find(slug: string) { return SOURCE_FROM_CHINA_PAGES.find((page) => page.slug === slug) ?? null; }
export function generateStaticParams() { return SOURCE_FROM_CHINA_PAGES.map(({ slug }) => ({ topic: slug })); }
export async function generateMetadata({ params }: { params: Promise<{ topic: string }> }): Promise<Metadata> { const { topic } = await params; const page = find(topic); if (!page) return { robots: { index: false, follow: true } }; const path = `/source-from-china/${page.slug}`; return { title: { absolute: page.title }, description: page.description, alternates: alternates(path), openGraph: og(path, { title: page.title, description: page.description }) }; }
export default async function SourceTopicPage({ params }: { params: Promise<{ locale: string; topic: string }> }) { const { locale, topic } = await params; setRequestLocale(locale); const page = find(topic); if (!page) notFound(); return <LongformMarketplacePage page={page} />; }
