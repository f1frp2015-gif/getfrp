import assert from "node:assert/strict";
import test from "node:test";
import { analyticsConsentGranted, trackBuyerEvent } from "./buyer-analytics";

test("buyer analytics requires an exact accepted consent cookie", () => {
  for (const cookie of ["", "cookie-consent-v1=rejected", "other-cookie-consent-v1=accepted", "cookie-consent-v1=accepted-later"]) {
    assert.equal(analyticsConsentGranted(cookie), false);
  }
  assert.equal(analyticsConsentGranted("session=abc; cookie-consent-v1=accepted; other=1"), true);
});

test("buyer analytics is safe during server rendering", () => {
  assert.doesNotThrow(() => trackBuyerEvent("generate_lead"));
});
