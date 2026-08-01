import { SUPPLIER_CATEGORY_IMAGES } from "./supplier-category-images";
import {
  SUPPLIER_CATEGORY_PAGES,
  type SupplierCategorySlug,
} from "./supplier-category-pages";

type ProductCoreFields = {
  category: string;
  materials: string[];
  manufacturingProcesses: string[];
  applications: string[];
  standards: string[];
};

const PRODUCT_CORE_FIELDS: Record<SupplierCategorySlug, ProductCoreFields> = {
  "frp-grating": {
    category: "Access systems & structural products",
    materials: ["E-glass", "Polyester", "Vinyl ester", "Phenolic resin"],
    manufacturingProcesses: ["Molding", "Pultrusion", "CNC cutting"],
    applications: [
      "Industrial flooring",
      "Walkways",
      "Stair treads",
      "Trench covers",
    ],
    standards: ["ASTM E84", "EN 13706", "ISO 9001"],
  },
  "pultruded-profiles": {
    category: "Structural profiles",
    materials: ["E-glass", "ECR-glass", "Polyester", "Vinyl ester", "Epoxy"],
    manufacturingProcesses: ["Pultrusion", "CNC machining", "Assembly"],
    applications: [
      "Structural frames",
      "Handrails",
      "Cable tray",
      "Window systems",
    ],
    standards: ["EN 13706", "ASTM D3917", "ASTM D638"],
  },
  "fiberglass-sheet": {
    category: "Sheet & panel products",
    materials: ["Glass fiber", "Polyester", "Vinyl ester", "Epoxy", "Phenolic resin"],
    manufacturingProcesses: [
      "Continuous lamination",
      "Pultrusion",
      "Compression molding",
      "Hand lamination",
    ],
    applications: [
      "Electrical insulation",
      "Corrosion panels",
      "Architectural panels",
      "Equipment enclosures",
    ],
    standards: ["ASTM D790", "UL 94", "IEC 60893"],
  },
  "frp-rebar": {
    category: "Concrete reinforcement",
    materials: ["Glass fiber", "Basalt fiber", "Vinyl ester", "Epoxy"],
    manufacturingProcesses: ["Pultrusion", "Surface coating", "Helical wrapping"],
    applications: ["Bridges", "Seawalls", "Tunnels", "Concrete slabs"],
    standards: ["ACI 440.11", "ASTM D7957", "CSA S807"],
  },
  "frp-pipe": {
    category: "Pipe, tanks & process equipment",
    materials: ["Glass fiber", "Polyester", "Vinyl ester", "Epoxy"],
    manufacturingProcesses: ["Filament winding", "Centrifugal casting", "Hand lay-up"],
    applications: [
      "Chemical processing",
      "Water treatment",
      "Flue-gas systems",
      "Marine piping",
    ],
    standards: ["ASTM D2996", "ASTM D3517", "AWWA C950"],
  },
  "smc-bmc": {
    category: "Molded components",
    materials: ["Glass fiber", "Polyester", "Vinyl ester", "Thermoset compound"],
    manufacturingProcesses: ["Compression molding", "Transfer molding", "Tooling"],
    applications: [
      "Electrical enclosures",
      "Automotive components",
      "Covers",
      "High-volume molded parts",
    ],
    standards: ["UL 94", "ASTM D638", "IATF 16949"],
  },
  "resin-gelcoat": {
    category: "Resins & surface systems",
    materials: [
      "Unsaturated polyester",
      "Vinyl ester",
      "Epoxy",
      "Gelcoat",
      "Fire-retardant additives",
    ],
    manufacturingProcesses: ["Resin synthesis", "Blending", "Color matching"],
    applications: [
      "Pultrusion",
      "Filament winding",
      "Marine laminates",
      "Corrosion equipment",
    ],
    standards: ["REACH", "RoHS", "ASTM D2471"],
  },
  "fiber-glass": {
    category: "Fiber reinforcement",
    materials: ["E-glass", "ECR-glass", "S-glass", "Carbon fiber", "Basalt fiber"],
    manufacturingProcesses: ["Fiber forming", "Sizing", "Weaving", "Stitch bonding"],
    applications: [
      "Pultrusion",
      "Filament winding",
      "Infusion",
      "Compression molding",
    ],
    standards: ["ISO 1889", "ASTM D578", "REACH"],
  },
};

export const PRODUCT_SEED_RECORDS = SUPPLIER_CATEGORY_PAGES.map((page) => {
  const core = PRODUCT_CORE_FIELDS[page.slug];
  const image = SUPPLIER_CATEGORY_IMAGES[page.slug];
  return {
    id: page.slug,
    slug: page.slug,
    name: page.name,
    nameEn: page.name,
    shortName: page.shortName,
    category: core.category,
    summary: page.summary,
    description: page.overview[0] ?? page.summary,
    overview: page.overview,
    materials: core.materials,
    manufacturingProcesses: core.manufacturingProcesses,
    applications: core.applications,
    standards: core.standards,
    specifications: page.specifications,
    buyingChecks: page.buyingChecks,
    faqs: page.faqs,
    searchTerms: page.match.keywords,
    imageUrl: image.src,
    imageAlt: image.alt,
    status: "published" as const,
    source: "getfrp" as const,
  };
});

export function getProductSeedRecord(slug: string) {
  return PRODUCT_SEED_RECORDS.find((product) => product.slug === slug);
}
