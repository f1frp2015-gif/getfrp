import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { alternates } from "@/lib/seo";
import { listAvailableChatModels } from "@/lib/ai/provider";
import { AiAssistantClient } from "../ai-client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  await params;
  return {
    title: "FRP Sourcing Assistant",
    description:
      "Interactive getfrp sourcing assistant for FRP specifications, suppliers, materials and standards.",
    robots: { index: false, follow: false },
    alternates: alternates("/ai/chat"),
  };
}

export default async function AiChatPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { locale } = await params;
  const sp = await searchParams;
  setRequestLocale(locale);
  const raw = sp.q;
  const rawScope = Array.isArray(sp.scope) ? sp.scope[0] : sp.scope;
  const query = Array.isArray(raw) ? raw[0] : raw;
  const initialQuery = query
    ? rawScope === "products"
      ? `Search for FRP products matching this requirement: ${query}`
      : rawScope === "suppliers"
        ? `Find and compare Chinese FRP suppliers matching this requirement: ${query}`
        : query
    : undefined;

  return (
    <AiAssistantClient
      initialQuery={initialQuery}
      availableModels={listAvailableChatModels()}
    />
  );
}
