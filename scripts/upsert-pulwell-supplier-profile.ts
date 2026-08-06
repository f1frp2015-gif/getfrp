// Idempotently publish Pulwell's reviewed public supplier content and primary
// FRP-rebar relationship without changing verification or ownership state.
//
//   pnpm tsx --env-file=.env.local scripts/upsert-pulwell-supplier-profile.ts

import { and, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { supplierListings, supplierProducts } from "@/lib/db/schema";
import {
  PULWELL_PRODUCT_RELATION,
  PULWELL_SUPPLIER_ID,
  PULWELL_SUPPLIER_PROFILE,
} from "@/lib/data/pulwell-supplier-profile";

async function main() {
  const profile = PULWELL_SUPPLIER_PROFILE;
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
    .values(PULWELL_PRODUCT_RELATION)
    .onConflictDoUpdate({
      target: [
        supplierProducts.supplierListingId,
        supplierProducts.productId,
      ],
      set: { ...PULWELL_PRODUCT_RELATION, updatedAt: new Date() },
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
    .where(eq(supplierListings.id, PULWELL_SUPPLIER_ID))
    .limit(1);
  const [relationship] = await db
    .select({ productId: supplierProducts.productId })
    .from(supplierProducts)
    .where(
      and(
        eq(supplierProducts.supplierListingId, PULWELL_SUPPLIER_ID),
        eq(
          supplierProducts.productId,
          PULWELL_PRODUCT_RELATION.productId,
        ),
      ),
    )
    .limit(1);

  if (
    saved?.slug !== profile.slug ||
    saved.website !== profile.website ||
    saved.logo !== profile.logo ||
    !saved.ecatalogs?.length ||
    relationship?.productId !== PULWELL_PRODUCT_RELATION.productId
  ) {
    throw new Error("Pulwell public profile failed post-upsert validation");
  }

  console.log(
    `[upsert-pulwell-supplier-profile] published ${saved.slug}; catalogs=${saved.ecatalogs.length}; product=${relationship.productId}; verified=${saved.verified}; enterpriseId=${saved.enterpriseId ?? "none"}`,
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
