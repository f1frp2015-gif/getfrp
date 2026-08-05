import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { and, eq } from "drizzle-orm";
import { z } from "zod";

import { getCurrentUser } from "@/lib/auth/current-user";
import { db } from "@/lib/db";
import { supplierDocumentTags, supplierDocuments } from "@/lib/db/schema";
import { deleteObject, ossConfigured } from "@/lib/oss";
import { canEditOwnDocuments } from "@/lib/permissions";
import { rollupSupplierTags } from "@/lib/qualification/rollup";

export const runtime = "nodejs";

const dateValue = z
  .union([z.string().regex(/^\d{4}-\d{2}-\d{2}$/), z.literal(""), z.null()])
  .transform((value) => value || null);

const DocumentInput = z
  .object({
    fileName: z.string().trim().min(1).max(200),
    issuer: z.string().trim().max(120),
    certNo: z.string().trim().max(120),
    validFrom: dateValue,
    validTo: dateValue,
  })
  .strict()
  .superRefine((value, ctx) => {
    if (value.validFrom && value.validTo && value.validFrom > value.validTo) {
      ctx.addIssue({
        code: "custom",
        path: ["validTo"],
        message: "Expiry date must be on or after the issue date.",
      });
    }
  });

async function ownedDocument(id: string) {
  const user = await getCurrentUser();
  if (!user) {
    return { ok: false as const, status: 401 as const, reason: "Please sign in." };
  }
  if (!canEditOwnDocuments(user)) {
    return { ok: false as const, status: 403 as const, reason: "Upload editing is not allowed for this role." };
  }

  const [document] = await db
    .select()
    .from(supplierDocuments)
    .where(
      and(
        eq(supplierDocuments.id, id),
        eq(supplierDocuments.uploadedByUserId, user.id),
      ),
    )
    .limit(1);
  if (!document) {
    return { ok: false as const, status: 404 as const, reason: "Document not found." };
  }
  if (document.enterpriseId && document.enterpriseId !== user.enterpriseId) {
    return {
      ok: false as const,
      status: 403 as const,
      reason: "This upload belongs to a different company assignment.",
    };
  }
  return { ok: true as const, user, document };
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const access = await ownedDocument(id);
  if (!access.ok) {
    return NextResponse.json({ error: access.reason }, { status: access.status });
  }
  if (access.document.status === "extracting") {
    return NextResponse.json(
      { error: "Wait for automatic extraction to finish before editing." },
      { status: 409 },
    );
  }

  const parsed = DocumentInput.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid document metadata." },
      { status: 400 },
    );
  }

  try {
    await db
      .update(supplierDocuments)
      .set({
        fileName: parsed.data.fileName,
        issuer: parsed.data.issuer || null,
        certNo: parsed.data.certNo || null,
        validFrom: parsed.data.validFrom,
        validTo: parsed.data.validTo,
        status: "needs_review",
        reviewerId: null,
        reviewNote: null,
        reviewedAt: null,
        updatedAt: new Date(),
      })
      .where(eq(supplierDocuments.id, id));

    await db
      .update(supplierDocumentTags)
      .set({ trust: 1, source: "ai" })
      .where(eq(supplierDocumentTags.documentId, id));

    if (access.document.supplierListingId) {
      await rollupSupplierTags(access.document.supplierListingId);
      revalidatePath(`/suppliers/${access.document.supplierListingId}`);
    }
    revalidatePath("/dashboard/qualifications");
    return NextResponse.json({ data: { id, status: "needs_review" } });
  } catch (error) {
    console.error("[qualification PATCH] failed", error);
    return NextResponse.json(
      { error: "Document metadata could not be saved. Check the certificate number." },
      { status: 409 },
    );
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const access = await ownedDocument(id);
  if (!access.ok) {
    return NextResponse.json({ error: access.reason }, { status: access.status });
  }
  if (access.document.status === "extracting") {
    return NextResponse.json(
      { error: "Wait for automatic extraction to finish before deleting." },
      { status: 409 },
    );
  }

  await db.delete(supplierDocuments).where(eq(supplierDocuments.id, id));
  if (access.document.supplierListingId) {
    await rollupSupplierTags(access.document.supplierListingId);
    revalidatePath(`/suppliers/${access.document.supplierListingId}`);
  }
  revalidatePath("/dashboard/qualifications");

  if (ossConfigured()) {
    try {
      await deleteObject(access.document.ossKey);
    } catch (error) {
      console.warn("[qualification DELETE] OSS cleanup failed", error);
    }
  }

  return NextResponse.json({ ok: true });
}
