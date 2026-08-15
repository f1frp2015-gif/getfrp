import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { DirectoryHub } from "@/components/marketplace/directory-hub";
import { MANUFACTURING_PAGES } from "@/lib/data/seo-marketplace-pages";
import { alternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: "FRP Manufacturing Processes & Suppliers in China | getfrp",
  },
  description:
    "Compare China FRP suppliers by pultrusion, filament winding, hand lay-up, SMC molding and RTM.",
  alternates: alternates("/manufacturing"),
};

export default async function ManufacturingHub({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <DirectoryHub
      title="FRP manufacturing processes in China"
      description="Move from product geometry and production volume to the manufacturing route, process controls and real reviewed supplier profiles."
      pages={MANUFACTURING_PAGES}
      cardVisual="process"
    />
  );
}
