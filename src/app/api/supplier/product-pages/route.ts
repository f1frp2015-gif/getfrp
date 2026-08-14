import { revalidatePath } from "next/cache";
import { and, eq } from "drizzle-orm";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import {
  products,
  supplierProductPages,
  supplierProductReviewLogs,
} from "@/lib/db/schema";
import { makeSlug } from "@/lib/slug";
import { gateSupplierAccess } from "@/lib/supplier-access";
import {
  SupplierProductPageInput,
  supplierProductPageDbValues,
} from "@/lib/products/ugc-input";
import { supplierRouteSlug } from "@/lib/supplier-slugs";
import { supplierProductPagesAvailable } from "@/lib/products/ugc-queries";

export const runtime = "nodejs";

export async function POST(request: Request) {
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
  const [category] = await db
    .select({ id: products.id, slug: products.slug })
    .from(products)
    .where(and(eq(products.id, parsed.data.categoryId), eq(products.status, "published")))
    .limit(1);
  if (!category) {
    return NextResponse.json({ error: "Select a published product category." }, { status: 400 });
  }

  const slug = makeSlug(parsed.data.name, parsed.data.name, 150);
  try {
    const [created] = await db.transaction(async (tx) => {
      const rows = await tx
        .insert(supplierProductPages)
        .values({
          supplierListingId: gate.supplier.id,
          slug,
          ...supplierProductPageDbValues(parsed.data),
          status: "pending",
        })
        .returning({ id: supplierProductPages.id, slug: supplierProductPages.slug });
      await tx.insert(supplierProductReviewLogs).values({
        productPageId: rows[0].id,
        action: "submitted",
      });
      return rows;
    });
    revalidatePath(`/products/${category.slug}`);
    revalidatePath(`/suppliers/${supplierRouteSlug(gate.supplier)}`);
    return NextResponse.json({ data: created }, { status: 201 });
  } catch (error) {
    console.error("[supplier product pages POST] failed", error);
    return NextResponse.json(
      { error: "A product with the same name already exists for this supplier." },
      { status: 409 },
    );
  }
}
