// Idempotently publish Weihai Dushi's reviewed public supplier profile without
// changing any verification or enterprise-ownership state later attached to
// the database row.
//
//   pnpm tsx --env-file=.env.local scripts/upsert-weihai-dushi-supplier-profile.ts

import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { supplierListings } from "@/lib/db/schema";
import {
  WEIHAI_DUSHI_SUPPLIER_ID,
  WEIHAI_DUSHI_SUPPLIER_PROFILE,
} from "@/lib/data/weihai-dushi-composite-materials-supplier-profile";

async function main() {
  const profile = WEIHAI_DUSHI_SUPPLIER_PROFILE;

  await db
    .insert(supplierListings)
    .values(profile)
    .onConflictDoUpdate({
      target: supplierListings.id,
      set: {
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
        description: profile.description,
        descriptionEn: profile.descriptionEn,
        certifications: profile.certifications,
        certificationsEn: profile.certificationsEn,
        productsServicesSummary: profile.productsServicesSummary,
        productsServicesSummaryEn: profile.productsServicesSummaryEn,
        ecatalogs: profile.ecatalogs,
        profilePublished: true,
        profileReviewedAt: profile.profileReviewedAt,
        logo: profile.logo,
        contactEmail: profile.contactEmail,
        contactPhone: profile.contactPhone,
        address: profile.address,
        website: profile.website,
        scaleTier: profile.scaleTier,
        brandPriority: profile.brandPriority,
        capabilities: profile.capabilities,
        standardsSupported: profile.standardsSupported,
        exportReady: profile.exportReady,
        updatedAt: new Date(),
      },
    });

  const [saved] = await db
    .select({
      id: supplierListings.id,
      nameEn: supplierListings.nameEn,
      slug: supplierListings.slug,
      profilePublished: supplierListings.profilePublished,
      website: supplierListings.website,
      logo: supplierListings.logo,
      ecatalogs: supplierListings.ecatalogs,
      verified: supplierListings.verified,
      enterpriseId: supplierListings.enterpriseId,
    })
    .from(supplierListings)
    .where(eq(supplierListings.id, WEIHAI_DUSHI_SUPPLIER_ID))
    .limit(1);

  if (
    !saved?.profilePublished ||
    saved.slug !== profile.slug ||
    saved.website !== profile.website ||
    saved.logo !== profile.logo ||
    !saved.ecatalogs?.length
  ) {
    throw new Error("Weihai Dushi public profile failed post-upsert validation");
  }

  console.log(
    `[upsert-weihai-dushi-supplier-profile] published ${saved.nameEn} (${saved.id}); catalogs=${saved.ecatalogs.length}; verified=${saved.verified}; enterpriseId=${saved.enterpriseId ?? "none"}`,
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
