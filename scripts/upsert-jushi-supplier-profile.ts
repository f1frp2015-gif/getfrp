// Publish the curated China Jushi public profile and connect it to the
// canonical fiberglass supplier category.
//
//   pnpm tsx --env-file=.env.local scripts/upsert-jushi-supplier-profile.ts

import { and, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { supplierListings, supplierProducts } from "@/lib/db/schema";
import {
  JUSHI_PRODUCT_RELATION,
  JUSHI_SUPPLIER_ID,
  JUSHI_SUPPLIER_PROFILE,
} from "@/lib/data/jushi-supplier-profile";

async function main() {
  const { id: _id, createdAt: _createdAt, ...profileUpdate } = JUSHI_SUPPLIER_PROFILE;
  void _id;
  void _createdAt;

  await db
    .insert(supplierListings)
    .values(JUSHI_SUPPLIER_PROFILE)
    .onConflictDoUpdate({
      target: supplierListings.id,
      set: { ...profileUpdate, updatedAt: new Date() },
    });

  await db
    .insert(supplierProducts)
    .values(JUSHI_PRODUCT_RELATION)
    .onConflictDoUpdate({
      target: [supplierProducts.supplierListingId, supplierProducts.productId],
      set: { ...JUSHI_PRODUCT_RELATION, updatedAt: new Date() },
    });

  const [profile] = await db
    .select({
      nameEn: supplierListings.nameEn,
      slug: supplierListings.slug,
      profilePublished: supplierListings.profilePublished,
      website: supplierListings.website,
      ecatalogs: supplierListings.ecatalogs,
    })
    .from(supplierListings)
    .where(eq(supplierListings.id, JUSHI_SUPPLIER_ID))
    .limit(1);
  const [relationship] = await db
    .select({ productId: supplierProducts.productId })
    .from(supplierProducts)
    .where(
      and(
        eq(supplierProducts.supplierListingId, JUSHI_SUPPLIER_ID),
        eq(supplierProducts.productId, JUSHI_PRODUCT_RELATION.productId),
      ),
    )
    .limit(1);

  if (
    !profile?.profilePublished ||
    profile.slug !== JUSHI_SUPPLIER_PROFILE.slug ||
    profile.website !== JUSHI_SUPPLIER_PROFILE.website ||
    !profile.ecatalogs?.length ||
    relationship?.productId !== JUSHI_PRODUCT_RELATION.productId
  ) {
    throw new Error("China Jushi public profile failed post-upsert validation");
  }

  console.log(
    `[upsert-jushi-supplier-profile] published ${profile.nameEn} (${JUSHI_SUPPLIER_ID}); slug=${profile.slug}; catalogs=${profile.ecatalogs.length}; product=${relationship.productId}`,
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
