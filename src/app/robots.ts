import type { MetadataRoute } from "next";
import { CURRENT_SITE_URL } from "@/lib/sites";

const baseDisallow = [
  "/api/",
  "/dashboard/",
  "/sign-in",
  "/sign-up",
  "/search",
];

const enExtraDisallow = [
  "/pricing",
  "/overseas",
];

// Western search + AI crawlers — primary audience for getfrp.com.
const WESTERN_AGENTS = [
  "*",
  "Googlebot",
  "Googlebot-Image",
  "Googlebot-News",
  "Bingbot",
  "DuckDuckBot",
  "YandexBot",
  // AI / LLM crawlers
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "anthropic-ai",
  "Claude-SearchBot",
  "Claude-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "CCBot",
  "Amazonbot",
  "MistralAI-User",
];

export default function robots(): MetadataRoute.Robots {
  const disallow = [...baseDisallow, ...enExtraDisallow];

  return {
    rules: WESTERN_AGENTS.map((ua) => ({
      userAgent: ua,
      allow: "/",
      disallow,
    })),
    sitemap: `${CURRENT_SITE_URL}/sitemap.xml`,
    host: CURRENT_SITE_URL,
  };
}
