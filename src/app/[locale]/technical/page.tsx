import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { SeoReferenceHub } from "@/components/seo-reference-hub";
import {
  SEO_REFERENCE_GROUPS,
  getSeoReferencePages,
} from "@/lib/data/seo-reference-pages";
import { alternates, og } from "@/lib/seo";

const config = SEO_REFERENCE_GROUPS.technical;
const title = "FRP Technical Data — Properties & Density | getfrp";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: title },
    description: config.description,
    alternates: alternates("/technical"),
    openGraph: og("/technical", { title, description: config.description }),
  };
}

export default async function TechnicalHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "en") notFound();
  setRequestLocale(locale);
  return <SeoReferenceHub group="technical" pages={getSeoReferencePages("technical")} />;
}
