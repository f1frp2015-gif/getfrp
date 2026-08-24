import type { SupplierListing } from "@/lib/db/schema";

export type SupplierSearchKeywordPriority = "P0" | "P1" | "P2";

export type SupplierSearchKeyword = {
  phrase: string;
  monthlySearches: number;
  cpcUsd: number;
  priority: SupplierSearchKeywordPriority;
  source: "US Google" | "Amazon estimate";
};

type SupplierKeywordEvidence = {
  offers: string[];
  processes: string[];
  context: string;
  category: string;
  allowsProcessKeywords: boolean;
};

type SupplierSearchKeywordRule = SupplierSearchKeyword & {
  matches: (evidence: SupplierKeywordEvidence) => boolean;
};

// Search metrics were collected on 2026-08-24. Google figures are US monthly
// searches from the seodata.dev keyword API; Amazon figures are marketplace
// demand estimates. Volumes rank already-relevant phrases only. A phrase is
// never assigned unless the reviewed supplier product/process fields satisfy
// its evidence rule.

function normalize(value: string): string {
  return value
    .toLowerCase()
    .replace(/[‐‑‒–—−/-]/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function evidenceFor(supplier: SupplierListing): SupplierKeywordEvidence {
  const publishedOffers = (supplier.productsEn ?? []).map(normalize).filter(Boolean);
  const equipmentCategory = ["equipment", "mold", "tooling", "service"].includes(
    supplier.category ?? "",
  );
  const equipmentOffer = /\b(?:machines?|machinery|equipment|systems?|lines?|projects?|solutions?|services?|presses?|molds?|moulds?|dies?|automation units?|inspection|grinding|repair)\b/;
  const offers = equipmentCategory
    ? publishedOffers.filter((offer) => !equipmentOffer.test(offer))
    : publishedOffers;
  const processes = (supplier.processListEn ?? []).map(normalize).filter(Boolean);
  const allowsProcessKeywords = !["equipment", "mold", "tooling", "service"].includes(
    supplier.category ?? "",
  );
  const context = [
    ...publishedOffers,
    ...processes,
    normalize(supplier.descriptionEn ?? ""),
  ].filter(Boolean).join(" ");

  return {
    offers,
    processes,
    context,
    category: supplier.category ?? "",
    allowsProcessKeywords,
  };
}

function entryHasAll(entries: string[], ...patterns: RegExp[]): boolean {
  return entries.some((entry) => patterns.every((pattern) => pattern.test(entry)));
}

function hasOffer(evidence: SupplierKeywordEvidence, pattern: RegExp): boolean {
  return evidence.offers.some((entry) => pattern.test(entry));
}

function hasProcess(evidence: SupplierKeywordEvidence, pattern: RegExp): boolean {
  return evidence.allowsProcessKeywords && evidence.processes.some((entry) => pattern.test(entry));
}

function hasContext(evidence: SupplierKeywordEvidence, pattern: RegExp): boolean {
  return pattern.test(evidence.context);
}

const GLASS = /\b(?:fiberglass|glass fiber|glass fibre|gfrp|e glass)\b/;
const CARBON = /\bcarbon (?:fiber|fibre)\b/;
const FRP = /\b(?:frp|grp|gfrp|fiber reinforced plastic|fibre reinforced plastic)\b/;

export const SUPPLIER_SEARCH_KEYWORD_CATALOG: readonly SupplierSearchKeywordRule[] = [
  {
    phrase: "chopped strand mat",
    monthlySearches: 60_500,
    cpcUsd: 3.31,
    priority: "P0",
    source: "US Google",
    matches: (evidence) => hasOffer(evidence, /\b(?:chopped strand mat|csm)\b/),
  },
  {
    phrase: "bulk molding compound",
    monthlySearches: 40_500,
    cpcUsd: 2.37,
    priority: "P0",
    source: "US Google",
    matches: (evidence) => hasOffer(evidence, /\b(?:bulk molding compound|bmc bulk|bmc compound)\b/),
  },
  {
    phrase: "forged carbon fiber",
    monthlySearches: 9_900,
    cpcUsd: 0.32,
    priority: "P0",
    source: "US Google",
    matches: (evidence) => entryHasAll(evidence.offers, CARBON, /\bforged\b/),
  },
  {
    phrase: "carbon fiber sheets",
    monthlySearches: 5_400,
    cpcUsd: 1.03,
    priority: "P0",
    source: "US Google",
    matches: (evidence) => entryHasAll(evidence.offers, CARBON, /\b(?:sheet|sheets|laminate|laminates)\b/),
  },
  {
    phrase: "fiberglass sheets",
    monthlySearches: 5_400,
    cpcUsd: 0.54,
    priority: "P0",
    source: "US Google",
    matches: (evidence) => entryHasAll(evidence.offers, /\b(?:sheet|sheets|flat sheet|laminate|laminates)\b/, FRP) && hasContext(evidence, GLASS),
  },
  {
    phrase: "carbon fiber tripod",
    monthlySearches: 5_000,
    cpcUsd: 0,
    priority: "P0",
    source: "Amazon estimate",
    matches: (evidence) => entryHasAll(evidence.offers, CARBON, /\btripods?\b/),
  },
  {
    phrase: "fiberglass rebar",
    monthlySearches: 4_400,
    cpcUsd: 0.36,
    priority: "P0",
    source: "US Google",
    matches: (evidence) => hasOffer(evidence, /\b(?:rebar|reinforcing bars?|composite bars?)\b/) && hasContext(evidence, GLASS),
  },
  {
    phrase: "carbon fiber tube",
    monthlySearches: 4_400,
    cpcUsd: 1.91,
    priority: "P0",
    source: "US Google",
    matches: (evidence) => entryHasAll(evidence.offers, CARBON, /\b(?:tube|tubes|tubing)\b/),
  },
  {
    phrase: "carbon fiber hard hat",
    monthlySearches: 4_300,
    cpcUsd: 0,
    priority: "P0",
    source: "Amazon estimate",
    matches: (evidence) => entryHasAll(evidence.offers, CARBON, /\bhard hats?\b/),
  },
  {
    phrase: "carbon fiber steering wheel",
    monthlySearches: 4_300,
    cpcUsd: 0,
    priority: "P0",
    source: "Amazon estimate",
    matches: (evidence) => entryHasAll(evidence.offers, CARBON, /\bsteering wheels?\b/),
  },
  {
    phrase: "fiberglass cloth",
    monthlySearches: 3_600,
    cpcUsd: 0.63,
    priority: "P0",
    source: "US Google",
    matches: (evidence) => entryHasAll(evidence.offers, /\b(?:cloth|fabric|fabrics|woven)\b/, GLASS),
  },
  {
    phrase: "fiberglass rod",
    monthlySearches: 3_600,
    cpcUsd: 0.58,
    priority: "P0",
    source: "US Google",
    matches: (evidence) => entryHasAll(evidence.offers, /\b(?:rod|rods|solid rod)\b/, FRP) && hasContext(evidence, GLASS),
  },
  {
    phrase: "carbon fiber tape",
    monthlySearches: 3_000,
    cpcUsd: 0,
    priority: "P0",
    source: "Amazon estimate",
    matches: (evidence) => entryHasAll(evidence.offers, CARBON, /\btapes?\b/),
  },
  {
    phrase: "fiberglass panels",
    monthlySearches: 2_900,
    cpcUsd: 0.48,
    priority: "P0",
    source: "US Google",
    matches: (evidence) => entryHasAll(evidence.offers, /\b(?:panel|panels|wall cladding)\b/, FRP) && hasContext(evidence, GLASS),
  },
  {
    phrase: "carbon fiber cue stick",
    monthlySearches: 2_500,
    cpcUsd: 0,
    priority: "P1",
    source: "Amazon estimate",
    matches: (evidence) => entryHasAll(evidence.offers, CARBON, /\b(?:cue sticks?|billiard cues?|pool cues?)\b/),
  },
  {
    phrase: "fiberglass grating",
    monthlySearches: 2_400,
    cpcUsd: 3.47,
    priority: "P0",
    source: "US Google",
    matches: (evidence) => hasOffer(evidence, /\bgratings?\b/) && hasContext(evidence, GLASS),
  },
  {
    phrase: "carbon fiber fishing rod",
    monthlySearches: 2_400,
    cpcUsd: 0.57,
    priority: "P0",
    source: "US Google",
    matches: (evidence) => entryHasAll(evidence.offers, CARBON, /\bfishing rods?\b/),
  },
  {
    phrase: "fiberglass fishing rod",
    monthlySearches: 2_400,
    cpcUsd: 0.36,
    priority: "P0",
    source: "US Google",
    matches: (evidence) => entryHasAll(evidence.offers, GLASS, /\bfishing rods?\b/),
  },
  {
    phrase: "carbon fiber pool cue",
    monthlySearches: 2_100,
    cpcUsd: 0,
    priority: "P1",
    source: "Amazon estimate",
    matches: (evidence) => entryHasAll(evidence.offers, CARBON, /\b(?:pool cues?|billiard cues?)\b/),
  },
  {
    phrase: "carbon fiber pickleball paddle",
    monthlySearches: 2_100,
    cpcUsd: 0,
    priority: "P1",
    source: "Amazon estimate",
    matches: (evidence) => entryHasAll(evidence.offers, CARBON, /\bpickleball paddles?\b/),
  },
  {
    phrase: "carbon fiber filament",
    monthlySearches: 2_000,
    cpcUsd: 0,
    priority: "P1",
    source: "Amazon estimate",
    matches: (evidence) => entryHasAll(evidence.offers, CARBON, /\bfilaments?\b/),
  },
  {
    phrase: "fiberglass mat",
    monthlySearches: 1_900,
    cpcUsd: 0.51,
    priority: "P1",
    source: "US Google",
    matches: (evidence) => entryHasAll(evidence.offers, /\b(?:mat|mats|tissue)\b/, GLASS),
  },
  {
    phrase: "fiberglass roll",
    monthlySearches: 1_600,
    cpcUsd: 0.74,
    priority: "P1",
    source: "US Google",
    matches: (evidence) => entryHasAll(evidence.offers, /\b(?:roll|rolls|rolled goods)\b/, GLASS),
  },
  {
    phrase: "pultruded",
    monthlySearches: 1_600,
    cpcUsd: 4.62,
    priority: "P0",
    source: "US Google",
    matches: (evidence) => hasOffer(evidence, /\bpultrud/) ||
      (evidence.category === "manufacturer" && hasProcess(evidence, /\bpultrusion\b/)),
  },
  {
    phrase: "carbon fiber fabric",
    monthlySearches: 1_600,
    cpcUsd: 0.66,
    priority: "P1",
    source: "US Google",
    matches: (evidence) => entryHasAll(evidence.offers, CARBON, /\b(?:fabric|fabrics|cloth|woven|weave)\b/),
  },
  {
    phrase: "carbon fiber plate",
    monthlySearches: 1_300,
    cpcUsd: 2.36,
    priority: "P0",
    source: "US Google",
    matches: (evidence) => entryHasAll(evidence.offers, CARBON, /\b(?:plate|plates|sheet|sheets|laminate|laminates)\b/),
  },
  {
    phrase: "fiberglass tube",
    monthlySearches: 1_300,
    cpcUsd: 1.76,
    priority: "P1",
    source: "US Google",
    matches: (evidence) => entryHasAll(evidence.offers, /\b(?:tube|tubes|tubing)\b/, FRP) && hasContext(evidence, GLASS),
  },
  {
    phrase: "FRP grating",
    monthlySearches: 1_000,
    cpcUsd: 5.05,
    priority: "P0",
    source: "US Google",
    matches: (evidence) => entryHasAll(evidence.offers, FRP, /\bgratings?\b/),
  },
  {
    phrase: "fiberglass reinforced pipe",
    monthlySearches: 1_000,
    cpcUsd: 4.32,
    priority: "P0",
    source: "US Google",
    matches: (evidence) => hasOffer(evidence, /\b(?:frp|grp|gfrp|fiberglass|glass fiber)\b.*\b(?:pipe|pipes|piping)\b|\b(?:pipe|pipes|piping)\b.*\b(?:frp|grp|gfrp|fiberglass|glass fiber)\b/) && hasContext(evidence, GLASS),
  },
  {
    phrase: "FRP pipe",
    monthlySearches: 1_000,
    cpcUsd: 4.32,
    priority: "P0",
    source: "US Google",
    matches: (evidence) => hasOffer(evidence, /\b(?:frp|grp|gfrp)\b.*\b(?:pipe|pipes|piping)\b|\b(?:pipe|pipes|piping)\b.*\b(?:frp|grp|gfrp)\b/),
  },
  {
    phrase: "carbon fiber products",
    monthlySearches: 880,
    cpcUsd: 1,
    priority: "P1",
    source: "US Google",
    matches: (evidence) => hasOffer(evidence, CARBON),
  },
  {
    phrase: "carbon fiber panels",
    monthlySearches: 880,
    cpcUsd: 0.93,
    priority: "P1",
    source: "US Google",
    matches: (evidence) => entryHasAll(evidence.offers, CARBON, /\b(?:panel|panels|sheet|sheets|laminate|laminates)\b/),
  },
  {
    phrase: "fiberglass pipe",
    monthlySearches: 880,
    cpcUsd: 2.55,
    priority: "P0",
    source: "US Google",
    matches: (evidence) => hasOffer(evidence, /\b(?:frp|grp|gfrp|fiberglass|glass fiber)\b.*\b(?:pipe|pipes|piping)\b|\b(?:pipe|pipes|piping)\b.*\b(?:frp|grp|gfrp|fiberglass|glass fiber)\b/) && hasContext(evidence, GLASS),
  },
  {
    phrase: "chopped carbon fiber",
    monthlySearches: 720,
    cpcUsd: 0.37,
    priority: "P1",
    source: "US Google",
    matches: (evidence) => entryHasAll(evidence.offers, CARBON, /\bchopped\b/),
  },
  {
    phrase: "sheet molding compound",
    monthlySearches: 590,
    cpcUsd: 0.74,
    priority: "P1",
    source: "US Google",
    matches: (evidence) => hasOffer(evidence, /\b(?:sheet molding compound|smc sheet|smc compound)\b/),
  },
  {
    phrase: "carbon fiber pipe",
    monthlySearches: 590,
    cpcUsd: 1.67,
    priority: "P1",
    source: "US Google",
    matches: (evidence) => entryHasAll(evidence.offers, CARBON, /\b(?:pipe|pipes|piping)\b/),
  },
  {
    phrase: "FRP rebar",
    monthlySearches: 480,
    cpcUsd: 0.72,
    priority: "P1",
    source: "US Google",
    matches: (evidence) => hasOffer(evidence, /\b(?:frp|grp|gfrp)\b.*\b(?:rebar|reinforcing bars?)\b|\b(?:rebar|reinforcing bars?)\b.*\b(?:frp|grp|gfrp)\b|\bcomposite rebar\b/),
  },
  {
    phrase: "fiberglass cloth roll",
    monthlySearches: 480,
    cpcUsd: 0.97,
    priority: "P1",
    source: "US Google",
    matches: (evidence) => entryHasAll(evidence.offers, GLASS, /\b(?:cloth|fabric)\b/, /\b(?:roll|rolls)\b/),
  },
  {
    phrase: "fiberglass chopped strand mat",
    monthlySearches: 390,
    cpcUsd: 1.4,
    priority: "P1",
    source: "US Google",
    matches: (evidence) => hasOffer(evidence, /\b(?:chopped strand mat|csm)\b/) && hasContext(evidence, GLASS),
  },
  {
    phrase: "pultruded fiberglass",
    monthlySearches: 320,
    cpcUsd: 4.31,
    priority: "P0",
    source: "US Google",
    matches: (evidence) => (
      hasOffer(evidence, /\bpultrud/) ||
      (evidence.category === "manufacturer" && hasProcess(evidence, /\bpultrusion\b/))
    ) && hasContext(evidence, GLASS),
  },
  {
    phrase: "fiberglass reinforced plastic rebar",
    monthlySearches: 320,
    cpcUsd: 1.42,
    priority: "P1",
    source: "US Google",
    matches: (evidence) => hasOffer(evidence, /\b(?:rebar|reinforcing bars?|composite bars?)\b/) && hasContext(evidence, GLASS),
  },
  {
    phrase: "resin infusion",
    monthlySearches: 260,
    cpcUsd: 0.91,
    priority: "P2",
    source: "US Google",
    matches: (evidence) => hasProcess(evidence, /\b(?:resin infusion|vacuum infusion|vartm)\b/),
  },
  {
    phrase: "vacuum infusion",
    monthlySearches: 140,
    cpcUsd: 0.59,
    priority: "P2",
    source: "US Google",
    matches: (evidence) => hasProcess(evidence, /\b(?:vacuum infusion|vartm)\b/),
  },
  {
    phrase: "custom carbon fiber tubing",
    monthlySearches: 140,
    cpcUsd: 3.12,
    priority: "P0",
    source: "US Google",
    matches: (evidence) => entryHasAll(evidence.offers, CARBON, /\b(?:tube|tubes|tubing)\b/, /\b(?:custom|oem|odm|made to order)\b/),
  },
  {
    phrase: "fiberglass pultruded grating",
    monthlySearches: 110,
    cpcUsd: 9.25,
    priority: "P0",
    source: "US Google",
    matches: (evidence) => entryHasAll(evidence.offers, /\bpultrud/, /\bgratings?\b/) && hasContext(evidence, GLASS),
  },
  {
    phrase: "FRP grating panels",
    monthlySearches: 110,
    cpcUsd: 4.81,
    priority: "P0",
    source: "US Google",
    matches: (evidence) => entryHasAll(evidence.offers, FRP, /\bgratings?\b/),
  },
  {
    phrase: "fiberglass pipe supplier",
    monthlySearches: 70,
    cpcUsd: 4.44,
    priority: "P0",
    source: "US Google",
    matches: (evidence) => hasOffer(evidence, /\b(?:frp|grp|gfrp|fiberglass|glass fiber)\b.*\b(?:pipe|pipes|piping)\b|\b(?:pipe|pipes|piping)\b.*\b(?:frp|grp|gfrp|fiberglass|glass fiber)\b/) && hasContext(evidence, GLASS),
  },
  {
    phrase: "molded FRP grating",
    monthlySearches: 50,
    cpcUsd: 3.66,
    priority: "P0",
    source: "US Google",
    matches: (evidence) => entryHasAll(evidence.offers, /\bmolded\b/, /\bgratings?\b/, FRP),
  },
  {
    phrase: "BMC material",
    monthlySearches: 6_600,
    cpcUsd: 2.29,
    priority: "P0",
    source: "US Google",
    matches: (evidence) => hasOffer(evidence, /\b(?:bulk molding compound|bmc bulk|bmc compound)\b/),
  },
] as const;

const PRIORITY_RANK: Record<SupplierSearchKeywordPriority, number> = {
  P0: 0,
  P1: 1,
  P2: 2,
};

export function getSupplierSearchKeywords(supplier: SupplierListing): SupplierSearchKeyword[] {
  const evidence = evidenceFor(supplier);
  return SUPPLIER_SEARCH_KEYWORD_CATALOG
    .filter((keyword) => keyword.matches(evidence))
    .map(({ phrase, monthlySearches, cpcUsd, priority, source }) => ({
      phrase,
      monthlySearches,
      cpcUsd,
      priority,
      source,
    }))
    .sort((a, b) =>
      PRIORITY_RANK[a.priority] - PRIORITY_RANK[b.priority] ||
      b.monthlySearches - a.monthlySearches ||
      a.phrase.localeCompare(b.phrase));
}
