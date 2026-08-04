import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { z } from "zod";

import { gateAdmin } from "@/lib/admin";
import { db } from "@/lib/db";
import { supplierListings } from "@/lib/db/schema";

export const runtime = "nodejs";

const optionalText = (max: number) => z.string().trim().max(max).optional();
const optionalNumber = (min: number, max: number) => z.number().int().min(min).max(max).nullable().optional();
const stringList = z.array(z.string().trim().min(1).max(160)).max(50).optional();

const SupplierUpdate = z
  .object({
    nameEn: z.string().trim().min(2).max(200),
    locationEn: optionalText(100),
    category: optionalText(50),
    website: optionalText(255),
    descriptionEn: optionalText(10_000),
    established: optionalNumber(1800, new Date().getFullYear() + 1),
    productsEn: stringList,
    processListEn: stringList,
    certificationsEn: stringList,
    capabilities: stringList,
    standardsSupported: stringList,
    moqKg: optionalNumber(0, 100_000_000),
    leadTimeDays: optionalNumber(0, 3650),
    verified: z.boolean().optional(),
    exportReady: z.boolean().optional(),
    profilePublished: z.boolean().optional(),
  })
  .strict();

function nullable(value: string | undefined): string | null | undefined {
  return value === undefined ? undefined : value || null;
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const gate = await gateAdmin();
  if (!gate.ok) return NextResponse.json({ error: gate.reason }, { status: gate.status });

  const parsed = SupplierUpdate.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid supplier data." },
      { status: 400 },
    );
  }
  if (parsed.data.website) {
    try {
      const website = new URL(parsed.data.website);
      if (!['http:', 'https:'].includes(website.protocol)) throw new Error("unsupported protocol");
    } catch {
      return NextResponse.json({ error: "Website must be a valid http or https URL." }, { status: 400 });
    }
  }

  const { id } = await params;
  const values = parsed.data;
  const now = new Date();
  const [updated] = await db
    .update(supplierListings)
    .set({
      nameEn: values.nameEn,
      locationEn: nullable(values.locationEn),
      category: nullable(values.category),
      website: nullable(values.website),
      descriptionEn: nullable(values.descriptionEn),
      established: values.established,
      productsEn: values.productsEn,
      processListEn: values.processListEn,
      certificationsEn: values.certificationsEn,
      capabilities: values.capabilities,
      standardsSupported: values.standardsSupported,
      moqKg: values.moqKg,
      leadTimeDays: values.leadTimeDays,
      verified: values.verified,
      exportReady: values.exportReady,
      profilePublished: values.profilePublished,
      profileReviewedAt:
        values.verified || values.exportReady || values.profilePublished ? now : undefined,
      updatedAt: now,
    })
    .where(eq(supplierListings.id, id))
    .returning({ id: supplierListings.id });

  if (!updated) return NextResponse.json({ error: "Supplier record not found." }, { status: 404 });
  return NextResponse.json({ data: updated });
}
