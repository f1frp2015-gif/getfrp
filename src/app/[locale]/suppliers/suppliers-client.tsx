"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { ArrowRight, Check, ExternalLink, GitCompareArrows, X } from "lucide-react";
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
import { provincesEn } from "@/lib/data/suppliers";
import { cn } from "@/lib/utils";

export type SerializedSupplier = {
  id: string;
  name: string;
  category: string;
  location: string;
  established: number | null;
  description: string;
  products: string[];
  processList: string[];
  certifications: string[];
  verified: boolean;
  profilePublished: boolean;
  enterpriseId: string | null;
  website: string | null;
  logo: string | null;
  scaleTier: string | null;
  employeeCount: string | null;
  annualRevenue: string | null;
};

type Opt = { id: string; name: string; nameEn?: string };
type PaginationItem = number | "start-ellipsis" | "end-ellipsis";

const ALL_REGIONS_TOKEN = "__all__";
const PAGE_SIZE = 20;
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
}: {
  suppliers: SerializedSupplier[];
  categories: Opt[];
  provinces: string[];
}) {
  const t = useTranslations("Suppliers");
  const locale = useLocale();
  const isEn = locale === "en";
  const optLabel = (option: Opt) =>
    isEn && option.nameEn ? option.nameEn : option.name;

  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("all");
  const [region, setRegion] = useState<string>(ALL_REGIONS_TOKEN);
  const [certification, setCertification] = useState("all");
  const [profileStatus, setProfileStatus] = useState("all");
  const [page, setPage] = useState(1);
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

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
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
      return (
        hitSearch &&
        hitCat &&
        hitRegion &&
        hitCertification &&
        hitProfileStatus
      );
    });
  }, [suppliers, search, cat, region, certification, profileStatus]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paginated = useMemo(
    () =>
      filtered.slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE,
      ),
    [filtered, currentPage],
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
    return category ? optLabel(category) : id;
  };

  const getScaleLabel = (tier: string | null) => {
    if (tier === "XL") return t("scaleXL");
    if (tier === "L") return t("scaleL");
    if (tier === "M") return t("scaleM");
    if (tier === "S") return t("scaleS");
    return t("notDisclosed");
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

  return (
    <>
      <div className="mb-6 space-y-3">
        <Input
          placeholder={t("searchPlaceholder")}
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
            setPage(1);
          }}
          className="sm:max-w-lg"
        />
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
              {optLabel(category)}
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
              {isEn ? (provincesEn[province] ?? province) : province}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <label className="flex items-center gap-2 text-sm font-medium">
            {isEn ? "Certification" : "认证"}
            <select
              value={certification}
              onChange={(event) => {
                setCertification(event.target.value);
                setPage(1);
              }}
              className="rounded-md border border-border bg-background px-2.5 py-1.5 text-sm font-normal"
            >
              <option value="all">
                {isEn ? "Any certification" : "全部认证"}
              </option>
              {CERTIFICATION_FILTERS.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>
          <label className="flex items-center gap-2 text-sm font-medium">
            {isEn ? "Profile status" : "档案状态"}
            <select
              value={profileStatus}
              onChange={(event) => {
                setProfileStatus(event.target.value);
                setPage(1);
              }}
              className="rounded-md border border-border bg-background px-2.5 py-1.5 text-sm font-normal"
            >
              <option value="all">
                {isEn ? "All records" : "全部档案"}
              </option>
              <option value="published">
                {isEn ? "Company profile available" : "有企业主页"}
              </option>
              <option value="verified">
                {isEn ? "Verified business" : "已认证企业"}
              </option>
            </select>
          </label>
        </div>
      </div>

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
        <span>{t("compareHint")}</span>
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
              const selectionDisabled =
                !selected && selectedIds.length >= COMPARE_MAX;

              return (
                <Card
                  key={supplier.id}
                  id={supplier.id}
                  className={cn(
                    "h-[25rem] scroll-mt-20 py-0 transition-colors hover:border-primary/50 sm:h-[22rem] lg:h-[17.5rem]",
                    selected && "border-primary ring-1 ring-primary/20",
                  )}
                >
                  <CardContent className="grid h-full min-h-0 grid-cols-[5rem_minmax(0,1fr)] grid-rows-[minmax(0,1fr)_auto] gap-4 p-4 lg:grid-cols-[7rem_minmax(0,1fr)_10.5rem] lg:grid-rows-1 lg:gap-5 lg:p-5">
                    <SupplierLogo src={supplier.logo} name={supplier.name} />

                    <div className="min-w-0 overflow-hidden">
                      <div className="flex min-h-11 items-start gap-2">
                        <div className="min-w-0 flex-1">
                          {supplier.profilePublished ? (
                            <Link
                              href={`/suppliers/${supplier.id}` as never}
                              className="group inline-flex max-w-full items-start gap-1.5 font-semibold leading-5 hover:text-primary"
                            >
                              <span className="line-clamp-2">{supplier.name}</span>
                              <ArrowRight
                                size={13}
                                className="mt-1 shrink-0 transition-transform group-hover:translate-x-0.5"
                              />
                            </Link>
                          ) : (
                            <h2 className="line-clamp-2 font-semibold leading-5">
                              {supplier.name}
                            </h2>
                          )}
                          <div className="mt-1 truncate text-xs text-muted-foreground">
                            {supplier.location || t("notDisclosed")}
                          </div>
                        </div>
                        {supplier.verified && (
                          <Badge variant="signal" className="shrink-0">
                            {t("verified")}
                          </Badge>
                        )}
                      </div>

                      <div className="mt-3 grid grid-cols-2 gap-y-3 sm:grid-cols-4 sm:gap-y-0">
                        <Metric
                          label={t("companySize")}
                          value={getScaleLabel(supplier.scaleTier)}
                        />
                        <Metric
                          label={t("annualRevenue")}
                          value={supplier.annualRevenue || t("notDisclosed")}
                        />
                        <Metric
                          label={t("employeeCount")}
                          value={supplier.employeeCount || t("notDisclosed")}
                        />
                        <Metric
                          label={t("founded")}
                          value={
                            supplier.established
                              ? String(supplier.established)
                              : t("notDisclosed")
                          }
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

                    <div className="col-span-2 grid grid-cols-2 gap-2 border-t border-border/70 pt-3 sm:grid-cols-3 lg:col-span-1 lg:col-start-3 lg:row-start-1 lg:flex lg:flex-col lg:border-l lg:border-t-0 lg:pl-4 lg:pt-0">
                      <SaveButton
                        key={`${supplier.id}-${savedSupplierIds.has(supplier.id)}`}
                        sourceType="supplier"
                        sourceId={supplier.id}
                        title={supplier.name}
                        url={`/suppliers/${supplier.id}`}
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
                      {supplier.profilePublished && (
                        <Link
                          href={`/suppliers/${supplier.id}` as never}
                          className={buttonVariants({
                            variant: "ghost",
                            size: "sm",
                            className: "w-full",
                          })}
                        >
                          {t("viewProfile")}
                          <ArrowRight />
                        </Link>
                      )}
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
                      label: t("companySize"),
                      value: (supplier: SerializedSupplier) =>
                        getScaleLabel(supplier.scaleTier),
                    },
                    {
                      label: t("annualRevenue"),
                      value: (supplier: SerializedSupplier) =>
                        supplier.annualRevenue || t("notDisclosed"),
                    },
                    {
                      label: t("employeeCount"),
                      value: (supplier: SerializedSupplier) =>
                        supplier.employeeCount || t("notDisclosed"),
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
                        {supplier.profilePublished ? (
                          <Link
                            href={`/suppliers/${supplier.id}` as never}
                            className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
                          >
                            {t("viewProfile")}
                            <ArrowRight size={12} />
                          </Link>
                        ) : (
                          t("notDisclosed")
                        )}
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
