const CJK_PATTERN = /[\p{Script=Han}\u3000-\u303f\uff00-\uffef]/u;
const CJK_GLOBAL_PATTERN = /[\p{Script=Han}\u3000-\u303f\uff00-\uffef]+/gu;

export function containsCjk(value: string): boolean {
  return CJK_PATTERN.test(value);
}

/**
 * Public GetFRP pages are English-only. This is a last-line guard for legacy
 * database rows and supplier records whose nominal English fields still carry
 * a Chinese legal name or address. New supplier content is rejected earlier
 * by the submission schema; this function prevents older rows from leaking.
 */
export function englishOnlyText(value: string): string {
  return value
    .replace(CJK_GLOBAL_PATTERN, " ")
    .replace(/\(\s*\)|\[\s*\]|（\s*）/g, " ")
    .replace(/\s+([,.;:!?])/g, "$1")
    .replace(/([([{])\s+/g, "$1")
    .replace(/\s+([)\]}])/g, "$1")
    .replace(/\s{2,}/g, " ")
    .trim();
}

export function englishOnlyList(values: readonly string[] | null | undefined): string[] {
  return (values ?? [])
    .map(englishOnlyText)
    .filter(Boolean);
}

export function englishOnlyRecord(
  values: Record<string, string> | null | undefined,
): Record<string, string> {
  return Object.fromEntries(
    Object.entries(values ?? {})
      .map(([key, value]) => [englishOnlyText(key), englishOnlyText(value)] as const)
      .filter(([key, value]) => Boolean(key && value)),
  );
}

export function englishOnlyUrl(value: string): string {
  try {
    return new URL(value).href;
  } catch {
    return encodeURI(value);
  }
}

export function englishOnlySupplier<T extends {
  nameEn?: string | null;
  locationEn?: string | null;
  descriptionEn?: string | null;
  productsEn?: string[] | null;
  processListEn?: string[] | null;
  certificationsEn?: string[] | null;
  productsServicesSummaryEn?: string | null;
  capabilities?: string[] | null;
  standardsSupported?: string[] | null;
  address?: string | null;
  ecatalogs?: Array<{
    title: string;
    titleEn?: string;
    description?: string;
    descriptionEn?: string;
    url: string;
    format?: string;
  }> | null;
}>(supplier: T): T {
  return {
    ...supplier,
    nameEn: supplier.nameEn ? englishOnlyText(supplier.nameEn) : supplier.nameEn,
    locationEn: supplier.locationEn
      ? englishOnlyText(supplier.locationEn)
      : supplier.locationEn,
    descriptionEn: supplier.descriptionEn
      ? englishOnlyText(supplier.descriptionEn)
      : supplier.descriptionEn,
    productsEn: supplier.productsEn
      ? englishOnlyList(supplier.productsEn)
      : supplier.productsEn,
    processListEn: supplier.processListEn
      ? englishOnlyList(supplier.processListEn)
      : supplier.processListEn,
    certificationsEn: supplier.certificationsEn
      ? englishOnlyList(supplier.certificationsEn)
      : supplier.certificationsEn,
    productsServicesSummaryEn: supplier.productsServicesSummaryEn
      ? englishOnlyText(supplier.productsServicesSummaryEn)
      : supplier.productsServicesSummaryEn,
    capabilities: supplier.capabilities
      ? englishOnlyList(supplier.capabilities)
      : supplier.capabilities,
    standardsSupported: supplier.standardsSupported
      ? englishOnlyList(supplier.standardsSupported)
      : supplier.standardsSupported,
    address: supplier.address && !containsCjk(supplier.address)
      ? englishOnlyText(supplier.address)
      : null,
    ecatalogs: supplier.ecatalogs?.map((catalog) => ({
      ...catalog,
      titleEn: englishOnlyText(catalog.titleEn ?? "") || "Official supplier source",
      descriptionEn: catalog.descriptionEn
        ? englishOnlyText(catalog.descriptionEn)
        : undefined,
      url: englishOnlyUrl(catalog.url),
    })) ?? supplier.ecatalogs,
  };
}
