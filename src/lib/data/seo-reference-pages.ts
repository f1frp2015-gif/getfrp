export type SeoReferenceGroup = "compare" | "technical" | "guides";

export type SeoReferencePage = {
  group: SeoReferenceGroup;
  slug: string;
  shortTitle: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  intro: string;
  reviewedDate: string;
  highlights: Array<{ label: string; value: string }>;
  table?: {
    caption: string;
    headers: string[];
    rows: string[][];
  };
  sections: Array<{
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }>;
  faqs: Array<{ question: string; answer: string }>;
  related: Array<{ label: string; href: string }>;
  sources: Array<{ label: string; href: string }>;
};

export const SEO_REFERENCE_GROUPS: Record<
  SeoReferenceGroup,
  { label: string; title: string; description: string }
> = {
  compare: {
    label: "Material comparisons",
    title: "FRP material comparisons for industrial buyers",
    description:
      "Compare fiberglass-reinforced polymer with steel, aluminum and traditional construction materials by stiffness, corrosion exposure, installation, maintenance and specification risk.",
  },
  technical: {
    label: "Technical reference",
    title: "FRP properties, density and technical data",
    description:
      "Engineering reference pages for screening FRP products before requesting a manufacturer datasheet, test report or project-specific design value.",
  },
  guides: {
    label: "Buyer guides",
    title: "FRP selection and quality-control guides",
    description:
      "Practical guides that move an overseas buyer from material definition to a controlled RFQ, sample, inspection plan and supplier shortlist.",
  },
};

const ASTM_COMPOSITES = {
  label: "ASTM composite standards catalog",
  href: "https://store.astm.org/products-services/standards-and-publications/standards/composite-standards.html",
};

const STRONGWELL_MANUAL = {
  label: "Strongwell structural FRP design manuals",
  href: "https://www.strongwell.com/manual-list/",
};

const BEDFORD_GUIDE = {
  label: "Bedford FRP structural shapes design guide",
  href: "https://bedfordreinforced.com/wp-content/uploads/2021/08/Bedford_Design_Guide.pdf",
};

const BEDFORD_PROPERTIES = {
  label: "Bedford published pultruded profile properties",
  href: "https://bedfordreinforced.com/wp-content/uploads/2017/07/Bedford_PROForms-v05042020.pdf",
};

const ALUMINUM_DATA = {
  label: "Aluminum Association standards and material data",
  href: "https://www.aluminum.org/standards",
};

export const SEO_REFERENCE_PAGES: SeoReferencePage[] = [
  {
    group: "compare",
    slug: "frp-vs-steel",
    shortTitle: "FRP vs steel",
    title: "FRP vs steel: selection guide for industrial structures",
    metaTitle: "FRP vs Steel — Industrial Material Comparison | getfrp",
    metaDescription:
      "Compare FRP and steel by stiffness, weight, corrosion, fire, fabrication, maintenance and lifecycle cost before specifying grating, profiles or structures.",
    eyebrow: "FRP VS STEEL",
    intro:
      "FRP is usually selected over steel when corrosion exposure, electrical isolation, low handling weight or reduced maintenance controls the project. Steel remains the stronger default when stiffness, ductility, high-temperature performance, familiar connections or a mature design code controls the decision.",
    reviewedDate: "2026-08-01",
    highlights: [
      { label: "FRP advantage", value: "Corrosion + low weight" },
      { label: "Steel advantage", value: "Stiffness + ductility" },
      { label: "Critical check", value: "Deflection often governs FRP" },
      { label: "RFQ input", value: "Loads + chemistry + fire class" },
    ],
    table: {
      caption:
        "Screening comparison only. Final values depend on laminate, fiber architecture, resin, steel grade, section geometry and governing code.",
      headers: ["Decision factor", "Pultruded GFRP", "Structural steel", "Buyer implication"],
      rows: [
        ["Weight", "Low density; commonly handled without heavy lifting", "High density; lifting and transport often govern installation", "Compare installed assembly weight, not price per kilogram"],
        ["Elastic stiffness", "Directional and much lower than steel", "High and broadly isotropic", "Check service deflection and vibration before strength"],
        ["Corrosion", "No rust; resin must match the chemical and temperature", "Needs material/coating strategy in aggressive service", "State the complete exposure, cleaning chemicals and design life"],
        ["Connections", "Bearing, shear and local crushing require FRP-specific details", "Bolted and welded design practice is mature", "Do not copy a steel connection detail into FRP"],
        ["Fire and heat", "Resin-dependent; smoke, flame spread and retained properties need evidence", "Non-combustible, but strength falls at elevated temperature", "Specify the exact fire test and service temperature"],
        ["Maintenance", "Often lower where corrosion drives repainting or replacement", "Predictable but coating inspection may be recurring", "Model inspection, access and downtime across the service life"],
      ],
    },
    sections: [
      {
        heading: "Where FRP usually wins",
        paragraphs: [
          "FRP earns its place in wastewater plants, chemical processing, marine access systems, cooling towers and electrically sensitive sites because it does not rust and can be supplied as lightweight grating, handrail and structural profiles. The commercial advantage is often installation and avoided coating work rather than a lower raw-material price.",
          "The resin system is part of the structural decision. General-purpose polyester, vinyl ester and specialty fire-retardant systems do not provide the same chemical or temperature resistance. A useful RFQ names each chemical, concentration, operating and upset temperature, exposure frequency, UV condition and cleaning method.",
        ],
        bullets: [
          "Corrosive wet service where steel coating maintenance is difficult",
          "Retrofit work with restricted crane or access capacity",
          "Non-conductive platforms, ladders and cable-management systems",
          "Projects where prefabricated modules reduce shutdown time",
        ],
      },
      {
        heading: "Where steel remains the safer starting point",
        paragraphs: [
          "Steel is normally the more efficient choice for long spans, highly stiffness-sensitive frames, plastic redistribution, impact, high-temperature exposure and details that depend on welding. Pultruded FRP is anisotropic: longitudinal and transverse properties differ, and shear deformation can materially add to beam deflection.",
          "A supplier coupon value is not automatically a structural design value. Ask whether the number is an average, minimum, characteristic value or code-reduced design value, and whether it represents a coupon, full section, joint or finished assembly.",
        ],
      },
      {
        heading: "How to request comparable quotations",
        paragraphs: [
          "Issue one controlled scope with geometry, supports, loads and combinations, maximum deflection, connection assumptions, environment, fire test, UV exposure, finish, inspection and destination. Ask both alternatives to price the complete installed function. Comparing a coated steel beam with an unconnected FRP profile is not a useful commercial comparison.",
        ],
        bullets: [
          "Request full-section and connection evidence where the assembly governs",
          "Separate initial supply, installation, coating and planned maintenance",
          "Require drawing revision control and a bill of materials",
          "Confirm which values the engineer may use and the safety factors already applied",
        ],
      },
    ],
    faqs: [
      {
        question: "Is FRP stronger than steel?",
        answer:
          "The question needs a direction and a design limit. Some unidirectional FRP coupons have high tensile strength relative to weight, but pultruded structural profiles have much lower elastic stiffness than steel and are anisotropic. In many FRP beams, deflection or connection behavior governs before coupon tensile strength.",
      },
      {
        question: "Is FRP cheaper than steel?",
        answer:
          "FRP is often more expensive as purchased material. It can be lower in installed or lifecycle cost when lighter handling, prefabrication, electrical isolation and avoided corrosion coating or replacement are valuable. Use one service-life and installation scope for both alternatives.",
      },
      {
        question: "Can FRP use the same bolts and connection details as steel?",
        answer:
          "Standard bolts may be usable, but the joint must be designed for FRP bearing, net-section, shear-out, washer area and local crushing. Hole clearance, edge distance, torque and environmental compatibility require an FRP-specific detail.",
      },
    ],
    related: [
      { label: "Pultruded FRP profiles from China", href: "/products/pultruded-profiles" },
      { label: "FRP properties reference", href: "/technical/frp-properties" },
      { label: "Submit a material-comparison RFQ", href: "/rfq" },
    ],
    sources: [STRONGWELL_MANUAL, BEDFORD_GUIDE, ASTM_COMPOSITES],
  },
  {
    group: "compare",
    slug: "frp-vs-aluminum",
    shortTitle: "FRP vs aluminum",
    title: "FRP vs aluminum: corrosion, stiffness and fabrication",
    metaTitle: "FRP vs Aluminum — Engineering Comparison | getfrp",
    metaDescription:
      "Compare FRP and aluminum for industrial profiles, platforms and enclosures by density, stiffness, corrosion, conductivity, joints, finish and lifecycle cost.",
    eyebrow: "FRP VS ALUMINUM",
    intro:
      "FRP and aluminum are both lightweight alternatives to steel, but they solve different problems. Aluminum offers higher, predictable stiffness and mature extrusion practice; FRP offers electrical isolation, low thermal conductivity and corrosion performance that can be tailored through fiber and resin selection.",
    reviewedDate: "2026-08-01",
    highlights: [
      { label: "FRP advantage", value: "Isolation + tailored chemistry" },
      { label: "Aluminum advantage", value: "Stiffness + extrusion precision" },
      { label: "Density", value: "Both much lighter than steel" },
      { label: "Critical check", value: "Galvanic + fire environment" },
    ],
    table: {
      caption:
        "Typical screening ranges are not specifications. Confirm the exact FRP laminate and aluminum alloy/temper on supplier documents.",
      headers: ["Decision factor", "Pultruded GFRP", "Aluminum extrusion", "Buyer implication"],
      rows: [
        ["Typical density", "About 1.7-2.0 g/cm³", "About 2.66-2.84 g/cm³ by alloy", "FRP can be lighter by volume, but section sizes may differ"],
        ["Elastic modulus", "Directional; often roughly 17-28 GPa for profiles", "Typically about 69-73 GPa", "Aluminum usually controls deflection with a smaller section"],
        ["Electrical behavior", "Normally insulating unless conductive additives/fibers are used", "Conductive", "FRP can simplify isolation around power and rail systems"],
        ["Thermal behavior", "Low conductivity; resin-dependent expansion", "High conductivity with well-characterized alloy behavior", "Check thermal bridging and differential movement"],
        ["Corrosion", "Resin and veil can be selected for the environment", "Good in many atmospheres; pitting/galvanic risks remain", "Name salts, pH, temperature and contacting metals"],
        ["Fabrication", "Cut/drill/bond; dust control and edge sealing may apply", "Extrude, machine, weld and mechanically fasten", "Compare tooling, tolerances and secondary operations"],
      ],
    },
    sections: [
      {
        heading: "The decision is usually stiffness versus isolation",
        paragraphs: [
          "Aluminum's modulus is substantially higher than a typical pultruded GFRP profile. If envelope size is limited or deflection is strict, aluminum often reaches the target with a more compact section. FRP may still win when non-conductivity, thermal isolation or chemical resistance justifies a deeper section.",
          "Do not compare density alone. A lower-density material can require more section depth to meet deflection, local buckling or connection limits. Compare the mass and cost of the qualified assembly, including joints and supports.",
        ],
      },
      {
        heading: "Corrosion and mixed-material details",
        paragraphs: [
          "Aluminum performs well in many outdoor applications, but alloy, temper, finish, chloride exposure, alkaline contact and galvanic couples matter. FRP avoids metallic galvanic corrosion, yet the wrong resin can soften, crack or lose properties in a chemical/temperature combination.",
          "If carbon fiber is present, electrically isolate it from aluminum unless the engineer has evaluated the galvanic couple. Fasteners, inserts and bonded plates should be included in the environmental review rather than treated as incidental hardware.",
        ],
      },
      {
        heading: "RFQ checklist for a fair comparison",
        paragraphs: [
          "Provide the extrusion/profile drawing, support conditions, load cases, deflection, impact, temperature, fire requirement, electrical requirement, exposure, finish, tolerances, machining and annual volume. Ask for a marked-up compliance matrix and the source of every design value.",
        ],
        bullets: [
          "Identify aluminum alloy and temper, not only 'aluminum'",
          "Identify FRP resin, reinforcement architecture and surfacing veil",
          "Define dimensional tolerances and which surfaces are cosmetic",
          "Price tooling, prototypes, tests and recurring production separately",
        ],
      },
    ],
    faqs: [
      {
        question: "Is FRP lighter than aluminum?",
        answer:
          "Typical GFRP density is lower than common aluminum alloys, but a qualified FRP member may use a larger section because its modulus is lower. Compare the final assembly weight after strength, deflection, connections and durability are satisfied.",
      },
      {
        question: "Does FRP corrode like aluminum?",
        answer:
          "FRP does not undergo metallic corrosion, but it can degrade if the resin, veil or joint material is incompatible with the chemical and temperature exposure. Aluminum has alloy-, finish- and environment-specific pitting and galvanic risks. Both require a defined exposure case.",
      },
      {
        question: "Which material is better for electrical installations?",
        answer:
          "Glass-fiber FRP is often chosen for electrical isolation and low conductivity. Aluminum is conductive. Confirm that the complete FRP formulation, surface and fasteners meet the project's electrical, tracking, grounding and fire requirements.",
      },
    ],
    related: [
      { label: "FRP vs steel", href: "/compare/frp-vs-steel" },
      { label: "FRP density reference", href: "/technical/frp-density" },
      { label: "Pultruded profile suppliers", href: "/suppliers/pultruded-profiles" },
    ],
    sources: [BEDFORD_PROPERTIES, STRONGWELL_MANUAL, ALUMINUM_DATA],
  },
  {
    group: "compare",
    slug: "frp-vs-traditional-materials",
    shortTitle: "FRP vs traditional materials",
    title: "FRP vs traditional materials: a procurement decision matrix",
    metaTitle: "FRP vs Traditional Materials — Buyer Matrix | getfrp",
    metaDescription:
      "Screen FRP against steel, aluminum, stainless steel, wood and concrete by corrosion, stiffness, weight, fire, fabrication, maintenance and supply risk.",
    eyebrow: "MATERIAL SELECTION MATRIX",
    intro:
      "There is no universally best structural material. FRP creates value when several requirements—corrosion, low weight, electrical isolation, low maintenance or repeatable profiles—occur together. This matrix helps a buyer identify the evidence needed before requesting equivalent quotations.",
    reviewedDate: "2026-08-01",
    highlights: [
      { label: "Use this page for", value: "Concept screening" },
      { label: "Do not use it for", value: "Final structural design" },
      { label: "Best next step", value: "Controlled compliance matrix" },
      { label: "Compare", value: "Installed function + lifecycle" },
    ],
    table: {
      caption: "Qualitative screening matrix; project conditions and grades control the final decision.",
      headers: ["Requirement", "FRP", "Steel / stainless", "Aluminum", "Wood / concrete"],
      rows: [
        ["Aggressive corrosion", "Strong when resin is correctly selected", "Steel needs protection; stainless grade matters", "Environment and galvanic couples matter", "Concrete chemistry and wood treatment matter"],
        ["High stiffness / compact depth", "Usually less efficient", "Strong", "Moderate to strong", "Concrete strong in compression; wood grade-dependent"],
        ["Low handling weight", "Strong", "Weak", "Strong", "Wood moderate; concrete weak"],
        ["Electrical isolation", "Strong for glass-fiber systems", "Weak", "Weak", "Often moderate, moisture-dependent"],
        ["High-temperature / fire", "System-specific evidence essential", "Usually strongest starting point", "Alloy strength changes with heat", "Material and assembly-specific"],
        ["Field modification", "Possible with controls and correct details", "Mature cutting/welding practice", "Mature machining/extrusion practice", "Familiar trades, variable precision"],
      ],
    },
    sections: [
      {
        heading: "Start with failure modes, not material labels",
        paragraphs: [
          "Translate the project into failure modes: excessive deflection, corrosion, fatigue, impact, fire, creep, moisture, UV, electrical tracking, connection failure and maintenance access. A material shortlist becomes much clearer once the unacceptable failure modes and verification methods are explicit.",
          "A statement such as 'FRP is corrosion resistant' is incomplete. The engineer needs resin chemistry, reinforcement, fiber orientation, veil, cure, chemical concentration, temperature and exposure duration. Equivalent discipline is needed for steel coating, stainless grade, aluminum alloy/finish, concrete mix and treated wood.",
        ],
      },
      {
        heading: "Compare complete systems and commercial boundaries",
        paragraphs: [
          "Ask each bidder to price the same delivered function: members, fasteners, inserts, protective finish, fabrication, inspection, packing, installation aids and required documentation. State who owns tooling and calculations and who is responsible for interface dimensions.",
          "For lifecycle cost, use the same design period, inspection interval, access cost, shutdown allowance and replacement scenario. A lifecycle model should expose assumptions rather than hide them in one discounted total.",
        ],
      },
      {
        heading: "Evidence package before material selection",
        paragraphs: [
          "The minimum evidence package is a controlled datasheet, applicable test reports, environmental compatibility statement, dimensional tolerances, fabrication instructions, connection guidance and traceability plan. Structural work also needs characteristic or design values and a clear design standard.",
        ],
        bullets: [
          "Separate product qualification from factory quality-system certification",
          "Match the report specimen, thickness and fiber direction to the offered product",
          "Confirm revisions, validity, laboratory identity and certificate scope",
          "Close all deviations before treating quotations as equivalent",
        ],
      },
    ],
    faqs: [
      {
        question: "When should FRP replace a traditional material?",
        answer:
          "FRP is most compelling when corrosion, installation weight, electrical isolation or maintenance access creates a measurable problem for the incumbent material. It should still pass project-specific stiffness, connection, fire, temperature and durability checks.",
      },
      {
        question: "Can supplier datasheets prove materials are equivalent?",
        answer:
          "Datasheets are a screening input, not proof of complete equivalence. Compare test methods, specimen form, direction, conditioning, statistical basis and design reductions, then review the finished member and connections.",
      },
      {
        question: "What is the fastest way to compare supplier offers?",
        answer:
          "Issue a compliance matrix with one row per requirement and require comply/deviation/evidence responses. Commercial comparison should wait until technical deviations and supply boundaries are visible.",
      },
    ],
    related: [
      { label: "FRP vs steel", href: "/compare/frp-vs-steel" },
      { label: "FRP vs aluminum", href: "/compare/frp-vs-aluminum" },
      { label: "China FRP sourcing playbook", href: "/source-from-china" },
    ],
    sources: [STRONGWELL_MANUAL, BEDFORD_GUIDE, ASTM_COMPOSITES, ALUMINUM_DATA],
  },
  {
    group: "technical",
    slug: "frp-properties",
    shortTitle: "FRP properties",
    title: "Fiberglass-reinforced plastic properties: buyer reference",
    metaTitle: "FRP Properties — Technical Data & Test Methods | getfrp",
    metaDescription:
      "Review FRP mechanical, physical, thermal and electrical properties, fiber-direction effects and ASTM test methods before approving a supplier datasheet.",
    eyebrow: "FRP TECHNICAL PROPERTIES",
    intro:
      "FRP is a family of engineered laminates, not one material grade. Properties change with fiber type, volume fraction, orientation, resin, additives, cure, process, thickness, conditioning and test direction. Use published ranges to screen a product, then design from controlled, product-specific evidence.",
    reviewedDate: "2026-08-01",
    highlights: [
      { label: "Primary variable", value: "Fiber direction" },
      { label: "Common mistake", value: "Using coupon averages" },
      { label: "Design input", value: "Characteristic / reduced value" },
      { label: "Evidence", value: "Method + specimen + conditioning" },
    ],
    table: {
      caption:
        "Illustrative values from a published commercial pultruded GFRP profile guide. They are not universal FRP design values.",
      headers: ["Property", "Longitudinal example", "Crosswise example", "Common test reference"],
      rows: [
        ["Tensile strength", "about 207 MPa minimum", "about 48 MPa minimum", "ASTM D638 / D3039 as applicable"],
        ["Tensile modulus", "about 17.2-17.9 GPa", "about 5.5 GPa", "ASTM D638 / D3039 as applicable"],
        ["Compressive strength", "about 207 MPa minimum", "about 103-110 MPa minimum", "ASTM D6641"],
        ["Flexural strength", "about 207 MPa minimum", "about 69 MPa minimum", "ASTM D790"],
        ["Short-beam shear", "about 31 MPa minimum", "Product-specific", "ASTM D2344"],
        ["Full-section modulus", "about 17-19 GPa for example shapes", "Not interchangeable with coupon data", "Full-section / ASTM D8069 where applicable"],
      ],
    },
    sections: [
      {
        heading: "Why one FRP property table cannot cover every product",
        paragraphs: [
          "Pultruded profiles concentrate continuous fibers in the production direction, so longitudinal properties are much higher than transverse properties. Molded grating, filament-wound pipe, chopped-fiber SMC and quasi-isotropic laminates distribute reinforcement differently and need different design data.",
          "Thickness and full-section behavior also matter. A thin coupon may not represent a thick profile, a joint, a hollow section or a surface-rich laminate. Ask the supplier to identify whether data comes from production coupons, witness panels, full sections or qualification specimens.",
        ],
      },
      {
        heading: "Read each number with its test conditions",
        paragraphs: [
          "Record the standard edition, specimen geometry, fiber direction, conditioning, test temperature, sample count and statistic. Strength reported as an average is not equivalent to a minimum or a characteristic value. ASTM D7290 describes a statistical route for characteristic values used in civil engineering composite applications.",
          "Temperature, moisture, chemicals, UV exposure, sustained load and fatigue can require reduction factors. The supplier should state which reductions are already included and which remain the engineer's responsibility.",
        ],
      },
      {
        heading: "Minimum property package for an RFQ",
        paragraphs: [
          "Request only properties tied to the real failure modes. A grating RFQ needs panel load/deflection, bar properties, cross-bar integrity, slip and fire evidence. A structural profile RFQ needs directional coupon values, full-section stiffness, connections and environmental reductions. Pipe needs pressure/stiffness basis, liner and joint data.",
        ],
        bullets: [
          "Mechanical: tensile, compression, flexure, shear, bearing and connection values",
          "Physical: density, water absorption, fiber content and dimensional stability",
          "Thermal/fire: service temperature, expansion, flame/smoke method and rating",
          "Electrical/environmental: dielectric or tracking data and chemical compatibility where relevant",
        ],
      },
    ],
    faqs: [
      {
        question: "What are the typical mechanical properties of FRP?",
        answer:
          "They vary too widely for one universal table. Pultruded GFRP profiles often have longitudinal modulus in the high-teens to mid-twenties GPa, while rods, carbon laminates, chopped compounds and transverse directions can be very different. Use the exact product datasheet and test basis.",
      },
      {
        question: "Why are longitudinal and transverse FRP properties different?",
        answer:
          "Fibers carry most of the load along their direction. Across the fibers, resin, mats and fiber/resin interfaces contribute more strongly, so stiffness and strength are usually lower. The manufacturing process sets the fiber architecture.",
      },
      {
        question: "Can I use an ultimate strength directly in design?",
        answer:
          "No. Structural design normally needs a statistically defined property and reductions for environment, duration, temperature, manufacturing variation and the governing code. Confirm the value basis with the designer and supplier.",
      },
    ],
    related: [
      { label: "FRP density and weight", href: "/technical/frp-density" },
      { label: "FRP technical datasheet checklist", href: "/technical/frp-technical-data-sheet" },
      { label: "Browse FRP products", href: "/products" },
    ],
    sources: [BEDFORD_PROPERTIES, STRONGWELL_MANUAL, ASTM_COMPOSITES],
  },
  {
    group: "technical",
    slug: "frp-density",
    shortTitle: "FRP density",
    title: "FRP density and weight: kg/m³, g/cm³ and calculation",
    metaTitle: "FRP Density & Weight — kg/m³ Calculator Guide | getfrp",
    metaDescription:
      "Use typical FRP density ranges and the mass-equals-volume-times-density formula to estimate GFRP, CFRP and BFRP product weight before supplier confirmation.",
    eyebrow: "FRP DENSITY REFERENCE",
    intro:
      "FRP density depends on fiber, resin, filler, void content and fiber volume fraction. A typical value is useful for logistics screening, but purchase orders and structural calculations should use the density or mass-per-length stated for the offered product.",
    reviewedDate: "2026-08-01",
    highlights: [
      { label: "Pultruded GFRP", value: "~1,700-2,000 kg/m³" },
      { label: "Typical aluminum", value: "~2,660-2,840 kg/m³" },
      { label: "Formula", value: "mass = volume × density" },
      { label: "Best evidence", value: "Product mass per unit length" },
    ],
    table: {
      caption: "Planning ranges only. Fillers and reinforcement architecture can move density outside these bands.",
      headers: ["Material system", "Planning density", "What changes it", "Procurement use"],
      rows: [
        ["Pultruded GFRP profile", "1,700-2,000 kg/m³", "Glass content, resin and veil", "Preliminary section and shipping weight"],
        ["Molded / laminated GFRP", "1,600-2,000 kg/m³", "Mat/roving ratio, filler and resin-rich layers", "Panels, covers and fabricated laminates"],
        ["CFRP laminate", "1,450-1,650 kg/m³", "Fiber grade, volume fraction and resin", "High-performance laminate screening"],
        ["BFRP composite", "1,850-2,100 kg/m³", "Basalt content, resin and process", "Rebar/profile logistics screening"],
        ["Aluminum reference", "2,660-2,840 kg/m³", "Alloy composition", "Alternative-material comparison"],
      ],
    },
    sections: [
      {
        heading: "How to calculate FRP product weight",
        paragraphs: [
          "Convert every dimension to meters, calculate solid material volume in cubic meters, then multiply by density in kilograms per cubic meter. A 2.0 m × 1.0 m × 0.006 m solid sheet at 1,850 kg/m³ has an estimated mass of 22.2 kg before holes, coatings, inserts or tolerance.",
          "For hollow profiles, subtract the internal void volume. For grating, open area and bar geometry make a solid-sheet calculation inaccurate—use manufacturer mass per square meter. For complex molded parts, a CAD volume or measured production sample is better.",
        ],
      },
      {
        heading: "Why supplier mass-per-length is usually better",
        paragraphs: [
          "A catalog mass per meter or per square meter already reflects the real section geometry and nominal formulation. Ask for tolerance because reinforcement and resin variation, surface grit, coatings and fabrication can change delivered weight.",
          "Shipping calculations should include pallets, crates, separators, moisture protection and unusable container volume. Low material density does not guarantee efficient freight if long profiles or large panels cube out the container first.",
        ],
      },
      {
        heading: "Use density without overclaiming precision",
        paragraphs: [
          "Density can support early comparison and freight planning, but it does not establish strength, fiber content or quality by itself. A high density may come from more glass or from mineral filler; a low density may reflect the intended formulation or excess voids. Pair density with burn-off/fiber content, void control and mechanical evidence when those characteristics matter.",
        ],
        bullets: [
          "Use no more precision than the source data supports",
          "Record whether density is measured or calculated",
          "Confirm temperature and moisture conditioning when relevant",
          "Reconcile calculated shipment mass with packing-list limits",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the density of fiberglass-reinforced plastic?",
        answer:
          "A practical planning range for many GFRP products is about 1,600-2,000 kg/m³, with pultruded profiles commonly near the upper part of that range. Formulation and fiber content control the actual value, so use the supplier's product data for procurement.",
      },
      {
        question: "How much lighter is FRP than steel?",
        answer:
          "By material volume, common GFRP is roughly one-quarter the density of steel. The finished member weight reduction is project-specific because FRP and steel sections may have different dimensions to meet stiffness and connection requirements.",
      },
      {
        question: "Can density prove FRP fiber content?",
        answer:
          "No. Density is influenced by glass, resin, fillers and voids. Use a suitable fiber-content method, formulation records and mechanical tests rather than inferring reinforcement from density alone.",
      },
    ],
    related: [
      { label: "Open the FRP weight calculator", href: "/tools/frp-weight-calculator" },
      { label: "FRP vs aluminum", href: "/compare/frp-vs-aluminum" },
      { label: "FRP properties", href: "/technical/frp-properties" },
    ],
    sources: [BEDFORD_PROPERTIES, ALUMINUM_DATA, ASTM_COMPOSITES],
  },
  {
    group: "technical",
    slug: "frp-technical-data-sheet",
    shortTitle: "FRP technical data sheet",
    title: "FRP technical data sheet: buyer checklist and template",
    metaTitle: "FRP Technical Data Sheet — Buyer Checklist | getfrp",
    metaDescription:
      "Use this FRP technical data sheet checklist to verify material identity, directional properties, test methods, tolerances, environment and document control.",
    eyebrow: "TDS REVIEW CHECKLIST",
    intro:
      "A useful FRP technical data sheet identifies one product and lets a buyer trace every important value to a method, direction, condition and revision. Generic marketing tables are not enough for structural, fire, electrical or chemical-service decisions.",
    reviewedDate: "2026-08-01",
    highlights: [
      { label: "Identity", value: "Grade + process + site" },
      { label: "Properties", value: "Direction + method + statistic" },
      { label: "Environment", value: "Temperature + chemistry + UV" },
      { label: "Control", value: "Revision + date + approver" },
    ],
    table: {
      caption: "Minimum fields for a procurement-ready FRP datasheet.",
      headers: ["TDS block", "Required fields", "Typical failure", "Buyer action"],
      rows: [
        ["Product identity", "Legal manufacturer, plant, grade, process, resin/fiber", "Trade name without production site", "Tie the TDS to quotation and PO"],
        ["Mechanical", "Direction, method, units, conditioning, statistic", "Average coupon values presented as design values", "Request test reports and design basis"],
        ["Physical", "Density, fiber content, water absorption, dimensions", "No tolerances or specimen form", "Add product-specific acceptance limits"],
        ["Fire/electrical", "Exact method, thickness, rating and report scope", "Logo or certificate with no tested construction", "Match offered thickness and formulation"],
        ["Environment", "Service temperature, chemicals, UV, duration", "Broad 'corrosion resistant' claim", "Request compatibility statement for real exposure"],
        ["Document control", "Revision, issue date, approver, change notice", "Undated PDF copied between grades", "Freeze the approved revision in the PO"],
      ],
    },
    sections: [
      {
        heading: "Define the product before reading the numbers",
        paragraphs: [
          "The header should state manufacturer, production site, product/grade, resin system, reinforcement, process, nominal fiber content, color and relevant thickness or section family. If one sheet covers multiple constructions, it should identify which values apply to each.",
          "Distributor or marketplace branding should not hide the manufacturing legal entity. Certificates and test reports must be traceable to the site and product that will fulfill the order.",
        ],
      },
      {
        heading: "Separate typical, minimum and design values",
        paragraphs: [
          "Typical values describe representative production and are useful for comparison. Minimum specification values can support incoming acceptance when sampling and methods are defined. Structural design values need a statistical basis and reduction factors under the governing code. The TDS should not blur those purposes.",
          "For anisotropic products, report longitudinal and transverse directions. For profiles, identify coupon versus full-section values. For grating and joints, publish assembly tests in addition to constituent coupons.",
        ],
      },
      {
        heading: "Turn the approved TDS into a purchase control",
        paragraphs: [
          "Reference the exact TDS revision in the purchase order and attach a project specification with deviations closed. State the certificate of analysis fields, batch/lot traceability, inspection method, sample retention and change-notification requirement.",
        ],
        bullets: [
          "Reject silent changes to resin, reinforcement, supplier site or process",
          "Define precedence between drawing, project specification, TDS and quotation",
          "Require original reports where regulatory or safety claims matter",
          "Retain an approved sample or first article for appearance-sensitive parts",
        ],
      },
    ],
    faqs: [
      {
        question: "What should an FRP technical data sheet include?",
        answer:
          "At minimum: product and manufacturer identity, process, fiber/resin system, directional mechanical properties, physical properties, test methods and conditions, tolerances, environmental limits, fire/electrical claims, and controlled revision information.",
      },
      {
        question: "Is a technical data sheet the same as a certificate of analysis?",
        answer:
          "No. A TDS describes the product and its published properties. A certificate of analysis reports defined results or confirmations for a production batch. The purchase order should state which batch fields are required.",
      },
      {
        question: "Can a TDS replace a third-party test report?",
        answer:
          "Not when the requirement calls for independent evidence or a regulated/fire-rated construction. The TDS should identify the report, method, specimen and scope so the buyer can verify applicability.",
      },
    ],
    related: [
      { label: "FRP properties reference", href: "/technical/frp-properties" },
      { label: "FRP quality inspection guide", href: "/guides/frp-quality-inspection" },
      { label: "Browse verified standards", href: "/standards" },
    ],
    sources: [ASTM_COMPOSITES, BEDFORD_GUIDE, STRONGWELL_MANUAL],
  },
  {
    group: "guides",
    slug: "what-is-frp",
    shortTitle: "What is FRP?",
    title: "What is FRP? Fibers, resins, products and processes",
    metaTitle: "What Is FRP? Fiberglass-Reinforced Plastic Guide | getfrp",
    metaDescription:
      "Learn what FRP means, how fiber-reinforced polymer combines reinforcement and resin, which processes make common products, and what buyers must specify.",
    eyebrow: "FRP EXPLAINED",
    intro:
      "FRP means fiber-reinforced polymer (also called fiber-reinforced plastic). It combines load-carrying fibers with a polymer resin that binds, protects and transfers load between them. The resulting properties depend on both materials and how the fibers are arranged and processed.",
    reviewedDate: "2026-08-01",
    highlights: [
      { label: "Reinforcement", value: "Glass · carbon · basalt · aramid" },
      { label: "Matrix", value: "Polyester · vinyl ester · epoxy" },
      { label: "Key behavior", value: "Directional / anisotropic" },
      { label: "Buyer task", value: "Specify system + process" },
    ],
    table: {
      caption: "Common FRP building blocks and their procurement effect.",
      headers: ["Element", "Common choices", "Primary role", "Buyer question"],
      rows: [
        ["Fiber", "Glass, carbon, basalt, aramid", "Strength, stiffness and direction", "Which grade, sizing and architecture?"],
        ["Resin", "Polyester, vinyl ester, epoxy, phenolic", "Load transfer, environment and processing", "Which chemistry and cure condition?"],
        ["Architecture", "Roving, mat, fabric, chopped fiber", "Controls directional properties", "What fiber orientation and content?"],
        ["Process", "Pultrusion, molding, winding, infusion, lamination", "Controls geometry and repeatability", "Which steps are performed in-house?"],
        ["Surface", "Veil, gelcoat, coating, grit", "UV, chemical and appearance function", "What tested construction includes the surface?"],
      ],
    },
    sections: [
      {
        heading: "FRP is a material system, not a single commodity",
        paragraphs: [
          "Two products described as GFRP can have different strength, stiffness, chemical resistance, fire behavior and cost because glass grade, resin, fiber fraction, orientation and process differ. A useful specification names the performance and environment, then controls the construction that delivers them.",
          "The term fiberglass is sometimes used for both the glass reinforcement and the finished composite. For procurement, separate the fiber, resin, intermediate reinforcement and finished product to avoid ambiguous quotations.",
        ],
      },
      {
        heading: "How common FRP products are made",
        paragraphs: [
          "Pultrusion makes constant-section profiles by pulling reinforcement through resin and a heated die. Filament winding places fibers around a rotating mandrel for pipe and vessels. Compression molding shapes SMC/BMC in matched tools. Infusion and hand lamination make larger panels and complex shells. Each process creates a different fiber architecture and commercial model.",
        ],
      },
      {
        heading: "What a buyer should specify first",
        paragraphs: [
          "Start with geometry, load/function, service environment, applicable standards, quantity, tolerances and evidence. Let qualified suppliers propose a material/process combination, then compare deviations on one controlled sheet.",
        ],
        bullets: [
          "Product form and critical dimensions",
          "Loads, stiffness or functional performance",
          "Chemicals, temperature, UV, fire and electrical exposure",
          "Annual volume, delivery destination and documentation",
        ],
      },
    ],
    faqs: [
      {
        question: "What does FRP stand for?",
        answer:
          "FRP stands for fiber-reinforced polymer or fiber-reinforced plastic. In industrial sourcing it usually refers to glass-, carbon-, basalt- or aramid-fiber reinforcement in a thermoset or thermoplastic polymer matrix.",
      },
      {
        question: "Is fiberglass the same as FRP?",
        answer:
          "Fiberglass often means GFRP, but it can also mean the glass fiber itself. FRP is the broader family and includes carbon-, basalt- and aramid-fiber composites as well as glass-fiber composites.",
      },
      {
        question: "Is FRP plastic?",
        answer:
          "FRP contains a polymer matrix, but reinforcement carries a large share of load and changes the material behavior. It should be specified as a composite system, not treated like an unreinforced commodity plastic.",
      },
    ],
    related: [
      { label: "Types of FRP", href: "/guides/types-of-frp" },
      { label: "FRP properties", href: "/technical/frp-properties" },
      { label: "Browse FRP products", href: "/products" },
    ],
    sources: [STRONGWELL_MANUAL, BEDFORD_GUIDE, ASTM_COMPOSITES],
  },
  {
    group: "guides",
    slug: "types-of-frp",
    shortTitle: "Types of FRP",
    title: "Types of FRP: fibers, resins, processes and product forms",
    metaTitle: "Types of FRP — Materials, Processes & Products | getfrp",
    metaDescription:
      "Compare GFRP, CFRP, BFRP and aramid FRP plus polyester, vinyl ester, epoxy, pultrusion, molding, winding and common product forms.",
    eyebrow: "FRP TYPE GUIDE",
    intro:
      "FRP can be classified four ways: reinforcement fiber, polymer matrix, manufacturing process and finished product form. A purchase description should use all four when they affect performance—for example, pultruded E-glass/vinyl-ester channel rather than simply 'fiberglass profile.'",
    reviewedDate: "2026-08-01",
    highlights: [
      { label: "By fiber", value: "GFRP · CFRP · BFRP · AFRP" },
      { label: "By resin", value: "Polyester · VE · epoxy" },
      { label: "By process", value: "Pultrude · mold · wind · infuse" },
      { label: "By product", value: "Profile · grating · pipe · part" },
    ],
    table: {
      caption: "High-level screening; exact grade and laminate construction control performance.",
      headers: ["FRP family", "Typical strength", "Common products", "Primary procurement check"],
      rows: [
        ["GFRP", "Cost-effective, corrosion-resistant general industrial composite", "Grating, profiles, pipe, rebar, sheet", "Glass grade, resin and fiber architecture"],
        ["CFRP", "High stiffness/strength at low weight", "Aerospace, automation, strengthening, pressure", "Fiber grade, layup, cure and NDT"],
        ["BFRP", "Mineral-fiber alternative to GFRP", "Rebar, mesh, profiles", "Basalt source, sizing, resin and durability evidence"],
        ["AFRP / aramid", "Impact and toughness-oriented", "Ballistic, ropes, specialty laminates", "Compression behavior, moisture and finishing"],
        ["Hybrid FRP", "Combines fibers or architectures", "Optimized beams, panels and parts", "Traceable stacking sequence and interfaces"],
      ],
    },
    sections: [
      {
        heading: "Choose fiber for the load and commercial target",
        paragraphs: [
          "Glass fiber dominates industrial FRP because it balances cost, corrosion resistance and supply depth. Carbon fiber is selected when stiffness or weight justifies the premium. Basalt and aramid serve narrower durability, impact or policy-driven cases. Hybrid laminates can place expensive reinforcement only where it creates value.",
        ],
      },
      {
        heading: "Choose resin for processing and environment",
        paragraphs: [
          "Polyester is a common cost-focused matrix. Vinyl ester is widely used for stronger chemical and hydrolytic performance. Epoxy is common where adhesion, fatigue, higher properties or precision processing matters. Phenolic and formulated fire-retardant systems address specific fire/smoke requirements. Grade-level test evidence still controls.",
        ],
      },
      {
        heading: "Process defines geometry, fiber layout and MOQ",
        paragraphs: [
          "Pultrusion suits continuous profiles; winding suits rotational pipe and vessels; compression molding suits repeatable closed-tool parts; infusion suits large shells and panels; continuous lamination suits sheet; hand lay-up supports complex low-volume structures. Tooling, trial and quality economics differ sharply.",
        ],
        bullets: [
          "Separate tooling and development from recurring piece price",
          "Ask which processes and secondary operations are in-house",
          "Match process evidence to the offered geometry and thickness",
          "Control fiber direction and resin rather than accepting a generic FRP label",
        ],
      },
    ],
    faqs: [
      {
        question: "What are the main types of FRP?",
        answer:
          "The main fiber families are GFRP, CFRP, BFRP and aramid FRP. Buyers also classify FRP by resin, manufacturing process and product form because those choices can change properties as much as fiber type.",
      },
      {
        question: "Which type of FRP is most common?",
        answer:
          "GFRP is the most common for industrial products because glass reinforcement and polyester/vinyl-ester supply chains are mature and economical. Carbon fiber dominates only where its higher stiffness-to-weight creates enough value.",
      },
      {
        question: "How do I choose a manufacturing process?",
        answer:
          "Start with geometry, fiber orientation, surface, tolerance and volume. Constant sections suggest pultrusion; rotational pressure products suggest winding; high-volume closed-tool parts suggest compression molding; large shells often use infusion or lamination.",
      },
    ],
    related: [
      { label: "What is FRP?", href: "/guides/what-is-frp" },
      { label: "Manufacturing process database", href: "/tech" },
      { label: "Search Chinese FRP suppliers", href: "/suppliers" },
    ],
    sources: [STRONGWELL_MANUAL, BEDFORD_GUIDE, ASTM_COMPOSITES],
  },
  {
    group: "guides",
    slug: "frp-quality-inspection",
    shortTitle: "FRP quality inspection",
    title: "FRP quality inspection in China: RFQ-to-shipment checklist",
    metaTitle: "FRP Quality Inspection China — Buyer Checklist | getfrp",
    metaDescription:
      "Build an FRP inspection plan for Chinese suppliers covering document review, incoming materials, dimensions, appearance, tests, traceability and shipment release.",
    eyebrow: "CHINA FRP QUALITY CONTROL",
    intro:
      "FRP inspection works when requirements are converted into measurable hold points before production. A final visual check cannot recover an incorrect resin, fiber architecture, cure, laminate sequence or certificate scope. Use this checklist from RFQ through pre-shipment release.",
    reviewedDate: "2026-08-01",
    highlights: [
      { label: "Before PO", value: "Close technical deviations" },
      { label: "Before production", value: "Approve materials + plan" },
      { label: "During production", value: "Witness critical process" },
      { label: "Before shipment", value: "Release against evidence" },
    ],
    table: {
      caption: "A practical inspection sequence; project risk sets sample sizes and hold points.",
      headers: ["Stage", "Inspect", "Evidence", "Release question"],
      rows: [
        ["Supplier qualification", "Legal site, process, equipment, quality system", "Audit, scope, organization and subcontract map", "Can this site make and control the offered product?"],
        ["Material receipt", "Resin, reinforcement, additives, inserts", "COA, lot IDs, storage and shelf life", "Do inputs match the approved construction?"],
        ["First article", "Dimensions, laminate, surface, fit and function", "FAI report, sample, photos and test results", "Is the approved baseline reproducible?"],
        ["In process", "Mix/cure, fiber placement, temperature, pressure, tooling", "Travelers, logs, witness points", "Are critical parameters within limits?"],
        ["Final inspection", "Quantity, dimensions, defects, performance, marking", "Inspection report and NCR closure", "Does the lot meet every acceptance criterion?"],
        ["Shipment", "Packing, labels, documents and load plan", "Packing list, crate photos, release note", "Will accepted product arrive traceably and undamaged?"],
      ],
    },
    sections: [
      {
        heading: "Write acceptance criteria before placing the order",
        paragraphs: [
          "The purchase package should identify drawings and revisions, product construction, standards, dimensions/tolerances, appearance limits, performance, test frequency, sampling, documentation, traceability, packaging and deviation control. Terms such as 'good quality' or 'standard tolerance' cannot be inspected consistently.",
          "Use defect photographs or a visual acceptance standard for pits, blisters, dry fiber, exposed reinforcement, cracks, chips, resin-rich areas, print-through, color and finish. Separate cosmetic limits from structural reject conditions.",
        ],
      },
      {
        heading: "Control the process characteristics that final inspection cannot see",
        paragraphs: [
          "Critical controls depend on process: resin formulation and gel/cure for molding; pulling speed, die temperature and fiber placement for pultrusion; winding angle and liner for pipe; charge weight, mold temperature and cure for SMC/BMC. Record the parameters that link raw-material lots to finished batches.",
          "If work is subcontracted, identify the site and inspection responsibility. A supplier quality certificate does not automatically cover a different molding, machining or testing location.",
        ],
      },
      {
        heading: "Release the shipment from one evidence index",
        paragraphs: [
          "Create a document index with PO/drawing revision, approved deviations, incoming certificates, traveler/lot records, first article, dimensional report, test results, nonconformance closure, packing list and shipment photographs. Each item should identify the production lot.",
        ],
        bullets: [
          "Verify certificate issuer, site, scope, revision and validity",
          "Match tested specimen, thickness and orientation to the supplied product",
          "Define retest, concession and rejection authority before inspection",
          "Do not release cargo with open critical nonconformances",
        ],
      },
    ],
    faqs: [
      {
        question: "What should an FRP pre-shipment inspection cover?",
        answer:
          "It should cover identity/quantity, drawing revision, dimensions, visual defects, required batch tests, marking, traceability, documents and packaging. The exact sample size and tests come from the purchase inspection plan.",
      },
      {
        question: "Can a final inspection detect the wrong resin or fiber architecture?",
        answer:
          "Not reliably. Those characteristics require material traceability, process records and sometimes targeted laboratory methods. Control them at incoming-material and production hold points.",
      },
      {
        question: "Do ISO 9001 certificates prove the FRP product complies?",
        answer:
          "No. ISO 9001 addresses the quality management system and its certified scope. Product compliance needs product-specific specifications, test evidence and inspection records for the supplied lot.",
      },
    ],
    related: [
      { label: "FRP technical data sheet checklist", href: "/technical/frp-technical-data-sheet" },
      { label: "FRP conformity and certification in China", href: "/sourcing/frp-conformity-china" },
      { label: "Submit a controlled RFQ", href: "/rfq" },
    ],
    sources: [ASTM_COMPOSITES, BEDFORD_GUIDE, STRONGWELL_MANUAL],
  },
];

export function getSeoReferencePage(
  group: SeoReferenceGroup,
  slug: string,
): SeoReferencePage | undefined {
  return SEO_REFERENCE_PAGES.find(
    (page) => page.group === group && page.slug === slug,
  );
}

export function getSeoReferencePages(group: SeoReferenceGroup) {
  return SEO_REFERENCE_PAGES.filter((page) => page.group === group);
}
