import assert from "node:assert/strict";
import { existsSync, statSync } from "node:fs";
import { test } from "node:test";

import { CURATED_SUPPLIER_PROFILES } from "./curated-supplier-profiles";

const DOCUMENTED_TEXT_FALLBACKS = [
  "sup-changzhou-shenying-carbon-composites",
  "sup-hongyu-composite-jiaxing",
] as const;

test("every published supplier uses a working logo or a documented official-site fallback", () => {
  const published = CURATED_SUPPLIER_PROFILES.map(({ profile }) => profile).filter(
    (profile) => profile.profilePublished,
  );
  const missing = published
    .filter((profile) => !profile.logo)
    .map((profile) => profile.id)
    .sort();

  assert.deepEqual(missing, [...DOCUMENTED_TEXT_FALLBACKS].sort());

  for (const profile of published) {
    if (!profile.logo) continue;
    if (profile.logo.startsWith("/api/supplier-assets/")) continue;

    assert.match(
      profile.logo,
      /^\/supplier-assets\//,
      `${profile.nameEn ?? profile.name} must use a local supplier asset`,
    );
    const assetPath = `public${profile.logo}`;
    assert.equal(
      existsSync(assetPath),
      true,
      `${profile.nameEn ?? profile.name} logo is missing at ${assetPath}`,
    );
    assert.ok(
      statSync(assetPath).size > 500,
      `${profile.nameEn ?? profile.name} logo is unexpectedly small`,
    );
  }
});
