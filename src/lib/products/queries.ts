import { and, asc, count, desc, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import {
  enterprises,
  products,
  supplierListings,
  supplierProducts,
  type ProductFaq,
  type ProductSpecification,
} from "@/lib/db/schema";
import { PRODUCT_SEED_RECORDS } from "@/lib/data/products";
import {
  getSupplierCategoryPage,
  supplierMatchesCategory,
} from "@/lib/data/supplier-category-pages";

export type CatalogProduct = {
  id: string;
  slug: string;
  name: string;
  nameEn: string;
  shortName: string | null;
  category: string;
  summary: string;
  description: string | null;
  overview: string[];
  materials: string[];
  manufacturingProcesses: string[];
  applications: string[];
  standards: string[];
  specifications: ProductSpecification[];
  buyingChecks: string[];
  faqs: ProductFaq[];
  searchTerms: string[];
  imageUrl: string | null;
  imageAlt: string | null;
};

export type ProductListItem = CatalogProduct & { supplierCount: number };

export type ProductSupplier = {
  id: string;
  name: string;
  location: string;
  description: string;
  logo: string | null;
  website: string | null;
  verified: boolean;
  profilePublished: boolean;
  scaleTier: string | null;
  relationshipType: string;
  supplierProductName: string | null;
  customAvailable: boolean;
  moq: number | null;
  moqUnit: string | null;
  leadTimeDays: number | null;
};

function seedProduct(slug: string): CatalogProduct | null {
  const record = PRODUCT_SEED_RECORDS.find((product) => product.slug === slug);
  if (!record) return null;
  return {
    ...record,
    shortName: record.shortName ?? null,
    description: record.description ?? null,
    imageUrl: record.imageUrl ?? null,
    imageAlt: record.imageAlt ?? null,
  };
}

async function fallbackSupplierCounts() {
  try {
    const suppliers = await db.select().from(supplierListings);
    return new Map(
      PRODUCT_SEED_RECORDS.map((product) => {
        const page = getSupplierCategoryPage(product.slug);
        const total = page
          ? suppliers.filter((supplier) => supplierMatchesCategory(page, supplier)).length
          : 0;
        return [product.slug, total];
      }),
    );
  } catch {
    return new Map<string, number>();
  }
}

export async function loadPublishedProducts(): Promise<ProductListItem[]> {
  try {
    const rows = await db
      .select({
        product: products,
        supplierCount: count(supplierProducts.id),
      })
      .from(products)
      .leftJoin(supplierProducts, eq(products.id, supplierProducts.productId))
      .where(eq(products.status, "published"))
      .groupBy(products.id)
      .orderBy(asc(products.category), asc(products.nameEn));
    return rows.map(({ product, supplierCount }) => ({
      ...product,
      supplierCount: Number(supplierCount),
    }));
  } catch {
    const counts = await fallbackSupplierCounts();
    return PRODUCT_SEED_RECORDS.map((record) => ({
      ...record,
      shortName: record.shortName ?? null,
      description: record.description ?? null,
      imageUrl: record.imageUrl ?? null,
      imageAlt: record.imageAlt ?? null,
      supplierCount: counts.get(record.slug) ?? 0,
    }));
  }
}

export async function loadProductBySlug(slug: string): Promise<CatalogProduct | null> {
  try {
    const [product] = await db
      .select()
      .from(products)
      .where(and(eq(products.slug, slug), eq(products.status, "published")))
      .limit(1);
    return product ?? null;
  } catch {
    return seedProduct(slug);
  }
}

export async function loadSuppliersForProduct(
  product: CatalogProduct,
): Promise<ProductSupplier[]> {
  try {
    const rows = await db
      .select({
        supplier: supplierListings,
        relation: supplierProducts,
        enterpriseLogo: enterprises.logo,
        enterpriseWebsite: enterprises.website,
      })
      .from(supplierProducts)
      .innerJoin(
        supplierListings,
        eq(supplierProducts.supplierListingId, supplierListings.id),
      )
      .leftJoin(enterprises, eq(supplierListings.enterpriseId, enterprises.id))
      .where(eq(supplierProducts.productId, product.id))
      .orderBy(
        desc(supplierProducts.isVerified),
        desc(supplierListings.profilePublished),
        desc(supplierListings.brandPriority),
        asc(supplierListings.nameEn),
      );
    return rows.map(({ supplier, relation, enterpriseLogo, enterpriseWebsite }) => ({
      id: supplier.id,
      name: supplier.nameEn ?? supplier.name,
      location: supplier.locationEn ?? supplier.location ?? "China",
      description: supplier.descriptionEn ?? supplier.description ?? "",
      logo: supplier.logo ?? enterpriseLogo ?? null,
      website: supplier.website ?? enterpriseWebsite ?? null,
      verified: Boolean(supplier.verified),
      profilePublished: Boolean(supplier.profilePublished),
      scaleTier: supplier.scaleTier,
      relationshipType: relation.relationshipType,
      supplierProductName: relation.supplierProductName,
      customAvailable: relation.customAvailable,
      moq: relation.moq,
      moqUnit: relation.moqUnit,
      leadTimeDays: relation.leadTimeDays,
    }));
  } catch {
    const page = getSupplierCategoryPage(product.slug);
    if (!page) return [];
    try {
      const rows = await db
        .select({ supplier: supplierListings, enterpriseLogo: enterprises.logo })
        .from(supplierListings)
        .leftJoin(enterprises, eq(supplierListings.enterpriseId, enterprises.id));
      return rows
        .filter(({ supplier }) => supplierMatchesCategory(page, supplier))
        .map(({ supplier, enterpriseLogo }) => ({
          id: supplier.id,
          name: supplier.nameEn ?? supplier.name,
          location: supplier.locationEn ?? supplier.location ?? "China",
          description: supplier.descriptionEn ?? supplier.description ?? "",
          logo: supplier.logo ?? enterpriseLogo ?? null,
          website: supplier.website,
          verified: Boolean(supplier.verified),
          profilePublished: Boolean(supplier.profilePublished),
          scaleTier: supplier.scaleTier,
          relationshipType:
            supplier.category === "resin" || supplier.category === "fiber"
              ? "supplier"
              : "manufacturer",
          supplierProductName: product.shortName,
          customAvailable: supplier.category === "manufacturer",
          moq: supplier.moqKg,
          moqUnit: supplier.moqKg == null ? null : "kg",
          leadTimeDays: supplier.leadTimeDays,
        }));
    } catch {
      return [];
    }
  }
}

export async function loadProductsForSupplier(
  supplier: typeof supplierListings.$inferSelect,
): Promise<CatalogProduct[]> {
  try {
    const rows = await db
      .select({ product: products })
      .from(supplierProducts)
      .innerJoin(products, eq(supplierProducts.productId, products.id))
      .where(
        and(
          eq(supplierProducts.supplierListingId, supplier.id),
          eq(products.status, "published"),
        ),
      )
      .orderBy(asc(products.nameEn));
    return rows.map(({ product }) => product);
  } catch {
    return PRODUCT_SEED_RECORDS.filter((product) => {
      const page = getSupplierCategoryPage(product.slug);
      return page ? supplierMatchesCategory(page, supplier) : false;
    }).map((record) => ({
      ...record,
      shortName: record.shortName ?? null,
      description: record.description ?? null,
      imageUrl: record.imageUrl ?? null,
      imageAlt: record.imageAlt ?? null,
    }));
  }
}
