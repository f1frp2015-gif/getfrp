"use client";

import { useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ExternalLink,
  GitCompareArrows,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { SaveButton } from "@/components/save-button";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import {
  findSupplierCapability,
  supplierMatchesCapability,
} from "@/lib/data/supplier-capability-directory";
import type { SerializedSupplier } from "@/lib/types/supplier-directory";
import { SUPPLIER_RESULTS_PAGE_SIZE } from "@/lib/supplier-directory-config";

export type { SerializedSupplier } from "@/lib/types/supplier-directory";

type Opt = { id: string; name: string };
type PaginationItem = number | "start-ellipsis" | "end-ellipsis";
type ReadinessFilter = "all" | "export" | "standards" | "commercial";
type SortMode = "recommended" | "name" | "founded" | "verified";

const ALL_REGIONS_TOKEN = "__all__";
const COMPARE_MAX = 3;
const PRODUCT_TAG_COUNT = 3;
const CERTIFICATION_FILTERS = [
  { id: "iso-9001", label: "ISO 9001", pattern: /iso\s*9001/i },
  { id: "iso-14001", label: "ISO 14001", pattern: /iso\s*14001/i },
  { id: "iatf-16949", label: "IATF 16949", pattern: /iatf\s*16949/i },
  { id: "ce", label: "CE", pattern: /(^|\W)ce($|\W)/i },
  { id: "ul", label: "UL", pattern: /(^|\W)ul($|\W)/i },
] as const;

function paginationItems(current: number, total: number): PaginationItem[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  if (current <= 4) return [1, 2, 3, 4, 5, "end-ellipsis", total];
  if (current >= total - 3) {
    return [
      1,
      "start-ellipsis",
      total - 4,
      total - 3,
      total - 2,
      total - 1,
      total,
    ];
  }
  return [
    1,
    "start-ellipsis",
    current - 1,
    current,
    current + 1,
    "end-ellipsis",
    total,
  ];
}

function companyInitials(name: string): string {
  const clean = name.trim();
  if (!clean) return "FRP";
  if (/[\u3400-\u9fff]/.test(clean)) return clean.slice(0, 2);
  return clean
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function SupplierLogo({
  src,
  name,
  compact = false,
}: {
  src: string | null;
  name: string;
  compact?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const sizeClass = compact ? "h-12 w-16" : "h-20 w-20 lg:h-24 lg:w-28";

  if (!src || failed) {
    return (
      <div
        role="img"
        aria-label={`${name} logo`}
        className={cn(
          "flex shrink-0 items-center justify-center rounded-lg border border-border/70 bg-muted font-semibold tracking-tight text-foreground",
          sizeClass,
          compact ? "text-sm" : "text-lg",
        )}
      >
        {companyInitials(name)}
      </div>
    );
  }

  return (
    // Supplier logos are remote, company-managed assets with unrestricted hosts.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={`${name} logo`}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={cn(
        "shrink-0 rounded-lg border border-border/70 bg-white object-contain p-2",
        sizeClass,
      )}
    />
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0 border-l border-border/70 pl-2.5 first:border-l-0 first:pl-0 sm:first:border-l sm:first:pl-2.5">
      <div className="truncate text-[10px] uppercase tracking-[0.08em] text-muted-foreground">
        {label}
      </div>
      <div className="mt-0.5 truncate text-xs font-semibold" title={value}>
        {value}
      </div>
    </div>
  );
}

function websiteLabel(website: string): string {
  try {
    return new URL(website).hostname.replace(/^www\./, "");
  } catch {
    return website.replace(/^https?:\/\//, "").replace(/\/$/, "");
  }
}

export function SuppliersClient({
  suppliers,
  categories,
  provinces,
  initialSearch = "",
  initialCategory = "",
  initialRegion = "",
  initialCertification = "",
  initialProfileStatus = "",
  initialCapability = "",
  initialReadiness = "",
  initialSort = "",
  initialPage = 1,
  layout = "inline",
}: {
  suppliers: SerializedSupplier[];
  categories: Opt[];
  provinces: string[];
  initialSearch?: string;
  initialCategory?: string;
  initialRegion?: string;
  initialCertification?: string;
  initialProfileStatus?: string;
  initialCapability?: string;
  initialReadiness?: string;
  initialSort?: string;
  initialPage?: number;
  layout?: "inline" | "sidebar";
}) {
  const t = useTranslations("Suppliers");

  const [search, setSearch] = useState(initialSearch);
  const deferredSearch = useDeferredValue(search);
  const [cat, setCat] = useState(() =>
    categories.some((category) => category.id === initialCategory)
      ? initialCategory
      : "all",
  );
  const [region, setRegion] = useState<string>(() =>
    provinces.includes(initialRegion) ? initialRegion : ALL_REGIONS_TOKEN,
  );
  const [certification, setCertification] = useState(() =>
    CERTIFICATION_FILTERS.some((item) => item.id === initialCertification)
      ? initialCertification
      : "all",
  );
  const [profileStatus, setProfileStatus] = useState(() =>
    initialProfileStatus === "published" || initialProfileStatus === "verified"
      ? initialProfileStatus
      : "all",
  );
  const [capability, setCapability] = useState(() =>
    findSupplierCapability(initialCapability) ? initialCapability : "",
  );
  const [readiness, setReadiness] = useState<ReadinessFilter>(() =>
    ["export", "standards", "commercial"].includes(initialReadiness)
      ? (initialReadiness as ReadinessFilter)
      : "all",
  );
  const [sort, setSort] = useState<SortMode>(() =>
    ["name", "founded", "verified"].includes(initialSort)
      ? (initialSort as SortMode)
      : "recommended",
  );
  const [page, setPage] = useState(() =>
    Number.isInteger(initialPage) && initialPage > 0 ? initialPage : 1,
  );
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [compareOpen, setCompareOpen] = useState(false);
  const [savedSupplierIds, setSavedSupplierIds] = useState<Set<string>>(
    () => new Set(),
  );
  const [signedIn, setSignedIn] = useState(false);
  const listTopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/dashboard/saved?sourceType=supplier", {
      cache: "no-store",
      signal: controller.signal,
    })
      .then(async (response) => {
        if (!response.ok) return null;
        return (await response.json()) as {
          items?: Array<{ sourceId?: string }>;
        };
      })
      .then((data) => {
        if (!data) return;
        setSavedSupplierIds(
          new Set(
            (data.items ?? [])
              .map((item) => item.sourceId)
              .filter((id): id is string => Boolean(id)),
          ),
        );
        setSignedIn(true);
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
      });

    return () => controller.abort();
  }, []);

  const selectedCapability = useMemo(
    () => findSupplierCapability(capability),
    [capability],
  );

  const searchSuggestions = useMemo(
    () =>
      Array.from(
        new Set(
          suppliers.flatMap((supplier) => [
            supplier.name,
            ...supplier.products,
            ...supplier.processList,
            ...supplier.capabilities,
            ...supplier.standardsSupported,
          ]),
        ),
      )
        .filter(Boolean)
        .slice(0, 120),
    [suppliers],
  );

  const filtered = useMemo(() => {
    const query = deferredSearch.trim().toLowerCase();
    return suppliers.filter((supplier) => {
      const hitSearch =
        !query ||
        supplier.name.toLowerCase().includes(query) ||
        supplier.location.toLowerCase().includes(query) ||
        supplier.description.toLowerCase().includes(query) ||
        supplier.website?.toLowerCase().includes(query) ||
        supplier.products.some((product) =>
          product.toLowerCase().includes(query),
        ) ||
        supplier.processList.some((process) =>
          process.toLowerCase().includes(query),
        ) ||
        supplier.certifications.some((certificationItem) =>
          certificationItem.toLowerCase().includes(query),
        ) ||
        supplier.capabilities.some((capabilityItem) =>
          capabilityItem.toLowerCase().includes(query),
        ) ||
        supplier.standardsSupported.some((standard) =>
          standard.toLowerCase().includes(query),
        );
      const hitCat = cat === "all" || supplier.category === cat;
      const hitRegion =
        region === ALL_REGIONS_TOKEN ||
        (supplier.location && supplier.location.includes(region));
      const certificationRule = CERTIFICATION_FILTERS.find(
        (item) => item.id === certification,
      );
      const hitCertification =
        !certificationRule ||
        supplier.certifications.some((item) =>
          certificationRule.pattern.test(item),
        );
      const hitProfileStatus =
        profileStatus === "all" ||
        (profileStatus === "published" && supplier.profilePublished) ||
        (profileStatus === "verified" && supplier.verified);
      const hitCapability = supplierMatchesCapability(capability, [
        supplier.name,
        supplier.category,
        supplier.location,
        supplier.description,
        supplier.products,
        supplier.processList,
        supplier.certifications,
        supplier.capabilities,
        supplier.standardsSupported,
      ]);
      const hitReadiness =
        readiness === "all" ||
        (readiness === "export" && supplier.exportReady) ||
        (readiness === "standards" && supplier.standardsSupported.length > 0) ||
        (readiness === "commercial" &&
          supplier.moqKg !== null &&
          supplier.leadTimeDays !== null);
      return (
        hitSearch &&
        hitCat &&
        hitRegion &&
        hitCertification &&
        hitProfileStatus &&
        hitCapability &&
        hitReadiness
      );
    });
  }, [
    suppliers,
    deferredSearch,
    cat,
    region,
    certification,
    profileStatus,
    capability,
    readiness,
  ]);

  const sortedFiltered = useMemo(() => {
    const rows = [...filtered];
    if (sort === "name") return rows.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "founded") {
      return rows.sort((a, b) => (b.established ?? 0) - (a.established ?? 0));
    }
    if (sort === "verified") {
      return rows.sort(
        (a, b) =>
          Number(b.verified) - Number(a.verified) ||
          Number(b.profilePublished) - Number(a.profilePublished) ||
          a.name.localeCompare(b.name),
      );
    }
    return rows;
  }, [filtered, sort]);

  const totalPages = Math.max(
    1,
    Math.ceil(sortedFiltered.length / SUPPLIER_RESULTS_PAGE_SIZE),
  );
  const currentPage = Math.min(page, totalPages);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (search.trim()) params.set("q", search.trim());
    else params.delete("q");
    if (cat !== "all") params.set("category", cat);
    else params.delete("category");
    if (region !== ALL_REGIONS_TOKEN) params.set("region", region);
    else params.delete("region");
    if (certification !== "all") {
      params.set("certification", certification);
    } else {
      params.delete("certification");
    }
    if (profileStatus !== "all") params.set("profile", profileStatus);
    else params.delete("profile");
    if (capability) params.set("capability", capability);
    else params.delete("capability");
    if (readiness !== "all") params.set("readiness", readiness);
    else params.delete("readiness");
    if (sort !== "recommended") params.set("sort", sort);
    else params.delete("sort");
    if (currentPage > 1) params.set("page", String(currentPage));
    else params.delete("page");
    const query = params.toString();
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`,
    );
  }, [
    search,
    cat,
    region,
    certification,
    profileStatus,
    capability,
    readiness,
    sort,
    currentPage,
  ]);

  const paginated = useMemo(
    () =>
      sortedFiltered.slice(
        (currentPage - 1) * SUPPLIER_RESULTS_PAGE_SIZE,
        currentPage * SUPPLIER_RESULTS_PAGE_SIZE,
      ),
    [sortedFiltered, currentPage],
  );
  const pageItems = paginationItems(currentPage, totalPages);
  const compareItems = useMemo(
    () =>
      selectedIds
        .map((id) => suppliers.find((supplier) => supplier.id === id))
        .filter(
          (supplier): supplier is SerializedSupplier => Boolean(supplier),
        ),
    [selectedIds, suppliers],
  );

  const changePage = (nextPage: number) => {
    setPage(Math.min(Math.max(nextPage, 1), totalPages));
    requestAnimationFrame(() => {
      listTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const toggleSelect = (id: string) => {
    setSelectedIds((current) => {
      if (current.includes(id)) return current.filter((item) => item !== id);
      if (current.length >= COMPARE_MAX) return current;
      return [...current, id];
    });
  };

  const hasActiveFilters = Boolean(
    search.trim() ||
      cat !== "all" ||
      region !== ALL_REGIONS_TOKEN ||
      certification !== "all" ||
      profileStatus !== "all" ||
      capability ||
      readiness !== "all",
  );

  const clearFilters = () => {
    setSearch("");
    setCat("all");
    setRegion(ALL_REGIONS_TOKEN);
    setCertification("all");
    setProfileStatus("all");
    setCapability("");
    setReadiness("all");
    setSort("recommended");
    setPage(1);
  };

  const catStats = useMemo(() => {
    const stats: Record<string, number> = {};
    suppliers.forEach((supplier) => {
      if (supplier.category) {
        stats[supplier.category] = (stats[supplier.category] || 0) + 1;
      }
    });
    return stats;
  }, [suppliers]);

  const getCatName = (id: string) => {
    const category = categories.find((item) => item.id === id);
    return category ? category.name : id;
  };

  const getProductTags = (supplier: SerializedSupplier) => {
    const tags = Array.from(
      new Set(supplier.products.map((item) => item.trim()).filter(Boolean)),
    ).slice(0, PRODUCT_TAG_COUNT);
    const category = getCatName(supplier.category);
    if (tags.length < PRODUCT_TAG_COUNT && category && !tags.includes(category)) {
      tags.push(category);
    }
    while (tags.length < PRODUCT_TAG_COUNT) tags.push(t("notDisclosed"));
    return tags;
  };

  const getMatchReasons = (supplier: SerializedSupplier) => {
    const query = deferredSearch.trim().toLowerCase();
    const reasons: string[] = [];
    if (selectedCapability) reasons.push(selectedCapability.label);
    if (query) {
      if (supplier.products.some((item) => item.toLowerCase().includes(query))) reasons.push("Product match");
      else if (supplier.processList.some((item) => item.toLowerCase().includes(query))) reasons.push("Process match");
      else if (supplier.standardsSupported.some((item) => item.toLowerCase().includes(query))) reasons.push("Standard match");
      else if (supplier.certifications.some((item) => item.toLowerCase().includes(query))) reasons.push("Certification match");
      else if (supplier.name.toLowerCase().includes(query)) reasons.push("Company match");
    }
    if (readiness === "export" && supplier.exportReady) reasons.push("Export ready");
    if (readiness === "standards" && supplier.standardsSupported.length) reasons.push("Standards documented");
    if (readiness === "commercial" && supplier.moqKg !== null && supplier.leadTimeDays !== null) reasons.push("Commercial terms available");
    return Array.from(new Set(reasons)).slice(0, 2);
  };

  const filterControls = layout === "sidebar" ? (
    <aside
      aria-label="Supplier filters"
      className="self-start rounded-xl border border-border/80 bg-muted/20 p-4 lg:sticky lg:top-24 lg:col-start-1 lg:row-span-3 lg:row-start-1"
    >
      <div className="flex items-center justify-between gap-3 border-b border-border/70 pb-3">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <SlidersHorizontal size={15} className="text-[#0a756f]" />
          Filters
        </div>
        {hasActiveFilters && (
          <Button
            type="button"
            variant="ghost"
            size="xs"
            onClick={clearFilters}
          >
            Clear all
          </Button>
        )}
      </div>

      <div className="mt-4 space-y-4">
        {selectedCapability && (
          <div className="rounded-lg border border-[#0a756f]/25 bg-[#0a756f]/5 p-3">
            <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#0a756f]">
              Capability filter
            </div>
            <div className="mt-1 text-sm font-semibold">
              {selectedCapability.label}
            </div>
            <p className="mt-1 line-clamp-3 text-xs leading-5 text-muted-foreground">
              {selectedCapability.description}
            </p>
            <Button
              type="button"
              variant="ghost"
              size="xs"
              onClick={() => {
                setCapability("");
                setPage(1);
              }}
              className="mt-2 px-0 text-[#0a756f] hover:bg-transparent"
            >
              <X />
              Clear capability
            </Button>
          </div>
        )}

        <label className="block space-y-1.5 text-xs font-medium">
          {t("typeLabel")}
          <select
            value={cat}
            onChange={(event) => {
              setCat(event.target.value);
              setPage(1);
            }}
            className="h-8 w-full rounded-lg border border-input bg-background px-2.5 text-sm font-normal outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <option value="all">{t("all")}</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
                {catStats[category.id] ? ` (${catStats[category.id]})` : ""}
              </option>
            ))}
          </select>
        </label>

        <label className="block space-y-1.5 text-xs font-medium">
          {t("regionLabel")}
          <select
            value={region}
            onChange={(event) => {
              setRegion(event.target.value);
              setPage(1);
            }}
            className="h-8 w-full rounded-lg border border-input bg-background px-2.5 text-sm font-normal outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <option value={ALL_REGIONS_TOKEN}>{t("allRegions")}</option>
            {provinces.map((province) => (
              <option key={province} value={province}>
                {province}
              </option>
            ))}
          </select>
        </label>

        <label className="block space-y-1.5 text-xs font-medium">
          Certification
          <select
            value={certification}
            onChange={(event) => {
              setCertification(event.target.value);
              setPage(1);
            }}
            className="h-8 w-full rounded-lg border border-input bg-background px-2.5 text-sm font-normal outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <option value="all">Any certification</option>
            {CERTIFICATION_FILTERS.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </label>

        <label className="block space-y-1.5 text-xs font-medium">
          Profile status
          <select
            value={profileStatus}
            onChange={(event) => {
              setProfileStatus(event.target.value);
              setPage(1);
            }}
            className="h-8 w-full rounded-lg border border-input bg-background px-2.5 text-sm font-normal outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <option value="all">All records</option>
            <option value="published">Company profile available</option>
            <option value="verified">Verified business</option>
          </select>
        </label>

        <label className="block space-y-1.5 text-xs font-medium">
          Buyer readiness
          <select
            value={readiness}
            onChange={(event) => {
              setReadiness(event.target.value as ReadinessFilter);
              setPage(1);
            }}
            className="h-8 w-full rounded-lg border border-input bg-background px-2.5 text-sm font-normal outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <option value="all">Any readiness</option>
            <option value="export">Export ready</option>
            <option value="standards">Standards documented</option>
            <option value="commercial">MOQ and lead time available</option>
          </select>
        </label>
      </div>
    </aside>
  ) : (
    <div className="mb-6 space-y-3">
      {selectedCapability && (
        <div className="flex flex-col gap-3 rounded-lg border border-[#0a756f]/25 bg-[#0a756f]/5 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#0a756f]">
              Capability filter
            </div>
            <div className="mt-1 font-semibold">{selectedCapability.label}</div>
            <p className="mt-1 text-sm text-muted-foreground">
              {selectedCapability.description}
            </p>
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => {
              setCapability("");
              setPage(1);
            }}
            className="shrink-0"
          >
            <X />
            Clear capability
          </Button>
        </div>
      )}
      <Input
        list="supplier-search-suggestions-inline"
        placeholder={t("searchPlaceholder")}
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
          setPage(1);
        }}
        className="sm:max-w-lg"
      />
      <datalist id="supplier-search-suggestions-inline">
        {searchSuggestions.map((suggestion) => <option key={suggestion} value={suggestion} />)}
      </datalist>
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium">{t("typeLabel")}</span>
        <Badge
          variant={cat === "all" ? "default" : "outline"}
          className="cursor-pointer px-3 py-1"
          onClick={() => {
            setCat("all");
            setPage(1);
          }}
        >
          {t("all")}
        </Badge>
        {categories.map((category) => (
          <Badge
            key={category.id}
            variant={cat === category.id ? "default" : "outline"}
            className="cursor-pointer px-3 py-1"
            onClick={() => {
              setCat(category.id);
              setPage(1);
            }}
          >
            {category.name}
            {catStats[category.id] ? ` (${catStats[category.id]})` : ""}
          </Badge>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium">{t("regionLabel")}</span>
        <Badge
          variant={region === ALL_REGIONS_TOKEN ? "default" : "outline"}
          className="cursor-pointer px-3 py-1"
          onClick={() => {
            setRegion(ALL_REGIONS_TOKEN);
            setPage(1);
          }}
        >
          {t("allRegions")}
        </Badge>
        {provinces.map((province) => (
          <Badge
            key={province}
            variant={region === province ? "default" : "outline"}
            className="cursor-pointer px-3 py-1"
            onClick={() => {
              setRegion(province);
              setPage(1);
            }}
          >
            {province}
          </Badge>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-3 pt-1">
        <label className="flex items-center gap-2 text-sm font-medium">
          Certification
          <select
            value={certification}
            onChange={(event) => {
              setCertification(event.target.value);
              setPage(1);
            }}
            className="rounded-md border border-border bg-background px-2.5 py-1.5 text-sm font-normal"
          >
            <option value="all">Any certification</option>
            {CERTIFICATION_FILTERS.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
        <label className="flex items-center gap-2 text-sm font-medium">
          Buyer readiness
          <select
            value={readiness}
            onChange={(event) => {
              setReadiness(event.target.value as ReadinessFilter);
              setPage(1);
            }}
            className="rounded-md border border-border bg-background px-2.5 py-1.5 text-sm font-normal"
          >
            <option value="all">Any readiness</option>
            <option value="export">Export ready</option>
            <option value="standards">Standards documented</option>
            <option value="commercial">MOQ and lead time available</option>
          </select>
        </label>
        <label className="flex items-center gap-2 text-sm font-medium">
          Profile status
          <select
            value={profileStatus}
            onChange={(event) => {
              setProfileStatus(event.target.value);
              setPage(1);
            }}
            className="rounded-md border border-border bg-background px-2.5 py-1.5 text-sm font-normal"
          >
            <option value="all">All records</option>
            <option value="published">Company profile available</option>
            <option value="verified">Verified business</option>
          </select>
        </label>
      </div>
    </div>
  );

  return (
    <>
      <div
        className={cn(
          layout === "sidebar" &&
            "grid gap-5 lg:grid-cols-[15rem_minmax(0,1fr)] lg:items-start lg:gap-x-8 lg:gap-y-4",
        )}
      >
        {layout === "sidebar" && (
          <header className="min-w-0 border-b border-border/70 pb-5 lg:col-start-2 lg:row-start-1">
            <Link
              href={"/suppliers" as never}
              className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft size={13} />
              Browse supplier categories
            </Link>
            <div className="mt-4 min-w-0">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#0a756f]">
                Live supplier search
              </div>
              <h1 className="mt-1.5 text-3xl font-semibold tracking-tight lg:whitespace-nowrap">
                Find, evaluate and compare China FRP suppliers
              </h1>
            </div>
          </header>
        )}

        {layout === "sidebar" && (
          <label className="block min-w-0 lg:col-start-2 lg:row-start-2">
            <span className="sr-only">Search suppliers</span>
            <Input
              data-supplier-search=""
              list="supplier-search-suggestions"
              aria-label="Search suppliers"
              placeholder={t("searchPlaceholder")}
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setPage(1);
              }}
              className="h-10 bg-background px-3 text-base md:text-sm"
            />
            <datalist id="supplier-search-suggestions">
              {searchSuggestions.map((suggestion) => <option key={suggestion} value={suggestion} />)}
            </datalist>
          </label>
        )}

        {filterControls}

        <div
          className={cn(
            "min-w-0",
            layout === "sidebar" && "lg:col-start-2 lg:row-start-3",
          )}
        >
          <div
            ref={listTopRef}
            className="mb-4 flex scroll-mt-20 flex-wrap items-center justify-between gap-2 text-sm text-muted-foreground"
          >
            <span>
              {t("resultCount", {
                filtered: filtered.length,
                total: suppliers.length,
              })}
            </span>
            <div className="flex items-center gap-2">
              <label htmlFor="supplier-sort" className="text-xs font-medium text-foreground">Sort</label>
              <select
                id="supplier-sort"
                value={sort}
                onChange={(event) => {
                  setSort(event.target.value as SortMode);
                  setPage(1);
                }}
                className="h-8 rounded-md border bg-background px-2 text-xs"
              >
                <option value="recommended">Recommended</option>
                <option value="verified">Verified first</option>
                <option value="name">Company name</option>
                <option value="founded">Newest founded</option>
              </select>
              <span className="hidden sm:inline">{t("compareHint")}</span>
            </div>
          </div>

          {filtered.length === 0 ? (
            <Card>
              <CardContent className="py-16 text-center text-muted-foreground">
                {t("noResults")}
              </CardContent>
            </Card>
          ) : (
            <>
              <div className="space-y-3">
                {paginated.map((supplier) => {
              const selected = selectedIds.includes(supplier.id);
              const productTags = getProductTags(supplier);
              const matchReasons = getMatchReasons(supplier);
              const selectionDisabled =
                !selected && selectedIds.length >= COMPARE_MAX;

              return (
                <Card
                  key={supplier.id}
                  id={supplier.id}
                  data-supplier-card=""
                  className={cn(
                    "scroll-mt-20 py-0 [content-visibility:auto] [contain-intrinsic-size:288px] transition-colors hover:border-primary/50 lg:min-h-[18rem]",
                    selected && "border-primary ring-1 ring-primary/20",
                  )}
                >
                  <CardContent className="grid h-full min-h-0 grid-cols-[5rem_minmax(0,1fr)] grid-rows-[minmax(0,1fr)_auto] gap-4 p-4 lg:grid-cols-[7rem_minmax(0,1fr)_10.5rem] lg:grid-rows-1 lg:gap-5 lg:p-5">
                    <SupplierLogo src={supplier.logo} name={supplier.name} />

                    <div className="min-w-0 overflow-hidden">
                      <div className="flex min-h-11 items-start gap-2">
                        <div className="min-w-0 flex-1">
                          <Link
                            href={`/suppliers/${supplier.slug}` as never}
                            className="group inline-flex max-w-full items-start gap-1.5 font-semibold leading-5 hover:text-primary"
                          >
                            <span className="line-clamp-2">{supplier.name}</span>
                            <ArrowRight
                              size={13}
                              className="mt-1 shrink-0 transition-transform group-hover:translate-x-0.5"
                            />
                          </Link>
                          <div className="mt-1 truncate text-xs text-muted-foreground">
                            {supplier.location || t("notDisclosed")}
                          </div>
                        </div>
                        <div className="flex shrink-0 flex-col items-end gap-1">
                          {supplier.sponsored && supplier.verified && (
                            <Badge className="border border-amber-300 bg-amber-50 text-amber-900 shadow-none hover:bg-amber-50">
                              {t("sponsoredVerified")}
                            </Badge>
                          )}
                          {supplier.verified && !supplier.sponsored && (
                            <Badge variant="signal">{t("verified")}</Badge>
                          )}
                        </div>
                      </div>

                      <div className="mt-3 grid grid-cols-2 gap-y-3 sm:grid-cols-4 sm:gap-y-0">
                        <Metric
                          label="Process"
                          value={supplier.processList[0] || t("notDisclosed")}
                        />
                        <Metric
                          label="Standard"
                          value={supplier.standardsSupported[0] || supplier.certifications[0] || t("notDisclosed")}
                        />
                        <Metric
                          label="MOQ"
                          value={supplier.moqKg !== null ? `${supplier.moqKg.toLocaleString()} kg` : t("notDisclosed")}
                        />
                        <Metric
                          label="Lead time"
                          value={supplier.leadTimeDays !== null ? `${supplier.leadTimeDays} days` : t("notDisclosed")}
                        />
                      </div>

                      <p
                        title={supplier.description || t("notDisclosed")}
                        className="mt-3 min-h-10 line-clamp-2 text-sm leading-5 text-muted-foreground"
                      >
                        {supplier.description || t("notDisclosed")}
                      </p>

                      <div className="mt-3">
                        <div className="mb-1.5 text-[10px] uppercase tracking-[0.08em] text-muted-foreground">
                          {t("productCategories")}
                        </div>
                        <div className="grid grid-cols-3 gap-1">
                          {productTags.map((tag, index) => (
                            <Badge
                              key={`${tag}-${index}`}
                              variant="secondary"
                              className="w-full min-w-0 justify-start"
                              title={tag}
                            >
                              <span className="truncate">{tag}</span>
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {matchReasons.length > 0 && (
                        <div className="mt-2 flex flex-wrap items-center gap-1.5">
                          <span className="text-[10px] uppercase tracking-[0.08em] text-muted-foreground">Why matched</span>
                          {matchReasons.map((reason) => (
                            <Badge key={reason} variant="outline" className="border-[#0a756f]/30 bg-[#0a756f]/5 text-[10px] text-[#08645f]">
                              {reason}
                            </Badge>
                          ))}
                        </div>
                      )}

                      <div className="mt-3 flex min-w-0 items-center gap-2 text-xs">
                        <span className="shrink-0 text-muted-foreground">
                          {t("website")}
                        </span>
                        {supplier.website ? (
                          <a
                            href={supplier.website}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="flex min-w-0 items-center gap-1 font-medium text-primary hover:underline"
                          >
                            <span className="truncate">
                              {websiteLabel(supplier.website)}
                            </span>
                            <ExternalLink size={12} className="shrink-0" />
                          </a>
                        ) : (
                          <span className="truncate text-muted-foreground">
                            {t("notDisclosed")}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="col-span-2 grid grid-cols-2 gap-2 border-t border-border/70 pt-3 lg:col-span-1 lg:col-start-3 lg:row-start-1 lg:flex lg:flex-col lg:border-l lg:border-t-0 lg:pl-4 lg:pt-0">
                      <SaveButton
                        key={`${supplier.id}-${savedSupplierIds.has(supplier.id)}`}
                        sourceType="supplier"
                        sourceId={supplier.id}
                        title={supplier.name}
                        url={`/suppliers/${supplier.slug}`}
                        initialSaved={savedSupplierIds.has(supplier.id)}
                        signedIn={signedIn}
                        className="[&_button]:w-full"
                      />
                      <Button
                        type="button"
                        size="sm"
                        variant={selected ? "default" : "outline"}
                        disabled={selectionDisabled}
                        aria-pressed={selected}
                        aria-label={
                          selected
                            ? t("removeCompany", { name: supplier.name })
                            : t("selectCompany", { name: supplier.name })
                        }
                        title={selectionDisabled ? t("compareLimit") : undefined}
                        onClick={() => toggleSelect(supplier.id)}
                        className="w-full"
                      >
                        {selected ? <Check /> : <GitCompareArrows />}
                        {selected ? t("selected") : t("select")}
                      </Button>
                      <Link
                        href={`/rfq?supplier=${encodeURIComponent(supplier.id)}` as never}
                        className={buttonVariants({
                          size: "sm",
                          className: "w-full",
                        })}
                      >
                        Add to RFQ
                        <ArrowRight />
                      </Link>
                      <Link
                        href={`/suppliers/${supplier.slug}` as never}
                        className={buttonVariants({
                          variant: "ghost",
                          size: "sm",
                          className: "w-full",
                        })}
                      >
                        {t("viewProfile")}
                        <ArrowRight />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
                })}
              </div>

              {totalPages > 1 && (
                <nav
              aria-label={t("paginationLabel")}
              className="mt-8 flex flex-wrap items-center justify-center gap-2"
            >
              <Button
                type="button"
                variant="outline"
                size="sm"
                disabled={currentPage === 1}
                onClick={() => changePage(currentPage - 1)}
              >
                {t("previousPage")}
              </Button>

              {pageItems.map((item) =>
                typeof item === "number" ? (
                  <Button
                    key={item}
                    type="button"
                    variant={item === currentPage ? "default" : "outline"}
                    size="sm"
                    aria-current={item === currentPage ? "page" : undefined}
                    aria-label={t("pageStatus", {
                      page: item,
                      total: totalPages,
                    })}
                    onClick={() => changePage(item)}
                    className="min-w-9"
                  >
                    {item}
                  </Button>
                ) : (
                  <span
                    key={item}
                    aria-hidden="true"
                    className="px-1 text-sm text-muted-foreground"
                  >
                    …
                  </span>
                ),
              )}

              <Button
                type="button"
                variant="outline"
                size="sm"
                disabled={currentPage === totalPages}
                onClick={() => changePage(currentPage + 1)}
              >
                {t("nextPage")}
              </Button>

              <span className="ml-1 text-xs text-muted-foreground">
                {t("pageStatus", {
                  page: currentPage,
                  total: totalPages,
                })}
              </span>
                </nav>
              )}
            </>
          )}
        </div>
      </div>

      {selectedIds.length > 0 && (
        <div className="fixed bottom-4 left-1/2 z-40 w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 rounded-xl border border-border bg-background/95 px-3 py-2 shadow-lg backdrop-blur sm:px-4">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <div className="text-sm font-semibold">
                {t("selectedCount", {
                  count: selectedIds.length,
                  max: COMPARE_MAX,
                })}
              </div>
              <div className="truncate text-xs text-muted-foreground">
                {compareItems.map((supplier) => supplier.name).join(" · ")}
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-1">
              <Button
                type="button"
                size="sm"
                variant="ghost"
                onClick={() => setSelectedIds([])}
              >
                {t("clearSelection")}
              </Button>
              <Button
                type="button"
                size="sm"
                disabled={selectedIds.length < 2}
                onClick={() => setCompareOpen(true)}
              >
                <GitCompareArrows />
                {t("compare")}
              </Button>
            </div>
          </div>
        </div>
      )}

      <Sheet open={compareOpen} onOpenChange={setCompareOpen}>
        <SheetContent
          side="right"
          className="w-full max-w-6xl overflow-y-auto p-4 sm:p-6"
        >
          <SheetHeader className="px-0">
            <SheetTitle>{t("compareTitle")}</SheetTitle>
            <SheetDescription>
              {t("compareDescription", { count: compareItems.length })}
            </SheetDescription>
          </SheetHeader>

          {compareItems.length < 2 ? (
            <div className="py-10 text-center text-sm text-muted-foreground">
              {t("compareNeedTwo")}
            </div>
          ) : (
            <div className="mt-4 overflow-x-auto rounded-lg border border-border/70">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-36 min-w-36">
                      {t("comparisonField")}
                    </TableHead>
                    {compareItems.map((supplier) => (
                      <TableHead key={supplier.id} className="min-w-56 align-top">
                        <div className="flex items-start gap-3 py-2">
                          <SupplierLogo
                            src={supplier.logo}
                            name={supplier.name}
                            compact
                          />
                          <div className="min-w-0 flex-1">
                            <div className="line-clamp-2 font-semibold text-foreground">
                              {supplier.name}
                            </div>
                            {supplier.sponsored && supplier.verified && (
                              <Badge className="mt-1 border border-amber-300 bg-amber-50 text-amber-900 shadow-none hover:bg-amber-50">
                                {t("sponsoredVerified")}
                              </Badge>
                            )}
                            <button
                              type="button"
                              onClick={() => toggleSelect(supplier.id)}
                              className="mt-1 inline-flex items-center gap-1 text-xs font-normal text-muted-foreground hover:text-foreground"
                              aria-label={t("removeCompany", {
                                name: supplier.name,
                              })}
                            >
                              <X size={12} />
                              {t("remove")}
                            </button>
                          </div>
                        </div>
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      label: "Identity status",
                      value: (supplier: SerializedSupplier) =>
                        supplier.verified ? "GetFRP checked" : "Public record",
                    },
                    {
                      label: "Export readiness",
                      value: (supplier: SerializedSupplier) =>
                        supplier.exportReady ? "Export ready" : t("notDisclosed"),
                    },
                    {
                      label: "MOQ",
                      value: (supplier: SerializedSupplier) =>
                        supplier.moqKg !== null ? `${supplier.moqKg.toLocaleString()} kg` : t("notDisclosed"),
                    },
                    {
                      label: "Lead time",
                      value: (supplier: SerializedSupplier) =>
                        supplier.leadTimeDays !== null ? `${supplier.leadTimeDays} days` : t("notDisclosed"),
                    },
                    {
                      label: t("founded"),
                      value: (supplier: SerializedSupplier) =>
                        supplier.established
                          ? String(supplier.established)
                          : t("notDisclosed"),
                    },
                    {
                      label: t("location"),
                      value: (supplier: SerializedSupplier) =>
                        supplier.location || t("notDisclosed"),
                    },
                  ].map((row) => (
                    <TableRow key={row.label}>
                      <TableCell className="font-medium">{row.label}</TableCell>
                      {compareItems.map((supplier) => (
                        <TableCell key={supplier.id}>
                          {row.value(supplier)}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell className="font-medium align-top">Processes</TableCell>
                    {compareItems.map((supplier) => (
                      <TableCell key={supplier.id}>{supplier.processList.slice(0, 4).join(", ") || t("notDisclosed")}</TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium align-top">Supported standards</TableCell>
                    {compareItems.map((supplier) => (
                      <TableCell key={supplier.id}>{supplier.standardsSupported.slice(0, 4).join(", ") || t("notDisclosed")}</TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">{t("website")}</TableCell>
                    {compareItems.map((supplier) => (
                      <TableCell key={supplier.id}>
                        {supplier.website ? (
                          <a
                            href={supplier.website}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="inline-flex items-center gap-1 text-primary hover:underline"
                          >
                            {websiteLabel(supplier.website)}
                            <ExternalLink size={12} />
                          </a>
                        ) : (
                          t("notDisclosed")
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      {t("productCategories")}
                    </TableCell>
                    {compareItems.map((supplier) => (
                      <TableCell key={supplier.id}>
                        <div className="flex flex-wrap gap-1">
                          {getProductTags(supplier).map((tag, index) => (
                            <Badge
                              key={`${tag}-${index}`}
                              variant="secondary"
                              title={tag}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium align-top">
                      {t("summary")}
                    </TableCell>
                    {compareItems.map((supplier) => (
                      <TableCell
                        key={supplier.id}
                        className="max-w-72 align-top text-sm leading-5 text-muted-foreground"
                      >
                        {supplier.description || t("notDisclosed")}
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">{t("profile")}</TableCell>
                    {compareItems.map((supplier) => (
                      <TableCell key={supplier.id}>
                        <Link
                          href={`/suppliers/${supplier.slug}` as never}
                          className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
                        >
                          {t("viewProfile")}
                          <ArrowRight size={12} />
                        </Link>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}
