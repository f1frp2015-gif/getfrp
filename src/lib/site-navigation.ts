export type NavigationLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavigationGroup = NavigationLink & {
  items: readonly NavigationLink[];
};

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
  { label: "FRP sheet", href: "/products/frp-sheet" },
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
  { label: "Verify a China supplier", href: "/source-from-china/verify-supplier" },
  { label: "Source FRP grating", href: "/source-from-china/how-to-source-frp-grating" },
  { label: "Pultruded vs molded grating", href: "/source-from-china/frp-grating-vs-molded-grating" },
  { label: "China FRP grating prices", href: "/source-from-china/frp-grating-price-china" },
  { label: "Source FRP pipe", href: "/source-from-china/how-to-source-frp-pipe" },
] as const satisfies readonly NavigationLink[];

export const TOOL_LINKS = [
  { label: "FRP weight calculator", href: "/tools/frp-weight-calculator" },
  { label: "Standards comparison", href: "/tools/standard-comparison" },
] as const satisfies readonly NavigationLink[];

export const SUPPLIER_LINKS = [
  { label: "All suppliers", href: "/suppliers" },
  { label: "Verified factories", href: "/suppliers/certified" },
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

export const PRIMARY_NAVIGATION = [
  { label: "Products", href: "/products", items: PRODUCT_LINKS },
  { label: "Suppliers", href: "/suppliers", items: SUPPLIER_LINKS },
  { label: "Processes", href: "/manufacturing", items: PROCESS_LINKS },
  { label: "Applications", href: "/applications", items: APPLICATION_LINKS },
  { label: "Standards", href: "/standards", items: STANDARD_LINKS },
  { label: "Sourcing Guide", href: "/source-from-china", items: SOURCING_GUIDE_LINKS },
  { label: "Tools", href: "/tools", items: TOOL_LINKS },
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
