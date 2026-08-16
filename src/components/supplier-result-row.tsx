"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  ArrowRight,
  Building2,
  Check,
  ExternalLink,
  GitCompareArrows,
} from "lucide-react";

import { SaveButton } from "@/components/save-button";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export type SupplierResultSignal = {
  label: string;
  href?: string | null;
  className?: string;
};

export type SupplierResultEntry = {
  id: string;
  slug: string;
  name: string;
  location?: string | null;
  category?: string | null;
  description?: string | null;
  products?: string[];
  processList?: string[];
  certifications?: string[];
  standardsSupported?: string[];
  verified?: boolean;
  profilePublished?: boolean;
  website?: string | null;
  logo?: string | null;
  moqKg?: number | null;
  leadTimeDays?: number | null;
  sponsored?: boolean;
};

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

export function SupplierLogo({
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
        data-supplier-logo="fallback"
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
    // Supplier logos may include legacy company-managed URLs with unrestricted hosts.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={`${name} logo`}
      data-supplier-logo="image"
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

function productTags(supplier: SupplierResultEntry, fallback: string): string[] {
  const tags = Array.from(
    new Set((supplier.products ?? []).map((item) => item.trim()).filter(Boolean)),
  ).slice(0, 3);
  if (tags.length < 3 && supplier.category && !tags.includes(supplier.category)) {
    tags.push(supplier.category);
  }
  while (tags.length < 3) tags.push(fallback);
  return tags;
}

export function SupplierResultRow({
  supplier,
  tags,
  signals = [],
  selected = false,
  selectionDisabled = false,
  onToggleSelect,
  initialSaved = false,
  signedIn = false,
  showSave = false,
  showDefaultActions = true,
  primaryActionHref,
  primaryActionLabel,
  className,
}: {
  supplier: SupplierResultEntry;
  tags?: string[];
  signals?: SupplierResultSignal[];
  selected?: boolean;
  selectionDisabled?: boolean;
  onToggleSelect?: () => void;
  initialSaved?: boolean;
  signedIn?: boolean;
  showSave?: boolean;
  showDefaultActions?: boolean;
  primaryActionHref?: string;
  primaryActionLabel?: string;
  className?: string;
}) {
  const t = useTranslations("Suppliers");
  const visibleTags: string[] = tags?.length
    ? tags.slice(0, 3)
    : productTags(supplier, t("notDisclosed"));
  while (visibleTags.length < 3) visibleTags.push(t("notDisclosed"));
  const showVerificationBadge =
    Boolean(supplier.profilePublished) && Boolean(supplier.verified);
  const logo = supplier.profilePublished ? supplier.logo ?? null : null;
  const supplierId = supplier.id || supplier.slug;

  return (
    <Card
      id={supplierId}
      data-supplier-card=""
      data-profile-published={supplier.profilePublished ? "true" : "false"}
      className={cn(
        "scroll-mt-20 py-0 [content-visibility:auto] [contain-intrinsic-size:288px] transition-colors hover:border-primary/50 lg:min-h-[18rem]",
        selected && "border-primary ring-1 ring-primary/20",
        className,
      )}
    >
      <CardContent className="grid h-full min-h-0 grid-cols-[5rem_minmax(0,1fr)] grid-rows-[minmax(0,1fr)_auto] gap-4 p-4 lg:grid-cols-[7rem_minmax(0,1fr)_10.5rem] lg:grid-rows-1 lg:gap-5 lg:p-5">
        <SupplierLogo src={logo} name={supplier.name} />

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
              {supplier.sponsored && showVerificationBadge && (
                <Badge className="border border-amber-300 bg-amber-50 text-amber-900 shadow-none hover:bg-amber-50">
                  {t("sponsoredVerified")}
                </Badge>
              )}
              {showVerificationBadge && !supplier.sponsored && (
                <Badge variant="signal">{t("verified")}</Badge>
              )}
            </div>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-y-3 sm:grid-cols-4 sm:gap-y-0">
            <Metric
              label="Process"
              value={supplier.processList?.[0] || t("notDisclosed")}
            />
            <Metric
              label="Standard"
              value={
                supplier.standardsSupported?.[0] ||
                supplier.certifications?.[0] ||
                t("notDisclosed")
              }
            />
            <Metric
              label="MOQ"
              value={
                supplier.moqKg !== null && supplier.moqKg !== undefined
                  ? `${supplier.moqKg.toLocaleString()} kg`
                  : t("notDisclosed")
              }
            />
            <Metric
              label="Lead time"
              value={
                supplier.leadTimeDays !== null &&
                supplier.leadTimeDays !== undefined
                  ? `${supplier.leadTimeDays} days`
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
              {visibleTags.map((tag, index) => (
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

          {signals.length > 0 && (
            <div className="mt-2 flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] uppercase tracking-[0.08em] text-muted-foreground">
                Why matched
              </span>
              {signals.map((signal, index) => (
                <Badge
                  key={`${signal.label}-${index}`}
                  variant="outline"
                  className={cn(
                    "h-auto max-w-full whitespace-normal break-words border-[#123f8c]/30 bg-[#123f8c]/5 text-[10px] text-[#0a1f44]",
                    signal.className,
                  )}
                >
                  {signal.href ? (
                    <a
                      href={signal.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1"
                    >
                      {signal.label}
                      <ExternalLink size={10} className="shrink-0" />
                    </a>
                  ) : (
                    signal.label
                  )}
                </Badge>
              ))}
            </div>
          )}

          <div className="mt-3 flex min-w-0 items-center gap-2 text-xs">
            <span className="shrink-0 text-muted-foreground">{t("website")}</span>
            {supplier.website ? (
              <a
                href={supplier.website}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="flex min-w-0 items-center gap-1 font-medium text-primary hover:underline"
              >
                <span className="truncate">{websiteLabel(supplier.website)}</span>
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
          {showSave && (
            <SaveButton
              key={`${supplierId}-${initialSaved}`}
              sourceType="supplier"
              sourceId={supplierId}
              title={supplier.name}
              url={`/suppliers/${supplier.slug}`}
              initialSaved={initialSaved}
              signedIn={signedIn}
              className="[&_button]:w-full"
            />
          )}
          {onToggleSelect && (
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
              onClick={onToggleSelect}
              className="w-full"
            >
              {selected ? <Check /> : <GitCompareArrows />}
              {selected ? t("selected") : t("select")}
            </Button>
          )}
          {showDefaultActions && (
            <>
              <Link
                href={`/rfq?supplier=${encodeURIComponent(supplierId)}` as never}
                className={buttonVariants({ size: "sm", className: "w-full" })}
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
              <Link
                href={`/suppliers/claim?supplier=${encodeURIComponent(supplier.slug)}` as never}
                prefetch={false}
                className={buttonVariants({
                  variant: "secondary",
                  size: "sm",
                  className: "w-full",
                })}
              >
                <Building2 />
                {t("claimYourCompany")}
              </Link>
            </>
          )}
          {primaryActionHref && primaryActionLabel && (
            <Link
              href={primaryActionHref as never}
              className={buttonVariants({ size: "sm", className: "w-full" })}
            >
              {primaryActionLabel}
              <ArrowRight />
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
