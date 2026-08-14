import { and, eq, inArray } from "drizzle-orm";

import { db } from "../src/lib/db";
import {
  products,
  supplierListings,
  supplierProductPages,
  supplierProductReviewLogs,
} from "../src/lib/db/schema";

const DEMO_SUPPLIERS = [
  {
    id: "demo-ugc-supplier-a",
    slug: "demo-ugc-supplier-a",
    name: "演示供应商 A（非真实公司）",
    nameEn: "DEMO Supplier A — Not a Real Company",
    location: "演示数据",
    locationEn: "Demo data — not a trading entity",
    province: "江苏",
  },
  {
    id: "demo-ugc-supplier-b",
    slug: "demo-ugc-supplier-b",
    name: "演示供应商 B（非真实公司）",
    nameEn: "DEMO Supplier B — Not a Real Company",
    location: "演示数据",
    locationEn: "Demo data — not a trading entity",
    province: "山东",
  },
] as const;

const DEMO_PRODUCTS = [
  { supplierId: DEMO_SUPPLIERS[0].id, categoryId: "frp-grating", slug: "demo-pultruded-grating", name: "DEMO — FRP Pultruded Grating for Wastewater Treatment", process: "Pultrusion", material: "E-glass / vinyl ester", image: "/images/product-types/frp-grating.webp" },
  { supplierId: DEMO_SUPPLIERS[0].id, categoryId: "pultruded-profiles", slug: "demo-structural-profile", name: "DEMO — Structural Pultruded FRP Channel", process: "Pultrusion", material: "E-glass / polyester", image: "/images/product-types/pultruded-frp-profiles.webp" },
  { supplierId: DEMO_SUPPLIERS[0].id, categoryId: "frp-rebar", slug: "demo-gfrp-rebar", name: "DEMO — Sand-Coated GFRP Rebar", process: "Pultrusion", material: "ECR-glass / vinyl ester", image: "/images/product-types/gfrp-rebar.webp" },
  { supplierId: DEMO_SUPPLIERS[1].id, categoryId: "frp-pipe", slug: "demo-filament-wound-pipe", name: "DEMO — Filament-Wound FRP Process Pipe", process: "Filament winding", material: "E-glass / vinyl ester", image: "/images/product-types/frp-pipe.webp" },
  { supplierId: DEMO_SUPPLIERS[1].id, categoryId: "fiberglass-sheet", slug: "demo-fiberglass-panel", name: "DEMO — Corrosion-Resistant Fiberglass Panel", process: "Continuous lamination", material: "E-glass / polyester", image: "/images/product-types/fiberglass-sheet.webp" },
] as const;

async function removeDemo() {
  await db.delete(supplierListings).where(inArray(supplierListings.id, DEMO_SUPPLIERS.map((item) => item.id)));
  console.log("Deleted demo UGC suppliers and their cascading product/review rows.");
}

async function seedDemo() {
  for (const supplier of DEMO_SUPPLIERS) {
    await db.insert(supplierListings).values({
      ...supplier,
      category: "manufacturer",
      description: "仅用于后台审核流程测试；非真实企业，不得发布。",
      descriptionEn: "Demo-only workflow record. This is not a real company and must never be published.",
      products: [], productsEn: [], processList: [], processListEn: [], certifications: [], certificationsEn: [],
      verified: false, profilePublished: false, exportReady: false,
    }).onConflictDoUpdate({ target: supplierListings.id, set: { name: supplier.name, nameEn: supplier.nameEn, profilePublished: false, verified: false, exportReady: false, updatedAt: new Date() } });
  }

  for (const item of DEMO_PRODUCTS) {
    const [category] = await db.select({ id: products.id }).from(products).where(eq(products.id, item.categoryId)).limit(1);
    if (!category) throw new Error(`Missing catalog category ${item.categoryId}; run the product-core seed first.`);
    const [existing] = await db.select({ id: supplierProductPages.id }).from(supplierProductPages).where(and(eq(supplierProductPages.supplierListingId, item.supplierId), eq(supplierProductPages.slug, item.slug))).limit(1);
    const values = {
      supplierListingId: item.supplierId,
      categoryId: item.categoryId,
      slug: item.slug,
      name: item.name,
      description: "This is explicitly labeled demo data for testing the supplier upload and moderation workflow. It is not a real product, offer, manufacturer claim or purchasable SKU, and it remains pending and excluded from public pages and sitemaps.",
      images: [item.image], material: item.material, manufacturingProcesses: [item.process], applications: ["Workflow testing"], standards: [] as string[],
      parameters: { Purpose: "Back-office workflow test", Publication: "Forbidden until replaced with verified real data" },
      certifications: [] as string[], moq: 1, moqUnit: "demo unit", exportMarkets: ["Demo only"], status: "pending", isDemo: true, rejectionReason: null, approvedAt: null, reviewedBy: null, updatedAt: new Date(),
    };
    if (existing) await db.update(supplierProductPages).set(values).where(eq(supplierProductPages.id, existing.id));
    else {
      const [created] = await db.insert(supplierProductPages).values(values).returning({ id: supplierProductPages.id });
      await db.insert(supplierProductReviewLogs).values({ productPageId: created.id, action: "submitted", reason: "Explicit demo data; never approve for public use." });
    }
  }
  console.log("Seeded 2 explicitly non-public demo suppliers and 5 pending demo products.");
}

async function main() {
  if (process.argv.includes("--delete")) await removeDemo();
  else await seedDemo();
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
