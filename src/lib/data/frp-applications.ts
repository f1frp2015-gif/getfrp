export type FrpApplication = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  products: readonly string[];
  image: string;
  imageAlt: string;
  imagePosition: string;
  searchQuery: string;
  detailPath?: string;
  wide?: boolean;
  credit: {
    title: string;
    creator: string;
    sourceUrl: string;
    license: string;
    licenseUrl: string;
  };
};

const PEXELS_LICENSE = "https://www.pexels.com/license/";

// Temporary, locally hosted cover photography. Replace the WebP files in
// public/application-assets/ with like-for-like industry imagery when owned
// project photography is available; keeping the filenames preserves page SEO.
export const FRP_APPLICATIONS: readonly FrpApplication[] = [
  {
    slug: "infrastructure-construction",
    eyebrow: "Civil infrastructure",
    title: "Infrastructure & Construction",
    description:
      "Corrosion-resistant reinforcement and structural systems for bridges, waterfronts, tunnels and demanding public works.",
    products: ["GFRP rebar", "Bridge decks", "Structural profiles"],
    image: "/application-assets/frp-bridge-infrastructure-application.webp",
    imageAlt:
      "Bridge deck under construction, representing FRP infrastructure applications",
    imagePosition: "center 58%",
    searchQuery: "FRP rebar bridge deck structural profiles",
    detailPath: "/applications/construction",
    wide: true,
    credit: {
      title: "Bridge under construction",
      creator: "Aleksey Vinogradov",
      sourceUrl: "https://www.pexels.com/photo/a-bridge-under-construction-9937651/",
      license: "Pexels License",
      licenseUrl: PEXELS_LICENSE,
    },
  },
  {
    slug: "chemical-processing-corrosion",
    eyebrow: "Severe corrosion",
    title: "Chemical Processing",
    description:
      "Resin-rich equipment and access systems engineered for acids, alkalis, salts and continuous plant exposure.",
    products: ["Tanks & vessels", "Grating", "Ducts & scrubbers"],
    image: "/application-assets/frp-chemical-plant-corrosion-application.webp",
    imageAlt:
      "Industrial processing tanks representing corrosion-resistant FRP applications",
    imagePosition: "center 62%",
    searchQuery: "corrosion resistant FRP tanks grating chemical plant",
    detailPath: "/applications/chemical-processing",
    credit: {
      title: "Industrial plant storage tanks",
      creator: "Brett Sayles",
      sourceUrl: "https://www.pexels.com/photo/photo-of-tanks-1871133/",
      license: "Pexels License",
      licenseUrl: PEXELS_LICENSE,
    },
  },
  {
    slug: "water-wastewater",
    eyebrow: "Wet environments",
    title: "Water & Wastewater",
    description:
      "Low-maintenance structures, covers and process equipment for treatment works, desalination and water conveyance.",
    products: ["Tank covers", "Pipes", "Platforms & handrails"],
    image: "/application-assets/frp-water-wastewater-treatment-application.webp",
    imageAlt:
      "Aerial view of a wastewater treatment facility representing FRP water applications",
    imagePosition: "center 54%",
    searchQuery: "FRP wastewater tank covers pipes handrails",
    detailPath: "/applications/wastewater-treatment",
    credit: {
      title: "Aerial view of a wastewater treatment plant",
      creator: "Marcin Jozwiak",
      sourceUrl: "https://www.pexels.com/photo/aerial-view-of-wastewater-treatment-plant-3808769/",
      license: "Pexels License",
      licenseUrl: PEXELS_LICENSE,
    },
  },
  {
    slug: "wind-energy",
    eyebrow: "Renewable energy",
    title: "Wind Energy",
    description:
      "High-specific-strength laminates and pultrusions for long blades, nacelles, spar caps and secondary structures.",
    products: ["Blade laminates", "Spar caps", "Nacelle components"],
    image: "/application-assets/frp-wind-turbine-blade-application.webp",
    imageAlt:
      "Close view of wind turbine blades representing large composite structures",
    imagePosition: "center 48%",
    searchQuery: "wind turbine blade fiberglass carbon fiber composites",
    credit: {
      title: "Wind turbine from below",
      creator: "Vadym Alyekseyenko",
      sourceUrl: "https://www.pexels.com/photo/wind-turbine-from-below-10923307/",
      license: "Pexels License",
      licenseUrl: PEXELS_LICENSE,
    },
  },
  {
    slug: "marine-offshore",
    eyebrow: "Marine exposure",
    title: "Marine & Offshore",
    description:
      "Lightweight hulls, decks and topside structures built for fatigue, seawater exposure and long service intervals.",
    products: ["Boat hulls", "Deck panels", "Offshore grating"],
    image: "/application-assets/frp-marine-yacht-hull-application.webp",
    imageAlt:
      "Composite sailing yachts in a marina representing marine FRP applications",
    imagePosition: "center 65%",
    searchQuery: "marine FRP boat hull deck offshore grating",
    detailPath: "/applications/marine",
    wide: true,
    credit: {
      title: "Sailing yacht docked at a marina",
      creator: "Gizem Erol",
      sourceUrl: "https://www.pexels.com/photo/elegant-sailing-yacht-docked-at-sunny-marina-30734869/",
      license: "Pexels License",
      licenseUrl: PEXELS_LICENSE,
    },
  },
  {
    slug: "rail-transportation",
    eyebrow: "Mass transit",
    title: "Rail & Transportation",
    description:
      "Fire-conscious, lightweight panels and profiles for rail interiors, vehicle bodies and transport infrastructure.",
    products: ["Interior panels", "Body components", "Cable management"],
    image: "/application-assets/frp-rail-transport-composite-application.webp",
    imageAlt:
      "Busy rail station representing lightweight composite transportation applications",
    imagePosition: "center 62%",
    searchQuery: "FRP rail transit interior panels vehicle components",
    credit: {
      title: "Train station",
      creator: "Kaique Rocha",
      sourceUrl: "https://www.pexels.com/photo/train-station-109915/",
      license: "Pexels License",
      licenseUrl: PEXELS_LICENSE,
    },
  },
  {
    slug: "electrical-utilities",
    eyebrow: "Electrical insulation",
    title: "Electrical & Utilities",
    description:
      "Nonconductive, weather-resistant structures for distribution, substations, telecom and line maintenance.",
    products: ["Utility poles", "Crossarms", "Ladders & cable trays"],
    image: "/application-assets/frp-electrical-utility-pole-application.webp",
    imageAlt:
      "High-voltage transmission tower representing FRP electrical utility applications",
    imagePosition: "center 76%",
    searchQuery: "FRP utility poles crossarms ladders cable trays",
    detailPath: "/applications/electrical",
    wide: true,
    credit: {
      title: "Transmission tower",
      creator: "H&CO",
      sourceUrl: "https://www.pexels.com/photo/transmission-tower-2802106/",
      license: "Pexels License",
      licenseUrl: PEXELS_LICENSE,
    },
  },
  {
    slug: "aerospace",
    eyebrow: "High performance",
    title: "Aerospace",
    description:
      "High-modulus carbon and glass composite structures where mass, stiffness and fatigue performance drive design.",
    products: ["Wing structures", "Fairings", "Interior components"],
    image: "/application-assets/frp-aerospace-aircraft-wing-application.webp",
    imageAlt:
      "Aircraft wing above the clouds representing aerospace composite applications",
    imagePosition: "center 78%",
    searchQuery: "aerospace carbon fiber composite wing structures",
    wide: true,
    credit: {
      title: "Aircraft wing",
      creator: "Victor Freitas",
      sourceUrl: "https://www.pexels.com/photo/aircraft-wing-1381422/",
      license: "Pexels License",
      licenseUrl: PEXELS_LICENSE,
    },
  },
];
