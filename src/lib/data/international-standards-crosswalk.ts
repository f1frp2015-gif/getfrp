export const STANDARDS_REGIONS = [
  { id: "europe", label: "Europe", system: "EN / ISO", code: "EU" },
  { id: "unitedStates", label: "United States", system: "ASTM / ASME / AWWA", code: "US" },
  { id: "australia", label: "Australia", system: "AS / Austroads", code: "AU" },
  { id: "canada", label: "Canada", system: "CSA + adopted international", code: "CA" },
] as const;

export type StandardsRegion = (typeof STANDARDS_REGIONS)[number]["id"];
export type StandardsCoverage = "direct" | "sector" | "contract";

export type StandardsReference = {
  code: string;
  title: string;
};

export type RegionalStandardsCell = {
  coverage: StandardsCoverage;
  references: StandardsReference[];
  note: string;
};

export type InternationalStandardsRow = {
  id: string;
  family: "Manufacturing processes" | "Raw materials";
  name: string;
  qualifier: string;
  buyerCheck: string;
  regions: Record<StandardsRegion, RegionalStandardsCell>;
};

const contract = (
  references: StandardsReference[],
  note: string,
): RegionalStandardsCell => ({ coverage: "contract", references, note });

const sector = (
  references: StandardsReference[],
  note: string,
): RegionalStandardsCell => ({ coverage: "sector", references, note });

const direct = (
  references: StandardsReference[],
  note: string,
): RegionalStandardsCell => ({ coverage: "direct", references, note });

export const INTERNATIONAL_STANDARDS_CROSSWALK: InternationalStandardsRow[] = [
  {
    id: "pultrusion",
    family: "Manufacturing processes",
    name: "Pultrusion",
    qualifier: "Structural profiles, rods and shapes",
    buyerCheck:
      "Profile class, resin and reinforcement, full-section properties, tolerances, visual grade, durability conditioning and design basis.",
    regions: {
      europe: direct(
        [
          { code: "EN 13706-1/-2/-3", title: "Pultruded profiles: designation, test methods and requirements" },
          { code: "ISO 1268-6", title: "Pultrusion-moulded test plates" },
        ],
        "EN 13706 is the principal European product family. State the part, profile grade and property direction.",
      ),
      unitedStates: direct(
        [
          { code: "ASTM D3917-23", title: "Dimensional tolerances for pultruded shapes" },
          { code: "ASTM D4385-19", title: "Visual-defect classification" },
          { code: "ASTM D7745-21", title: "Testing pultruded composites" },
        ],
        "These control tolerances, appearance and testing; the structural design standard must still be named separately.",
      ),
      australia: sector(
        [
          { code: "Austroads ATS 5880", title: "FRP bridge members" },
          { code: "BS EN 13706 + ASTM D3917/D4385", title: "Referenced profile qualification set" },
        ],
        "Australia has no broad horizontal AS product specification for every pultruded profile. ATS 5880 supplies a transport-sector route.",
      ),
      canada: sector(
        [
          { code: "CSA S807", title: "FRP reinforcement specification" },
          { code: "EN 13706 or ASTM D3917/D4385", title: "Contract-declared profile basis" },
        ],
        "CSA S807 applies when the pultruded product is reinforcement, not to every structural shape. Generic profiles need a declared international basis.",
      ),
    },
  },
  {
    id: "smc-compression-moulding",
    family: "Manufacturing processes",
    name: "SMC / compression moulding",
    qualifier: "Sheet moulding compound and moulded parts",
    buyerCheck:
      "Compound family, fibre type and content, charge pattern, flow, cure, shrinkage, mechanical/electrical class and finished-part acceptance.",
    regions: {
      europe: direct(
        [
          { code: "ISO 8605:2024", title: "SMC requirements and specifications" },
          { code: "ISO 1268-8:2004", title: "Compression moulding of SMC/BMC test plates" },
        ],
        "ISO 8605 covers the compound; ISO 1268-8 standardizes preparation of representative test plates, not finished-part approval.",
      ),
      unitedStates: direct(
        [
          { code: "ASTM D1201-13(2022)e1", title: "Thermosetting polyester moulding compounds" },
          { code: "ASTM D5948-05(2020)", title: "Thermosetting moulding compounds" },
        ],
        "Select the applicable resin and compound class, then add the end-product and sector requirements.",
      ),
      australia: contract(
        [{ code: "ISO 8605:2024", title: "Contract baseline for SMC compound control" }],
        "No general Australian SMC product counterpart. The purchase specification normally adopts ISO and the applicable automotive, electrical or infrastructure requirements.",
      ),
      canada: contract(
        [{ code: "ISO 8605 or ASTM D1201", title: "Contract-declared compound specification" }],
        "No general CSA SMC process standard. Qualification follows the end-use code plus the expressly adopted ISO or ASTM compound standard.",
      ),
    },
  },
  {
    id: "rtm",
    family: "Manufacturing processes",
    name: "RTM / HP-RTM",
    qualifier: "Closed-mould resin transfer moulding",
    buyerCheck:
      "Tool and injection scheme, preform architecture, resin viscosity window, pressure/temperature record, cure state, void content and laminate allowables.",
    regions: {
      europe: sector(
        [
          { code: "ISO 1268-7:2001", title: "RTM production of test plates" },
          { code: "ISO 527-4/-5 + ISO 14125", title: "Laminate tensile and flexural properties" },
        ],
        "ISO 1268-7 standardizes test-plate production; it is not a universal certification standard for every RTM component.",
      ),
      unitedStates: sector(
        [
          { code: "ASTM D5687/D5687M-20", title: "Flat composite panels and specimen preparation" },
          { code: "ASTM D3039 + D7264", title: "Laminate tensile and flexural tests" },
        ],
        "There is no horizontal ASTM finished-product standard for all RTM parts. Automotive, aerospace or industrial end-use requirements govern.",
      ),
      australia: contract(
        [{ code: "ISO 1268-7", title: "Contract baseline for representative RTM panels" }],
        "No direct general AS counterpart. Adopt ISO test-panel preparation and name the sector-specific acceptance standard.",
      ),
      canada: contract(
        [{ code: "ISO 1268-7 or ASTM D5687", title: "Contract-declared panel preparation" }],
        "No direct general CSA counterpart. Finished-part qualification remains application-specific.",
      ),
    },
  },
  {
    id: "hand-lay-up",
    family: "Manufacturing processes",
    name: "Hand lay-up / contact moulding",
    qualifier: "Laminates, tanks, ducts, pipe and field-applied FRP",
    buyerCheck:
      "Laminate sequence, corrosion barrier, overlaps and joints, glass/resin content, cure, Barcol hardness, visual limits and laminate qualification.",
    regions: {
      europe: direct(
        [
          { code: "ISO 1268-2", title: "Contact and spray-up test plates" },
          { code: "EN 13121-3", title: "Above-ground GRP tanks and vessels" },
        ],
        "Use the product code when tanks or vessels are supplied; the ISO plate method alone does not qualify workmanship.",
      ),
      unitedStates: direct(
        [
          { code: "ASTM C582-23", title: "Contact-moulded corrosion-resistant laminates" },
          { code: "ASTM D4097-19", title: "Contact-moulded corrosion-resistant tanks" },
          { code: "ASTM D6041-23", title: "Contact-moulded corrosion-resistant pipe and fittings" },
        ],
        "Choose the standard matching the delivered product; laminate construction and service chemistry remain order-specific.",
      ),
      australia: contract(
        [{ code: "ISO 1268-2 + EN 13121 / ASTM C582", title: "Contract-selected fabrication basis" }],
        "No one Australian standard covers every hand-laminated product. Product, chemical-service and workplace requirements must be added.",
      ),
      canada: sector(
        [
          { code: "CSA S808", title: "FRP materials for externally reinforcing structures" },
          { code: "ASTM C582 / D4097", title: "Commonly specified industrial fabrication basis" },
        ],
        "CSA S808 is relevant to strengthening materials. Tanks and chemical equipment usually require an expressly adopted ASTM, ASME or EN basis.",
      ),
    },
  },
  {
    id: "roll-wrapping",
    family: "Manufacturing processes",
    name: "Roll wrapping",
    qualifier: "Rolled laminate tubes and rods",
    buyerCheck:
      "Ply schedule and orientation, mandrel and cure cycle, wall build, straightness, OD/ID tolerances, machining allowance and tube-level tests.",
    regions: {
      europe: sector(
        [
          { code: "IEC 61212-3-1:2013", title: "Round laminated rolled tubes for electrical use" },
          { code: "ISO 527-4/-5 + ISO 14125", title: "Laminate tensile and flexural tests" },
        ],
        "IEC 61212-3-1 is product-specific to electrical insulating tubes. Other tubes need drawing and laminate-level qualification.",
      ),
      unitedStates: direct(
        [
          { code: "ASTM D709-25", title: "Laminated thermosetting sheets, rolled tubes and rods" },
          { code: "ASTM D3039 + D7264", title: "Composite tensile and flexural tests" },
        ],
        "ASTM D709 covers defined laminated thermosetting grades; high-performance carbon tubes still need a product drawing and test plan.",
      ),
      australia: contract(
        [{ code: "IEC 61212-3-1 or ASTM D709", title: "Contract-selected tube basis" }],
        "No horizontal AS roll-wrapped composite-tube standard. Use the international product basis only where its scope matches the end use.",
      ),
      canada: contract(
        [{ code: "IEC 61212-3-1 or ASTM D709", title: "Contract-selected tube basis" }],
        "No horizontal CSA roll-wrapped tube standard. Electrical, pressure or structural end-use codes may add separate requirements.",
      ),
    },
  },
  {
    id: "vacuum-infusion",
    family: "Manufacturing processes",
    name: "Vacuum infusion / VARTM",
    qualifier: "Large infused laminates and sandwich structures",
    buyerCheck:
      "Vacuum-drop acceptance, flow media and inlet strategy, resin temperature/viscosity, infusion and cure trace, core bonding, voids and NDT plan.",
    regions: {
      europe: sector(
        [
          { code: "ISO 12215-5:2019", title: "Small-craft hull structure and scantlings" },
          { code: "ISO 1268-7", title: "RTM test-plate method where technically applicable" },
        ],
        "There is no universal EN/ISO VARTM process certification. ISO 12215-5 is an end-product route for small craft, not all infused parts.",
      ),
      unitedStates: sector(
        [
          { code: "ASTM D5687/D5687M-20", title: "Flat composite panel preparation" },
          { code: "ASTM D3171-22", title: "Constituent content of composite materials" },
          { code: "ASTM D2734-23", title: "Void content of reinforced plastics" },
        ],
        "No horizontal ASTM VARTM product standard. The applicable marine, wind, transport or structural specification governs acceptance.",
      ),
      australia: contract(
        [{ code: "ISO 12215-5 + project specification", title: "Common small-craft route" }],
        "No direct general AS VARTM counterpart. Commercial vessels and other sectors add their own design and survey rules.",
      ),
      canada: contract(
        [{ code: "ISO 12215-5 + project specification", title: "Common small-craft route" }],
        "No direct general CSA VARTM counterpart. Transport, marine or structural authority requirements must be identified before qualification.",
      ),
    },
  },
  {
    id: "filament-winding",
    family: "Manufacturing processes",
    name: "Filament winding",
    qualifier: "GRP/RTR pipe, tanks and pressure boundaries",
    buyerCheck:
      "Winding angle and wall construction, liner and corrosion barrier, design pressure/stiffness, regression basis, joints, proof test and batch traceability.",
    regions: {
      europe: direct(
        [
          { code: "ISO 23856:2021", title: "GRP water, drainage and sewer piping systems" },
          { code: "ISO 14692 series", title: "GRP piping for petroleum and natural-gas service" },
          { code: "EN 13121-3", title: "Above-ground GRP tanks and vessels" },
        ],
        "The conveyed medium and installation determine which product family applies; winding process alone does not select the code.",
      ),
      unitedStates: direct(
        [
          { code: "ASTM D2996-23", title: "Filament-wound fiberglass pipe" },
          { code: "ASTM D3299-26", title: "Filament-wound corrosion-resistant tanks" },
          { code: "AWWA C950", title: "Fiberglass pressure pipe" },
        ],
        "Use pipe, water-service or tank requirements as applicable and add long-term pressure/stiffness and joint qualification.",
      ),
      australia: direct(
        [
          { code: "AS 3571.1-2009", title: "GRP drainage and sewerage systems" },
          { code: "AS 3571.2-2009", title: "GRP water-supply systems" },
          { code: "AS/NZS 2566", title: "Buried flexible pipeline design and installation" },
        ],
        "AS 3571 is product/service-specific and is based on older ISO pipe standards; current project specifications may also call up ISO 23856.",
      ),
      canada: sector(
        [
          { code: "CSA B51", title: "Pressure equipment and pressure-piping jurisdiction" },
          { code: "ASTM D2996 / AWWA C950", title: "Commonly adopted pipe product basis" },
        ],
        "Canada has no single CSA counterpart covering all wound GRP pipe and tanks. Provincial registration and the adopted product standard both matter.",
      ),
    },
  },
  {
    id: "glass-fibre",
    family: "Raw materials",
    name: "Glass fibre",
    qualifier: "Yarns, rovings, strands, mats and fabrics",
    buyerCheck:
      "Glass type, product form, tex, filament diameter, sizing chemistry and compatibility, moisture, loss on ignition and tensile retention.",
    regions: {
      europe: direct(
        [
          { code: "ISO 2078:2022", title: "Textile-glass yarn designation" },
          { code: "ISO 2797:2017", title: "Rovings: basis for specification" },
          { code: "ISO 3341:2000", title: "Breaking force and elongation" },
        ],
        "Specify both the designation and grade-level acceptance properties; a generic E-glass label is not a complete purchase specification.",
      ),
      unitedStates: direct(
        [
          { code: "ASTM D578/D578M-23", title: "Glass-fibre strands" },
          { code: "ASTM D2343-17(2023)", title: "Tensile properties of strands, yarns and rovings" },
        ],
        "Sizing compatibility and end-use durability need order-specific limits beyond the basic strand designation.",
      ),
      australia: contract(
        [{ code: "ISO 2078 / ISO 2797 or ASTM D578", title: "Contract-adopted raw-material basis" }],
        "No broad Australian replacement covering all reinforcement forms. State the international method and supplier grade in the purchase order.",
      ),
      canada: contract(
        [{ code: "ISO 2078 / ISO 2797 or ASTM D578", title: "Contract-adopted raw-material basis" }],
        "No broad CSA replacement covering all reinforcement forms. The final product standard may impose additional fibre requirements.",
      ),
    },
  },
  {
    id: "carbon-fibre",
    family: "Raw materials",
    name: "Carbon fibre",
    qualifier: "Continuous filament tow and reinforcement",
    buyerCheck:
      "Tow size, tensile modulus/strength method, density, linear mass, sizing type/content, filament defects, oxidation resistance and lot CoA.",
    regions: {
      europe: direct(
        [
          { code: "ISO 10618:2004", title: "Tensile properties of resin-impregnated yarn" },
          { code: "ISO 10119:2020", title: "Carbon-fibre density" },
          { code: "ISO 10548:2002", title: "Sizing content" },
        ],
        "The resin used to impregnate the yarn affects the measured result; lock the preparation method and acceptance statistics.",
      ),
      unitedStates: direct(
        [
          { code: "ASTM D4018-23", title: "Properties of continuous carbon/graphite fibre tows" },
          { code: "ASTM D3800-22", title: "Density of high-modulus fibres" },
        ],
        "ASTM D4018 combines tow preparation, tensile properties and supporting mass/density measurements.",
      ),
      australia: contract(
        [{ code: "ISO 10618 or ASTM D4018", title: "Contract-adopted tow qualification" }],
        "No general AS carbon-tow specification. Do not compare supplier values generated by different specimen preparation methods as if equivalent.",
      ),
      canada: contract(
        [{ code: "ISO 10618 or ASTM D4018", title: "Contract-adopted tow qualification" }],
        "No general CSA carbon-tow specification. CSA S807/S808 may govern a finished civil FRP product, not the raw tow by itself.",
      ),
    },
  },
  {
    id: "epoxy-resin",
    family: "Raw materials",
    name: "Epoxy resin",
    qualifier: "Base resin, hardener and formulated system",
    buyerCheck:
      "Chemical base, epoxy equivalent, viscosity, mix ratio, pot life, cure schedule, Tg, exotherm, moisture and cured-system properties.",
    regions: {
      europe: direct(
        [
          { code: "ISO 3673-1:1996", title: "Epoxy-resin designation" },
          { code: "ISO 3001:1999", title: "Epoxy equivalent" },
        ],
        "These identify and test the base material; a composite order must also qualify the hardener, mix and cured laminate.",
      ),
      unitedStates: direct(
        [
          { code: "ASTM D1763-00(2021)", title: "Epoxy resins" },
          { code: "ASTM D1652-11(2019)", title: "Epoxy content" },
          { code: "ASTM D4142-89(2022)", title: "Guide for testing epoxy resins" },
        ],
        "ASTM D1763 covers un-hardened reactive epoxy resins; formulated infusion, pultrusion or adhesive systems need their own limits.",
      ),
      australia: contract(
        [{ code: "ISO 3673-1 / ISO 3001 or ASTM D1763", title: "Contract-adopted resin basis" }],
        "No single general AS specification for all composite epoxy systems. SDS obligations and application-specific structural/fire requirements are additional.",
      ),
      canada: contract(
        [{ code: "ISO 3673-1 / ISO 3001 or ASTM D1763", title: "Contract-adopted resin basis" }],
        "No single general CSA specification for all composite epoxy systems. Finished civil strengthening systems may additionally fall under CSA S808.",
      ),
    },
  },
  {
    id: "polyurethane-resin",
    family: "Raw materials",
    name: "Polyurethane resin",
    qualifier: "Polyol, isocyanate and pultrusion/RTM system",
    buyerCheck:
      "Isocyanate content, hydroxyl number, water, acidity, viscosity, component ratio, reactivity, cure, Tg and moisture sensitivity.",
    regions: {
      europe: direct(
        [
          { code: "ISO 14896:2009", title: "Isocyanate content of polyurethane raw materials" },
          { code: "ISO 14900:2023", title: "Hydroxyl number of polyols" },
          { code: "ISO 14897:2023", title: "Water content of polyols" },
        ],
        "These are constituent test methods, not a universal finished polyurethane-composite performance specification.",
      ),
      unitedStates: direct(
        [
          { code: "ASTM D5155-25", title: "Isocyanate content of aromatic isocyanates" },
          { code: "ASTM D4274-23", title: "Hydroxyl numbers of polyols" },
          { code: "ASTM D4672-24", title: "Water content of polyols" },
        ],
        "Match each method to the supplied component and state the formulated-system processing and cured-property limits separately.",
      ),
      australia: contract(
        [{ code: "ISO 14896 / ISO 14900 or ASTM D5155/D4274", title: "Contract-adopted constituent tests" }],
        "No general AS polyurethane-composite resin specification. Hazardous-chemical, transport and workplace controls remain separate.",
      ),
      canada: contract(
        [{ code: "ISO 14896 / ISO 14900 or ASTM D5155/D4274", title: "Contract-adopted constituent tests" }],
        "No general CSA polyurethane-composite resin specification. Canadian chemical/SDS obligations and the finished-product code must also be met.",
      ),
    },
  },
];

export const INTERNATIONAL_STANDARDS_SOURCES = [
  {
    label: "ISO/TC 61/SC 13 — composites and reinforcement fibres catalogue",
    href: "https://www.iso.org/committee/49462/x/catalogue/",
  },
  {
    label: "ASTM — composite standards catalogue",
    href: "https://store.astm.org/products-services/standards-and-publications/standards/composite-standards.html",
  },
  {
    label: "ASTM — plastics standards catalogue",
    href: "https://store.astm.org/products-services/standards-and-publications/standards/plastics-standards.html",
  },
  {
    label: "Standards Australia — official standards catalogue",
    href: "https://www.standards.org.au/search-for-a-standard",
  },
  {
    label: "Austroads ATS 5880 — fibre-reinforced polymer bridge members",
    href: "https://austroads.gov.au/__data/assets/pdf_file/0030/748650/ATS-5880_Fibre_Reinforced_Polymer_Bridge_Members.pdf",
  },
  {
    label: "Australian Building Codes Board — plastic pipe product schedule",
    href: "https://www.abcb.gov.au/schedule-products-pipes-plastic",
  },
  {
    label: "CSA Group — codes and standards for Canadian infrastructure",
    href: "https://www.csagroup.org/wp-content/uploads/CSAGroupCodesandStandardsforCanadianInfrastructure_Accessible-FINAL-rev.pdf",
  },
  {
    label: "IEC 61212-3-1 — industrial rigid round laminated rolled tubes",
    href: "https://webstore.iec.ch/en/publication/4923",
  },
] as const;
