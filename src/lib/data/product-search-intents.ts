export type ProductSearchIntent = {
  title: string;
  h1: string;
  primaryTerms: readonly string[];
  audienceNote: string;
  primaryKeyword?: string;
  openingParagraph?: string;
  selectionParagraph?: string;
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
    title: "FRP Grating Manufacturer Directory in China | GetFRP",
    h1: "Compare FRP Grating Manufacturer Capabilities in China",
    primaryKeyword: "FRP grating manufacturer",
    primaryTerms: ["FRP grating manufacturer", "fiberglass grating", "GRP grating"],
    audienceNote: "Industrial flooring, walkways, trench covers and access systems",
    openingParagraph:
      "Use this FRP grating manufacturer directory to compare Chinese factories for molded and pultruded panels, stair treads, trench covers and custom-cut access systems. Filter the shortlist by resin system, load evidence, fire performance, production capability and export readiness before sending one controlled RFQ.",
    selectionParagraph:
      "When evaluating an FRP grating manufacturer, tie every load table and fire report to the offered construction, depth, resin, surface and support span. Then freeze cut plans, edge sealing, clips, inspection criteria and export packing before comparing landed quotations.",
  },
  "pultruded-profiles": {
    title: "Pultruded FRP Profile Manufacturer in China | GetFRP",
    h1: "Compare Pultruded FRP Profile Manufacturer Capabilities in China",
    primaryKeyword: "pultruded FRP profile manufacturer",
    primaryTerms: ["pultruded FRP profile manufacturer", "pultruded FRP profiles", "custom pultrusion"],
    audienceNote: "Structural shapes, rods, tubes and drawing-controlled custom profiles",
    openingParagraph:
      "Use this pultruded FRP profile manufacturer directory to compare Chinese factories for standard structural shapes and drawing-controlled custom sections. Review resin, reinforcement architecture, tolerances, tooling, test evidence, secondary machining and export capability before requesting samples or quotations.",
    selectionParagraph:
      "When shortlisting a pultruded FRP profile manufacturer, confirm the drawing revision, die ownership, laminate architecture, longitudinal and transverse properties, dimensional tolerances and packing length. Supplier-specific evidence matters because identical outside dimensions can conceal materially different stiffness and durability.",
  },
  "fiberglass-sheet": {
    title: "Fiberglass Sheet Manufacturer Directory | GetFRP",
    h1: "Compare Fiberglass Sheet Manufacturer Capabilities in China",
    primaryKeyword: "fiberglass sheet manufacturer",
    primaryTerms: ["fiberglass sheet manufacturer", "FRP sheets", "fiberglass panels"],
    audienceNote: "Industrial laminates, corrosion panels and electrical insulation",
    openingParagraph:
      "Use this fiberglass sheet manufacturer directory to compare Chinese factories for industrial laminates, corrosion panels, electrical insulation and enclosure sheet. Match process, resin, reinforcement, thickness tolerance, surface finish and test evidence to the application before requesting production samples.",
    selectionParagraph:
      "When evaluating a fiberglass sheet manufacturer, define the laminate construction and conditioning behind every mechanical, electrical, fire or corrosion value. Control usable dimensions, flatness, cut edges, colour, surface defects, batch traceability and protective packing in the same RFQ.",
  },
  "frp-rebar": {
    title: "FRP Rebar Manufacturer Directory in China | GetFRP",
    h1: "Compare FRP Rebar Manufacturer Capabilities in China",
    primaryKeyword: "FRP rebar manufacturer",
    primaryTerms: ["FRP rebar manufacturer", "GFRP rebar", "fiberglass rebar"],
    audienceNote: "Concrete reinforcement for bridges, tunnels, marine works and slabs",
    openingParagraph:
      "Use this FRP rebar manufacturer directory to compare Chinese GFRP and fiberglass reinforcement factories for bridges, tunnels, marine works and concrete slabs. Review bar geometry, resin system, bond performance, tensile evidence, production controls and export documentation against the project standard.",
    selectionParagraph:
      "When shortlisting an FRP rebar manufacturer, verify that tensile, modulus, bond, durability and bend evidence covers the offered diameter, surface and production site. Freeze couplers, bend restrictions, bundle identity, ultraviolet protection and handling instructions before commercial approval.",
  },
  "frp-pipe": {
    title: "FRP Pipe Manufacturer Directory in China | GetFRP",
    h1: "Compare FRP Pipe Manufacturer Capabilities in China",
    primaryKeyword: "FRP pipe manufacturer",
    primaryTerms: ["FRP pipe manufacturer", "GRP pipe", "GRE pipe"],
    audienceNote: "Water, wastewater, chemical, marine and oilfield piping systems",
    openingParagraph:
      "Use this FRP pipe manufacturer directory to compare Chinese suppliers of GRP and GRE piping for water, wastewater, chemical, marine and oilfield service. Match process, resin and liner, pressure and stiffness class, joining system, test evidence and export capability to the operating envelope.",
    selectionParagraph:
      "When evaluating an FRP pipe manufacturer, lock the design code, diameter, pressure, temperature, media, burial loads, joint details and acceptance tests before pricing. Require traceable hydrostatic or stiffness evidence, dimensional inspection and packing that protects machined or adhesive-bonded ends.",
  },
  "smc-bmc": {
    title: "SMC BMC Manufacturer Directory in China | GetFRP",
    h1: "Compare SMC BMC Manufacturer Capabilities in China",
    primaryKeyword: "SMC BMC manufacturer",
    primaryTerms: ["SMC BMC manufacturer", "sheet molding compound", "bulk molding compound"],
    audienceNote: "Repeat molded components, enclosures, covers and transport parts",
    openingParagraph:
      "Use this SMC BMC manufacturer directory to compare Chinese compounders and compression molders for repeat components, enclosures, covers and transport parts. Review formulation control, charge preparation, tooling, press capacity, dimensional capability, qualification evidence and production traceability.",
    selectionParagraph:
      "When shortlisting an SMC BMC manufacturer, connect every material property and certificate to the approved formulation, fibre content, part thickness, moulding cycle and production site. Define tool ownership, first-article approval, cosmetic limits, inserts, lot sampling and change control before launch.",
  },
  "resin-gelcoat": {
    title: "Composite Resin Manufacturer Directory in China | GetFRP",
    h1: "Compare Composite Resin Manufacturer Capabilities in China",
    primaryKeyword: "composite resin manufacturer",
    primaryTerms: ["composite resin manufacturer", "vinyl ester resin", "FRP gelcoat"],
    audienceNote: "Composite-grade resin systems, gelcoats and formulation evidence",
    openingParagraph:
      "Use this composite resin manufacturer directory to compare Chinese suppliers of polyester, vinyl ester, epoxy and gelcoat systems for FRP production. Screen chemistry, viscosity and cure window, reinforcement compatibility, batch controls, regulatory documents and application support before plant trials.",
    selectionParagraph:
      "When evaluating a composite resin manufacturer, identify the exact grade, manufacturing site, shelf life, storage conditions and test method behind every published value. Approve the complete catalyst, accelerator, pigment and filler package on the buyer's actual reinforcement and process before scale-up.",
  },
  "fiber-glass": {
    title: "Fiberglass Manufacturer Directory in China | GetFRP",
    h1: "Compare Fiberglass Manufacturer Capabilities in China",
    primaryKeyword: "fiberglass manufacturer",
    primaryTerms: ["fiberglass manufacturer", "fiberglass roving", "fiberglass mat"],
    audienceNote: "Industrial reinforcement formats with sizing and batch traceability",
    openingParagraph:
      "Use this fiberglass manufacturer directory to compare Chinese producers of roving, chopped strand mat, woven and stitched fabrics, veil and other reinforcement formats. Match glass type, sizing, tex or areal weight, process compatibility, batch evidence and export packaging to the laminate specification.",
    selectionParagraph:
      "When shortlisting a fiberglass manufacturer, verify the product code, sizing chemistry, resin and process compatibility, moisture limits and test basis for each format. Control roll or package construction, splice limits, lot identity, storage, shelf life and container protection before approving supply.",
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
