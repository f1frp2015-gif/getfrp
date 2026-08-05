// Idempotently publish Noah Composites' curated public supplier profile.
// The company has not claimed this profile, so it remains unverified and is
// not linked to a GetFRP enterprise account.
//
//   pnpm tsx --env-file=.env.local scripts/upsert-noah-composites-supplier-profile.ts

import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { supplierListings } from "@/lib/db/schema";
import {
  NOAH_COMPOSITES_SUPPLIER_ID,
  NOAH_COMPOSITES_SUPPLIER_PROFILE,
} from "@/lib/data/noah-composites-supplier-profile";

async function main() {
  const { id: _id, createdAt: _createdAt, ...profileUpdate } =
    NOAH_COMPOSITES_SUPPLIER_PROFILE;
  void _id;
  void _createdAt;

  await db
    .insert(supplierListings)
    .values(NOAH_COMPOSITES_SUPPLIER_PROFILE)
    .onConflictDoUpdate({
      target: supplierListings.id,
      set: { ...profileUpdate, updatedAt: new Date() },
    });

  const [profile] = await db
    .select({
      nameEn: supplierListings.nameEn,
      slug: supplierListings.slug,
      verified: supplierListings.verified,
      profilePublished: supplierListings.profilePublished,
      website: supplierListings.website,
      logo: supplierListings.logo,
      enterpriseId: supplierListings.enterpriseId,
      ecatalogs: supplierListings.ecatalogs,
    })
    .from(supplierListings)
    .where(eq(supplierListings.id, NOAH_COMPOSITES_SUPPLIER_ID))
    .limit(1);

  if (
    !profile?.profilePublished ||
    profile.verified ||
    profile.enterpriseId ||
    profile.slug !== NOAH_COMPOSITES_SUPPLIER_PROFILE.slug ||
    profile.website !== NOAH_COMPOSITES_SUPPLIER_PROFILE.website ||
    profile.logo !== NOAH_COMPOSITES_SUPPLIER_PROFILE.logo ||
    !profile.ecatalogs?.length
  ) {
    throw new Error("Noah Composites public profile failed post-upsert validation");
  }

  console.log(
    `[upsert-noah-composites-supplier-profile] published ${profile.nameEn} (${NOAH_COMPOSITES_SUPPLIER_ID}); slug=${profile.slug}; catalogs=${profile.ecatalogs.length}; status=public-unclaimed`,
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
