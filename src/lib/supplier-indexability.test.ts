import assert from "node:assert/strict";
import test from "node:test";
import type { SupplierListing } from "@/lib/db/schema";
import { isSupplierProfileIndexable } from "@/lib/supplier-indexability";

const base = {
  id: "sup-test",
  slug: "test-frp",
  name: "Test FRP",
  nameEn: "Test FRP",
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-09T00:00:00Z"),
  descriptionEn: "A".repeat(340),
  productsEn: ["FRP profiles", "FRP grating"],
  processListEn: ["Pultrusion"],
  website: "https://example.com",
  ecatalogs: [],
} as unknown as SupplierListing;

test("index gate accepts a reviewed, sourced and complete supplier profile", () => {
  assert.equal(isSupplierProfileIndexable(base), true);
});

test("index gate rejects public directory records without standalone evidence", () => {
  assert.equal(
    isSupplierProfileIndexable({
      ...base,
      profilePublished: false,
      profileReviewedAt: null,
      descriptionEn: "Short directory summary.",
    }),
    false,
  );
});

test("index gate rejects reviewed records that have no official source", () => {
  assert.equal(
    isSupplierProfileIndexable({ ...base, website: null, ecatalogs: [] }),
    false,
  );
});
