import type { Metadata } from "next";
import { count, desc, eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { Card, CardContent } from "@/components/ui/card";
import { gateAdmin } from "@/lib/admin";
import { db } from "@/lib/db";
import {
  products,
  supplierListings,
  supplierProductPages,
  supplierProducts,
} from "@/lib/db/schema";

import {
  AdminProductsManager,
  type AdminProductRow,
} from "./admin-products-manager";
import { UgcReviewManager, type ReviewProductRow } from "./ugc-review-manager";
import { supplierProductPagesAvailable } from "@/lib/products/ugc-queries";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Product catalog management | GetFRP",
};

export default async function AdminProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const gate = await gateAdmin();
  if (!gate.ok) {
    if (gate.status === 401) {
      redirect("/sign-in?redirect_url=/dashboard/admin/products");
    }
    return (
      <Card>
        <CardContent className="py-12 text-center">
          <div className="text-lg font-semibold">Access denied</div>
          <p className="mt-2 text-sm text-muted-foreground">
            Product catalog management is restricted to administrators.
          </p>
        </CardContent>
      </Card>
    );
  }

  const ugcAvailable = await supplierProductPagesAvailable();
  const [rows, ugcRows] = await Promise.all([
    db
      .select({ product: products, linkedSupplierCount: count(supplierProducts.id) })
      .from(products)
      .leftJoin(supplierProducts, eq(products.id, supplierProducts.productId))
      .groupBy(products.id)
      .orderBy(desc(products.updatedAt)),
    ugcAvailable ? db
      .select({ page: supplierProductPages, supplier: supplierListings, product: products })
      .from(supplierProductPages)
      .innerJoin(supplierListings, eq(supplierProductPages.supplierListingId, supplierListings.id))
      .innerJoin(products, eq(supplierProductPages.categoryId, products.id))
      .orderBy(desc(supplierProductPages.updatedAt)) : Promise.resolve([]),
  ]);

  const catalog: AdminProductRow[] = rows.map(({ product, linkedSupplierCount }) => ({
    id: product.id,
    slug: product.slug,
    name: product.name,
    nameEn: product.nameEn,
    shortName: product.shortName ?? "",
    category: product.category,
    summary: product.summary,
    description: product.description ?? "",
    overview: product.overview,
    materials: product.materials,
    manufacturingProcesses: product.manufacturingProcesses,
    applications: product.applications,
    standards: product.standards,
    specifications: product.specifications,
    buyingChecks: product.buyingChecks,
    faqs: product.faqs,
    searchTerms: product.searchTerms,
    imageUrl: product.imageUrl ?? "",
    imageAlt: product.imageAlt ?? "",
    status: product.status === "published" ? "published" : "draft",
    source: product.source,
    linkedSupplierCount: Number(linkedSupplierCount),
  }));
  const reviewRows: ReviewProductRow[] = ugcRows.map(({ page, supplier, product }) => ({
    id: page.id,
    name: page.name,
    supplierName: supplier.nameEn ?? supplier.name,
    categoryName: product.nameEn,
    material: page.material,
    imageCount: page.images.length,
    description: page.description,
    status: page.status,
    rejectionReason: page.rejectionReason ?? "",
    isDemo: page.isDemo,
  }));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Product catalog management</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Create and maintain the canonical FRP product definitions shown in the buyer catalog.
          Supplier-specific offerings are managed separately in each supplier workspace.
        </p>
      </div>
      <UgcReviewManager rows={reviewRows} />
      {!ugcAvailable ? <Card><CardContent className="py-6 text-sm text-muted-foreground">The supplier product review queue is temporarily unavailable while the additive database migration is pending.</CardContent></Card> : null}
      <section className="space-y-4">
        <div><h2 className="text-xl font-semibold">Platform product categories</h2><p className="mt-1 text-sm text-muted-foreground">These definitions control L2 category landing pages and supplier upload classification.</p></div>
        <AdminProductsManager rows={catalog} />
      </section>
    </div>
  );
}
