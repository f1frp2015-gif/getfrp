// Publish the curated Zhongfu Shenying public profile.
// pnpm tsx --env-file=.env.local scripts/upsert-zhongfu-shenying-supplier-profile.ts
import { and, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { supplierListings, supplierProducts } from "@/lib/db/schema";
import {
  ZHONGFU_SHENYING_PRODUCT_RELATION,
  ZHONGFU_SHENYING_SUPPLIER_ID,
  ZHONGFU_SHENYING_SUPPLIER_PROFILE,
} from "@/lib/data/zhongfu-shenying-supplier-profile";

async function main() {
  const { id: _id, createdAt: _createdAt, ...profileUpdate } = ZHONGFU_SHENYING_SUPPLIER_PROFILE;
  void _id; void _createdAt;
  await db.insert(supplierListings).values(ZHONGFU_SHENYING_SUPPLIER_PROFILE).onConflictDoUpdate({ target: supplierListings.id, set: { ...profileUpdate, updatedAt: new Date() } });
  await db.insert(supplierProducts).values(ZHONGFU_SHENYING_PRODUCT_RELATION).onConflictDoUpdate({ target: [supplierProducts.supplierListingId, supplierProducts.productId], set: { ...ZHONGFU_SHENYING_PRODUCT_RELATION, updatedAt: new Date() } });
  const [profile] = await db.select({ nameEn: supplierListings.nameEn, slug: supplierListings.slug, profilePublished: supplierListings.profilePublished, website: supplierListings.website, logo: supplierListings.logo, ecatalogs: supplierListings.ecatalogs }).from(supplierListings).where(eq(supplierListings.id, ZHONGFU_SHENYING_SUPPLIER_ID)).limit(1);
  const [relationship] = await db.select({ productId: supplierProducts.productId }).from(supplierProducts).where(and(eq(supplierProducts.supplierListingId, ZHONGFU_SHENYING_SUPPLIER_ID), eq(supplierProducts.productId, ZHONGFU_SHENYING_PRODUCT_RELATION.productId))).limit(1);
  if (!profile?.profilePublished || profile.slug !== ZHONGFU_SHENYING_SUPPLIER_PROFILE.slug || profile.website !== ZHONGFU_SHENYING_SUPPLIER_PROFILE.website || profile.logo !== ZHONGFU_SHENYING_SUPPLIER_PROFILE.logo || !profile.ecatalogs?.length || relationship?.productId !== ZHONGFU_SHENYING_PRODUCT_RELATION.productId) throw new Error("Zhongfu Shenying profile failed post-upsert validation");
  console.log(`[upsert-zhongfu-shenying-supplier-profile] published ${profile.nameEn} (${ZHONGFU_SHENYING_SUPPLIER_ID}); slug=${profile.slug}; catalogs=${profile.ecatalogs.length}; product=${relationship.productId}`);
}
main().then(() => process.exit(0)).catch((error) => { console.error(error); process.exit(1); });
