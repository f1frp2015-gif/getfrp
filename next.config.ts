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

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/*": ["./messages/**/*.json"],
  },
  // ali-oss has a dynamic optional proxy-agent dependency. Keep it external
  // so the server runtime resolves it only on routes that need it.
  serverExternalPackages: ["ali-oss"],
  async redirects() {
    return [
      { source: "/downloads", destination: "/materials", statusCode: 301 },
      {
        source: "/en/downloads",
        destination: "/en/materials",
        statusCode: 301,
      },
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
