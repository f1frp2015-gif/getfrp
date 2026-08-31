import assert from "node:assert/strict";
import { test } from "node:test";

import { AOC_SUPPLIER_PROFILE } from "@/lib/data/aoc-supplier-profile";

process.env.DATABASE_URL ??= "postgresql://user:pass@localhost/getfrp-test";

async function loadRfqTargetSupplier() {
  return import("@/lib/rfq-target-supplier");
}

test("normalizes repeated and unsafe RFQ search parameters", async () => {
  const { firstRfqSearchParam } = await import("@/lib/rfq-links");
  assert.equal(firstRfqSearchParam(["  first  ", "second"]), "first");
  assert.equal(firstRfqSearchParam("line\u0000break"), "line break");
  assert.equal(firstRfqSearchParam("x".repeat(201), 200), undefined);
  assert.equal(firstRfqSearchParam("   "), undefined);
});

test("keeps product, combination and topic context in priority order", async () => {
  const { getRfqInitialProduct } = await import("@/lib/rfq-links");
  assert.equal(
    getRfqInitialProduct({ product: "FRP grating", combo: "pultrusion" }),
    "FRP grating",
  );
  assert.equal(
    getRfqInitialProduct({ combo: ["carbon-fiber-autoclave", "ignored"] }),
    "carbon-fiber-autoclave",
  );
  assert.equal(
    getRfqInitialProduct({ topic: "source-pultruded-profiles" }),
    "source-pultruded-profiles",
  );
});

test("builds every contextual RFQ URL with encoded, ordered parameters", async () => {
  const { rfqHref } = await import("@/lib/rfq-links");
  assert.equal(rfqHref(), "/rfq");
  assert.equal(rfqHref({ supplier: "sup-aoc" }), "/rfq?supplier=sup-aoc");
  assert.equal(
    rfqHref({ product: "FRP grating 38×38", supplier: "sup-aoc" }),
    "/rfq?product=FRP+grating+38%C3%9738&supplier=sup-aoc",
  );
  assert.equal(
    rfqHref({ category: "finished", combo: "glass-epoxy", topic: "FRP pipe" }),
    "/rfq?category=finished&combo=glass-epoxy&topic=FRP+pipe",
  );
});

test("resolves a published curated supplier without querying the database", async () => {
  const { resolveRfqTargetSupplier } = await loadRfqTargetSupplier();
  let databaseCalls = 0;
  const target = await resolveRfqTargetSupplier(
    AOC_SUPPLIER_PROFILE.id,
    async () => {
      databaseCalls += 1;
      throw new Error("database must not be called");
    },
  );

  assert.equal(databaseCalls, 0);
  assert.deepEqual(target, {
    id: AOC_SUPPLIER_PROFILE.id,
    name: AOC_SUPPLIER_PROFILE.nameEn,
    verified: Boolean(AOC_SUPPLIER_PROFILE.verified),
    enterpriseId: AOC_SUPPLIER_PROFILE.enterpriseId,
  });
});

test("accepts legacy supplier-name links and canonicalizes them to the ID", async () => {
  const { resolveRfqTargetSupplier } = await loadRfqTargetSupplier();
  const target = await resolveRfqTargetSupplier(
    AOC_SUPPLIER_PROFILE.nameEn ?? undefined,
    async () => {
      throw new Error("database must not be called");
    },
  );

  assert.equal(target?.id, AOC_SUPPLIER_PROFILE.id);
});

test("falls back to a general RFQ when supplier lookup is unavailable", async () => {
  const { resolveRfqTargetSupplier } = await loadRfqTargetSupplier();
  const originalWarn = console.warn;
  console.warn = () => undefined;
  try {
    const target = await resolveRfqTargetSupplier(
      "database-only-supplier",
      async () => {
        throw new Error("database offline");
      },
    );
    assert.equal(target, null);
  } finally {
    console.warn = originalWarn;
  }
});
