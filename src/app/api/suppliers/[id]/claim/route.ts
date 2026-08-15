import { NextResponse } from "next/server";
import { and, eq, inArray } from "drizzle-orm";
import { z } from "zod";
import { db } from "@/lib/db";
import { supplierClaims, supplierListings } from "@/lib/db/schema";
import { getCurrentUser } from "@/lib/auth/current-user";
import { containsCjk } from "@/lib/english-only";

export const runtime = "nodejs";

const ClaimRequest = z.object({
  contactName: z.string().trim().min(2).max(100),
  contactTitle: z.string().trim().max(100).optional().default(""),
  contactPhone: z.string().trim().min(6).max(20),
  contactEmail: z.string().trim().email().max(255),
  businessLicenseUrl: z.string().trim().url().max(2000).optional().or(z.literal("")),
  note: z.string().trim().max(3000).optional().default(""),
}).strict();

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const me = await getCurrentUser();
  if (!me) {
    return NextResponse.json({ error: "Please sign in before claiming a company." }, { status: 401 });
  }

  const [supplier] = await db
    .select()
    .from(supplierListings)
    .where(eq(supplierListings.id, id))
    .limit(1);
  if (!supplier) {
    return NextResponse.json({ error: "Supplier record not found." }, { status: 404 });
  }
  if (supplier.enterpriseId) {
    return NextResponse.json(
      { error: "This company already has an approved administrator." },
      { status: 409 }
    );
  }

  const existing = await db
    .select()
    .from(supplierClaims)
    .where(
      and(
        eq(supplierClaims.supplierListingId, id),
        eq(supplierClaims.userId, me.id),
        inArray(supplierClaims.status, ["pending", "approved"])
      )
    )
    .limit(1);
  if (existing.length > 0) {
    return NextResponse.json(
      { error: "You already have an active claim for this company." },
      { status: 409 }
    );
  }

  const parsed = ClaimRequest.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Please check the claim details." },
      { status: 400 },
    );
  }
  const { contactName, contactTitle, contactPhone, contactEmail, businessLicenseUrl, note } = parsed.data;
  if (containsCjk(`${contactName} ${contactTitle} ${note}`)) {
    return NextResponse.json(
      { error: "Supplier claim details must be written in English" },
      { status: 400 },
    );
  }

  const [row] = await db
    .insert(supplierClaims)
    .values({
      supplierListingId: id,
      userId: me.id,
      contactName,
      contactTitle: contactTitle || null,
      contactPhone,
      contactEmail,
      businessLicenseUrl: businessLicenseUrl || null,
      note: note || null,
    })
    .returning();

  return NextResponse.json(
    {
      data: {
        id: row.id,
        status: row.status,
        message: "Claim submitted. GetFRP will review the relationship and contact you by email or phone if needed.",
      },
    },
    { status: 201 }
  );
}
