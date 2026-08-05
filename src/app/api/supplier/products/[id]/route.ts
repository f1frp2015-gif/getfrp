import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { and, eq } from "drizzle-orm";

import { db } from "@/lib/db";
import { products, supplierProducts } from "@/lib/db/schema";
import {
  SupplierProductInput,
  supplierProductDbValues,
} from "@/lib/products/supplier-input";
import { gateSupplierAccess } from "@/lib/supplier-access";

export const runtime = "nodejs";

async function ownedRelation(id: string, supplierListingId: string) {
  const [row] = await db
    .select({ relation: supplierProducts, productSlug: products.slug })
    .from(supplierProducts)
    .innerJoin(products, eq(supplierProducts.productId, products.id))
    .where(
      and(
        eq(supplierProducts.id, id),
        eq(supplierProducts.supplierListingId, supplierListingId),
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
  if (!gate.ok) {
    return NextResponse.json({ error: gate.reason }, { status: gate.status });
  }

  const parsed = SupplierProductInput.safeParse(
    await request.json().catch(() => null),
  );
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid product offering." },
      { status: 400 },
    );
  }

  const { id } = await params;
  const existing = await ownedRelation(id, gate.supplier.id);
  if (!existing) {
    return NextResponse.json({ error: "Product offering not found." }, { status: 404 });
  }

  await db
    .update(supplierProducts)
    .set({
      ...supplierProductDbValues(parsed.data),
      isVerified: false,
      updatedAt: new Date(),
    })
    .where(eq(supplierProducts.id, id));

  revalidatePath(`/products/${existing.productSlug}`);
  revalidatePath(`/suppliers/${gate.supplier.slug ?? gate.supplier.id}`);
  return NextResponse.json({ data: { id } });
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const gate = await gateSupplierAccess("products");
  if (!gate.ok) {
    return NextResponse.json({ error: gate.reason }, { status: gate.status });
  }

  const { id } = await params;
  const existing = await ownedRelation(id, gate.supplier.id);
  if (!existing) {
    return NextResponse.json({ error: "Product offering not found." }, { status: 404 });
  }

  await db.delete(supplierProducts).where(eq(supplierProducts.id, id));
  revalidatePath(`/products/${existing.productSlug}`);
  revalidatePath(`/suppliers/${gate.supplier.slug ?? gate.supplier.id}`);
  return NextResponse.json({ ok: true });
}
