import type { SupplierListing } from "@/lib/db/schema";
import { CURATED_SUPPLIER_PROFILES } from "@/lib/data/curated-supplier-profiles";
import {
  getPublicSupplierRows,
  type PublicSupplierRow,
} from "@/lib/public-supplier-directory";
import { firstRfqSearchParam } from "@/lib/rfq-links";

export type RfqTargetSupplier = {
  id: string;
  name: string;
  verified: boolean;
  enterpriseId: string | null;
};

type LoadPublicSupplierRows = () => Promise<PublicSupplierRow[]>;

function matchesSupplier(supplier: SupplierListing, requested: string): boolean {
  const normalizedRequested = requested.toLocaleLowerCase("en");
  return [supplier.id, supplier.slug, supplier.nameEn]
    .filter((value): value is string => Boolean(value?.trim()))
    .some(
      (value) => value.trim().toLocaleLowerCase("en") === normalizedRequested,
    );
}

function toRfqTargetSupplier(
  supplier: SupplierListing,
): RfqTargetSupplier | null {
  const name = supplier.nameEn?.trim();
  if (!supplier.profilePublished || !name) return null;

  return {
    id: supplier.id,
    name,
    verified: Boolean(supplier.verified),
    enterpriseId: supplier.enterpriseId ?? null,
  };
}

/**
 * Resolve an optional supplier target without making RFQ navigation depend on
 * database availability. Most public profiles are Git-backed, so check those
 * first. Database-only profiles use the already fault-tolerant public directory
 * loader and safely fall back to a general RFQ when the database is unavailable.
 */
export async function resolveRfqTargetSupplier(
  value: string | string[] | undefined,
  loadPublicSupplierRows: LoadPublicSupplierRows = getPublicSupplierRows,
): Promise<RfqTargetSupplier | null> {
  const requested = firstRfqSearchParam(value, 200);
  if (!requested) return null;

  const curated = CURATED_SUPPLIER_PROFILES.find(({ profile }) =>
    matchesSupplier(profile, requested),
  )?.profile;
  const curatedTarget = curated ? toRfqTargetSupplier(curated) : null;
  if (curatedTarget) return curatedTarget;

  try {
    const row = (await loadPublicSupplierRows()).find(({ supplier }) =>
      matchesSupplier(supplier, requested),
    );
    return row ? toRfqTargetSupplier(row.supplier) : null;
  } catch (error) {
    console.warn(
      `[rfq] supplier lookup unavailable; opening a general RFQ: ${
        error instanceof Error ? error.message : "unknown error"
      }`,
    );
    return null;
  }
}
