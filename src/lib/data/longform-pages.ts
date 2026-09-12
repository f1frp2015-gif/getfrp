import { BUYER_REFERENCES } from "./buyer-reference-content";

export type LongformPage = {
  slug: string;
  group: "source-from-china" | "insights";
  title: string;
  h1: string;
  description: string;
  subject: string;
  decision: string;
  evidence: string;
  supplierTerms: string[];
  related: Array<{ label: string; href: string }>;
};

export const SOURCE_FROM_CHINA_PAGES: LongformPage[] = [
  { slug: "verify-supplier", group: "source-from-china", title: "How to Verify an FRP Supplier in China | getfrp", h1: "How to Verify a China FRP Supplier", description: "A practical due-diligence workflow for legal identity, factory capability, certifications, product evidence and export readiness.", subject: "China FRP supplier", decision: "legal identity, actual manufacturing scope, subcontracting, quality controls and export responsibility", evidence: "business records, factory evidence, certificates, product reports and order-specific inspection", supplierTerms: ["frp", "composite"], related: [{ label: "China FRP suppliers", href: "/suppliers" }, { label: "How to compare suppliers", href: "/help/how-to-compare-suppliers" }, { label: "Submit an RFQ", href: "/rfq" }] },
  { slug: "frp-grating-vs-molded-grating", group: "source-from-china", title: "Pultruded vs Molded FRP Grating | getfrp", h1: "Pultruded vs Molded FRP Grating", description: "Compare construction, directional strength, mesh, fabrication, cost drivers and sourcing evidence for pultruded and molded FRP grating.", subject: "pultruded and molded FRP grating", decision: "load direction, support span, panel layout, openings, resin and installed fabrication", evidence: "construction-specific load tables, fire tests, resin traceability and sample inspection", supplierTerms: ["grating", "pultrusion"], related: [{ label: "FRP grating", href: "/products/frp-grating" }, { label: "Pultruded grating manufacturers", href: "/products/pultruded-frp-grating" }, { label: "FRP vs steel grating", href: "/insights/frp-vs-steel-grating" }] },
  { slug: "frp-grating-price-china", group: "source-from-china", title: "FRP Grating Price in China: Cost Drivers & RFQ | getfrp", h1: "FRP Grating Price in China: Cost Factors & RFQ", description: "Understand how resin, process, panel geometry, fabrication, testing, packing and volume affect China FRP grating quotations.", subject: "China FRP grating price", decision: "resin, construction, depth, mesh, surface, cut yield, clips, order volume and delivery term", evidence: "a controlled quote sheet, cut plan, test scope, packing design and Incoterm", supplierTerms: ["grating"], related: [{ label: "FRP grating suppliers", href: "/products/frp-grating" }, { label: "How to source grating", href: "/sourcing/frp-grating" }, { label: "Send a grating RFQ", href: "/rfq" }] },
];

export const INSIGHT_PAGES: LongformPage[] = [
  { slug: "carbon-fiber-vs-fiberglass", group: "insights", title: "Carbon Fiber vs Fiberglass: Engineering & Sourcing Comparison | getfrp", h1: "Carbon Fiber vs Fiberglass", description: "Compare stiffness, strength, density, conductivity, corrosion, processability, cost and sourcing evidence for carbon and glass fiber composites.", subject: "carbon fiber and fiberglass composites", decision: "specific stiffness, strength, electrical behavior, corrosion, temperature, process and budget", evidence: "fiber grade, laminate schedule, orientation, test method, specimen conditioning and production traceability", supplierTerms: ["carbon fiber", "fiberglass"], related: [{ label: "Carbon fiber products", href: "/products/carbon-fiber" }, { label: "Glass fiber suppliers", href: "/products/fiber-glass" }, { label: "Carbon pultrusion profiles", href: "/products/carbon-fiber-pultrusion-profiles" }] },
  { slug: "frp-vs-steel-grating", group: "insights", title: "FRP vs Steel Grating: Weight, Corrosion & Lifecycle Cost | getfrp", h1: "FRP vs Steel Grating", description: "Compare structural behavior, corrosion, fire, installation, maintenance and lifecycle cost before selecting FRP or steel grating.", subject: "FRP and steel grating", decision: "loads, span, stiffness, corrosion, fire, conductivity, installation and lifecycle maintenance", evidence: "design calculations, load tables, material certification, fire evidence and inspection criteria", supplierTerms: ["grating"], related: [{ label: "FRP grating manufacturers", href: "/products/frp-grating" }, { label: "FRP weight calculator", href: "/tools/frp-weight-calculator" }, { label: "Wastewater grating", href: "/applications/wastewater-treatment/frp-grating" }] },
  { slug: "composite-materials-market-size", group: "insights", title: "Composite Materials Market Size: How to Read Market Estimates | getfrp", h1: "Composite Materials Market Size: Sources & Scope", description: "A methodology-first guide to interpreting composite market-size estimates, segment definitions, geography, units and forecast assumptions.", subject: "composite materials market size", decision: "market boundary, material, process, application, geography, revenue basis and forecast scenario", evidence: "source definitions, base-year data, currency, volume, methodology and sensitivity range", supplierTerms: ["composite", "frp"], related: [{ label: "China FRP suppliers", href: "/suppliers" }, { label: "FRP products", href: "/products" }, { label: "Composite manufacturing", href: "/manufacturing/pultrusion" }] },
  { slug: "epoxy-vs-vinyl-ester-resin", group: "insights", title: "Epoxy vs Vinyl Ester Resin for FRP | getfrp", h1: "Epoxy vs Vinyl Ester Resin", description: "Compare cure, toughness, corrosion, temperature, adhesion, process fit and qualification evidence for epoxy and vinyl ester FRP systems.", subject: "epoxy and vinyl ester FRP", decision: "chemical exposure, temperature, toughness, cure, adhesion, process, fire performance and cost", evidence: "resin grade, batch certificate, cure record, laminate construction, conditioning and application-specific tests", supplierTerms: ["epoxy", "vinyl ester", "resin"], related: [{ label: "Resin and gelcoat", href: "/products/resin-gelcoat" }, { label: "Chemical processing FRP", href: "/applications/chemical-processing" }, { label: "FRP pipe", href: "/products/frp-pipe" }] },
];


export function buyerReference(page: LongformPage) {
  const reference = BUYER_REFERENCES[page.slug];
  if (!reference) throw new Error(`Missing independent buyer reference: ${page.slug}`);
  return reference;
}

export function longformSections(page: LongformPage) {
  return buyerReference(page).sections;
}
