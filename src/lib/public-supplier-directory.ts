import { cache } from "react";
import { and, eq, isNotNull, ne } from "drizzle-orm";
import { db } from "@/lib/db";
import {
  enterprises,
  supplierListings,
  type SupplierListing,
} from "@/lib/db/schema";
import {
  CURATED_SUPPLIER_PROFILES,
  enrichSupplierWithCuratedProfile,
} from "@/lib/data/curated-supplier-profiles";
import { F1_COMPOSITE_SUPPLIER_ID } from "@/lib/data/f1-composite-supplier-profile";
import { isSupplierProfileIndexable } from "@/lib/supplier-indexability";
import { supplierRouteSlug } from "@/lib/supplier-slugs";
import type { SerializedSupplier } from "@/lib/types/supplier-directory";

const PINNED_SUPPLIER_ID = F1_COMPOSITE_SUPPLIER_ID;
const SCALE_RANK: Record<string, number> = { XL: 4, L: 3, M: 2, S: 1 };

type PublicSupplierRow = {
  supplier: SupplierListing;
  enterpriseLogo: string | null;
  enterpriseWebsite: string | null;
  employeeCount: string | null;
  annualRevenue: string | null;
};

function supplierRank(row: PublicSupplierRow): [number, number, number, number, number, number] {
  const supplier = row.supplier;
  return [
    supplier.id === PINNED_SUPPLIER_ID ? 1 : 0,
    supplier.profilePublished ? 1 : 0,
    supplier.verified ? 1 : 0,
    supplier.brandPriority ?? 0,
    SCALE_RANK[supplier.scaleTier ?? ""] ?? 0,
    supplier.viewCount ?? 0,
  ];
}

function compareSupplierRows(a: PublicSupplierRow, b: PublicSupplierRow): number {
  const aRank = supplierRank(a);
  const bRank = supplierRank(b);
  for (let index = 0; index < aRank.length; index += 1) {
    const difference = bRank[index] - aRank[index];
    if (difference !== 0) return difference;
  }
  return a.supplier.name.localeCompare(b.supplier.name);
}

function serializeSupplierRow(
  row: PublicSupplierRow,
  locale: string,
): SerializedSupplier {
  const isEn = locale === "en";
  const { supplier } = row;
  return {
    id: supplier.id,
    slug: supplierRouteSlug(supplier),
    name: isEn ? supplier.nameEn ?? "" : supplier.name,
    category: supplier.category ?? "",
    location: isEn ? supplier.locationEn ?? "" : supplier.location ?? "",
    established: supplier.established ?? null,
    description: isEn ? supplier.descriptionEn ?? "" : supplier.description ?? "",
    products: (isEn ? supplier.productsEn ?? [] : supplier.products ?? []) as string[],
    processList: (isEn
      ? supplier.processListEn ?? []
      : supplier.processList ?? []) as string[],
    certifications: (isEn
      ? supplier.certificationsEn ?? []
      : supplier.certifications ?? []) as string[],
    verified: Boolean(supplier.verified),
    profilePublished: Boolean(supplier.profilePublished),
    enterpriseId: supplier.enterpriseId ?? null,
    website: supplier.website ?? row.enterpriseWebsite,
    logo: supplier.logo ?? row.enterpriseLogo,
    scaleTier: supplier.scaleTier ?? null,
    employeeCount: row.employeeCount,
    annualRevenue: row.annualRevenue,
    capabilities: supplier.capabilities ?? [],
    standardsSupported: supplier.standardsSupported ?? [],
    moqKg: supplier.moqKg ?? null,
    leadTimeDays: supplier.leadTimeDays ?? null,
    exportReady: supplier.exportReady,
    sponsored: supplier.id === PINNED_SUPPLIER_ID,
  };
}

export function mergePublicSupplierDirectory(
  databaseRows: PublicSupplierRow[],
  locale: string,
): SerializedSupplier[] {
  const enrichedDatabaseRows = databaseRows.map((row) => ({
    ...row,
    supplier: enrichSupplierWithCuratedProfile(row.supplier),
  }));
  const publicDatabaseRows = enrichedDatabaseRows.filter(({ supplier }) =>
    isSupplierProfileIndexable(supplier),
  );
  const databaseIds = new Set(
    publicDatabaseRows.map(({ supplier }) => supplier.id),
  );
  const databaseSlugs = new Set(
    publicDatabaseRows.map(({ supplier }) => supplierRouteSlug(supplier)),
  );
  const curatedFallbackRows = CURATED_SUPPLIER_PROFILES.flatMap(({ profile }) => {
    const slug = supplierRouteSlug(profile);
    if (
      !profile.profilePublished ||
      !profile.nameEn?.trim() ||
      databaseIds.has(profile.id) ||
      databaseSlugs.has(slug)
    ) {
      return [];
    }
    return [{
      supplier: profile,
      enterpriseLogo: null,
      enterpriseWebsite: null,
      employeeCount: null,
      annualRevenue: null,
    } satisfies PublicSupplierRow];
  });

  return [...publicDatabaseRows, ...curatedFallbackRows]
    .sort(compareSupplierRows)
    .map((row) => serializeSupplierRow(row, locale));
}

export const getPublicSupplierDirectory = cache(
  async (locale: string): Promise<SerializedSupplier[]> => {
    let joinedRows: PublicSupplierRow[] = [];
    try {
      joinedRows = await db
        .select({
          supplier: supplierListings,
          enterpriseLogo: enterprises.logo,
          enterpriseWebsite: enterprises.website,
          employeeCount: enterprises.employeeCount,
          annualRevenue: enterprises.annualRevenue,
        })
        .from(supplierListings)
        .leftJoin(enterprises, eq(supplierListings.enterpriseId, enterprises.id))
        .where(
          and(
            isNotNull(supplierListings.slug),
            isNotNull(supplierListings.nameEn),
            ne(supplierListings.nameEn, ""),
          ),
        );
    } catch (error) {
      console.warn(
        `[supplier-directory] database unavailable; serving curated profiles: ${
          error instanceof Error ? error.message : "unknown error"
        }`,
      );
    }

    return mergePublicSupplierDirectory(joinedRows, locale);
  },
);
