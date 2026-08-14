import type { SupplierListing } from "@/lib/db/schema";

export const SUPPLIER_SEO_MIN_WORDS = 1200;
export const SUPPLIER_SEO_MAX_WORDS = 1800;

type DetailItem = {
  title: string;
  body: string;
};

type ApplicationSignal = {
  pattern: RegExp;
  title: string;
  body: (name: string) => string;
  categories?: string[];
  excludedCategories?: string[];
};

type CategoryPlaybook = {
  label: string;
  audience: string;
  applicationFallbacks: Array<{ title: string; body: string }>;
  qualificationChecks: string[];
  supplementalGuidance: string[];
};

export type SupplierSeoBrief = {
  pageTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: string;
  positioning: string;
  topicLabel: string;
  overview: string[];
  productNotes: DetailItem[];
  capabilityNotes: DetailItem[];
  applicationNotes: DetailItem[];
  qualificationChecks: string[];
  evidenceNotes: string[];
  rfqChecklist: string[];
  supplementalGuidance: string[];
  estimatedPageWordCount: number;
};

const CATEGORY_PLAYBOOKS: Record<string, CategoryPlaybook> = {
  manufacturer: {
    label: "composite product manufacturer",
    audience:
      "engineering and procurement teams comparing a finished FRP or composite component against a controlled drawing, service condition and inspection plan",
    applicationFallbacks: [
      {
        title: "Engineered composite components",
        body:
          "The published product scope can support an initial discussion for engineered composite components. Buyers should identify the governing drawing, laminate or material definition, load and environment, dimensional tolerance, finish and inspection method before treating a catalog item as a production match.",
      },
      {
        title: "Industrial replacement and corrosion control",
        body:
          "FRP products are often considered when corrosion, electrical isolation, low maintenance or weight matters. Those advantages depend on the actual resin, reinforcement, construction and connection details, so the service chemistry and design basis must be confirmed for the offered product rather than assumed from the FRP label.",
      },
      {
        title: "Custom and repeat production",
        body:
          "A buyer evaluating repeat production should separate tooling, first-article approval and recurring manufacturing. Ask which operations are performed at the named site, how drawing revisions are controlled, what constitutes an approved sample and which records remain traceable to each shipment.",
      },
    ],
    qualificationChecks: [
      "Freeze the drawing revision, material system, critical dimensions and acceptance tests before comparing quotations.",
      "Identify the actual production site and distinguish in-house manufacturing from subcontracted tooling, finishing, testing or assembly.",
      "Request a representative sample or first article made with the proposed production material and process.",
      "Tie mechanical, fire, corrosion or electrical claims to the offered construction, thickness and test specimen.",
      "Define visual limits, repair rules, traceability and the inspection sampling plan in measurable terms.",
      "Review export packing, loading support, moisture protection and handling for the actual part geometry.",
    ],
    supplementalGuidance: [
      "Composite products that look similar can use different reinforcement orientations, resin systems, fillers, veils and cure schedules. A useful comparison therefore records the construction behind each quoted property and separates typical catalog values from guaranteed acceptance values. If a supplier proposes an alternative construction, the deviation should be visible in the quotation and supported by a new technical review rather than accepted as an equivalent by name alone.",
      "First-article approval should reproduce the intended production route. Record dimensions, mass, appearance, material batch, process settings that affect quality and the results of agreed tests. Keep the signed sample or inspection record under revision control so later shipments are compared with the approved baseline. For custom parts, clarify ownership and storage of molds, dies, gauges and inspection fixtures before paying tooling charges.",
      "Delivered cost includes more than ex-works price. Secondary machining, inserts, assembly, protective film, crating, inland transport, inspection and rejected-part replacement can change the commercial ranking of a shortlist. Ask each supplier to quote the same supply boundary and Incoterm, then normalize the offer against usable delivered quantity rather than nominal kilograms or square metres.",
    ],
  },
  fiber: {
    label: "composite reinforcement supplier",
    audience:
      "materials engineers and converters evaluating reinforcement form, sizing compatibility, package quality and downstream process stability",
    applicationFallbacks: [
      {
        title: "Thermoset composite reinforcement",
        body:
          "The listed reinforcement products may be relevant to thermoset laminating, pultrusion, winding or molding programs. Buyers should confirm fiber type, sizing chemistry, tex or areal weight, roll or package format, moisture control and compatibility with the intended resin and line conditions.",
      },
      {
        title: "Thermoplastic and converted materials",
        body:
          "Where chopped, continuous or fabric reinforcement is proposed for thermoplastic conversion, the qualification should address fiber length retention, dispersion, surface treatment, resin compatibility and the property basis for the final compound or part. A reinforcement datasheet alone does not validate the downstream molding process.",
      },
      {
        title: "Structural and performance-critical laminates",
        body:
          "For structural laminates, buyers need the reinforcement architecture behind the claimed performance. Request orientation, stitching or weave, splice rules, width and weight tolerance, handling instructions and laminate test evidence that represents the intended resin, fiber volume and conditioning.",
      },
    ],
    qualificationChecks: [
      "Specify fiber chemistry, grade, sizing, linear density or areal weight and the intended resin and process.",
      "Confirm roll, bobbin, pallet or tow package dimensions against the buyer's creel and handling equipment.",
      "Set tolerance and splice limits for width, weight, moisture, fuzz, broken ends and visual defects.",
      "Request a production-lot sample and run it under representative process speed, temperature and tension.",
      "Link certificates of analysis to lot numbers and define retention samples and complaint traceability.",
      "Review moisture barrier, edge protection, pallet loading and storage limits for the transport route.",
    ],
    supplementalGuidance: [
      "Reinforcement qualification should include processing behavior, not only finished-laminate strength. Fuzz, wet-out, tension stability, drape, stitching and package build can determine line uptime and scrap. A disciplined trial records machine settings, resin batch, environmental conditions and observed defects so a successful sample can become a repeatable incoming specification rather than an informal preference.",
      "Published tensile strength, modulus and elongation may refer to a fiber strand, a fabric method or a cured laminate. Those values are not interchangeable. Buyers should record the test method, specimen preparation, conditioning, direction and statistical basis, then identify which values are guaranteed on the certificate of analysis and which are informational design inputs.",
      "Supply continuity matters for high-volume reinforcement. Confirm grade-change notifications, sizing-change control, plant allocation, minimum production run, safety stock and the process for approving an alternate manufacturing line. Packaging should preserve tension and prevent moisture or edge damage throughout inland transport, ocean freight and warehouse storage.",
    ],
  },
  resin: {
    label: "composite resin supplier",
    audience:
      "formulators, processors and procurement teams comparing chemistry, processing window, cured performance and regulatory documentation",
    applicationFallbacks: [
      {
        title: "Pultrusion, winding and closed-mold processing",
        body:
          "The resin portfolio may be relevant to continuous or closed-mold composite processing. Qualification should cover viscosity, mix ratio where applicable, gel or reaction profile, cure conditions, exotherm, reinforcement wet-out and the cured properties required by the actual line and section thickness.",
      },
      {
        title: "Corrosion and environmental resistance",
        body:
          "A resin described for corrosion-resistant FRP still needs a service-specific review. State the chemicals, concentrations, temperature, exposure cycle, liner construction and required life, then request the supplier's compatibility basis and any limitations rather than relying on a generic corrosion-resistance claim.",
      },
      {
        title: "Surface, fire and specialty performance",
        body:
          "Fire, smoke, weathering, color and surface-performance claims depend on the complete formulation and laminate. Buyers should confirm additives, pigments, fillers, thickness and test construction, and should check whether a published report represents the exact resin grade and production site offered in the quotation.",
      },
    ],
    qualificationChecks: [
      "State the process, reinforcement, part thickness, cure equipment and target production cycle.",
      "Request current technical and safety data sheets, mix ratio, viscosity window, storage life and handling controls.",
      "Define cured mechanical, thermal, fire, chemical or surface properties with test methods and conditioning.",
      "Run a representative process trial and record resin temperature, mix accuracy, gel profile, cure and observed defects.",
      "Confirm batch certificate fields, shelf-life policy, change notification and complaint sample retention.",
      "Review dangerous-goods status, packaging, temperature exposure and destination regulatory documentation.",
    ],
    supplementalGuidance: [
      "Resin comparisons should be made at the processing condition that the factory can control. A low initial viscosity is not useful if pot life, exotherm or cure creates voids and distortion in the intended thickness. Record material temperature, ambient conditions, mix accuracy, gel behavior and post-cure so the material trial can be reproduced during production and investigated if performance changes.",
      "Cured-property tables require context. Neat-resin values, cast plaques and reinforced laminates answer different questions, while conditioning and cure can materially change results. Buyers should identify the relevant construction and test method, distinguish typical from guaranteed values, and agree which certificate fields or periodic tests will demonstrate ongoing conformity after approval.",
      "Shelf life and logistics are part of resin quality. Confirm manufacturing date, storage temperature, inhibitor or settling behavior, drum or IBC closure, dangerous-goods classification and the procedure for material exposed outside its permitted range. The purchase order should also define change notification for formulation, raw-material source and manufacturing site.",
    ],
  },
  additive: {
    label: "composite additive and functional-filler supplier",
    audience:
      "formulators, compounders and procurement teams comparing additive chemistry, dispersion, process compatibility, finished-material performance and regulatory evidence",
    applicationFallbacks: [
      {
        title: "Flame-retardant composite and polymer formulations",
        body:
          "A flame-retardant additive must be qualified in the actual polymer, reinforcement, filler package, thickness and process. Buyers should define the target fire, smoke, electrical, mechanical and aging requirements and request current evidence for the complete tested formulation rather than treating an additive description as finished-product compliance.",
      },
      {
        title: "Functional fillers and surface-modified minerals",
        body:
          "Mineral additives can affect viscosity, dispersion, surface finish, density and mechanical performance as well as cost. Confirm chemistry, impurity limits, particle-size distribution, surface treatment, moisture, loading and compatibility with the intended resin, hardener, reinforcement and processing window.",
      },
      {
        title: "Compounding and masterbatch programs",
        body:
          "For masterbatch or compound supply, define carrier, active content, let-down ratio, pellet or powder form, dispersion, color, volatiles and batch tolerance. A representative processing trial should reproduce the intended equipment and record both process stability and finished-part properties.",
      },
    ],
    qualificationChecks: [
      "Specify additive chemistry, grade, active content, particle size, surface treatment and intended polymer or resin system.",
      "Request current TDS, SDS, lot-linked COA fields, impurity limits and the test method behind each guaranteed value.",
      "Define loading, mixing sequence, dispersion equipment, temperature and the processing behavior required at production scale.",
      "Test the final formulation at the intended thickness, reinforcement level, cure or molding cycle and conditioning.",
      "Tie fire, smoke, electrical, environmental or regulatory claims to the exact formulation and current report scope.",
      "Confirm change control, shelf life, moisture-barrier packing, MOQ, lead time and destination-market documentation.",
    ],
    supplementalGuidance: [
      "Additive performance is formulation-dependent. A published flame rating, mechanical value or environmental claim may represent one polymer, loading and specimen thickness and should not be transferred to another system without testing. Record the complete trial formulation, process settings and conditioning so the approved result can be reproduced and investigated after any change.",
      "Powders and mineral fillers require incoming controls beyond a trade name. Particle-size distribution, agglomeration, moisture, impurities, whiteness or color, bulk density and surface treatment can affect feeding, dispersion and finished properties. Agree which fields appear on every batch certificate and which are monitored periodically.",
      "Regulatory declarations need current composition and supply-chain identity. Ask the supplier to identify restricted substances, intentional additives, impurities and applicable inventory status, and to notify the buyer before changes to chemistry, treatment, raw-material source or production site. Finished-product compliance remains the responsibility of the complete formulation and use case.",
    ],
  },
  distributor: {
    label: "specialty composite-material distributor",
    audience:
      "materials engineers and procurement teams qualifying brand authorization, chain of custody, grade identity, storage, documentation and application support for distributed composite materials",
    applicationFallbacks: [
      {
        title: "Authorized and traceable material supply",
        body:
          "A distributor should identify the legal manufacturer, exact grade, origin, current authorization, inventory owner and chain of custody for every offer. Buyers should require producer-linked TDS, SDS and batch evidence and verify that storage, shelf life and transport remained within the manufacturer's limits.",
      },
      {
        title: "Aerospace and performance-critical material programs",
        body:
          "Performance-critical supply requires more than a catalog match. Confirm whether the distributor and its site fall within the required quality-system scope, how counterfeit risk is controlled, which records trace the shipment to the producer and whether the exact product has the application-specific approval or test evidence required by the buyer.",
      },
      {
        title: "Application trials and controlled repeat supply",
        body:
          "Technical support can help shortlist a material, but the buyer should approve a producer grade through a representative trial and then control the grade, manufacturing site, revision and supply channel. The purchase order should require notification before any substitution, reformulation, authorization or source change.",
      },
    ],
    qualificationChecks: [
      "Identify the brand, legal manufacturer, production site, exact grade, revision and country of origin for every quoted line.",
      "Obtain current producer authorization or traceable channel evidence, including territory and product scope where relevant.",
      "Request producer TDS and SDS, a lot-linked COA or conformity record, manufacture date, shelf life and storage history.",
      "Define counterfeit-prevention, incoming verification, segregation, relabeling and chain-of-custody controls.",
      "Tie every fire, lightning, aerospace, environmental or regulatory claim to the exact product and report scope.",
      "Confirm stock status, minimum pack, MOQ, lead time, transport conditions, Incoterm and change-notification obligations.",
    ],
    supplementalGuidance: [
      "The supplier name on a quotation may differ from the manufacturer named on the datasheet or certificate. Record both legal entities and the role of each party. A useful approval also captures the manufacturer part number, revision, lot format, original label and authorized supply route so incoming inspection can detect substitutions or gray-market material.",
      "Shelf-life materials require an unbroken storage history. Request manufacture and expiry dates, temperature limits, dangerous-goods classification, original packaging and any remaining-life requirement at delivery. If repacking or relabeling is permitted, define who performs it, how original lot identity is preserved and which records accompany each smaller unit.",
      "Distributor quality-system certification and product qualification answer different questions. A management-system certificate can support purchasing and traceability controls, but it does not prove that a coating, mesh, filler or film meets the buyer's final application. Product evidence must still match the manufacturer, grade, construction, test method and intended use.",
    ],
  },
  equipment: {
    label: "composite manufacturing equipment supplier",
    audience:
      "plant owners and process engineers comparing production scope, controls, commissioning responsibility and lifecycle support",
    applicationFallbacks: [
      {
        title: "New composite production lines",
        body:
          "The listed equipment can form part of a new production line, but machine selection should start from the product envelope, material system, throughput, utility and quality requirements. Ask the supplier to define every included station and the responsibility boundary for tooling, controls, guarding and downstream handling.",
      },
      {
        title: "Capacity expansion and process modernization",
        body:
          "For an expansion project, the buyer should document interfaces with existing creels, molds, heaters, cutters, extraction, material handling and plant controls. A factory acceptance test should use representative materials and demonstrate the agreed output and quality measures rather than only showing that individual motors run.",
      },
      {
        title: "Commissioning and long-term support",
        body:
          "Equipment value depends on installation, training, spares and troubleshooting after shipment. Confirm remote and on-site support, language, response time, software access, electrical documentation, consumables and the list of critical components that can be sourced in the destination market.",
      },
    ],
    qualificationChecks: [
      "Issue a user-requirement specification covering product range, materials, speed, quality, utilities and safety rules.",
      "Obtain a line layout, foundation loads, electrical and pneumatic schedule, control architecture and interface list.",
      "Define factory and site acceptance tests with representative material, measurable output and product-quality criteria.",
      "Confirm the supply boundary for dies, creels, heating, cutting, extraction, guarding, handling and inspection equipment.",
      "Agree installation, commissioning, operator training, documentation language and remote-access security.",
      "Price critical spares, consumables, warranty exclusions and service response for the intended operating location.",
    ],
    supplementalGuidance: [
      "An equipment quotation should be checked against a written user-requirement specification. Product dimensions, material variants, speed, uptime assumptions, staffing, utilities and acceptance criteria need explicit values. Without that baseline, suppliers may quote different line boundaries and automation levels, making the lowest headline price impossible to compare with the required output.",
      "Factory acceptance testing should exercise the integrated sequence with representative material where practical. Record speed, temperatures, forces, alarms, dimensions, scrap and changeover steps. Open items should have owners and deadlines before shipment. Site acceptance should then confirm utilities, guarding, training and sustained production under the buyer's conditions.",
      "Lifecycle risk includes proprietary controls, unavailable spares and incomplete documentation. Request electrical drawings, program backups, parameter lists, maintenance schedules, wear-part lists and a support matrix. Clarify ownership of machine software and remote access, and identify components that can be sourced locally without invalidating the warranty.",
    ],
  },
  mold: {
    label: "composite tooling and die supplier",
    audience:
      "process engineers and manufacturers qualifying production tooling by drawing control, material, thermal design, tolerance and trial evidence",
    applicationFallbacks: [
      {
        title: "New profile or component tooling",
        body:
          "The tooling scope may support a new composite product, but the buyer should release a controlled product drawing together with material, process, shrinkage, surface and throughput assumptions. Tool geometry alone cannot be approved without understanding how the proposed material and line will behave.",
      },
      {
        title: "Tool replacement and productivity improvement",
        body:
          "A replacement tool should be evaluated against the existing defect and maintenance history. Record wear, heat distribution, release, pulling force or cycle behavior, then define which improvement the new tool must demonstrate during the trial rather than treating a dimensional copy as the complete requirement.",
      },
      {
        title: "Tool trials and production transfer",
        body:
          "Tool acceptance should use the intended resin, reinforcement and machine conditions. Buyers should agree trial length, warm-up, sample locations, dimensional checks, surface criteria and responsibility for adjustments before shipping the tool or releasing it for sustained production.",
      },
    ],
    qualificationChecks: [
      "Release controlled product and interface drawings with datums, shrinkage assumptions and critical tolerances.",
      "Confirm tool steel or mold material, heat treatment, surface treatment, hardness and traceable material records.",
      "Review thermal zones, sensors, heaters, cooling, runners or flow paths as applicable to the process.",
      "Define trial material, machine, run length, sample plan and dimensional or surface acceptance criteria.",
      "Agree ownership, drawing confidentiality, permitted duplicates, maintenance instructions and spare components.",
      "Specify preservation, corrosion protection, transport supports, lifting points and recommissioning after shipment.",
    ],
    supplementalGuidance: [
      "Tooling quality is a combination of geometry, material, thermal behavior and process interaction. The sourcing file should contain the released drawing, tool material and treatment, inspection report and trial record. Critical datums need an agreed measuring method so the buyer and toolmaker do not approve different interpretations of the same nominal dimensions.",
      "A useful trial reproduces the intended production material and operating window. Warm-up, steady-state run length, temperatures, force or pressure, cycle, sample positions and observed defects should be recorded. If the tool is adjusted, the final geometry and trial result must be linked to the revision that will be shipped and maintained.",
      "Commercial terms should address design ownership, confidentiality, duplicate tools, maintenance, storage and end-of-life disposition. Spare heaters, sensors, inserts or wear components may be more important than a small tooling-price difference. Packing must protect precision surfaces and provide lifting and recommissioning instructions for the destination plant.",
    ],
  },
  tooling: {
    label: "composite tooling and inspection supplier",
    audience:
      "quality and production teams assessing tooling, test equipment, calibration, software and service support",
    applicationFallbacks: [
      {
        title: "Production and inspection tooling",
        body:
          "The listed tooling or inspection capability can support composite production when its measurement range, fixture interface and environmental limits match the process. Buyers should define the characteristic being controlled and the decision rule before selecting equipment from a catalog description.",
      },
      {
        title: "Quality-system integration",
        body:
          "Inspection equipment should produce records that fit the buyer's traceability and calibration system. Confirm data format, user access, reference standards, verification intervals and the method used to handle out-of-tolerance equipment or suspect product.",
      },
      {
        title: "Training and technical support",
        body:
          "Specialist tooling and NDT methods depend on operator competence. The sourcing scope should identify training, written procedures, reference samples, software updates, calibration support and the response available when results are ambiguous or equipment is unavailable.",
      },
    ],
    qualificationChecks: [
      "Define the measured characteristic, range, resolution, accuracy and decision rule required by the quality plan.",
      "Confirm fixtures, probes, reference standards, software, data export and plant-system interfaces.",
      "Request calibration or verification evidence traceable to an accepted reference and define renewal responsibility.",
      "Run an acceptance study on representative composite samples, including known defects or boundary conditions.",
      "Agree operator training, procedures, access levels, software updates and technical-support response.",
      "Price consumables, wear parts, reference samples and backup arrangements over the expected service life.",
    ],
    supplementalGuidance: [
      "Measurement equipment should be selected from the quality decision it must support. Range and resolution alone do not establish fitness: fixtures, surface condition, anisotropy, operator technique and environmental effects can dominate composite measurements. An acceptance study should use representative parts and include results near the agreed specification limits.",
      "Calibration records need a clear link to the instrument serial number, configuration and reference standard. Buyers should define verification frequency, intermediate checks and the action taken when equipment is found out of tolerance. Digital results should preserve raw data, method revision, operator and part traceability rather than only a pass or fail label.",
      "Long-term use depends on training, software and consumables. Confirm licenses, update policy, export formats, probe or reference-block availability and support response. For critical inspection, document a backup route so a single unavailable instrument does not stop production or encourage unapproved inspection shortcuts.",
    ],
  },
  service: {
    label: "composite testing and technical service provider",
    audience:
      "quality, engineering and procurement teams evaluating method scope, competence, reporting and acceptance in the destination market",
    applicationFallbacks: [
      {
        title: "Material and product qualification",
        body:
          "The published service scope may support qualification testing when the exact method, specimen, conditioning and reporting requirements are agreed. Buyers should verify that the facility and any accreditation scope cover the requested method and material rather than a neighboring test category.",
      },
      {
        title: "Failure analysis and process improvement",
        body:
          "For a failure investigation, define the question, sample history and chain of custody before testing. A useful proposal distinguishes observation from interpretation, reserves material for confirmatory work and explains the limitations of the selected methods.",
      },
      {
        title: "Market and customer documentation",
        body:
          "Reports intended for customer approval or regulatory submission must use the correct legal names, standards, laboratory status and product identification. Confirm language, witness requirements, report format and recognition in the destination market before samples are prepared.",
      },
    ],
    qualificationChecks: [
      "Specify the standard edition, specimen orientation, conditioning, sampling source and required reporting fields.",
      "Verify accreditation or approval scope for the exact method and facility where the work will be performed.",
      "Agree sample identification, chain of custody, retained material and the handling of damaged or invalid specimens.",
      "Clarify subcontracted tests, witness access, raw-data availability and report-review responsibilities.",
      "Confirm turnaround, retest rules, uncertainty where relevant and the treatment of deviations from the method.",
      "Check that the final report will be accepted by the customer, authority or certification route that requested it.",
    ],
    supplementalGuidance: [
      "A test name is not a complete scope. The standard edition, specimen geometry, orientation, preparation, conditioning, speed or environment and reporting basis all affect interpretation. Buyers should issue a test request that identifies the product batch and decision to be made, then review any laboratory deviation before work continues.",
      "Accreditation should be checked for the facility, method and range involved; a general logo is not enough. The proposal should disclose subcontracted work and clarify whether results, raw data, photographs and uncertainty information will be available. Chain of custody is especially important when results may support a claim or supplier dispute.",
      "Qualification reports need stable product identity. Record supplier, production site, grade, construction, dimensions, batch and sample selection so later production can be linked to what was tested. If material or process changes, define whether engineering review, partial retest or complete requalification is required.",
    ],
  },
};

const DEFAULT_PLAYBOOK = CATEGORY_PLAYBOOKS.manufacturer;

const TOPIC_LABEL_RULES: Array<{ pattern: RegExp; label: string }> = [
  { pattern: /polyurethane.*(?:window|door)|(?:window|door).*polyurethane/i, label: "Polyurethane Window Profiles" },
  { pattern: /pultrusion (?:molds?|moulds?|dies?)/i, label: "FRP Pultrusion Dies" },
  { pattern: /pultrusion machine/i, label: "Pultrusion Machines" },
  { pattern: /pipe winding production line/i, label: "FRP Pipe Winding Lines" },
  { pattern: /polyurethane pultrusion resin/i, label: "Polyurethane Pultrusion Resins" },
  { pattern: /polyurethane composite resin/i, label: "Polyurethane Composite Resins" },
  { pattern: /unsaturated polyester resin/i, label: "Unsaturated Polyester Resins" },
  { pattern: /wind-energy epoxy|wind energy epoxy/i, label: "Wind Energy Epoxy Resins" },
  { pattern: /epoxy resin.*filament|filament.*epoxy resin/i, label: "Filament Winding Epoxy Resins" },
  { pattern: /long-(?:glass|carbon).*fiber|long fiber thermoplastic/i, label: "Long Fiber Thermoplastic Compounds" },
  { pattern: /skylight|corrugated roofing/i, label: "FRP Skylight Roofing Sheets" },
  { pattern: /frp wall panels?|fiberglass wall panels?|grp wall panels?/i, label: "FRP Wall Panels" },
  { pattern: /embossed frp|frp decorative panel/i, label: "Embossed FRP Panels" },
  { pattern: /frp corrugated (?:sheets?|panels?)/i, label: "FRP Corrugated Sheets" },
  { pattern: /sandwich panel/i, label: "FRP Sandwich Panels" },
  { pattern: /flat sheet.*(?:rv|truck|vehicle)/i, label: "FRP Flat Sheets for Transport" },
  { pattern: /flat sheet/i, label: "FRP Flat Sheets" },
  { pattern: /continuous.*(?:mortar|pressure).*pipe|grp.*pressure pipe/i, label: "Continuous-Wound GRP Pipe" },
  { pattern: /continuous-wound.*pipe/i, label: "Continuous-Wound FRP Pipe" },
  { pattern: /membrane.*(?:pressure vessel|housing)|(?:pressure vessel|housing).*membrane/i, label: "FRP Membrane Housings" },
  { pattern: /(?:multiaxial|biaxial).*warp-knitting|warp-knitting.*(?:glass|carbon|composite)/i, label: "Composite Warp-Knitting Machines" },
  { pattern: /structural adhesives?.*(?:composite|high-end equipment)|(?:composite|high-end equipment).*structural adhesives?/i, label: "Industrial Structural Adhesives" },
  { pattern: /composite compression molds?|SMC.*(?:molds?|moulds?)/i, label: "Composite Compression Molds" },
  { pattern: /composite (?:mold|mould) release agents?|(?:mold|mould) release agents?.*composite/i, label: "Composite Mold Release Agents" },
  { pattern: /industrial CT inspection|X-ray digital radiography/i, label: "Industrial X-ray and CT Inspection Systems" },
  { pattern: /frp\s*\/\s*grp pipe|frp pipe.*fitting/i, label: "FRP Pipe and Fittings" },
  { pattern: /phenolic grating/i, label: "Phenolic and FRP Grating" },
  { pattern: /grating/i, label: "FRP Grating" },
  { pattern: /pultruded.*structural profile/i, label: "Pultruded FRP Structural Profiles" },
  { pattern: /pultruded.*profile|pultrusion profile/i, label: "Pultruded FRP Profiles" },
  { pattern: /composite rebar|fiber.*rebar|frp rebar/i, label: "Composite Rebar" },
  { pattern: /basalt fiber.*(?:yarn|roving)|(?:yarn|roving).*basalt fiber/i, label: "Basalt Fiber Yarn and Roving" },
  { pattern: /syt45/i, label: "SYT45 Carbon Fiber" },
  { pattern: /carbon-fiber automotive|automotive.*carbon-fiber/i, label: "Carbon Fiber Automotive Parts" },
  { pattern: /carbon-fiber.*phone|aramid-fiber phone/i, label: "Carbon Fiber Phone Cases" },
  { pattern: /unidirectional.*biaxial|triaxial|quadraxial/i, label: "Multiaxial Fiberglass Fabrics" },
  { pattern: /fiberglass tissue|glass-fiber mat/i, label: "Fiberglass Tissue and Mat" },
  { pattern: /high-silica cloth/i, label: "Fiberglass and High-Silica Fabrics" },
  { pattern: /direct roving/i, label: "Fiberglass Direct Roving" },
  { pattern: /fiberglass rovings?.*chopped|chopped strands/i, label: "Fiberglass Roving and Chopped Strands" },
  { pattern: /e-glass.*(?:roving|yarn)/i, label: "E-Glass Roving and Yarn" },
  { pattern: /fiberglass yarn|reinforcement fabrics/i, label: "Fiberglass Reinforcements" },
  { pattern: /fiberglass fabrics?/i, label: "Fiberglass Fabrics" },
  { pattern: /carbon-fiber fabrics?|carbon fiber fabrics?/i, label: "Carbon Fiber Reinforcement Products" },
];

const APPLICATION_SIGNALS: ApplicationSignal[] = [
  {
    pattern: /membrane.*(?:pressure vessel|housing)|(?:pressure vessel|housing).*membrane|reverse osmosis|\bRO\b.*membrane/i,
    title: "RO, ultrafiltration and desalination pressure-vessel systems",
    body: (name) =>
      `${name}: Membrane-housing qualification should lock model, membrane count, port arrangement, pressure, temperature, media, cleaning chemistry, end assembly, seals, supports and cyclic duty. Require design basis, pressure and leak testing, burst and fatigue evidence, material traceability, installation instructions, spares and destination-specific pressure or drinking-water approvals for the exact housing offered.`,
  },
  {
    pattern: /radome|radio-transparent|antenna enclosure/i,
    title: "Communication radomes and radio-transparent structures",
    body: (name) =>
      `${name}: A radome RFQ should define frequency bands, transmission loss, reflection, dielectric properties, antenna clearance, section drawing, material, finish, wind and ice loads, UV and weather exposure, mounting, drainage and dimensional tolerance. Require representative radio-frequency, mechanical and environmental test evidence for the offered construction rather than a generic material statement.`,
  },
  {
    pattern: /utility pole|electrical infrastructure|insulation structure|railway crossarm/i,
    title: "Composite utility and electrical infrastructure",
    body: (name) =>
      `${name}: Utility poles, crossarms and insulation structures need a controlled design basis covering geometry, load cases, deflection, connection details, electrical insulation, tracking and erosion, fire, UV, moisture, temperature, fatigue and installation. Buyers should identify the governing utility or railway specification and require type, routine and lot evidence for the exact product family.`,
  },
  {
    pattern: /flame.?retard|fire.?retard|halogen.?free|low.?smoke/i,
    title: "Flame-retardant composite and polymer formulations",
    body: (name) =>
      `${name}: A flame-retardant additive must be qualified in the actual polymer, reinforcement, filler package, thickness and process. Buyers should define the target fire, smoke, electrical, mechanical and aging requirements and request current evidence for the complete tested formulation rather than treating an additive description as finished-product compliance.`,
    categories: ["additive"],
  },
  {
    pattern: /mineral|magnesium.?hydroxide|functional filler|surface.?modif|powder/i,
    title: "Functional fillers and surface-modified minerals",
    body: (name) =>
      `${name}: Mineral additives can affect viscosity, dispersion, surface finish, density and mechanical performance as well as cost. Confirm chemistry, impurity limits, particle-size distribution, surface treatment, moisture, loading and compatibility with the intended resin, hardener, reinforcement and processing window.`,
    categories: ["additive"],
  },
  {
    pattern: /masterbatch|masterbatches|compound|concentrate/i,
    title: "Compounding and masterbatch programs",
    body: (name) =>
      `${name}: For masterbatch or compound supply, define carrier, active content, let-down ratio, pellet or powder form, dispersion, color, volatiles and batch tolerance. A representative processing trial should reproduce the intended equipment and record both process stability and finished-part properties.`,
    categories: ["additive"],
  },
  {
    pattern: /polyurea|protective coating|waterproof|anticorrosion|anti-corrosion/i,
    title: "Protective coating and surface-treatment formulations",
    body: (name) =>
      `${name}'s coating chemistry should be evaluated as a complete applied system. Define substrate preparation, primer, mix ratio, pot life, film build, cure conditions, adhesion, chemical and weather exposure, repair method and the current test evidence for the proposed formulation and thickness.`,
    categories: ["additive"],
  },
  {
    pattern: /accelerator|promoter|curing agent|peroxide|catalyst|resin/i,
    title: "Composite matrix and process-chemistry programs",
    body: (name) =>
      `${name}'s chemistry portfolio can be evaluated for the named composite process only after the processing window and cured-property basis are aligned. Request current data sheets, grade and site identity, viscosity or mix control, cure and exotherm, storage, batch certificate fields and test evidence based on the intended reinforcement and construction.`,
    categories: ["additive"],
  },
  {
    pattern: /pigment|colorant|colourant|color paste|colour paste/i,
    title: "Composite coloration and pigment-paste programs",
    body: (name) =>
      `${name}'s pigment or color-paste range should be qualified in the actual resin, cure package, thickness and surface process. Define target color and tolerance, dispersion, opacity, weathering, heat and chemical stability, batch controls, approved sample and change-notification requirements.`,
    categories: ["additive"],
  },
  {
    pattern: /release agent|mold release|mould release/i,
    title: "Molding and pultrusion process aids",
    body: (name) =>
      `${name}'s release-agent scope can be screened only against the intended resin, mold surface, temperature and cycle. Buyers should define internal or external use, dosage, application method, buildup and cleaning limits, effects on bonding or coating, trial acceptance and controls for formulation changes.`,
    categories: ["additive"],
  },
  {
    pattern: /window|door|thermal break|building envelope/i,
    title: "Energy-efficient window and building-envelope systems",
    body: (name) =>
      `${name}'s published scope creates a potential fit for window, door or building-envelope programs. Buyers should confirm the exact profile series, section drawing, glazing and hardware configuration, whole-assembly thermal basis, air and water performance, finish, fire claim and the certificate or report that represents the offered system.`,
  },
  {
    pattern: /grating|stair tread|trench cover|platform/i,
    title: "Industrial access, walkway and platform systems",
    body: (name) =>
      `${name}'s listed grating or platform products may be relevant to industrial access systems. Qualification should identify molded or pultruded construction, resin, panel and mesh geometry, surface, support span, load and deflection limit, cut plan, clips, fire or smoke requirement and the test basis behind any published load table.`,
  },
  {
    pattern: /pipe|tank|scrubber|cooling tower|winding/i,
    title: "Corrosion-resistant piping and process equipment",
    body: (name) =>
      `${name}'s public scope suggests a potential route for piping, tanks or corrosion-resistant process equipment. The RFQ should define service chemistry, temperature, pressure or stiffness class, liner, structural wall, joints, supports, nozzles, inspection and transport. Project-specific design and evidence remain necessary before the supplier can be treated as a fit.`,
  },
  {
    pattern: /rebar|anchor|geogrid|concrete/i,
    title: "Concrete reinforcement and civil infrastructure",
    body: (name) =>
      `${name}'s listed reinforcement products may be relevant to corrosion-sensitive concrete or civil works. Buyers should state fiber type, nominal area, guaranteed tensile property, modulus, bond surface, bend geometry, test method, design code, lot traceability and packaging. FRP reinforcement should not be specified or handled as if it were interchangeable with steel.`,
    excludedCategories: ["additive"],
  },
  {
    pattern: /wall panel|hospital|laborator|clean space|food processing/i,
    title: "Hygienic interior wall and ceiling systems",
    body: (name) =>
      `${name}'s published wall-panel scope may be relevant to commercial interiors, food-processing spaces, hospitals, laboratories and other cleanable surfaces. Buyers should define the resin and gel coat, reinforcement construction, thickness and flatness tolerance, joint and trim system, cleaning chemicals, color and texture, fire or hygiene evidence, substrate preparation and installation responsibility for the complete wall or ceiling assembly.`,
  },
  {
    pattern: /refrigerated truck|dry van|\brv\b|vehicle body|bus(?:es)?\b/i,
    title: "Refrigerated truck, dry-van and RV body panels",
    body: (name) =>
      `${name}'s listed transport sheets can be screened for refrigerated trucks, dry vans, RVs, buses or other vehicle bodies. The RFQ should state the skin and core construction, sheet or roll dimensions, surface class, color, UV exposure, adhesive and lamination route, thermal requirement, impact and peel evidence, fabrication details, annual volume and protective packing for cosmetic panels.`,
  },
  {
    pattern: /corrugated.*cooling.?tower|cooling.?tower.*corrugated/i,
    title: "Cooling-tower and industrial corrugated panels",
    body: (name) =>
      `${name}'s corrugated FRP range may support cooling-tower or industrial cladding discussions when the offered profile matches the existing support and fastening layout. Buyers should specify the corrugation geometry, resin and gel coat, thickness, span and load basis, UV and chemical exposure, cut lengths, drilling, edge finish, nesting and transport supports, then request evidence for the exact construction rather than a generic flat-sheet value.`,
  },
  {
    pattern: /carbon.?fiber|basalt|fiberglass|glass.?fiber|fabric|roving|yarn|\bmats?\b|tissue/i,
    title: "Composite reinforcement and laminate production",
    body: (name) =>
      `${name}'s reinforcement range can be screened for laminating, pultrusion, winding, molding or conversion programs. Buyers should confirm grade, sizing, architecture, width, tex or areal weight, package, splice and moisture limits, then run a representative processing trial before approving the material for repeat production.`,
    excludedCategories: ["additive"],
  },
  {
    pattern: /sheet|panel|laminate|sandwich|skin|roof|skylight/i,
    title: "Composite panels, laminates and surface systems",
    body: (name) =>
      `${name}'s listed sheets or panels may suit transport, building or industrial surfaces depending on construction. Qualification should identify the manufacturing process, resin, reinforcement orientation, core where applicable, thickness and flatness tolerance, surface and color standard, UV or fire evidence, fabrication details and packing that protects edges and finish.`,
    excludedCategories: ["additive"],
  },
  {
    pattern: /resin|gelcoat|polyurethane|epoxy|polyester|vinyl ester/i,
    title: "Composite matrix and process-chemistry programs",
    body: (name) =>
      `${name}'s chemistry portfolio can be evaluated for the named composite process only after the processing window and cured-property basis are aligned. Request current data sheets, grade and site identity, viscosity or mix control, cure and exotherm, storage, batch certificate fields and test evidence based on the intended reinforcement and construction.`,
  },
  {
    pattern: /machine|equipment|production line|creel|puller/i,
    title: "Composite manufacturing line investment",
    body: (name) =>
      `${name}'s listed machinery can enter a line comparison when the buyer supplies a written product and process requirement. The proposal should define the complete line boundary, controls, utilities, safety, throughput, acceptance test, installation, training, spares, documentation and the responsibility for proving product quality with representative material.`,
    excludedCategories: ["additive"],
  },
  {
    pattern: /mold|mould|die|tooling/i,
    title: "Composite molds, dies and production tooling",
    body: (name) =>
      `${name}'s tooling scope can be considered for new or replacement production tools. Buyers should release controlled product and interface drawings, material and process assumptions, critical datums, tool material and treatment, heating or flow requirements, trial conditions, acceptance measurements, ownership, maintenance and protected transport.`,
    excludedCategories: ["additive"],
  },
  {
    pattern: /automotive|vehicle|truck|rv/i,
    title: "Automotive and transport composite components",
    body: (name) =>
      `${name}'s product references indicate a possible fit for transport applications. Qualification should address part revision, material and process, appearance class, dimensional capability, inserts and secondary operations, validation plan, change control, annual volume, service-part obligations and packaging that prevents cosmetic or structural damage.`,
    excludedCategories: ["additive"],
  },
  {
    pattern: /\bphone\b|consumer electronics|aramid/i,
    title: "Consumer-electronics composite parts",
    body: (name) =>
      `${name}'s listed products may be relevant to lightweight consumer-electronics parts. Buyers should define cosmetic standards, fiber orientation, resin and coating, radio or thermal requirements, tool and color approval, dimensional gauges, drop or durability tests, assembly interfaces, high-volume process controls and intellectual-property boundaries.`,
    excludedCategories: ["additive"],
  },
];

function normalize(value: string | null | undefined): string {
  return value?.replace(/\s+/g, " ").trim() ?? "";
}

function wordCount(value: string): number {
  return normalize(value) ? normalize(value).split(" ").length : 0;
}

function truncateAtWord(value: string, maxLength: number): string {
  const normalized = normalize(value);
  if (normalized.length <= maxLength) return normalized;
  const clipped = normalized.slice(0, maxLength + 1).replace(/\s+\S*$/, "");
  return `${clipped || normalized.slice(0, maxLength)}…`;
}

function supplierShortName(name: string): string {
  const withoutSuffix = normalize(name)
    .replace(/,?\s+(?:Co\.?[,]?\s*Ltd\.?|Company Limited|Corporation|Group Co\.?[,]?\s*Ltd\.?)$/i, "")
    .trim();
  return truncateAtWord(withoutSuffix || name, 54).replace(/…$/, "");
}

function compactPhrase(value: string, maxLength = 54): string {
  const firstClause = normalize(value).split(/,|\bincluding\b|\btogether with\b/i)[0]?.trim() || value;
  const normalized = normalize(firstClause);
  if (normalized.length <= maxLength) return normalized;
  return normalized.slice(0, maxLength + 1).replace(/\s+\S*$/, "").trim();
}

function topicLabelForProduct(product: string, supplier: SupplierListing): string {
  const matched = TOPIC_LABEL_RULES.find(({ pattern }) => pattern.test(product));
  if (matched) return matched.label;
  const compact = compactPhrase(product, 52);
  return compact || profileCategory(supplier).label;
}

function profileCategory(supplier: SupplierListing): CategoryPlaybook {
  return CATEGORY_PLAYBOOKS[supplier.category ?? ""] ?? DEFAULT_PLAYBOOK;
}

function unique(values: string[]): string[] {
  return Array.from(new Set(values.map(normalize).filter(Boolean)));
}

function productDetail(
  name: string,
  supplierName: string,
  index: number,
  category?: string | null,
): DetailItem {
  if (category === "distributor") {
    const distributorTemplates = [
      `${supplierName} includes this item in its published distribution scope. Ask for the legal manufacturer, current brand authorization or traceable channel evidence, exact grade and revision, country of origin, producer datasheet, lot-linked conformity record, manufacture date, shelf life, storage history and quotation validity.`,
      `For ${name}, convert the catalog description into a distributor-controlled offer. Confirm producer and production site, exact model or grade, stock ownership and location, minimum pack, MOQ, lead time, transport conditions and whether any relabeling, repacking or substitution is proposed.`,
      `This listing is evidence of a published supply scope, not proof of producer approval or application fitness. Ask ${supplierName} to identify the manufacturer, authorization territory and product scope, batch traceability, current TDS and SDS, relevant test evidence and the limits of its technical-support responsibility.`,
      `A comparable RFQ for ${name} should state the application and measurable requirements, then require ${supplierName} to quote the exact producer grade and supply channel. Treat alternatives as separate offers and control any change of brand, formulation, production site, revision or source.`,
    ];
    return { title: name, body: distributorTemplates[index % distributorTemplates.length] };
  }
  const templates = [
    `${supplierName} includes this product in its published supply scope. Treat that listing as a starting point: request the current datasheet or drawing, material and construction, available grades or dimensions, guaranteed properties, production site, quotation revision and evidence that represents the exact item offered.`,
    `For ${name}, buyers should convert the catalog description into an acceptance specification. Confirm standard and custom options, raw-material system, critical tolerances, surface or finish, test basis, sample route, MOQ, lead time and packing. Any alternative proposed by ${supplierName} should be identified explicitly rather than treated as automatically equivalent.`,
    `This product broadens the supplier's public portfolio, but GetFRP does not infer approval from a product name alone. Ask ${supplierName} for the grade or model designation, manufacturing route, current technical file, production and test location, batch traceability and the limits that apply to published performance values.`,
    `A useful RFQ for ${name} should describe the buyer's application without disclosing unnecessary proprietary detail, then state the measurable product requirements. Compare ${supplierName}'s response against the same dimensions, quantity, inspection, documentation, Incoterm and delivery assumptions used for every shortlisted supplier.`,
  ];
  return { title: name, body: templates[index % templates.length] };
}

function capabilityDetail(
  name: string,
  supplierName: string,
  index: number,
  category?: string | null,
): DetailItem {
  if (category === "distributor") {
    const distributorTemplates = [
      `${supplierName} publishes ${name} as part of its service scope. Buyers should confirm the named brands and grades, current authorization or channel evidence, inventory location, storage and handling controls, lot traceability, delivery records and responsibility for any subcontracted logistics or processing.`,
      `The value of ${name} depends on the offered product and the distributor's documented controls. Request a representative order trail from producer or authorized source through receipt, storage and release, together with personnel responsibilities, nonconformance handling and change-notification rules.`,
      `For sourcing purposes, ${name} is a service claim rather than independent proof of product approval. Define the technical question, response owner, producer involvement, sample or trial route, records supplied with the shipment and limitations on recommendations or substitutions.`,
      `Buyers evaluating ${name} should connect the claim to current producer authorization, trained support personnel, controlled product and batch records, suitable storage, a recent representative delivery and a clear escalation route to the legal manufacturer.`,
    ];
    return { title: name, body: distributorTemplates[index % distributorTemplates.length] };
  }
  const templates = [
    `${supplierName} publishes ${name} as part of its capability scope. Buyers should ask which site and equipment perform the work, the practical size or material limits, the normal control records and whether the proposed order uses the same route. Subcontracted stages should be visible in the quality plan.`,
    `The relevance of ${name} depends on the requested product and acceptance criteria. During qualification, request a process flow, critical control points, inspection or test method, operator or equipment qualification where applicable, nonconformance handling and a recent example that represents the offered production route.`,
    `For sourcing purposes, ${name} is a capability signal rather than independent verification. Confirm capacity, tooling or fixture availability, setup and changeover assumptions, lot definition, sample approval and traceability. The quotation should identify any limitation that could affect geometry, performance, appearance or delivery.`,
    `Buyers evaluating ${name} should connect the process claim to evidence: an equipment list, controlled procedure, representative report, production photograph or witnessed sample may each answer a different risk. ${supplierName} should also explain how the result is checked before release and recorded for the shipment.`,
  ];
  return { title: name, body: templates[index % templates.length] };
}

function applicationNotes(supplier: SupplierListing, name: string): DetailItem[] {
  const playbook = profileCategory(supplier);
  if (supplier.category === "equipment" || supplier.category === "distributor") {
    return playbook.applicationFallbacks.slice(0, 3).map((item) => ({
      title: item.title,
      body: `${name}: ${item.body}`,
    }));
  }

  const haystack = [
    ...(supplier.productsEn ?? []),
    ...(supplier.processListEn ?? []),
    ...(supplier.capabilities ?? []),
    supplier.descriptionEn ?? "",
  ].join(" ");
  const matched = APPLICATION_SIGNALS.filter(
    ({ pattern, categories, excludedCategories }) =>
      pattern.test(haystack) &&
      (!categories || categories.includes(supplier.category ?? "")) &&
      !excludedCategories?.includes(supplier.category ?? ""),
  )
    .slice(0, 3)
    .map(({ title, body }) => ({ title, body: body(name) }));
  if (matched.length >= 3) return matched;

  const fallbacks = playbook.applicationFallbacks.map((item) => ({
    title: item.title,
    body: `${name}: ${item.body}`,
  }));
  return uniqueDetailItems([...matched, ...fallbacks]).slice(0, 3);
}

function uniqueDetailItems(items: DetailItem[]): DetailItem[] {
  const seen = new Set<string>();
  return items.filter((item) => {
    const key = item.title.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function evidenceNotes(supplier: SupplierListing, name: string): string[] {
  const catalogs = supplier.ecatalogs ?? [];
  const certifications = supplier.certificationsEn ?? [];
  const reviewed = supplier.profileReviewedAt?.toISOString().slice(0, 10) ?? "not recorded";
  const sourceNames = catalogs.slice(0, 4).map((source) => source.titleEn ?? source.title);
  const sourceSummary = sourceNames.length > 0
    ? `${name}'s source record currently includes ${sourceNames.join(", ")}. These links let a buyer distinguish company-published information from GetFRP's own qualification guidance and return to the original context when a claim changes.`
    : `${name} does not yet have a complete official source set attached to this profile. The page can support discovery, but buyers should not rely on it for approval until the legal identity, official website and product evidence are documented.`;
  const certificationSummary = certifications.length > 0
    ? `The profile lists ${certifications.length} company-published certification or test references. A listing is not the same as validation: request the complete current document, issuer, legal holder, production site, product and grade scope, standard edition, report specimen and validity date before citing it in a project or purchase order.`
    : `No company-level certification is presently listed in the reviewed profile. That does not prove that no document exists, but it means the RFQ should ask for the quality-system certificate and every product-specific test or approval needed by the buyer rather than assuming a certification from market reputation.`;
  return [
    sourceSummary,
    certificationSummary,
    `GetFRP last recorded a public-source review date of ${reviewed}. Public websites and catalogs can change after review, so commercial decisions should use newly downloaded files and direct supplier confirmation. GetFRP's public or claimed status describes profile ownership and identity controls; it does not certify every product statement or predict order performance.`,
  ];
}

function rfqChecklist(supplier: SupplierListing, name: string): string[] {
  const products = supplier.productsEn ?? [];
  const processes = supplier.processListEn ?? [];
  const standards = supplier.standardsSupported ?? [];
  if (supplier.category === "distributor") {
    return [
      `Product definition: identify the requested ${products[0] ?? "product"}, producer, exact grade and revision, dimensions or pack, quantity, application and expected annual demand.`,
      "Performance and approvals: state the required properties, environment, test evidence, customer approvals and regulatory constraints that control acceptance.",
      `Manufacturer and channel: require ${name} to identify the legal manufacturer, production site, country of origin, authorization or traceable supply route and every subcontracted processing or logistics stage.`,
      standards.length > 0
        ? `Standards and evidence: the profile references ${standards.slice(0, 3).join(", ")}; identify the exact edition, product grade, report scope and acceptance values required by the project.`
        : "Standards and evidence: name the required standard edition, test methods, report scope, laboratory or witness expectation and acceptance values.",
      "Quality and traceability: require producer TDS and SDS, lot-linked COA or conformity evidence, manufacture date, shelf life, storage history, incoming checks, segregation and counterfeit controls.",
      "Commercial boundary: request stock status, minimum pack, MOQ, lead time, payment, warranty, Incoterm, export documents, transport conditions and responsibility for damage or expired material.",
      "Change control: require written approval before any change to producer, grade, formulation, production site, authorization, revision, pack, storage route or supply channel.",
    ];
  }
  return [
    `Product definition: identify the requested ${products[0] ?? "product"}, drawing or grade revision, dimensions, material construction, quantity and expected annual demand.`,
    `Performance: state the loads, environment, temperature, chemical, fire, electrical, appearance or service-life requirements that actually control selection.`,
    `Process and source: ask whether ${processes[0] ?? "the proposed manufacturing process"} is performed by ${name} at the named production site and disclose subcontracted stages.`,
    standards.length > 0
      ? `Standards and evidence: the profile references ${standards.slice(0, 3).join(", ")}; identify the exact clauses, test methods, report scope and acceptance values required by the project.`
      : "Standards and evidence: name the required standard edition, test methods, report scope, laboratory or witness expectation and acceptance values.",
    "Quality plan: define the approved sample, incoming-material records, in-process controls, final inspection, sampling level, traceability and treatment of nonconforming product.",
    "Commercial boundary: request tooling or setup, MOQ, lead time, payment, warranty, Incoterm, export documents, packing dimensions and responsibility for transport damage as separate items.",
    "Change control: require written approval before changes to material, formulation, reinforcement, production site, tooling, critical process, specification or certificate status.",
  ];
}

function corpusForCount(supplier: SupplierListing, brief: Omit<SupplierSeoBrief, "estimatedPageWordCount">): string {
  return [
    supplier.descriptionEn,
    supplier.productsServicesSummaryEn,
    ...(supplier.productsEn ?? []),
    ...(supplier.processListEn ?? []),
    ...(supplier.certificationsEn ?? []),
    ...(supplier.ecatalogs ?? []).flatMap((source) => [
      source.titleEn ?? source.title,
      source.descriptionEn ?? source.description,
    ]),
    brief.searchIntent,
    brief.positioning,
    ...brief.overview,
    ...brief.productNotes.flatMap((item) => [item.title, item.body]),
    ...brief.capabilityNotes.flatMap((item) => [item.title, item.body]),
    ...brief.applicationNotes.flatMap((item) => [item.title, item.body]),
    ...brief.qualificationChecks,
    ...brief.evidenceNotes,
    ...brief.rfqChecklist,
    ...brief.supplementalGuidance,
  ].filter(Boolean).join(" ");
}

export function buildSupplierSeoBrief(supplier: SupplierListing): SupplierSeoBrief {
  const name = normalize(supplier.nameEn) || "Composite supplier";
  const shortName = supplierShortName(name);
  const products = unique(supplier.productsEn ?? []);
  const processes = unique(supplier.processListEn ?? []);
  const primaryProduct = products[0] ?? profileCategory(supplier).label;
  const topicLabel = topicLabelForProduct(primaryProduct, supplier);
  const location = normalize(supplier.locationEn) || "China";
  const playbook = profileCategory(supplier);
  const primaryKeyword = `${shortName} ${topicLabel}`;
  const secondaryKeywords = unique([
    ...products.slice(1, 4).map((product) => `${shortName} ${topicLabelForProduct(product, supplier)}`),
    ...processes.slice(0, 2).map((process) => `${shortName} ${compactPhrase(process, 48)}`),
    `${shortName} ${location} supplier`,
    `${shortName} official catalog`,
  ]).slice(0, 8);
  const titleName = supplierShortName(name);
  const titleTopic = compactPhrase(
    topicLabel,
    Math.max(24, 100 - titleName.length - " —  | GetFRP".length),
  );
  const pageTitle = `${titleName} — ${titleTopic} | GetFRP`;
  const metaDescription = truncateAtWord(
    `Source-reviewed ${name} profile for ${primaryProduct}, capabilities, certificates, official catalogs and RFQ qualification in ${location}.`,
    160,
  );
  const capabilityLabel = supplier.category === "distributor"
    ? "distribution, technical-support or coordination services"
    : "manufacturing or support capabilities";
  const overview = [
    `This procurement profile is built for ${playbook.audience}. It organizes ${name}'s published products, processes, certificate references and official sources around the primary topic “${primaryKeyword}.” The objective is to help a buyer decide whether to open a controlled RFQ, not to turn a broad company catalog into an unsupported approval.`,
    `${name} currently lists ${products.length} product or service groups and ${processes.length} ${capabilityLabel} in this reviewed record. The public scope indicates what to investigate, while the buyer remains responsible for drawings, design calculations, standards, current certificates, sample approval and order-specific commercial confirmation. Claims below are attributed to the attached source set unless GetFRP explicitly labels them as qualification guidance.`,
  ];
  const baseBrief: Omit<SupplierSeoBrief, "estimatedPageWordCount"> = {
    pageTitle,
    metaDescription,
    primaryKeyword,
    secondaryKeywords,
    searchIntent: `Evaluate ${name} as a potential ${playbook.label} for ${primaryProduct}, verify the public evidence and prepare a comparable RFQ.`,
    positioning: `${shortName} is presented as a source-reviewed supplier profile centered on ${topicLabel}, with company-published capability separated from buyer-side verification requirements.`,
    topicLabel,
    overview,
    productNotes: products.slice(0, 4).map((product, index) =>
      productDetail(product, name, index, supplier.category)),
    capabilityNotes: processes.slice(0, 4).map((process, index) =>
      capabilityDetail(process, name, index, supplier.category)),
    applicationNotes: applicationNotes(supplier, name),
    qualificationChecks: playbook.qualificationChecks,
    evidenceNotes: evidenceNotes(supplier, name),
    rfqChecklist: rfqChecklist(supplier, name),
    supplementalGuidance: [],
  };

  for (const guidance of playbook.supplementalGuidance) {
    if (wordCount(corpusForCount(supplier, baseBrief)) >= SUPPLIER_SEO_MIN_WORDS) break;
    baseBrief.supplementalGuidance.push(guidance);
  }

  while (
    wordCount(corpusForCount(supplier, baseBrief)) > SUPPLIER_SEO_MAX_WORDS &&
    (baseBrief.productNotes.length > 3 || baseBrief.capabilityNotes.length > 3)
  ) {
    if (baseBrief.productNotes.length > 3) {
      baseBrief.productNotes.pop();
    } else {
      baseBrief.capabilityNotes.pop();
    }
  }

  return {
    ...baseBrief,
    estimatedPageWordCount: wordCount(corpusForCount(supplier, baseBrief)),
  };
}
