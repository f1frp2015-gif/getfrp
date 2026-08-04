export type SupplierCapabilityGroupId = "fiber" | "resin" | "process";

export type SupplierCapability = {
  id: string;
  label: string;
  description: string;
  keywords: readonly string[];
};

export type SupplierCapabilityGroup = {
  id: SupplierCapabilityGroupId;
  eyebrow: string;
  title: string;
  description: string;
  items: readonly SupplierCapability[];
};

export const SUPPLIER_CAPABILITY_GROUPS: readonly SupplierCapabilityGroup[] = [
  {
    id: "fiber",
    eyebrow: "Reinforcement",
    title: "Browse by fiber type",
    description:
      "Find reinforcement producers and composite manufacturers working with the fiber family in your specification.",
    items: [
      {
        id: "fiber-glass",
        label: "Glass Fiber & Fiberglass",
        description: "Roving, mat, fabric and chopped-strand reinforcement",
        keywords: [
          "glass fiber",
          "glass fibre",
          "fiberglass",
          "fibreglass",
          "glass roving",
          "chopped strand",
        ],
      },
      {
        id: "fiber-e-glass",
        label: "E-Glass",
        description: "General-purpose electrical-grade glass reinforcement",
        keywords: ["e-glass", "e glass"],
      },
      {
        id: "fiber-ecr-glass",
        label: "ECR Glass",
        description: "Corrosion-resistant glass fiber systems",
        keywords: ["ecr glass", "ecr-glass", "e-cr glass", "ecr fiberglass", "ecr"],
      },
      {
        id: "fiber-high-strength-glass",
        label: "S-Glass & High-Strength Glass",
        description: "Higher-strength glass reinforcement for demanding laminates",
        keywords: [
          "s-glass",
          "s glass",
          "s2-glass",
          "s2 glass",
          "high-strength glass",
          "high strength glass",
        ],
      },
      {
        id: "fiber-carbon",
        label: "Carbon Fiber",
        description: "Tow, fabric, prepreg and CFRP manufacturing capability",
        keywords: ["carbon fiber", "carbon fibre", "cfrp", "carbon tow"],
      },
      {
        id: "fiber-basalt",
        label: "Basalt Fiber",
        description: "Basalt reinforcement, BFRP bar and engineered composites",
        keywords: ["basalt fiber", "basalt fibre", "bfrp", "basalt rebar"],
      },
      {
        id: "fiber-aramid",
        label: "Aramid Fiber",
        description: "Impact- and abrasion-resistant aramid reinforcement",
        keywords: ["aramid fiber", "aramid fibre", "aramid", "kevlar"],
      },
    ],
  },
  {
    id: "resin",
    eyebrow: "Matrix system",
    title: "Browse by resin type",
    description:
      "Shortlist resin producers, formulators and FRP factories by the matrix chemistry required for performance and exposure.",
    items: [
      {
        id: "resin-polyester",
        label: "Unsaturated Polyester (UPR)",
        description: "Orthophthalic, isophthalic and general-purpose FRP resin",
        keywords: [
          "unsaturated polyester",
          "polyester resin",
          "upr resin",
          "orthophthalic",
          "isophthalic",
        ],
      },
      {
        id: "resin-vinyl-ester",
        label: "Vinyl Ester",
        description: "Chemical- and corrosion-resistant FRP matrix systems",
        keywords: ["vinyl ester", "vinylester"],
      },
      {
        id: "resin-epoxy",
        label: "Epoxy",
        description: "Structural, electrical, prepreg and high-performance resin",
        keywords: ["epoxy resin", "epoxy", "epoxide"],
      },
      {
        id: "resin-phenolic",
        label: "Phenolic",
        description: "Fire-, smoke- and heat-focused thermoset resin systems",
        keywords: ["phenolic resin", "phenolic"],
      },
      {
        id: "resin-polyurethane",
        label: "Polyurethane (PU)",
        description: "Fast-processing pultrusion and structural composite resin",
        keywords: ["polyurethane resin", "polyurethane", "pu resin"],
      },
      {
        id: "resin-thermoplastic",
        label: "Thermoplastic Matrix",
        description: "PP, PA, PEEK and recyclable thermoplastic composites",
        keywords: [
          "thermoplastic composite",
          "thermoplastic resin",
          "thermoplastic",
          "polypropylene composite",
          "pa6 composite",
          "peek composite",
        ],
      },
    ],
  },
  {
    id: "process",
    eyebrow: "Manufacturing route",
    title: "Browse by FRP process",
    description:
      "Match geometry, volume and quality requirements to factories with the right composite manufacturing route.",
    items: [
      {
        id: "process-pultrusion",
        label: "Pultrusion",
        description: "Continuous profiles, rods, tubes, rebar and structural sections",
        keywords: ["pultrusion", "pultruded"],
      },
      {
        id: "process-filament-winding",
        label: "Filament Winding",
        description: "FRP pipe, tanks, pressure vessels and cylindrical parts",
        keywords: ["filament winding", "winding process", "wound pipe", "wound tank"],
      },
      {
        id: "process-compression-molding",
        label: "Compression Molding (SMC/BMC)",
        description: "Repeatable molded parts for medium- and high-volume programs",
        keywords: [
          "compression molding",
          "compression moulding",
          "smc molding",
          "smc moulding",
          "bmc molding",
          "bmc moulding",
          "sheet molding compound",
          "bulk molding compound",
        ],
      },
      {
        id: "process-rtm",
        label: "Resin Transfer Molding (RTM)",
        description: "Closed-mold structural and appearance components",
        keywords: [
          "resin transfer molding",
          "resin transfer moulding",
          "rtm molding",
          "rtm moulding",
          "rtm process",
          "rtm",
          "light rtm",
        ],
      },
      {
        id: "process-vacuum-infusion",
        label: "Vacuum Infusion & VARTM",
        description: "Large marine, wind-energy and industrial laminates",
        keywords: [
          "vacuum infusion",
          "vacuum assisted resin transfer",
          "vartm",
          "vacuum bag infusion",
        ],
      },
      {
        id: "process-hand-lay-up",
        label: "Hand Lay-Up",
        description: "Low-volume, large-format and custom FRP fabrication",
        keywords: ["hand lay-up", "hand layup", "hand lay up", "hand laminated"],
      },
      {
        id: "process-spray-up",
        label: "Spray-Up",
        description: "Chopper-gun open molding for panels, covers and shells",
        keywords: [
          "spray-up",
          "spray up",
          "spray molding",
          "spray moulding",
          "chopper gun",
        ],
      },
      {
        id: "process-prepreg-autoclave",
        label: "Prepreg & Autoclave",
        description: "Aerospace, transport and high-performance composite parts",
        keywords: ["prepreg", "pre-preg", "autoclave molding", "autoclave moulding", "autoclave"],
      },
      {
        id: "process-continuous-lamination",
        label: "Continuous Lamination",
        description: "Flat and corrugated FRP sheet and panel production",
        keywords: [
          "continuous lamination",
          "continuous laminating",
          "continuous panel",
          "continuous sheet",
        ],
      },
      {
        id: "process-thermoplastic-molding",
        label: "Thermoplastic Molding (LFT/GMT)",
        description: "Long-fiber thermoplastic and glass-mat thermoplastic parts",
        keywords: [
          "long fiber thermoplastic",
          "long fibre thermoplastic",
          "glass mat thermoplastic",
          "lft molding",
          "lft moulding",
          "gmt molding",
          "gmt moulding",
          "lft",
          "thermoplastic forming",
        ],
      },
    ],
  },
] as const;

export const SUPPLIER_CAPABILITIES = SUPPLIER_CAPABILITY_GROUPS.flatMap(
  (group) => group.items,
);

export function findSupplierCapability(id: string) {
  return SUPPLIER_CAPABILITIES.find((item) => item.id === id);
}

export function supplierMatchesCapability(
  capabilityId: string,
  values: ReadonlyArray<string | readonly string[] | null | undefined>,
) {
  const capability = findSupplierCapability(capabilityId);
  if (!capability) return true;

  const searchableValues = values
    .flatMap((value) => (Array.isArray(value) ? value : [value]))
    .filter((value): value is string => typeof value === "string")
    .map((value) => value.toLowerCase());

  return capability.keywords.some((keyword) =>
    searchableValues.some((value) => value.includes(keyword.toLowerCase())),
  );
}
