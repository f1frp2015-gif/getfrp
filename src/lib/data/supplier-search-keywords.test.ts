import assert from "node:assert/strict";
import { test } from "node:test";
import { CHANGZHOU_RIXIN_MOLDING_SUPPLIER_PROFILE } from "./changzhou-rixin-molding-supplier-profile";
import { NOAH_COMPOSITES_SUPPLIER_PROFILE } from "./noah-composites-supplier-profile";
import { buildSupplierSeoBrief } from "./supplier-seo-briefs";
import {
  getSupplierSearchKeywords,
  SUPPLIER_SEARCH_KEYWORD_CATALOG,
} from "./supplier-search-keywords";
import { SPARE_COMPOSITES_SUPPLIER_PROFILE } from "./spare-composites-supplier-profile";
import { ZHONGFU_SHENYING_SUPPLIER_PROFILE } from "./zhongfu-shenying-supplier-profile";

function phrases(profile: Parameters<typeof getSupplierSearchKeywords>[0]): string[] {
  return getSupplierSearchKeywords(profile).map(({ phrase }) => phrase);
}

test("keeps a ranked catalog of demand-backed FRP search phrases", () => {
  assert.ok(SUPPLIER_SEARCH_KEYWORD_CATALOG.length >= 30);
  for (const keyword of SUPPLIER_SEARCH_KEYWORD_CATALOG) {
    assert.ok(keyword.monthlySearches > 0, `${keyword.phrase} needs actual search demand`);
    assert.ok(keyword.phrase.trim(), "keyword phrases cannot be empty");
  }
});

test("maps grating, rebar and pultrusion terms only to SPARE's reviewed scope", () => {
  const matched = phrases(SPARE_COMPOSITES_SUPPLIER_PROFILE);

  assert.ok(matched.includes("fiberglass grating"));
  assert.ok(matched.includes("FRP grating"));
  assert.ok(matched.includes("fiberglass rebar"));
  assert.ok(matched.includes("FRP rebar"));
  assert.ok(matched.includes("pultruded fiberglass"));
  assert.ok(matched.includes("fiberglass pultruded grating"));
  assert.ok(matched.includes("molded FRP grating"));
  assert.ok(!matched.some((keyword) => /carbon fiber/i.test(keyword)));
});

test("maps SMC and BMC demand terms to Rixin Molding", () => {
  const matched = phrases(CHANGZHOU_RIXIN_MOLDING_SUPPLIER_PROFILE);

  assert.ok(matched.includes("bulk molding compound"));
  assert.ok(matched.includes("BMC material"));
  assert.ok(matched.includes("sheet molding compound"));
  assert.ok(!matched.some((keyword) => /grating|rebar|carbon fiber/i.test(keyword)));
});

test("does not turn Noah's broad sporting-goods scope into unsupported fishing products", () => {
  const matched = phrases(NOAH_COMPOSITES_SUPPLIER_PROFILE);

  assert.ok(matched.includes("carbon fiber products"));
  assert.ok(matched.includes("resin infusion"));
  assert.ok(matched.includes("vacuum infusion"));
  assert.ok(!matched.includes("carbon fiber fishing rod"));
  assert.ok(!matched.includes("carbon fiber pool cue"));
  assert.ok(!matched.includes("carbon fiber pickleball paddle"));
});

test("keeps a raw carbon-fiber producer out of finished sheet and tube searches", () => {
  const matched = phrases(ZHONGFU_SHENYING_SUPPLIER_PROFILE);

  assert.ok(matched.includes("carbon fiber products"));
  assert.ok(!matched.includes("carbon fiber sheets"));
  assert.ok(!matched.includes("carbon fiber tube"));
  assert.ok(!matched.includes("carbon fiber fishing rod"));
});

test("supports an exact sports-product phrase when the reviewed product explicitly names it", () => {
  const fishingRodSupplier = {
    ...NOAH_COMPOSITES_SUPPLIER_PROFILE,
    id: "test-carbon-fishing-rods",
    productsEn: ["Custom carbon-fiber fishing rods"],
    processListEn: ["Prepreg lay-up"],
    capabilities: ["OEM carbon-fiber fishing rods"],
    descriptionEn: "A reviewed manufacturer of carbon-fiber fishing rods.",
  };
  const matched = phrases(fishingRodSupplier);

  assert.ok(matched.includes("carbon fiber fishing rod"));
  assert.ok(matched.includes("carbon fiber products"));
});

test("adds matched demand phrases to the supplier SEO brief without inventing a match", () => {
  const spareBrief = buildSupplierSeoBrief(SPARE_COMPOSITES_SUPPLIER_PROFILE);
  assert.ok(spareBrief.searchKeywords.includes("fiberglass grating"));
  assert.ok(spareBrief.keywordContext?.includes("fiberglass grating"));
  assert.ok(spareBrief.metaDescription.includes(spareBrief.searchKeywords[0]));

  const genericSupplier = {
    ...NOAH_COMPOSITES_SUPPLIER_PROFILE,
    id: "test-generic-composite-supplier",
    nameEn: "Generic Composite Supplier",
    productsEn: ["Custom composite components"],
    processListEn: ["CNC machining"],
    capabilities: ["custom composite components"],
    descriptionEn: "A reviewed custom composite component manufacturer.",
  };
  const genericBrief = buildSupplierSeoBrief(genericSupplier);

  assert.deepEqual(genericBrief.searchKeywords, []);
  assert.equal(genericBrief.keywordContext, null);
});
