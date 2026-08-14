import { NextResponse } from "next/server";
import { PRODUCT_IMAGE_PREFIX, signedGetUrl } from "@/lib/oss";

export const runtime = "nodejs";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ key: string[] }> },
) {
  const { key } = await params;
  const objectKey = key.join("/");
  if (!objectKey.startsWith(`${PRODUCT_IMAGE_PREFIX}/`) || objectKey.includes("..")) {
    return new NextResponse("Not found", { status: 404 });
  }
  const response = NextResponse.redirect(signedGetUrl(objectKey, 600), 307);
  response.headers.set("Cache-Control", "public, s-maxage=540, stale-while-revalidate=60");
  response.headers.set("X-Robots-Tag", "index, follow");
  return response;
}
