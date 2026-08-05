import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { count, eq } from "drizzle-orm";

import { gateAdmin } from "@/lib/admin";
import { db } from "@/lib/db";
import { products, supplierProducts } from "@/lib/db/schema";
import {
  ProductAdminInput,
  productDbValues,
} from "@/lib/products/admin-input";

export const runtime = "nodejs";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const gate = await gateAdmin();
  if (!gate.ok) {
    return NextResponse.json({ error: gate.reason }, { status: gate.status });
  }

  const parsed = ProductAdminInput.safeParse(
    await request.json().catch(() => null),
  );
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid product." },
      { status: 400 },
    );
  }

  const { id } = await params;
  const [existing] = await db
    .select({ slug: products.slug })
    .from(products)
    .where(eq(products.id, id))
    .limit(1);
  if (!existing) {
    return NextResponse.json({ error: "Product not found." }, { status: 404 });
  }

  try {
    const [updated] = await db
      .update(products)
      .set({ ...productDbValues(parsed.data), updatedAt: new Date() })
      .where(eq(products.id, id))
      .returning({ id: products.id, slug: products.slug });

    revalidatePath("/products");
    revalidatePath(`/products/${existing.slug}`);
    revalidatePath(`/products/${updated.slug}`);
    return NextResponse.json({ data: updated });
  } catch (error) {
    console.error("[admin products PATCH] failed", error);
    return NextResponse.json(
      { error: "A product with this slug may already exist." },
      { status: 409 },
    );
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const gate = await gateAdmin();
  if (!gate.ok) {
    return NextResponse.json({ error: gate.reason }, { status: gate.status });
  }

  const { id } = await params;
  const [[existing], [{ linkedCount }]] = await Promise.all([
    db
      .select({ slug: products.slug })
      .from(products)
      .where(eq(products.id, id))
      .limit(1),
    db
      .select({ linkedCount: count() })
      .from(supplierProducts)
      .where(eq(supplierProducts.productId, id)),
  ]);
  if (!existing) {
    return NextResponse.json({ error: "Product not found." }, { status: 404 });
  }
  if (linkedCount > 0) {
    return NextResponse.json(
      {
        error:
          "Remove supplier relationships before deleting this catalog product.",
      },
      { status: 409 },
    );
  }

  await db.delete(products).where(eq(products.id, id));
  revalidatePath("/products");
  revalidatePath(`/products/${existing.slug}`);
  return NextResponse.json({ ok: true });
}
