export type SupplierSourcingCatalogItem =
  | {
      label: string;
      capability: string;
      query?: never;
      productSlug?: never;
    }
  | {
      label: string;
      query: string;
      capability?: never;
      productSlug?: never;
    }
  | {
      label: string;
      productSlug: string;
      capability?: never;
      query?: never;
    };

export type SupplierSourcingCatalog = {
  id: string;
  title: string;
  sourceLabel: string;
  description: string;
  items: readonly SupplierSourcingCatalogItem[];
};

// Taxonomy basis checked 2026-08-05:
// - JEC Composites Value Chain:
//   https://www.jeccomposites.com/discover-composites/activities-scope/
// - JEC application sectors:
//   https://www.jeccomposites.com/applications/
// - ACMA market segments:
//   https://acmanet.org/composites-manufacturing-magazine/market-segments/
// GetFRP condenses those industry definitions into buyer-facing catalog entry
// points that can be resolved by the current supplier search and product routes.
export const SUPPLIER_SOURCING_CATALOGS: readonly SupplierSourcingCatalog[] = [
  {
    id: "materials",
    title: "Reinforcements & matrices",
    sourceLabel: "JEC · raw materials",
    description:
      "Fiber, resin and chemistry suppliers at the start of the composites value chain.",
    items: [
      { label: "Glass fiber & fiberglass", capability: "fiber-glass" },
      { label: "Carbon fiber & CFRP", capability: "fiber-carbon" },
      { label: "Basalt fiber", capability: "fiber-basalt" },
      { label: "Aramid & high-strength fiber", capability: "fiber-aramid" },
      { label: "Unsaturated polyester resin", capability: "resin-polyester" },
      { label: "Vinyl ester resin", capability: "resin-vinyl-ester" },
      { label: "Epoxy resin", capability: "resin-epoxy" },
      { label: "Thermoplastic matrices", capability: "resin-thermoplastic" },
    ],
  },
  {
    id: "intermediates",
    title: "Intermediates & compounds",
    sourceLabel: "JEC · semi-finished materials",
    description:
      "Textile reinforcements, molding compounds and semi-finished formats ready for conversion.",
    items: [
      { label: "Rovings & chopped strand", query: "roving chopped strand" },
      { label: "Fabrics, mats & veils", query: "fabric mat veil" },
      { label: "Prepreg & towpreg", query: "prepreg towpreg" },
      { label: "SMC & BMC compounds", query: "SMC BMC compound" },
      { label: "LFT, GMT & thermoplastic tapes", query: "LFT GMT thermoplastic tape" },
      { label: "Core materials & sandwich panels", query: "core material sandwich panel" },
      { label: "Gelcoats, coatings & adhesives", query: "gelcoat coating adhesive" },
    ],
  },
  {
    id: "processes",
    title: "Manufacturing processes",
    sourceLabel: "JEC · parts by process",
    description:
      "Match part geometry, production volume and evidence requirements to the right process.",
    items: [
      { label: "Pultrusion", capability: "process-pultrusion" },
      { label: "Filament winding", capability: "process-filament-winding" },
      { label: "Compression molding · SMC/BMC", capability: "process-compression-molding" },
      { label: "Resin transfer molding · RTM", capability: "process-rtm" },
      { label: "Vacuum infusion · VARTM", capability: "process-vacuum-infusion" },
      { label: "Hand lay-up & spray-up", capability: "process-hand-lay-up" },
      { label: "Prepreg & autoclave", capability: "process-prepreg-autoclave" },
      { label: "Thermoplastic molding · LFT/GMT", capability: "process-thermoplastic-molding" },
    ],
  },
  {
    id: "products",
    title: "FRP products & systems",
    sourceLabel: "GetFRP · buyer product catalog",
    description:
      "Open a structured product specification before comparing matched factories.",
    items: [
      { label: "FRP grating", productSlug: "frp-grating" },
      { label: "Pultruded profiles", productSlug: "pultruded-profiles" },
      { label: "Fiberglass sheet", productSlug: "fiberglass-sheet" },
      { label: "FRP rebar", productSlug: "frp-rebar" },
      { label: "FRP pipe & tanks", productSlug: "frp-pipe" },
      { label: "SMC & BMC parts", productSlug: "smc-bmc" },
      { label: "Resin & gelcoat", productSlug: "resin-gelcoat" },
      { label: "Glass fiber products", productSlug: "fiber-glass" },
    ],
  },
  {
    id: "equipment-services",
    title: "Equipment & services",
    sourceLabel: "JEC · equipment & services",
    description:
      "Production equipment, tooling, testing and specialist services around composite parts.",
    items: [
      { label: "Molds, tooling & release systems", query: "mold tooling release" },
      { label: "Resin handling & dispensing", query: "resin handling dispensing" },
      { label: "Ovens & autoclaves", query: "oven autoclave" },
      { label: "Presses & molding systems", query: "press molding equipment" },
      { label: "CNC cutting & finishing", query: "CNC cutting finishing" },
      { label: "Testing, NDT & quality control", query: "testing NDT quality control" },
      { label: "Design, simulation & engineering", query: "design simulation engineering" },
      { label: "Recycling & circularity", query: "composite recycling" },
    ],
  },
  {
    id: "markets",
    title: "Application markets",
    sourceLabel: "JEC + ACMA · market segments",
    description:
      "Search by the end-use sectors used by the international composites industry.",
    items: [
      { label: "Aerospace & defense", query: "aerospace defense" },
      { label: "Automotive & road transport", query: "automotive transport" },
      { label: "Building & civil engineering", query: "building civil engineering" },
      { label: "Infrastructure & utilities", query: "infrastructure utility" },
      { label: "Renewable energy & wind", query: "renewable energy wind" },
      { label: "Marine & shipbuilding", query: "marine shipbuilding" },
      { label: "Electrical, electronics & telecom", query: "electrical electronics telecom" },
      { label: "Pipe, tanks, water & oil and gas", query: "pipe tank water oil gas" },
    ],
  },
] as const;

export const SUPPLIER_SOURCING_CATALOG_ITEM_COUNT =
  SUPPLIER_SOURCING_CATALOGS.reduce(
    (total, catalog) => total + catalog.items.length,
    0,
  );
