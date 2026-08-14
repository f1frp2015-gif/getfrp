import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { DirectoryHub } from "@/components/marketplace/directory-hub";
import { APPLICATION_PAGES } from "@/lib/data/seo-marketplace-pages";
import { alternates } from "@/lib/seo";
export const metadata: Metadata = { title: { absolute: "FRP Applications & China Suppliers | getfrp" }, description: "Find FRP suppliers for wastewater, marine, chemical processing, construction and electrical applications.", alternates: alternates("/applications") };
export default async function ApplicationsHub({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; setRequestLocale(locale); return <DirectoryHub title="FRP suppliers by application" description="Translate the service environment into material, process, test and installation requirements before comparing manufacturers." pages={APPLICATION_PAGES} />; }
