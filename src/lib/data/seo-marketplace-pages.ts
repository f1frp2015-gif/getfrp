import { INDUSTRY_APPLICATION_PAGES } from "./industry-application-pages";
import { getProductSearchIntent } from "./product-search-intents";

export type MarketplacePage = {
  slug: string;
  path: string;
  title: string;
  h1: string;
  eyebrow: string;
  summary: string;
  paragraphs: string[];
  category?: string;
  material?: string;
  process?: string;
  application?: string;
  standard?: string;
  supplierTerms: string[];
  subcategories: Array<{ label: string; href: string; note: string }>;
  related: Array<{ label: string; href: string }>;
  guideHref: string;
  faqs: Array<{ question: string; answer: string }>;
};

const RELATED_FALLBACKS = [
  { label: "FRP grating manufacturers", href: "/products/frp-grating" },
  { label: "Pultruded FRP profiles", href: "/products/pultruded-profiles" },
  { label: "FRP pipe suppliers", href: "/products/frp-pipe" },
  { label: "FRP rebar manufacturers", href: "/products/frp-rebar" },
  { label: "Pultrusion manufacturers", href: "/manufacturing/pultrusion" },
  { label: "Wastewater FRP suppliers", href: "/applications/wastewater-treatment" },
  { label: "EN 13706 suppliers", href: "/standards/en-13706" },
  { label: "Verify a China supplier", href: "/source-from-china/verify-supplier" },
  { label: "FRP weight calculator", href: "/tools/frp-weight-calculator" },
  { label: "Post an FRP RFQ", href: "/rfq" },
] as const;

export function relatedSearches(page: MarketplacePage) {
  const seen = new Set<string>();
  return [...page.related, ...RELATED_FALLBACKS]
    .filter((item) => item.href !== page.path && !seen.has(item.href) && seen.add(item.href))
    .slice(0, 10);
}

function breadcrumbSegmentLabel(segment: string) {
  const known: Record<string, string> = {
    applications: "Applications",
    manufacturing: "Processes",
    products: "Products",
    standards: "Standards",
    "wastewater-treatment": "Wastewater Treatment",
    "en-13706": "EN 13706",
  };
  return known[segment] ?? segment.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

export function marketplaceBreadcrumbTrail(page: MarketplacePage) {
  const segments = page.path.split("/").filter(Boolean);
  const trail = [{ name: "Home", href: "/" }];
  segments.slice(0, -1).forEach((segment, index) => {
    trail.push({ name: breadcrumbSegmentLabel(segment), href: `/${segments.slice(0, index + 1).join("/")}` });
  });
  trail.push({ name: page.h1, href: page.path });
  return trail;
}

function faqSet(subject: string, dimension: string) {
  return [
    { question: `What should buyers verify before contacting a ${subject} factory?`, answer: `Define the required ${dimension} first. Then compare the published product scope, process records, current certificates, export experience and ability to quote against one controlled specification. A verified company identity does not replace product testing.` },
    { question: "Which records make competing quotations comparable?", answer: "Request the offered grade, drawing or datasheet revision, material and process declaration, applicable test reports, inspection plan, MOQ, lead time and packing proposal. Any mismatch between the certificate holder, seller and factory should be explained." },
    { question: "Does ISO 9001 prove product compliance?", answer: "No. ISO 9001 covers a quality-management system. Product compliance depends on evidence for the offered construction, materials, dimensions and test methods, including the report scope and validity." },
    { question: "Why might this page show no supplier cards?", answer: "The directory uses reviewed public profiles and approved supplier submissions. If fewer than three credible records match, it points buyers to adjacent categories instead of padding the page with unverified companies or products." },
    { question: "Can one RFQ be used to compare several manufacturers?", answer: "Yes. Keep the drawings, standards, quantity, destination and evidence requirements identical. That exposes technical deviations and keeps the commercial comparison on the same basis." },
  ];
}

function page(input: Omit<MarketplacePage, "faqs"> & { faqDimension: string; faqs?: Array<{ question: string; answer: string }> }): MarketplacePage {
  const { faqDimension, faqs, ...rest } = input;
  const faqSubject = rest.process
    ?? (rest.application ? `${rest.application} FRP` : undefined)
    ?? rest.h1
      .replace(/^China\s+/i, "")
      .replace(/\s+(?:manufacturers|suppliers)(?:\s+in\s+China)?$/i, "")
      .toLowerCase();
  return { ...rest, faqs: faqs ?? faqSet(faqSubject, faqDimension) };
}

const PRODUCT_ROUTE_CONTEXT: Record<
  string,
  {
    process: { label: string; href: string; note: string };
    application: { label: string; href: string; note: string };
    evidence: { label: string; href: string; note: string };
  }
> = {
  "carbon-fiber": {
    process: { label: "Prepreg & autoclave", href: "/manufacturing/prepreg-autoclave", note: "Review storage, lay-up and cure controls." },
    application: { label: "Carbon fiber prepreg", href: "/products/carbon-fiber-prepreg", note: "Compare a controlled intermediate material." },
    evidence: { label: "Carbon fiber vs fiberglass", href: "/insights/carbon-fiber-vs-fiberglass", note: "Separate stiffness, cost and design intent." },
  },
  "carbon-fiber-prepreg": {
    process: { label: "Prepreg & autoclave", href: "/manufacturing/prepreg-autoclave", note: "Control cold-chain, out-time and cure." },
    application: { label: "Automated fiber placement", href: "/manufacturing/automated-fiber-placement", note: "Review an automated conversion route." },
    evidence: { label: "Carbon fiber materials", href: "/products/carbon-fiber", note: "Return to the reinforcement family." },
  },
  "frp-cable-tray": {
    process: { label: "Pultrusion", href: "/manufacturing/pultrusion", note: "Review profile and secondary-fabrication controls." },
    application: { label: "Electrical applications", href: "/applications/electrical", note: "Define dielectric, fire and load requirements." },
    evidence: { label: "FRP engineering & QA", href: "/services/frp-engineering-qa", note: "Build a product-specific acceptance plan." },
  },
  "frp-tank": {
    process: { label: "Filament winding", href: "/manufacturing/filament-winding", note: "Review winding, liner and cure controls." },
    application: { label: "Chemical processing", href: "/applications/chemical-processing", note: "Define media, temperature and code basis." },
    evidence: { label: "FRP pipe systems", href: "/products/frp-pipe", note: "Coordinate piping and vessel interfaces." },
  },
  "frp-corrosion-equipment": {
    process: { label: "Hand lay-up", href: "/manufacturing/hand-layup", note: "Review large-part laminate and cure controls." },
    application: { label: "Chemical processing", href: "/applications/chemical-processing", note: "Set the corrosion and operating envelope." },
    evidence: { label: "FRP tanks", href: "/products/frp-tank", note: "Compare related corrosion vessels." },
  },
  "frp-manhole-cover": {
    process: { label: "SMC molding", href: "/manufacturing/smc-molding", note: "Review compound, charge and press controls." },
    application: { label: "Construction", href: "/applications/construction", note: "Define load class and interface conditions." },
    evidence: { label: "SMC & BMC", href: "/products/smc-bmc", note: "Compare the material and molding route." },
  },
  "frp-handrail": {
    process: { label: "Pultrusion", href: "/manufacturing/pultrusion", note: "Review profile and fabrication controls." },
    application: { label: "Wastewater treatment", href: "/applications/wastewater-treatment", note: "Define corrosion, load and installation." },
    evidence: { label: "FRP grating", href: "/products/frp-grating", note: "Coordinate an industrial access system." },
  },
  "frp-ladder": {
    process: { label: "Pultrusion", href: "/manufacturing/pultrusion", note: "Review rail, rung and joint controls." },
    application: { label: "Electrical applications", href: "/applications/electrical", note: "Define insulation, fire and access loads." },
    evidence: { label: "FRP handrail", href: "/products/frp-handrail", note: "Coordinate guard and access systems." },
  },
  "fiberglass-panel": {
    process: { label: "Continuous lamination", href: "/manufacturing/continuous-lamination", note: "Review reinforcement, cure and line controls." },
    application: { label: "Construction", href: "/applications/construction", note: "Define panel, surface and interface loads." },
    evidence: { label: "Fiberglass sheet", href: "/products/fiberglass-sheet", note: "Compare solid industrial laminates." },
  },
  "composite-core-materials": {
    process: { label: "Vacuum infusion", href: "/manufacturing/vacuum-infusion", note: "Review resin flow and core integration." },
    application: { label: "Marine applications", href: "/applications/marine", note: "Define density, shear and water exposure." },
    evidence: { label: "PVC foam board", href: "/products/pvc-foam-board", note: "Compare structural PVC foam core grades." },
  },
  "frp-enclosure": {
    process: { label: "SMC molding", href: "/manufacturing/smc-molding", note: "Review compound and repeat molding controls." },
    application: { label: "Electrical applications", href: "/applications/electrical", note: "Define fire, ingress and dielectric performance." },
    evidence: { label: "SMC & BMC", href: "/products/smc-bmc", note: "Compare compound and molded-part evidence." },
  },
  "recycled-composites": {
    process: { label: "Thermoplastic forming", href: "/manufacturing/thermoplastic-forming", note: "Review feedstock and forming controls." },
    application: { label: "Composite 3D printing", href: "/manufacturing/composite-3d-printing", note: "Compare a recovered-material conversion route." },
    evidence: { label: "Fiberglass suppliers", href: "/products/fiber-glass", note: "Compare virgin reinforcement formats." },
  },
  "aramid-fiber": {
    process: { label: "Prepreg & autoclave", href: "/manufacturing/prepreg-autoclave", note: "Review autoclave and compression molding for ballistic composites." },
    application: { label: "Defence & ballistics", href: "/applications/defence-security-ballistics", note: "Compare impact and ballistic armor requirements." },
    evidence: { label: "Fiberglass materials", href: "/products/fiber-glass", note: "Compare standard glass and aramid reinforcement." },
  },
  "thermoset-resins": {
    process: { label: "Resin transfer molding", href: "/manufacturing/rtm", note: "Compare resin viscosity and mold injection kinetics." },
    application: { label: "Chemical processing", href: "/applications/chemical-processing", note: "Select corrosion-grade vinyl ester and epoxy resins." },
    evidence: { label: "Gelcoat & composite resins", href: "/products/resin-gelcoat", note: "Compare formulated gelcoats and core resins." },
  },
  "pvc-foam-board": {
    process: { label: "Vacuum infusion", href: "/manufacturing/vacuum-infusion", note: "Evaluate scored, grooved, and perforated foam sheet flow." },
    application: { label: "Marine shipbuilding", href: "/applications/marine", note: "Review closed-cell water absorption and Lloyd's approval." },
    evidence: { label: "Composite core materials", href: "/products/composite-core-materials", note: "Compare PVC with PET, balsa, and honeycomb cores." },
  },
  "fiberglass-tape": {
    process: { label: "Hand lay-up", href: "/manufacturing/hand-layup", note: "Review wet-out and overlap techniques for joint taping." },
    application: { label: "Electrical applications", href: "/applications/electrical", note: "Review dielectric woven tape for motor and coil banding." },
    evidence: { label: "Fiberglass materials", href: "/products/fiber-glass", note: "Compare tape with roving, chopped strand mat, and fabrics." },
  },
  "frp-duct": {
    process: { label: "Filament winding", href: "/manufacturing/filament-winding", note: "Review duct winding and corrosion liner controls." },
    application: { label: "Chemical processing", href: "/applications/chemical-processing", note: "Define exhaust media and temperature." },
    evidence: { label: "FRP pipe systems", href: "/products/frp-pipe", note: "Coordinate industrial piping and ductwork." },
  },
  "fiberglass-molds": {
    process: { label: "RTM", href: "/manufacturing/rtm", note: "Review closed-mold and infusion tooling requirements." },
    application: { label: "Automotive & transportation", href: "/applications/automotive-road-transportation", note: "Define mold tolerances and cycle life." },
    evidence: { label: "SMC molding", href: "/manufacturing/smc-molding", note: "Compare tooling and production routes." },
  },
  "chopper-gun": {
    process: { label: "Spray-up", href: "/manufacturing/spray-up", note: "Review open-mold deposition and glass-resin ratios." },
    application: { label: "Marine applications", href: "/applications/marine", note: "Review chopper gun hull and deck lay-ups." },
    evidence: { label: "Glass fiber", href: "/products/fiber-glass", note: "Confirm roving and gun chopper compatibility." },
  },
  "gelcoat-spray-gun": {
    process: { label: "Spray-up", href: "/manufacturing/spray-up", note: "Review fluid delivery and spray controls." },
    application: { label: "Bath & RV applications", href: "/applications/bath-pools-recreational-vehicles", note: "Review cosmetic gelcoat surface criteria." },
    evidence: { label: "Resin & gelcoat", href: "/products/resin-gelcoat", note: "Confirm viscosity and promoter compatibility." },
  },
  "curing-oven": {
    process: { label: "Prepreg & autoclave", href: "/manufacturing/prepreg-autoclave", note: "Review cure recipes and thermal uniformity." },
    application: { label: "Aerospace applications", href: "/applications/aerospace-space", note: "Define AMS 2750 pyrometry standards." },
    evidence: { label: "Thermoset resins", href: "/products/thermoset-resins", note: "Review resin Tg and post-cure kinetics." },
  },
};

type AdditionalProductConfig = {
  slug: string;
  name: string;
  subject: string;
  keyword: string;
  summary: string;
  customTitle?: string;
  customH1?: string;
  supplierTerms?: string[];
  paragraphs?: string[];
  related?: Array<{ label: string; href: string }>;
};

const ADDITIONAL_PRODUCT_DEFINITIONS: AdditionalProductConfig[] = [
  { slug: "carbon-fiber", name: "Carbon Fiber", subject: "carbon fiber products", keyword: "carbon fiber", summary: "PAN-based carbon fiber, woven fabrics, prepreg and pultruded carbon profiles for lightweight structural, industrial and sporting applications." },
  { slug: "carbon-fiber-prepreg", name: "Carbon Fiber Prepreg", subject: "carbon fiber prepreg materials", keyword: "carbon fiber prepreg", summary: "Carbon-fiber prepreg systems compared by fiber grade, resin content, areal weight, tack, cure cycle, storage life and qualification evidence." },
  { slug: "frp-cable-tray", name: "FRP Cable Tray", subject: "FRP cable tray", keyword: "cable tray", summary: "Pultruded and molded cable-management systems for corrosive, electrical, rail, marine and process-plant installations." },
  {
    slug: "frp-tank",
    name: "FRP Tank",
    subject: "FRP storage tanks and process vessels",
    keyword: "frp tank",
    summary: "Filament-wound and contact-molded FRP tanks and vessels with ASTM D3299, ASME RTP-1, BS 4994 design codes, chemical barrier liners, and nozzle schedules.",
    customTitle: "FRP Storage Tanks & Chemical Process Vessels | GetFRP",
    customH1: "FRP Storage Tanks, Process Vessels & Scrubbers",
    supplierTerms: ["tank", "vessel", "storage tank", "chemical tank", "frp tank", "frp vessel"],
    paragraphs: [
      "Industrial FRP tanks and pressure-rated vessels provide corrosion-proof containment for aggressive chemical acids, caustic alkalis, brine, wastewater, and ultra-pure fluids. Chinese vessel manufacturers fabricate vertical cylindrical tanks, horizontal saddle-mounted vessels, rectangular dip tanks, and gas scrubbers utilizing automated helical filament winding and contact molding routes.",
      "Engineering a compliant composite tank begins with the chemical barrier: an inner corrosion liner typically comprised of a 0.25 mm to 0.5 mm resin-rich veil ply followed by a 2.5 mm to 3.0 mm chopped strand mat layer backing, cured with premium vinyl ester or bisphenol polyester. The external structural wall incorporates continuous filament-wound roving oriented at 54.75 degrees for balanced hoop and axial stresses, or alternating hoop and cross-helical layers designed per ASTM D3299, ASME RTP-1, or BS 4994.",
      "International procurement teams must specify nozzle schedules, blind flanges, gusset supports, lifting lugs, hold-down clips, and exterior UV-protective coatings with paraffin additives. Quality assurance packages must include Barcol hardness verification (ASTM D2583), acetone sensitivity cure checks, spark testing of thermoplastic dual liners, hydrostatic leak hold testing for 24 hours, and mill inspection certificates.",
    ],
    related: [
      { label: "FRP pipe systems", href: "/products/frp-pipe" },
      { label: "FRP ductwork", href: "/products/frp-duct" },
      { label: "Chemical processing FRP", href: "/applications/chemical-processing" },
      { label: "Filament winding process", href: "/manufacturing/filament-winding" },
      { label: "Resin & gelcoat materials", href: "/products/resin-gelcoat" },
      { label: "FRP grating walkways", href: "/products/frp-grating" },
    ],
  },
  { slug: "frp-corrosion-equipment", name: "FRP Corrosion Equipment", subject: "FRP corrosion equipment", keyword: "scrubber", summary: "Corrosion-resistant FRP ducts, scrubbers, stacks and process vessels specified around media, temperature, resin system, laminate design and inspection code." },
  {
    slug: "frp-manhole-cover",
    name: "FRP Manhole Cover",
    subject: "FRP and composite manhole covers",
    keyword: "frp manhole cover",
    summary: "Compression-molded composite covers and frames for municipal, utility and industrial access points with controlled load class and surface finish.",
    customTitle: "FRP Manhole Covers — Composite Frames & Utility Vaults | GetFRP",
    customH1: "FRP Manhole Covers & Heavy-Duty Composite Frames",
    supplierTerms: ["manhole", "cover", "smc cover", "manhole cover", "composite cover"],
    paragraphs: [
      "Compression-molded FRP and SMC composite manhole covers replace cast iron and ductile iron across municipal storm drains, telecom vaults, electrical handholes, and industrial facilities. Composite covers eliminate scrap-metal theft risk, drastically reduce dead weight for ergonomic single-worker lifting, and provide lifetime immunity to hydrogen sulfide sewer gas and saltwater corrosion.",
      "Structural performance is classified in accordance with EN 124 standards, spanning Group 1 (A15 pedestrian paths), Group 2 (B125 parking lots), Group 3 (C250 curb sides), Group 4 (D400 highway traffic lanes), and Group 5 (E600/F900 airport aprons and docks). High-density sheet molding compound (SMC) formulated with high glass loading and vinyl ester or unsaturated polyester resin is compression-molded under 1,000 to 2,500 tonnes of hydraulic pressure at 140 to 160 degrees Celsius to achieve void-free fiber compaction.",
      "Buyer RFQ specifications should define clear opening diameter or rectangle dimensions, frame depth, load class certificate from accredited testing labs, anti-slip skid resistance value (SRV), EPDM water-tight sealing gaskets, captive locking mechanisms, and factory-embossed service markings.",
    ],
    related: [
      { label: "SMC molding process", href: "/manufacturing/smc-molding" },
      { label: "Compression molding guide", href: "/manufacturing/compression-molding" },
      { label: "SMC & BMC raw materials", href: "/products/smc-bmc" },
      { label: "Construction FRP applications", href: "/applications/construction" },
      { label: "FRP grating panels", href: "/products/frp-grating" },
    ],
  },
  {
    slug: "frp-duct",
    name: "FRP Duct",
    subject: "FRP ductwork and chemical ventilation systems",
    keyword: "frp duct",
    summary: "Source industrial FRP ductwork, scrubber headers, round and rectangular ventilation systems with ASTM D3982, SMACNA standards, and Class 1 flame spread ratings.",
    customTitle: "FRP Duct Systems — Industrial Ventilation & Scrubbers | GetFRP",
    customH1: "FRP Duct Systems & Industrial Chemical Ventilation",
    supplierTerms: ["duct", "ductwork", "ventilation", "scrubber", "exhaust pipe", "exhaust duct", "frp pipe"],
    paragraphs: [
      "Industrial FRP ductwork systems provide corrosion-resistant conveyance for toxic, acidic, and moist fumes generated in chemical manufacturing, semiconductor cleanrooms, municipal wastewater treatment, and metallurgical smelting. Fabricated using contact molding, filament winding, or vacuum infusion, FRP ducting resists corrosive condensates that degrade stainless steel and coated galvanized ductwork.",
      "Engineering duct systems requires compliance with ASTM D3982 and SMACNA FRP Duct Construction Standards, specifying round diameters from 50 mm to over 3,000 mm alongside custom rectangular transitions, hoods, elbows, dampers, and stacks. When ducts traverse building interiors or plenum spaces, resins must incorporate flame-retardant brominated vinyl ester chemistries formulated with antimony trioxide to meet ASTM E84 Class 1 flame spread and low smoke development indices.",
      "Procurement briefs must define positive and negative design pressures, stiffener ring spacing, joint configurations (flanged with full-face EPDM gaskets or field butt-and-strap laminations), expansion joint locations, and exterior UV-resistant wax-infused coatings.",
    ],
    related: [
      { label: "FRP pipe systems", href: "/products/frp-pipe" },
      { label: "FRP storage tanks", href: "/products/frp-tank" },
      { label: "Chemical processing FRP", href: "/applications/chemical-processing" },
      { label: "Wastewater treatment FRP", href: "/applications/wastewater-treatment" },
      { label: "Filament winding process", href: "/manufacturing/filament-winding" },
      { label: "Resin & gelcoat systems", href: "/products/resin-gelcoat" },
    ],
  },
  {
    slug: "fiberglass-molds",
    name: "Fiberglass Molds",
    subject: "fiberglass molds and composite production tooling",
    keyword: "composite tooling",
    summary: "Procure CNC-machined master plugs, epoxy and vinyl ester fiberglass molds, vacuum infusion tools, and compression dies from specialized Chinese mold makers.",
    customTitle: "Fiberglass Molds & Composite Production Tooling | GetFRP",
    customH1: "Fiberglass Molds & Precision Composite Tooling",
    supplierTerms: ["mold", "tooling", "composite mold", "fiberglass mold", "pattern", "tool maker"],
    paragraphs: [
      "High-precision composite tooling and fiberglass molds form the foundation of repeatable, dimensionally stable FRP component production. Chinese mold makers engineer master plugs, female cavity molds, two-piece matched closed dies, and multi-part molds for marine hulls, automotive panels, wind turbine components, and sanitary enclosures.",
      "Tooling manufacturing follows a rigorous progression: 5-axis CNC machining of high-density polyurethane or epoxy tooling board master plugs, hand-polishing and application of semi-permanent release systems, followed by high-definition tooling vinyl ester or high-Tg epoxy tooling gelcoats. Tooling laminates utilize zero-shrinkage resin matrices and alternating layers of surface veil, chopped strand mat, and balanced woven roving to prevent print-through and post-cure thermal distortion.",
      "Before approving tooling delivery, buyers should audit mold surface Barcol hardness, vacuum integrity hold tests (decay under 1 mbar/min at 98% vacuum), dimensional CMM surface scanning against original CAD surfaces, steel backing frame kinematics, and integrated heating elements or demolding air poppet valves.",
    ],
    related: [
      { label: "RTM closed-mold process", href: "/manufacturing/rtm" },
      { label: "Vacuum infusion process", href: "/manufacturing/vacuum-infusion" },
      { label: "SMC molding process", href: "/manufacturing/smc-molding" },
      { label: "Prepreg & autoclave process", href: "/manufacturing/prepreg-autoclave" },
      { label: "Resin & gelcoat systems", href: "/products/resin-gelcoat" },
      { label: "Automotive FRP applications", href: "/applications/automotive-road-transportation" },
    ],
  },
  {
    slug: "chopper-gun",
    name: "Chopper Gun",
    subject: "fiberglass chopper guns and roving spray-up equipment",
    keyword: "chopper gun",
    summary: "Technical specifications for composite chopper guns, internal and external mix pneumatic spray dispensers, roving cutter heads, and calibration procedures.",
    customTitle: "Fiberglass Chopper Guns & Spray-up Roving Cutters | GetFRP",
    customH1: "Fiberglass Chopper Guns & Spray-up Roving Cutters",
    supplierTerms: ["chopper gun", "spray gun", "cutter", "roving cutter", "spray equipment", "spray-up"],
    paragraphs: [
      "Chopper guns and spray-up equipment automate open-mold composite fabrication by simultaneously cutting continuous fiberglass roving, atomizing catalyzed thermoset resin, and depositing a uniform wet fiber-matrix slurry onto the mold surface. This process provides high deposition rates for fiberglass boats, truck fairings, bath modules, and storage tank end caps.",
      "Equipment selection balances pneumatic air motor performance, tungsten carbide cutter blades, and delivery mixing mechanics. Internal mix guns combine resin and MEKP catalyst inside a static mixing chamber before tip atomization, minimizing hazardous VOC emissions and overspray fog; external mix guns impinge separate catalyst and resin streams outside the nozzle, eliminating solvent-flush cycling during brief production pauses.",
      "Operating teams must calibrate chopper guns daily using test capture bags and digital scales to verify target glass-to-resin ratios (customarily 25% to 35% glass by weight). Verify fluid pressure regulators, roving tension guide ceramic eyelets, catalyst slave pump synchronization, and ergonomic counterbalanced boom suspensions.",
    ],
    related: [
      { label: "Spray-up manufacturing guide", href: "/manufacturing/spray-up" },
      { label: "Fiberglass roving materials", href: "/products/fiber-glass" },
      { label: "Resin & gelcoat systems", href: "/products/resin-gelcoat" },
      { label: "Gelcoat spray guns", href: "/products/gelcoat-spray-gun" },
      { label: "Marine FRP applications", href: "/applications/marine" },
    ],
  },
  {
    slug: "gelcoat-spray-gun",
    name: "Gelcoat Spray Gun",
    subject: "gelcoat spray guns and fluid application equipment",
    keyword: "gelcoat spray gun",
    summary: "Review cup guns, air-assisted airless gelcoat spray systems, catalyst slave pumps, tip sizing, and fluid delivery controls for defect-free composite surfaces.",
    customTitle: "Gelcoat Spray Guns & High-Pressure Fluid Equipment | GetFRP",
    customH1: "Gelcoat Spray Guns & Fluid Application Equipment",
    supplierTerms: ["gelcoat spray", "spray gun", "cup gun", "catalyst pump", "fluid equipment", "gelcoat equipment"],
    paragraphs: [
      "Gelcoat spray guns apply cosmetic, weather-resistant, and chemically protective outer coatings directly onto open composite molds prior to structural reinforcement lay-up. High-quality gelcoat application prevents surface porosity, pinholes, alligatoring, and uneven curing across sanitary ware, marine hulls, and architectural panels.",
      "Equipment configurations range from portable gravity cup guns for mold touch-ups and prototype parts to industrial air-assisted airless pumping systems designed for continuous production. Industrial rigs employ positive displacement proportioning pumps that synchronize MEKP catalyst delivery at a precise 1.5% to 2.5% ratio by volume, paired with tungsten carbide reversible spray tips designed for high-viscosity thixotropic fluids.",
      "Procurement standards require monitoring wet film thickness using comb gauges to maintain an optimal 0.4 mm to 0.6 mm wet depth. Submitting an RFQ for gelcoat equipment requires specifying delivery fluid volume, hose length, solvent flush manifolds, pneumatic pressure ratings, and spare nozzle orifice matrices.",
    ],
    related: [
      { label: "Resin & gelcoat systems", href: "/products/resin-gelcoat" },
      { label: "Chopper guns", href: "/products/chopper-gun" },
      { label: "Fiberglass molds", href: "/products/fiberglass-molds" },
      { label: "Spray-up manufacturing guide", href: "/manufacturing/spray-up" },
      { label: "Bath & RV applications", href: "/applications/bath-pools-recreational-vehicles" },
    ],
  },
  {
    slug: "curing-oven",
    name: "Curing Oven",
    subject: "composite curing ovens and post-cure thermal chambers",
    keyword: "composite curing oven",
    summary: "Engineering guide for composite curing ovens, walk-in post-cure chambers, multi-zone airflow circulation, programmable ramp controllers, and AMS 2750 pyrometry.",
    customTitle: "Composite Curing Ovens & Thermal Post-Cure Chambers | GetFRP",
    customH1: "Composite Curing Ovens & Thermal Post-Curing Chambers",
    supplierTerms: ["curing oven", "oven", "temperature controller", "heating", "post-cure", "autoclave", "thermal chamber"],
    paragraphs: [
      "Composite curing ovens and walk-in post-cure thermal chambers elevate matrix cross-linking density, maximize glass transition temperatures (Tg), and eliminate residual uncured monomer in advanced composite components. Out-of-autoclave (OOA) prepreg curing, epoxy infusion post-curing, and phenolic component baking rely on controlled thermal ramp schedules.",
      "High-performance curing ovens feature indirect electric or gas-fired heat exchangers, variable-frequency high-volume circulation blowers, and precision multi-zone PID controllers capable of linear heating ramps (typically 1 to 2 degrees Celsius per minute) to prevent uncontrolled exothermic matrix spikes. Pyrometry control should meet AMS 2750 Class 1 or Class 2 specifications with temperature uniformity across the working envelope of plus or minus 3 to 5 degrees Celsius.",
      "Equipment specifications should detail interior chamber volume, insulated panel rockwool thickness (minimum 100 mm to 150 mm), hazardous location class for flammable vapor extraction, internal vacuum source hookups, multiple thermocouple part sensor channels, and automated datalogging for certified aerospace and automotive quality records.",
    ],
    related: [
      { label: "Prepreg & autoclave process", href: "/manufacturing/prepreg-autoclave" },
      { label: "Thermoset resins", href: "/products/thermoset-resins" },
      { label: "Carbon fiber products", href: "/products/carbon-fiber" },
      { label: "Aerospace FRP applications", href: "/applications/aerospace-space" },
      { label: "Wind energy FRP applications", href: "/applications/wind-renewable-energy" },
    ],
  },
  { slug: "frp-handrail", name: "FRP Handrail", subject: "FRP handrail systems", keyword: "handrail", summary: "Modular pultruded FRP rails, posts, kick plates and fittings for corrosion-resistant access platforms and industrial walkways." },
  { slug: "frp-ladder", name: "FRP Ladder", subject: "FRP ladders", keyword: "ladder", summary: "Fixed, cage, step and access ladders made from pultruded FRP profiles for electrical insulation and corrosive environments." },
  { slug: "frp-sheet", name: "FRP Sheet", subject: "FRP sheets", keyword: "frp sheet", summary: "Glass-fiber-reinforced sheet and laminate products for corrosion barriers, electrical insulation, fabrication and structural panels." },
  { slug: "fiberglass-panel", name: "Fiberglass Panel", subject: "fiberglass panels", keyword: "panel", summary: "Continuous-laminated, pultruded, molded and sandwich fiberglass panels for corrosion, insulation, architectural and enclosure uses." },
  {
    slug: "composite-core-materials",
    name: "Composite Core Materials",
    subject: "composite core materials",
    keyword: "structural foam",
    summary: "Structural foam, balsa and honeycomb core materials for lightweight sandwich laminates, compared by density, shear, compression, resin uptake and forming limits.",
    related: [
      { label: "PVC foam board", href: "/products/pvc-foam-board" },
      { label: "Fiberglass panels", href: "/products/fiberglass-panel" },
      { label: "Vacuum infusion process", href: "/manufacturing/vacuum-infusion" },
      { label: "Marine FRP applications", href: "/applications/marine" },
    ],
  },
  { slug: "frp-enclosure", name: "FRP Enclosure", subject: "FRP enclosures", keyword: "fiberglass enclosure", summary: "Electrical, utility and industrial FRP enclosures specified around dielectric behavior, fire class, weathering, ingress rating, hardware and dimensional interfaces." },
  { slug: "recycled-composites", name: "Recycled Composite Materials", subject: "recycled composite materials", keyword: "recycled carbon fiber", summary: "Recovered carbon and glass fiber materials compared by feedstock, recovery route, contamination control, retained properties, lot consistency and lifecycle evidence." },
  {
    slug: "aramid-fiber",
    name: "Aramid Fiber",
    subject: "aramid fiber reinforcements",
    keyword: "aramid fiber",
    summary: "Compare aramid fiber (Kevlar/Twaron) fabrics, roving, and yarn from Chinese suppliers with ASTM test data, ballistic specs, and RFQ procurement checklists.",
    customTitle: "Aramid Fiber Reinforcements & Technical Specs | GetFRP",
    customH1: "Aramid Fiber Reinforcements & Technical Specifications",
    supplierTerms: [],
    paragraphs: [
      "Aramid fiber reinforcements provide exceptional tensile strength-to-weight ratios, extreme impact toughness, vibration damping, and thermal stability for demanding composite structures. In ballistic armor, cut-resistant industrial fabrics, aerospace fairings, and high-pressure composite overwrapped pressure vessels (COPV), aramid fibers deliver energy dissipation capabilities that glass and carbon fibers cannot match.",
      "When sourcing aramid reinforcements from Chinese manufacturers, technical buyers must distinguish between para-aramid (such as Kevlar and Twaron equivalents used for high-tensile structural and ballistic applications) and meta-aramid (such as Nomex equivalents engineered primarily for flame and thermal barrier applications). Verify yarn filament denier, linear density, twist level, moisture regain, and specialized sizing designed for epoxy or phenolic matrix compatibility.",
      "GetFRP aggregates verified Chinese composite material suppliers and export-ready technical textile manufacturers. At present, because zero approved direct aramid fiber suppliers meet our directory criteria, this page intentionally displays our standard empty state without synthetic factory cards. Procurement teams can issue a controlled RFQ or browse related fiberglass and carbon reinforcement catalogs below.",
    ],
    related: [
      { label: "Fiberglass reinforcements", href: "/products/fiber-glass" },
      { label: "Carbon fiber products", href: "/products/carbon-fiber" },
      { label: "Prepreg & autoclave process", href: "/manufacturing/prepreg-autoclave" },
      { label: "Defence & ballistics FRP", href: "/applications/defence-security-ballistics" },
      { label: "FRP properties reference", href: "/technical/frp-properties" },
      { label: "GRP terminology guide", href: "/technical/grp-terminology" },
    ],
  },
  {
    slug: "thermoset-resins",
    name: "Thermoset Resins",
    subject: "thermoset composite resins",
    keyword: "thermoset resin",
    summary: "Source thermoset resins for composite manufacturing. Compare orthophthalic, isophthalic, vinyl ester, epoxy, and phenolic resin systems with China suppliers.",
    customTitle: "Thermoset Resins for Composite Manufacturing | GetFRP",
    customH1: "Thermoset Resins — Composite Chemistry & Cure Systems",
    supplierTerms: ["thermoset resin", "unsaturated polyester resin", "vinyl ester", "epoxy resin", "resin"],
    paragraphs: [
      "Thermoset resins form the polymer matrix that binds composite reinforcements, transfers mechanical loads, and shields fibers from harsh chemical, thermal, and environmental degradation. Chinese chemical manufacturers formulate a broad spectrum of thermosetting systems including orthophthalic polyester, isophthalic polyester, vinyl ester, epoxy, and phenolic resins for open and closed-mold processing.",
      "Selecting the correct thermoset matrix requires balancing viscosity windows, reactivity, peak exotherm temperatures, cure kinetics, and heat distortion temperatures (HDT) against the downstream production process—whether pultrusion, filament winding, vacuum infusion, or resin transfer molding (RTM). Overseas buyers must verify Certificates of Analysis (CoA) per batch, checking styrene monomer content, promoter systems, shelf life, and dangerous goods transport classifications.",
      "GetFRP indexes reviewed Chinese composite resin manufacturers and formulation specialists. Compare declared chemical bases, viscosity curves, barcol hardness development, and international fire-retardant certifications. If fewer than three direct matches are available, standard fallback categories are provided without synthetic supplier profiles.",
    ],
    related: [
      { label: "Gelcoat & composite resins", href: "/products/resin-gelcoat" },
      { label: "Resin transfer molding (RTM)", href: "/manufacturing/rtm" },
      { label: "Filament winding process", href: "/manufacturing/filament-winding" },
      { label: "Chemical processing FRP", href: "/applications/chemical-processing" },
      { label: "FRP properties reference", href: "/technical/frp-properties" },
      { label: "Compare FRP standards", href: "/tools/standard-comparison" },
    ],
  },
  {
    slug: "pvc-foam-board",
    name: "PVC Foam Board",
    subject: "PVC structural foam core materials",
    keyword: "pvc foam board",
    summary: "Cross-linked structural PVC foam boards for composite sandwich panels. Review closed-cell density grades, mechanical properties, and China supplier sources.",
    customTitle: "PVC Foam Board for Composite Core Sandwiching | GetFRP",
    customH1: "PVC Foam Board — Structural Composite Core Materials",
    supplierTerms: ["pvc foam", "foam core", "structural foam", "core materials"],
    paragraphs: [
      "Cross-linked structural PVC foam board is a premier core material for lightweight composite sandwich constructions, delivering high specific stiffness, compressive strength, fatigue endurance, and minimal moisture absorption. Widely deployed across marine hulls, wind turbine nacelles, rail transit body panels, and refrigerated truck bodies, PVC core materials provide structural spacing between composite skins.",
      "When evaluating Chinese PVC foam core manufacturers, buyers should specify nominal density grades (typically ranging from 45 kg/m³ to 250 kg/m³) alongside sheet finishing options. Finishing specifications—such as plain sheets, grid-scored contourable foam with scrim backing, double-cut grooving, or pin-perforated patterns—directly dictate resin flow kinetics, bondline strength, and vacuum-assisted resin infusion (VARI) quality.",
      "GetFRP connects international buyers with reviewed Chinese composite core producers. Inspect third-party mechanical test reports (such as ASTM C273 shear, ASTM C365 compression, and ASTM C393 sandwich flexure) and marine classification approvals (e.g., DNV, Lloyd's Register) before issuing production purchase orders.",
    ],
    related: [
      { label: "Composite core materials", href: "/products/composite-core-materials" },
      { label: "Vacuum infusion process", href: "/manufacturing/vacuum-infusion" },
      { label: "Marine FRP applications", href: "/applications/marine" },
      { label: "Wind turbine composites", href: "/applications/wind-renewable-energy" },
      { label: "Fiberglass sandwich panels", href: "/products/fiberglass-panel" },
      { label: "Compare FRP standards", href: "/tools/standard-comparison" },
    ],
  },
  {
    slug: "fiberglass-tape",
    name: "Fiberglass Tape",
    subject: "woven fiberglass reinforcement tape",
    keyword: "fiberglass tape",
    summary: "Source woven fiberglass tape, unidirectional banding, and biaxial edge-reinforcement strips. Compare weave types, resin compatibility, and China suppliers.",
    customTitle: "Fiberglass Tape — Composite Specs & China Supply | GetFRP",
    customH1: "Fiberglass Tape — Plain Weave & Unidirectional Strips",
    supplierTerms: ["fiberglass tape", "woven tape", "glass fiber", "fiberglass"],
    paragraphs: [
      "Fiberglass tape is an engineered narrow fabric featuring woven selvedged edges that prevent fraying, unraveling, and loose glass filaments during handling. Manufactured from continuous filament E-glass yarns in plain weave, twill weave, or unidirectional banding constructions, fiberglass tape provides targeted localized reinforcement for composite seams, pipe bell-and-spigot joints, electrical coil wrapping, and structural repairs.",
      "Procurement specifications for fiberglass tape must specify fabric areal weight (typically 100 g/m² to 600 g/m²), nominal width (from 25 mm up to 300 mm), edge finish, and chemical sizing chemistry. Sizing compatibility with polyester, vinyl ester, or epoxy matrix systems ensures rapid wet-out and eliminates dry fiber voids during manual wet lay-up or secondary tabbing operations.",
      "GetFRP compares audited Chinese fiberglass textile weavers and reinforcement converters. Review yarn grade declarations, roll packaging, tensile break strength test reports, and dielectric properties before contract award. Filter verified suppliers or submit an application RFQ below.",
    ],
    related: [
      { label: "Fiberglass reinforcements", href: "/products/fiber-glass" },
      { label: "Hand lay-up process", href: "/manufacturing/hand-layup" },
      { label: "FRP pipe systems", href: "/products/frp-pipe" },
      { label: "Electrical FRP products", href: "/applications/electrical" },
      { label: "FRP properties reference", href: "/technical/frp-properties" },
      { label: "GRP terminology guide", href: "/technical/grp-terminology" },
    ],
  },
];

export const ADDITIONAL_PRODUCT_PAGES: MarketplacePage[] = ADDITIONAL_PRODUCT_DEFINITIONS.map((item) => {
  const searchIntent = getProductSearchIntent(item.slug);
  const context = PRODUCT_ROUTE_CONTEXT[item.slug] ?? {
    process: { label: `${item.name} by manufacturing process`, href: "/manufacturing/pultrusion", note: "Compare process fit and controls." },
    application: { label: `${item.name} for wastewater treatment`, href: "/applications/wastewater-treatment", note: "Review corrosion and access requirements." },
    evidence: { label: `${item.name} standards`, href: "/standards/iso-9001", note: "Separate QMS and product evidence." },
  };
  return page({
    slug: item.slug,
    path: `/products/${item.slug}`,
    title: item.customTitle ?? searchIntent?.title ?? `China ${item.name} Manufacturers, Suppliers & Wholesale | getfrp`,
    h1: item.customH1 ?? searchIntent?.h1 ?? `China ${item.name} Manufacturers & Suppliers`,
    eyebrow: "PRODUCT CATEGORY",
    summary: item.summary,
    category: item.slug,
    supplierTerms: item.supplierTerms ?? [item.keyword, item.subject, item.name],
    paragraphs: item.paragraphs ?? [
      `${item.name} sourcing begins with the service condition and the manufacturing route, not a generic unit price. Chinese manufacturers may offer several resin systems, reinforcement architectures and finishing levels under the same product name. Buyers should define loads, exposure, dimensions, interfaces, quantity and destination standard before comparing ${item.subject}.`,
      `A useful ${item.name} supplier comparison separates company identity from product evidence. GetFRP aggregates reviewed public factory profiles and approved supplier-uploaded products, then exposes material, process, certification, MOQ and export-readiness signals. Certificate logos alone are not treated as proof; scope, legal entity, product construction and report validity still need to match the offer.`,
      `For an export order, freeze the drawing revision, inspection method, sampling level, packing and release documents in the RFQ. This makes ${item.subject} quotations comparable and reduces substitutions after award. If this category has no approved product pages yet, the empty state is intentional: GetFRP does not manufacture placeholder products or companies to fill a directory.`,
    ],
    subcategories: [context.process, context.application, context.evidence],
    related: (item.related ?? []).concat([
      { label: "FRP grating manufacturers", href: "/products/frp-grating" },
      { label: "Pultruded FRP profiles", href: "/products/pultruded-profiles" },
      { label: "FRP pipe suppliers", href: "/products/frp-pipe" },
      { label: "FRP rebar manufacturers", href: "/products/frp-rebar" },
      { label: "Fiberglass panels", href: "/products/fiberglass-panel" },
      { label: "FRP tanks", href: "/products/frp-tank" },
      { label: "China sourcing guide", href: "/source-from-china/verify-supplier" },
    ]),
    guideHref: "/source-from-china/verify-supplier",
    faqDimension: "material, process and project standard",
  });
});

const PROCESS_INFO = [
  ["pultrusion", "Pultrusion", "Continuous profiles with aligned reinforcement, controlled resin impregnation, heated dies and secondary machining.", "pultrusion"],
  ["filament-winding", "Filament Winding", "Rotational placement of continuous reinforcement for pipe, tanks, ducts and pressure-bearing cylindrical structures.", "filament winding"],
  ["hand-layup", "Hand Lay-up", "Open-mold laminate production for large, low-volume and geometrically complex FRP components.", "hand lay-up"],
  ["compression-molding", "Compression Molding", "Matched metal die compression molding of SMC, BMC, GMT and wet composites for high-volume structural components.", "compression molding"],
  ["smc-molding", "SMC Molding", "Matched-tool compression molding for repeat composite covers, enclosures and engineered parts.", "compression molding"],
  ["rtm", "Resin Transfer Molding (RTM)", "Closed-mold resin transfer molding for controlled surfaces, repeatable laminate thickness and medium-volume components.", "resin transfer molding"],
  ["spray-up", "Spray-up", "Chopper-gun deposition of resin and short reinforcement for economical open-mold shells, covers and large low-volume parts.", "spray-up"],
  ["vacuum-bagging", "Vacuum Bagging", "Flexible-bag consolidation of wet lay-up or prepreg laminates to improve compaction, air removal and surface consistency.", "vacuum bagging"],
  ["vacuum-infusion", "Vacuum Infusion", "Vacuum-driven resin flow through dry reinforcement for large panels, marine structures, blades and controlled closed laminates.", "vacuum infusion"],
  ["prepreg-autoclave", "Prepreg & Autoclave", "Controlled prepreg lay-up cured under elevated temperature and pressure for aerospace-grade laminate quality and low void content.", "prepreg autoclave"],
  ["automated-fiber-placement", "Automated Fiber Placement", "Robotically steered continuous tows placed over contoured tooling for repeatable, optimized high-performance structures.", "automated fiber placement"],
  ["fiber-braiding", "Fiber Braiding", "Interlaced continuous yarns formed around a mandrel for impact-tolerant tubes, profiles, preforms and complex hollow structures.", "fiber braiding"],
  ["composite-3d-printing", "Composite 3D Printing", "Layer-wise additive manufacturing with chopped or continuous fiber reinforcement for tooling, prototypes and near-net-shape parts.", "composite 3D printing"],
  ["thermoplastic-forming", "Thermoplastic Composite Forming", "Rapid heating, stamping and consolidation of reinforced thermoplastic sheets or organosheets for repeat production.", "thermoplastic composite forming"],
  ["continuous-lamination", "Continuous Lamination", "Continuous film, resin and reinforcement consolidation for flat or profiled FRP sheet, panel and translucent building products.", "continuous lamination"],
] as const;

export const MANUFACTURING_PAGES = PROCESS_INFO.map(([slug, name, summary, process]) => page({
  slug,
  path: `/manufacturing/${slug}`,
  title: `${name} Manufacturers & FRP Suppliers in China | getfrp`,
  h1: `${name} FRP Manufacturers in China`,
  eyebrow: "MANUFACTURING PROCESS",
  summary,
  process,
  supplierTerms: [process, name],
  paragraphs: [
    `${name} is a production route rather than a guarantee of product performance. A sourcing brief should identify the reinforcement, resin, geometry, production volume, critical tolerances, environmental exposure and required tests. Chinese ${name.toLowerCase()} suppliers can then respond against one defined process window instead of a broad request for “FRP parts.”`,
    `Factory review should cover material traceability, work instructions, tooling condition, recorded process parameters, in-process checks and the link between test specimens and production batches. GetFRP lists only reviewed public supplier records and approved uploaded products; the buyer still needs to verify that evidence belongs to the offered factory and product revision.`,
    `Before award, agree first-article approval, visual standards, dimensional sampling, destructive or non-destructive tests, repair limits, packaging and document release. The resulting comparison is useful for engineering and procurement because each ${name.toLowerCase()} manufacturer is answering the same acceptance basis.`,
  ],
  subcategories: [
    { label: "FRP grating", href: "/products/frp-grating", note: "Access and flooring products." },
    { label: "Pultruded profiles", href: "/products/pultruded-profiles", note: "Structural constant sections." },
    { label: "FRP pipe", href: "/products/frp-pipe", note: "Process and water systems." },
  ],
  related: PROCESS_INFO.filter(([other]) => other !== slug).map(([other, label]) => ({ label: `${label} suppliers`, href: `/manufacturing/${other}` })).concat([
    { label: "FRP product categories", href: "/products" },
    { label: "Compare FRP standards", href: "/tools/standard-comparison" },
    { label: "Submit an RFQ", href: "/rfq" },
  ]),
  guideHref: "/source-from-china/verify-supplier",
  faqDimension: "process controls and product evidence",
}));

const APPLICATION_INFO = [
  ["wastewater-treatment", "Wastewater Treatment", "FRP structures, grating, handrail, tanks and piping selected for wet, corrosive treatment environments."],
  ["marine", "Marine", "Corrosion-resistant composite panels, gratings, profiles, pipe and molded components for coastal and offshore service."],
  ["chemical-processing", "Chemical Processing", "Resin-controlled FRP pipe, vessels, ducts, grating and structural supports for aggressive process media."],
  ["construction", "Construction", "Composite reinforcement, profiles, panels and access systems for durable civil and building applications."],
  ["electrical", "Electrical", "Insulating FRP ladders, cable trays, profiles, enclosures and laminates with controlled electrical and fire properties."],
] as const;

const BASE_APPLICATION_PAGES = APPLICATION_INFO.map(([slug, name, summary]) => page({
  slug,
  path: `/applications/${slug}`,
  title: `${name} FRP Products & Manufacturers in China | getfrp`,
  h1: `FRP Manufacturers for ${name}`,
  eyebrow: "APPLICATION DIRECTORY",
  summary,
  application: name,
  supplierTerms: [name, slug.replaceAll("-", " ")],
  paragraphs: [
    `${name} projects require product selection around the actual environment, loads, maintenance plan and governing code. A generic FRP label does not define resin compatibility, laminate construction, fire behavior, electrical performance or structural capacity. Buyers should translate the service into measurable RFQ inputs before choosing a Chinese supplier.`,
    `GetFRP aggregates reviewed company profiles and approved supplier-uploaded products that declare relevant applications. Matching is a discovery step, not an engineering approval. Project teams should validate chemical exposure, design calculations, test reports, installation details and certificate scope for the exact product offered.`,
    `A controlled comparison includes drawings, quantities, interfaces, inspection hold points, packing and delivery destination. If fewer than three approved matches are available, this directory links to adjacent categories instead of displaying synthetic suppliers.`,
  ],
  subcategories: [
    { label: `FRP grating for ${name}`, href: slug === "wastewater-treatment" ? `/applications/${slug}/frp-grating` : "/products/frp-grating", note: "Compare access-system requirements." },
    { label: "FRP pipe", href: "/products/frp-pipe", note: "Define pressure and chemical service." },
    { label: "FRP handrail", href: "/products/frp-handrail", note: "Review load, joints and installation." },
  ],
  related: APPLICATION_INFO.filter(([other]) => other !== slug).map(([other, label]) => ({ label: `${label} FRP suppliers`, href: `/applications/${other}` })).concat([
    { label: "FRP standards comparison", href: "/tools/standard-comparison" },
    { label: "Verify a China supplier", href: "/source-from-china/verify-supplier" },
    { label: "Request matched suppliers", href: "/rfq" },
  ]),
  guideHref: "/source-from-china/verify-supplier",
  faqDimension: "service environment and acceptance evidence",
}));

const INDUSTRY_PAGES: MarketplacePage[] = INDUSTRY_APPLICATION_PAGES.map((ind) =>
  page({
    slug: ind.slug,
    path: `/applications/${ind.slug}`,
    title: ind.title,
    h1: ind.h1,
    eyebrow: ind.eyebrow,
    summary: ind.metaDescription,
    application: ind.industryName,
    supplierTerms: ind.supplierTerms,
    paragraphs: [
      `${ind.industryName} composite procurement requires aligning component geometry, structural loads, resin selection, and environmental resistance with international test standards. Buyers should not rely on generic material claims when procuring critical composite parts from Chinese manufacturers.`,
      `GetFRP evaluates verified Chinese composite manufacturers that supply the ${ind.industryName.toLowerCase()} sector. Technical buyers can inspect declared resin formulations, fiber reinforcement types, autoclave or closed-mold capabilities, and certified test reports.`,
      `Shortlist candidates by requesting material batch certificates, third-party test reports (such as ASTM or EN compliance), and fabrication inspection plans. If fewer than three verified suppliers are found, fallback composite categories are provided without synthetic results.`,
    ],
    subcategories: ind.componentFamilies.slice(0, 3).map((comp) => ({
      label: comp.name,
      href: comp.productHref,
      note: comp.description,
    })),
    related: ind.relatedSearches.concat([
      { label: "Compare FRP standards", href: "/tools/standard-comparison" },
      { label: "Verify a China supplier", href: "/source-from-china/verify-supplier" },
      { label: "FRP product categories", href: "/products" },
      { label: "Submit an RFQ", href: "/rfq" },
    ]),
    guideHref: "/source-from-china/verify-supplier",
    faqDimension: "industry requirements and quality compliance",
    faqs: ind.faqs,
  }),
);

export const APPLICATION_PAGES: MarketplacePage[] = [
  ...BASE_APPLICATION_PAGES,
  ...INDUSTRY_PAGES,
];

const STANDARD_INFO = [
  ["en-13706", "EN 13706", "European requirements for pultruded FRP profiles, used with grade, property and test-method details."],
  ["astm-d7957", "ASTM D7957", "Material specification for solid round glass-fiber-reinforced polymer bars used for concrete reinforcement."],
  ["iso-9001", "ISO 9001", "Quality-management-system certification that must be distinguished from product certification and test compliance."],
  ["astm-d3841", "ASTM D3841", "Test method used to assess in-plane shear strength of reinforced plastics with a controlled specimen and procedure."],
] as const;

export const STANDARD_PAGES = STANDARD_INFO.map(([slug, name, summary]) => page({
  slug,
  path: `/standards/${slug}`,
  title: `${name} FRP Manufacturers & Suppliers in China | getfrp`,
  h1: `${name} FRP Suppliers in China`,
  eyebrow: "STANDARD DIRECTORY",
  summary,
  standard: name,
  supplierTerms: [name],
  paragraphs: [
    `${name} should be cited with its current edition, scope and project-specific acceptance criteria. A supplier statement that a product is “to ${name}” is not enough unless the offered material, geometry, specimen preparation and reported values align with the document and the buyer's design basis.`,
    `GetFRP uses declared standards as a discovery signal across reviewed supplier profiles and approved product pages. Procurement teams should request the complete report or certificate, check the laboratory and legal entity, and confirm that the tested construction matches production. ISO 9001, when relevant, remains a management-system credential rather than product proof.`,
    `The RFQ and purchase order should identify required values, units, sampling frequency, witness points and release documents. Where EN, ASTM and GB documents are compared, use an engineering crosswalk rather than treating different methods as automatically equivalent.`,
  ],
  subcategories: [
    { label: `${name} pultruded profiles`, href: slug === "en-13706" ? `/standards/${slug}/pultruded-profiles` : "/products/pultruded-profiles", note: "Connect the standard to a product family." },
    { label: "FRP rebar", href: "/products/frp-rebar", note: "Review bar qualification evidence." },
    { label: "Standard comparison tool", href: "/tools/standard-comparison", note: "Map EN, ASTM and GB references." },
  ],
  related: STANDARD_INFO.filter(([other]) => other !== slug).map(([other, label]) => ({ label: `${label} suppliers`, href: `/standards/${other}` })).concat([
    { label: "Pultrusion suppliers", href: "/manufacturing/pultrusion" },
    { label: "FRP product categories", href: "/products" },
    { label: "Send a standards-based RFQ", href: "/rfq" },
  ]),
  guideHref: "/source-from-china/verify-supplier",
  faqDimension: "standard scope, test method and evidence",
}));

export const COMBINATION_PAGES: MarketplacePage[] = [
  page({ slug: "pultruded-frp-grating", path: "/products/pultruded-frp-grating", title: "Pultruded FRP Grating Manufacturers in China | getfrp", h1: "Pultruded FRP Grating Manufacturers in China", eyebrow: "PRODUCT × PROCESS", summary: "Compare reviewed Chinese suppliers and approved products for load-bearing pultruded FRP grating.", category: "frp-grating", process: "pultrusion", supplierTerms: ["pultruded grating", "pultrusion", "grating"], paragraphs: ["Pultruded FRP grating uses load-bearing profiles assembled with cross rods, so bearing-bar section, pitch, span direction and connection method control the product definition. Buyers should not substitute a molded panel on price alone.", "Supplier comparison should tie resin, reinforcement architecture, bar geometry, load-table basis and fire evidence to the offered line. GetFRP shows reviewed public manufacturers and approved supplier products that match both grating and pultrusion signals.", "The RFQ should freeze panel size, span, loads, deflection limit, surface, cut plan, clips, edge sealing and packing. When fewer than three reviewed matches exist, related categories remain available without fabricated listings."], subcategories: [{ label: "FRP grating", href: "/products/frp-grating", note: "Return to the product family." }, { label: "Pultrusion", href: "/manufacturing/pultrusion", note: "Review the process controls." }], related: [{ label: "FRP grating manufacturers", href: "/products/frp-grating" }, { label: "Wastewater FRP grating", href: "/applications/wastewater-treatment/frp-grating" }, { label: "Pultruded profiles", href: "/products/pultruded-profiles" }, { label: "EN 13706 profiles", href: "/standards/en-13706/pultruded-profiles" }], guideHref: "/sourcing/frp-grating", faqDimension: "pultrusion, bar geometry and load evidence" }),
  page({ slug: "carbon-fiber-pultrusion-profiles", path: "/products/carbon-fiber-pultrusion-profiles", title: "Carbon Fiber Pultrusion Profiles Manufacturers in China | getfrp", h1: "Carbon Fiber Pultrusion Profiles Manufacturers in China", eyebrow: "PRODUCT × MATERIAL", summary: "Find reviewed suppliers for carbon-fiber pultruded rods, tubes and constant-section profiles.", category: "pultruded-profiles", material: "carbon fiber", process: "pultrusion", supplierTerms: ["carbon fiber", "pultrusion", "carbon profile"], paragraphs: ["Carbon fiber pultrusion profiles combine aligned reinforcement with continuous processing, producing high axial stiffness at low mass. The design must address transverse properties, joints, galvanic contact and the exact fiber and resin system.", "A credible supplier comparison connects carbon-fiber grade, tow, fiber volume, cure, dimensional control and test specimens to the production profile. Reviewed company records and approved product uploads provide discovery evidence without inventing catalog SKUs.", "Buyers should issue drawings, property minima, surface and machining requirements, annual volume, inspection methods and packing. Samples should be tested using the same orientation and conditioning expected in the final application."], subcategories: [{ label: "Carbon fiber", href: "/products/carbon-fiber", note: "Review the material family." }, { label: "Pultruded profiles", href: "/products/pultruded-profiles", note: "Compare profile suppliers." }], related: [{ label: "Pultrusion manufacturers", href: "/manufacturing/pultrusion" }, { label: "EN 13706 profiles", href: "/standards/en-13706/pultruded-profiles" }, { label: "Fiberglass panels", href: "/products/fiberglass-panel" }, { label: "Carbon fiber vs fiberglass", href: "/insights/carbon-fiber-vs-fiberglass" }], guideHref: "/source-from-china/verify-supplier", faqDimension: "carbon fiber, pultrusion and directional properties" }),
  page({ slug: "fiberglass-grating-manufacturers", path: "/products/fiberglass-grating-manufacturers", title: "Fiberglass Grating Manufacturers in China | getfrp", h1: "Fiberglass Grating Manufacturers in China", eyebrow: "PRODUCT × MANUFACTURER INTENT", summary: "Compare real Chinese fiberglass grating manufacturers, public capability profiles and approved product pages.", category: "frp-grating", material: "fiberglass", supplierTerms: ["fiberglass grating", "frp grating", "grating"], paragraphs: ["Fiberglass grating may be molded or pultruded and can use polyester, vinyl ester or phenolic resin. Mesh, depth, load-bar geometry, surface and span must be specified before a manufacturer quotation is meaningful.", "GetFRP differentiates public company identity, reviewed capability signals and approved supplier-uploaded products. The directory does not treat a logo or generic certificate as product proof, and it does not create placeholder factories to inflate results.", "For comparable quotations, state design load, support span, deflection, resin, fire requirement, color, cut plan, clips and packing. Current reports and batch documents should be checked before release."], subcategories: [{ label: "Pultruded FRP grating", href: "/products/pultruded-frp-grating", note: "Compare the load-bearing process." }, { label: "Wastewater grating", href: "/applications/wastewater-treatment/frp-grating", note: "Review a corrosive application." }], related: [{ label: "FRP grating", href: "/products/frp-grating" }, { label: "FRP handrail", href: "/products/frp-handrail" }, { label: "FRP ladder", href: "/products/frp-ladder" }, { label: "How to source FRP grating", href: "/sourcing/frp-grating" }], guideHref: "/sourcing/frp-grating", faqDimension: "grating construction, resin and load evidence" }),
  page({ slug: "wastewater-treatment-frp-grating", path: "/applications/wastewater-treatment/frp-grating", title: "FRP Grating for Wastewater Treatment Manufacturers in China | getfrp", h1: "FRP Grating for Wastewater Treatment", eyebrow: "PRODUCT × APPLICATION", summary: "Source corrosion-resistant FRP grating for wastewater plants from reviewed Chinese manufacturers.", category: "frp-grating", application: "wastewater treatment", supplierTerms: ["grating", "wastewater", "water treatment"], paragraphs: ["FRP grating for wastewater treatment is selected around wet chemical exposure, slip resistance, access loads, span, fire rules and cleaning. Resin compatibility and panel detailing matter more than a generic corrosion-resistant label.", "Reviewed suppliers should show the relevant grating process, resin options, fabrication, load evidence and experience with municipal or industrial water environments. Approved product pages expose the supplier's own specifications without AI-generated inventory.", "An RFQ should include tank or walkway layout, loads, support spacing, mesh, depth, resin, grit, clips, cutouts and packing. Edge sealing and field installation requirements should be agreed before production."], subcategories: [{ label: "Wastewater treatment FRP", href: "/applications/wastewater-treatment", note: "Browse the application directory." }, { label: "FRP grating", href: "/products/frp-grating", note: "Return to the category." }], related: [{ label: "Pultruded FRP grating", href: "/products/pultruded-frp-grating" }, { label: "FRP handrail", href: "/products/frp-handrail" }, { label: "FRP tanks", href: "/products/frp-tank" }, { label: "FRP pipe", href: "/products/frp-pipe" }], guideHref: "/sourcing/frp-grating", faqDimension: "wastewater exposure, loads and installation" }),
  page({ slug: "en-13706-pultruded-profiles", path: "/standards/en-13706/pultruded-profiles", title: "EN 13706 Pultruded Profiles Manufacturers in China | getfrp", h1: "EN 13706 Pultruded Profiles Manufacturers in China", eyebrow: "PRODUCT × STANDARD", summary: "Compare Chinese pultruded-profile suppliers that declare EN 13706 capability and verify product-level evidence.", category: "pultruded-profiles", standard: "EN 13706", process: "pultrusion", supplierTerms: ["EN 13706", "pultruded profile", "pultrusion"], paragraphs: ["EN 13706 provides a framework for pultruded reinforced-plastic profiles, but buyers must still identify the applicable grade, dimensions, property minima and project use. A broad standards claim cannot replace a controlled datasheet and test basis.", "GetFRP matches reviewed profiles and approved products using both pultrusion and EN 13706 signals. Buyers should inspect the complete report, specimen orientation, conditioning, laboratory, legal entity and connection to the production laminate.", "The RFQ should freeze drawings, resin, reinforcement, mechanical values, tolerances, fire and UV requirements, machining and inspection. Where ASTM or GB methods are used, document the crosswalk and any non-equivalence."], subcategories: [{ label: "EN 13706", href: "/standards/en-13706", note: "Review the standard scope." }, { label: "Pultruded profiles", href: "/products/pultruded-profiles", note: "Return to the product family." }], related: [{ label: "Pultrusion manufacturers", href: "/manufacturing/pultrusion" }, { label: "Carbon pultrusion profiles", href: "/products/carbon-fiber-pultrusion-profiles" }, { label: "Standards comparison", href: "/tools/standard-comparison" }, { label: "Verify a supplier", href: "/source-from-china/verify-supplier" }], guideHref: "/source-from-china/verify-supplier", faqDimension: "EN 13706 grade, profile properties and test evidence" }),
];

export function findPage(pages: MarketplacePage[], slug: string) {
  return pages.find((item) => item.slug === slug) ?? null;
}
