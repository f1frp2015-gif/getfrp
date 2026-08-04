"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Boxes, Building2, Search, Sparkles } from "lucide-react";

import { Link, useRouter } from "@/i18n/navigation";

type SearchScope = "products" | "suppliers";

const SCOPE_CONFIG = {
  products: {
    label: "Products",
    Icon: Boxes,
    placeholder: "Search FRP products or specifications",
    examples: [
      { label: "vinyl ester grating", href: "/products/frp-grating" },
      {
        label: "pultruded structural profiles",
        href: "/products/pultruded-profiles",
      },
    ],
  },
  suppliers: {
    label: "Suppliers",
    Icon: Building2,
    placeholder: "Search FRP manufacturers by region",
    examples: [
      { label: "ISO 9001 pultrusion factory", href: "/suppliers?q=pultrusion" },
      { label: "filament winding supplier", href: "/suppliers?q=filament%20winding" },
    ],
  },
} as const;

export function HomeMarketplaceSearch() {
  const router = useRouter();
  const [scope, setScope] = useState<SearchScope>("products");
  const [query, setQuery] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const config = SCOPE_CONFIG[scope];

  const parameterizedUrl = useMemo(() => {
    const previewQuery = query.trim() || config.examples[0].label;
    const params = new URLSearchParams({ scope, q: previewQuery });
    return `getfrp.com/ai/chat?${params.toString()}`;
  }, [config.examples, query, scope]);

  function submit(nextQuery = query) {
    const q = nextQuery.trim();
    if (!q || submitting) return;
    setSubmitting(true);
    router.push({ pathname: "/ai/chat", query: { scope, q } } as never);
  }

  return (
    <div className="rounded-2xl border border-white/20 bg-white p-1.5 text-[#0b2635] shadow-[0_24px_70px_rgba(0,0,0,.28)] sm:p-3">
      <div
        className="grid grid-cols-2 gap-1 rounded-xl bg-[#edf3f3] p-1"
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
                  ? "bg-white text-[#0a736d] shadow-sm"
                  : "text-[#60737d] hover:text-[#173d4b]"
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
        <label className="flex min-h-14 flex-1 items-center gap-3 rounded-xl border border-[#d7e1e3] bg-white px-3 focus-within:border-[#0b8179] focus-within:ring-2 focus-within:ring-[#0b8179]/15 sm:min-h-16 sm:px-4">
          <Search size={20} className="shrink-0 text-[#64808a]" />
          <span className="sr-only">{config.placeholder}</span>
          <input
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setSubmitting(false);
            }}
            placeholder={config.placeholder}
            autoComplete="off"
            className="h-12 min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#83959c] sm:h-14 sm:text-[15px]"
          />
        </label>
        <button
          type="submit"
          disabled={!query.trim() || submitting}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#0a756f] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#08645f] disabled:cursor-not-allowed disabled:opacity-45 sm:min-h-16"
        >
          <Sparkles size={16} />
          Search with AI
          <ArrowRight size={15} />
        </button>
      </form>

      <div className="flex flex-col gap-2 px-1 pb-1 pt-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:px-2 sm:pt-3">
        <div className="hidden flex-wrap items-center gap-2 text-[11px] text-[#647983] sm:flex">
          <span>Popular:</span>
          {config.examples.map((example) => (
            <Link
              key={example.label}
              href={example.href as never}
              className="rounded-full border border-[#d6e0e2] px-2.5 py-1 font-medium text-[#395763] transition-colors hover:border-[#0b8179] hover:text-[#0b756f]"
            >
              {example.label}
            </Link>
          ))}
        </div>
        <div className="hidden min-w-0 font-mono text-[9px] text-[#667b84] sm:block sm:max-w-[46%]">
          <span className="mr-1.5 text-[#0a756f]">SHAREABLE URL</span>
          <span className="break-all">{parameterizedUrl}</span>
        </div>
      </div>
    </div>
  );
}
