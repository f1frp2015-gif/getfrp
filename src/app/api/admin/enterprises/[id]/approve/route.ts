import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { enterprises, supplierListings } from "@/lib/db/schema";
import { gateAdmin } from "@/lib/admin";
import { ingestApprovedEnterprise, type IngestResult } from "@/lib/ingest/ugc";

export const runtime = "nodejs";

function supplierSlug(name: string, id: string): string {
  const base = name
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase()
    .slice(0, 130);
  return `${base || "supplier"}-${id.slice(0, 8)}`;
}

export async function POST(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const gate = await gateAdmin();
  if (!gate.ok) {
    return NextResponse.json({ error: gate.reason }, { status: gate.status });
  }

  const [ent] = await db.select().from(enterprises).where(eq(enterprises.id, id)).limit(1);
  if (!ent) {
    return NextResponse.json({ error: "企业不存在" }, { status: 404 });
  }
  if (ent.status !== "pending") {
    return NextResponse.json(
      { error: `当前状态 ${ent.status}，无法重复审核` },
      { status: 409 }
    );
  }

  await db
    .update(enterprises)
    .set({ status: "verified", updatedAt: new Date() })
    .where(eq(enterprises.id, id));

  const [existingSupplier] = await db
    .select({ id: supplierListings.id })
    .from(supplierListings)
    .where(eq(supplierListings.enterpriseId, id))
    .limit(1);
  if (!existingSupplier) {
    const isEnglishRecord = /[A-Za-z]/.test(ent.name);
    await db.insert(supplierListings).values({
      id: `ugc-${ent.id}`,
      slug: supplierSlug(ent.name, ent.id),
      name: ent.name,
      nameEn: isEnglishRecord ? ent.name : null,
      category: ent.category,
      province: ent.province,
      location: [ent.city, ent.province].filter(Boolean).join(", ") || null,
      locationEn: isEnglishRecord
        ? [ent.city, ent.province].filter(Boolean).join(", ") || "China"
        : null,
      established: ent.established,
      description: ent.description,
      descriptionEn: isEnglishRecord ? ent.description : null,
      products: ent.products,
      productsEn: isEnglishRecord ? ent.products : null,
      processList: ent.processes,
      processListEn: isEnglishRecord ? ent.processes : null,
      certifications: ent.certifications,
      certificationsEn: isEnglishRecord ? ent.certifications : null,
      contactEmail: ent.contactEmail,
      contactPhone: ent.contactPhone,
      address: ent.address,
      website: ent.website,
      enterpriseId: ent.id,
      verified: true,
      profilePublished: false,
      exportReady: false,
    });
  }

  // Close the flywheel: materialize this enterprise's products into the
  // materials(ugc) library and live-embed them + its supplier listings into
  // knowledge_chunks so the AI can cite them immediately. Non-blocking — a
  // failed embed must not undo a completed approval.
  let ingest: IngestResult | null = null;
  try {
    ingest = await ingestApprovedEnterprise(id);
  } catch (e) {
    console.warn(
      "[approve] UGC ingest failed:",
      e instanceof Error ? e.message : e,
    );
  }

  return NextResponse.json({ data: { id, status: "verified", ingest } });
}
