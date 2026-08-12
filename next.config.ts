import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const legacyProductSlugs = [
  "frp-grating",
  "pultruded-profiles",
  "fiberglass-sheet",
  "frp-rebar",
  "frp-pipe",
  "smc-bmc",
  "resin-gelcoat",
  "fiber-glass",
];

const retiredToolRedirects = [
  {
    source: "/tools/frp-weight-calculator",
    destination: "https://www.f1composite.com/frp-profile-calculator",
  },
  {
    source: "/tools/frp-cost-estimator",
    destination: "https://www.f1composite.com/fiberglass-pultruded-profile-price",
  },
  {
    source: "/tools/buy-america-frp-checker",
    destination: "https://www.f1composite.com/regions/frp-pultrusion-supplier-usa",
  },
  {
    source: "/tech/calculator",
    destination: "https://www.f1composite.com/frp-profile-calculator",
  },
  {
    source: "/tech/wind-load-calculator",
    destination: "https://www.f1composite.com/frp-profile-calculator",
  },
  {
    source: "/tech/u-value-calculator",
    destination: "https://www.f1composite.com/technology/frp-u-value-calculator",
  },
  {
    source: "/tools/frp-window-calculator.html",
    destination: "https://www.f1composite.com/technology/frp-u-value-calculator",
  },
  {
    source: "/tools/frp-mechanics-calculator.html",
    destination: "https://www.f1composite.com/frp-profile-calculator",
  },
  {
    source: "/pultrusion/calc",
    destination: "https://www.f1composite.com/frp-profile-calculator",
  },
] as const;

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/*": ["./messages/**/*.json"],
  },
  // ali-oss has a dynamic optional proxy-agent dependency. Keep it external
  // so the server runtime resolves it only on routes that need it.
  serverExternalPackages: ["ali-oss"],
  async redirects() {
    return [
      { source: "/downloads", destination: "/products", statusCode: 301 },
      {
        source: "/en/downloads",
        destination: "/en/products",
        statusCode: 301,
      },
      { source: "/fibers/:path*", destination: "/products/fiber-glass", statusCode: 301 },
      { source: "/en/fibers/:path*", destination: "/en/products/fiber-glass", statusCode: 301 },
      { source: "/pultrusion", destination: "/processes/pultrusion", statusCode: 301 },
      { source: "/en/pultrusion", destination: "/en/processes/pultrusion", statusCode: 301 },
      ...legacyProductSlugs.flatMap((slug) => [
        {
          source: `/suppliers/${slug}`,
          destination: `/products/${slug}`,
          statusCode: 301 as const,
        },
        {
          source: `/en/suppliers/${slug}`,
          destination: `/en/products/${slug}`,
          statusCode: 301 as const,
        },
      ]),
      { source: "/factories", destination: "/suppliers", statusCode: 301 },
      {
        source: "/en/factories",
        destination: "/en/suppliers",
        statusCode: 301,
      },
      ...retiredToolRedirects.flatMap(({ source, destination }) => [
        { source, destination, permanent: true },
        { source: `/en${source}`, destination, permanent: true },
      ]),
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
