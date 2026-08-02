/**
 * dispatchToSuppliers — send RFQ notification emails to relevant suppliers.
 *
 * Strategy (P0-① implementation):
 * 1. Map material category → supplier categories
 * 2. SELECT top 3 verified, claimed suppliers (enterprise_id NOT NULL + enterprises.contact_email NOT NULL)
 *    ordered by brand_priority DESC, scale_tier (XL>L>M>S) DESC, view_count DESC
 * 3. Send Resend email to each claimed supplier's enterprise.contact_email;
 *    CC the GetFRP ops address when GETFRP_OPS_EMAIL is configured
 * 4. Also notify that GetFRP-only ops address when configured
 * 5. Log every dispatch attempt to rfq_dispatches (status: sent / failed / fallback)
 *
 * If no claimed supplier matches and no GetFRP ops address is configured, the
 * RFQ remains safely stored in GetFRP's database and no cross-site fallback is
 * used.
 */

import { db } from "@/lib/db";
import { supplierListings, enterprises, rfqDispatches } from "@/lib/db/schema";
import { and, desc, eq, isNotNull, sql } from "drizzle-orm";
import { getGetfrpFrom } from "@/lib/email/from";
import { CURRENT_SITE_URL } from "@/lib/sites";

export interface RfqPayload {
  id: string;
  materialId: string;
  materialName: string;
  company: string;
  name: string;
  email: string;
  phone?: string | null;
  quantity: string;
  application?: string | null;
  extraRequirements?: string | null;
  category: string;
  targetSupplierId?: string | null;
  destinationCountry?: string | null;
  deliveryDate?: string | null;
  incoterm?: string | null;
  standards?: string | null;
  targetPrice?: string | null;
  sampleRequired?: boolean;
  ndaRequired?: boolean;
  attachment?: { filename: string; content: string };
}

const OPS_RECIPIENT = process.env.GETFRP_OPS_EMAIL?.trim() || null;
const CC_OPS = OPS_RECIPIENT ? [OPS_RECIPIENT] : [];
const FROM = getGetfrpFrom("GetFRP RFQ");

const CATEGORY_TO_SUPPLIER: Record<string, string[]> = {
  resin: ["resin", "additive"],
  fiber: ["fiber"],
  "fiber-yarn": ["fiber"],
  "fiber-mat": ["fiber"],
  "fiber-fabric": ["fiber"],
  core: ["manufacturer"],
  gelcoat: ["resin"],
  auxiliary: ["additive", "resin"],
  composite: ["manufacturer"],
  raw: ["resin", "fiber", "additive"],
  equipment: ["equipment"],
  tooling: ["tooling"],
  molds: ["mold"],
  finished: ["manufacturer"],
};

interface MatchedSupplier {
  supplierId: string;
  enterpriseId: string;
  email: string;
  name: string;
}

async function findClaimedSuppliers(supplierCats: string[]): Promise<MatchedSupplier[]> {
  if (supplierCats.length === 0) return [];

  const tierRank = sql`CASE ${supplierListings.scaleTier} WHEN 'XL' THEN 4 WHEN 'L' THEN 3 WHEN 'M' THEN 2 WHEN 'S' THEN 1 ELSE 0 END`;

  // Learned relevance: how often this supplier was actually reached for an RFQ
  // in the last 90 days (status='sent' = a real supplier engagement, not a
  // fallback). Closes the rfq_dispatches feedback loop — matching now adapts to
  // who's genuinely active, instead of a purely static category map. Ranked
  // below paid brand priority but above scale/views.
  const historyScore = sql`(
    SELECT count(*) FROM rfq_dispatches d
    WHERE d.supplier_listing_id = ${supplierListings.id}
      AND d.status = 'sent'
      AND d.sent_at > now() - interval '90 days'
  )`;

  const rows = await db
    .select({
      supplierId: supplierListings.id,
      enterpriseId: enterprises.id,
      email: enterprises.contactEmail,
      name: supplierListings.name,
    })
    .from(supplierListings)
    .innerJoin(enterprises, eq(supplierListings.enterpriseId, enterprises.id))
    .where(
      and(
        eq(supplierListings.verified, true),
        isNotNull(supplierListings.enterpriseId),
        isNotNull(enterprises.contactEmail),
        sql`${supplierListings.category} = ANY(${supplierCats})`,
      ),
    )
    .orderBy(
      desc(supplierListings.brandPriority),
      desc(historyScore),
      desc(tierRank),
      desc(supplierListings.viewCount),
    )
    .limit(3);

  return rows
    .filter((r): r is MatchedSupplier =>
      r.enterpriseId != null && r.email != null && r.email.length > 0,
    );
}

async function findTargetSupplier(supplierId: string): Promise<MatchedSupplier[]> {
  const rows = await db
    .select({
      supplierId: supplierListings.id,
      enterpriseId: enterprises.id,
      email: enterprises.contactEmail,
      name: supplierListings.nameEn,
    })
    .from(supplierListings)
    .innerJoin(enterprises, eq(supplierListings.enterpriseId, enterprises.id))
    .where(
      and(
        eq(supplierListings.id, supplierId),
        eq(supplierListings.verified, true),
        isNotNull(supplierListings.enterpriseId),
        isNotNull(enterprises.contactEmail),
      ),
    )
    .limit(1);

  return rows.filter(
    (row): row is MatchedSupplier =>
      row.enterpriseId != null &&
      row.email != null &&
      row.email.length > 0 &&
      row.name != null &&
      row.name.length > 0,
  );
}

async function findPublishedTargetName(supplierId: string): Promise<string | null> {
  const [row] = await db
    .select({ nameEn: supplierListings.nameEn, name: supplierListings.name })
    .from(supplierListings)
    .where(
      and(
        eq(supplierListings.id, supplierId),
        eq(supplierListings.profilePublished, true),
      ),
    )
    .limit(1);
  return row?.nameEn ?? row?.name ?? null;
}

export async function dispatchToSuppliers(rfq: RfqPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const supplierCats = CATEGORY_TO_SUPPLIER[rfq.category] ?? ["manufacturer"];

  // 1. Look up claimed suppliers (best-effort)
  let matches: MatchedSupplier[] = [];
  let targetSupplierName: string | null = null;
  try {
    if (rfq.targetSupplierId) {
      [matches, targetSupplierName] = await Promise.all([
        findTargetSupplier(rfq.targetSupplierId),
        findPublishedTargetName(rfq.targetSupplierId),
      ]);
    } else {
      matches = await findClaimedSuppliers(supplierCats);
    }
  } catch (err) {
    console.error("[dispatch] supplier lookup failed:", err);
  }

  // 2. Build recipient list. GetFRP ops visibility is opt-in through its own
  // environment variable; there is intentionally no other-site fallback.
  type Recipient = {
    email: string;
    isFallback: boolean;
    supplierId: string | null;
    enterpriseId: string | null;
    name: string | null;
  };
  const recipients: Recipient[] = matches.map((m) => ({
    email: m.email,
    isFallback: false,
    supplierId: m.supplierId,
    enterpriseId: m.enterpriseId,
    name: m.name,
  }));
  if (OPS_RECIPIENT) {
    recipients.push({
      email: OPS_RECIPIENT,
      isFallback: true,
      supplierId: null,
      enterpriseId: null,
      name: null,
    });
  }

  console.info(
    `[dispatch] rfq=${rfq.id} target=${rfq.targetSupplierId ?? "auto"} cats=${supplierCats.join(",")} matched=${matches.length} → recipients=${recipients.length}`,
  );

  const subjectProduct = rfq.materialName.replace(/[\r\n]+/g, " ").slice(0, 150);
  const subject = targetSupplierName
    ? `New supplier inquiry for ${targetSupplierName} — ${subjectProduct}`
    : `New RFQ via GetFRP — ${subjectProduct}`;
  const html = buildEmailHtml(rfq, targetSupplierName);

  // 3. Dispatch + log each
  for (const r of recipients) {
    let status: "pending" | "sent" | "failed" | "fallback" = "pending";
    let errorMessage: string | null = null;

    if (apiKey) {
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            from: FROM,
            // Avoid duplicating the fallback recipient in CC.
            to: r.email,
            cc: CC_OPS.filter((c) => c.toLowerCase() !== r.email.toLowerCase()),
            reply_to: rfq.email,
            subject,
            html,
            attachments: rfq.attachment ? [rfq.attachment] : undefined,
          }),
        });
        if (res.ok) {
          status = r.isFallback ? "fallback" : "sent";
        } else {
          status = "failed";
          errorMessage = `Resend ${res.status}: ${await res.text()}`;
          console.error(`[dispatch] ${errorMessage}`);
        }
      } catch (err) {
        status = "failed";
        errorMessage = err instanceof Error ? err.message : String(err);
        console.error("[dispatch] fetch failed:", err);
      }
    } else {
      console.warn("[dispatch] RESEND_API_KEY not set — logging only");
      status = "failed";
      errorMessage = "RESEND_API_KEY missing";
    }

    // Log every attempt (best-effort; do not block on log failures)
    try {
      await db.insert(rfqDispatches).values({
        rfqId: rfq.id,
        materialId: rfq.materialId,
        category: rfq.category,
        supplierListingId: r.supplierId,
        enterpriseId: r.enterpriseId,
        recipientEmail: r.email,
        isFallback: r.isFallback,
        status,
        errorMessage,
      });
    } catch (logErr) {
      console.error("[dispatch] log insert failed:", logErr);
    }
  }
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatValue(value: string): string {
  return escapeHtml(value).replaceAll("\n", "<br>");
}

function buildEmailHtml(rfq: RfqPayload, targetSupplierName: string | null): string {
  const isMaterialInquiry =
    rfq.materialId !== "general-inquiry" &&
    !rfq.materialId.startsWith("supplier:");
  const productCatalogUrl = isMaterialInquiry
    ? `${CURRENT_SITE_URL}/products`
    : null;
  const rows: Array<[string, string | null | undefined]> = [
    ["Target supplier", targetSupplierName],
    ["Product", rfq.materialName],
    ["Company", rfq.company],
    ["Contact", rfq.name],
    ["Email", rfq.email],
    ["Phone", rfq.phone],
    ["Destination", rfq.destinationCountry],
    ["Quantity", rfq.quantity],
    ["Application", rfq.application],
    ["Standards", rfq.standards],
    ["Delivery date", rfq.deliveryDate],
    ["Incoterm", rfq.incoterm],
    ["Target price", rfq.targetPrice],
    ["Sample", rfq.sampleRequired ? "Required" : null],
    ["NDA", rfq.ndaRequired ? "Requested before technical-file release" : null],
    ["Attachment", rfq.attachment?.filename],
    ["Extra requirements", rfq.extraRequirements],
  ];
  const tableRows = rows
    .filter((row): row is [string, string] => Boolean(row[1]))
    .map(
      ([label, value], index) => `
    <tr${index % 2 ? ' style="background:#f9f9f9"' : ""}>
      <td style="padding:8px;border:1px solid #ddd">${escapeHtml(label)}</td>
      <td style="padding:8px;border:1px solid #ddd">${formatValue(value)}</td>
    </tr>`,
    )
    .join("");
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>New RFQ</title></head>
<body style="font-family:sans-serif;max-width:600px;margin:auto;padding:24px;color:#1a1a1a">
  <h2 style="color:#0b756f">New RFQ</h2>
  <p>Hello, a new RFQ for <strong>${escapeHtml(rfq.materialName)}</strong> has been submitted through GetFRP.</p>

  <table style="width:100%;border-collapse:collapse;margin-top:16px">
    <tr style="background:#f5f5f5">
      <th style="padding:8px;text-align:left;border:1px solid #ddd">Field</th>
      <th style="padding:8px;text-align:left;border:1px solid #ddd">Value</th>
    </tr>
    ${tableRows}
  </table>

  ${productCatalogUrl ? `<p style="margin-top:24px">
    <a href="${productCatalogUrl}" style="display:inline-block;padding:10px 20px;background:#0b756f;color:#fff;border-radius:6px;text-decoration:none">
      Browse Products
    </a>
  </p>` : ""}
  <p style="color:#888;font-size:12px;margin-top:32px">
    Sent by GetFRP. Reply to this email to contact the buyer.
  </p>
</body>
</html>
`;
}
