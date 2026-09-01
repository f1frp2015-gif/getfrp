import assert from "node:assert/strict";
import { test } from "node:test";

import { AOC_SUPPLIER_PROFILE } from "./data/aoc-supplier-profile";

process.env.DATABASE_URL ??= "postgresql://user:pass@localhost/getfrp-test";

async function loadClaimService() {
  return import("./supplier-claim-service");
}

test("extracts safe metadata from a nested Neon quota error", async () => {
  const { databaseErrorMetadata } = await loadClaimService();
  const cause = Object.assign(
    new Error("Server error (HTTP status 402): private query details"),
    { name: "NeonDbError", code: "QUOTA" },
  );
  const error = new Error("query failed for private@example.com", { cause });

  assert.deepEqual(databaseErrorMetadata(error), {
    name: "NeonDbError",
    code: "QUOTA",
    status: 402,
  });
  assert.doesNotMatch(JSON.stringify(databaseErrorMetadata(error)), /private/i);
});

test("materializes a complete curated supplier without persisted timestamps", async () => {
  const { curatedSupplierInsertValues } = await loadClaimService();
  const values = curatedSupplierInsertValues(AOC_SUPPLIER_PROFILE);

  assert.equal(values.id, AOC_SUPPLIER_PROFILE.id);
  assert.equal(values.slug, AOC_SUPPLIER_PROFILE.slug);
  assert.equal(values.descriptionEn, AOC_SUPPLIER_PROFILE.descriptionEn);
  assert.deepEqual(values.productsEn, AOC_SUPPLIER_PROFILE.productsEn);
  assert.deepEqual(
    values.standardsSupported,
    AOC_SUPPLIER_PROFILE.standardsSupported,
  );
  assert.equal(values.enterpriseId, null);
  assert.equal("createdAt" in values, false);
  assert.equal("updatedAt" in values, false);
});

test("does not reintroduce a claimed curated supplier in claim search", async () => {
  const {
    claimSupplierFromProfile,
    mergeClaimSupplierSearchResults,
  } = await loadClaimService();
  const supplier = claimSupplierFromProfile(AOC_SUPPLIER_PROFILE);

  assert.equal(
    mergeClaimSupplierSearchResults([], "AOC").filter(
      ({ id }) => id === supplier.id,
    ).length,
    1,
  );
  assert.equal(
    mergeClaimSupplierSearchResults([], "AOC", [
      {
        id: supplier.id,
        slug: supplier.slug,
        enterpriseId: "6aa9b329-bbf0-4cae-8456-87f1f72e6cd5",
      },
    ]).filter(({ id }) => id === supplier.id).length,
    0,
  );
});
