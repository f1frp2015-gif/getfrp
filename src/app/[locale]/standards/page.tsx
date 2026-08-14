import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { DirectoryHub } from "@/components/marketplace/directory-hub";
import { STANDARD_PAGES } from "@/lib/data/seo-marketplace-pages";
import { alternates } from "@/lib/seo";
export const metadata: Metadata = { title: { absolute: "FRP Standards & China Supplier Directory | getfrp" }, description: "Browse China FRP suppliers by EN 13706, ASTM D7957, ISO 9001 and ASTM D3841 signals.", alternates: alternates("/standards") };
export default async function StandardsHub({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; setRequestLocale(locale); return <DirectoryHub title="FRP standards and supplier evidence" description="Use standards as controlled evidence requirements, not badge keywords. Confirm edition, scope, specimen and product match." pages={STANDARD_PAGES} />; }
