import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { enterprises, supplierListings, users } from "@/lib/db/schema";
import { getCurrentUser } from "@/lib/auth/current-user";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  const me = await getCurrentUser();
  if (me) {
    const [enterprise] = me.enterpriseId
      ? await db.select().from(enterprises).where(eq(enterprises.id, me.enterpriseId)).limit(1)
      : [];
    return NextResponse.json({ data: enterprise ?? null });
  }
  const url = new URL(req.url);
  const category = url.searchParams.get("category");
  const province = url.searchParams.get("province");
  const page = parseInt(url.searchParams.get("page") || "1");
  const limit = parseInt(url.searchParams.get("limit") || "20");

  return NextResponse.json({
    data: [],
    pagination: { page, limit, total: 0 },
    filters: { category, province },
  });
}

function enterpriseValues(body: Record<string, unknown>) {
  const establishedRaw = body.established != null ? parseInt(String(body.established), 10) : NaN;
  return {
    name: String(body.name ?? "").trim(),
    shortName: body.shortName ? String(body.shortName).trim() : null,
    category: String(body.category ?? "").trim(),
    province: body.province ? String(body.province).trim() : null,
    city: body.city ? String(body.city).trim() : null,
    address: body.address ? String(body.address).trim() : null,
    established: Number.isFinite(establishedRaw) ? establishedRaw : null,
    employeeCount: body.employeeCount ? String(body.employeeCount).trim() : null,
    description: body.description ? String(body.description).trim() : null,
    products: asStringArray(body.products),
    processes: asStringArray(body.processes),
    certifications: asStringArray(body.certifications),
    contactName: String(body.contactName ?? "").trim(),
    contactPhone: String(body.contactPhone ?? "").trim(),
    contactEmail: body.contactEmail ? String(body.contactEmail).trim() : null,
    contactWechat: body.contactWechat ? String(body.contactWechat).trim() : null,
    website: body.website ? String(body.website).trim() : null,
    businessLicense: body.businessLicense ? String(body.businessLicense).trim() : null,
  };
}

export async function PATCH(req: NextRequest) {
  const me = await getCurrentUser();
  if (!me) return NextResponse.json({ error: "请先登录" }, { status: 401 });
  if (!me.enterpriseId) return NextResponse.json({ error: "您尚未关联企业" }, { status: 404 });
  const body = await req.json().catch(() => ({}));
  const values = enterpriseValues(body);
  if (!values.name || !values.category || !values.contactName || !values.contactPhone) {
    return NextResponse.json({ error: "企业全称 / 类型 / 联系人 / 联系电话必填" }, { status: 400 });
  }

  try {
    const [enterprise] = await db.update(enterprises)
      .set({ ...values, updatedAt: new Date() })
      .where(eq(enterprises.id, me.enterpriseId))
      .returning();
    if (!enterprise) return NextResponse.json({ error: "企业不存在" }, { status: 404 });

    // Keep the public supplier record in sync with the editable company fields.
    await db.update(supplierListings).set({
      name: values.name,
      location: [values.city, values.province].filter(Boolean).join(", ") || null,
      address: values.address,
      contactEmail: values.contactEmail,
      contactPhone: values.contactPhone,
      website: values.website,
      description: values.description,
      products: values.products,
      processList: values.processes,
      certifications: values.certifications,
      updatedAt: new Date(),
    }).where(eq(supplierListings.enterpriseId, me.enterpriseId));

    return NextResponse.json({ data: enterprise });
  } catch (e) {
    console.error("[enterprises PATCH] failed:", e instanceof Error ? e.message : e);
    return NextResponse.json({ error: "服务暂时不可用,请稍后重试" }, { status: 500 });
  }
}

function asStringArray(v: unknown): string[] {
  if (Array.isArray(v)) return v.map((x) => String(x).trim()).filter(Boolean);
  if (typeof v === "string") {
    return v
      .split(/[,，、\n]/)
      .map((s) => s.trim())
      .filter(Boolean);
  }
  return [];
}

// 企业自注册 → 创建 pending 企业行,并把当前用户提升为 enterprise_admin。
// 镜像 admin/claims/[id]/approve 的写库范式,但 status 为 pending、由管理员后续核验。
export async function POST(req: NextRequest) {
  const me = await getCurrentUser();
  if (!me) {
    return NextResponse.json({ error: "请先登录" }, { status: 401 });
  }
  if (me.enterpriseId) {
    return NextResponse.json({ error: "您已关联企业,无需重复注册" }, { status: 409 });
  }

  const body = await req.json().catch(() => ({}));
  const name = String(body?.name ?? "").trim();
  const category = String(body?.category ?? "").trim();
  const contactName = String(body?.contactName ?? "").trim();
  const contactPhone = String(body?.contactPhone ?? "").trim();

  if (!name || !category || !contactName || !contactPhone) {
    return NextResponse.json(
      { error: "企业全称 / 类型 / 联系人 / 联系电话必填" },
      { status: 400 }
    );
  }

  const values = enterpriseValues(body);

  try {
    const [ent] = await db
      .insert(enterprises)
      .values({
        ...values,
        status: "pending",
      })
      .returning({ id: enterprises.id });

    await db
      .update(users)
      .set({ enterpriseId: ent.id, role: "enterprise_admin", updatedAt: new Date() })
      .where(eq(users.id, me.id));

    return NextResponse.json(
      {
        data: {
          id: ent.id,
          status: "pending",
          message: "入驻申请已提交,我们将在 1-3 个工作日内完成审核。",
        },
      },
      { status: 201 }
    );
  } catch (e) {
    console.error("[enterprises POST] failed:", e instanceof Error ? e.message : e);
    return NextResponse.json({ error: "服务暂时不可用,请稍后重试" }, { status: 500 });
  }
}
