import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { PRODUCT_SEED_RECORDS } from "../src/lib/data/products";
import {
  getSupplierCategoryPage,
  supplierMatchesCategory,
} from "../src/lib/data/supplier-category-pages";
import {
  products,
  supplierListings,
  supplierProducts,
} from "../src/lib/db/schema";

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) throw new Error("DATABASE_URL is required");

const sql = neon(databaseUrl);
const db = drizzle(sql);

async function applySchema() {
  const migration = await readFile(
    resolve("scripts/migrations/0002_supplier_product_core.sql"),
    "utf8",
  );
  const statements = migration
    .split(";")
    .map((statement) => statement.trim())
    .filter(Boolean);

  for (const statement of statements) {
    await sql.query(statement);
  }
}

async function seedProducts() {
  for (const product of PRODUCT_SEED_RECORDS) {
    await db
      .insert(products)
      .values(product)
      .onConflictDoUpdate({
        target: products.id,
        set: {
          slug: product.slug,
          name: product.name,
          nameEn: product.nameEn,
          shortName: product.shortName,
          category: product.category,
          summary: product.summary,
          description: product.description,
          overview: product.overview,
          materials: product.materials,
          manufacturingProcesses: product.manufacturingProcesses,
          applications: product.applications,
          standards: product.standards,
          specifications: product.specifications,
          buyingChecks: product.buyingChecks,
          faqs: product.faqs,
          searchTerms: product.searchTerms,
          imageUrl: product.imageUrl,
          imageAlt: product.imageAlt,
          status: product.status,
          source: product.source,
          updatedAt: new Date(),
        },
      });
  }
}

async function seedSupplierRelationships() {
  const suppliers = await db.select().from(supplierListings);
  let relationshipCount = 0;

  for (const supplier of suppliers) {
    for (const product of PRODUCT_SEED_RECORDS) {
      const category = getSupplierCategoryPage(product.slug);
      if (!category || !supplierMatchesCategory(category, supplier)) continue;

      const relationshipType =
        supplier.category === "resin" || supplier.category === "fiber"
          ? "supplier"
          : "manufacturer";
      const evidence = {
        sourceType: supplier.website ? "official_website" : "directory_record",
        sourceUrl: supplier.website ?? undefined,
        reviewedAt: supplier.profileReviewedAt?.toISOString(),
        note: supplier.verified
          ? "Relationship derived from a verified GetFRP supplier capability record."
          : "Relationship derived from a public supplier capability record.",
      };

      await db
        .insert(supplierProducts)
        .values({
          supplierListingId: supplier.id,
          productId: product.id,
          relationshipType,
          supplierProductName: product.shortName,
          isPrimary: false,
          isVerified: Boolean(supplier.verified),
          customAvailable: supplier.category === "manufacturer",
          moq: supplier.moqKg,
          moqUnit: supplier.moqKg == null ? null : "kg",
          leadTimeDays: supplier.leadTimeDays,
          evidence,
        })
        .onConflictDoUpdate({
          target: [
            supplierProducts.supplierListingId,
            supplierProducts.productId,
          ],
          set: {
            relationshipType,
            supplierProductName: product.shortName,
            isVerified: Boolean(supplier.verified),
            customAvailable: supplier.category === "manufacturer",
            moq: supplier.moqKg,
            moqUnit: supplier.moqKg == null ? null : "kg",
            leadTimeDays: supplier.leadTimeDays,
            evidence,
            updatedAt: new Date(),
          },
        });
      relationshipCount += 1;
    }
  }

  return { suppliers: suppliers.length, relationships: relationshipCount };
}

async function main() {
  await applySchema();
  await seedProducts();
  const result = await seedSupplierRelationships();

  console.log(
    `Supplier/product core ready: ${PRODUCT_SEED_RECORDS.length} products, ${result.relationships} relationships across ${result.suppliers} suppliers.`,
  );
}

main().catch((error: unknown) => {
  console.error(
    `Failed to apply supplier/product core: ${
      error instanceof Error ? error.message : String(error)
    }`,
  );
  process.exitCode = 1;
});
