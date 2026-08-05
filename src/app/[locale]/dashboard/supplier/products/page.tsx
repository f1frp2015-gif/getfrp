import type { Metadata } from "next";
import { asc, eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { Card, CardContent } from "@/components/ui/card";
import { db } from "@/lib/db";
import { products, supplierProducts } from "@/lib/db/schema";
import { gateSupplierAccess } from "@/lib/supplier-access";

import {
  SupplierProductsManager,
  type CatalogOption,
  type SupplierProductRow,
} from "./supplier-products-manager";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "My product catalog | GetFRP",
};

export default async function SupplierProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const gate = await gateSupplierAccess("products");
  if (!gate.ok) {
    if (gate.status === 401) {
      redirect("/sign-in?redirect_url=/dashboard/supplier/products");
    }
    return (
      <Card>
        <CardContent className="py-12 text-center">
          <div className="text-lg font-semibold">Supplier catalog unavailable</div>
          <p className="mt-2 text-sm text-muted-foreground">{gate.reason}</p>
        </CardContent>
      </Card>
    );
  }

  const [catalogRows, relationRows] = await Promise.all([
    db
      .select({ id: products.id, slug: products.slug, nameEn: products.nameEn, category: products.category })
      .from(products)
      .where(eq(products.status, "published"))
      .orderBy(asc(products.category), asc(products.nameEn)),
    db
      .select({ relation: supplierProducts, product: products })
      .from(supplierProducts)
      .innerJoin(products, eq(supplierProducts.productId, products.id))
      .where(eq(supplierProducts.supplierListingId, gate.supplier.id))
      .orderBy(asc(products.nameEn)),
  ]);

  const catalog: CatalogOption[] = catalogRows;
  const rows: SupplierProductRow[] = relationRows.map(({ relation, product }) => ({
    id: relation.id,
    productId: product.id,
    productSlug: product.slug,
    productName: product.nameEn,
    category: product.category,
    relationshipType: relation.relationshipType,
    supplierProductName: relation.supplierProductName ?? "",
    supplierSku: relation.supplierSku ?? "",
    isPrimary: relation.isPrimary,
    isVerified: relation.isVerified,
    customAvailable: relation.customAvailable,
    moq: relation.moq,
    moqUnit: relation.moqUnit ?? "",
    leadTimeDays: relation.leadTimeDays,
    specificationOverrides: relation.specificationOverrides,
    evidence: relation.evidence ?? null,
  }));

  return (
    <div className="space-y-6">
      <div>
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
          {gate.supplier.nameEn ?? gate.supplier.name}
        </div>
        <h1 className="mt-2 text-2xl font-bold">My product catalog</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Link your company to GetFRP product categories and maintain supplier-specific names, SKUs, MOQs, lead times and evidence.
          Changes are limited to your company and reset GetFRP verification until reviewed again.
        </p>
      </div>
      <SupplierProductsManager rows={rows} catalog={catalog} />
    </div>
  );
}
