export type FrpApplicationGroup =
  | "mobility"
  | "built-environment"
  | "energy-harsh-service"
  | "industry-everyday";

export type FrpApplication = {
  slug: string;
  group: FrpApplicationGroup;
  eyebrow: string;
  title: string;
  description: string;
  useCases: readonly string[];
  image: string;
  imageAlt: string;
  imagePosition: string;
  searchQuery: string;
  detailPath?: string;
  credit: {
    title: string;
    creator: string;
    sourceUrl: string;
    license: string;
    licenseUrl: string;
  };
};

export const FRP_APPLICATION_GROUPS: readonly {
  id: FrpApplicationGroup;
  eyebrow: string;
  title: string;
  description: string;
}[] = [
  {
    id: "mobility",
    eyebrow: "Lightweight mobility",
    title: "Mobility & Defence",
    description:
      "Composite structures that reduce mass, manage fatigue and deliver complex shapes across air, road, rail, sea and defence platforms.",
  },
  {
    id: "built-environment",
    eyebrow: "Long-life infrastructure",
    title: "Built Environment & Civic Systems",
    description:
      "Durable, nonconductive and low-maintenance systems for public works, buildings, water assets and connected infrastructure.",
  },
  {
    id: "energy-harsh-service",
    eyebrow: "Severe service",
    title: "Energy, Utilities & Harsh Environments",
    description:
      "Corrosion resistance, electrical insulation and high specific strength for energy production, storage and process industries.",
  },
  {
    id: "industry-everyday",
    eyebrow: "Engineered products",
    title: "Industry, Health & Everyday Products",
    description:
      "Repeatable composite parts that improve machine performance, human mobility, product ergonomics and long-term outdoor durability.",
  },
];

const PEXELS_LICENSE = "https://www.pexels.com/license/";

// Temporary, locally hosted cover photography. Replace the WebP files in
// public/application-assets/ with like-for-like industry imagery when owned
// project photography is available; keeping the filenames preserves page SEO.
export const FRP_APPLICATIONS: readonly FrpApplication[] = [
  {
    slug: "aerospace-space",
    group: "mobility",
    eyebrow: "Flight structures",
    title: "Aerospace & Space",
    description:
      "High-modulus carbon and glass composite structures where mass, stiffness, fatigue and thermal stability drive design.",
    useCases: [
      "Wings & fuselages",
      "Interior panels",
      "Radomes",
      "Satellite structures",
      "UAV airframes",
      "Cargo containers",
    ],
    image: "/application-assets/frp-aerospace-aircraft-wing-application.webp",
    imageAlt:
      "Aircraft wing above the clouds representing aerospace and space composite applications",
    imagePosition: "center 78%",
    searchQuery: "aerospace carbon fiber composite wing radome structures",
    credit: {
      title: "Aircraft wing",
      creator: "Victor Freitas",
      sourceUrl: "https://www.pexels.com/photo/aircraft-wing-1381422/",
      license: "Pexels License",
      licenseUrl: PEXELS_LICENSE,
    },
  },
  {
    slug: "automotive-road-transportation",
    group: "mobility",
    eyebrow: "Road mobility",
    title: "Automotive & Road Transportation",
    description:
      "Lightweight, corrosion-resistant parts for electric, commercial and performance vehicles, from body panels to energy-absorbing structures.",
    useCases: [
      "Body panels",
      "Battery enclosures",
      "Composite leaf springs",
      "Crash beams",
      "Drive shafts",
      "Seat structures",
    ],
    image: "/application-assets/frp-automotive-electric-vehicle-application.webp",
    imageAlt:
      "Robotic automotive production line representing composite vehicle applications",
    imagePosition: "center 54%",
    searchQuery: "automotive composite body panel battery enclosure leaf spring",
    credit: {
      title: "Robots assembling a car in a modern factory",
      creator: "Hyundai Motor Group",
      sourceUrl: "https://www.pexels.com/photo/assembling-machines-in-factory-19233057/",
      license: "Pexels License",
      licenseUrl: PEXELS_LICENSE,
    },
  },
  {
    slug: "rail-mass-transit",
    group: "mobility",
    eyebrow: "Mass transit",
    title: "Rail & Mass Transit",
    description:
      "Fire-conscious, lightweight panels and profiles for rolling stock, passenger spaces, stations and trackside systems.",
    useCases: [
      "Interior panels",
      "Gangways",
      "Nose cones",
      "Platform decking",
      "Trackside cabinets",
      "Insulated rail joints",
    ],
    image: "/application-assets/frp-rail-transport-composite-application.webp",
    imageAlt:
      "Busy rail station representing lightweight composite rail and mass-transit applications",
    imagePosition: "center 62%",
    searchQuery: "FRP rail transit interior panels platform decking",
    credit: {
      title: "Train station",
      creator: "Kaique Rocha",
      sourceUrl: "https://www.pexels.com/photo/train-station-109915/",
      license: "Pexels License",
      licenseUrl: PEXELS_LICENSE,
    },
  },
  {
    slug: "marine-shipbuilding-offshore",
    group: "mobility",
    eyebrow: "Marine exposure",
    title: "Marine, Shipbuilding & Offshore",
    description:
      "Lightweight structures built for fatigue, seawater exposure, impact performance and long service intervals on and near the water.",
    useCases: [
      "Hulls & decks",
      "Superstructures",
      "Masts",
      "Marine grating",
      "Fenders",
      "Offshore access systems",
    ],
    image: "/application-assets/frp-marine-yacht-hull-application.webp",
    imageAlt:
      "Composite sailing yachts in a marina representing marine, shipbuilding and offshore FRP applications",
    imagePosition: "center 65%",
    searchQuery: "marine FRP boat hull deck offshore grating",
    detailPath: "/applications/marine",
    credit: {
      title: "Sailing yacht docked at a marina",
      creator: "Gizem Erol",
      sourceUrl: "https://www.pexels.com/photo/elegant-sailing-yacht-docked-at-sunny-marina-30734869/",
      license: "Pexels License",
      licenseUrl: PEXELS_LICENSE,
    },
  },
  {
    slug: "defence-security-ballistics",
    group: "mobility",
    eyebrow: "Protection systems",
    title: "Defence, Security & Ballistics",
    description:
      "High-performance laminates and sandwich structures for impact protection, signature management and deployable systems.",
    useCases: [
      "Ballistic panels",
      "Helmets",
      "Armoured vehicle parts",
      "Military radomes",
      "UAV structures",
      "Deployable shelters",
    ],
    image: "/application-assets/frp-defense-armored-vehicle-application.webp",
    imageAlt:
      "Military armoured vehicle representing defence, security and ballistic composite applications",
    imagePosition: "center 58%",
    searchQuery: "ballistic composite armor panel military radome FRP",
    credit: {
      title: "Military armoured vehicle",
      creator: "Etkin Celep",
      sourceUrl: "https://www.pexels.com/photo/photo-of-a-military-armoured-vehicle-11349527/",
      license: "Pexels License",
      licenseUrl: PEXELS_LICENSE,
    },
  },
  {
    slug: "infrastructure-civil-engineering",
    group: "built-environment",
    eyebrow: "Civil infrastructure",
    title: "Infrastructure & Civil Engineering",
    description:
      "Corrosion-resistant reinforcement and structural systems for bridges, waterfronts, tunnels and demanding public works.",
    useCases: [
      "GFRP rebar",
      "Bridge decks",
      "Pedestrian bridges",
      "Composite sheet piles",
      "Drainage & scuppers",
      "Tunnel structures",
    ],
    image: "/application-assets/frp-bridge-infrastructure-application.webp",
    imageAlt:
      "Bridge deck under construction representing FRP infrastructure and civil-engineering applications",
    imagePosition: "center 58%",
    searchQuery: "FRP rebar bridge deck structural profiles sheet pile",
    detailPath: "/applications/construction",
    credit: {
      title: "Bridge under construction",
      creator: "Aleksey Vinogradov",
      sourceUrl: "https://www.pexels.com/photo/a-bridge-under-construction-9937651/",
      license: "Pexels License",
      licenseUrl: PEXELS_LICENSE,
    },
  },
  {
    slug: "building-architecture",
    group: "built-environment",
    eyebrow: "Building envelope",
    title: "Building & Architecture",
    description:
      "Shapeable, durable components for envelopes, roofing and secondary structures where appearance and low maintenance matter.",
    useCases: [
      "Facade panels",
      "Roofing & siding",
      "Purlins & girts",
      "Windows & doors",
      "Canopies",
      "Handrails & decking",
    ],
    image: "/application-assets/frp-building-architecture-facade-application.webp",
    imageAlt:
      "Modern geometric building facade representing architectural composite applications",
    imagePosition: "center 48%",
    searchQuery: "architectural FRP facade panel roofing pultruded profile",
    credit: {
      title: "Modern building with geometric architecture",
      creator: "Laura Tancredi",
      sourceUrl: "https://www.pexels.com/photo/modern-building-with-geometric-architecture-7078361/",
      license: "Pexels License",
      licenseUrl: PEXELS_LICENSE,
    },
  },
  {
    slug: "water-wastewater-desalination",
    group: "built-environment",
    eyebrow: "Wet environments",
    title: "Water, Wastewater & Desalination",
    description:
      "Low-maintenance structures, covers and process equipment for treatment works, desalination and water conveyance.",
    useCases: [
      "Tank covers",
      "Process piping",
      "Scrubbers & ducts",
      "Grating & platforms",
      "Handrails & ladders",
      "Desalination components",
    ],
    image: "/application-assets/frp-water-wastewater-treatment-application.webp",
    imageAlt:
      "Aerial view of a wastewater treatment facility representing FRP water, wastewater and desalination applications",
    imagePosition: "center 54%",
    searchQuery: "FRP wastewater tank covers pipes handrails desalination",
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
    slug: "telecom-data-centers",
    group: "built-environment",
    eyebrow: "Connected infrastructure",
    title: "Telecom & Data Centers",
    description:
      "Radio-transparent, nonconductive and corrosion-resistant systems for networks, rooftop installations and mission-critical facilities.",
    useCases: [
      "Antenna radomes",
      "Telecom poles",
      "Cable trays",
      "Cooling-tower structures",
      "Cable-management systems",
      "Rooftop screens",
    ],
    image: "/application-assets/frp-telecom-data-center-application.webp",
    imageAlt:
      "Rows of server racks representing FRP telecom and data-center infrastructure applications",
    imagePosition: "center 52%",
    searchQuery: "FRP telecom radome pole cable tray data center",
    credit: {
      title: "Server racks in a data center",
      creator: "Brett Sayles",
      sourceUrl: "https://www.pexels.com/photo/server-racks-on-data-center-5480781/",
      license: "Pexels License",
      licenseUrl: PEXELS_LICENSE,
    },
  },
  {
    slug: "bath-pools-recreational-vehicles",
    group: "built-environment",
    eyebrow: "Moulded surfaces",
    title: "Bath, Pools & Recreational Vehicles",
    description:
      "Water-resistant moulded surfaces and lightweight sandwich panels for sanitary products, aquatic facilities and mobile living.",
    useCases: [
      "Shower trays",
      "Bathtubs",
      "Pool panels",
      "Water slides",
      "RV body panels",
      "Sanitary modules",
    ],
    image: "/application-assets/frp-pool-recreational-vehicle-application.webp",
    imageAlt:
      "Swimming pool and water slides representing FRP bath, pool and recreational-vehicle applications",
    imagePosition: "center 46%",
    searchQuery: "FRP swimming pool water slide RV composite panel bathroom",
    credit: {
      title: "Swimming pool with slides",
      creator: "Pixabay",
      sourceUrl: "https://www.pexels.com/photo/swimming-pool-with-slides-261348/",
      license: "Pexels License",
      licenseUrl: PEXELS_LICENSE,
    },
  },
  {
    slug: "wind-renewable-energy",
    group: "energy-harsh-service",
    eyebrow: "Renewable energy",
    title: "Wind & Renewable Energy",
    description:
      "High-specific-strength laminates and pultrusions for long blades, energy structures and equipment exposed to decades of cyclic loading.",
    useCases: [
      "Wind blades",
      "Spar caps",
      "Nacelles",
      "Solar support structures",
      "Tidal-energy blades",
      "Generator components",
    ],
    image: "/application-assets/frp-wind-turbine-blade-application.webp",
    imageAlt:
      "Close view of wind turbine blades representing wind and renewable-energy composite applications",
    imagePosition: "center 48%",
    searchQuery: "wind turbine blade fiberglass carbon fiber composites spar cap",
    credit: {
      title: "Wind turbine from below",
      creator: "Vadym Alyekseyenko",
      sourceUrl: "https://www.pexels.com/photo/wind-turbine-from-below-10923307/",
      license: "Pexels License",
      licenseUrl: PEXELS_LICENSE,
    },
  },
  {
    slug: "chemical-oil-gas-processing",
    group: "energy-harsh-service",
    eyebrow: "Severe corrosion",
    title: "Chemical, Oil & Gas Processing",
    description:
      "Resin-rich equipment and access systems engineered for acids, alkalis, salts, hydrocarbons and continuous plant exposure.",
    useCases: [
      "Tanks & vessels",
      "Process piping",
      "Ducts & scrubbers",
      "Industrial grating",
      "Ladders & platforms",
      "Corrosion liners",
    ],
    image: "/application-assets/frp-chemical-plant-corrosion-application.webp",
    imageAlt:
      "Industrial processing tanks representing corrosion-resistant FRP chemical, oil and gas applications",
    imagePosition: "center 62%",
    searchQuery: "corrosion resistant FRP tanks grating chemical oil gas plant",
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
    slug: "hydrogen-cng-pressure-vessels",
    group: "energy-harsh-service",
    eyebrow: "Stored energy",
    title: "Hydrogen, CNG & Pressure Vessels",
    description:
      "Filament-wound composite systems for lightweight high-pressure storage, transport and emerging hydrogen infrastructure.",
    useCases: [
      "Type III cylinders",
      "Type IV cylinders",
      "CNG tanks",
      "Hydrogen piping",
      "Tank liners & bosses",
      "Storage modules",
    ],
    image: "/application-assets/frp-hydrogen-pressure-vessel-application.webp",
    imageAlt:
      "Industrial storage tanks representing composite hydrogen, CNG and pressure-vessel applications",
    imagePosition: "center 58%",
    searchQuery: "composite hydrogen CNG type IV pressure vessel cylinder",
    credit: {
      title: "Industrial storage tanks at sunset in Rotterdam",
      creator: "Igor Passchier",
      sourceUrl: "https://www.pexels.com/photo/industrial-storage-tanks-at-sunset-in-rotterdam-32399133/",
      license: "Pexels License",
      licenseUrl: PEXELS_LICENSE,
    },
  },
  {
    slug: "electrical-utilities",
    group: "energy-harsh-service",
    eyebrow: "Electrical insulation",
    title: "Electrical & Utilities",
    description:
      "Nonconductive, weather-resistant structures for distribution networks, substations, generation assets and line maintenance.",
    useCases: [
      "Utility poles",
      "Crossarms",
      "Cable trays",
      "Substation structures",
      "Composite insulators",
      "Electrical enclosures",
    ],
    image: "/application-assets/frp-electrical-utility-pole-application.webp",
    imageAlt:
      "High-voltage transmission tower representing FRP electrical utility applications",
    imagePosition: "center 76%",
    searchQuery: "FRP utility poles crossarms insulators cable trays",
    detailPath: "/applications/electrical",
    credit: {
      title: "Transmission tower",
      creator: "H&CO",
      sourceUrl: "https://www.pexels.com/photo/transmission-tower-2802106/",
      license: "Pexels License",
      licenseUrl: PEXELS_LICENSE,
    },
  },
  {
    slug: "mining-mineral-processing",
    group: "energy-harsh-service",
    eyebrow: "Abrasive service",
    title: "Mining & Mineral Processing",
    description:
      "Corrosion-resistant access, fluid-handling and reinforcement systems for wet, abrasive and chemically aggressive mining operations.",
    useCases: [
      "Grating & walkways",
      "Slurry pipes",
      "Process launders",
      "Screen panels",
      "Composite rock bolts",
      "Plant structures",
    ],
    image: "/application-assets/frp-mining-mineral-processing-application.webp",
    imageAlt:
      "Open-pit industrial mine representing FRP mining and mineral-processing applications",
    imagePosition: "center 52%",
    searchQuery: "FRP mining grating slurry pipe rock bolt mineral processing",
    credit: {
      title: "Industrial open-pit mining site",
      creator: "Xiang Qi",
      sourceUrl: "https://www.pexels.com/photo/aerial-view-of-industrial-open-pit-mining-site-36236254/",
      license: "Pexels License",
      licenseUrl: PEXELS_LICENSE,
    },
  },
  {
    slug: "industrial-equipment-machinery",
    group: "industry-everyday",
    eyebrow: "Machine performance",
    title: "Industrial Equipment & Machinery",
    description:
      "Low-inertia, corrosion-resistant and dimensionally stable components for automated equipment and continuous production lines.",
    useCases: [
      "Robotic arms",
      "Machine rollers",
      "Composite drive shafts",
      "Paper-machine parts",
      "Tool handles",
      "Inspection tubes",
    ],
    image: "/application-assets/frp-industrial-robotics-machinery-application.webp",
    imageAlt:
      "Industrial robot arm representing FRP industrial equipment and machinery applications",
    imagePosition: "center 50%",
    searchQuery: "industrial composite robot arm roller drive shaft machinery",
    credit: {
      title: "Industrial robot arm in a manufacturing facility",
      creator: "Freek Wolsink",
      sourceUrl: "https://www.pexels.com/photo/industrial-robot-arm-in-a-manufacturing-facility-34207359/",
      license: "Pexels License",
      licenseUrl: PEXELS_LICENSE,
    },
  },
  {
    slug: "healthcare-medical-prosthetics",
    group: "industry-everyday",
    eyebrow: "Human mobility",
    title: "Healthcare, Medical & Prosthetics",
    description:
      "Lightweight, strong and X-ray-transparent components for mobility aids, imaging equipment and patient-care systems.",
    useCases: [
      "Prosthetic feet",
      "Orthotic braces",
      "Surgical tables",
      "Imaging tables",
      "Wheelchair frames",
      "Dental components",
    ],
    image: "/application-assets/frp-medical-prosthetics-application.webp",
    imageAlt:
      "Person with a prosthetic leg in rehabilitation representing medical composite applications",
    imagePosition: "center 44%",
    searchQuery: "carbon fiber prosthetic medical imaging table composite",
    credit: {
      title: "Man with prosthetic leg undergoing rehabilitation",
      creator: "Kampus Production",
      sourceUrl: "https://www.pexels.com/photo/a-man-with-prosthetic-leg-undergoing-rehabilitation-6111587/",
      license: "Pexels License",
      licenseUrl: PEXELS_LICENSE,
    },
  },
  {
    slug: "sports-leisure-recreation",
    group: "industry-everyday",
    eyebrow: "Performance products",
    title: "Sports, Leisure & Recreation",
    description:
      "High specific stiffness, tunable flex and impact performance for equipment used on roads, courts, slopes and water.",
    useCases: [
      "Bicycle frames",
      "Rackets",
      "Golf shafts",
      "Ski poles",
      "Helmets",
      "Boards & paddles",
    ],
    image: "/application-assets/frp-sports-bicycle-equipment-application.webp",
    imageAlt:
      "Road bicycle race representing high-performance composite sports equipment applications",
    imagePosition: "center 56%",
    searchQuery: "carbon fiber bicycle racket golf shaft sports equipment",
    credit: {
      title: "Road bicycle race",
      creator: "Leyla Helvaci",
      sourceUrl: "https://www.pexels.com/photo/road-bicycle-race-13358009/",
      license: "Pexels License",
      licenseUrl: PEXELS_LICENSE,
    },
  },
  {
    slug: "consumer-furniture-home-design",
    group: "industry-everyday",
    eyebrow: "Designed products",
    title: "Consumer, Furniture & Home",
    description:
      "Durable moulded forms and distinctive surfaces for products where low mass, design freedom and a premium finish matter.",
    useCases: [
      "Furniture shells",
      "Luggage",
      "Appliance housings",
      "Bathroom surfaces",
      "Musical instruments",
      "Design objects",
    ],
    image: "/application-assets/frp-consumer-furniture-design-application.webp",
    imageAlt:
      "Modern furniture interior representing composite consumer, furniture and home applications",
    imagePosition: "center 52%",
    searchQuery: "FRP molded furniture consumer product composite housing",
    credit: {
      title: "Modern furniture in a room",
      creator: "merve emre",
      sourceUrl: "https://www.pexels.com/photo/modern-furniture-in-room-14034362/",
      license: "Pexels License",
      licenseUrl: PEXELS_LICENSE,
    },
  },
  {
    slug: "agriculture-aquaculture-food-processing",
    group: "industry-everyday",
    eyebrow: "Rural & food systems",
    title: "Agriculture, Aquaculture & Food Processing",
    description:
      "Weatherable, washable and corrosion-resistant systems for controlled growing, aquatic production and hygienic processing.",
    useCases: [
      "Greenhouse profiles",
      "Aquaculture cages",
      "Irrigation pipe",
      "Livestock flooring",
      "Silo & tank panels",
      "Food-plant structures",
    ],
    image: "/application-assets/frp-agriculture-aquaculture-application.webp",
    imageAlt:
      "Aerial view of circular fish-farm nets representing FRP agriculture, aquaculture and food-processing applications",
    imagePosition: "center 50%",
    searchQuery: "FRP aquaculture cage greenhouse profile food processing",
    credit: {
      title: "Aerial view of a fish farm with circular nets",
      creator: "Esra Bürçün Erşahin",
      sourceUrl: "https://www.pexels.com/photo/aerial-view-of-fish-farm-with-circular-nets-30780717/",
      license: "Pexels License",
      licenseUrl: PEXELS_LICENSE,
    },
  },
];

export const FRP_APPLICATION_USE_CASE_COUNT = FRP_APPLICATIONS.reduce(
  (count, application) => count + application.useCases.length,
  0,
);
