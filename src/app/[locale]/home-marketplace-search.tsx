"use client";

import { useState } from "react";
import { ArrowRight, Boxes, Building2, Search } from "lucide-react";

import { Link, useRouter } from "@/i18n/navigation";

type SearchScope = "products" | "suppliers";

const SCOPE_CONFIG = {
  products: {
    label: "Products",
    actionLabel: "Search products",
    searchPath: "/products",
    Icon: Boxes,
    placeholder: "Search FRP products or specifications",
    examples: [
      { label: "FRP grating", href: "/products/frp-grating" },
      {
        label: "pultruded profiles",
        href: "/products/pultruded-profiles",
      },
      { label: "filament-wound pipe", href: "/products/frp-pipe" },
      { label: "SMC / BMC parts", href: "/products/smc-bmc" },
    ],
  },
  suppliers: {
    label: "Suppliers",
    actionLabel: "Search suppliers",
    searchPath: "/suppliers/search",
    Icon: Building2,
    placeholder: "Search FRP manufacturers by region",
    examples: [
      {
        label: "ISO 9001 pultrusion factory",
        href: "/suppliers/search?q=pultrusion",
      },
      {
        label: "filament winding supplier",
        href: "/suppliers/search?q=filament%20winding",
      },
      {
        label: "vinyl ester grating maker",
        href: "/suppliers/search?q=vinyl%20ester%20grating",
      },
      {
        label: "custom SMC / BMC molder",
        href: "/suppliers/search?q=SMC%20BMC",
      },
    ],
  },
} as const;

export function HomeMarketplaceSearch() {
  const router = useRouter();
  const [scope, setScope] = useState<SearchScope>("products");
  const [query, setQuery] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const config = SCOPE_CONFIG[scope];

  function submit(nextQuery = query) {
    const q = nextQuery.trim();
    if (!q || submitting) return;
    setSubmitting(true);
    router.push({ pathname: config.searchPath, query: { q } } as never);
  }

  return (
    <div className="rounded-2xl border border-white/20 bg-white p-1.5 text-[#0a1f44] shadow-[0_24px_70px_rgba(0,0,0,.28)] sm:p-3">
      <div
        className="grid grid-cols-2 gap-1 rounded-xl bg-[#f4f6f9] p-1"
        role="group"
        aria-label="Search scope"
      >
        {(Object.keys(SCOPE_CONFIG) as SearchScope[]).map((item) => {
          const itemConfig = SCOPE_CONFIG[item];
          const active = scope === item;
          return (
            <button
              key={item}
              type="button"
              aria-pressed={active}
              onClick={() => {
                setScope(item);
                setSubmitting(false);
              }}
              className={`inline-flex h-10 items-center justify-center gap-2 rounded-lg text-sm font-semibold transition-colors sm:h-11 ${
                active
                  ? "bg-white text-[#123f8c] shadow-sm"
                  : "text-[#5d6672] hover:text-[#0a1f44]"
              }`}
            >
              <itemConfig.Icon size={16} strokeWidth={1.8} />
              {itemConfig.label}
            </button>
          );
        })}
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          submit();
        }}
        className="mt-1.5 flex flex-col gap-1.5 sm:mt-2 sm:flex-row sm:gap-2"
      >
        <label className="flex min-h-14 flex-1 items-center gap-3 rounded-xl border border-[#d9dfe8] bg-white px-3 focus-within:border-[#19c3c8] focus-within:ring-2 focus-within:ring-[#19c3c8]/15 sm:min-h-16 sm:px-4">
          <Search size={20} className="shrink-0 text-[#5d6672]" />
          <span className="sr-only">{config.placeholder}</span>
          <input
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setSubmitting(false);
            }}
            placeholder={config.placeholder}
            autoComplete="off"
            className="h-12 min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#5d6672] sm:h-14 sm:text-[15px]"
          />
        </label>
        <button
          type="submit"
          disabled={!query.trim() || submitting}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#123f8c] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#0a1f44] disabled:cursor-not-allowed disabled:opacity-45 sm:min-h-16"
        >
          <Search size={16} />
          {config.actionLabel}
          <ArrowRight size={15} />
        </button>
      </form>

      <div className="px-1 pb-1 pt-2.5 sm:px-2 sm:pt-3">
        <div className="flex flex-wrap items-center gap-1.5 text-[10px] text-[#5d6672] sm:gap-2 sm:text-[11px]">
          <span className="mr-0.5 font-medium">Popular searches:</span>
          {config.examples.map((example) => (
            <Link
              key={example.label}
              href={example.href as never}
              className="rounded-full border border-[#d9dfe8] px-2.5 py-1 font-medium text-[#0a1f44] transition-colors hover:border-[#19c3c8] hover:text-[#123f8c]"
            >
              {example.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
