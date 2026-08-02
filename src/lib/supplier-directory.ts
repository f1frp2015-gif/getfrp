import { and, asc, count, isNotNull, ne } from "drizzle-orm";
import { cache } from "react";
import { db } from "@/lib/db";
import { supplierListings } from "@/lib/db/schema";
import { supplierRouteSlug } from "@/lib/supplier-slugs";

export const SUPPLIER_DIRECTORY_PAGE_SIZE = 24;

export type SupplierDirectoryItem = {
  slug: string;
  name: string;
  location: string | null;
  category: string | null;
  description: string | null;
  updatedAt: Date | null;
};

const publicSupplierWhere = and(
  isNotNull(supplierListings.slug),
  isNotNull(supplierListings.nameEn),
  ne(supplierListings.nameEn, ""),
);

export function supplierDirectoryPageCount(total: number): number {
  return total > 0 ? Math.ceil(total / SUPPLIER_DIRECTORY_PAGE_SIZE) : 0;
}

export function supplierDirectoryPath(page: number): `/suppliers/directory/${number}` {
  return `/suppliers/directory/${page}`;
}

export const getSupplierDirectoryCount = cache(async (): Promise<number> => {
  try {
    const [{ total = 0 } = { total: 0 }] = await db
      .select({ total: count() })
      .from(supplierListings)
      .where(publicSupplierWhere);
    return Number(total);
  } catch {
    return 0;
  }
});

export const getSupplierDirectoryPage = cache(async (page: number): Promise<{
  items: SupplierDirectoryItem[];
  total: number;
  pageCount: number;
}> => {
  if (!Number.isInteger(page) || page < 1) {
    return { items: [], total: 0, pageCount: 0 };
  }

  try {
    const [countRows, rows] = await Promise.all([
      db
        .select({ total: count() })
        .from(supplierListings)
        .where(publicSupplierWhere),
      db
        .select({
          id: supplierListings.id,
          slug: supplierListings.slug,
          name: supplierListings.nameEn,
          location: supplierListings.locationEn,
          category: supplierListings.category,
          description: supplierListings.descriptionEn,
          updatedAt: supplierListings.updatedAt,
        })
        .from(supplierListings)
        .where(publicSupplierWhere)
        .orderBy(asc(supplierListings.nameEn), asc(supplierListings.id))
        .limit(SUPPLIER_DIRECTORY_PAGE_SIZE)
        .offset((page - 1) * SUPPLIER_DIRECTORY_PAGE_SIZE),
    ]);
    const total = Number(countRows[0]?.total ?? 0);
    const items = rows.filter(
      (row): row is typeof row & { slug: string; name: string } =>
        Boolean(row.slug && row.name?.trim()),
    ).map((row) => ({
      ...row,
      slug: supplierRouteSlug({
        id: row.id,
        nameEn: row.name,
        slug: row.slug,
      }),
    }));
    return { items, total, pageCount: supplierDirectoryPageCount(total) };
  } catch {
    return { items: [], total: 0, pageCount: 0 };
  }
});
