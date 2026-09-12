import assert from "node:assert/strict";
import test from "node:test";
import { fanOutSearchPush } from "./search-push";
import { GETFRP_INDEXNOW_KEY } from "../indexnow-config";

test("IndexNow sends only canonical public URLs and reports acceptance", async (context) => {
  const before = process.env.VERCEL_ENV;
  delete process.env.VERCEL_ENV;
  let body: { urlList: string[]; key: string; keyLocation: string } | undefined;
  context.mock.method(globalThis, "fetch", async (_url: unknown, init: RequestInit) => {
    body = JSON.parse(String(init.body));
    return new Response("", { status: 202 });
  });
  try {
    const result = await fanOutSearchPush(["https://getfrp.com/products/frp-grating", "https://getfrp.com/products/frp-grating", "https://other.example/products/test", "https://getfrp.com/dashboard/private", "https://getfrp.com/trade", "https://getfrp.com/rfq", "https://getfrp.com/products?q=email", "not a URL"]);
    assert.equal(result.urlCount, 1);
    assert.deepEqual(body?.urlList, ["https://getfrp.com/products/frp-grating"]);
    assert.equal(body?.key, process.env.INDEXNOW_KEY || GETFRP_INDEXNOW_KEY);
    assert.equal(body?.keyLocation, "https://getfrp.com/indexnow-key");
    assert.ok(result.results.some((entry) => entry.engine === "indexnow" && "ok" in entry));
    assert.ok(result.results.some((entry) => entry.engine === "google" && "skipped" in entry));
  } finally { if (before === undefined) delete process.env.VERCEL_ENV; else process.env.VERCEL_ENV = before; }
});

test("preview deployments never notify search engines", async (context) => {
  const before = process.env.VERCEL_ENV;
  process.env.VERCEL_ENV = "preview";
  const mocked = context.mock.method(globalThis, "fetch", async () => { throw new Error("must not request"); });
  try {
    assert.equal((await fanOutSearchPush(["https://getfrp.com/products/frp-grating"])).urlCount, 0);
    assert.equal(mocked.mock.callCount(), 0);
  } finally { if (before === undefined) delete process.env.VERCEL_ENV; else process.env.VERCEL_ENV = before; }
});
