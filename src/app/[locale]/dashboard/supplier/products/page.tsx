import type { Metadata } from "next";
import { asc, eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { Card, CardContent } from "@/components/ui/card";
import { db } from "@/lib/db";
import { products, supplierProductPages, supplierProducts } from "@/lib/db/schema";
import { supplierRouteSlug } from "@/lib/supplier-slugs";
import { gateSupplierAccess } from "@/lib/supplier-access";
import { supplierProductPagesAvailable } from "@/lib/products/ugc-queries";

import {
  SupplierProductsManager,
  type CatalogOption,
  type SupplierProductRow,
} from "./supplier-products-manager";
import {
  SupplierProductPagesManager,
  type UGCProductRow,
} from "./supplier-product-pages-manager";

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

  const ugcAvailable = await supplierProductPagesAvailable();
  const [catalogRows, relationRows, productPageRows] = await Promise.all([
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
    ugcAvailable ? db
      .select({ page: supplierProductPages, product: products })
      .from(supplierProductPages)
      .innerJoin(products, eq(supplierProductPages.categoryId, products.id))
      .where(eq(supplierProductPages.supplierListingId, gate.supplier.id))
      .orderBy(asc(supplierProductPages.name)) : Promise.resolve([]),
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
  const supplierSlug = supplierRouteSlug(gate.supplier);
  const ugcRows: UGCProductRow[] = productPageRows.map(({ page, product }) => ({
    id: page.id,
    slug: page.slug,
    name: page.name,
    categoryId: page.categoryId,
    categorySlug: product.slug,
    categoryName: product.nameEn,
    description: page.description,
    images: page.images,
    material: page.material,
    processes: page.manufacturingProcesses,
    applications: page.applications,
    standards: page.standards,
    parameters: page.parameters,
    certifications: page.certifications,
    moq: page.moq,
    moqUnit: page.moqUnit ?? "",
    exportMarkets: page.exportMarkets,
    videoUrl: page.videoUrl ?? "",
    priceRange: page.priceRange ?? "",
    status: page.status,
    rejectionReason: page.rejectionReason ?? "",
    publicHref: `/suppliers/${supplierSlug}/${page.slug}`,
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
      <SupplierProductPagesManager
        rows={ugcRows}
        catalog={catalog.map((item) => ({ id: item.id, name: item.nameEn }))}
      />
      {!ugcAvailable ? <Card><CardContent className="py-6 text-sm text-muted-foreground">Supplier product-page submissions are temporarily unavailable while the additive database migration is pending. Existing category relationships remain available below.</CardContent></Card> : null}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Category relationships</h2>
          <p className="mt-1 text-sm text-muted-foreground">Maintain the supplier-to-platform category link used for directory matching.</p>
        </div>
        <SupplierProductsManager rows={rows} catalog={catalog} />
      </section>
    </div>
  );
}
