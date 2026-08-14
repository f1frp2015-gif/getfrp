import { NextRequest, NextResponse } from "next/server";

import { gateSupplierAccess } from "@/lib/supplier-access";
import {
  ossConfigured,
  PRODUCT_IMAGE_PREFIX,
  signedPutUrl,
} from "@/lib/oss";

export const runtime = "nodejs";

const ALLOWED = ["image/jpeg", "image/png", "image/webp"];
const MAX_BYTES = 10 * 1024 * 1024;

export async function POST(req: NextRequest) {
  const gate = await gateSupplierAccess("products");
  if (!gate.ok) return NextResponse.json({ error: gate.reason }, { status: gate.status });
  if (!ossConfigured()) {
    return NextResponse.json({ error: "Product image storage is not configured." }, { status: 503 });
  }

  const body = await req.json().catch(() => ({}));
  const fileName = String(body?.fileName ?? "").trim();
  const contentType = String(body?.contentType ?? "").trim();
  const size = Number(body?.size ?? 0);
  if (!fileName || !ALLOWED.includes(contentType) || size <= 0 || size > MAX_BYTES) {
    return NextResponse.json(
      { error: "Use a JPG, PNG or WebP product image up to 10 MB." },
      { status: 400 },
    );
  }

  const safeName = fileName.replace(/[^\w.\-]+/g, "_").slice(-100) || "product";
  const key = `${PRODUCT_IMAGE_PREFIX}/${gate.supplier.id}/${Date.now()}-${safeName}`;
  return NextResponse.json({
    uploadUrl: signedPutUrl(key, contentType),
    key,
    getUrl: `/supplier-product-assets/${key}`,
  });
}
