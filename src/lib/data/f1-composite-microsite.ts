export const F1_COMPOSITES_BRAND_NAME = "F1 Composites";
export const F1_COMPOSITES_SUPPLIER_SLUG = "f1-composite";
export const F1_COMPOSITES_REVIEW_DATE = "2026-09-01";

export type F1CompositesLink = {
  label: string;
  href: string;
};

export type F1CompositesContentItem = {
  title: string;
  body: string;
};

export type F1CompositesEvidenceItem = F1CompositesContentItem & {
  status: "Document-verified" | "Supplier-reported" | "GetFRP editorial summary";
};

export type F1CompositesProductFamily = {
  slug: string;
  path: string;
  productLine: string;
  eyebrow: string;
  shortTitle: string;
  cardSummary: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: readonly string[];
  answer: string;
  selectionNote: string;
  evidenceStatus: string;
  evidenceSummary: string;
  productTypes: readonly F1CompositesContentItem[];
  fit: readonly F1CompositesContentItem[];
  evidenceBoundaries: readonly F1CompositesEvidenceItem[];
  rfqChecklist: readonly string[];
  primaryActionLabel: string;
  rfqProduct: string;
  internalCategory: F1CompositesLink;
  sources: readonly F1CompositesLink[];
};

export const F1_COMPOSITES_COMPANY_SEO = {
  title: "F1 Composites — Pultruded FRP Supplier | GetFRP",
  description:
    "Review F1 Composites structural profiles, grating, fiberglass windows and custom pultrusions, with sourcing guidance and evidence notes.",
  path: `/suppliers/${F1_COMPOSITES_SUPPLIER_SLUG}`,
} as const;

export const F1_COMPOSITES_COMPANY_PROFILE = {
  tagline: "Pultruded FRP profiles and engineered composite systems from China",
  summary:
    "According to its official website, F1 Composites is FengDu New Material's international export company. It supports overseas engineers, fabricators, distributors and contractors from product selection and drawing review through quality documentation, export coordination and delivery.",
  relationship:
    "F1 Composites is the public supplier and verification subject on GetFRP. FengDu New Material is identified as the manufacturing network behind the offer; each quotation should still name the order-specific seller, production entity and inspection-document issuer.",
  networkStatement:
    "F1 reports five production bases, 370 pultrusion lines and deliveries to more than 30 countries. These are supplier-reported network figures, not independently audited GetFRP capacity data.",
  capabilities: [
    {
      title: "Drawing and selection review",
      body: "Screen a catalog section or proposed cross-section against interfaces, service conditions and the buyer's stated design basis.",
    },
    {
      title: "Tooling and first articles",
      body: "Coordinate custom dies, trial profiles and an agreed first-article approval route before repeat production.",
    },
    {
      title: "Quality documentation",
      body: "Define dimensional records, selected material tests, traceability and order-specific inspection documents.",
    },
    {
      title: "Export delivery",
      body: "Support secondary fabrication, labeling, packing, export paperwork and international logistics under agreed terms.",
    },
  ],
  evidence: [
    {
      status: "Document-verified",
      title: "PHI Component-ID 2491wi03",
      body: "The certificate records Uw 0.78 W/(m²·K), class phB for a cool-temperate climate, and validity through 31 December 2026 for its named 90-Series reference configuration. It names Chongqing Xianju New Material Co., Ltd. as manufacturer.",
    },
    {
      status: "Document-verified",
      title: "Intertek reports -001 and -002",
      body: "The reports name Fengdu New Material (Yancheng) Co., Ltd. as applicant and manufacturer. They cover one 80-Series turn-and-tilt window sample and one 140-Series lift-sliding door sample, not every size or system.",
    },
    {
      status: "Supplier-reported",
      title: "Published quality framework",
      body: "F1 refers to ISO 9001-controlled production and EN 13706 and ASTM D3917 for relevant profiles. Buyers should request current documents for the exact entity, product and revision.",
    },
  ] satisfies readonly F1CompositesEvidenceItem[],
  projects: [
    {
      status: "Supplier-reported",
      title: "Qinling Station polar research project",
      body: "F1 reports supplying 90-Series GFRP windows for China's Qinling Station in 2024. The delivery and stated polar environment remain supplier-reported project evidence; the PHI certificate has its own narrower phB / cool-temperate scope.",
    },
    {
      status: "Supplier-reported",
      title: "F1 factory access staircase",
      body: "F1 reports combining structural profiles, grating and handrail components at its own Chongqing facility. This demonstrates system coordination but is not an independent customer endorsement.",
    },
  ] satisfies readonly F1CompositesEvidenceItem[],
  contact: {
    email: "inquiry@f1composite.com",
    phone: "+86 138 8333 8993",
    location: "Chongqing, China",
    website: "https://www.f1composite.com",
  },
  sources: [
    { label: "Company profile", href: "https://www.f1composite.com/about" },
    { label: "Product hub", href: "https://www.f1composite.com/pultruded-frp-profiles" },
    { label: "Product lines", href: "https://www.f1composite.com/products/product-lines" },
    { label: "Quality and testing", href: "https://www.f1composite.com/technology/quality-testing" },
    { label: "PHI certificate", href: "https://www.f1composite.com/downloads/phi-certificate-gfrp-90-series-2491wi03.pdf" },
    { label: "Intertek report -001", href: "https://www.f1composite.com/downloads/intertek-report-240821010SHF-001-turn-tilt-window.pdf" },
    { label: "Intertek report -002", href: "https://www.f1composite.com/downloads/intertek-report-240821010SHF-002-lift-sliding-door.pdf" },
    { label: "Factory staircase case", href: "https://www.f1composite.com/case-studies/factory-access-staircase" },
    { label: "Contact", href: "https://www.f1composite.com/contact" },
  ] satisfies readonly F1CompositesLink[],
} as const;

export const F1_COMPOSITES_PRODUCT_FAMILIES = [
  {
    slug: "pultruded-frp-structural-profiles",
    path: `/suppliers/${F1_COMPOSITES_SUPPLIER_SLUG}/pultruded-frp-structural-profiles`,
    productLine: "F1-STRUX",
    eyebrow: "F1-STRUX · STANDARD PULTRUDED SHAPES",
    shortTitle: "Structural profiles",
    cardSummary:
      "Standard beams, channels, angles, tubes, bars and rods, summarized with selection limits and RFQ inputs for engineered sourcing.",
    title: "F1 Composites Pultruded FRP Structural Profiles",
    metaTitle: "F1 Composites Pultruded FRP Structural Profiles | GetFRP",
    metaDescription:
      "Explore F1 Composites I-beams, channels, angles, tubes, bars and rods, plus selection limits, engineering notes and RFQ inputs.",
    keywords: ["F1 Composites", "pultruded FRP profiles", "fiberglass structural shapes"],
    answer:
      "F1-STRUX is F1 Composites' published range of standard pultruded fiberglass structural shapes, including I-beams, channels, angles, tubes, flat bars and rods. Buyers can start from a catalog geometry, then confirm the laminate, dimensions, fabrication and documentation for the project.",
    selectionNote:
      "F1 lists 114 standard profile records. Use them for geometry screening only: the current drawing, section properties, resin grade, tolerance, fabrication and production status must be confirmed in the quotation.",
    evidenceStatus: "Supplier-reported",
    evidenceSummary:
      "The range and nominal values are summarized from F1's official catalog and design resources. The quoted laminate, not the shape name alone, controls final properties and suitability.",
    productTypes: [
      { title: "Beams and channels", body: "Published I-beams extend to about 305 mm depth; channels span compact sections through larger industrial geometries." },
      { title: "Angles and hollow profiles", body: "Equal and unequal angles sit alongside square, rectangular and round hollow sections for framing and support work." },
      { title: "Bars and rods", body: "Flat bars and solid round rods cover secondary members, spacers, supports and application-specific fabrication." },
    ],
    fit: [
      { title: "Typical fit", body: "Industrial platforms, walkway framing, cable support, cooling towers, coastal structures, equipment skids and selected solar or infrastructure assemblies." },
      { title: "Engineering boundary", body: "Do not substitute FRP for steel by outside dimensions alone. Deflection, transverse behavior, local stability, sustained load and connection details can govern." },
    ],
    evidenceBoundaries: [
      { status: "Supplier-reported", title: "Representative laminate values", body: "F1's official technical-data page publishes 23 GPa longitudinal tensile modulus, 240 MPa longitudinal tensile and flexural strength, and 30 MPa interlaminar shear for a stated E-glass/isophthalic-polyester laminate." },
      { status: "Supplier-reported", title: "Standards references", body: "F1 compares the stated laminate with EN 13706 E23 and references ASTM D3917. Confirm the test specimen, method, grade, entity and revision for the offered profile." },
    ],
    rfqChecklist: [
      "Catalog profile or controlled drawing, cut length, quantity and machining",
      "Spans, load cases, deflection limits and connection concept",
      "Temperature, chemicals, UV exposure, resin, fire and color requirements",
      "Applicable standards, CAD and inspection records, destination, Incoterm and date",
    ],
    primaryActionLabel: "Request a structural profile quote",
    rfqProduct: "F1 Composites pultruded FRP structural profiles",
    internalCategory: { label: "Compare pultruded FRP profile suppliers", href: "/products/pultruded-profiles" },
    sources: [
      { label: "Structural-shape range", href: "https://www.f1composite.com/products/fiberglass-structural-shapes" },
      { label: "Technical data", href: "https://www.f1composite.com/resources/technical-data" },
      { label: "Quality and testing", href: "https://www.f1composite.com/technology/quality-testing" },
      { label: "FRP profile design manual", href: "https://www.f1composite.com/downloads/f1composite-frp-profile-design-manual-2026.pdf" },
    ],
  },
  {
    slug: "frp-grating-access-systems",
    path: `/suppliers/${F1_COMPOSITES_SUPPLIER_SLUG}/frp-grating-access-systems`,
    productLine: "F1-GRID",
    eyebrow: "F1-GRID · INDUSTRIAL FLOORING AND ACCESS",
    shortTitle: "Grating and access",
    cardSummary:
      "Pultruded and molded grating, deck panels, stairs and access components, organized by construction, support and application requirements.",
    title: "F1 Composites FRP Grating and Access Systems",
    metaTitle: "F1 Composites FRP Grating & Access Systems | GetFRP",
    metaDescription:
      "Compare F1 Composites pultruded and molded grating, deck panels, stair products and access components for industrial projects.",
    keywords: ["F1 Composites", "FRP grating", "fiberglass access systems"],
    answer:
      "F1-GRID is GetFRP's buyer-oriented grouping for F1 Composites pultruded grating, molded grating, closed deck panels, stair products and related access components. They can form one package, but their span behavior, drainage and support requirements differ.",
    selectionNote:
      "Pultruded grating carries primarily in the bearing-bar direction, molded grating distributes load in two directions, and closed deck panels create a substantially closed surface. Select the construction before comparing panel prices.",
    evidenceStatus: "Supplier-reported / GetFRP editorial grouping",
    evidenceSummary:
      "Published dimensions and options support initial selection. Final span, load, deflection, slip resistance, resin, fire performance and fasteners require product- and project-specific confirmation.",
    productTypes: [
      { title: "Pultruded grating", body: "T-bar pedestrian and I-bar industrial constructions, plus deeper and high-open-area options described by the supplier." },
      { title: "Molded grating and deck", body: "Square, mini-mesh and rectangular molded panels, together with more continuous closed-deck surfaces." },
      { title: "Stairs and access components", body: "Tread covers, complete grating treads, handrail members, posts, toe boards, ladders and stainless-steel clips." },
    ],
    fit: [
      { title: "Typical fit", body: "Chemical and water-treatment plants, cooling towers, coastal or offshore access, electrical substations and industrial maintenance platforms." },
      { title: "Selection boundary", body: "Pedestrian access, concentrated maintenance loads, trolley traffic, accessible routes, escape paths and stairways impose different design requirements." },
    ],
    evidenceBoundaries: [
      { status: "Supplier-reported", title: "Published range", body: "F1 publishes multiple pultruded and molded constructions, depths, mesh patterns, open areas and concave or grit surface options." },
      { status: "GetFRP editorial summary", title: "Project evidence required", body: "GetFRP has not confirmed one third-party report that proves load, slip, chemical or fire performance for the entire range. Tie approval to the exact construction and support layout." },
    ],
    rfqChecklist: [
      "Grating type, clear span, bearing direction, loads and deflection limit",
      "Mesh or open area, drainage, panel layout, cut-outs and supports",
      "Surface, slip requirement, resin, fire, chemical, temperature and UV exposure",
      "Clip geometry, tread or handrail scope, quantity, documents, destination and date",
    ],
    primaryActionLabel: "Request a grating or access-system quote",
    rfqProduct: "F1 Composites FRP grating and access systems",
    internalCategory: { label: "Compare FRP grating suppliers", href: "/products/frp-grating" },
    sources: [
      { label: "Pultruded grating", href: "https://www.f1composite.com/products/frp-gratings" },
      { label: "Molded grating", href: "https://www.f1composite.com/products/molded-frp-grating" },
      { label: "Deck panels", href: "https://www.f1composite.com/products/frp-deck-panels" },
      { label: "Stair treads", href: "https://www.f1composite.com/products/frp-stair-treads" },
      { label: "Handrail systems", href: "https://www.f1composite.com/products/frp-handrail-systems" },
      { label: "Ladder systems", href: "https://www.f1composite.com/products/frp-ladders" },
    ],
  },
  {
    slug: "fiberglass-window-door-systems",
    path: `/suppliers/${F1_COMPOSITES_SUPPLIER_SLUG}/fiberglass-window-door-systems`,
    productLine: "F1-THERM",
    eyebrow: "F1-THERM · GFRP FENESTRATION SYSTEMS",
    shortTitle: "Windows and doors",
    cardSummary:
      "GFRP window and door series for finished-unit or profile-length supply, with configuration-specific thermal and test evidence.",
    title: "F1 Composites Fiberglass Window and Door Systems",
    metaTitle: "F1 Composites Fiberglass Windows & Doors | GetFRP",
    metaDescription:
      "Review F1 Composites GFRP window and door systems, supply formats, published test evidence and the information needed for an RFQ.",
    keywords: ["F1 Composites", "fiberglass windows", "GFRP window frames"],
    answer:
      "F1-THERM is a family of pultruded GFRP frame systems, not one universal profile. F1 Composites publishes 65, 70, 80 and 90 Series window systems, a 90 Series swing entrance-door system and a 140 Series lift-and-slide door system. Supply can be finished units or unassembled profile lengths for local fabrication.",
    selectionNote:
      "Finished units can combine frames, glazing, gaskets and hardware under one configuration. With profile-only supply, the downstream fabricator controls corner joints, drainage, glazing, hardware integration and finished-unit performance.",
    evidenceStatus: "Mixed: supplier-reported range and configuration-specific documents",
    evidenceSummary:
      "The PHI and Intertek documents support named configurations and samples only. They do not certify every F1-THERM series, size, glazing build-up or fabrication route.",
    productTypes: [
      { title: "65–90 window series", body: "Published platforms include fixed and tilt-and-turn windows across the 65, 70, 80 and 90 Series, with casement and awning configurations listed for the 65, 70 and 80 Series." },
      { title: "Door systems", body: "A 90 Series swing entrance-door system and a larger 140 Series lift-and-slide platform, each subject to the quoted size, glazing and hardware." },
      { title: "Two supply formats", body: "Factory-finished glazed units or pultruded frame profile lengths for an experienced local window fabricator." },
    ],
    fit: [
      { title: "Typical fit", body: "Passive House and net-zero projects, cold climates, coastal buildings and envelopes where thermal bridges, condensation or corrosion matter." },
      { title: "Selection boundary", body: "Start with whole-window thermal, air, water and structural requirements—not a generic conductivity claim for the frame material." },
    ],
    evidenceBoundaries: [
      { status: "Document-verified", title: "PHI Component-ID 2491wi03", body: "The named 90-Series reference records Uw 0.78 W/(m²·K), class phB for a cool-temperate climate, valid through 31 December 2026. It names Chongqing Xianju New Material Co., Ltd. as manufacturer." },
      { status: "Document-verified", title: "Intertek sample reports", body: "Both reports name Fengdu New Material (Yancheng) Co., Ltd. as applicant and manufacturer. Report -001 covers one 1200 × 1800 mm 80-Series turn-and-tilt window; report -002 covers one 3000 × 2400 mm 140-Series lift-sliding door. Neither is family-wide certification." },
      { status: "Supplier-reported", title: "3-Star English summary", body: "The downloadable English file describes covered series and a date through 4 June 2030 but calls itself an unofficial summary. Regulatory use requires the original Chinese certificate and scope check." },
    ],
    rfqChecklist: [
      "Opening schedule, sizes, opening modes, quantities and project climate",
      "Required Uw/Uf, air, water, wind, acoustic, security and code criteria",
      "Glazing, spacer, hardware, finish, color and finished-unit or profile-length supply",
      "Installation responsibility, exact evidence scope, packing, destination and date",
    ],
    primaryActionLabel: "Request a window-system review",
    rfqProduct: "F1 Composites fiberglass window and door systems",
    internalCategory: { label: "Compare pultruded FRP profile suppliers", href: "/products/pultruded-profiles" },
    sources: [
      { label: "Window systems", href: "https://www.f1composite.com/products/frp-window-frames" },
      { label: "Window and door catalog", href: "https://www.f1composite.com/downloads/f1composite-frp-window-door-catalog.pdf" },
      { label: "PHI certificate", href: "https://www.f1composite.com/downloads/phi-certificate-gfrp-90-series-2491wi03.pdf" },
      { label: "Intertek report -001", href: "https://www.f1composite.com/downloads/intertek-report-240821010SHF-001-turn-tilt-window.pdf" },
      { label: "Intertek report -002", href: "https://www.f1composite.com/downloads/intertek-report-240821010SHF-002-lift-sliding-door.pdf" },
      { label: "3-Star English summary", href: "https://www.f1composite.com/downloads/f1composite-3star-green-building-cert-frp-windows-2025.pdf" },
    ],
  },
  {
    slug: "custom-pultruded-profiles",
    path: `/suppliers/${F1_COMPOSITES_SUPPLIER_SLUG}/custom-pultruded-profiles`,
    productLine: "F1-FORM",
    eyebrow: "F1-FORM · ENGINEER-TO-ORDER PULTRUSION",
    shortTitle: "Custom profiles",
    cardSummary:
      "Engineer-to-order constant cross-sections, summarized around feasibility, material architecture, tooling, first articles and controlled production.",
    title: "F1 Composites Custom Pultruded Profiles",
    metaTitle: "F1 Composites Custom Pultruded Profiles | GetFRP",
    metaDescription:
      "Assess F1 Composites custom-pultrusion capabilities, development steps, engineering boundaries and drawing inputs for export RFQs.",
    keywords: ["F1 Composites", "custom pultrusion", "custom FRP profiles"],
    answer:
      "F1-FORM is F1 Composites' engineer-to-order route for constant-cross-section parts that do not match a standard catalog shape. Programs move from application and geometry review through material architecture, tooling, trials, approval and repeat production.",
    selectionNote:
      "The supplier describes glass, carbon, basalt, aramid and hybrid reinforcement with several thermoset resin systems. Feasibility, properties, tolerance and economics remain geometry-, material- and volume-specific.",
    evidenceStatus: "Supplier-reported capability envelope",
    evidenceSummary:
      "Published figures are screening guides, not a guarantee that every submitted drawing is pultrudable. The controlled drawing, material specification, first-article plan and purchase order define the production requirement.",
    productTypes: [
      { title: "Published envelope", body: "F1 states a maximum section envelope near 600 × 300 mm, walls from 1.5 to 30 mm, standard lengths to 14 m and typical tolerance of ±0.25 mm." },
      { title: "Material architecture", body: "Reinforcement, resin, orientation, veil, color and surface finish are selected around function and process feasibility." },
      { title: "Development route", body: "Drawing review, design for pultrusion, tooling, trial material, first-article approval and controlled repeat production." },
    ],
    fit: [
      { title: "Typical fit", body: "Repeat-volume building, window, solar, transport, battery, electrical and industrial parts where corrosion, insulation, thermal performance or low mass justify tooling." },
      { title: "Process boundary", body: "Short, highly variable, deeply three-dimensional or heavily cross-loaded parts may suit another process. Connections, cut-outs and machining need early review." },
    ],
    evidenceBoundaries: [
      { status: "Supplier-reported", title: "Capability, not a combined maximum", body: "Section envelope, wall, length and tolerance figures cannot automatically be combined. Die balance, corners, wall transitions, curing and straightness can reduce the practical limit." },
      { status: "GetFRP editorial summary", title: "Order-specific validation", body: "Define first-article inspection, agreed test methods, sampling, acceptance values, traceability and change control against the production drawing and laminate." },
    ],
    rfqChecklist: [
      "2D/3D files, critical dimensions, tolerances, length, straightness and twist",
      "Loads, fiber directions, joints, holes, inserts and secondary machining",
      "Chemical, temperature, UV, fire or electrical exposure and preferred materials",
      "Prototype and annual volume, tooling ownership, tests, traceability, packing and date",
    ],
    primaryActionLabel: "Submit a custom profile drawing",
    rfqProduct: "F1 Composites custom pultruded profile",
    internalCategory: { label: "Compare pultruded FRP profile suppliers", href: "/products/pultruded-profiles" },
    sources: [
      { label: "Custom pultrusions", href: "https://www.f1composite.com/products/custom-pultruded-profiles" },
      { label: "Quality and testing", href: "https://www.f1composite.com/technology/quality-testing" },
      { label: "Design guides", href: "https://www.f1composite.com/resources/design-guides" },
      { label: "Document library", href: "https://www.f1composite.com/resources/downloads" },
    ],
  },
] as const satisfies readonly F1CompositesProductFamily[];

export const F1_COMPOSITES_PRODUCT_FAMILY_SLUGS: readonly string[] =
  F1_COMPOSITES_PRODUCT_FAMILIES.map((family) => family.slug);

export function getF1CompositesProductFamily(
  slug: string,
): F1CompositesProductFamily | undefined {
  return F1_COMPOSITES_PRODUCT_FAMILIES.find((family) => family.slug === slug);
}
