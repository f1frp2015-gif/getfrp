import assert from "node:assert/strict";
import test from "node:test";

import { MANUFACTURING_PROCESS_GUIDES } from "./manufacturing-process-guides";
import { MANUFACTURING_PAGES } from "./seo-marketplace-pages";

test("every manufacturing route has one complete process guide", () => {
  const pageSlugs = MANUFACTURING_PAGES.map((page) => page.slug).sort();
  const guideSlugs = MANUFACTURING_PROCESS_GUIDES.map((guide) => guide.slug).sort();

  assert.equal(MANUFACTURING_PROCESS_GUIDES.length, 14);
  assert.deepEqual(guideSlugs, pageSlugs);
  assert.equal(new Set(guideSlugs).size, guideSlugs.length);

  for (const guide of MANUFACTURING_PROCESS_GUIDES) {
    assert.ok(guide.seoTitle.length <= 60, `${guide.slug} SEO title is too long`);
    assert.ok(guide.metaDescription.length >= 120, `${guide.slug} meta description is too short`);
    assert.ok(guide.metaDescription.length <= 160, `${guide.slug} meta description is too long`);
    assert.ok(guide.primaryKeyword.toLowerCase().includes("china"), `${guide.slug} lacks China buyer intent`);
    assert.ok(guide.keywords.length >= 5, `${guide.slug} needs a complete keyword cluster`);
    assert.equal(guide.steps.length, 5, `${guide.slug} needs five illustrated steps`);
    assert.equal(guide.materialStack.length, 4, `${guide.slug} needs four material-system entries`);
    assert.equal(guide.controls.length, 4, `${guide.slug} needs four audit controls`);
    assert.equal(guide.defects.length, 3, `${guide.slug} needs three defect diagnostics`);
    assert.ok(guide.applications.length >= 4, `${guide.slug} needs application coverage`);
    assert.ok(guide.faqs.length >= 3, `${guide.slug} needs process-specific FAQ coverage`);
    assert.ok(guide.sources.some((source) => source.organization === "JEC Composites"));
    assert.ok(guide.sources.some((source) => source.organization.startsWith("CAMX")));
    assert.ok(guide.sources.some((source) => !source.organization.startsWith("CAMX") && source.organization !== "JEC Composites"));
    assert.ok(guide.sources.every((source) => source.url.startsWith("https://")));
  }
});
