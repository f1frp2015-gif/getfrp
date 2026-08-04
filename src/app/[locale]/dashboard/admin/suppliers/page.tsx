import type { Metadata } from "next";
import { and, count, desc, eq, ilike, isNotNull, isNull, or } from "drizzle-orm";
import { redirect } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { gateAdmin } from "@/lib/admin";
import { db } from "@/lib/db";
import { supplierListings } from "@/lib/db/schema";

import { AdminSuppliersTable, type AdminSupplierRow } from "./admin-suppliers-table";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Supplier Database | GetFRP Admin",
};

type SupplierStatus = "all" | "verified" | "published" | "export" | "claimed" | "unclaimed";

function firstParam(value: string | string[] | undefined): string {
  return Array.isArray(value) ? value[0] ?? "" : value ?? "";
}

export default async function AdminSuppliersPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const gate = await gateAdmin();
  if (!gate.ok) {
    if (gate.status === 401) redirect("/sign-in?redirect_url=/dashboard/admin/suppliers");
    return (
      <Card>
        <CardContent className="py-12 text-center">This page is restricted to GetFRP administrators.</CardContent>
      </Card>
    );
  }

  const sp = await searchParams;
  const query = firstParam(sp.q).trim().slice(0, 100);
  const rawStatus = firstParam(sp.status);
  const status: SupplierStatus = ["verified", "published", "export", "claimed", "unclaimed"].includes(rawStatus)
    ? (rawStatus as SupplierStatus)
    : "all";

  const conditions = [];
  if (query) {
    conditions.push(
      or(
        ilike(supplierListings.nameEn, `%${query}%`),
        ilike(supplierListings.name, `%${query}%`),
        ilike(supplierListings.locationEn, `%${query}%`),
        ilike(supplierListings.category, `%${query}%`),
      ),
    );
  }
  if (status === "verified") conditions.push(eq(supplierListings.verified, true));
  if (status === "published") conditions.push(eq(supplierListings.profilePublished, true));
  if (status === "export") conditions.push(eq(supplierListings.exportReady, true));
  if (status === "claimed") conditions.push(isNotNull(supplierListings.enterpriseId));
  if (status === "unclaimed") conditions.push(isNull(supplierListings.enterpriseId));

  const where = conditions.length ? and(...conditions) : undefined;
  const [rowsRaw, [[{ total }], [{ verified }], [{ published }], [{ exportReady }]]] = await Promise.all([
    db
      .select()
      .from(supplierListings)
      .where(where)
      .orderBy(desc(supplierListings.brandPriority), desc(supplierListings.updatedAt))
      .limit(100),
    Promise.all([
      db.select({ total: count() }).from(supplierListings),
      db.select({ verified: count() }).from(supplierListings).where(eq(supplierListings.verified, true)),
      db.select({ published: count() }).from(supplierListings).where(eq(supplierListings.profilePublished, true)),
      db.select({ exportReady: count() }).from(supplierListings).where(eq(supplierListings.exportReady, true)),
    ]),
  ]);

  const rows: AdminSupplierRow[] = rowsRaw.map((supplier) => ({
    id: supplier.id,
    slug: supplier.slug ?? supplier.id,
    name: supplier.name,
    nameEn: supplier.nameEn ?? "",
    locationEn: supplier.locationEn ?? supplier.location ?? "",
    category: supplier.category ?? "",
    website: supplier.website ?? "",
    descriptionEn: supplier.descriptionEn ?? "",
    established: supplier.established,
    productsEn: supplier.productsEn ?? [],
    processListEn: supplier.processListEn ?? [],
    certificationsEn: supplier.certificationsEn ?? [],
    capabilities: supplier.capabilities ?? [],
    standardsSupported: supplier.standardsSupported ?? [],
    moqKg: supplier.moqKg,
    leadTimeDays: supplier.leadTimeDays,
    verified: Boolean(supplier.verified),
    exportReady: supplier.exportReady,
    profilePublished: supplier.profilePublished,
    claimed: Boolean(supplier.enterpriseId),
    updatedAt: supplier.updatedAt.toISOString(),
  }));

  return (
    <div className="space-y-6">
      <div>
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">Controlled data access</div>
        <h1 className="mt-2 text-2xl font-bold">Supplier database</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Review and edit public supplier, capability, commercial-readiness and publication fields. Changes are limited to an approved field set.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Supplier records" value={total} />
        <Stat label="Identity checked" value={verified} />
        <Stat label="Profiles published" value={published} />
        <Stat label="Export ready" value={exportReady} />
      </div>

      <form className="grid gap-3 rounded-xl border bg-muted/20 p-4 sm:grid-cols-[1fr_220px_auto]">
        <Input name="q" defaultValue={query} placeholder="Company, location or category" />
        <select name="status" defaultValue={status} className="h-9 rounded-md border bg-background px-3 text-sm">
          <option value="all">All records</option>
          <option value="verified">Identity checked</option>
          <option value="published">Profile published</option>
          <option value="export">Export ready</option>
          <option value="claimed">Claimed</option>
          <option value="unclaimed">Unclaimed</option>
        </select>
        <button type="submit" className="h-9 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground">
          Apply filters
        </button>
      </form>

      <div className="text-xs text-muted-foreground">
        Showing {rows.length} record{rows.length === 1 ? "" : "s"}; filtered results are capped at 100 per view.
      </div>
      <AdminSuppliersTable rows={rows} />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="mt-1 text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
}
