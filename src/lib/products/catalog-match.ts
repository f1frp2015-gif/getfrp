const FINISHED_PRODUCT_PATTERNS: Record<string, RegExp> = {
  "frp-grating": /\bgratings?\b/i,
  "pultruded-profiles": /\bpultruded\b|\bpultrusion\b/i,
  "frp-pipe": /\bpipes?\b|\bpiping\b/i,
};

export function matchingCatalogProducts(slug: string, products: string[]): string[] {
  const pattern = FINISHED_PRODUCT_PATTERNS[slug];
  if (!pattern) return [];
  // A resin for pipe or a pultrusion machine is not a finished-product offer.
  const upstream = /\bresins?\b|\bgelcoats?\b|\brovings?\b|\bmachines?\b|\bmachinery\b|\bequipment\b|\bmoulds?\b|\bmolds?\b|\badditives?\b/i;
  return products.filter((name) => pattern.test(name) && !upstream.test(name));
}
