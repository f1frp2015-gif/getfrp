export type UsFrpMarketCompany = {
  name: string;
  location: string;
  logo: string;
  website: string;
  directory: "FRP shapes" | "FRP panels";
};

// Initial U.S. market-reference set compiled from the public Thomasnet
// Fiberglass Reinforced Plastic (FRP) Shapes and FRP Panels directories.
// Directory inclusion is not evidence of a customer or partnership relationship.
// Logo files are local copies of the directory artwork, except Acculam, whose
// transparent wordmark was downloaded from its official website after the
// Thomasnet image endpoint rejected the asset request.
export const US_FRP_MARKET_COMPANIES: UsFrpMarketCompany[] = [
  {
    name: "A-1 Alloys",
    location: "San Diego, CA",
    logo: "/us-frp-market/a-1-alloys.jpg",
    website: "https://products.a1alloys.net",
    directory: "FRP shapes",
  },
  {
    name: "Aerospace Alloys",
    location: "Bloomfield, CT",
    logo: "/us-frp-market/aerospace-alloys.jpg",
    website: "https://www.aalloys.com",
    directory: "FRP shapes",
  },
  {
    name: "Aeron Composite",
    location: "Florence, KY",
    logo: "/us-frp-market/aeron-composite.jpg",
    website: "https://www.aeroncomposite.com",
    directory: "FRP shapes",
  },
  {
    name: "Emco Industrial Plastics",
    location: "Cedar Grove, NJ",
    logo: "/us-frp-market/emco-industrial-plastics.jpg",
    website: "https://www.emcoplastics.com",
    directory: "FRP shapes",
  },
  {
    name: "Carrier & Sandstedt",
    location: "Naperville, IL",
    logo: "/us-frp-market/carrier-sandstedt.jpg",
    website: "https://www.carriersandstedt.com",
    directory: "FRP shapes",
  },
  {
    name: "Tencom",
    location: "Holland, OH",
    logo: "/us-frp-market/tencom.png",
    website: "https://www.tencom.com",
    directory: "FRP shapes",
  },
  {
    name: "Amtek Tool & Supply",
    location: "Warren, MI",
    logo: "/us-frp-market/amtek-tool-supply.jpg",
    website: "https://amtektool.com",
    directory: "FRP shapes",
  },
  {
    name: "Arizona FRP Supply",
    location: "Nogales, AZ",
    logo: "/us-frp-market/arizona-frp-supply.png",
    website: "https://www.arizonafrpsupply.com",
    directory: "FRP shapes",
  },
  {
    name: "Acculam",
    location: "Falmouth, MA",
    logo: "/us-frp-market/acculam.png",
    website: "https://acculam.com",
    directory: "FRP shapes",
  },
  {
    name: "Ensinger",
    location: "Washington, PA",
    logo: "/us-frp-market/ensinger.jpg",
    website: "https://www.ensingerplastics.com",
    directory: "FRP shapes",
  },
  {
    name: "McNICHOLS",
    location: "Tampa, FL",
    logo: "/us-frp-market/mcnichols.png",
    website: "https://www.mcnichols.com",
    directory: "FRP shapes",
  },
  {
    name: "Bedford Reinforced Plastics",
    location: "Bedford, PA",
    logo: "/us-frp-market/bedford-reinforced-plastics.png",
    website: "https://bedfordreinforced.com",
    directory: "FRP shapes",
  },
  {
    name: "Strongwell",
    location: "Bristol, VA",
    logo: "/us-frp-market/strongwell.jpg",
    website: "https://www.strongwell.com",
    directory: "FRP shapes",
  },
  {
    name: "Cope Plastics",
    location: "Alton, IL",
    logo: "/us-frp-market/cope-plastics.jpg",
    website: "https://www.copeplastics.com",
    directory: "FRP shapes",
  },
  {
    name: "Certified Thermoplastics",
    location: "Santa Clarita, CA",
    logo: "/us-frp-market/certified-thermoplastics.png",
    website: "https://www.ctplastics.com",
    directory: "FRP shapes",
  },
  {
    name: "Fabrication Specialties",
    location: "Bridgeview, IL",
    logo: "/us-frp-market/fabrication-specialties.jpg",
    website: "https://www.fabricationspecialties.com",
    directory: "FRP shapes",
  },
  {
    name: "Hanlon Composites",
    location: "Euclid, OH",
    logo: "/us-frp-market/hanlon-composites.png",
    website: "https://www.hanloncomposites.com",
    directory: "FRP shapes",
  },
  {
    name: "Ershigs",
    location: "Bellingham, WA",
    logo: "/us-frp-market/ershigs.jpeg",
    website: "https://www.ershigs.com",
    directory: "FRP shapes",
  },
  {
    name: "WYN Industries",
    location: "Whitestown, IN",
    logo: "/us-frp-market/wyn-industries.png",
    website: "https://wynindustries.com",
    directory: "FRP shapes",
  },
  {
    name: "ArmorCore by Waco Composites",
    location: "Waco, TX",
    logo: "/us-frp-market/armorcore.png",
    website: "https://www.armorcore.com",
    directory: "FRP panels",
  },
  {
    name: "Fiberglass Innovations",
    location: "Rockford, IL",
    logo: "/us-frp-market/fiberglass-innovations.png",
    website: "https://www.fiberglassinnovations.com",
    directory: "FRP panels",
  },
  {
    name: "Panel Built",
    location: "Blairsville, GA",
    logo: "/us-frp-market/panel-built.jpg",
    website: "https://www.panelbuilt.com",
    directory: "FRP panels",
  },
  {
    name: "CID Controls",
    location: "Sarver, PA",
    logo: "/us-frp-market/cid-controls.jpg",
    website: "https://www.cidcontrols.com",
    directory: "FRP panels",
  },
  {
    name: "ArtUSA Noise Control Products",
    location: "Cumming, GA",
    logo: "/us-frp-market/artusa-noise-control.png",
    website: "https://www.noisecontrolproducts.com",
    directory: "FRP panels",
  },
  {
    name: "INCOM Distributor Supply",
    location: "Fort Wayne, IN",
    logo: "/us-frp-market/incom-distributor-supply.jpg",
    website: "https://shop.incomsupply.com",
    directory: "FRP panels",
  },
  {
    name: "MTH Industrial Solutions",
    location: "Bradenton, FL",
    logo: "/us-frp-market/mth-industrial-solutions.jpg",
    website: "https://www.mthindustrialsolutions.com",
    directory: "FRP panels",
  },
  {
    name: "Advanced Insulation Concepts",
    location: "Florence, KY",
    logo: "/us-frp-market/advanced-insulation-concepts.png",
    website: "https://www.aicinsulate.com",
    directory: "FRP panels",
  },
  {
    name: "Pacific Panels",
    location: "Oakland, CA",
    logo: "/us-frp-market/pacific-panels.png",
    website: "https://www.pacificpanels.com",
    directory: "FRP panels",
  },
  {
    name: "Kal-Lite",
    location: "Bow, NH",
    logo: "/us-frp-market/kal-lite.jpg",
    website: "https://www.kal-lite.com",
    directory: "FRP panels",
  },
  {
    name: "Stabilit America",
    location: "Moscow, TN",
    logo: "/us-frp-market/stabilit-america.svg",
    website: "https://www.stabilitamerica.com",
    directory: "FRP panels",
  },
];

export const US_FRP_MARKET_SOURCES = {
  checkedAt: "August 25, 2026",
  shapes:
    "https://www.thomasnet.com/suppliers/usa/fiberglass-reinforced-plastic-frp-shapes-74161159",
  panels:
    "https://www.thomasnet.com/suppliers/usa/fiberglass-reinforced-plastic-frp-panels-56620305",
} as const;
