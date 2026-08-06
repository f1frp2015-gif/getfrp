// Idempotently publish Nanjing Jufa's curated public supplier profile and
// connect it to GetFRP's canonical resin and gelcoat product family. The
// profile remains public and unclaimed unless an existing database record has
// subsequently acquired verification or enterprise ownership.
//
//   pnpm tsx --env-file=.env.local scripts/upsert-jufa-supplier-profile.ts

import { and, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { supplierListings, supplierProducts } from "@/lib/db/schema";
import {
  JUFA_PRODUCT_ID,
  JUFA_PRODUCT_RELATION,
  JUFA_SUPPLIER_ID,
  JUFA_SUPPLIER_PROFILE,
} from "@/lib/data/jufa-supplier-profile";

async function main() {
  const profile = JUFA_SUPPLIER_PROFILE;

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

  await db
    .insert(supplierProducts)
    .values(JUFA_PRODUCT_RELATION)
    .onConflictDoUpdate({
      target: [
        supplierProducts.supplierListingId,
        supplierProducts.productId,
      ],
      set: {
        relationshipType: JUFA_PRODUCT_RELATION.relationshipType,
        supplierProductName: JUFA_PRODUCT_RELATION.supplierProductName,
        isPrimary: JUFA_PRODUCT_RELATION.isPrimary,
        customAvailable: JUFA_PRODUCT_RELATION.customAvailable,
        moq: JUFA_PRODUCT_RELATION.moq,
        moqUnit: JUFA_PRODUCT_RELATION.moqUnit,
        leadTimeDays: JUFA_PRODUCT_RELATION.leadTimeDays,
        specificationOverrides:
          JUFA_PRODUCT_RELATION.specificationOverrides,
        evidence: JUFA_PRODUCT_RELATION.evidence,
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
    .where(eq(supplierListings.id, JUFA_SUPPLIER_ID))
    .limit(1);

  const [relationship] = await db
    .select({
      productId: supplierProducts.productId,
      isVerified: supplierProducts.isVerified,
    })
    .from(supplierProducts)
    .where(
      and(
        eq(supplierProducts.supplierListingId, JUFA_SUPPLIER_ID),
        eq(supplierProducts.productId, JUFA_PRODUCT_ID),
      ),
    )
    .limit(1);

  if (
    !saved?.profilePublished ||
    saved.slug !== profile.slug ||
    saved.website !== profile.website ||
    saved.logo !== profile.logo ||
    !saved.ecatalogs?.length ||
    relationship?.productId !== JUFA_PRODUCT_ID
  ) {
    throw new Error("Jufa public supplier profile failed post-upsert validation");
  }

  console.log(
    `[upsert-jufa-supplier-profile] published ${saved.nameEn} (${saved.id}); catalogs=${saved.ecatalogs.length}; verified=${saved.verified}; enterpriseId=${saved.enterpriseId ?? "none"}; product=${relationship.productId}; productVerified=${relationship.isVerified}`,
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
