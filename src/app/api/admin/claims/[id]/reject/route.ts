import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { supplierClaims } from "@/lib/db/schema";
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

  await db
    .update(supplierClaims)
    .set({
      status: "rejected",
      reviewerId: gate.user.id,
      reviewNote,
      reviewedAt: new Date(),
    })
    .where(eq(supplierClaims.id, claim.id));

  return NextResponse.json({
    data: { claimId: claim.id, status: "rejected" },
  });
}
