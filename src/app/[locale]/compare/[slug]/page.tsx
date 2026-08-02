import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { SeoReferencePageView } from "@/components/seo-reference-page";
import {
  getSeoReferencePage,
  getSeoReferencePages,
} from "@/lib/data/seo-reference-pages";
import { alternates, og } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return getSeoReferencePages("compare").map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoReferencePage("compare", slug);
  if (!page) return { robots: { index: false, follow: false } };
  const path = `/compare/${page.slug}`;
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: alternates(path),
    openGraph: og(path, { title: page.metaTitle, description: page.metaDescription }),
  };
}

export default async function CompareDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (locale !== "en") notFound();
  setRequestLocale(locale);
  const page = getSeoReferencePage("compare", slug);
  if (!page) notFound();
  return <SeoReferencePageView page={page} />;
}
