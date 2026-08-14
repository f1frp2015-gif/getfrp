import { revalidatePath } from "next/cache";
import { and, eq } from "drizzle-orm";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import {
  products,
  supplierProductPages,
  supplierProductReviewLogs,
} from "@/lib/db/schema";
import { gateSupplierAccess } from "@/lib/supplier-access";
import {
  SupplierProductPageInput,
  supplierProductPageDbValues,
} from "@/lib/products/ugc-input";
import { supplierRouteSlug } from "@/lib/supplier-slugs";
import { supplierProductPagesAvailable } from "@/lib/products/ugc-queries";

export const runtime = "nodejs";

async function ownedPage(id: string, supplierListingId: string) {
  const [row] = await db
    .select({ page: supplierProductPages, categorySlug: products.slug })
    .from(supplierProductPages)
    .innerJoin(products, eq(supplierProductPages.categoryId, products.id))
    .where(
      and(
        eq(supplierProductPages.id, id),
        eq(supplierProductPages.supplierListingId, supplierListingId),
      ),
    )
    .limit(1);
  return row ?? null;
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const gate = await gateSupplierAccess("products");
  if (!gate.ok) return NextResponse.json({ error: gate.reason }, { status: gate.status });
  if (!(await supplierProductPagesAvailable())) return NextResponse.json({ error: "Supplier product submissions are temporarily unavailable." }, { status: 503 });
  const parsed = SupplierProductPageInput.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid product submission." },
      { status: 400 },
    );
  }
  const { id } = await params;
  const existing = await ownedPage(id, gate.supplier.id);
  if (!existing) return NextResponse.json({ error: "Product not found." }, { status: 404 });

  await db.transaction(async (tx) => {
    await tx
      .update(supplierProductPages)
      .set({
        ...supplierProductPageDbValues(parsed.data),
        status: "pending",
        rejectionReason: null,
        approvedAt: null,
        reviewedBy: null,
        submittedAt: new Date(),
        updatedAt: new Date(),
      })
      .where(eq(supplierProductPages.id, id));
    await tx.insert(supplierProductReviewLogs).values({
      productPageId: id,
      action: "resubmitted",
    });
  });
  revalidatePath(`/products/${existing.categorySlug}`);
  revalidatePath(`/suppliers/${supplierRouteSlug(gate.supplier)}`);
  revalidatePath(`/suppliers/${supplierRouteSlug(gate.supplier)}/${existing.page.slug}`);
  return NextResponse.json({ data: { id, status: "pending" } });
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const gate = await gateSupplierAccess("products");
  if (!gate.ok) return NextResponse.json({ error: gate.reason }, { status: gate.status });
  if (!(await supplierProductPagesAvailable())) return NextResponse.json({ error: "Supplier product submissions are temporarily unavailable." }, { status: 503 });
  const { id } = await params;
  const existing = await ownedPage(id, gate.supplier.id);
  if (!existing) return NextResponse.json({ error: "Product not found." }, { status: 404 });
  await db.delete(supplierProductPages).where(eq(supplierProductPages.id, id));
  revalidatePath(`/products/${existing.categorySlug}`);
  revalidatePath(`/suppliers/${supplierRouteSlug(gate.supplier)}`);
  revalidatePath(`/suppliers/${supplierRouteSlug(gate.supplier)}/${existing.page.slug}`);
  return NextResponse.json({ ok: true });
}
