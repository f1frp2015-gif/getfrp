import assert from "node:assert/strict";
import { test } from "node:test";
import { CROTTI_SUPPLIER_PROFILE } from "./crotti-supplier-profile";
import { CURATED_SUPPLIER_PROFILES } from "./curated-supplier-profiles";
import { EASTFRP_SUPPLIER_PROFILE } from "./eastfrp-supplier-profile";
import { JHPK_SUPPLIER_PROFILE } from "./jhpk-supplier-profile";
import { NANJING_LOYALTY_SUPPLIER_PROFILE } from "./nanjing-loyalty-supplier-profile";
import {
  buildSupplierSeoBrief,
  SUPPLIER_SEO_MAX_WORDS,
  SUPPLIER_SEO_MIN_WORDS,
} from "./supplier-seo-briefs";

test("assigns every curated supplier a unique, evidence-led SEO brief", () => {
  const briefs = CURATED_SUPPLIER_PROFILES.map(({ profile }) => ({
    profile,
    brief: buildSupplierSeoBrief(profile),
  }));

  assert.equal(briefs.length, 50);
  assert.equal(
    new Set(briefs.map(({ brief }) => brief.primaryKeyword.toLowerCase())).size,
    briefs.length,
  );
  assert.equal(
    new Set(briefs.map(({ brief }) => brief.pageTitle.toLowerCase())).size,
    briefs.length,
  );

  for (const { profile, brief } of briefs) {
    assert.ok(brief.pageTitle.length <= 100, `${profile.id} title is too long`);
    assert.ok(brief.metaDescription.length <= 161, `${profile.id} meta description is too long`);
    assert.ok(brief.secondaryKeywords.length >= 4, `${profile.id} needs a keyword cluster`);
    assert.ok(brief.productNotes.length >= 1, `${profile.id} needs product analysis`);
    assert.ok(brief.capabilityNotes.length >= 1, `${profile.id} needs capability analysis`);
    assert.equal(brief.applicationNotes.length, 3, `${profile.id} needs three application contexts`);
    assert.equal(brief.qualificationChecks.length, 6, `${profile.id} needs qualification checks`);
    assert.equal(brief.evidenceNotes.length, 3, `${profile.id} needs evidence boundaries`);
    assert.equal(brief.rfqChecklist.length, 7, `${profile.id} needs an RFQ checklist`);
    assert.ok(
      brief.estimatedPageWordCount >= SUPPLIER_SEO_MIN_WORDS,
      `${profile.id} has only ${brief.estimatedPageWordCount} estimated words`,
    );
    assert.ok(
      brief.estimatedPageWordCount <= SUPPLIER_SEO_MAX_WORDS,
      `${profile.id} has ${brief.estimatedPageWordCount} estimated words`,
    );
  }
});

test("keeps supplier-specific product intent in priority profiles", () => {
  const crotti = buildSupplierSeoBrief(CROTTI_SUPPLIER_PROFILE);
  assert.match(crotti.primaryKeyword, /Crotti/i);
  assert.match(crotti.primaryKeyword, /polyurethane|window/i);
  assert.match(crotti.pageTitle, /Crotti/i);

  const loyalty = buildSupplierSeoBrief(NANJING_LOYALTY_SUPPLIER_PROFILE);
  assert.match(loyalty.primaryKeyword, /Loyalty/i);
  assert.match(loyalty.primaryKeyword, /pultrusion machine/i);
  assert.match(loyalty.searchIntent, /equipment supplier/i);

  const eastfrp = buildSupplierSeoBrief(EASTFRP_SUPPLIER_PROFILE);
  assert.match(eastfrp.primaryKeyword, /Anhui Anche/i);
  assert.match(eastfrp.primaryKeyword, /FRP Wall Panels/i);
  assert.match(eastfrp.pageTitle, /FRP Wall Panels/i);
  assert.ok(
    eastfrp.secondaryKeywords.some((keyword) =>
      /FRP Flat Sheets for Transport/i.test(keyword),
    ),
  );
  assert.ok(
    eastfrp.secondaryKeywords.some((keyword) =>
      /Embossed FRP Panels/i.test(keyword),
    ),
  );
  assert.ok(
    eastfrp.secondaryKeywords.some((keyword) =>
      /FRP Corrugated Sheets/i.test(keyword),
    ),
  );
  assert.deepEqual(
    eastfrp.applicationNotes.map(({ title }) => title),
    [
      "Hygienic interior wall and ceiling systems",
      "Refrigerated truck, dry-van and RV body panels",
      "Cooling-tower and industrial corrugated panels",
    ],
  );

  const jhpk = buildSupplierSeoBrief(JHPK_SUPPLIER_PROFILE);
  assert.deepEqual(
    jhpk.applicationNotes.map(({ title }) => title),
    [
      "New composite production lines",
      "Capacity expansion and process modernization",
      "Commissioning and long-term support",
    ],
  );
});
