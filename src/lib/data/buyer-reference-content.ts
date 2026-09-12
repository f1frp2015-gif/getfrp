export const BUYER_REFERENCE_UPDATED = "2026-09-12";

export type BuyerReference = {
  answer: string;
  table: { caption: string; headers: string[]; rows: string[][] };
  sections: Array<{ heading: string; body: string }>;
  faqs: Array<{ question: string; answer: string }>;
  sources: Array<{ title: string; url: string; scope: string }>;
};

const gratingSource = {
  title: "Strongwell: molded and pultruded grating",
  url: "https://www.strongwell.com/products/grating/",
  scope: "Manufacturer reference for construction and fabrication differences; its product approvals do not apply to other suppliers.",
};
const tradeSource = {
  title: "ICC: Incoterms 2020",
  url: "https://iccwbo.org/business-solutions/incoterms-rules/incoterms-2020/",
  scope: "Delivery responsibilities and the need to state a named place with the chosen trade term; not a freight or duty quotation.",
};
const qualitySource = {
  title: "ISO: ISO 9000 family and quality management",
  url: "https://www.iso.org/standards/popular/iso-9000-family",
  scope: "Management-system context; a company certificate does not supply an order-specific product test result.",
};

// Independent editorial answers. Sources support the stated technical context;
// checklists and comparison workflows are GetFRP recommendations, not quotations.
export const BUYER_REFERENCES: Record<string, BuyerReference> = {
  "frp-grating-price-china": {
    answer: "A useful China FRP grating price needs a defined panel, resin, surface, quantity and delivery scope. GetFRP does not currently publish a verified transaction-price series. Use this cost guide and the RFQ worksheet to obtain comparable supplier quotations rather than treating an unscoped price per square metre as a market benchmark.",
    table: {
      caption: "FRP grating quotation comparison worksheet",
      headers: ["Cost item", "Specify before quotation", "Compare in supplier replies"],
      rows: [
        ["Base panel", "Process, resin grade, depth, mesh and usable dimensions", "Price per panel and usable area; currency and validity"],
        ["Fabrication", "Cut plan, openings, edge sealing and tolerances", "Cutting charge, scrap responsibility and finished quantity"],
        ["Surface and hardware", "Grit, colour, covers, clips and fasteners", "Included quantities and separately priced accessories"],
        ["Evidence", "Required load, fire and inspection documents", "Existing report scope versus additional testing cost"],
        ["Packing and delivery", "Package dimensions, destination and named trade term", "Packing, freight and destination exclusions"],
      ],
    },
    sections: [
      { heading: "Compare the cost of usable flooring", body: "Ask each bidder to quote the same finished cut plan. Divide the quoted panel and fabrication cost by the accepted usable area, not by the area of stock panels purchased. Keep clips, supports and installation in separate rows. This exposes a quote that looks inexpensive only because cutting waste or hardware has been left out. Record the panel orientation so the cost comparison remains tied to the load layout." },
      { heading: "Build an auditable delivered-cost calculation", body: "Use a worksheet with product, fabrication, packing, inspection, transport and destination charges. Mark each row as included, excluded or to be quoted to avoid double counting. Request freight against package dimensions and weight, not just product weight. Ask a broker to confirm applicable import charges for the actual shipment; a sourcing article cannot establish a universal landed price." },
      { heading: "What qualifies as a publishable price sample?", body: "A future GetFRP price observation must identify its quotation date, anonymized source reference, product construction, quantity, currency, unit, named delivery term and exclusions. Supplier quotations and completed transactions must be labeled separately. Until comparable samples exist, this page remains a cost guide. Download the blank RFQ worksheet from the grating directory and return it with the current drawing revision." },
    ],
    faqs: [
      { question: "Does GetFRP publish today's China FRP grating price?", answer: "No verified daily or transaction-price series is published here. Request a dated quotation against your specification and quantity." },
      { question: "Can I compare a panel price with a price per square metre?", answer: "Only after calculating the same usable finished area and reconciling fabrication, hardware, packing and delivery scope." },
    ],
    sources: [tradeSource, gratingSource],
  },
  "frp-grating-vs-molded-grating": {
    answer: "Both molded and pultruded grating are FRP products. Molded mesh and assembled pultruded bearing bars have different load paths and cutting constraints. Select from construction-specific load tables for the actual span, openings and exposure; the process name alone cannot establish capacity, fire performance or installed cost.",
    table: {
      caption: "Molded versus pultruded grating: questions for the designer and supplier",
      headers: ["Decision", "Molded mesh", "Pultruded bearing bars"],
      rows: [
        ["Load direction", "Check the mesh construction and directional ratings", "Identify bearing-bar direction and support layout"],
        ["Openings", "Review residual mesh and edge support", "Check interrupted bearing bars and required framing"],
        ["Resin and surface", "Specify the complete panel construction", "Specify bars, joints, resin and surface together"],
        ["Acceptance", "Request the offered panel's load and fire evidence", "Request the offered bar assembly's load and fire evidence"],
      ],
    },
    sections: [
      { heading: "Start with a support and opening drawing", body: "Mark every support, removable section, penetration and concentrated load on the plan. Ask bidders to identify the load-bearing direction and unsupported edges. Require a revised drawing when a proposed substitution changes the framing. A panel that can be cut to the requested outline still needs an acceptable load path after those cuts." },
      { heading: "Use a common acceptance basis", body: "Provide the designer's load cases and deflection limits to both bidders. Compare the offered panel's documented response at that span rather than ranking generic tensile strengths. State the required fire, slip and chemical-exposure evidence separately. Product-specific manufacturer literature can explain construction, but an approval for one manufacturer's panel is not transferable to a different panel." },
      { heading: "Compare installed scope before choosing", body: "Ask for a finished panel schedule, clip quantities, edge treatment, supports and packing. Review field-cutting instructions and replacement access. A project may use different constructions in different areas; document the decision by location so purchasing cannot combine distinct panels into one unspecified line item." },
    ],
    faqs: [
      { question: "Is molded grating different from FRP grating?", answer: "Molded grating is one form of FRP grating. The useful comparison is molded mesh versus pultruded-bar construction." },
      { question: "Which type supports a longer span?", answer: "Compare the offered products' load and deflection tables at your design conditions. There is no project-independent allowable span for either process." },
    ],
    sources: [gratingSource],
  },
  "verify-supplier": {
    answer: "Verify a China FRP supplier by reconciling the legal seller, production site, manufacturing responsibility and product evidence. Keep company identity, management-system certification and approval for your specific order as separate decisions. A directory badge can help discovery but does not close those checks.",
    table: {
      caption: "Supplier verification evidence register",
      headers: ["Check", "Evidence to request", "Action if unresolved"],
      rows: [
        ["Counterparty", "Registered name, address and contracting entity", "Resolve identity differences before commercial approval"],
        ["Production", "Site, process flow and subcontracted operations", "Arrange a scoped capability review"],
        ["Certification", "Complete document, issuer, scope and validity", "Verify through the issuer rather than a logo image"],
        ["Product", "Offered model, drawing revision and matching test records", "Request missing evidence or qualified testing"],
        ["Shipment", "Batch identity, inspection results and packing record", "Resolve nonconformities before release"],
      ],
    },
    sections: [
      { heading: "Name the parties before evaluating the factory", body: "Record the seller, manufacturer and exporter in separate fields. An exporter may coordinate a legitimate order, but a factory photograph does not establish which party owes the buyer performance. Ask who owns the tooling, controls subcontractors and handles a rejected batch. Reconcile names across the offer, contract and supporting documents." },
      { heading: "Trace each claim to its source", body: "For each material claim, retain the document URL or reference, issuing organization, date, product scope and an open-action field. Visit official issuer channels when checking certification. GetFRP's public profiles attribute company statements; buyers should not interpret those statements as independent measurement results. Request original documents when a public summary is incomplete." },
      { heading: "Turn the review into a release decision", body: "Maintain a short register of accepted evidence, deviations and unresolved questions. Assign an owner and due stage to every open item: before quotation approval, sample approval or shipment. A representative sample and an agreed inspection record give the order a concrete acceptance basis. Record the reason for rejection or conditional approval so the next order does not repeat the same uncertainty." },
    ],
    faqs: [
      { question: "Does ISO 9001 prove the offered FRP panel meets my specification?", answer: "No. Review the management-system scope separately from product test evidence and the offered model's acceptance criteria." },
      { question: "Can an unclaimed directory profile be a real company?", answer: "Yes. Claim status concerns control of the GetFRP profile. Company existence, manufacturing capability and order approval require their own evidence." },
    ],
    sources: [qualitySource],
  },
  "carbon-fiber-vs-fiberglass": {
    answer: "Choose carbon fiber or fiberglass against the finished component's requirements, not a generic fiber-strength ranking. Grade, reinforcement direction, resin, manufacturing route and joint design determine what a supplier can substantiate. Compare the proposed laminates or profiles under the same test conditions before approving a substitution.",
    table: {
      caption: "Carbon fiber and fiberglass: a component-level comparison brief",
      headers: ["Selection question", "Carbon-fiber proposal", "Glass-fiber proposal"],
      rows: [
        ["Material identity", "Specify carbon grade and tow or fabric", "Specify glass grade, sizing and reinforcement format"],
        ["Stiffness and mass", "Ask for directional component data", "Ask for the same geometry or an explicitly redesigned part"],
        ["Electrical requirement", "Check conductivity and isolation at interfaces", "Require finished-part insulation evidence where needed"],
        ["Manufacturing", "Confirm layup, cure and quality controls", "Confirm reinforcement placement, cure and quality controls"],
        ["Commercial scope", "Separate material, tooling, scrap and inspection", "Compare the same accepted part and order quantity"],
      ],
    },
    sections: [
      { heading: "Separate fiber data from laminate data", body: "Toray publishes distinct carbon-fiber grades and modulus families. That grade-level information is useful for specifying reinforcement, but it is not the allowable property of a finished laminate. Request the supplier's reinforcement schedule, resin and tested specimen configuration. Compare measurements taken in the direction that matters to the component." },
      { heading: "Evaluate the joint and service environment", body: "Ask the designer to review how loads enter the part through bolts, bonded joints and supports. Include electrical isolation, moisture, temperature and contact materials in the comparison brief. A material change can alter the connection details even if the external dimensions remain unchanged. Obtain a documented disposition for those interfaces before purchasing a replacement material." },
      { heading: "Ask for two controlled proposals", body: "Give both bidders the same functional requirements and quantity. Allow each to propose a suitable construction, but require drawings, finished mass, qualification scope, production method and tooling cost. Evaluate the accepted component cost instead of comparing fiber price alone. Use a representative trial part to resolve fit, finish and inspection questions before committing to production." },
    ],
    faqs: [
      { question: "Can carbon-fiber data be used to design a fiberglass replacement?", answer: "No. Obtain data for the proposed glass reinforcement, resin and construction, then have the component and connections checked." },
      { question: "What should a material comparison quote include?", answer: "The component drawing, reinforcement specification, qualification evidence, finished mass, tooling scope, quantity and delivery assumptions." },
    ],
    sources: [{ title: "Toray: carbon-fiber grades and technical resources", url: "https://www.toraycma.com/products/carbon-fiber/", scope: "Carbon-fiber grade distinctions; not finished-part design allowables." }],
  },
  "frp-vs-steel-grating": {
    answer: "Compare FRP and steel grating as installed access systems. The decision includes support layout, load and deflection, corrosion exposure, fire requirements, handling and maintenance. Neither a panel's mass nor its purchase price alone establishes the better option for a specific walkway.",
    table: {
      caption: "FRP versus steel grating: project comparison register",
      headers: ["Decision", "FRP proposal", "Steel proposal"],
      rows: [
        ["Structural acceptance", "Construction-specific load and deflection table", "Section and support-specific load and deflection table"],
        ["Exposure", "Resin and surface selected for the actual medium", "Steel grade and protection system selected for exposure"],
        ["Fire", "Offered construction's required fire evidence", "Assembly performance against the project requirement"],
        ["Maintenance", "Inspection, damage and replacement plan", "Inspection, corrosion protection and replacement plan"],
        ["Installed cost", "Panels, supports, clips, fabrication and handling", "Panels, supports, fixings, fabrication and handling"],
      ],
    },
    sections: [
      { heading: "Approve a replacement layout, not just a panel", body: "For a retrofit, survey support spacing, bearing length, removable sections and access constraints. Ask the designer to evaluate the complete replacement assembly. Document changes to fixing details or support steel in the quotation. Do not purchase a nominally matching panel depth as evidence of structural equivalence." },
      { heading: "Make lifecycle assumptions visible", body: "Create separate rows for installation, planned inspections, surface treatment, repairs and replacement access. Set the comparison period and maintenance assumptions before calculating totals. Record which costs come from quotations and which are planning assumptions. A claimed maintenance saving is not meaningful without exposure conditions and an explicit inspection plan." },
      { heading: "Use a location-specific decision record", body: "For each walkway zone, state the controlling issue, such as access for replacement, corrosive splash or a required fire assessment. Attach the relevant drawing and evidence. Compare both options against that same issue. The selected material can differ across one facility, so preserve zone identifiers in the order schedule." },
    ],
    faqs: [
      { question: "Is FRP always cheaper than steel grating?", answer: "No. Compare the complete installed scope and documented maintenance assumptions for the actual site." },
      { question: "Can steel grating be replaced with FRP of the same depth?", answer: "Depth alone is insufficient. The designer must check the offered construction, span, loads, deflection, supports and connections." },
    ],
    sources: [gratingSource],
  },
  "composite-materials-market-size": {
    answer: "Composite market estimates are comparable only when geography, material coverage, year and measurement basis match. AVK's March 2025 report gives European composites production of 2.416 million tonnes for 2024, down 5.6%. This is a scoped historical production figure, not a current global revenue estimate or a measure of GetFRP's supplier network.",
    table: {
      caption: "A sourced historical market observation and its limits",
      headers: ["Field", "Recorded value", "Interpretation"],
      rows: [
        ["Publisher", "AVK; report hosted by EuCIA", "Industry-association source"],
        ["Publication / reference year", "March 2025 / 2024", "Publication date differs from the measured year"],
        ["Geography / measure", "Europe / composites production volume", "Not global demand or sales revenue"],
        ["Volume / annual change", "2.416 million tonnes / −5.6%", "Historical observation from report pages 5 and 8"],
        ["Coverage", "See report section 2 and material breakdowns", "Preserve thermoset, thermoplastic and reinforcement boundaries"],
      ],
    },
    sections: [
      { heading: "Read the scope before using the headline", body: "Keep the source's definition alongside the figure in presentations and spreadsheets. A production series cannot be relabeled as consumption, and a regional volume cannot establish a worldwide revenue opportunity. Where a report includes upstream materials and another includes finished components, do not add them without assessing double counting." },
      { heading: "Build a market evidence ledger", body: "Record publisher, document title, page, reference year, publication date, geography, included materials, measurement unit and forecast status. Preserve original units before converting. A revision should remain distinguishable from a newly measured year. This lets colleagues reproduce the comparison and identify conflicting definitions rather than averaging incompatible reports." },
      { heading: "Translate market context into a sourcing decision", body: "For procurement, use broad market data to frame questions about capacity and supplier continuity. Then obtain product-specific evidence from candidate factories. GetFRP directory counts describe reviewed records in our platform; they are not an industry census, production-capacity estimate or market-share denominator. Avoid using them to calculate a national supplier market share." },
    ],
    faqs: [
      { question: "Is the figure on this page the 2026 global composites market size?", answer: "No. The cited observation is European production in 2024, published by AVK in March 2025. Its date and scope are retained explicitly." },
      { question: "Can GetFRP supplier counts measure market share?", answer: "No. Directory coverage is a count of platform records, not a complete market census or a measure of production or revenue." },
    ],
    sources: [{ title: "AVK: European composites market 2024, March 2025, pp. 5–8", url: "https://eucia.eu/wp-content/uploads/2025/09/AVK_MarktReport_2025.pdf", scope: "European production volume, annual change and market boundaries for the historical observation above." }],
  },
  "epoxy-vs-vinyl-ester-resin": {
    answer: "Choose a specific epoxy or vinyl ester system against exposure, temperature, processing and qualification requirements. A resin family name cannot establish chemical resistance or finished-laminate performance. Request the grade's technical data and a written recommendation covering the medium, concentration, temperature and proposed construction.",
    table: {
      caption: "Epoxy versus vinyl ester: the supplier response matrix",
      headers: ["Requirement", "Epoxy submission", "Vinyl ester submission"],
      rows: [
        ["System identity", "Resin and hardener grades; prescribed mix ratio", "Resin grade and prescribed cure package"],
        ["Process fit", "Viscosity, working window and cure schedule", "Viscosity, gel window and cure schedule"],
        ["Chemical service", "Grade-specific recommendation for exposure", "Grade-specific recommendation for exposure"],
        ["Construction", "Reinforcement, bond interfaces and cure evidence", "Reinforcement, corrosion barrier and cure evidence"],
        ["Release evidence", "Approved laminate tests and batch documents", "Approved laminate tests and batch documents"],
      ],
    },
    sections: [
      { heading: "Specify the exposure as an operating envelope", body: "Provide the fluid composition, concentration range, normal and upset temperatures, cleaning cycle and expected contact duration. The Derakane selection guide distinguishes resin grades and chemical-service conditions. Use such a guide as a screening reference, then obtain a current written recommendation for the actual duty and laminate. Do not transfer a chart entry to an unspecified resin from another manufacturer." },
      { heading: "Qualify the process as well as the chemistry", body: "Ask the fabricator to describe how mixing, reinforcement wet-out, cure and any post-cure will be controlled. Record storage limits and the manufacturer's instructions for the complete system. Agree which production records and acceptance measurements must accompany each batch. Substitution of a hardener, accelerator, filler or reinforcement requires review of the approved construction." },
      { heading: "Keep trial approval tied to the offered grade", body: "Review representative laminates or parts made with the proposed production method. Separate appearance and dimensional approval from the required chemical, mechanical or bond evidence. The purchase order should identify the approved system and notification requirements for changes. If the evidence does not cover a controlling condition, record that gap and obtain the necessary technical evaluation before approval." },
    ],
    faqs: [
      { question: "Is vinyl ester always more chemically resistant than epoxy?", answer: "A family-wide ranking is insufficient. Evaluate the specific resin grade, fluid, concentration, temperature and laminate construction." },
      { question: "Can a resin data sheet prove a finished tank is suitable?", answer: "No. The laminate, fabrication, joints, cure, design conditions and acceptance evidence must also match the service." },
    ],
    sources: [{ title: "Derakane: resin selection guide for chemical resistance", url: "https://www.ineos.com/globalassets/ineos-group/businesses/ineos-composites/markets/corrosion/derakane-resin-selection-guide.pdf", scope: "Grade- and exposure-specific selection context; current manufacturer confirmation remains necessary." }],
  },
};
