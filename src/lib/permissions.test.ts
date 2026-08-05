import assert from "node:assert/strict";
import test from "node:test";

import {
  canEditOwnDocuments,
  canEditSupplierProducts,
  canEditSupplierProfile,
  roleRequiresEnterprise,
} from "./permissions";

test("personal users can edit only their own uploads", () => {
  const user = { role: "individual" as const, enterpriseId: null };
  assert.equal(canEditOwnDocuments(user), true);
  assert.equal(canEditSupplierProfile(user), false);
  assert.equal(canEditSupplierProducts(user), false);
});

test("enterprise roles require a linked enterprise for supplier edits", () => {
  const unlinked = { role: "enterprise_member" as const, enterpriseId: null };
  const linked = {
    role: "enterprise_member" as const,
    enterpriseId: "24b11575-9fc3-4aba-83c5-56a9e8dd68a3",
  };
  assert.equal(canEditSupplierProfile(unlinked), false);
  assert.equal(canEditSupplierProducts(unlinked), false);
  assert.equal(canEditSupplierProfile(linked), true);
  assert.equal(canEditSupplierProducts(linked), true);
});

test("only supplier company roles require enterprise assignment", () => {
  assert.equal(roleRequiresEnterprise("enterprise_admin"), true);
  assert.equal(roleRequiresEnterprise("enterprise_member"), true);
  assert.equal(roleRequiresEnterprise("individual"), false);
  assert.equal(roleRequiresEnterprise("moderator"), false);
  assert.equal(roleRequiresEnterprise("admin"), false);
});
