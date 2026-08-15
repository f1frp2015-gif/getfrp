import { cache } from "react";
import { and, asc, desc, eq, sql } from "drizzle-orm";

import { db } from "@/lib/db";
import {
  products,
  supplierListings,
  supplierProductPages,
} from "@/lib/db/schema";
import { enrichSupplierWithCuratedProfile } from "@/lib/data/curated-supplier-profiles";
import { isSupplierProfileIndexable } from "@/lib/supplier-indexability";
import { supplierRouteSlug } from "@/lib/supplier-slugs";
import {
  englishOnlyList,
  englishOnlyRecord,
  englishOnlyText,
} from "@/lib/english-only";

export type PublicSupplierProduct = {
  id: string;
  slug: string;
  name: string;
  description: string;
  images: string[];
  material: string;
  manufacturingProcesses: string[];
  applications: string[];
  standards: string[];
  parameters: Record<string, string>;
  certifications: string[];
  moq: number | null;
  moqUnit: string | null;
  exportMarkets: string[];
  videoUrl: string | null;
  priceRange: string | null;
  approvedAt: Date | null;
  updatedAt: Date;
  category: { id: string; slug: string; name: string };
  supplier: {
    id: string;
    slug: string;
    name: string;
    location: string;
    verified: boolean;
    certifications: string[];
    logo: string | null;
  };
};

function normalize(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

let tableAvailability: Promise<boolean> | undefined;

export function supplierProductPagesAvailable(): Promise<boolean> {
  tableAvailability ??= (async () => {
    try {
      const rows = await db.execute(sql`select to_regclass('public.supplier_product_pages') as table_name`);
      return Boolean(((rows.rows ?? [])[0] as { table_name?: string | null } | undefined)?.table_name);
    } catch {
      return false;
    }
  })();
  return tableAvailability;
}

function rowToPublic(row: {
  page: typeof supplierProductPages.$inferSelect;
  product: typeof products.$inferSelect;
  supplier: typeof supplierListings.$inferSelect;
}): PublicSupplierProduct | null {
  const supplier = enrichSupplierWithCuratedProfile(row.supplier);
  if (!isSupplierProfileIndexable(supplier)) return null;
  return {
    id: row.page.id,
    slug: row.page.slug,
    name: englishOnlyText(row.page.name),
    description: englishOnlyText(row.page.description),
    images: row.page.images,
    material: englishOnlyText(row.page.material),
    manufacturingProcesses: englishOnlyList(row.page.manufacturingProcesses),
    applications: englishOnlyList(row.page.applications),
    standards: englishOnlyList(row.page.standards),
    parameters: englishOnlyRecord(row.page.parameters),
    certifications: englishOnlyList(row.page.certifications),
    moq: row.page.moq,
    moqUnit: row.page.moqUnit ? englishOnlyText(row.page.moqUnit) : null,
    exportMarkets: englishOnlyList(row.page.exportMarkets),
    videoUrl: row.page.videoUrl,
    priceRange: row.page.priceRange ? englishOnlyText(row.page.priceRange) : null,
    approvedAt: row.page.approvedAt,
    updatedAt: row.page.updatedAt,
    category: { id: row.product.id, slug: row.product.slug, name: row.product.nameEn },
    supplier: {
      id: supplier.id,
      slug: supplierRouteSlug(supplier),
      name: englishOnlyText(supplier.nameEn ?? "") || "Composite supplier",
      location: englishOnlyText(supplier.locationEn ?? "") || "China",
      verified: Boolean(supplier.verified),
      certifications: englishOnlyList(supplier.certificationsEn),
      logo: supplier.logo ?? null,
    },
  };
}

async function approvedRows() {
  return db
    .select({ page: supplierProductPages, product: products, supplier: supplierListings })
    .from(supplierProductPages)
    .innerJoin(products, eq(supplierProductPages.categoryId, products.id))
    .innerJoin(
      supplierListings,
      eq(supplierProductPages.supplierListingId, supplierListings.id),
    )
    .where(
      and(
        eq(supplierProductPages.status, "approved"),
        eq(supplierProductPages.isDemo, false),
      ),
    )
    .orderBy(desc(supplierProductPages.approvedAt), asc(supplierProductPages.name))
    .limit(2_000);
}

export const loadApprovedSupplierProducts = cache(
  async (filters: {
    category?: string;
    material?: string;
    process?: string;
    application?: string;
    standard?: string;
    supplierSlug?: string;
  } = {}): Promise<PublicSupplierProduct[]> => {
    try {
      if (!(await supplierProductPagesAvailable())) return [];
      const publicRows = (await approvedRows())
        .map(rowToPublic)
        .filter((row): row is PublicSupplierProduct => Boolean(row));
      const includes = (values: string[], wanted?: string) => {
        if (!wanted) return true;
        const needle = normalize(wanted);
        return values.some((value) => normalize(value).includes(needle));
      };
      return publicRows.filter((row) =>
        (!filters.category || row.category.slug === filters.category) &&
        (!filters.supplierSlug || row.supplier.slug === filters.supplierSlug) &&
        (!filters.material || normalize(row.material).includes(normalize(filters.material))) &&
        includes(row.manufacturingProcesses, filters.process) &&
        includes(row.applications, filters.application) &&
        includes(row.standards, filters.standard),
      );
    } catch {
      // The additive migration may not exist in an older preview database.
      // Never substitute synthetic products: an empty approved set is honest.
      return [];
    }
  },
);

export const loadApprovedSupplierProduct = cache(
  async (supplierSlug: string, productSlug: string): Promise<PublicSupplierProduct | null> => {
    const rows = await loadApprovedSupplierProducts({ supplierSlug });
    return rows.find((row) => row.slug === productSlug) ?? null;
  },
);

export async function loadApprovedProductSitemapRows() {
  const rows = await loadApprovedSupplierProducts();
  return rows.map((row) => ({
    slug: row.slug,
    updatedAt: row.updatedAt,
    supplierSlug: row.supplier.slug,
    supplierId: row.supplier.id,
  }));
}
