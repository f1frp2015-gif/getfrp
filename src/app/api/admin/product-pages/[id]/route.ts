import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { after, NextResponse } from "next/server";

import { gateAdmin } from "@/lib/admin";
import { db } from "@/lib/db";
import {
  products,
  supplierListings,
  supplierProductPages,
  supplierProductReviewLogs,
} from "@/lib/db/schema";
import { ProductReviewInput } from "@/lib/products/ugc-input";
import { supplierRouteSlug } from "@/lib/supplier-slugs";
import { supplierProductPagesAvailable } from "@/lib/products/ugc-queries";
import { isSupplierProfileIndexable } from "@/lib/supplier-indexability";
import { enrichSupplierWithCuratedProfile } from "@/lib/data/curated-supplier-profiles";
import { fanOutSearchPush } from "@/lib/ingest/search-push";
import { CURRENT_SITE_URL } from "@/lib/sites";

export const runtime = "nodejs";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const gate = await gateAdmin();
  if (!gate.ok) return NextResponse.json({ error: gate.reason }, { status: gate.status });
  if (!(await supplierProductPagesAvailable())) return NextResponse.json({ error: "Supplier product reviews are temporarily unavailable." }, { status: 503 });
  const parsed = ProductReviewInput.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid review." },
      { status: 400 },
    );
  }
  const { id } = await params;
  const [existing] = await db
    .select({ page: supplierProductPages, supplier: supplierListings, categorySlug: products.slug })
    .from(supplierProductPages)
    .innerJoin(
      supplierListings,
      eq(supplierProductPages.supplierListingId, supplierListings.id),
    )
    .innerJoin(products, eq(supplierProductPages.categoryId, products.id))
    .where(eq(supplierProductPages.id, id))
    .limit(1);
  if (!existing) return NextResponse.json({ error: "Product not found." }, { status: 404 });
  if (existing.page.isDemo && parsed.data.action === "approved") {
    return NextResponse.json(
      { error: "Demo products can never be approved. Delete them after workflow testing." },
      { status: 400 },
    );
  }

  const approved = parsed.data.action === "approved";
  await db.transaction(async (tx) => {
    await tx
      .update(supplierProductPages)
      .set({
        status: parsed.data.action,
        rejectionReason: approved ? null : parsed.data.reason,
        approvedAt: approved ? new Date() : null,
        reviewedBy: gate.user.id,
        updatedAt: new Date(),
      })
      .where(eq(supplierProductPages.id, id));
    await tx.insert(supplierProductReviewLogs).values({
      productPageId: id,
      reviewerId: gate.user.id,
      action: parsed.data.action,
      reason: parsed.data.reason || null,
    });
  });
  const supplierSlug = supplierRouteSlug(existing.supplier);
  revalidatePath(`/products/${existing.categorySlug}`);
  revalidatePath(`/suppliers/${supplierSlug}`);
  revalidatePath(`/suppliers/${supplierSlug}/${existing.page.slug}`);
  revalidatePath("/sitemap.xml");
  revalidatePath("/sitemaps/suppliers.xml");
  if (approved && isSupplierProfileIndexable(enrichSupplierWithCuratedProfile(existing.supplier))) {
    after(async () => {
      const result = await fanOutSearchPush([`${CURRENT_SITE_URL}/suppliers/${supplierSlug}/${existing.page.slug}`, `${CURRENT_SITE_URL}/products/${existing.categorySlug}`]);
      console.info("[search-discovery] product review", JSON.stringify(result));
    });
  }
  return NextResponse.json({ data: { id, status: parsed.data.action } });
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const gate = await gateAdmin();
  if (!gate.ok) return NextResponse.json({ error: gate.reason }, { status: gate.status });
  if (!(await supplierProductPagesAvailable())) return NextResponse.json({ error: "Supplier product reviews are temporarily unavailable." }, { status: 503 });
  const { id } = await params;
  const [existing] = await db
    .select({ page: supplierProductPages, supplier: supplierListings, categorySlug: products.slug })
    .from(supplierProductPages)
    .innerJoin(supplierListings, eq(supplierProductPages.supplierListingId, supplierListings.id))
    .innerJoin(products, eq(supplierProductPages.categoryId, products.id))
    .where(eq(supplierProductPages.id, id))
    .limit(1);
  if (!existing) return NextResponse.json({ error: "Product not found." }, { status: 404 });
  await db.delete(supplierProductPages).where(eq(supplierProductPages.id, id));
  const supplierSlug = supplierRouteSlug(existing.supplier);
  revalidatePath(`/products/${existing.categorySlug}`);
  revalidatePath(`/suppliers/${supplierSlug}`);
  revalidatePath(`/suppliers/${supplierSlug}/${existing.page.slug}`);
  revalidatePath("/sitemaps/suppliers.xml");
  return NextResponse.json({ ok: true });
}
