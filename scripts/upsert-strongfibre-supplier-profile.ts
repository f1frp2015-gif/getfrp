// Publish Strongfibre's reviewed public supplier profile and connect it to the
// canonical fiber-reinforcement product category. Existing verification and
// enterprise ownership state are intentionally preserved.
//
//   pnpm tsx --env-file=.env.local scripts/upsert-strongfibre-supplier-profile.ts

import { and, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { supplierListings, supplierProducts } from "@/lib/db/schema";
import {
  STRONGFIBRE_PRODUCT_RELATION,
  STRONGFIBRE_SUPPLIER_ID,
  STRONGFIBRE_SUPPLIER_PROFILE,
} from "@/lib/data/strongfibre-supplier-profile";

async function main() {
  const profile = STRONGFIBRE_SUPPLIER_PROFILE;
  const [existing] = await db
    .select({ enterpriseId: supplierListings.enterpriseId })
    .from(supplierListings)
    .where(eq(supplierListings.id, STRONGFIBRE_SUPPLIER_ID))
    .limit(1);

  if (existing?.enterpriseId) {
    throw new Error(
      "Strongfibre profile is supplier-managed; refusing to overwrite claimed content",
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

  await db
    .insert(supplierProducts)
    .values(STRONGFIBRE_PRODUCT_RELATION)
    .onConflictDoUpdate({
      target: [
        supplierProducts.supplierListingId,
        supplierProducts.productId,
      ],
      set: { ...STRONGFIBRE_PRODUCT_RELATION, updatedAt: new Date() },
    });

  const [saved] = await db
    .select({
      nameEn: supplierListings.nameEn,
      slug: supplierListings.slug,
      profilePublished: supplierListings.profilePublished,
      website: supplierListings.website,
      logo: supplierListings.logo,
      ecatalogs: supplierListings.ecatalogs,
      enterpriseId: supplierListings.enterpriseId,
    })
    .from(supplierListings)
    .where(eq(supplierListings.id, STRONGFIBRE_SUPPLIER_ID))
    .limit(1);
  const [relationship] = await db
    .select({ productId: supplierProducts.productId })
    .from(supplierProducts)
    .where(
      and(
        eq(supplierProducts.supplierListingId, STRONGFIBRE_SUPPLIER_ID),
        eq(
          supplierProducts.productId,
          STRONGFIBRE_PRODUCT_RELATION.productId,
        ),
      ),
    )
    .limit(1);

  if (
    !saved?.profilePublished ||
    saved.slug !== profile.slug ||
    saved.website !== profile.website ||
    saved.logo !== profile.logo ||
    !saved.ecatalogs?.length ||
    saved.enterpriseId ||
    relationship?.productId !== STRONGFIBRE_PRODUCT_RELATION.productId
  ) {
    throw new Error("Strongfibre public profile failed post-upsert validation");
  }

  console.log(
    `[upsert-strongfibre-supplier-profile] published ${saved.nameEn} (${STRONGFIBRE_SUPPLIER_ID}); slug=${saved.slug}; catalogs=${saved.ecatalogs.length}; product=${relationship.productId}`,
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
