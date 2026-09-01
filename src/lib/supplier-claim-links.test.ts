import assert from "node:assert/strict";
import test from "node:test";

import {
  supplierClaimHref,
  supplierClaimPath,
  supplierClaimSignInHref,
  supplierClaimSignUpHref,
} from "./supplier-claim-links";

test("builds the generic supplier claim route when no supplier is selected", () => {
  assert.equal(supplierClaimPath(), "/suppliers/claim");
  assert.equal(supplierClaimPath(null), "/suppliers/claim");
  assert.equal(supplierClaimPath(""), "/suppliers/claim");
  assert.equal(supplierClaimHref(), "/suppliers/claim");
});

test("encodes the raw supplier key in the canonical claim route", () => {
  assert.equal(
    supplierClaimPath("Acme FRP / 100% + R&D?"),
    "/suppliers/claim?supplier=Acme%20FRP%20%2F%20100%25%20%2B%20R%26D%3F",
  );
});

test("builds supplier sign-up and sign-in URLs that preserve the claim redirect", () => {
  const supplierKey = "Acme FRP / China";
  const claimPath = supplierClaimPath(supplierKey);

  assert.equal(
    supplierClaimSignUpHref(supplierKey),
    "/sign-up?intent=supplier&redirect_url=%2Fsuppliers%2Fclaim%3Fsupplier%3DAcme%2520FRP%2520%252F%2520China",
  );
  assert.equal(
    supplierClaimSignInHref(supplierKey),
    "/sign-in?intent=supplier&redirect_url=%2Fsuppliers%2Fclaim%3Fsupplier%3DAcme%2520FRP%2520%252F%2520China",
  );

  for (const href of [
    supplierClaimSignUpHref(supplierKey),
    supplierClaimSignInHref(supplierKey),
  ]) {
    const query = new URL(href, "https://getfrp.com").searchParams;
    assert.equal(query.get("intent"), "supplier");
    assert.equal(query.get("redirect_url"), claimPath);
  }
});

test("auth URLs return to the generic claim route without a supplier key", () => {
  assert.equal(
    supplierClaimSignUpHref(),
    "/sign-up?intent=supplier&redirect_url=%2Fsuppliers%2Fclaim",
  );
  assert.equal(
    supplierClaimSignInHref(),
    "/sign-in?intent=supplier&redirect_url=%2Fsuppliers%2Fclaim",
  );
});
