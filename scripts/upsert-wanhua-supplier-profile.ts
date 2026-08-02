// Idempotently publish Wanhua Chemical's curated public supplier profile and
// connect it to GetFRP's canonical composite-resin product family.
// Wanhua has not claimed this profile, so it remains unverified and unlinked
// from any GetFRP enterprise account.
//
//   tsx --env-file=.env.local scripts/upsert-wanhua-supplier-profile.ts

import { and, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { supplierListings, supplierProducts } from "@/lib/db/schema";
import {
  WANHUA_PRODUCT_ID,
  WANHUA_PRODUCT_RELATION,
  WANHUA_SUPPLIER_ID,
  WANHUA_SUPPLIER_PROFILE,
} from "@/lib/data/wanhua-supplier-profile";

async function main() {
  const { id: _id, createdAt: _createdAt, ...profileUpdate } =
    WANHUA_SUPPLIER_PROFILE;
  void _id;
  void _createdAt;

  await db
    .insert(supplierListings)
    .values(WANHUA_SUPPLIER_PROFILE)
    .onConflictDoUpdate({
      target: supplierListings.id,
      set: { ...profileUpdate, updatedAt: new Date() },
    });

  await db
    .insert(supplierProducts)
    .values(WANHUA_PRODUCT_RELATION)
    .onConflictDoUpdate({
      target: [
        supplierProducts.supplierListingId,
        supplierProducts.productId,
      ],
      set: { ...WANHUA_PRODUCT_RELATION, updatedAt: new Date() },
    });

  const [profile] = await db
    .select({
      id: supplierListings.id,
      nameEn: supplierListings.nameEn,
      verified: supplierListings.verified,
      profilePublished: supplierListings.profilePublished,
      website: supplierListings.website,
      enterpriseId: supplierListings.enterpriseId,
      ecatalogs: supplierListings.ecatalogs,
    })
    .from(supplierListings)
    .where(eq(supplierListings.id, WANHUA_SUPPLIER_ID))
    .limit(1);

  const [relationship] = await db
    .select({
      supplierListingId: supplierProducts.supplierListingId,
      productId: supplierProducts.productId,
      isVerified: supplierProducts.isVerified,
    })
    .from(supplierProducts)
    .where(
      and(
        eq(supplierProducts.supplierListingId, WANHUA_SUPPLIER_ID),
        eq(supplierProducts.productId, WANHUA_PRODUCT_ID),
      ),
    )
    .limit(1);

  if (
    !profile?.profilePublished ||
    profile.verified ||
    profile.enterpriseId ||
    profile.website !== WANHUA_SUPPLIER_PROFILE.website ||
    !profile.ecatalogs?.length ||
    relationship?.productId !== WANHUA_PRODUCT_ID ||
    relationship.isVerified
  ) {
    throw new Error("Wanhua public supplier profile failed post-upsert validation");
  }

  console.log(
    `[upsert-wanhua-supplier-profile] published ${profile.nameEn} (${profile.id}); status=public-unclaimed; catalogs=${profile.ecatalogs.length}; product=${relationship.productId}`,
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
