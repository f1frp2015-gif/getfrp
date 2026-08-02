import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { HomePageEnglish } from "./home-english";
import { alternates, og } from "@/lib/seo";

export const revalidate = 60;

export function generateMetadata(): Metadata {
  const title =
    "FRP Products & Suppliers China — Factory-Direct Marketplace | getfrp";
  const description =
    "Find FRP products, manufacturers and suppliers in China. Compare grating, profiles, pipe, rebar, resin and fiber, then verify factories through one RFQ.";

  return {
    title: { absolute: title },
    description,
    alternates: alternates("/"),
    openGraph: og("/", { title, description }),
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
