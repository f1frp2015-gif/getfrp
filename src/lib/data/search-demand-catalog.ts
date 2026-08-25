export type CatalogDestination = {
  label: string;
  href: string;
  buyerLanguage: string;
  note: string;
  priority: "core" | "growth" | "support";
};

export type ProductSearchCategory = {
  id: string;
  title: string;
  stage: string;
  summary: string;
  buyingFocus: string;
  destinations: readonly CatalogDestination[];
};

export const PRIMARY_BUYER_PATHS = [
  {
    label: "GFRP & fiberglass rebar",
    href: "/products/frp-rebar",
    signal: "Concrete reinforcement",
    note: "Compare bar type, surface, design basis and product-level tensile evidence.",
  },
  {
    label: "FRP, fiberglass & GRP grating",
    href: "/products/frp-grating",
    signal: "Industrial access",
    note: "Choose molded or pultruded construction from span, load, resin and fire requirements.",
  },
  {
    label: "FRP, GRP & GRE pipe",
    href: "/products/frp-pipe",
    signal: "Fluid handling",
    note: "Control service fluid, pressure, stiffness, liner, joints and qualification standard.",
  },
  {
    label: "FRP & GRP tanks",
    href: "/products/frp-tank",
    signal: "Corrosion equipment",
    note: "Review laminate design, corrosion barrier, code basis, nozzles and inspection plan.",
  },
  {
    label: "Fiberglass & composite suppliers",
    href: "/suppliers",
    signal: "Supplier discovery",
    note: "Search reviewed China manufacturers by material, product, process and evidence.",
  },
] as const;

export const PRODUCT_SEARCH_CATEGORIES: readonly ProductSearchCategory[] = [
  {
    id: "fibers-reinforcements",
    title: "Fibers & reinforcements",
    stage: "Raw materials",
    summary: "Glass, carbon and other reinforcement formats for composite conversion.",
    buyingFocus: "Chemistry, format, tex or areal weight, sizing and batch evidence",
    destinations: [
      { label: "Fiberglass suppliers", href: "/products/fiber-glass", buyerLanguage: "fiberglass suppliers · roving · mat · veil", note: "Glass reinforcement formats and manufacturer evidence.", priority: "core" },
      { label: "Carbon fiber manufacturers", href: "/products/carbon-fiber", buyerLanguage: "carbon fiber manufacturers · tow · fabric", note: "Carbon fiber materials and engineered product capability.", priority: "growth" },
    ],
  },
  {
    id: "resins-matrix",
    title: "Resins, matrix & formulation",
    stage: "Raw materials",
    summary: "Thermoset resin systems, gelcoats and formulation inputs for FRP production.",
    buyingFocus: "Viscosity, cure, service temperature, chemical exposure and regulatory records",
    destinations: [
      { label: "Composite resins & gelcoat", href: "/products/resin-gelcoat", buyerLanguage: "vinyl ester resin · epoxy resin suppliers · polyester resin", note: "Composite-grade systems, cure controls and batch documentation.", priority: "core" },
    ],
  },
  {
    id: "core-sandwich",
    title: "Core & sandwich materials",
    stage: "Intermediates",
    summary: "Foam, honeycomb and panel cores for lightweight sandwich construction.",
    buyingFocus: "Density, shear and compression properties, resin uptake and forming limits",
    destinations: [
      { label: "Composite core materials", href: "/products/composite-core-materials", buyerLanguage: "structural foam · honeycomb core · balsa core", note: "Foam, balsa and honeycomb with application-specific evidence.", priority: "growth" },
      { label: "Fiberglass panels", href: "/products/fiberglass-panel", buyerLanguage: "fiberglass panels · sandwich panel manufacturers", note: "Industrial solid and sandwich panel systems.", priority: "growth" },
    ],
  },
  {
    id: "prepreg-compounds",
    title: "Prepregs & molding compounds",
    stage: "Intermediates",
    summary: "Ready-to-process intermediates for autoclave, compression and thermoplastic molding.",
    buyingFocus: "Resin content, flow, tack, cure cycle, storage life and batch acceptance",
    destinations: [
      { label: "Carbon fiber prepreg", href: "/products/carbon-fiber-prepreg", buyerLanguage: "carbon fiber prepreg · prepreg suppliers", note: "Grades, storage, cure and qualification evidence.", priority: "core" },
      { label: "SMC & BMC", href: "/products/smc-bmc", buyerLanguage: "SMC compound · sheet molding compound · BMC", note: "Compounds and repeat molded parts.", priority: "core" },
      { label: "Thermoplastic forming", href: "/manufacturing/thermoplastic-forming", buyerLanguage: "LFT · GMT · thermoplastic prepreg", note: "Process route for reinforced thermoplastic intermediates.", priority: "support" },
    ],
  },
  {
    id: "structural-stock",
    title: "Structural shapes, rods & panels",
    stage: "Semi-finished products",
    summary: "Standard and custom profiles, rods, tubes, sheets and panel stock.",
    buyingFocus: "Drawing, laminate direction, resin, tolerances and secondary fabrication",
    destinations: [
      { label: "Pultruded FRP profiles", href: "/products/pultruded-profiles", buyerLanguage: "FRP profiles · pultruded fiberglass · custom pultrusion", note: "Structural and custom constant-section profiles.", priority: "core" },
      { label: "Fiberglass sheet", href: "/products/fiberglass-sheet", buyerLanguage: "FRP sheets · fiberglass sheets · industrial panels", note: "Industrial sheet, laminate and panel specifications.", priority: "core" },
      { label: "Carbon pultrusion profiles", href: "/products/carbon-fiber-pultrusion-profiles", buyerLanguage: "carbon fiber tubes · rods · pultruded profiles", note: "Directional carbon profiles and machining controls.", priority: "growth" },
    ],
  },
  {
    id: "grating-access",
    title: "Grating, access & safety",
    stage: "Finished systems",
    summary: "Corrosion-resistant industrial flooring, access and guard systems.",
    buyingFocus: "Load, span, mesh, surface, resin, fire requirement and installation",
    destinations: [
      { label: "FRP grating", href: "/products/frp-grating", buyerLanguage: "FRP grating · fiberglass grating · GRP grating", note: "Canonical molded and pultruded grating comparison.", priority: "core" },
      { label: "Pultruded FRP grating", href: "/products/pultruded-frp-grating", buyerLanguage: "pultruded grating · load-bearing grating", note: "Process-specific subtype with bar geometry and load evidence.", priority: "growth" },
      { label: "FRP handrail", href: "/products/frp-handrail", buyerLanguage: "FRP handrail · GRP handrail", note: "Modular guardrail systems and fittings.", priority: "growth" },
      { label: "Industrial FRP ladders", href: "/products/frp-ladder", buyerLanguage: "FRP ladder · industrial fiberglass ladder", note: "Fixed access and cage systems, excluding household ladder intent.", priority: "growth" },
    ],
  },
  {
    id: "pipes-tanks-corrosion",
    title: "Pipes, tanks & corrosion systems",
    stage: "Finished systems",
    summary: "Fluid handling and corrosion equipment for water, chemical and energy service.",
    buyingFocus: "Media, concentration, pressure, temperature, liner, design code and inspection",
    destinations: [
      { label: "FRP, GRP & GRE pipe", href: "/products/frp-pipe", buyerLanguage: "FRP pipe · GRP pipe · fiberglass pipe", note: "Pressure, stiffness, liner and jointing evidence.", priority: "core" },
      { label: "FRP & GRP tanks", href: "/products/frp-tank", buyerLanguage: "FRP tanks · GRP tanks · fiberglass tanks", note: "Storage and process vessels by code and service.", priority: "core" },
      { label: "FRP corrosion equipment", href: "/products/frp-corrosion-equipment", buyerLanguage: "FRP duct · scrubber · pressure vessel", note: "Ducts, scrubbers and related process equipment.", priority: "growth" },
    ],
  },
  {
    id: "civil-infrastructure",
    title: "Civil & infrastructure reinforcement",
    stage: "Finished systems",
    summary: "Non-corroding reinforcement and utility components for durable infrastructure.",
    buyingFocus: "Fiber, bond profile, design basis, durability exposure and approval path",
    destinations: [
      { label: "GFRP & fiberglass rebar", href: "/products/frp-rebar", buyerLanguage: "fiberglass rebar · GFRP rebar · FRP rebar", note: "Bar geometry, tensile basis and bond evidence.", priority: "core" },
      { label: "Composite manhole covers", href: "/products/frp-manhole-cover", buyerLanguage: "FRP manhole cover · composite manhole cover", note: "Load class, frame, locking and surface requirements.", priority: "growth" },
    ],
  },
  {
    id: "electrical-utility",
    title: "Electrical, utility & enclosures",
    stage: "Finished systems",
    summary: "Insulating, nonmagnetic products for cable management, power and controls.",
    buyingFocus: "Dielectric performance, flame class, UV, load, ingress rating and interfaces",
    destinations: [
      { label: "FRP cable tray & ladder", href: "/products/frp-cable-tray", buyerLanguage: "FRP cable tray · fiberglass cable tray · cable ladder", note: "Load, span, fire and installation system evidence.", priority: "core" },
      { label: "FRP enclosures", href: "/products/frp-enclosure", buyerLanguage: "FRP enclosure · fiberglass enclosure", note: "Electrical cabinets and housings with declared performance.", priority: "growth" },
    ],
  },
  {
    id: "molded-fabricated",
    title: "Molded & fabricated components",
    stage: "Finished parts",
    summary: "Custom components sourced by process, geometry, volume and qualification route.",
    buyingFocus: "CAD, annual volume, tooling, inserts, tolerances, surface class and test plan",
    destinations: [
      { label: "SMC/BMC molded parts", href: "/products/smc-bmc", buyerLanguage: "SMC parts · BMC molding · composite covers", note: "Repeat compression-molded components.", priority: "core" },
      { label: "RTM manufacturers", href: "/manufacturing/rtm", buyerLanguage: "resin transfer molding · RTM parts", note: "Closed-mold process and factory controls.", priority: "support" },
      { label: "Custom fiberglass fabrication", href: "/manufacturing/hand-layup", buyerLanguage: "custom fiberglass fabrication · hand lay-up", note: "Large or complex lower-volume parts.", priority: "growth" },
    ],
  },
  {
    id: "tooling-consumables",
    title: "Tooling & process consumables",
    stage: "Production supply",
    summary: "Tooling and vacuum-process inputs tied to composite manufacturing routes.",
    buyingFocus: "Resin compatibility, cure temperature, vacuum level, release cycle and waste",
    destinations: [
      { label: "Vacuum infusion", href: "/manufacturing/vacuum-infusion", buyerLanguage: "infusion mesh · peel ply · vacuum bagging supplies", note: "Consumables in the context of an auditable process route.", priority: "support" },
      { label: "Prepreg & autoclave", href: "/manufacturing/prepreg-autoclave", buyerLanguage: "composite autoclave · prepreg process", note: "Tooling, bagging and cure-control requirements.", priority: "support" },
    ],
  },
  {
    id: "equipment-testing",
    title: "Manufacturing & testing equipment",
    stage: "Production supply",
    summary: "Processing, finishing and inspection equipment for composite production.",
    buyingFocus: "Part envelope, throughput, controls, utilities, service and acceptance trials",
    destinations: [
      { label: "Manufacturing process directory", href: "/manufacturing", buyerLanguage: "pultrusion machine · filament winding machine · autoclave", note: "Start from the production route before screening equipment suppliers.", priority: "support" },
      { label: "Engineering & QA services", href: "/services/frp-engineering-qa", buyerLanguage: "FRP engineering · testing · NDT · quality control", note: "Independent specification, inspection and evidence review.", priority: "growth" },
    ],
  },
  {
    id: "circular-materials",
    title: "Circular & bio-based materials",
    stage: "Circular supply",
    summary: "Recovered fibers and lower-impact composite inputs with controlled provenance.",
    buyingFocus: "Feedstock, recovery route, contamination, retained properties and lifecycle evidence",
    destinations: [
      { label: "Recycled composites", href: "/products/recycled-composites", buyerLanguage: "recycled carbon fiber · recycled fiberglass", note: "Recovered fiber and compounds with traceable performance boundaries.", priority: "growth" },
    ],
  },
] as const;

export type ProcessSearchCluster = {
  id: string;
  title: string;
  href: string;
  buyerLanguage: string;
  summary: string;
  controls: readonly string[];
  relatedProductHref: string;
  relatedProductLabel: string;
  routes: readonly { label: string; href: string }[];
};

export const PROCESS_SEARCH_CLUSTERS: readonly ProcessSearchCluster[] = [
  {
    id: "pultrusion",
    title: "Pultrusion & continuous profiles",
    href: "/manufacturing/pultrusion",
    buyerLanguage: "pultrusion · pultruded fiberglass · custom pultrusion",
    summary: "Continuous structural profiles and sheet made through controlled reinforcement placement, resin impregnation and heated tooling.",
    controls: ["Laminate architecture", "Die and line settings", "Straightness and machining"],
    relatedProductHref: "/products/pultruded-profiles",
    relatedProductLabel: "Pultruded FRP profiles",
    routes: [
      { label: "Pultrusion", href: "/manufacturing/pultrusion" },
      { label: "Continuous lamination", href: "/manufacturing/continuous-lamination" },
    ],
  },
  {
    id: "filament-winding",
    title: "Filament winding & braided preforms",
    href: "/manufacturing/filament-winding",
    buyerLanguage: "filament winding · wound FRP pipe · winding machine",
    summary: "Controlled fiber angle and tension for pipe, tanks, vessels and other axisymmetric structures.",
    controls: ["Winding program", "Corrosion barrier", "Cure and proof testing"],
    relatedProductHref: "/products/frp-pipe",
    relatedProductLabel: "FRP, GRP & GRE pipe",
    routes: [
      { label: "Filament winding", href: "/manufacturing/filament-winding" },
      { label: "Fiber braiding", href: "/manufacturing/fiber-braiding" },
    ],
  },
  {
    id: "compression-molding",
    title: "Compression molding · SMC/BMC",
    href: "/manufacturing/smc-molding",
    buyerLanguage: "SMC compound · sheet molding compound · BMC parts",
    summary: "Matched-tool molding for repeat components with integrated ribs, inserts, color and surface finish.",
    controls: ["Compound batch", "Charge pattern", "Temperature, pressure and cure"],
    relatedProductHref: "/products/smc-bmc",
    relatedProductLabel: "SMC & BMC compounds and parts",
    routes: [{ label: "SMC/BMC molding", href: "/manufacturing/smc-molding" }],
  },
  {
    id: "rtm",
    title: "Resin transfer molding · RTM",
    href: "/manufacturing/rtm",
    buyerLanguage: "resin transfer molding · RTM parts · closed mold",
    summary: "Closed-mold resin injection for controlled surfaces, laminate thickness and repeat medium-volume parts.",
    controls: ["Preform and tool closure", "Injection window", "Void and cure evidence"],
    relatedProductHref: "/products/frp-enclosure",
    relatedProductLabel: "FRP enclosures and molded parts",
    routes: [{ label: "RTM", href: "/manufacturing/rtm" }],
  },
  {
    id: "vacuum-infusion",
    title: "Vacuum infusion & bagging",
    href: "/manufacturing/vacuum-infusion",
    buyerLanguage: "vacuum infusion · VARTM · infusion mesh · peel ply",
    summary: "Vacuum-assisted consolidation and resin flow for large panels, blades, marine structures and controlled laminates.",
    controls: ["Leak test", "Flow strategy", "Resin mass and cure"],
    relatedProductHref: "/products/fiberglass-panel",
    relatedProductLabel: "Fiberglass and sandwich panels",
    routes: [
      { label: "Vacuum infusion", href: "/manufacturing/vacuum-infusion" },
      { label: "Vacuum bagging", href: "/manufacturing/vacuum-bagging" },
    ],
  },
  {
    id: "open-mold",
    title: "Hand lay-up & spray-up",
    href: "/manufacturing/hand-layup",
    buyerLanguage: "custom fiberglass fabrication · hand lay-up · spray-up",
    summary: "Open-mold fabrication for large, complex and lower-volume composite parts and corrosion equipment.",
    controls: ["Laminate sequence", "Glass content and cure", "Visual and dimensional acceptance"],
    relatedProductHref: "/products/frp-corrosion-equipment",
    relatedProductLabel: "FRP corrosion equipment",
    routes: [
      { label: "Hand lay-up", href: "/manufacturing/hand-layup" },
      { label: "Spray-up", href: "/manufacturing/spray-up" },
    ],
  },
  {
    id: "prepreg-autoclave",
    title: "Prepreg, autoclave & automated lay-up",
    href: "/manufacturing/prepreg-autoclave",
    buyerLanguage: "carbon fiber prepreg · composite autoclave · AFP",
    summary: "Controlled intermediate, lay-up and pressure cure routes for high-performance, low-void laminates.",
    controls: ["Cold-chain and out-time", "Lay-up traceability", "Cure cycle and NDT"],
    relatedProductHref: "/products/carbon-fiber-prepreg",
    relatedProductLabel: "Carbon fiber prepreg",
    routes: [
      { label: "Prepreg & autoclave", href: "/manufacturing/prepreg-autoclave" },
      { label: "Automated fiber placement", href: "/manufacturing/automated-fiber-placement" },
    ],
  },
  {
    id: "thermoplastic",
    title: "Thermoplastic forming & composite AM",
    href: "/manufacturing/thermoplastic-forming",
    buyerLanguage: "LFT · GMT · thermoplastic prepreg · composite 3D printing",
    summary: "Rapid forming and additive routes for reinforced thermoplastic sheets, organosheets, pellets and near-net-shape parts.",
    controls: ["Material conditioning", "Heat and pressure history", "Fiber orientation and weld lines"],
    relatedProductHref: "/products/recycled-composites",
    relatedProductLabel: "Circular and thermoplastic materials",
    routes: [
      { label: "Thermoplastic forming", href: "/manufacturing/thermoplastic-forming" },
      { label: "Composite 3D printing", href: "/manufacturing/composite-3d-printing" },
    ],
  },
] as const;

export const SEARCH_CATALOG_DESTINATION_COUNT = new Set(
  PRODUCT_SEARCH_CATEGORIES.flatMap((category) =>
    category.destinations.map((destination) => destination.href),
  ),
).size;
