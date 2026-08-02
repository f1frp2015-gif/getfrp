import { SUPPLIER_CATEGORY_PAGES } from "@/lib/data/supplier-category-pages";
import { SUPPLIER_REGION_SLUGS } from "@/lib/data/supplier-region-pages";

type SupplierSlugSource = {
  id: string;
  nameEn: string | null;
};

const RESERVED_SUPPLIER_SLUGS = new Set([
  "certified",
  ...SUPPLIER_CATEGORY_PAGES.map((page) => page.slug),
  ...SUPPLIER_REGION_SLUGS,
]);

const LEGAL_SUFFIXES = new Set([
  "co",
  "company",
  "corp",
  "corporation",
  "inc",
  "incorporated",
  "limited",
  "llc",
  "ltd",
  "plc",
]);

function baseSupplierSlug(nameEn: string | null, id: string): string {
  const normalizedName = (nameEn ?? "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " and ")
    .replace(/\((?:p\.?r\.?\s*)?china\)/gi, " china ")
    .replace(/[^\x00-\x7f]/g, " ")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .toLowerCase();
  const tokens = normalizedName.split(/\s+/).filter(Boolean);
  while (tokens.length > 1 && LEGAL_SUFFIXES.has(tokens.at(-1) ?? "")) {
    tokens.pop();
  }
  if (tokens.length > 2 && ["group", "holding", "holdings"].includes(tokens.at(-1) ?? "")) {
    tokens.pop();
  }
  const fallback = id.replace(/^sup-/, "supplier-");
  return tokens.join("-") || fallback;
}

function supplierIdSuffix(id: string): string {
  const suffix = id
    .replace(/^sup-/, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return suffix || "company";
}

export function buildSupplierSlugMap(
  suppliers: SupplierSlugSource[],
): Map<string, string> {
  const result = new Map<string, string>();
  const used = new Set(RESERVED_SUPPLIER_SLUGS);

  for (const supplier of [...suppliers].sort((a, b) => a.id.localeCompare(b.id))) {
    const base = baseSupplierSlug(supplier.nameEn, supplier.id);
    let slug = base;
    if (used.has(slug)) slug = `${base}-${supplierIdSuffix(supplier.id)}`;
    let counter = 2;
    while (used.has(slug)) {
      slug = `${base}-${supplierIdSuffix(supplier.id)}-${counter}`;
      counter += 1;
    }
    used.add(slug);
    result.set(supplier.id, slug);
  }

  return result;
}

export function supplierRouteSlug(
  supplier: SupplierSlugSource & { slug?: string | null },
): string {
  return supplier.slug?.trim() || baseSupplierSlug(supplier.nameEn, supplier.id);
}

export function supplierPublicPath(
  supplier: SupplierSlugSource & { slug?: string | null },
): `/suppliers/${string}` {
  return `/suppliers/${supplierRouteSlug(supplier)}`;
}
