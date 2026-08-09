// Idempotently publish Fanghua Mould's reviewed public supplier content while
// preserving GetFRP verification state and refusing to overwrite a profile
// that has been claimed by a supplier enterprise.
//
//   pnpm tsx --env-file=.env.local scripts/upsert-fanghua-supplier-profile.ts

import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { supplierListings } from "@/lib/db/schema";
import {
  FANGHUA_SUPPLIER_ID,
  FANGHUA_SUPPLIER_PROFILE,
} from "@/lib/data/fanghua-supplier-profile";

async function main() {
  const profile = FANGHUA_SUPPLIER_PROFILE;
  const [existing] = await db
    .select({ enterpriseId: supplierListings.enterpriseId })
    .from(supplierListings)
    .where(eq(supplierListings.id, FANGHUA_SUPPLIER_ID))
    .limit(1);

  if (existing?.enterpriseId) {
    throw new Error(
      "Fanghua Mould profile is supplier-managed; refusing to overwrite claimed content",
    );
  }

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
      nameEn: supplierListings.nameEn,
      slug: supplierListings.slug,
      category: supplierListings.category,
      profilePublished: supplierListings.profilePublished,
      website: supplierListings.website,
      logo: supplierListings.logo,
      ecatalogs: supplierListings.ecatalogs,
      verified: supplierListings.verified,
      enterpriseId: supplierListings.enterpriseId,
    })
    .from(supplierListings)
    .where(eq(supplierListings.id, FANGHUA_SUPPLIER_ID))
    .limit(1);

  if (
    !saved?.profilePublished ||
    saved.nameEn !== profile.nameEn ||
    saved.slug !== profile.slug ||
    saved.category !== "mold" ||
    saved.website !== profile.website ||
    saved.logo !== profile.logo ||
    !saved.ecatalogs?.length ||
    saved.enterpriseId
  ) {
    throw new Error("Fanghua Mould public profile failed post-upsert validation");
  }

  console.log(
    `[upsert-fanghua-supplier-profile] published ${saved.nameEn}; slug=${saved.slug}; catalogs=${saved.ecatalogs.length}; verified=${saved.verified}; enterpriseId=none`,
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
