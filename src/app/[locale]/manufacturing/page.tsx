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
    "Compare China fiber-composite suppliers across open mold, closed mold, automated lay-up, thermoplastic forming and composite additive manufacturing routes.",
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
      description="Compare 14 fiber-composite manufacturing routes—from open molds and resin infusion to automated placement and 3D printing—by geometry, volume, process control and reviewed supplier capability."
      pages={MANUFACTURING_PAGES}
      cardVisual="process"
    />
  );
}
