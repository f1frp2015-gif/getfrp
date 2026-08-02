// Publish the curated Taishan Fiberglass public profile and connect it to the
// canonical fiberglass supplier category.
//
//   pnpm tsx --env-file=.env.local scripts/upsert-taishan-supplier-profile.ts

import { and, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { supplierListings, supplierProducts } from "@/lib/db/schema";
import {
  TAISHAN_PRODUCT_RELATION,
  TAISHAN_SUPPLIER_ID,
  TAISHAN_SUPPLIER_PROFILE,
} from "@/lib/data/taishan-supplier-profile";

async function main() {
  const { id: _id, createdAt: _createdAt, ...profileUpdate } = TAISHAN_SUPPLIER_PROFILE;
  void _id;
  void _createdAt;

  await db.insert(supplierListings).values(TAISHAN_SUPPLIER_PROFILE).onConflictDoUpdate({
    target: supplierListings.id,
    set: { ...profileUpdate, updatedAt: new Date() },
  });
  await db.insert(supplierProducts).values(TAISHAN_PRODUCT_RELATION).onConflictDoUpdate({
    target: [supplierProducts.supplierListingId, supplierProducts.productId],
    set: { ...TAISHAN_PRODUCT_RELATION, updatedAt: new Date() },
  });

  const [profile] = await db.select({
    nameEn: supplierListings.nameEn,
    slug: supplierListings.slug,
    profilePublished: supplierListings.profilePublished,
    website: supplierListings.website,
    logo: supplierListings.logo,
    ecatalogs: supplierListings.ecatalogs,
  }).from(supplierListings).where(eq(supplierListings.id, TAISHAN_SUPPLIER_ID)).limit(1);
  const [relationship] = await db.select({ productId: supplierProducts.productId })
    .from(supplierProducts)
    .where(and(eq(supplierProducts.supplierListingId, TAISHAN_SUPPLIER_ID), eq(supplierProducts.productId, TAISHAN_PRODUCT_RELATION.productId)))
    .limit(1);

  if (!profile?.profilePublished || profile.slug !== TAISHAN_SUPPLIER_PROFILE.slug || profile.website !== TAISHAN_SUPPLIER_PROFILE.website || profile.logo !== TAISHAN_SUPPLIER_PROFILE.logo || !profile.ecatalogs?.length || relationship?.productId !== TAISHAN_PRODUCT_RELATION.productId) {
    throw new Error("Taishan Fiberglass public profile failed post-upsert validation");
  }
  console.log(`[upsert-taishan-supplier-profile] published ${profile.nameEn} (${TAISHAN_SUPPLIER_ID}); slug=${profile.slug}; catalogs=${profile.ecatalogs.length}; product=${relationship.productId}`);
}

main().then(() => process.exit(0)).catch((error) => { console.error(error); process.exit(1); });
