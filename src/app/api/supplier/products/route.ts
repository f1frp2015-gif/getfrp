import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { and, eq } from "drizzle-orm";
import { z } from "zod";

import { db } from "@/lib/db";
import { products, supplierProducts } from "@/lib/db/schema";
import {
  SupplierProductInput,
  supplierProductDbValues,
} from "@/lib/products/supplier-input";
import { gateSupplierAccess } from "@/lib/supplier-access";

export const runtime = "nodejs";

const CreateInput = SupplierProductInput.safeExtend({
  productId: z.string().trim().min(1).max(100),
});

export async function POST(request: Request) {
  const gate = await gateSupplierAccess("products");
  if (!gate.ok) {
    return NextResponse.json({ error: gate.reason }, { status: gate.status });
  }

  const parsed = CreateInput.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid product offering." },
      { status: 400 },
    );
  }

  const [product] = await db
    .select({ id: products.id, slug: products.slug })
    .from(products)
    .where(and(eq(products.id, parsed.data.productId), eq(products.status, "published")))
    .limit(1);
  if (!product) {
    return NextResponse.json(
      { error: "Only published catalog products can be added." },
      { status: 404 },
    );
  }

  const { productId, ...values } = parsed.data;
  try {
    const [created] = await db
      .insert(supplierProducts)
      .values({
        supplierListingId: gate.supplier.id,
        productId,
        ...supplierProductDbValues(values),
        isVerified: false,
      })
      .returning({ id: supplierProducts.id });

    revalidatePath(`/products/${product.slug}`);
    revalidatePath(`/suppliers/${gate.supplier.slug ?? gate.supplier.id}`);
    return NextResponse.json({ data: created }, { status: 201 });
  } catch (error) {
    console.error("[supplier products POST] failed", error);
    return NextResponse.json(
      { error: "This product is already linked to your supplier profile." },
      { status: 409 },
    );
  }
}
