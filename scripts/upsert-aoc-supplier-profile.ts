// Idempotently publish AOC's reviewed public supplier content and connect the
// profile to GetFRP's canonical resin and gelcoat product family. The update
// deliberately preserves any existing verification and enterprise ownership.
//
//   pnpm tsx --env-file=.env.local scripts/upsert-aoc-supplier-profile.ts

import { and, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { supplierListings, supplierProducts } from "@/lib/db/schema";
import {
  AOC_PRODUCT_RELATION,
  AOC_SUPPLIER_ID,
  AOC_SUPPLIER_PROFILE,
} from "@/lib/data/aoc-supplier-profile";

async function main() {
  const profile = AOC_SUPPLIER_PROFILE;

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
    .values(AOC_PRODUCT_RELATION)
    .onConflictDoUpdate({
      target: [
        supplierProducts.supplierListingId,
        supplierProducts.productId,
      ],
      set: { ...AOC_PRODUCT_RELATION, updatedAt: new Date() },
    });

  const [saved] = await db
    .select({
      slug: supplierListings.slug,
      website: supplierListings.website,
      logo: supplierListings.logo,
      ecatalogs: supplierListings.ecatalogs,
      verified: supplierListings.verified,
      enterpriseId: supplierListings.enterpriseId,
    })
    .from(supplierListings)
    .where(eq(supplierListings.id, AOC_SUPPLIER_ID))
    .limit(1);
  const [relationship] = await db
    .select({
      productId: supplierProducts.productId,
      isVerified: supplierProducts.isVerified,
    })
    .from(supplierProducts)
    .where(
      and(
        eq(supplierProducts.supplierListingId, AOC_SUPPLIER_ID),
        eq(supplierProducts.productId, AOC_PRODUCT_RELATION.productId),
      ),
    )
    .limit(1);

  if (
    saved?.slug !== profile.slug ||
    saved.website !== profile.website ||
    saved.logo !== profile.logo ||
    !saved.ecatalogs?.length ||
    relationship?.productId !== AOC_PRODUCT_RELATION.productId ||
    relationship.isVerified
  ) {
    throw new Error("AOC public profile failed post-upsert validation");
  }

  console.log(
    `[upsert-aoc-supplier-profile] published ${saved.slug}; catalogs=${saved.ecatalogs.length}; product=${relationship.productId}; verified=${saved.verified}; enterpriseId=${saved.enterpriseId ?? "none"}`,
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
