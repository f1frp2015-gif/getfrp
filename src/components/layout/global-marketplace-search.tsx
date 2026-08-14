"use client";

import { useMemo, useState } from "react";
import { Bot, Camera, Search } from "lucide-react";
import { Link, useRouter } from "@/i18n/navigation";
import { HOT_SEARCHES, SEARCH_SUGGESTIONS } from "@/lib/site-navigation";

type SearchTab = "products" | "suppliers" | "verified";

const TAB_CONFIG: Record<SearchTab, { label: string; placeholder: string }> = {
  products: {
    label: "Products",
    placeholder: "Search FRP products or suppliers, e.g. pultruded FRP grating",
  },
  suppliers: {
    label: "Suppliers",
    placeholder: "Search FRP suppliers, e.g. pultrusion manufacturer",
  },
  verified: {
    label: "Verified Factory",
    placeholder: "Search verified FRP factories by product or process",
  },
};

export function GlobalMarketplaceSearch() {
  const router = useRouter();
  const [tab, setTab] = useState<SearchTab>("products");
  const [query, setQuery] = useState("");
  const suggestions = useMemo(() => {
    const token = query.trim().toLowerCase();
    const matches = token
      ? SEARCH_SUGGESTIONS.filter((item) => item.label.toLowerCase().includes(token))
      : [];
    const ranked = token
      ? [...matches, ...SEARCH_SUGGESTIONS.filter((item) => !matches.includes(item))]
      : SEARCH_SUGGESTIONS;
    return ranked.slice(0, 6);
  }, [query]);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = query.trim();
    const exact = SEARCH_SUGGESTIONS.find(
      (item) => item.label.toLowerCase() === value.toLowerCase(),
    );
    if (tab === "products" && exact) {
      router.push(exact.href as never);
      return;
    }
    const params = new URLSearchParams();
    if (value) params.set("q", value);
    if (tab === "products") params.set("scope", "products");
    if (tab === "verified") params.set("profile", "verified");
    router.push(`/suppliers/search?${params.toString()}` as never);
  }

  return (
    <div className="border-t border-brand-cool-gray/70 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
        <div className="flex flex-wrap items-end gap-x-5 gap-y-2">
          <div className="flex gap-1" role="tablist" aria-label="Marketplace search type">
            {(Object.keys(TAB_CONFIG) as SearchTab[]).map((item) => (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={tab === item}
                onClick={() => setTab(item)}
                className={`rounded-md px-2.5 py-1 text-[11px] font-semibold ${
                  tab === item
                    ? "bg-brand-navy text-white"
                    : "text-brand-graphite/70 hover:bg-brand-aqua/20 hover:text-brand-navy"
                }`}
              >
                {TAB_CONFIG[item].label}
              </button>
            ))}
          </div>
          <div className="hidden items-center gap-2 text-[10px] text-brand-graphite/55 lg:flex" aria-label="Planned search modes">
            <span className="inline-flex items-center gap-1"><Camera size={11} /> Image search · Phase 3</span>
            <span className="inline-flex items-center gap-1"><Bot size={11} /> AI mode · Phase 3</span>
          </div>
        </div>

        <form onSubmit={submit} className="relative mt-2">
          <label className="flex h-11 items-center gap-3 rounded-lg border border-brand-cool-gray bg-white px-3 shadow-sm focus-within:border-brand-teal focus-within:ring-2 focus-within:ring-brand-aqua/30">
            <Search size={17} className="shrink-0 text-brand-blue" aria-hidden="true" />
            <span className="sr-only">{TAB_CONFIG[tab].label} search</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={TAB_CONFIG[tab].placeholder}
              className="min-w-0 flex-1 bg-transparent text-sm text-brand-graphite outline-none placeholder:text-brand-graphite/45"
              aria-controls="global-search-suggestions"
            />
            <button type="submit" className="rounded-md bg-brand-blue px-4 py-2 text-xs font-semibold text-white hover:bg-brand-navy">
              Search
            </button>
          </label>
          {query.trim() ? (
            <div id="global-search-suggestions" className="absolute inset-x-0 top-full z-50 mt-1 grid overflow-hidden rounded-lg border bg-white shadow-xl sm:grid-cols-2">
              {suggestions.length ? suggestions.map((item) => (
                <Link key={item.href} href={item.href as never} className="px-4 py-3 text-xs text-brand-graphite hover:bg-brand-aqua/15 hover:text-brand-navy" onClick={() => setQuery("")}>
                  {item.label}
                </Link>
              )) : (
                <div className="px-4 py-3 text-xs text-muted-foreground">Search the live supplier directory for “{query.trim()}”.</div>
              )}
            </div>
          ) : null}
        </form>

        <div className="mt-2 flex items-center gap-2 overflow-x-auto whitespace-nowrap text-[10px] text-brand-graphite/60" aria-label="Popular searches">
          <span className="font-semibold text-brand-navy">Popular:</span>
          {HOT_SEARCHES.map((item) => (
            <Link key={item.href} href={item.href as never} className="hover:text-brand-blue hover:underline">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
