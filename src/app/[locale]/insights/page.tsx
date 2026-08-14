import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { INSIGHT_PAGES } from "@/lib/data/longform-pages";
import { alternates } from "@/lib/seo";
export const metadata: Metadata = { title: { absolute: "FRP & Composite Material Insights | getfrp" }, description: "Engineering and sourcing comparisons for FRP, carbon fiber, fiberglass, resins and composite markets.", alternates: alternates("/insights") };
export default async function InsightsPage({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; setRequestLocale(locale); return <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6"><h1 className="text-4xl font-semibold tracking-tight">FRP &amp; composite insights</h1><p className="mt-4 max-w-3xl text-muted-foreground">Methodology-first comparisons for engineers and procurement teams.</p><div className="mt-9 grid gap-5 md:grid-cols-2">{INSIGHT_PAGES.map((page) => <Link key={page.slug} href={`/insights/${page.slug}` as never} className="rounded-xl border p-6"><h2 className="text-xl font-semibold">{page.h1}</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">{page.description}</p></Link>)}</div></main>; }
