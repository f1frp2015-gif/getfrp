import { and, desc, ilike, inArray, isNull, or } from "drizzle-orm";

import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
} from "@/lib/data/curated-supplier-profiles";
import { db } from "@/lib/db";
import {
  supplierListings,
  type NewSupplierListing,
  type SupplierListing,
} from "@/lib/db/schema";

export type ClaimSupplier = Pick<
  SupplierListing,
  | "id"
  | "name"
  | "nameEn"
  | "slug"
  | "location"
  | "locationEn"
  | "category"
  | "description"
  | "descriptionEn"
  | "products"
  | "productsEn"
  | "processList"
  | "processListEn"
  | "certifications"
  | "certificationsEn"
  | "standardsSupported"
  | "verified"
  | "profilePublished"
  | "website"
  | "logo"
  | "moqKg"
  | "leadTimeDays"
  | "enterpriseId"
>;

const claimSupplierColumns = {
  id: supplierListings.id,
  name: supplierListings.name,
  nameEn: supplierListings.nameEn,
  slug: supplierListings.slug,
  location: supplierListings.location,
  locationEn: supplierListings.locationEn,
  category: supplierListings.category,
  description: supplierListings.description,
  descriptionEn: supplierListings.descriptionEn,
  products: supplierListings.products,
  productsEn: supplierListings.productsEn,
  processList: supplierListings.processList,
  processListEn: supplierListings.processListEn,
  certifications: supplierListings.certifications,
  certificationsEn: supplierListings.certificationsEn,
  standardsSupported: supplierListings.standardsSupported,
  verified: supplierListings.verified,
  profilePublished: supplierListings.profilePublished,
  website: supplierListings.website,
  logo: supplierListings.logo,
  moqKg: supplierListings.moqKg,
  leadTimeDays: supplierListings.leadTimeDays,
  enterpriseId: supplierListings.enterpriseId,
} as const;

type DatabaseErrorMetadata = {
  name: string;
  code?: string;
  status?: number;
};

function errorChain(error: unknown): unknown[] {
  const chain: unknown[] = [];
  const visited = new Set<unknown>();
  let current = error;

  while (current && !visited.has(current) && chain.length < 5) {
    chain.push(current);
    visited.add(current);
    if (typeof current !== "object" || !("cause" in current)) break;
    current = current.cause;
  }

  return chain;
}

export function databaseErrorMetadata(error: unknown): DatabaseErrorMetadata {
  const chain = errorChain(error);
  const named = chain.find(
    (entry): entry is { name: string } =>
      typeof entry === "object" &&
      entry !== null &&
      "name" in entry &&
      typeof entry.name === "string" &&
      entry.name.length > 0 &&
      entry.name !== "Error",
  );
  const coded = chain.find(
    (entry): entry is { code: string } =>
      typeof entry === "object" &&
      entry !== null &&
      "code" in entry &&
      typeof entry.code === "string" &&
      /^[A-Z0-9_-]{2,32}$/i.test(entry.code),
  );
  const status = chain
    .filter((entry): entry is Error => entry instanceof Error)
    .map((entry) => entry.message.match(/HTTP status (\d{3})/i)?.[1])
    .find(Boolean);

  return {
    name: named?.name ?? "DatabaseError",
    code: coded?.code,
    status: status ? Number(status) : undefined,
  };
}

export function logSupplierClaimDatabaseFailure(
  operation: string,
  error: unknown,
): void {
  // Query errors can include submitted identifiers in their message. Log only
  // stable metadata so production incidents remain diagnosable without PII.
  console.error(
    `[supplier-claim/${operation}] database unavailable`,
    databaseErrorMetadata(error),
  );
}

export function claimSupplierFromProfile(
  profile: SupplierListing,
): ClaimSupplier {
  return {
    id: profile.id,
    name: profile.name,
    nameEn: profile.nameEn,
    slug: profile.slug,
    location: profile.location,
    locationEn: profile.locationEn,
    category: profile.category,
    description: profile.description,
    descriptionEn: profile.descriptionEn,
    products: profile.products,
    productsEn: profile.productsEn,
    processList: profile.processList,
    processListEn: profile.processListEn,
    certifications: profile.certifications,
    certificationsEn: profile.certificationsEn,
    standardsSupported: profile.standardsSupported,
    verified: profile.verified,
    profilePublished: profile.profilePublished,
    website: profile.website,
    logo: profile.logo,
    moqKg: profile.moqKg,
    leadTimeDays: profile.leadTimeDays,
    enterpriseId: profile.enterpriseId,
  };
}

function mergeCuratedClaimSupplier(
  databaseSupplier: ClaimSupplier,
): ClaimSupplier {
  const curated =
    getCuratedSupplierProfile(databaseSupplier.id) ??
    (databaseSupplier.slug
      ? getCuratedSupplierProfile(databaseSupplier.slug)
      : null);
  if (!curated || databaseSupplier.enterpriseId) return databaseSupplier;

  const curatedSupplier = claimSupplierFromProfile(curated);
  return {
    ...databaseSupplier,
    nameEn: databaseSupplier.nameEn ?? curatedSupplier.nameEn,
    slug: databaseSupplier.slug ?? curatedSupplier.slug,
    location: curatedSupplier.location,
    locationEn: curatedSupplier.locationEn,
    category: curatedSupplier.category,
    description: curatedSupplier.description,
    descriptionEn: curatedSupplier.descriptionEn,
    products: curatedSupplier.products,
    productsEn: curatedSupplier.productsEn,
    processList: curatedSupplier.processList,
    processListEn: curatedSupplier.processListEn,
    certifications: curatedSupplier.certifications,
    certificationsEn: curatedSupplier.certificationsEn,
    standardsSupported: curatedSupplier.standardsSupported,
    profilePublished:
      databaseSupplier.profilePublished || curatedSupplier.profilePublished,
    website: curatedSupplier.website,
    logo: curatedSupplier.logo,
    moqKg: curatedSupplier.moqKg,
    leadTimeDays: curatedSupplier.leadTimeDays,
    enterpriseId:
      databaseSupplier.enterpriseId ?? curatedSupplier.enterpriseId,
  };
}

function identityKeys(
  idOrSlug: string,
  curated: SupplierListing | null,
): string[] {
  return Array.from(
    new Set(
      [idOrSlug, curated?.id, curated?.slug]
        .filter((value): value is string => Boolean(value))
        .map((value) => value.trim())
        .filter(Boolean),
    ),
  );
}

function matchesClaimSearch(supplier: ClaimSupplier, query: string): boolean {
  const needle = query.trim().toLocaleLowerCase("en");
  if (!needle) return false;
  return [
    supplier.name,
    supplier.nameEn,
    supplier.slug,
    supplier.location,
    supplier.locationEn,
    supplier.description,
    supplier.descriptionEn,
  ].some((value) => value?.toLocaleLowerCase("en").includes(needle));
}

export type ClaimSupplierResult = {
  supplier: ClaimSupplier | null;
  databaseAvailable: boolean;
  databaseRecordExists: boolean;
};

export async function loadClaimSupplier(
  idOrSlug: string,
): Promise<ClaimSupplierResult> {
  const curated = getCuratedSupplierProfile(idOrSlug);
  const keys = identityKeys(idOrSlug, curated);

  try {
    const [databaseSupplier] = await db
      .select(claimSupplierColumns)
      .from(supplierListings)
      .where(
        or(
          inArray(supplierListings.id, keys),
          inArray(supplierListings.slug, keys),
        ),
      )
      .limit(1);

    return {
      supplier: databaseSupplier
        ? mergeCuratedClaimSupplier(databaseSupplier)
        : curated?.profilePublished
          ? claimSupplierFromProfile(curated)
          : null,
      databaseAvailable: true,
      databaseRecordExists: Boolean(databaseSupplier),
    };
  } catch (error) {
    logSupplierClaimDatabaseFailure("load-supplier", error);
    return {
      supplier: curated?.profilePublished
        ? claimSupplierFromProfile(curated)
        : null,
      databaseAvailable: false,
      databaseRecordExists: false,
    };
  }
}

export type ClaimSupplierSearchResult = {
  suppliers: ClaimSupplier[];
  databaseAvailable: boolean;
};

export type ClaimSupplierOwnership = Pick<
  SupplierListing,
  "id" | "slug" | "enterpriseId"
>;

export function mergeClaimSupplierSearchResults(
  databaseSuppliers: ClaimSupplier[],
  query: string,
  ownershipRows: ClaimSupplierOwnership[] = [],
): ClaimSupplier[] {
  const allDatabaseSuppliers = databaseSuppliers.map(mergeCuratedClaimSupplier);
  const existingIds = new Set(
    allDatabaseSuppliers.map((supplier) => supplier.id),
  );
  const existingSlugs = new Set(
    allDatabaseSuppliers.flatMap((supplier) =>
      supplier.slug ? [supplier.slug] : [],
    ),
  );
  const claimedIds = new Set(
    ownershipRows
      .filter((supplier) => Boolean(supplier.enterpriseId))
      .map((supplier) => supplier.id),
  );
  const claimedSlugs = new Set(
    ownershipRows.flatMap((supplier) =>
      supplier.enterpriseId && supplier.slug ? [supplier.slug] : [],
    ),
  );
  const unclaimedDatabaseSuppliers = allDatabaseSuppliers.filter(
    (supplier) => !supplier.enterpriseId,
  );
  const curatedSuppliers = CURATED_SUPPLIER_PROFILES.flatMap(({ profile }) => {
    const supplier = claimSupplierFromProfile(profile);
    if (
      !profile.profilePublished ||
      profile.enterpriseId ||
      claimedIds.has(profile.id) ||
      (profile.slug && claimedSlugs.has(profile.slug)) ||
      existingIds.has(profile.id) ||
      (profile.slug && existingSlugs.has(profile.slug)) ||
      !matchesClaimSearch(supplier, query)
    ) {
      return [];
    }
    return [supplier];
  });

  return [...unclaimedDatabaseSuppliers, ...curatedSuppliers]
    .filter((supplier) => matchesClaimSearch(supplier, query))
    .sort((a, b) => {
      const verifiedDifference =
        Number(Boolean(b.verified)) - Number(Boolean(a.verified));
      if (verifiedDifference !== 0) return verifiedDifference;
      return (a.nameEn ?? a.name).localeCompare(b.nameEn ?? b.name);
    })
    .slice(0, 12);
}

export async function searchClaimSuppliers(
  query: string,
): Promise<ClaimSupplierSearchResult> {
  const normalizedQuery = query.trim();
  if (!normalizedQuery) {
    return { suppliers: [], databaseAvailable: true };
  }

  let databaseAvailable = true;
  let databaseSuppliers: ClaimSupplier[] = [];
  let ownershipRows: ClaimSupplierOwnership[] = [];
  const curatedMatches = CURATED_SUPPLIER_PROFILES.map(({ profile }) => profile)
    .filter((profile) =>
      matchesClaimSearch(claimSupplierFromProfile(profile), normalizedQuery),
    );
  const curatedIds = curatedMatches.map((profile) => profile.id);
  const curatedSlugs = curatedMatches.flatMap((profile) =>
    profile.slug ? [profile.slug] : [],
  );
  try {
    [databaseSuppliers, ownershipRows] = await Promise.all([
      db
        .select(claimSupplierColumns)
        .from(supplierListings)
        .where(
          and(
            isNull(supplierListings.enterpriseId),
            or(
              ilike(supplierListings.nameEn, `%${normalizedQuery}%`),
              ilike(supplierListings.locationEn, `%${normalizedQuery}%`),
              ilike(supplierListings.descriptionEn, `%${normalizedQuery}%`),
            ),
          ),
        )
        .orderBy(desc(supplierListings.verified), supplierListings.nameEn)
        .limit(50),
      curatedIds.length > 0 || curatedSlugs.length > 0
        ? db
            .select({
              id: supplierListings.id,
              slug: supplierListings.slug,
              enterpriseId: supplierListings.enterpriseId,
            })
            .from(supplierListings)
            .where(
              or(
                inArray(supplierListings.id, curatedIds),
                inArray(supplierListings.slug, curatedSlugs),
              ),
            )
        : Promise.resolve([]),
    ]);
  } catch (error) {
    databaseAvailable = false;
    logSupplierClaimDatabaseFailure("search-suppliers", error);
  }

  return {
    suppliers: mergeClaimSupplierSearchResults(
      databaseSuppliers,
      normalizedQuery,
      ownershipRows,
    ),
    databaseAvailable,
  };
}

export function curatedSupplierInsertValues(
  profile: SupplierListing,
): NewSupplierListing {
  return {
    id: profile.id,
    name: profile.name,
    nameEn: profile.nameEn,
    slug: profile.slug,
    location: profile.location,
    locationEn: profile.locationEn,
    province: profile.province,
    category: profile.category,
    products: profile.products,
    productsEn: profile.productsEn,
    processList: profile.processList,
    processListEn: profile.processListEn,
    established: profile.established,
    verified: profile.verified,
    description: profile.description,
    descriptionEn: profile.descriptionEn,
    certifications: profile.certifications,
    certificationsEn: profile.certificationsEn,
    productsServicesSummary: profile.productsServicesSummary,
    productsServicesSummaryEn: profile.productsServicesSummaryEn,
    ecatalogs: profile.ecatalogs,
    profilePublished: profile.profilePublished,
    profileReviewedAt: profile.profileReviewedAt,
    logo: profile.logo,
    contactEmail: profile.contactEmail,
    contactPhone: profile.contactPhone,
    address: profile.address,
    website: profile.website,
    enterpriseId: null,
    scaleTier: profile.scaleTier,
    brandPriority: profile.brandPriority,
    viewCount: profile.viewCount,
    capabilities: profile.capabilities,
    standardsSupported: profile.standardsSupported,
    moqKg: profile.moqKg,
    leadTimeDays: profile.leadTimeDays,
    exportReady: profile.exportReady,
  };
}

export type ClaimSupplierRecord = Pick<
  SupplierListing,
  "id" | "enterpriseId"
>;

export async function resolveClaimSupplierRecord(
  idOrSlug: string,
): Promise<ClaimSupplierRecord | null> {
  const curated = getCuratedSupplierProfile(idOrSlug);
  const keys = identityKeys(idOrSlug, curated);
  const ownershipColumns = {
    id: supplierListings.id,
    enterpriseId: supplierListings.enterpriseId,
  } as const;

  const [existing] = await db
    .select(ownershipColumns)
    .from(supplierListings)
    .where(
      or(
        inArray(supplierListings.id, keys),
        inArray(supplierListings.slug, keys),
      ),
    )
    .limit(1);
  if (existing) return existing;
  if (!curated?.profilePublished) return null;
  if (curated.enterpriseId) {
    return { id: curated.id, enterpriseId: curated.enterpriseId };
  }

  await db
    .insert(supplierListings)
    .values(curatedSupplierInsertValues(curated))
    .onConflictDoNothing();

  const [materialized] = await db
    .select(ownershipColumns)
    .from(supplierListings)
    .where(
      or(
        inArray(supplierListings.id, keys),
        inArray(supplierListings.slug, keys),
      ),
    )
    .limit(1);

  return materialized ?? null;
}
