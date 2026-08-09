export type ProcessPage = {
  slug: string;
  name: string;
  title: string;
  description: string;
  definition: string;
  suitableFor: string[];
  processWindow: Array<{ field: string; control: string; buyerCheck: string }>;
  failureModes: Array<{ risk: string; cause: string; evidence: string }>;
  rfqInputs: string[];
  productSlugs: string[];
  supplierQuery: string;
};

export const PROCESS_PAGES: readonly ProcessPage[] = [
  {
    slug: "pultrusion",
    name: "FRP pultrusion",
    title: "FRP Pultrusion in China: Process, Quality Controls & Suppliers",
    description: "A buyer-focused guide to sourcing pultruded FRP profiles in China: resin and reinforcement selection, process controls, inspection evidence and qualified suppliers.",
    definition: "Pultrusion continuously pulls aligned reinforcement through resin impregnation and a heated die to produce constant-cross-section FRP profiles. The method is efficient for structural angles, channels, beams, tubes, rods and cable-management sections, but properties are strongly directional and the approved laminate architecture must remain tied to the drawing.",
    suitableFor: ["Constant-section structural profiles", "High longitudinal strength and stiffness", "Repeat production with stable tooling", "Corrosion-resistant platforms, ladders and supports"],
    processWindow: [
      { field: "Reinforcement architecture", control: "Roving, continuous mat, veil and local inserts by weight or placement", buyerCheck: "Approved laminate schedule and glass/resin content test" },
      { field: "Resin system", control: "Polyester, vinyl ester, epoxy or polyurethane with defined additives", buyerCheck: "Resin grade, batch traceability and cure evidence" },
      { field: "Die and line settings", control: "Temperature zones, pull speed and pull force", buyerCheck: "Recorded setup plus dimensional and cure checks" },
      { field: "Secondary operations", control: "Cutting, drilling, CNC, bonding and sealing", buyerCheck: "Drawing revision, edge treatment and hole inspection" },
    ],
    failureModes: [
      { risk: "Longitudinal cracking or splitting", cause: "Poor wet-out, excessive pull force or machining damage", evidence: "Cut-section review, visual acceptance standard and mechanical test" },
      { risk: "Surface fiber exposure", cause: "Veil loss, resin starvation or die contamination", evidence: "Approved appearance sample and inspection photographs" },
      { risk: "Warp, twist or dimensional drift", cause: "Uneven cure, die wear or unsupported cooling", evidence: "Straightness/twist plan and sampled dimensional report" },
    ],
    rfqInputs: ["Profile drawing and revision", "Design loads and controlling standard", "Resin/fire/UV/corrosion requirements", "Color and surface veil", "Cut/drill/CNC operations", "Order length, bundle and export packaging"],
    productSlugs: ["pultruded-profiles", "frp-grating", "frp-rebar"],
    supplierQuery: "pultrusion",
  },
  {
    slug: "filament-winding",
    name: "FRP filament winding",
    title: "FRP Filament Winding in China: Pipe, Tank & Vessel Sourcing",
    description: "How to source filament-wound FRP pipe, tanks and vessels in China with defined laminate design, process records, pressure testing and supplier evidence.",
    definition: "Filament winding places resin-impregnated continuous reinforcement over a rotating mandrel at controlled angles. Hoop and helical layers can be tailored for pressure, axial load and handling, while liners and corrosion barriers address the service fluid. The winding program, laminate calculation and cure record are therefore part of the product definition—not interchangeable factory know-how.",
    suitableFor: ["Pressure and gravity pipe", "Chemical storage and process vessels", "Cylindrical tanks and ducting", "Repeatable axisymmetric parts"],
    processWindow: [
      { field: "Design basis", control: "Pressure, vacuum, axial loads, supports, nozzles and design factor", buyerCheck: "Approved calculation and laminate schedule" },
      { field: "Corrosion barrier", control: "Liner resin, surfacing veil, chopped layer and thickness", buyerCheck: "Service compatibility and barrier measurement" },
      { field: "Winding program", control: "Fiber angle, bandwidth, tension and layer sequence", buyerCheck: "Machine program identity and winding log" },
      { field: "Cure and proof", control: "Gel/cure cycle, post-cure and hydrostatic test", buyerCheck: "Batch cure record and witnessed test report" },
    ],
    failureModes: [
      { risk: "Leakage or weeping", cause: "Liner defect, poor joint preparation or local dry fiber", evidence: "Holiday/leak test, hydrotest and joint procedure" },
      { risk: "Premature pressure failure", cause: "Wrong angle, fiber content or laminate thickness", evidence: "Winding record, thickness map and qualification test" },
      { risk: "Chemical attack", cause: "Incorrect resin/cure or incomplete corrosion barrier", evidence: "Resin certificate, cure test and service review" },
    ],
    rfqInputs: ["Fluid composition and temperature", "Operating/design pressure and vacuum", "Diameter, length and stiffness class", "Design code and test pressure", "Fittings, joints, supports and nozzles", "Inspection hold points and documentation"],
    productSlugs: ["frp-pipe", "resin-gelcoat", "fiber-glass"],
    supplierQuery: "filament winding",
  },
  {
    slug: "compression-molding",
    name: "SMC/BMC compression molding",
    title: "SMC & BMC Compression Molding in China: Supplier & QA Guide",
    description: "A sourcing and QA guide for SMC/BMC compression-molded composite parts in China, covering tooling, compound control, molding windows, inspection and suppliers.",
    definition: "Compression molding forms a measured charge of sheet molding compound (SMC) or bulk molding compound (BMC) in a heated matched-metal tool. It supports integrated ribs, bosses, inserts, color and high-volume repeatability, but tooling, charge pattern, compound maturation and the molding window must be controlled together to prevent cosmetic and structural variation.",
    suitableFor: ["Electrical enclosures and covers", "Automotive and transport components", "Meter boxes and infrastructure parts", "Repeat molded parts with integrated features"],
    processWindow: [
      { field: "Compound", control: "Resin, glass length/content, filler, thickener, inhibitor and maturation", buyerCheck: "Approved compound specification and batch record" },
      { field: "Charge pattern", control: "Charge weight, placement and material coverage", buyerCheck: "Documented setup tied to part revision" },
      { field: "Molding cycle", control: "Tool temperature, pressure, close speed and cure time", buyerCheck: "Parameter log and first-off approval" },
      { field: "Tool and inserts", control: "Cavity condition, venting, release system and insert placement", buyerCheck: "Tool-maintenance status and insert traceability" },
    ],
    failureModes: [
      { risk: "Short fill or knit-line weakness", cause: "Poor charge placement, low flow or inadequate venting", evidence: "First article, section review and critical-load test" },
      { risk: "Blister, porosity or surface waviness", cause: "Moisture, trapped gas or unstable cure", evidence: "Appearance limit sample and destructive validation where required" },
      { risk: "Warpage or dimensional drift", cause: "Uneven shrinkage, ejection or tool temperature", evidence: "Fixture/CMM plan and capability study" },
    ],
    rfqInputs: ["3D model and controlled drawing", "Annual volume and batch size", "Mechanical, electrical and fire requirements", "Surface class, color and texture", "Insert and assembly requirements", "Tool ownership, maintenance and spare strategy"],
    productSlugs: ["smc-bmc", "resin-gelcoat", "fiber-glass"],
    supplierQuery: "compression molding",
  },
] as const;

export function getProcessPage(slug: string): ProcessPage | null {
  return PROCESS_PAGES.find((page) => page.slug === slug) ?? null;
}
