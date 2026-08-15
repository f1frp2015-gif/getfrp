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
    { question: `How should buyers shortlist ${subject} suppliers in China?`, answer: `Start with the required ${dimension}, then compare the factory's published product scope, process evidence, current certifications, export markets and ability to answer one controlled RFQ. Company verification does not replace product-level testing.` },
    { question: `What evidence should a ${subject} quotation include?`, answer: `Ask for the offered grade, drawing or datasheet revision, material and process declaration, applicable test reports, inspection plan, MOQ, lead time and packing proposal. The legal entity on certificates should match the seller or be explained.` },
    { question: `Does ISO 9001 prove that a ${subject} product meets its project standard?`, answer: `No. ISO 9001 concerns the quality-management system. Product compliance requires evidence for the offered construction, material, dimensions and test method, with report scope and validity checked.` },
    { question: `How does GetFRP prevent thin or fabricated supplier data?`, answer: `Category pages aggregate only public, reviewed supplier profiles and approved supplier-uploaded product pages. When fewer than three credible matches exist, the page shows an honest empty state and related categories instead of invented records.` },
    { question: `Can buyers send one RFQ to compare multiple ${subject} manufacturers?`, answer: `Yes. A controlled RFQ keeps drawings, standards, quantity, delivery destination and evidence requirements identical so quotations can be compared on the same technical and commercial basis.` },
  ];
}

function page(input: Omit<MarketplacePage, "faqs"> & { faqDimension: string }): MarketplacePage {
  const { faqDimension, ...rest } = input;
  return { ...rest, faqs: faqSet(rest.h1, faqDimension) };
}

export const ADDITIONAL_PRODUCT_PAGES: MarketplacePage[] = [
  ["carbon-fiber", "Carbon Fiber", "carbon fiber products", "carbon fiber", "PAN-based carbon fiber, woven fabrics, prepreg and pultruded carbon profiles for lightweight structural, industrial and sporting applications."],
  ["frp-cable-tray", "FRP Cable Tray", "FRP cable tray", "cable tray", "Pultruded and molded cable-management systems for corrosive, electrical, rail, marine and process-plant installations."],
  ["frp-tank", "FRP Tank", "FRP tanks", "tank", "Filament-wound and contact-molded storage and process tanks specified around chemical service, temperature, laminate design and nozzle loads."],
  ["frp-manhole-cover", "FRP Manhole Cover", "FRP manhole covers", "manhole cover", "Compression-molded composite covers and frames for municipal, utility and industrial access points with controlled load class and surface finish."],
  ["frp-handrail", "FRP Handrail", "FRP handrail systems", "handrail", "Modular pultruded FRP rails, posts, kick plates and fittings for corrosion-resistant access platforms and industrial walkways."],
  ["frp-ladder", "FRP Ladder", "FRP ladders", "ladder", "Fixed, cage, step and access ladders made from pultruded FRP profiles for electrical insulation and corrosive environments."],
  ["frp-sheet", "FRP Sheet", "FRP sheets", "frp sheet", "Glass-fiber-reinforced sheet and laminate products for corrosion barriers, electrical insulation, fabrication and structural panels."],
  ["fiberglass-panel", "Fiberglass Panel", "fiberglass panels", "panel", "Continuous-laminated, pultruded, molded and sandwich fiberglass panels for corrosion, insulation, architectural and enclosure uses."],
].map(([slug, name, subject, keyword, summary]) => page({
  slug,
  path: `/products/${slug}`,
  title: `China ${name} Manufacturers, Suppliers & Wholesale | getfrp`,
  h1: `China ${name} Manufacturers & Suppliers`,
  eyebrow: "PRODUCT CATEGORY",
  summary,
  category: slug,
  supplierTerms: [keyword, subject, name],
  paragraphs: [
    `${name} sourcing begins with the service condition and the manufacturing route, not a generic unit price. Chinese manufacturers may offer several resin systems, reinforcement architectures and finishing levels under the same product name. Buyers should define loads, exposure, dimensions, interfaces, quantity and destination standard before comparing ${subject}.`,
    `A useful ${name} supplier comparison separates company identity from product evidence. GetFRP aggregates reviewed public factory profiles and approved supplier-uploaded products, then exposes material, process, certification, MOQ and export-readiness signals. Certificate logos alone are not treated as proof; scope, legal entity, product construction and report validity still need to match the offer.`,
    `For an export order, freeze the drawing revision, inspection method, sampling level, packing and release documents in the RFQ. This makes ${subject} quotations comparable and reduces substitutions after award. If this category has no approved product pages yet, the empty state is intentional: GetFRP does not manufacture placeholder products or companies to fill a directory.`,
  ],
  subcategories: [
    { label: `${name} by manufacturing process`, href: "/manufacturing/pultrusion", note: "Compare process fit and controls." },
    { label: `${name} for wastewater treatment`, href: "/applications/wastewater-treatment", note: "Review corrosion and access requirements." },
    { label: `${name} standards`, href: "/standards/iso-9001", note: "Separate QMS and product evidence." },
  ],
  related: [
    { label: "FRP grating manufacturers", href: "/products/frp-grating" },
    { label: "Pultruded FRP profiles", href: "/products/pultruded-profiles" },
    { label: "FRP pipe suppliers", href: "/products/frp-pipe" },
    { label: "FRP rebar manufacturers", href: "/products/frp-rebar" },
    { label: "Fiberglass panels", href: "/products/fiberglass-panel" },
    { label: "FRP tanks", href: "/products/frp-tank" },
    { label: "Wastewater FRP products", href: "/applications/wastewater-treatment/frp-grating" },
    { label: "China sourcing guide", href: "/source-from-china/verify-supplier" },
  ],
  guideHref: "/source-from-china/verify-supplier",
  faqDimension: "material, process and project standard",
}));

const PROCESS_INFO = [
  ["pultrusion", "Pultrusion", "Continuous profiles with aligned reinforcement, controlled resin impregnation, heated dies and secondary machining.", "pultrusion"],
  ["filament-winding", "Filament Winding", "Rotational placement of continuous reinforcement for pipe, tanks, ducts and pressure-bearing cylindrical structures.", "filament winding"],
  ["hand-layup", "Hand Lay-up", "Open-mold laminate production for large, low-volume and geometrically complex FRP components.", "hand lay-up"],
  ["smc-molding", "SMC Molding", "Matched-tool compression molding for repeat composite covers, enclosures and engineered parts.", "compression molding"],
  ["rtm", "RTM", "Closed-mold resin transfer molding for controlled surfaces, repeatable laminate thickness and medium-volume components.", "resin transfer molding"],
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

export const APPLICATION_PAGES = APPLICATION_INFO.map(([slug, name, summary]) => page({
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
  page({ slug: "pultruded-frp-grating", path: "/products/pultruded-frp-grating", title: "Pultruded FRP Grating Manufacturers in China | getfrp", h1: "Pultruded FRP Grating Manufacturers in China", eyebrow: "PRODUCT × PROCESS", summary: "Compare reviewed Chinese suppliers and approved products for load-bearing pultruded FRP grating.", category: "frp-grating", process: "pultrusion", supplierTerms: ["pultruded grating", "pultrusion", "grating"], paragraphs: ["Pultruded FRP grating uses load-bearing profiles assembled with cross rods, so bearing-bar section, pitch, span direction and connection method control the product definition. Buyers should not substitute a molded panel on price alone.", "Supplier comparison should tie resin, reinforcement architecture, bar geometry, load-table basis and fire evidence to the offered line. GetFRP shows reviewed public manufacturers and approved supplier products that match both grating and pultrusion signals.", "The RFQ should freeze panel size, span, loads, deflection limit, surface, cut plan, clips, edge sealing and packing. When fewer than three reviewed matches exist, related categories remain available without fabricated listings."], subcategories: [{ label: "FRP grating", href: "/products/frp-grating", note: "Return to the product family." }, { label: "Pultrusion", href: "/manufacturing/pultrusion", note: "Review the process controls." }], related: [{ label: "Fiberglass grating manufacturers", href: "/products/fiberglass-grating-manufacturers" }, { label: "Wastewater FRP grating", href: "/applications/wastewater-treatment/frp-grating" }, { label: "Pultruded profiles", href: "/products/pultruded-profiles" }, { label: "EN 13706 profiles", href: "/standards/en-13706/pultruded-profiles" }], guideHref: "/source-from-china/how-to-source-frp-grating", faqDimension: "pultrusion, bar geometry and load evidence" }),
  page({ slug: "carbon-fiber-pultrusion-profiles", path: "/products/carbon-fiber-pultrusion-profiles", title: "Carbon Fiber Pultrusion Profiles Manufacturers in China | getfrp", h1: "Carbon Fiber Pultrusion Profiles Manufacturers in China", eyebrow: "PRODUCT × MATERIAL", summary: "Find reviewed suppliers for carbon-fiber pultruded rods, tubes and constant-section profiles.", category: "pultruded-profiles", material: "carbon fiber", process: "pultrusion", supplierTerms: ["carbon fiber", "pultrusion", "carbon profile"], paragraphs: ["Carbon fiber pultrusion profiles combine aligned reinforcement with continuous processing, producing high axial stiffness at low mass. The design must address transverse properties, joints, galvanic contact and the exact fiber and resin system.", "A credible supplier comparison connects carbon-fiber grade, tow, fiber volume, cure, dimensional control and test specimens to the production profile. Reviewed company records and approved product uploads provide discovery evidence without inventing catalog SKUs.", "Buyers should issue drawings, property minima, surface and machining requirements, annual volume, inspection methods and packing. Samples should be tested using the same orientation and conditioning expected in the final application."], subcategories: [{ label: "Carbon fiber", href: "/products/carbon-fiber", note: "Review the material family." }, { label: "Pultruded profiles", href: "/products/pultruded-profiles", note: "Compare profile suppliers." }], related: [{ label: "Pultrusion manufacturers", href: "/manufacturing/pultrusion" }, { label: "EN 13706 profiles", href: "/standards/en-13706/pultruded-profiles" }, { label: "Fiberglass panels", href: "/products/fiberglass-panel" }, { label: "Carbon fiber vs fiberglass", href: "/insights/carbon-fiber-vs-fiberglass" }], guideHref: "/source-from-china/verify-supplier", faqDimension: "carbon fiber, pultrusion and directional properties" }),
  page({ slug: "fiberglass-grating-manufacturers", path: "/products/fiberglass-grating-manufacturers", title: "Fiberglass Grating Manufacturers in China | getfrp", h1: "Fiberglass Grating Manufacturers in China", eyebrow: "PRODUCT × MANUFACTURER INTENT", summary: "Compare real Chinese fiberglass grating manufacturers, public capability profiles and approved product pages.", category: "frp-grating", material: "fiberglass", supplierTerms: ["fiberglass grating", "frp grating", "grating"], paragraphs: ["Fiberglass grating may be molded or pultruded and can use polyester, vinyl ester or phenolic resin. Mesh, depth, load-bar geometry, surface and span must be specified before a manufacturer quotation is meaningful.", "GetFRP differentiates public company identity, reviewed capability signals and approved supplier-uploaded products. The directory does not treat a logo or generic certificate as product proof, and it does not create placeholder factories to inflate results.", "For comparable quotations, state design load, support span, deflection, resin, fire requirement, color, cut plan, clips and packing. Current reports and batch documents should be checked before release."], subcategories: [{ label: "Pultruded FRP grating", href: "/products/pultruded-frp-grating", note: "Compare the load-bearing process." }, { label: "Wastewater grating", href: "/applications/wastewater-treatment/frp-grating", note: "Review a corrosive application." }], related: [{ label: "FRP grating", href: "/products/frp-grating" }, { label: "FRP handrail", href: "/products/frp-handrail" }, { label: "FRP ladder", href: "/products/frp-ladder" }, { label: "How to source FRP grating", href: "/source-from-china/how-to-source-frp-grating" }], guideHref: "/source-from-china/how-to-source-frp-grating", faqDimension: "grating construction, resin and load evidence" }),
  page({ slug: "wastewater-treatment-frp-grating", path: "/applications/wastewater-treatment/frp-grating", title: "FRP Grating for Wastewater Treatment Manufacturers in China | getfrp", h1: "FRP Grating for Wastewater Treatment", eyebrow: "PRODUCT × APPLICATION", summary: "Source corrosion-resistant FRP grating for wastewater plants from reviewed Chinese manufacturers.", category: "frp-grating", application: "wastewater treatment", supplierTerms: ["grating", "wastewater", "water treatment"], paragraphs: ["FRP grating for wastewater treatment is selected around wet chemical exposure, slip resistance, access loads, span, fire rules and cleaning. Resin compatibility and panel detailing matter more than a generic corrosion-resistant label.", "Reviewed suppliers should show the relevant grating process, resin options, fabrication, load evidence and experience with municipal or industrial water environments. Approved product pages expose the supplier's own specifications without AI-generated inventory.", "An RFQ should include tank or walkway layout, loads, support spacing, mesh, depth, resin, grit, clips, cutouts and packing. Edge sealing and field installation requirements should be agreed before production."], subcategories: [{ label: "Wastewater treatment FRP", href: "/applications/wastewater-treatment", note: "Browse the application directory." }, { label: "FRP grating", href: "/products/frp-grating", note: "Return to the category." }], related: [{ label: "Pultruded FRP grating", href: "/products/pultruded-frp-grating" }, { label: "FRP handrail", href: "/products/frp-handrail" }, { label: "FRP tanks", href: "/products/frp-tank" }, { label: "FRP pipe", href: "/products/frp-pipe" }], guideHref: "/source-from-china/how-to-source-frp-grating", faqDimension: "wastewater exposure, loads and installation" }),
  page({ slug: "en-13706-pultruded-profiles", path: "/standards/en-13706/pultruded-profiles", title: "EN 13706 Pultruded Profiles Manufacturers in China | getfrp", h1: "EN 13706 Pultruded Profiles Manufacturers in China", eyebrow: "PRODUCT × STANDARD", summary: "Compare Chinese pultruded-profile suppliers that declare EN 13706 capability and verify product-level evidence.", category: "pultruded-profiles", standard: "EN 13706", process: "pultrusion", supplierTerms: ["EN 13706", "pultruded profile", "pultrusion"], paragraphs: ["EN 13706 provides a framework for pultruded reinforced-plastic profiles, but buyers must still identify the applicable grade, dimensions, property minima and project use. A broad standards claim cannot replace a controlled datasheet and test basis.", "GetFRP matches reviewed profiles and approved products using both pultrusion and EN 13706 signals. Buyers should inspect the complete report, specimen orientation, conditioning, laboratory, legal entity and connection to the production laminate.", "The RFQ should freeze drawings, resin, reinforcement, mechanical values, tolerances, fire and UV requirements, machining and inspection. Where ASTM or GB methods are used, document the crosswalk and any non-equivalence."], subcategories: [{ label: "EN 13706", href: "/standards/en-13706", note: "Review the standard scope." }, { label: "Pultruded profiles", href: "/products/pultruded-profiles", note: "Return to the product family." }], related: [{ label: "Pultrusion manufacturers", href: "/manufacturing/pultrusion" }, { label: "Carbon pultrusion profiles", href: "/products/carbon-fiber-pultrusion-profiles" }, { label: "Standards comparison", href: "/tools/standard-comparison" }, { label: "Verify a supplier", href: "/source-from-china/verify-supplier" }], guideHref: "/source-from-china/verify-supplier", faqDimension: "EN 13706 grade, profile properties and test evidence" }),
];

export function findPage(pages: MarketplacePage[], slug: string) {
  return pages.find((item) => item.slug === slug) ?? null;
}
