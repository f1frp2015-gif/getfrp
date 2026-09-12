export const PROCUREMENT_UPDATED = "2026-09-12";
export const PROCUREMENT_BRIEFS: Record<string, { label: string; fields: string[]; guide: string }> = {
  "frp-grating": {
    label: "FRP grating",
    fields: ["Molded or pultruded construction", "Panel depth, mesh, usable dimensions and cut plan", "Resin, surface and colour", "Support span, load cases and deflection limit", "Fire, slip and exposure requirements", "Clips, edge sealing, packing and inspection"],
    guide: "/source-from-china/frp-grating-price-china",
  },
  "pultruded-profiles": {
    label: "Pultruded FRP profiles",
    fields: ["Cross-section drawing and revision", "Resin and reinforcement system", "Length, straightness and dimensional tolerances", "Load direction, connections and acceptance criteria", "Surface, machining and tooling ownership", "First-article evidence and bundle support"],
    guide: "/sourcing/pultruded-profiles",
  },
  "frp-pipe": {
    label: "FRP / GRP pipe",
    fields: ["Service medium, concentration and temperature", "Diameter, pressure and stiffness requirements", "Liner, resin, wall construction and design basis", "Joint system, fittings and installation conditions", "Qualification tests and inspection hold points", "End protection, packing and handling plan"],
    guide: "/sourcing/frp-piping",
  },
};
