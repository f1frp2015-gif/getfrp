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
      { source: "/materials/:path*", destination: "/products", statusCode: 301 },
      { source: "/en/materials/:path*", destination: "/en/products", statusCode: 301 },
      { source: "/patents/:path*", destination: "/products", statusCode: 301 },
      { source: "/en/patents/:path*", destination: "/en/products", statusCode: 301 },
      { source: "/articles/:path*", destination: "/products", statusCode: 301 },
      { source: "/en/articles/:path*", destination: "/en/products", statusCode: 301 },
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
      {
        source: "/pultrusion/calc",
        destination: "/tech/calculator",
        statusCode: 301,
      },
      {
        source: "/en/pultrusion/calc",
        destination: "/en/tech/calculator",
        statusCode: 301,
      },
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
