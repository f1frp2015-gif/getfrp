import type { SupplierListing } from "@/lib/db/schema";
import { getCuratedSupplierProfile } from "@/lib/data/curated-supplier-profiles";

/**
 * Search index quality gate for individual supplier profiles.
 *
 * A company may remain visible in the browsable directory without being a
 * useful standalone search result. Git-curated profiles already have an
 * official-source review. Database-managed profiles must meet the same
 * minimum evidence and completeness standard before entering metadata and
 * sitemaps.
 */
export function isSupplierProfileIndexable(
  supplier: SupplierListing,
): boolean {
  if (!supplier.profilePublished || !supplier.nameEn?.trim() || !supplier.slug) {
    return false;
  }

  if (
    getCuratedSupplierProfile(supplier.id) ||
    getCuratedSupplierProfile(supplier.slug)
  ) {
    return true;
  }

  const description = supplier.descriptionEn?.replace(/\s+/g, " ").trim() ?? "";
  const products = supplier.productsEn ?? [];
  const processes = supplier.processListEn ?? [];
  const evidenceLinks = [
    supplier.website,
    ...(supplier.ecatalogs ?? []).map((catalog) => catalog.url),
  ].filter(Boolean);

  return Boolean(
    supplier.profileReviewedAt &&
      description.length >= 320 &&
      products.length >= 2 &&
      processes.length >= 1 &&
      evidenceLinks.length >= 1,
  );
}
