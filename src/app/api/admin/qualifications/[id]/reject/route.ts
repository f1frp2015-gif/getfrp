// POST /api/admin/qualifications/[id]/reject
// 驳回一份资质文档:文档置 rejected,并删除其标签实例(避免被驳回的认证仍出现在筛选)。

import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";

import { gateAdmin } from "@/lib/admin";
import { db } from "@/lib/db";
import { supplierDocumentTags, supplierDocuments } from "@/lib/db/schema";
import { rollupSupplierTags } from "@/lib/qualification/rollup";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const gate = await gateAdmin();
  if (!gate.ok) {
    return NextResponse.json({ error: gate.reason }, { status: gate.status });
  }

  const body = await req.json().catch(() => ({}));
  const reviewNote: string | null = body?.reviewNote ?? null;

  const [doc] = await db
    .select()
    .from(supplierDocuments)
    .where(eq(supplierDocuments.id, id))
    .limit(1);
  if (!doc) {
    return NextResponse.json({ error: "Qualification document not found" }, { status: 404 });
  }
  if (doc.status !== "needs_review" && doc.status !== "extracted") {
    return NextResponse.json(
      { error: `A document with status ${doc.status} cannot be reviewed` },
      { status: 409 },
    );
  }

  await db
    .update(supplierDocuments)
    .set({
      status: "rejected",
      reviewerId: gate.user.id,
      reviewNote,
      reviewedAt: new Date(),
      updatedAt: new Date(),
    })
    .where(eq(supplierDocuments.id, doc.id));

  await db
    .delete(supplierDocumentTags)
    .where(eq(supplierDocumentTags.documentId, doc.id));

  if (doc.supplierListingId) {
    await rollupSupplierTags(doc.supplierListingId);
  }

  return NextResponse.json({ data: { documentId: doc.id, status: "rejected" } });
}
