export type ProductSearchIntent = {
  title: string;
  h1: string;
  primaryTerms: readonly string[];
  audienceNote: string;
};

/**
 * One search intent owns one canonical product page.
 *
 * The lead term uses the language buyers actually search. "In China" stays
 * inside the same title/H1 so the page can earn both the broader product term
 * and the lower-volume sourcing modifier without creating duplicate pages.
 */
export const PRODUCT_SEARCH_INTENTS: Record<string, ProductSearchIntent> = {
  "frp-grating": {
    title: "FRP Grating Manufacturers in China | Fiberglass & GRP",
    h1: "FRP, Fiberglass & GRP Grating Manufacturers in China",
    primaryTerms: ["FRP grating", "fiberglass grating", "GRP grating"],
    audienceNote: "Industrial flooring, walkways, trench covers and access systems",
  },
  "pultruded-profiles": {
    title: "Pultruded FRP Profiles in China | Manufacturers & Custom Shapes",
    h1: "Pultruded FRP Profile Manufacturers in China",
    primaryTerms: ["FRP profiles", "pultruded fiberglass", "custom pultrusion"],
    audienceNote: "Structural shapes, rods, tubes and drawing-controlled custom profiles",
  },
  "fiberglass-sheet": {
    title: "Fiberglass Sheet Manufacturers in China | Industrial FRP Panels",
    h1: "Industrial Fiberglass Sheet & FRP Panel Manufacturers in China",
    primaryTerms: ["FRP sheets", "fiberglass sheets", "fiberglass panels"],
    audienceNote: "Industrial laminates, corrosion panels and electrical insulation",
  },
  "frp-rebar": {
    title: "GFRP & Fiberglass Rebar Manufacturers in China | FRP Rebar",
    h1: "GFRP, Fiberglass & FRP Rebar Manufacturers in China",
    primaryTerms: ["fiberglass rebar", "GFRP rebar", "FRP rebar"],
    audienceNote: "Concrete reinforcement for bridges, tunnels, marine works and slabs",
  },
  "frp-pipe": {
    title: "FRP, GRP & GRE Pipe Manufacturers in China | Pipe Suppliers",
    h1: "FRP, GRP & GRE Pipe Manufacturers in China",
    primaryTerms: ["FRP pipe", "GRP pipe", "fiberglass pipe"],
    audienceNote: "Water, wastewater, chemical, marine and oilfield piping systems",
  },
  "smc-bmc": {
    title: "SMC & BMC Compound Manufacturers in China | Molded Parts",
    h1: "SMC & BMC Compound and Molded Part Manufacturers in China",
    primaryTerms: ["SMC compound", "sheet molding compound", "BMC compound"],
    audienceNote: "Repeat molded components, enclosures, covers and transport parts",
  },
  "resin-gelcoat": {
    title: "Vinyl Ester, Epoxy & Polyester Resin Suppliers in China",
    h1: "Composite Resin & Gelcoat Suppliers in China",
    primaryTerms: ["vinyl ester resin", "epoxy resin suppliers", "polyester resin suppliers"],
    audienceNote: "Composite-grade resin systems, gelcoats and formulation evidence",
  },
  "fiber-glass": {
    title: "Fiberglass Suppliers in China | Roving, Mat, Fabric & Veil",
    h1: "Fiberglass Suppliers & Manufacturers in China",
    primaryTerms: ["fiberglass suppliers", "fiberglass roving", "fiberglass mat"],
    audienceNote: "Industrial reinforcement formats with sizing and batch traceability",
  },
  "carbon-fiber": {
    title: "Carbon Fiber Manufacturers in China | Tow, Fabric & Profiles",
    h1: "Carbon Fiber Manufacturers & Suppliers in China",
    primaryTerms: ["carbon fiber manufacturers", "carbon fiber suppliers", "carbon fiber tow"],
    audienceNote: "Tow, fabrics, intermediate materials and engineered carbon products",
  },
  "carbon-fiber-prepreg": {
    title: "Carbon Fiber Prepreg Suppliers in China | Grades & Evidence",
    h1: "Carbon Fiber Prepreg Suppliers & Manufacturers in China",
    primaryTerms: ["carbon fiber prepreg", "carbon fiber prepreg suppliers", "prepreg manufacturers"],
    audienceNote: "Controlled resin content, cure cycle, storage and qualification evidence",
  },
  "frp-cable-tray": {
    title: "FRP Cable Tray Manufacturers in China | Fiberglass Cable Ladder",
    h1: "FRP Cable Tray & Cable Ladder Manufacturers in China",
    primaryTerms: ["FRP cable tray", "fiberglass cable tray", "FRP cable ladder"],
    audienceNote: "Corrosive and electrically sensitive industrial cable-management systems",
  },
  "frp-tank": {
    title: "FRP & GRP Tank Manufacturers in China | Vessels & Scrubbers",
    h1: "FRP & GRP Tank Manufacturers in China",
    primaryTerms: ["FRP tanks", "GRP tanks", "fiberglass tanks"],
    audienceNote: "Chemical storage, process vessels, scrubbers and corrosion equipment",
  },
  "frp-manhole-cover": {
    title: "FRP Manhole Cover Manufacturers in China | Composite Covers",
    h1: "FRP & Composite Manhole Cover Manufacturers in China",
    primaryTerms: ["FRP manhole cover", "composite manhole cover", "SMC manhole cover"],
    audienceNote: "Municipal, utility and industrial covers with declared load classes",
  },
  "frp-handrail": {
    title: "FRP & GRP Handrail Suppliers in China | Industrial Systems",
    h1: "FRP & GRP Handrail System Suppliers in China",
    primaryTerms: ["FRP handrail", "GRP handrail", "fiberglass guardrail"],
    audienceNote: "Modular guardrail systems for platforms, stairs and corrosive sites",
  },
  "frp-ladder": {
    title: "Industrial FRP Ladder Manufacturers in China | Fiberglass Ladders",
    h1: "Industrial FRP Ladder Manufacturers in China",
    primaryTerms: ["FRP ladder", "industrial fiberglass ladder", "FRP ladder supplier"],
    audienceNote: "Fixed access, cage and step ladders—not consumer household ladders",
  },
  "fiberglass-panel": {
    title: "Industrial Fiberglass Panel Manufacturers in China | FRP Panels",
    h1: "Industrial Fiberglass & FRP Panel Manufacturers in China",
    primaryTerms: ["fiberglass panels", "FRP panels", "sandwich panel manufacturers"],
    audienceNote: "Continuous, pultruded, molded and sandwich industrial panels",
  },
  "composite-core-materials": {
    title: "Composite Core Material Suppliers in China | Foam & Honeycomb",
    h1: "Composite Core & Honeycomb Material Suppliers in China",
    primaryTerms: ["composite core materials", "structural foam", "honeycomb core"],
    audienceNote: "Structural foams, balsa and honeycomb for sandwich laminates",
  },
  "frp-corrosion-equipment": {
    title: "FRP Corrosion Equipment Manufacturers in China | Ducts & Scrubbers",
    h1: "FRP Corrosion Equipment Manufacturers in China",
    primaryTerms: ["FRP duct", "FRP scrubber", "FRP pressure vessel"],
    audienceNote: "Ducts, scrubbers, stacks and vessels for aggressive process media",
  },
  "frp-enclosure": {
    title: "FRP Enclosure Manufacturers in China | Fiberglass Cabinets",
    h1: "FRP & Fiberglass Enclosure Manufacturers in China",
    primaryTerms: ["FRP enclosure", "fiberglass enclosure", "composite enclosure"],
    audienceNote: "Electrical, utility and industrial enclosures with fire and IP requirements",
  },
  "recycled-composites": {
    title: "Recycled Carbon Fiber & Fiberglass Suppliers in China",
    h1: "Recycled Composite Material Suppliers in China",
    primaryTerms: ["recycled carbon fiber", "recycled fiberglass", "recycled composite materials"],
    audienceNote: "Recovered fiber and compounds with feedstock and retained-property evidence",
  },
};

export function getProductSearchIntent(slug: string) {
  return PRODUCT_SEARCH_INTENTS[slug] ?? null;
}
