import assert from "node:assert/strict";
import { test } from "node:test";

import {
  authErrorMetadata,
  authServiceUnavailable,
} from "@/lib/auth/service-unavailable";

test("extracts safe metadata from a nested database error", () => {
  const cause = Object.assign(new Error("Server error (HTTP status 402)"), {
    name: "NeonDbError",
    code: "42703",
  });
  const error = new Error("query failed for private@example.com", { cause });

  assert.deepEqual(authErrorMetadata(error), {
    name: "NeonDbError",
    code: "42703",
    status: 402,
  });
});

test("returns a retryable response without leaking database details", async () => {
  const error = new Error("query failed for private@example.com");
  const originalError = console.error;
  let logged = "";
  console.error = (...values: unknown[]) => {
    logged = values.map(String).join(" ");
  };

  try {
    const response = authServiceUnavailable("login", error);
    assert.equal(response.status, 503);
    assert.equal(response.headers.get("Retry-After"), "60");
    assert.equal(response.headers.get("Cache-Control"), "no-store");
    assert.deepEqual(await response.json(), {
      error: "Authentication service temporarily unavailable. Please retry shortly.",
      code: "AUTH_SERVICE_UNAVAILABLE",
    });
    assert.doesNotMatch(logged, /private@example\.com/);
  } finally {
    console.error = originalError;
  }
});
