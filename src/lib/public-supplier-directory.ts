import { cache } from "react";
import { and, asc, desc, eq, isNotNull, ne, sql } from "drizzle-orm";
import { db } from "@/lib/db";
import { enterprises, supplierListings } from "@/lib/db/schema";
import { supplierPublicPath } from "@/lib/supplier-slugs";
import type { SerializedSupplier } from "@/lib/types/supplier-directory";

const PINNED_SUPPLIER_ID = "sup-yaoyi";

export const getPublicSupplierDirectory = cache(
  async (locale: string): Promise<SerializedSupplier[]> => {
    const isEn = locale === "en";
    const pinnedRank = sql<number>`CASE WHEN ${supplierListings.id} = ${PINNED_SUPPLIER_ID} THEN 1 ELSE 0 END`;
    const tierRank = sql`CASE ${supplierListings.scaleTier} WHEN 'XL' THEN 4 WHEN 'L' THEN 3 WHEN 'M' THEN 2 WHEN 'S' THEN 1 ELSE 0 END`;
    const joinedRows = await db
      .select({
        supplier: supplierListings,
        enterpriseLogo: enterprises.logo,
        enterpriseWebsite: enterprises.website,
        employeeCount: enterprises.employeeCount,
        annualRevenue: enterprises.annualRevenue,
      })
      .from(supplierListings)
      .leftJoin(enterprises, eq(supplierListings.enterpriseId, enterprises.id))
      .where(
        and(
          isNotNull(supplierListings.slug),
          isNotNull(supplierListings.nameEn),
          ne(supplierListings.nameEn, ""),
        ),
      )
      .orderBy(
        desc(pinnedRank),
        desc(supplierListings.profilePublished),
        desc(supplierListings.verified),
        desc(supplierListings.brandPriority),
        desc(tierRank),
        desc(supplierListings.viewCount),
        asc(supplierListings.name),
      );

    return joinedRows.map(({ supplier, ...enterprise }) => ({
      id: supplier.id,
      slug: supplierPublicPath(supplier).replace("/suppliers/", ""),
      name: isEn ? supplier.nameEn ?? "" : supplier.name,
      category: supplier.category ?? "",
      location: isEn
        ? supplier.locationEn ?? ""
        : supplier.location ?? "",
      established: supplier.established ?? null,
      description: isEn
        ? supplier.descriptionEn ?? ""
        : supplier.description ?? "",
      products: (isEn
        ? supplier.productsEn ?? []
        : supplier.products ?? []) as string[],
      processList: (isEn
        ? supplier.processListEn ?? []
        : supplier.processList ?? []) as string[],
      certifications: (isEn
        ? supplier.certificationsEn ?? []
        : supplier.certifications ?? []) as string[],
      verified: Boolean(supplier.verified),
      profilePublished: Boolean(supplier.profilePublished),
      enterpriseId: supplier.enterpriseId ?? null,
      website: supplier.website ?? enterprise.enterpriseWebsite ?? null,
      logo: supplier.logo ?? enterprise.enterpriseLogo ?? null,
      scaleTier: supplier.scaleTier ?? null,
      employeeCount: enterprise.employeeCount ?? null,
      annualRevenue: enterprise.annualRevenue ?? null,
      capabilities: supplier.capabilities ?? [],
      standardsSupported: supplier.standardsSupported ?? [],
      moqKg: supplier.moqKg ?? null,
      leadTimeDays: supplier.leadTimeDays ?? null,
      exportReady: supplier.exportReady,
      sponsored: supplier.id === PINNED_SUPPLIER_ID,
    }));
  },
);
