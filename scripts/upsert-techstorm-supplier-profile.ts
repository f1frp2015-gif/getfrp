// Idempotently publish Techstorm's curated public supplier profile and connect
// it to GetFRP's canonical resin and gelcoat product family. Techstorm has not
// claimed this profile, so the record remains public, unverified and unlinked
// from any GetFRP enterprise account.
//
//   tsx --env-file=.env.local scripts/upsert-techstorm-supplier-profile.ts

import { and, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { supplierListings, supplierProducts } from "@/lib/db/schema";
import {
  TECHSTORM_PRODUCT_ID,
  TECHSTORM_PRODUCT_RELATION,
  TECHSTORM_SUPPLIER_ID,
  TECHSTORM_SUPPLIER_PROFILE,
} from "@/lib/data/techstorm-supplier-profile";

async function main() {
  const { id: _id, createdAt: _createdAt, ...profileUpdate } =
    TECHSTORM_SUPPLIER_PROFILE;
  void _id;
  void _createdAt;

  await db
    .insert(supplierListings)
    .values(TECHSTORM_SUPPLIER_PROFILE)
    .onConflictDoUpdate({
      target: supplierListings.id,
      set: { ...profileUpdate, updatedAt: new Date() },
    });

  await db
    .insert(supplierProducts)
    .values(TECHSTORM_PRODUCT_RELATION)
    .onConflictDoUpdate({
      target: [
        supplierProducts.supplierListingId,
        supplierProducts.productId,
      ],
      set: { ...TECHSTORM_PRODUCT_RELATION, updatedAt: new Date() },
    });

  const [profile] = await db
    .select({
      id: supplierListings.id,
      nameEn: supplierListings.nameEn,
      verified: supplierListings.verified,
      profilePublished: supplierListings.profilePublished,
      website: supplierListings.website,
      logo: supplierListings.logo,
      enterpriseId: supplierListings.enterpriseId,
      ecatalogs: supplierListings.ecatalogs,
    })
    .from(supplierListings)
    .where(eq(supplierListings.id, TECHSTORM_SUPPLIER_ID))
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
        eq(supplierProducts.supplierListingId, TECHSTORM_SUPPLIER_ID),
        eq(supplierProducts.productId, TECHSTORM_PRODUCT_ID),
      ),
    )
    .limit(1);

  if (
    !profile?.profilePublished ||
    profile.verified ||
    profile.enterpriseId ||
    profile.website !== TECHSTORM_SUPPLIER_PROFILE.website ||
    profile.logo !== TECHSTORM_SUPPLIER_PROFILE.logo ||
    !profile.ecatalogs?.length ||
    relationship?.productId !== TECHSTORM_PRODUCT_ID ||
    relationship.isVerified
  ) {
    throw new Error("Techstorm public supplier profile failed post-upsert validation");
  }

  console.log(
    `[upsert-techstorm-supplier-profile] published ${profile.nameEn} (${profile.id}); status=public-unclaimed; catalogs=${profile.ecatalogs.length}; product=${relationship.productId}`,
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
