import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

import { gateAdmin } from "@/lib/admin";
import { db } from "@/lib/db";
import { products } from "@/lib/db/schema";
import {
  ProductAdminInput,
  productDbValues,
} from "@/lib/products/admin-input";

export const runtime = "nodejs";

export async function POST(request: Request) {
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

  try {
    const [created] = await db
      .insert(products)
      .values({
        id: `catalog-${crypto.randomUUID()}`,
        ...productDbValues(parsed.data),
        source: "admin",
      })
      .returning({ id: products.id, slug: products.slug });

    revalidatePath("/products");
    revalidatePath(`/products/${created.slug}`);
    return NextResponse.json({ data: created }, { status: 201 });
  } catch (error) {
    console.error("[admin products POST] failed", error);
    return NextResponse.json(
      { error: "A product with this slug may already exist." },
      { status: 409 },
    );
  }
}
