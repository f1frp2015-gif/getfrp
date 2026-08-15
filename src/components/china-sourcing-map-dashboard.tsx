"use client";

import { useMemo, useState, type CSSProperties } from "react";
import {
  ArrowRight,
  Factory,
  Layers3,
  MapPinned,
  Radio,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import type {
  ChinaSourcingMapData,
  ChinaSourcingMapProvince,
} from "@/lib/data/china-sourcing-map";
import { cn } from "@/lib/utils";

const ALL_CATEGORIES = "all";
const HEAT_COLORS = ["#102f4b", "#164b61", "#147282", "#18a7ae", "#7be4e1"];

function provinceCount(
  province: ChinaSourcingMapProvince,
  category: string,
): number {
  return category === ALL_CATEGORIES
    ? province.total
    : province.categoryCounts[category] ?? 0;
}

function heatIndex(count: number, max: number): number {
  if (count === 0 || max === 0) return 0;
  const ratio = count / max;
  if (ratio <= 0.25) return 1;
  if (ratio <= 0.5) return 2;
  if (ratio <= 0.75) return 3;
  return 4;
}

function tileStyle(
  province: ChinaSourcingMapProvince,
  count: number,
  max: number,
): CSSProperties {
  const index = heatIndex(count, max);
  return {
    gridColumnStart: province.column,
    gridRowStart: province.row,
    backgroundColor: HEAT_COLORS[index],
    color: index === 4 ? "#071d32" : "#f8fafc",
  };
}

function percentage(value: number): string {
  return `${Math.round(value * 100)}%`;
}

export function ChinaSourcingMapDashboard({
  data,
}: {
  data: ChinaSourcingMapData;
}) {
  const [category, setCategory] = useState(ALL_CATEGORIES);
  const [selectedProvinceId, setSelectedProvinceId] = useState(() =>
    data.provinces.reduce(
      (leader, province) =>
        province.total > leader.total ? province : leader,
      data.provinces[0] ?? {
        id: "",
        name: "",
        code: "",
        column: 1,
        row: 1,
        total: 0,
        categoryCounts: {},
      },
    ).id,
  );

  const categoryOptions = useMemo(
    () => [
      { id: ALL_CATEGORIES, label: "All suppliers", total: data.mappedTotal },
      ...data.categories.map((item) => ({
        ...item,
        total: data.provinces.reduce(
          (sum, province) => sum + (province.categoryCounts[item.id] ?? 0),
          0,
        ),
      })),
    ],
    [data.categories, data.mappedTotal, data.provinces],
  );

  const rankedProvinces = useMemo(
    () =>
      [...data.provinces]
        .map((province) => ({
          ...province,
          activeCount: provinceCount(province, category),
        }))
        .filter((province) => province.activeCount > 0)
        .sort(
          (a, b) =>
            b.activeCount - a.activeCount || a.name.localeCompare(b.name),
        ),
    [category, data.provinces],
  );

  const maxCount = rankedProvinces[0]?.activeCount ?? 0;
  const mappedForFilter = rankedProvinces.reduce(
    (sum, province) => sum + province.activeCount,
    0,
  );
  const topThreeCount = rankedProvinces
    .slice(0, 3)
    .reduce((sum, province) => sum + province.activeCount, 0);
  const selectedProvince =
    data.provinces.find((province) => province.id === selectedProvinceId) ??
    data.provinces[0];
  const selectedCount = selectedProvince
    ? provinceCount(selectedProvince, category)
    : 0;
  const selectedCategoryLabel =
    categoryOptions.find((item) => item.id === category)?.label ??
    "All suppliers";
  const selectedCategoryMix = selectedProvince
    ? data.categories
        .map((item) => ({
          ...item,
          count: selectedProvince.categoryCounts[item.id] ?? 0,
        }))
        .filter((item) => item.count > 0)
        .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label))
    : [];
  const selectedProvinceMax = selectedCategoryMix[0]?.count ?? 0;

  function selectCategory(nextCategory: string) {
    setCategory(nextCategory);
    const nextLeader = [...data.provinces]
      .map((province) => ({
        id: province.id,
        count: provinceCount(province, nextCategory),
      }))
      .sort((a, b) => b.count - a.count)[0];
    if (nextLeader?.count) setSelectedProvinceId(nextLeader.id);
  }

  const supplierSearchHref = selectedProvince
    ? `/suppliers/search?q=${encodeURIComponent(selectedProvince.name)}${
        category === ALL_CATEGORIES
          ? ""
          : `&category=${encodeURIComponent(category)}`
      }#supplier-results`
    : "/suppliers/search";

  return (
    <div className="overflow-hidden rounded-2xl border border-[#183c57] bg-[#071d32] text-white shadow-[0_24px_70px_rgba(10,31,68,0.16)]">
      <div className="border-b border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(25,195,200,0.16),transparent_34%),linear-gradient(135deg,#0a2742,#071d32)] px-5 py-6 sm:px-7 sm:py-7">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7be4e1]">
              <Radio size={12} aria-hidden="true" />
              Live supplier intelligence
            </div>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              China Fiber &amp; Composites Sourcing Map
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
              Explore verified supplier density by province and supply-chain role.
              Every view is rebuilt from the audited supplier dataset.
            </p>
          </div>
          <div className="flex items-center gap-2 self-start rounded-full border border-[#7be4e1]/25 bg-[#7be4e1]/10 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-[#7be4e1]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#7be4e1] motion-reduce:animate-none" />
            Aggregate data · hourly refresh
          </div>
        </div>

        <nav
          aria-label="Filter sourcing map by supplier category"
          className="mt-6 flex gap-2 overflow-x-auto pb-1"
        >
          {categoryOptions.map((option) => {
            const active = option.id === category;
            return (
              <button
                key={option.id}
                type="button"
                aria-pressed={active}
                onClick={() => selectCategory(option.id)}
                className={cn(
                  "inline-flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium transition-colors focus-visible:ring-2 focus-visible:ring-[#7be4e1]",
                  active
                    ? "border-[#7be4e1] bg-[#7be4e1] text-[#071d32]"
                    : "border-white/15 bg-white/5 text-slate-200 hover:border-white/35 hover:bg-white/10",
                )}
              >
                {option.label}
                <span
                  className={cn(
                    "font-mono text-[10px]",
                    active ? "text-[#071d32]/65" : "text-slate-400",
                  )}
                >
                  {option.total}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      <dl className="grid grid-cols-2 border-b border-white/10 lg:grid-cols-4">
        {[
          {
            icon: Factory,
            label: "Suppliers mapped",
            value: mappedForFilter.toLocaleString(),
          },
          {
            icon: MapPinned,
            label: "Active provinces",
            value: rankedProvinces.length.toLocaleString(),
          },
          {
            icon: Layers3,
            label: "Leading cluster",
            value: rankedProvinces[0]?.name ?? "—",
          },
          {
            icon: Radio,
            label: "Top 3 concentration",
            value: mappedForFilter
              ? percentage(topThreeCount / mappedForFilter)
              : "—",
          },
        ].map((metric) => {
          const MetricIcon = metric.icon;
          return (
            <div
              key={metric.label}
              className="border-r border-t border-white/10 px-4 py-4 first:border-t-0 even:border-r-0 lg:border-t-0 lg:even:border-r lg:last:border-r-0 sm:px-6"
            >
              <dt className="flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] text-slate-400">
                <MetricIcon size={13} aria-hidden="true" />
                {metric.label}
              </dt>
              <dd className="mt-2 truncate text-xl font-semibold text-white">
                {metric.value}
              </dd>
            </div>
          );
        })}
      </dl>

      <div className="grid lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0 border-b border-white/10 p-4 sm:p-6 lg:border-b-0 lg:border-r">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-400">
                Province tile map
              </div>
              <p className="mt-1 text-xs text-slate-300">
                Select a province to inspect its supplier mix.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
              <span>Lower</span>
              {HEAT_COLORS.slice(1).map((color) => (
                <span
                  key={color}
                  className="h-2.5 w-5 rounded-[2px] border border-white/10"
                  style={{ backgroundColor: color }}
                />
              ))}
              <span>Higher</span>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#061726] p-3 sm:p-5">
            <div
              className="grid min-h-[430px] min-w-[640px] grid-cols-10 grid-rows-8 gap-1.5"
              aria-label={`China supplier density map for ${selectedCategoryLabel}`}
            >
              {data.provinces.map((province) => {
                const count = provinceCount(province, category);
                const selected = province.id === selectedProvince?.id;
                return (
                  <button
                    key={province.id}
                    type="button"
                    aria-label={`${province.name}: ${count} ${selectedCategoryLabel.toLowerCase()}`}
                    aria-pressed={selected}
                    onClick={() => setSelectedProvinceId(province.id)}
                    title={`${province.name} · ${count} ${selectedCategoryLabel.toLowerCase()}`}
                    className={cn(
                      "group relative flex min-h-12 flex-col items-center justify-center rounded-md border px-1 py-1.5 transition duration-150 hover:z-10 hover:-translate-y-0.5 hover:border-[#7be4e1] focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-[#7be4e1] motion-reduce:transform-none",
                      count === 0
                        ? "border-white/[0.06] opacity-55"
                        : "border-white/15 shadow-[0_5px_15px_rgba(0,0,0,0.16)]",
                      selected &&
                        "z-10 border-[#7be4e1] ring-2 ring-[#7be4e1] ring-offset-2 ring-offset-[#061726]",
                    )}
                    style={tileStyle(province, count, maxCount)}
                  >
                    <span className="font-mono text-[10px] font-bold tracking-[0.08em]">
                      {province.code}
                    </span>
                    <span className="mt-0.5 text-[11px] font-semibold leading-none">
                      {count || "·"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
          <p className="mt-3 text-[10px] leading-5 text-slate-500">
            Tile positions preserve approximate geography; color and counts show
            verified supplier records, not production capacity or market share.
          </p>
        </div>

        <aside className="p-5 sm:p-6" aria-label="Leading sourcing provinces">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#7be4e1]">
                Cluster ranking
              </div>
              <h4 className="mt-1 text-base font-semibold">Top sourcing hubs</h4>
            </div>
            <span className="font-mono text-[10px] text-slate-400">
              {selectedCategoryLabel}
            </span>
          </div>

          {rankedProvinces.length > 0 ? (
            <ol className="mt-5 space-y-3">
              {rankedProvinces.slice(0, 7).map((province, index) => (
                <li key={province.id}>
                  <button
                    type="button"
                    aria-pressed={province.id === selectedProvince?.id}
                    onClick={() => setSelectedProvinceId(province.id)}
                    className={cn(
                      "w-full rounded-lg border px-3 py-3 text-left transition-colors focus-visible:ring-2 focus-visible:ring-[#7be4e1]",
                      province.id === selectedProvince?.id
                        ? "border-[#7be4e1]/60 bg-[#7be4e1]/10"
                        : "border-white/10 bg-white/[0.025] hover:border-white/25 hover:bg-white/5",
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] text-slate-500">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 flex-1 truncate text-xs font-medium">
                        {province.name}
                      </span>
                      <span className="font-mono text-xs font-semibold text-[#7be4e1]">
                        {province.activeCount}
                      </span>
                    </div>
                    <div className="mt-2 ml-7 h-1 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#19c3c8] to-[#7be4e1]"
                        style={{
                          width: percentage(province.activeCount / maxCount),
                        }}
                      />
                    </div>
                  </button>
                </li>
              ))}
            </ol>
          ) : (
            <div className="mt-5 rounded-lg border border-dashed border-white/15 p-5 text-sm leading-6 text-slate-400">
              No mapped supplier records are available in this category yet.
            </div>
          )}

          {data.unmappedTotal > 0 && category === ALL_CATEGORIES && (
            <p className="mt-5 border-t border-white/10 pt-4 text-[10px] leading-5 text-slate-500">
              {data.unmappedTotal} verified record
              {data.unmappedTotal === 1 ? " is" : "s are"} excluded from the map
              because a province has not been assigned.
            </p>
          )}
        </aside>
      </div>

      {selectedProvince && (
        <div
          className="border-t border-white/10 bg-white/[0.035] px-5 py-5 sm:px-7"
          aria-live="polite"
        >
          <div className="grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)_auto] lg:items-center">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#7be4e1]">
                Selected province · {selectedProvince.code}
              </div>
              <div className="mt-1 flex items-end gap-3">
                <h4 className="text-xl font-semibold">{selectedProvince.name}</h4>
                <span className="pb-0.5 font-mono text-xs text-slate-400">
                  {selectedCount} in view
                </span>
              </div>
            </div>

            <div>
              {selectedCategoryMix.length > 0 ? (
                <div className="grid gap-x-5 gap-y-2 sm:grid-cols-2">
                  {selectedCategoryMix.slice(0, 6).map((item) => (
                    <div key={item.id}>
                      <div className="flex items-center justify-between gap-2 text-[10px]">
                        <span
                          className={cn(
                            "truncate text-slate-400",
                            category === item.id && "text-[#7be4e1]",
                          )}
                        >
                          {item.label}
                        </span>
                        <span className="font-mono text-slate-300">{item.count}</span>
                      </div>
                      <div className="mt-1 h-1 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-[#19c3c8]"
                          style={{
                            width: percentage(item.count / selectedProvinceMax),
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs leading-5 text-slate-400">
                  No verified supplier records are currently mapped to this province.
                </p>
              )}
            </div>

            <Link
              href={supplierSearchHref as never}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#7be4e1] px-4 py-2.5 text-xs font-semibold text-[#071d32] transition-colors hover:bg-white focus-visible:ring-2 focus-visible:ring-white"
            >
              Browse matching suppliers
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
