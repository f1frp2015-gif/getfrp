// Idempotently restore F1 Composites' verified, claimed and sponsored GetFRP
// profile. The inserts make this safe for a newly provisioned GetFRP database;
// existing records are updated in place.
//
//   tsx --env-file=.env.local scripts/upsert-f1-supplier-profile.ts

import { and, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { enterprises, supplierListings, users } from "@/lib/db/schema";
import {
  F1_COMPOSITE_ENTERPRISE_ID,
  F1_COMPOSITE_PINNED_BRAND_PRIORITY,
  F1_COMPOSITE_SUPPLIER_ID,
  F1_COMPOSITE_SUPPLIER_PROFILE,
} from "@/lib/data/f1-composite-supplier-profile";

const OWNER_EMAIL = "f1frp2015@gmail.com";

async function main() {
  const now = new Date();
  const productsZh = F1_COMPOSITE_SUPPLIER_PROFILE.products ?? [];
  const servicesZh = F1_COMPOSITE_SUPPLIER_PROFILE.processList ?? [];
  const certifications = F1_COMPOSITE_SUPPLIER_PROFILE.certifications ?? [];

  await db
    .insert(enterprises)
    .values({
      id: F1_COMPOSITE_ENTERPRISE_ID,
      name: F1_COMPOSITE_SUPPLIER_PROFILE.name,
      shortName: F1_COMPOSITE_SUPPLIER_PROFILE.nameEn,
      logo: F1_COMPOSITE_SUPPLIER_PROFILE.logo,
      status: "verified",
      category: "manufacturer",
      province: F1_COMPOSITE_SUPPLIER_PROFILE.province,
      city: "重庆",
      address: F1_COMPOSITE_SUPPLIER_PROFILE.address,
      contactName: "Doris Li",
      contactPhone: "13883338993",
      contactEmail: F1_COMPOSITE_SUPPLIER_PROFILE.contactEmail,
      website: F1_COMPOSITE_SUPPLIER_PROFILE.website,
      established: F1_COMPOSITE_SUPPLIER_PROFILE.established,
      employeeCount: "10-50",
      description: F1_COMPOSITE_SUPPLIER_PROFILE.description,
      products: productsZh,
      processes: servicesZh,
      certifications,
      updatedAt: now,
    })
    .onConflictDoUpdate({
      target: enterprises.id,
      set: {
        name: F1_COMPOSITE_SUPPLIER_PROFILE.name,
        shortName: F1_COMPOSITE_SUPPLIER_PROFILE.nameEn,
        logo: F1_COMPOSITE_SUPPLIER_PROFILE.logo,
        status: "verified",
        category: "manufacturer",
        province: F1_COMPOSITE_SUPPLIER_PROFILE.province,
        city: "重庆",
        address: F1_COMPOSITE_SUPPLIER_PROFILE.address,
        contactName: "Doris Li",
        contactPhone: "13883338993",
        contactEmail: F1_COMPOSITE_SUPPLIER_PROFILE.contactEmail,
        website: F1_COMPOSITE_SUPPLIER_PROFILE.website,
        established: F1_COMPOSITE_SUPPLIER_PROFILE.established,
        employeeCount: "10-50",
        description: F1_COMPOSITE_SUPPLIER_PROFILE.description,
        products: productsZh,
        processes: servicesZh,
        certifications,
        updatedAt: now,
      },
    });

  await db
    .insert(supplierListings)
    .values({
      ...F1_COMPOSITE_SUPPLIER_PROFILE,
      updatedAt: now,
    })
    .onConflictDoUpdate({
      target: supplierListings.id,
      set: {
        name: F1_COMPOSITE_SUPPLIER_PROFILE.name,
        nameEn: F1_COMPOSITE_SUPPLIER_PROFILE.nameEn,
        slug: F1_COMPOSITE_SUPPLIER_PROFILE.slug,
        location: F1_COMPOSITE_SUPPLIER_PROFILE.location,
        locationEn: F1_COMPOSITE_SUPPLIER_PROFILE.locationEn,
        province: F1_COMPOSITE_SUPPLIER_PROFILE.province,
        category: F1_COMPOSITE_SUPPLIER_PROFILE.category,
        products: F1_COMPOSITE_SUPPLIER_PROFILE.products,
        productsEn: F1_COMPOSITE_SUPPLIER_PROFILE.productsEn,
        processList: F1_COMPOSITE_SUPPLIER_PROFILE.processList,
        processListEn: F1_COMPOSITE_SUPPLIER_PROFILE.processListEn,
        established: F1_COMPOSITE_SUPPLIER_PROFILE.established,
        verified: true,
        description: F1_COMPOSITE_SUPPLIER_PROFILE.description,
        descriptionEn: F1_COMPOSITE_SUPPLIER_PROFILE.descriptionEn,
        certifications: F1_COMPOSITE_SUPPLIER_PROFILE.certifications,
        certificationsEn: F1_COMPOSITE_SUPPLIER_PROFILE.certificationsEn,
        productsServicesSummary:
          F1_COMPOSITE_SUPPLIER_PROFILE.productsServicesSummary,
        productsServicesSummaryEn:
          F1_COMPOSITE_SUPPLIER_PROFILE.productsServicesSummaryEn,
        ecatalogs: F1_COMPOSITE_SUPPLIER_PROFILE.ecatalogs,
        profilePublished: true,
        profileReviewedAt:
          F1_COMPOSITE_SUPPLIER_PROFILE.profileReviewedAt,
        logo: F1_COMPOSITE_SUPPLIER_PROFILE.logo,
        contactEmail: F1_COMPOSITE_SUPPLIER_PROFILE.contactEmail,
        contactPhone: F1_COMPOSITE_SUPPLIER_PROFILE.contactPhone,
        address: F1_COMPOSITE_SUPPLIER_PROFILE.address,
        website: F1_COMPOSITE_SUPPLIER_PROFILE.website,
        enterpriseId: F1_COMPOSITE_ENTERPRISE_ID,
        scaleTier: F1_COMPOSITE_SUPPLIER_PROFILE.scaleTier,
        brandPriority: F1_COMPOSITE_PINNED_BRAND_PRIORITY,
        capabilities: F1_COMPOSITE_SUPPLIER_PROFILE.capabilities,
        standardsSupported: F1_COMPOSITE_SUPPLIER_PROFILE.standardsSupported,
        moqKg: F1_COMPOSITE_SUPPLIER_PROFILE.moqKg,
        leadTimeDays: F1_COMPOSITE_SUPPLIER_PROFILE.leadTimeDays,
        exportReady: true,
        updatedAt: now,
      },
    });

  await db
    .update(users)
    .set({ enterpriseId: F1_COMPOSITE_ENTERPRISE_ID, updatedAt: now })
    .where(and(eq(users.email, OWNER_EMAIL), eq(users.role, "admin")));

  const [result] = await db
    .select({
      id: supplierListings.id,
      nameEn: supplierListings.nameEn,
      verified: supplierListings.verified,
      logo: supplierListings.logo,
      website: supplierListings.website,
      enterpriseId: supplierListings.enterpriseId,
      profilePublished: supplierListings.profilePublished,
      brandPriority: supplierListings.brandPriority,
      ecatalogs: supplierListings.ecatalogs,
    })
    .from(supplierListings)
    .where(eq(supplierListings.id, F1_COMPOSITE_SUPPLIER_ID))
    .limit(1);

  if (
    !result?.verified ||
    result.logo !== F1_COMPOSITE_SUPPLIER_PROFILE.logo ||
    result.enterpriseId !== F1_COMPOSITE_ENTERPRISE_ID ||
    !result.website ||
    !result.profilePublished ||
    result.brandPriority !== F1_COMPOSITE_PINNED_BRAND_PRIORITY
  ) {
    throw new Error("F1 supplier profile verification failed after upsert");
  }

  console.log(
    `[upsert-f1-supplier-profile] restored ${result.nameEn} (${result.id}); catalogs=${result.ecatalogs?.length ?? 0}; logo=${result.logo}; verified=${result.verified}; priority=${result.brandPriority}`,
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
