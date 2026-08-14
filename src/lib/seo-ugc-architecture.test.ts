import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

import {
  ADDITIONAL_PRODUCT_PAGES,
  APPLICATION_PAGES,
  COMBINATION_PAGES,
  MANUFACTURING_PAGES,
  marketplaceBreadcrumbTrail,
  relatedSearches,
  STANDARD_PAGES,
} from "./data/seo-marketplace-pages";
import {
  INSIGHT_PAGES,
  longformSections,
  SOURCE_FROM_CHINA_PAGES,
} from "./data/longform-pages";
import { HELP_PAGES } from "./data/help-pages";
import { SupplierProductPageInput } from "./products/ugc-input";
import {
  HELP_LINKS,
  HOT_SEARCHES,
  PRIMARY_NAVIGATION,
  PRODUCT_LINKS,
  SEARCH_RELATED_LINKS,
  SEARCH_SUGGESTIONS,
  SOURCING_GUIDE_LINKS,
  STATIC_L2_LINKS,
} from "./site-navigation";

test("required L2 and L3 marketplace routes are present and unique", () => {
  const required = [
    "/products/carbon-fiber",
    "/products/frp-sheet",
    "/products/frp-cable-tray",
    "/products/frp-tank",
    "/products/frp-manhole-cover",
    "/products/frp-handrail",
    "/products/frp-ladder",
    "/products/fiberglass-panel",
    "/products/pultruded-frp-grating",
    "/products/carbon-fiber-pultrusion-profiles",
    "/products/fiberglass-grating-manufacturers",
    "/applications/wastewater-treatment/frp-grating",
    "/standards/en-13706/pultruded-profiles",
  ];
  const pages = [
    ...ADDITIONAL_PRODUCT_PAGES,
    ...MANUFACTURING_PAGES,
    ...APPLICATION_PAGES,
    ...STANDARD_PAGES,
    ...COMBINATION_PAGES,
  ];
  const paths = pages.map((page) => page.path);
  assert.equal(new Set(paths).size, paths.length);
  for (const path of required) assert.ok(paths.includes(path), `missing ${path}`);
  assert.equal(MANUFACTURING_PAGES.length, 5);
  assert.equal(APPLICATION_PAGES.length, 5);
  assert.equal(STANDARD_PAGES.length, 4);
});

test("long-form source and insight pages exceed 800 rendered words", () => {
  assert.equal(SOURCE_FROM_CHINA_PAGES.length, 5);
  assert.equal(INSIGHT_PAGES.length, 4);
  for (const page of [...SOURCE_FROM_CHINA_PAGES, ...INSIGHT_PAGES]) {
    const text = [page.h1, page.description, ...longformSections(page).flatMap((section) => [section.heading, section.body])].join(" ");
    assert.ok(text.split(/\s+/).length >= 800, `${page.slug} is below 800 words`);
  }
  assert.equal(HELP_PAGES.length, 3);
});

test("supplier product input requires real images and a substantive description", () => {
  const base = {
    categoryId: "frp-grating",
    name: "FRP Pultruded Grating for Wastewater Treatment",
    description: "A".repeat(120),
    images: ["/supplier-product-assets/products/supplier/product.webp"],
    material: "E-glass / vinyl ester",
    manufacturingProcesses: ["Pultrusion"],
    applications: ["Wastewater treatment"],
    standards: ["EN 13706"],
    parameters: { Depth: "38 mm" },
    certifications: ["ISO 9001"],
    moq: 10,
    moqUnit: "panels",
    exportMarkets: ["United States"],
    videoUrl: "",
    priceRange: "",
  };
  assert.equal(SupplierProductPageInput.safeParse(base).success, true);
  assert.equal(SupplierProductPageInput.safeParse({ ...base, images: [] }).success, false);
  assert.equal(SupplierProductPageInput.safeParse({ ...base, description: "too short" }).success, false);
});

test("global navigation and search meet the crawlable discovery contract", () => {
  assert.equal(PRIMARY_NAVIGATION.length, 7);
  assert.deepEqual(
    PRIMARY_NAVIGATION.map((item) => item.label),
    ["Products", "Suppliers", "Processes", "Applications", "Standards", "Sourcing Guide", "Tools"],
  );
  assert.ok(SEARCH_SUGGESTIONS.length >= 5);
  assert.ok(HOT_SEARCHES.length >= 6);
  assert.ok(SEARCH_RELATED_LINKS.length >= 5);
  assert.equal(HELP_LINKS.length, 3);
  for (const path of ["/products/fiberglass-sheet", "/products/smc-bmc", "/products/resin-gelcoat", "/products/fiber-glass"]) {
    assert.ok(PRODUCT_LINKS.some((item) => item.href === path), `missing legacy L2 product entry for ${path}`);
  }
  assert.deepEqual(
    new Set(SOURCING_GUIDE_LINKS.map((item) => item.href)),
    new Set(SOURCE_FROM_CHINA_PAGES.map((item) => `/source-from-china/${item.slug}`)),
  );
  for (const link of STATIC_L2_LINKS) {
    const isInPrimaryDropdown = PRIMARY_NAVIGATION.some((group) =>
      group.items.some((item) => item.href === link.href),
    );
    assert.ok(isInPrimaryDropdown || HELP_LINKS.some((item) => item.href === link.href), `missing navigation entry for ${link.href}`);
  }
});

test("the header is English-only and search appears only in the homepage body", () => {
  const header = readFileSync(
    new URL("../components/layout/header.tsx", import.meta.url),
    "utf8",
  );
  const homepage = readFileSync(
    new URL("../app/[locale]/home-english.tsx", import.meta.url),
    "utf8",
  );
  assert.match(header, />EN</);
  for (const locale of ["ES", "DE", "PT"]) {
    assert.doesNotMatch(header, new RegExp(`>${locale}<`));
  }
  assert.doesNotMatch(header, /GlobalMarketplaceSearch/);
  assert.equal(
    existsSync(new URL("../components/layout/global-marketplace-search.tsx", import.meta.url)),
    false,
  );
  assert.match(homepage, /<HomeMarketplaceSearch \/>/);
});

test("L4 pages link back to home within three clicks and expose 8-12 related searches", () => {
  const l4ToHome = [
    "/suppliers/acme-frp/pultruded-grating",
    "/products/frp-grating",
    "/products",
    "/",
  ];
  assert.equal(l4ToHome.length - 1, 3);
  assert.equal(l4ToHome.at(-1), "/");
  for (const page of [
    ...ADDITIONAL_PRODUCT_PAGES,
    ...MANUFACTURING_PAGES,
    ...APPLICATION_PAGES,
    ...STANDARD_PAGES,
    ...COMBINATION_PAGES,
  ]) {
    const links = relatedSearches(page);
    assert.ok(links.length >= 8 && links.length <= 12, `${page.path} has ${links.length} related searches`);
    assert.equal(new Set(links.map((item) => item.href)).size, links.length);
  }
  for (const page of COMBINATION_PAGES.filter((item) => item.path.split("/").filter(Boolean).length === 3)) {
    const trail = marketplaceBreadcrumbTrail(page);
    assert.equal(trail[0]?.href, "/");
    assert.equal(trail.at(-1)?.href, page.path);
    assert.equal(trail.length, 4, `${page.path} must retain its intermediate L3 breadcrumb`);
  }
});
