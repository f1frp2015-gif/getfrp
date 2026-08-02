import { tool } from "ai";
import { z } from "zod";

interface SearchResult {
  title: string;
  url: string;
  content: string;
}

const TAVILY_ENDPOINT = "https://api.tavily.com/search";

export function isWebSearchConfigured(_host?: string | null): boolean {
  void _host;
  return Boolean(process.env.TAVILY_API_KEY);
}

async function tavilySearch(
  query: string,
  maxResults: number,
): Promise<SearchResult[]> {
  const apiKey = process.env.TAVILY_API_KEY;
  if (!apiKey) throw new Error("TAVILY_API_KEY not set");

  const res = await fetch(TAVILY_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      query,
      max_results: maxResults,
      search_depth: "basic",
      include_answer: false,
      include_raw_content: false,
    }),
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`tavily ${res.status}: ${body.slice(0, 300)}`);
  }

  const data = (await res.json()) as {
    results?: { title: string; url: string; content: string }[];
  };
  return (data.results ?? []).map((result) => ({
    title: result.title,
    url: result.url,
    content: result.content ?? "",
  }));
}

export function makeWebSearchTool(_host?: string | null) {
  void _host;
  return tool({
    description:
      "Search the public web for current composites information not covered by the embedded GetFRP knowledge base. " +
      "Use only for recent prices, market trends, company news, regulatory updates, trade shows, or uncertain facts.",
    inputSchema: z.object({
      query: z
        .string()
        .min(2)
        .max(200)
        .describe("English search query containing a composites-related keyword."),
      maxResults: z
        .number()
        .int()
        .min(1)
        .max(8)
        .optional()
        .describe("How many results to return. Default 5."),
    }),
    execute: async ({ query, maxResults }) => {
      const count = maxResults ?? 5;
      try {
        const results = await tavilySearch(query, count);
        return {
          query,
          provider: "tavily",
          resultCount: results.length,
          results: results.slice(0, count).map((result, index) => ({
            n: index + 1,
            title: result.title,
            url: result.url,
            snippet: result.content.slice(0, 400),
          })),
        };
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        console.warn("[web_search:tavily] failed:", message);
        return { query, error: message, results: [] };
      }
    },
  });
}
