import assert from "node:assert/strict";
import test from "node:test";
import { matchingCatalogProducts } from "./catalog-match";

test("product discovery distinguishes finished goods from inputs and equipment", () => {
  assert.deepEqual(matchingCatalogProducts("frp-grating", ["Molded FRP grating", "Pultrusion and molded-grating resin systems"]), ["Molded FRP grating"]);
  assert.deepEqual(matchingCatalogProducts("pultruded-profiles", ["Pultrusion machines", "Pultruded FRP profiles", "Pultrusion molds"]), ["Pultruded FRP profiles"]);
  assert.deepEqual(matchingCatalogProducts("frp-pipe", ["Pipe winding equipment", "FRP piping and fittings", "Pipe resins"]), ["FRP piping and fittings"]);
  assert.deepEqual(matchingCatalogProducts("unknown", ["FRP grating"]), []);
});
