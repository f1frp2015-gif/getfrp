"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SupplierList } from "@/components/supplier-list";
import { FacetGroup, type FacetOption } from "@/components/qualification/facet-group";
import { useProgressiveList } from "@/lib/hooks/use-progressive-list";

const FACETS = ["cert", "std", "cat", "mat", "process", "prop", "industry", "region"] as const;

export interface DirectorySupplier {
  id: string;
  slug: string;
  name: string;
  location: string;
  category: string;
  description: string;
  products: string[];
  processList: string[];
  certifications: string[];
  standardsSupported: string[];
  verified: boolean;
  profilePublished: boolean;
  website: string | null;
  logo: string | null;
  moqKg: number | null;
  leadTimeDays: number | null;
  tags: {
    tagId: string;
    facet: string;
    trust: number;
    validTo: string | null;
    certNo: string | null;
    label: string;
    facetLabel: string;
    tone: string;
    verifyUrl: string | null;
  }[];
}

export function CertifiedDirectoryClient({
  suppliers,
}: {
  suppliers: DirectorySupplier[];
}) {
  const t = useTranslations("CertifiedDirectory");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string[]>([]);

  function toggle(tagId: string) {
    setSelected((s) =>
      s.includes(tagId) ? s.filter((x) => x !== tagId) : [...s, tagId],
    );
  }

  // 分面选项 + 计数(count = 含该 tag 的供应商数)
  const facetGroups = useMemo(() => {
    const map = new Map<string, Map<string, number>>();
    for (const s of suppliers) {
      const seen = new Set<string>();
      for (const tg of s.tags) {
        if (seen.has(tg.tagId)) continue;
        seen.add(tg.tagId);
        const f = tg.facet;
        const inner = map.get(f) ?? new Map<string, number>();
        inner.set(tg.tagId, (inner.get(tg.tagId) ?? 0) + 1);
        map.set(f, inner);
      }
    }
    const out: { facet: string; label: string; options: FacetOption[] }[] = [];
    for (const f of FACETS) {
      const inner = map.get(f);
      if (!inner) continue;
      const options = [...inner.entries()]
        .map(([tagId, count]) => ({
          tagId,
          count,
          label: suppliers.flatMap((supplier) => supplier.tags).find((tag) => tag.tagId === tagId)?.label ?? tagId,
        }))
        .sort((a, b) => b.count - a.count);
      out.push({
        facet: f,
        label: suppliers.flatMap((supplier) => supplier.tags).find((tag) => tag.facet === f)?.facetLabel ?? f,
        options,
      });
    }
    return out;
  }, [suppliers]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    const selByFacet = new Map<string, string[]>();
    for (const tagId of selected) {
      const f = suppliers.flatMap((supplier) => supplier.tags).find((tag) => tag.tagId === tagId)?.facet;
      if (!f) continue;
      const arr = selByFacet.get(f) ?? [];
      arr.push(tagId);
      selByFacet.set(f, arr);
    }
    return suppliers.filter((s) => {
      if (
        q &&
        !s.name.toLowerCase().includes(q) &&
        !s.location.toLowerCase().includes(q)
      )
        return false;
      const supTags = new Set(s.tags.map((tg) => tg.tagId));
      // facet 内 OR,facet 间 AND
      for (const [, tagIds] of selByFacet) {
        if (!tagIds.some((id) => supTags.has(id))) return false;
      }
      return true;
    });
  }, [suppliers, search, selected]);

  const { visible, remaining, expand } = useProgressiveList(filtered, 24);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">{t("h1")}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{t("subtitle")}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
        {/* 左:分面筛选栏 */}
        <aside className="space-y-5">
          <Input
            placeholder={t("searchPlaceholder")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {selected.length > 0 && (
            <button
              onClick={() => setSelected([])}
              className="text-xs text-primary hover:underline"
            >
              {t("clearFilters")} ({selected.length})
            </button>
          )}
          {facetGroups.map((g) => (
            <FacetGroup
              key={g.facet}
              label={g.label}
              options={g.options}
              selected={selected}
              onToggle={toggle}
            />
          ))}
        </aside>

        {/* 右:结果 */}
        <div className="space-y-4">
          <div className="text-sm text-muted-foreground">
            {t("resultCount", { count: filtered.length })}
          </div>

          {filtered.length === 0 ? (
            <div className="border border-dashed py-12 text-center text-muted-foreground">
              {t("noResults")}
            </div>
          ) : (
            <>
              <SupplierList
                suppliers={visible.map((supplier) => ({
                  id: supplier.id,
                  slug: supplier.slug,
                  name: supplier.name,
                  location: supplier.location,
                  category: supplier.category,
                  verified: supplier.verified,
                  profilePublished: supplier.profilePublished,
                  description:
                    supplier.description ||
                    (supplier.tags.length
                      ? supplier.tags
                          .map((tag) => `${tag.facetLabel}: ${tag.label}`)
                          .join(" · ")
                      : undefined),
                  products: supplier.products,
                  processList: supplier.processList,
                  certifications: supplier.certifications,
                  standardsSupported: supplier.standardsSupported,
                  website: supplier.website,
                  logo: supplier.logo,
                  moqKg: supplier.moqKg,
                  leadTimeDays: supplier.leadTimeDays,
                  signals: [
                    ...supplier.tags.map((tag) => ({
                      label: tag.label,
                      href: tag.trust >= 2 ? tag.verifyUrl : null,
                      className: tag.tone,
                    })),
                    ...(supplier.website
                      ? [{ label: "Company website", href: supplier.website }]
                      : []),
                  ],
                }))}
                signalLimit={12}
              />
              {remaining > 0 && (
                <div className="text-center">
                  <Button variant="outline" onClick={expand}>
                    {t("showMore", { count: Math.min(remaining, 24) })}
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
