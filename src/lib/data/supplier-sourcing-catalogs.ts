export type SupplierSourcingCatalogItem = {
  label: string;
  /** Crawlable, indexable destination; never a supplier search-results URL. */
  href: string;
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
      { label: "Glass fiber & fiberglass", href: "/products/fiber-glass" },
      { label: "Carbon fiber & CFRP", href: "/products/carbon-fiber" },
      { label: "Basalt fiber", href: "/fibers/basalt" },
      { label: "Aramid & high-strength fiber", href: "/fibers/aramid" },
      { label: "Unsaturated polyester resin", href: "/products/resin-gelcoat#polyester-resin" },
      { label: "Vinyl ester resin", href: "/products/resin-gelcoat#vinyl-ester-resin" },
      { label: "Epoxy resin", href: "/products/resin-gelcoat#epoxy-resin" },
      { label: "Thermoplastic matrices", href: "/manufacturing/thermoplastic-forming" },
    ],
  },
  {
    id: "intermediates",
    title: "Intermediates & compounds",
    sourceLabel: "JEC · semi-finished materials",
    description:
      "Textile reinforcements, molding compounds and semi-finished formats ready for conversion.",
    items: [
      { label: "Rovings & chopped strand", href: "/products/fiber-glass#rovings-and-chopped-strand" },
      { label: "Fabrics, mats & veils", href: "/products/fiber-glass#fabrics-mats-and-veils" },
      { label: "Prepreg & towpreg", href: "/manufacturing/prepreg-autoclave" },
      { label: "SMC & BMC compounds", href: "/products/smc-bmc" },
      { label: "LFT, GMT & thermoplastic tapes", href: "/manufacturing/thermoplastic-forming" },
      { label: "Core materials & sandwich panels", href: "/products/fiberglass-panel" },
      { label: "Gelcoats, coatings & adhesives", href: "/products/resin-gelcoat" },
    ],
  },
  {
    id: "processes",
    title: "Manufacturing processes",
    sourceLabel: "JEC · parts by process",
    description:
      "Match part geometry, production volume and evidence requirements to the right process.",
    items: [
      { label: "Pultrusion", href: "/manufacturing/pultrusion" },
      { label: "Filament winding", href: "/manufacturing/filament-winding" },
      { label: "Compression molding · SMC/BMC", href: "/manufacturing/smc-molding" },
      { label: "Resin transfer molding · RTM", href: "/manufacturing/rtm" },
      { label: "Vacuum infusion · VARTM", href: "/manufacturing/vacuum-infusion" },
      { label: "Hand lay-up & spray-up", href: "/manufacturing/hand-layup" },
      { label: "Prepreg & autoclave", href: "/manufacturing/prepreg-autoclave" },
      { label: "Thermoplastic molding · LFT/GMT", href: "/manufacturing/thermoplastic-forming" },
    ],
  },
  {
    id: "products",
    title: "FRP products & systems",
    sourceLabel: "GetFRP · buyer product catalog",
    description:
      "Open a structured product specification before comparing matched factories.",
    items: [
      { label: "FRP grating", href: "/products/frp-grating" },
      { label: "Pultruded profiles", href: "/products/pultruded-profiles" },
      { label: "Fiberglass sheet", href: "/products/fiberglass-sheet" },
      { label: "FRP rebar", href: "/products/frp-rebar" },
      { label: "FRP pipe & tanks", href: "/products/frp-pipe" },
      { label: "SMC & BMC parts", href: "/products/smc-bmc" },
      { label: "Resin & gelcoat", href: "/products/resin-gelcoat" },
      { label: "Glass fiber products", href: "/products/fiber-glass" },
    ],
  },
  {
    id: "equipment-services",
    title: "Equipment & services",
    sourceLabel: "JEC · equipment & services",
    description:
      "Production equipment, tooling, testing and specialist services around composite parts.",
    items: [
      { label: "Molds, tooling & release systems", href: "/manufacturing#tooling-and-release" },
      { label: "Resin handling & dispensing", href: "/manufacturing#resin-processing" },
      { label: "Ovens & autoclaves", href: "/manufacturing/prepreg-autoclave" },
      { label: "Presses & molding systems", href: "/manufacturing/smc-molding" },
      { label: "CNC cutting & finishing", href: "/manufacturing/pultrusion#secondary-operations" },
      { label: "Testing, NDT & quality control", href: "/services/frp-engineering-qa" },
      { label: "Design, simulation & engineering", href: "/tools" },
      { label: "Recycling & circularity", href: "/applications#recycling-and-circularity" },
    ],
  },
  {
    id: "markets",
    title: "Application markets",
    sourceLabel: "JEC + ACMA · market segments",
    description:
      "Search by the end-use sectors used by the international composites industry.",
    items: [
      { label: "Aerospace & defense", href: "/applications#aerospace-space" },
      { label: "Automotive & road transport", href: "/applications#automotive-road-transportation" },
      { label: "Building & civil engineering", href: "/applications/construction" },
      { label: "Infrastructure & utilities", href: "/applications/construction#infrastructure" },
      { label: "Renewable energy & wind", href: "/applications#wind-renewable-energy" },
      { label: "Marine & shipbuilding", href: "/applications/marine" },
      { label: "Electrical, electronics & telecom", href: "/applications/electrical" },
      { label: "Pipe, tanks, water & oil and gas", href: "/applications/chemical-processing" },
    ],
  },
] as const;

export const SUPPLIER_SOURCING_CATALOG_ITEM_COUNT =
  SUPPLIER_SOURCING_CATALOGS.reduce(
    (total, catalog) => total + catalog.items.length,
    0,
  );
