export type NavigationLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavigationSection = {
  label: string;
  items: readonly NavigationLink[];
};

export type NavigationGroup = NavigationLink & {
  activePrefixes: readonly string[];
  ctaLabel: string;
  description: string;
  items: readonly NavigationLink[];
  sections: readonly NavigationSection[];
};

function normalizeNavigationSearch(search: string) {
  const params = new URLSearchParams(search);
  params.sort();
  return params.toString();
}

export function navigationHrefMatchesLocation(
  pathname: string,
  currentSearch: string | null,
  href: string,
) {
  const hashlessHref = href.split("#", 1)[0];
  const queryStart = hashlessHref.indexOf("?");
  const hrefPath =
    queryStart === -1 ? hashlessHref : hashlessHref.slice(0, queryStart);
  const hrefSearch =
    queryStart === -1 ? "" : hashlessHref.slice(queryStart + 1);

  return (
    currentSearch !== null &&
    pathname === hrefPath &&
    normalizeNavigationSearch(currentSearch) ===
      normalizeNavigationSearch(hrefSearch)
  );
}

export const PRODUCT_LINKS = [
  { label: "FRP grating", href: "/products/frp-grating" },
  { label: "Pultruded profiles", href: "/products/pultruded-profiles" },
  { label: "FRP pipe", href: "/products/frp-pipe" },
  { label: "FRP rebar", href: "/products/frp-rebar" },
  { label: "Carbon fiber", href: "/products/carbon-fiber" },
  { label: "FRP cable tray", href: "/products/frp-cable-tray" },
  { label: "FRP tank", href: "/products/frp-tank" },
  { label: "FRP manhole cover", href: "/products/frp-manhole-cover" },
  { label: "FRP handrail", href: "/products/frp-handrail" },
  { label: "FRP ladder", href: "/products/frp-ladder" },
  { label: "Carbon fiber prepreg", href: "/products/carbon-fiber-prepreg" },
  { label: "Fiberglass panel", href: "/products/fiberglass-panel" },
  { label: "Fiberglass sheet", href: "/products/fiberglass-sheet" },
  { label: "SMC / BMC", href: "/products/smc-bmc" },
  { label: "Resin & gelcoat", href: "/products/resin-gelcoat" },
  { label: "Glass fiber", href: "/products/fiber-glass" },
] as const satisfies readonly NavigationLink[];

export const PROCESS_LINKS = [
  { label: "Pultrusion", href: "/manufacturing/pultrusion" },
  { label: "Filament winding", href: "/manufacturing/filament-winding" },
  { label: "SMC molding", href: "/manufacturing/smc-molding" },
  { label: "RTM", href: "/manufacturing/rtm" },
  { label: "Hand lay-up", href: "/manufacturing/hand-layup" },
] as const satisfies readonly NavigationLink[];

export const APPLICATION_LINKS = [
  { label: "Wastewater treatment", href: "/applications/wastewater-treatment" },
  { label: "Marine", href: "/applications/marine" },
  { label: "Chemical processing", href: "/applications/chemical-processing" },
  { label: "Construction", href: "/applications/construction" },
  { label: "Electrical", href: "/applications/electrical" },
] as const satisfies readonly NavigationLink[];

export const STANDARD_LINKS = [
  { label: "EN 13706", href: "/standards/en-13706" },
  { label: "ASTM D7957", href: "/standards/astm-d7957" },
  { label: "ISO 9001", href: "/standards/iso-9001" },
  { label: "ASTM D3841", href: "/standards/astm-d3841" },
] as const satisfies readonly NavigationLink[];

export const SOURCING_GUIDE_LINKS = [
  { label: "For Chinese suppliers", href: "/services/china-export-growth" },
  { label: "Verify a China supplier", href: "/source-from-china/verify-supplier" },
  { label: "Source FRP grating", href: "/sourcing/frp-grating" },
  { label: "Pultruded vs molded grating", href: "/source-from-china/frp-grating-vs-molded-grating" },
  { label: "China FRP grating prices", href: "/source-from-china/frp-grating-price-china" },
  { label: "Source FRP pipe", href: "/sourcing/frp-piping" },
] as const satisfies readonly NavigationLink[];

export const TOOL_LINKS = [
  { label: "FRP weight calculator", href: "/tools/frp-weight-calculator" },
  { label: "Standards comparison", href: "/tools/standard-comparison" },
] as const satisfies readonly NavigationLink[];

export const SUPPLIER_LINKS = [
  { label: "Search suppliers", href: "/suppliers/search" },
  { label: "Verified suppliers", href: "/suppliers/search?profile=verified" },
  { label: "ISO 9001 suppliers", href: "/suppliers/search?certification=ISO%209001" },
  { label: "Jiangsu suppliers", href: "/suppliers/jiangsu" },
  { label: "Zhejiang suppliers", href: "/suppliers/zhejiang" },
  { label: "Shandong suppliers", href: "/suppliers/shandong" },
  { label: "Hebei suppliers", href: "/suppliers/hebei" },
  { label: "Guangdong suppliers", href: "/suppliers/guangdong" },
] as const satisfies readonly NavigationLink[];

export const HELP_LINKS = [
  { label: "How to search suppliers", href: "/help/how-to-search-suppliers" },
  { label: "How to send an RFQ", href: "/help/how-to-send-rfq" },
  { label: "How to compare suppliers", href: "/help/how-to-compare-suppliers" },
] as const satisfies readonly NavigationLink[];

const STRUCTURAL_PRODUCT_LINKS = [
  PRODUCT_LINKS[0],
  PRODUCT_LINKS[1],
  PRODUCT_LINKS[2],
  PRODUCT_LINKS[3],
  PRODUCT_LINKS[6],
] as const;

const MATERIAL_PRODUCT_LINKS = [
  PRODUCT_LINKS[4],
  PRODUCT_LINKS[13],
  PRODUCT_LINKS[14],
  PRODUCT_LINKS[15],
] as const;

const FEATURED_SUPPLIER_LINKS = [
  SUPPLIER_LINKS[0],
  SUPPLIER_LINKS[1],
  SUPPLIER_LINKS[2],
] as const;

const RESOURCE_HUB_LINKS = [
  { label: "Manufacturing processes", href: "/manufacturing" },
  { label: "Applications", href: "/applications" },
  { label: "Standards", href: "/standards" },
  { label: "Engineering tools", href: "/tools" },
  { label: "Industry insights", href: "/insights" },
  { label: "Review methodology", href: "/methodology" },
] as const satisfies readonly NavigationLink[];

const BUYER_SOURCING_LINKS = [
  SOURCING_GUIDE_LINKS[1],
  SOURCING_GUIDE_LINKS[2],
  SOURCING_GUIDE_LINKS[3],
  SOURCING_GUIDE_LINKS[4],
  SOURCING_GUIDE_LINKS[5],
] as const;

export const PRIMARY_NAVIGATION = [
  {
    label: "Products",
    href: "/products",
    description: "Browse FRP materials, components and finished systems.",
    ctaLabel: "View all products",
    activePrefixes: ["/products", "/fibers"],
    items: [...STRUCTURAL_PRODUCT_LINKS, ...MATERIAL_PRODUCT_LINKS],
    sections: [
      {
        label: "Structures & infrastructure",
        items: STRUCTURAL_PRODUCT_LINKS,
      },
      {
        label: "Materials & molding",
        items: MATERIAL_PRODUCT_LINKS,
      },
    ],
  },
  {
    label: "Suppliers",
    href: "/suppliers",
    description: "Find reviewed manufacturers by evidence, capability and region.",
    ctaLabel: "View all suppliers",
    activePrefixes: ["/suppliers"],
    items: FEATURED_SUPPLIER_LINKS,
    sections: [
      {
        label: "Find suppliers",
        items: FEATURED_SUPPLIER_LINKS,
      },
    ],
  },
  {
    label: "Resources",
    href: "/guides",
    description: "Understand processes, applications, standards and engineering tools.",
    ctaLabel: "Browse buyer guides",
    activePrefixes: [
      "/guides",
      "/manufacturing",
      "/processes",
      "/applications",
      "/standards",
      "/tools",
      "/technical",
      "/insights",
      "/methodology",
    ],
    items: RESOURCE_HUB_LINKS,
    sections: [
      {
        label: "Explore",
        items: [RESOURCE_HUB_LINKS[0], RESOURCE_HUB_LINKS[1]],
      },
      {
        label: "Evaluate",
        items: [RESOURCE_HUB_LINKS[2], RESOURCE_HUB_LINKS[3]],
      },
      {
        label: "Learn",
        items: [RESOURCE_HUB_LINKS[4], RESOURCE_HUB_LINKS[5]],
      },
    ],
  },
  {
    label: "Sourcing",
    href: "/source-from-china",
    description: "Plan supplier checks, comparisons and China-side execution.",
    ctaLabel: "Start with China sourcing",
    activePrefixes: ["/source-from-china", "/sourcing", "/services"],
    items: BUYER_SOURCING_LINKS,
    sections: [
      {
        label: "Supplier checks",
        items: [BUYER_SOURCING_LINKS[0]],
      },
      {
        label: "Product playbooks",
        items: [
          BUYER_SOURCING_LINKS[1],
          BUYER_SOURCING_LINKS[2],
          BUYER_SOURCING_LINKS[3],
          BUYER_SOURCING_LINKS[4],
        ],
      },
    ],
  },
] as const satisfies readonly NavigationGroup[];

export const SEARCH_SUGGESTIONS = [
  ...PRODUCT_LINKS,
  ...PROCESS_LINKS,
  ...APPLICATION_LINKS,
  ...STANDARD_LINKS,
  ...SOURCING_GUIDE_LINKS,
] as const;

export const HOT_SEARCHES = [
  PRODUCT_LINKS[0],
  PRODUCT_LINKS[1],
  PROCESS_LINKS[0],
  APPLICATION_LINKS[0],
  STANDARD_LINKS[0],
  PRODUCT_LINKS[4],
] as const;

export const STATIC_L2_LINKS = [
  ...PRODUCT_LINKS,
  ...PROCESS_LINKS,
  ...APPLICATION_LINKS,
  ...STANDARD_LINKS,
  ...SOURCING_GUIDE_LINKS,
  ...TOOL_LINKS,
  ...HELP_LINKS,
] as const;

export const SEARCH_RELATED_LINKS = [
  PRODUCT_LINKS[0],
  PRODUCT_LINKS[1],
  PRODUCT_LINKS[2],
  PROCESS_LINKS[0],
  APPLICATION_LINKS[0],
  STANDARD_LINKS[0],
] as const;
