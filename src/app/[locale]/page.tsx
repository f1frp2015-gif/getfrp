import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import {
  HOME_DESCRIPTION,
  HOME_TITLE,
  HomePageEnglish,
} from "./home-english";
import { alternates, og } from "@/lib/seo";

export const revalidate = 60;

export function generateMetadata(): Metadata {
  return {
    title: { absolute: HOME_TITLE },
    description: HOME_DESCRIPTION,
    alternates: alternates("/"),
    openGraph: og("/", { title: HOME_TITLE, description: HOME_DESCRIPTION }),
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomePageEnglish />;
}
