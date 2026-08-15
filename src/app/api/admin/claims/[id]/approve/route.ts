import { NextResponse } from "next/server";
import { and, eq, isNull, ne } from "drizzle-orm";
import { db } from "@/lib/db";
import {
  enterprises,
  supplierClaims,
  supplierListings,
  supplierDocuments,
  users,
} from "@/lib/db/schema";
import { gateAdmin } from "@/lib/admin";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const gate = await gateAdmin();
  if (!gate.ok) {
    return NextResponse.json({ error: gate.reason }, { status: gate.status });
  }

  const body = await req.json().catch(() => ({}));
  const reviewNote: string | null = body?.reviewNote ?? null;

  const [claim] = await db
    .select()
    .from(supplierClaims)
    .where(eq(supplierClaims.id, id))
    .limit(1);
  if (!claim) {
    return NextResponse.json({ error: "Claim record not found" }, { status: 404 });
  }
  if (claim.status !== "pending") {
    return NextResponse.json(
      { error: `A claim with status ${claim.status} cannot be reviewed again` },
      { status: 409 }
    );
  }

  const [supplier] = await db
    .select()
    .from(supplierListings)
    .where(eq(supplierListings.id, claim.supplierListingId))
    .limit(1);
  if (!supplier) {
    return NextResponse.json({ error: "Supplier not found" }, { status: 404 });
  }

  // 1. Create or find enterprise record
  let enterpriseId = supplier.enterpriseId;
  if (!enterpriseId) {
    const [ent] = await db
      .insert(enterprises)
      .values({
        name: supplier.name,
        category: supplier.category ?? "manufacturer",
        province: supplier.province ?? null,
        city: supplier.location ?? null,
        contactName: claim.contactName,
        contactPhone: claim.contactPhone,
        contactEmail: claim.contactEmail,
        description: supplier.description ?? null,
        products: (supplier.products ?? []) as string[],
        processes: (supplier.processList ?? []) as string[],
        certifications: (supplier.certifications ?? []) as string[],
        established: supplier.established ?? null,
        businessLicense: claim.businessLicenseUrl ?? null,
        status: "verified",
      })
      .returning({ id: enterprises.id });
    enterpriseId = ent.id;

    await db
      .update(supplierListings)
      .set({ enterpriseId, updatedAt: new Date() })
      .where(eq(supplierListings.id, supplier.id));

    // Documents uploaded before approval were intentionally unlinked. Attach
    // them to the newly approved enterprise and supplier so product brochures
    // and certificates remain available after the claim is accepted.
    await db
      .update(supplierDocuments)
      .set({ enterpriseId, supplierListingId: supplier.id, updatedAt: new Date() })
      .where(and(eq(supplierDocuments.uploadedByUserId, claim.userId), isNull(supplierDocuments.enterpriseId)));
  }

  // 2. Promote user to enterprise_admin
  await db
    .update(users)
    .set({
      enterpriseId,
      role: "enterprise_admin",
      updatedAt: new Date(),
    })
    .where(eq(users.id, claim.userId));

  // 3. Mark this claim approved
  await db
    .update(supplierClaims)
    .set({
      status: "approved",
      reviewerId: gate.user.id,
      reviewNote,
      reviewedAt: new Date(),
    })
    .where(eq(supplierClaims.id, claim.id));

  // 4. Auto-reject competing pending claims on same supplier
  await db
    .update(supplierClaims)
    .set({
      status: "rejected",
      reviewerId: gate.user.id,
      reviewNote: "This company has already been claimed by another applicant",
      reviewedAt: new Date(),
    })
    .where(
      and(
        eq(supplierClaims.supplierListingId, supplier.id),
        eq(supplierClaims.status, "pending"),
        ne(supplierClaims.id, claim.id)
      )
    );

  return NextResponse.json({
    data: {
      claimId: claim.id,
      enterpriseId,
      status: "approved",
    },
  });
}
