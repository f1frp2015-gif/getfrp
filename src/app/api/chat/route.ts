import {
  streamText,
  convertToModelMessages,
  createUIMessageStream,
  createUIMessageStreamResponse,
  stepCountIs,
  type UIMessage,
} from "ai";
import { getSessionUid } from "@/lib/auth/current-user";
import {
  getChatModelForRequest,
  getVisionChatModelForRequest,
  isChatConfiguredForRequest,
  parseRequestedProvider,
} from "@/lib/ai/provider";
import { SYSTEM_PROMPT_EN } from "@/lib/ai/knowledge";
import { retrieveTopK, buildRagContext, type Retrieved } from "@/lib/ai/retrieve";
import { makeWebSearchTool, isWebSearchConfigured } from "@/lib/ai/tools/web-search";
import { makeWindowUValueTool } from "@/lib/ai/tools/window-uvalue";
import { makeProfileCalcTool } from "@/lib/ai/tools/profile-calc";
import { makeSelectProfileTool } from "@/lib/ai/tools/select-profile";
import { makeMaterialSelectorTool } from "@/lib/ai/tools/material-selector";
import { makeFeasibilityMatchTool } from "@/lib/ai/tools/feasibility-match";
import { makeLandedCostTool } from "@/lib/ai/tools/landed-cost";
import { makeComplianceFlagsTool } from "@/lib/ai/tools/compliance-flags";
import { makeCreateSourcingBriefTool } from "@/lib/ai/tools/create-sourcing-brief";
import { makeExportExcelTool } from "@/lib/ai/tools/export-excel";
import { applyRedlines } from "@/lib/ai/guards/redlines";
import {
  consumeAnonChatCredit,
  ANON_LIMIT_RESPONSE_BODY,
} from "@/lib/auth-gate";

export const runtime = "nodejs";
export const maxDuration = 60;

function normalizeMessages(raw: unknown[]): UIMessage[] {
  return raw.map((entry, i) => {
    const m = (entry ?? {}) as {
      parts?: UIMessage["parts"];
      id?: string;
      role?: UIMessage["role"];
      content?: string;
    };
    if (m.parts) return m as UIMessage;
    return {
      id: m.id || String(i),
      role: m.role || "user",
      parts: [{ type: "text" as const, text: m.content || "" }],
    };
  });
}

function lastUserQuery(uiMessages: UIMessage[]): string {
  for (let i = uiMessages.length - 1; i >= 0; i--) {
    const m = uiMessages[i];
    if (m.role !== "user") continue;
    const text = m.parts
      .filter((p): p is { type: "text"; text: string } => p.type === "text")
      .map((p) => p.text)
      .join("\n");
    if (text.trim()) return text;
  }
  return "";
}

function localeInstruction(): string {
  return `You MUST respond entirely in English, regardless of the language used in the knowledge base or retrieved passages. If source material is in Chinese, translate faithfully to English. Keep technical terms, standard numbers (e.g. ASTM D3039), and proper nouns as-is.`;
}

function citationGuidance(): string {
  return `Your answer MUST cite the retrieved results wherever possible. Use the format \`[#N]\` (where N is the result index) inline at the end of the supported statement.
- If no retrieved result supports a statement, explicitly say "GetFRP has no record of this; the following is general knowledge."
- Do NOT fabricate DOIs, patent numbers, or standard numbers.
- Do NOT append a "References" section — the inline [#N] markers are sufficient.`;
}

function hasFilePart(uiMessages: UIMessage[]): boolean {
  return uiMessages.some((m) => m.parts.some((p) => p.type === "file"));
}

// Extra system guidance injected only when the turn carries attachments —
// steers the model to actually *read* drawings/photos and pull out specs.
function visionInstruction(): string {
  return `The user has attached one or more files (engineering drawings, product photos, or PDFs). Before answering:
1. Read each attachment carefully. For drawings/photos, extract the concrete information visible: dimensions, cross-section shape, material callouts, standard codes, tolerances, quantities, and any annotations.
2. Restate what you can see so the user can confirm you read it correctly.
3. Explicitly flag anything unreadable, ambiguous, or missing (e.g. "wall thickness is not dimensioned").
4. Then answer using composites expertise, grounded in the library where possible.
5. If the user wants a parts list / bill of materials, present it as a clean table. Then offer to generate a downloadable .xlsx file if the user replies "export to Excel".
Never invent dimensions or values that are not legible in the attachment.`;
}

function visionUnavailableText(): string {
  return "Image and PDF recognition isn't enabled on this site yet. For now, please describe the drawing or specs in text and I'll help — or visit getfrp.com where attachment recognition is live.";
}

// Qwen-VL (domestic, via DashScope's OpenAI-compatible endpoint) only accepts
// `image_url` content — a `file` (PDF) part makes DashScope return a 400
// (`Invalid value: file ...`) *after* the 200/stream has opened, which drops
// the SSE connection and surfaces to the user as "无法连接服务器". Gemini
// (overseas) ingests PDF natively, so this only runs on the domestic path.
// Strip every PDF part (images are kept), backfilling a marker so no message is
// left with zero parts (convertToModelMessages rejects empty content).
function stripPdfParts(
  uiMessages: UIMessage[],
): { messages: UIMessage[]; removed: boolean } {
  let removed = false;
  const messages = uiMessages.map((m) => {
    const kept = m.parts.filter((p) => {
      const isPdf = p.type === "file" && p.mediaType === "application/pdf";
      if (isPdf) removed = true;
      return !isPdf;
    });
    if (kept.length === 0) {
      kept.push({
        type: "text",
        text: "(PDF attachment omitted — not readable on this assistant)",
      });
    }
    return { ...m, parts: kept };
  });
  return { messages, removed };
}

// System steer appended when a PDF was stripped on the domestic path, so the
// model tells the user how to get the drawing read instead of silently ignoring it.
function pdfDroppedInstruction(): string {
  return "One or more PDF attachments could not be read here. Briefly tell the user that this assistant can't read PDF — they should upload the drawing as an image (PNG/JPG) or a screenshot, or use getfrp.com which reads PDF. Still answer what you can from any images and text provided.";
}

export async function POST(req: Request) {
  if (!isChatConfiguredForRequest(req)) {
    return Response.json({ error: "AI not configured" }, { status: 503 });
  }

  // 匿名访客超过免费额度后引导注册;登录用户跳过。
  // 只看会话 cookie 是否有效(不查 DB,membership 已 neuter 为全直通)。
  // anonRemaining 随响应头(X-Anon-Remaining)回传给前端,用于在用完前就
  // 显示"还剩几次免费"倒计时,而不是让用户在毫无预警的情况下撞上 401 墙。
  let anonCookieToSet: string | null = null;
  let anonRemaining: number | null = null;
  try {
    const uid = await getSessionUid();
    if (!uid) {
      const gate = consumeAnonChatCredit(req);
      if (!gate.ok) {
        return Response.json(ANON_LIMIT_RESPONSE_BODY, { status: 401 });
      }
      anonCookieToSet = gate.cookieHeader;
      anonRemaining = gate.remaining;
    }
  } catch {
    // auth() 偶发抖动不应 hard-fail 聊天 — 失败时降级为"按匿名处理",
    // 即仍然走匿名计数,极小概率出现已登录用户被误计数。
    const gate = consumeAnonChatCredit(req);
    if (!gate.ok) {
      return Response.json(ANON_LIMIT_RESPONSE_BODY, { status: 401 });
    }
    anonCookieToSet = gate.cookieHeader;
    anonRemaining = gate.remaining;
  }

  try {
    const body = await req.json();
    const uiMessages = normalizeMessages(body.messages || []);
    const ctx = body.context as
      | {
          standardCode?: string;
          standardTitle?: string;
          chapterNo?: string;
          chapterTitle?: string;
          chapterBody?: string;
        }
      | undefined;

    // Attachments → vision-capable model. Overseas (Gemini) is already
    // multimodal; domestic (DeepSeek) is text-only and routes to Qwen-VL via
    // DashScope. When the domestic vision model isn't provisioned we stream a
    // friendly message rather than 500-ing.
    // Client model-picker selection (domestic side). parseRequestedProvider +
    // the host invariant in getChatModel ensure this can only switch *within*
    // the configured provider set without changing GetFRP's production default.
    const requestedProvider = parseRequestedProvider(body.model);
    const withAttachments = hasFilePart(uiMessages);
    let model = getChatModelForRequest(req, requestedProvider);
    let chatMessages = uiMessages;
    let pdfDropped = false;
    if (withAttachments) {
      const vision = getVisionChatModelForRequest(req);
      if (!vision.ok || !vision.model) {
        const stream = createUIMessageStream({
          execute: ({ writer }) => {
            const id = "vision-unavailable";
            writer.write({ type: "text-start", id });
            writer.write({
              type: "text-delta",
              id,
              delta: visionUnavailableText(),
            });
            writer.write({ type: "text-end", id });
          },
        });
        const resp = createUIMessageStreamResponse({ stream });
        if (anonCookieToSet) resp.headers.append("Set-Cookie", anonCookieToSet);
        if (anonRemaining !== null) resp.headers.set("X-Anon-Remaining", String(anonRemaining));
        return resp;
      }
      model = vision.model;

      // Only Gemini (overseas) ingests PDF natively. Qwen-VL (domestic) rejects
      // `file` parts mid-stream → dropped SSE connection. On non-Gemini vision
      // paths, strip PDFs (keep images) and steer the model to ask for an image.
      const modelHandlesPdf =
        vision.provider === "google" || vision.provider === "openrouter";
      if (!modelHandlesPdf) {
        const sanitized = stripPdfParts(uiMessages);
        chatMessages = sanitized.messages;
        pdfDropped = sanitized.removed;
      }
    }

    const query = lastUserQuery(chatMessages);
    let retrieved: Retrieved[] = [];
    try {
      if (query) retrieved = await retrieveTopK(query, 8);
    } catch (e) {
      console.warn(
        "[chat] RAG retrieval failed:",
        e instanceof Error ? e.message : e
      );
    }

    const systemParts: string[] = [
      SYSTEM_PROMPT_EN,
      localeInstruction(),
      citationGuidance(),
    ];
    if (withAttachments) systemParts.push(visionInstruction());
    if (pdfDropped) systemParts.push(pdfDroppedInstruction());

    const ragBlock = buildRagContext(retrieved);
    if (ragBlock) systemParts.push(ragBlock);

    if (ctx?.standardCode) {
      const lines = [
        `You are currently helping the user interpret standard [${ctx.standardCode}]${ctx.standardTitle ? ` — ${ctx.standardTitle}` : ""}.`,
      ];
      if (ctx.chapterNo || ctx.chapterTitle) {
        lines.push(
          `User is focused on: Chapter ${ctx.chapterNo ?? "?"} ${ctx.chapterTitle ?? ""}`.trim()
        );
      }
      if (ctx.chapterBody) {
        lines.push(
          "Chapter highlights (for reference; do not quote verbatim):"
        );
        lines.push(ctx.chapterBody);
      }
      lines.push(
        "When answering: cite the chapter number explicitly; if information is missing, tell the user to consult the original standard; do not fabricate values."
      );
      systemParts.push(lines.join("\n"));
    }

    // Tools are disabled on attachment turns — the focus is reading the image,
    // and the vision models (Qwen-VL) have shakier tool support. So a drawing is
    // read on the attachment turn; Excel export happens on the NEXT
    // (attachment-free) turn when the user asks (visionInstruction primes them).
    //   - window_u_value: always on (pure local JG/T 571 table lookup, no env)
    //   - export_excel:   always on (BOM / 清单 → table echoed; the browser
    //                      builds the .xlsx on download — no OSS / storage)
    //   - web_search:     opt-in, gated on the per-host search provider's key
    // stopWhen is required so the model produces a final text answer AFTER a
    // tool call (and is capped so it can't recursion-loop tool calls).
    const host = req.headers.get("x-forwarded-host") || req.headers.get("host");
    const tools = withAttachments
      ? undefined
      : {
          window_u_value: makeWindowUValueTool(),
          profile_mechanics: makeProfileCalcTool(),
          select_profile: makeSelectProfileTool(),
          material_selector: makeMaterialSelectorTool(),
          feasibility_match: makeFeasibilityMatchTool(),
          landed_cost_usd: makeLandedCostTool(),
          compliance_flags: makeComplianceFlagsTool(),
          create_sourcing_brief: makeCreateSourcingBriefTool(host, "en"),
          export_excel: makeExportExcelTool(),
          ...(isWebSearchConfigured(host)
            ? { web_search: makeWebSearchTool(host) }
            : {}),
        };
    // Cap raised 3→6: the Sourcing Desk concierge may chain feasibility_match →
    // landed_cost_usd → compliance_flags (→ create_sourcing_brief) within a turn.
    const toolsConfig = tools ? { tools, stopWhen: stepCountIs(6) } : {};

    // NO mid-stream provider failover here (deliberate). The non-streaming
    // call sites (quote extract/explain, followups, community/ask) use
    // withChatFallback to retry the next *same-side* provider on error, but
    // streaming cannot do that safely: per the AI SDK docs, `streamText`
    // "immediately starts streaming … errors become part of the stream and
    // are NOT thrown" (node_modules/ai/docs/03-ai-sdk-core/05-generating-text.mdx).
    // So a connect/auth/quota failure only surfaces AFTER the HTTP response has
    // begun streaming to the client — there is no clean pre-stream signal to
    // restart on the next provider without first buffering the whole stream
    // (which defeats streaming). Faking it would risk a half-emitted answer or
    // a broken SSE connection, so the chat route stays on the host-resolved
    // primary. `isChatConfiguredForRequest` (checked earlier) + the per-host
    // key guard in getChatModel keep the build-time skip of unconfigured
    // providers intact, and `model` here is still strictly within-side
    // (getChatModelForRequest → pickProviderForHost can never cross the GFW/
    // brand boundary). onError below logs stream errors for observability.
    const result = streamText({
      model,
      system: systemParts.join("\n\n"),
      messages: await convertToModelMessages(chatMessages),
      maxOutputTokens: 2000,
      ...toolsConfig,
      // Stream errors are part of the stream (not thrown) — log them so the one
      // path without provider fallback (see comment above) is observable.
      onError: ({ error }) => {
        console.warn(
          "[chat] stream error (no mid-stream failover):",
          error instanceof Error ? error.message : error,
        );
      },
      // G2 · 红线质检(回合结束 lint,不阻断流;高危违规写日志,供后续转人工/观测)。
      onFinish: (event) => {
        try {
          const toolNames = (event.steps ?? []).flatMap((s) =>
            (s.toolCalls ?? []).map((tc) => (tc as { toolName: string }).toolName),
          );
          const guard = applyRedlines({ host, finalText: event.text ?? "", toolNames });
          if (!guard.passed) {
            console.warn("[redlines]", JSON.stringify({ host, violations: guard.violations }));
          }
        } catch (err) {
          console.error("[redlines] guard error:", err);
        }
      },
    });

    const streamResponse = result.toUIMessageStreamResponse({
      messageMetadata: () => ({
        citations: retrieved.map((r, i) => ({
          n: i + 1,
          title: r.title,
          url: r.url,
          sourceType: r.sourceType,
          sourceId: r.sourceId,
        })),
      }),
    });
    if (anonCookieToSet) {
      streamResponse.headers.append("Set-Cookie", anonCookieToSet);
    }
    if (anonRemaining !== null) {
      streamResponse.headers.set("X-Anon-Remaining", String(anonRemaining));
    }
    return streamResponse;
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    console.error("Chat API error:", msg);
    return Response.json({ error: msg }, { status: 500 });
  }
}
