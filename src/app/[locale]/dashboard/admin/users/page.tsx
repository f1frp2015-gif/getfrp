import type { Metadata } from "next";
import { asc, desc, eq } from "drizzle-orm";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { redirect } from "next/navigation";

import { Card, CardContent } from "@/components/ui/card";
import { gateAdmin } from "@/lib/admin";
import { db } from "@/lib/db";
import { enterprises, users } from "@/lib/db/schema";

import {
  AdminUsersManager,
  type AdminUserRow,
  type EnterpriseOption,
} from "./admin-users-manager";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Dashboard" });
  return { title: t("adminUsers.metaTitle") };
}

export const dynamic = "force-dynamic";

export default async function AdminUsersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const gate = await gateAdmin();
  if (!gate.ok) {
    if (gate.status === 401) {
      redirect("/sign-in?redirect_url=/dashboard/admin/users");
    }
    return (
      <Card>
        <CardContent className="py-12 text-center">
          <div className="text-lg font-semibold">Access denied</div>
          <p className="mt-2 text-sm text-muted-foreground">
            User permission management is restricted to administrators.
          </p>
        </CardContent>
      </Card>
    );
  }

  const [userRows, enterpriseRows] = await Promise.all([
    db
      .select({ user: users, enterprise: enterprises })
      .from(users)
      .leftJoin(enterprises, eq(users.enterpriseId, enterprises.id))
      .orderBy(desc(users.createdAt))
      .limit(500),
    db
      .select({ id: enterprises.id, name: enterprises.name, status: enterprises.status })
      .from(enterprises)
      .orderBy(asc(enterprises.name)),
  ]);

  const rows: AdminUserRow[] = userRows.map(({ user, enterprise }) => ({
    id: user.id,
    name: user.name || "Unnamed user",
    contact: user.email || user.phone || "",
    role: user.role,
    membershipTier: user.membershipTier,
    enterpriseId: user.enterpriseId,
    enterpriseName: enterprise?.name ?? "",
    createdAt: user.createdAt.toISOString().slice(0, 10),
    isCurrentUser: user.id === gate.user.id,
  }));
  const enterpriseOptions: EnterpriseOption[] = enterpriseRows;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">User permissions</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Assign platform roles, supplier company ownership and membership access. Changes take effect on the next request.
        </p>
      </div>
      <AdminUsersManager rows={rows} enterprises={enterpriseOptions} />
    </div>
  );
}
