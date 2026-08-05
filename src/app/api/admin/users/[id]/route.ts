import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { z } from "zod";

import { gateAdmin } from "@/lib/admin";
import { db } from "@/lib/db";
import { enterprises, users } from "@/lib/db/schema";
import { MEMBERSHIP_TIERS, USER_ROLES, roleRequiresEnterprise } from "@/lib/permissions";

export const runtime = "nodejs";

const UserPermissionInput = z
  .object({
    role: z.enum(USER_ROLES),
    membershipTier: z.enum(MEMBERSHIP_TIERS),
    enterpriseId: z.string().uuid().nullable(),
  })
  .strict();

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const gate = await gateAdmin();
  if (!gate.ok) {
    return NextResponse.json({ error: gate.reason }, { status: gate.status });
  }

  const parsed = UserPermissionInput.safeParse(
    await request.json().catch(() => null),
  );
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid user permissions." },
      { status: 400 },
    );
  }

  const { id } = await params;
  const [target] = await db
    .select({ id: users.id, role: users.role })
    .from(users)
    .where(eq(users.id, id))
    .limit(1);
  if (!target) {
    return NextResponse.json({ error: "User not found." }, { status: 404 });
  }

  const { role, membershipTier } = parsed.data;
  const enterpriseId = roleRequiresEnterprise(role)
    ? parsed.data.enterpriseId
    : null;

  if (roleRequiresEnterprise(role) && !enterpriseId) {
    return NextResponse.json(
      { error: "Company admins and members must be assigned to a company." },
      { status: 400 },
    );
  }

  if (enterpriseId) {
    const [enterprise] = await db
      .select({ id: enterprises.id })
      .from(enterprises)
      .where(eq(enterprises.id, enterpriseId))
      .limit(1);
    if (!enterprise) {
      return NextResponse.json({ error: "Company not found." }, { status: 404 });
    }
  }

  if (target.id === gate.user.id && role !== target.role) {
    return NextResponse.json(
      { error: "You cannot change your own administrator role." },
      { status: 409 },
    );
  }

  const [updated] = await db
    .update(users)
    .set({
      role,
      membershipTier,
      enterpriseId,
      isAdmin: role === "admin",
      updatedAt: new Date(),
    })
    .where(eq(users.id, id))
    .returning({
      id: users.id,
      role: users.role,
      membershipTier: users.membershipTier,
      enterpriseId: users.enterpriseId,
    });

  return NextResponse.json({ data: updated });
}
