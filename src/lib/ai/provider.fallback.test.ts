// GetFRP provider-fallback brand invariant tests.
//
// ★★ THE INVARIANT UNDER TEST ★★
//   - A canonical getfrp.com request can NEVER be routed to a private-job
//     provider, even when the request or ambient environment is crafted.
//     Its fallback chain stays inside ["google","openrouter"].
//
// This standalone repository does not test or serve f1frp.com. Optional private
// job providers remain covered by the fallback orchestration tests below.
//
// Run: pnpm tsx --test src/lib/ai/provider.fallback.test.ts
// (No vitest in this repo — uses node:test, which tsx runs natively.)

import { test } from "node:test";
import assert from "node:assert/strict";

const PRIVATE_JOB_PROVIDERS = new Set(["zhipu", "qwen", "deepseek"]);
const OVERSEAS = new Set(["google", "openrouter"]);

// All chat-provider API keys this module reads. We toggle these per-case so the
// module's call-time isProviderConfigured() reflects the scenario.
const KEY_ENVS = [
  "ZHIPU_API_KEY",
  "DASHSCOPE_API_KEY",
  "DEEPSEEK_API_KEY",
  "OPENROUTER_API_KEY",
  "GOOGLE_GENERATIVE_AI_API_KEY",
] as const;

function setKeys(present: Partial<Record<(typeof KEY_ENVS)[number], boolean>>) {
  for (const k of KEY_ENVS) {
    if (present[k]) process.env[k] = "test-key";
    else delete process.env[k];
  }
}

// Import AFTER env is import-time-stable. provider.ts reads keys at call time
// (not import time) except `profile`/`explicitProvider`, which we don't rely on
// for the host-pinned cases below, so a single import is safe.
async function load() {
  // Avoid CHAT_PROVIDER bleed from the ambient shell into non-host cases.
  delete process.env.CHAT_PROVIDER;
  return import("./provider");
}

test("getfrp.com chain is canonical-only, even when all provider keys exist", async () => {
  setKeys({
    ZHIPU_API_KEY: true,
    DASHSCOPE_API_KEY: true,
    DEEPSEEK_API_KEY: true,
    OPENROUTER_API_KEY: true,
    GOOGLE_GENERATIVE_AI_API_KEY: true,
  });
  const { chatProviderChain } = await load();
  const chain = chatProviderChain("getfrp.com");
  assert.deepEqual(chain, ["google", "openrouter"]);
  for (const p of chain) {
    assert.ok(OVERSEAS.has(p), `GetFRP chain leaked private provider: ${p}`);
    assert.ok(
      !PRIVATE_JOB_PROVIDERS.has(p),
      `GetFRP chain leaked private provider: ${p}`,
    );
  }
});

test("getfrp.com: OPENROUTER absent gives a Google-only chain", async () => {
  setKeys({
    ZHIPU_API_KEY: true, // 国产 keys present but must NOT appear overseas
    DASHSCOPE_API_KEY: true,
    DEEPSEEK_API_KEY: true,
    OPENROUTER_API_KEY: false,
    GOOGLE_GENERATIVE_AI_API_KEY: true,
  });
  const { chatProviderChain } = await load();
  const chain = chatProviderChain("www.getfrp.com");
  assert.deepEqual(chain, ["google"]);
  for (const p of chain) {
    assert.ok(
      !PRIVATE_JOB_PROVIDERS.has(p),
      `GetFRP chain leaked private provider: ${p}`,
    );
  }
});

test("getfrp.com stays canonical across every key and request permutation", async () => {
  const { chatProviderChain } = await load();
  // 2^5 key permutations × both canonical hosts × crafted requests.
  for (let bits = 0; bits < 32; bits++) {
    setKeys({
      ZHIPU_API_KEY: !!(bits & 1),
      DASHSCOPE_API_KEY: !!(bits & 2),
      DEEPSEEK_API_KEY: !!(bits & 4),
      OPENROUTER_API_KEY: !!(bits & 8),
      GOOGLE_GENERATIVE_AI_API_KEY: !!(bits & 16),
    });
    const requests: (string | null | undefined)[] = [
      undefined,
      null,
      "google",
      "openrouter",
      "zhipu",
      "qwen",
      "deepseek",
    ];
    for (const host of ["getfrp.com", "www.getfrp.com"]) {
      for (const r of requests) {
        const chain = chatProviderChain(host, r as never);
        for (const p of chain) {
          assert.ok(
            OVERSEAS.has(p),
            `[GetFRP ${host} req=${r} bits=${bits}] leaked ${p}`,
          );
        }
      }
    }
  }
});

test("withChatFallback: falls through provider errors and returns the survivor", async () => {
  const { withChatFallback } = await load();
  const calls: string[] = [];
  // Fake chain: first two providers throw, third succeeds. `model` is unused by
  // the test fn, so a stub cast is fine — we only exercise the orchestration.
  const chain = [
    { provider: "zhipu" as const, model: {} as never },
    { provider: "qwen" as const, model: {} as never },
    { provider: "deepseek" as const, model: {} as never },
  ];
  const { result, provider } = await withChatFallback(chain, async (_m, p) => {
    calls.push(p);
    if (p !== "deepseek") throw new Error(`${p} boom`);
    return "ok";
  });
  assert.equal(result, "ok");
  assert.equal(provider, "deepseek");
  assert.deepEqual(calls, ["zhipu", "qwen", "deepseek"]);
});

test("withChatFallback: all providers fail → re-throws the LAST error", async () => {
  const { withChatFallback } = await load();
  const chain = [
    { provider: "zhipu" as const, model: {} as never },
    { provider: "qwen" as const, model: {} as never },
  ];
  await assert.rejects(
    () =>
      withChatFallback(chain, async (_m, p) => {
        throw new Error(`${p} failed`);
      }),
    /qwen failed/,
  );
});
