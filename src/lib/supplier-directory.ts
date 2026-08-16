import { cache } from "react";
import { getPublicSupplierDirectory } from "@/lib/public-supplier-directory";
import { SUPPLIER_RESULTS_PAGE_SIZE } from "@/lib/supplier-directory-config";
import type { SerializedSupplier } from "@/lib/types/supplier-directory";

export const SUPPLIER_DIRECTORY_PAGE_SIZE = SUPPLIER_RESULTS_PAGE_SIZE;

export type SupplierDirectoryItem = SerializedSupplier;

export function supplierDirectoryPageCount(total: number): number {
  return total > 0 ? Math.ceil(total / SUPPLIER_DIRECTORY_PAGE_SIZE) : 0;
}

export function supplierDirectoryPath(page: number): `/suppliers/directory/${number}` {
  return `/suppliers/directory/${page}`;
}

export const getSupplierDirectoryCount = cache(async (): Promise<number> => {
  const suppliers = await getPublicSupplierDirectory("en");
  return suppliers.length;
});

export const getSupplierDirectoryPage = cache(async (page: number): Promise<{
  items: SupplierDirectoryItem[];
  total: number;
  pageCount: number;
}> => {
  if (!Number.isInteger(page) || page < 1) {
    return { items: [], total: 0, pageCount: 0 };
  }

  const suppliers = await getPublicSupplierDirectory("en");
  const total = suppliers.length;
  const offset = (page - 1) * SUPPLIER_DIRECTORY_PAGE_SIZE;
  const items = suppliers.slice(offset, offset + SUPPLIER_DIRECTORY_PAGE_SIZE);
  return { items, total, pageCount: supplierDirectoryPageCount(total) };
});
