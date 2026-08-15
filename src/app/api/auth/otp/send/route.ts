import { NextRequest, NextResponse } from "next/server";
import { and, eq, gte, sql } from "drizzle-orm";
import { db } from "@/lib/db";
import { phoneOtps } from "@/lib/db/schema";
import {
  generateCode,
  hashCode,
  isValidCnPhone,
  OTP_DAILY_CAP,
  OTP_RESEND_COOLDOWN_SEC,
  OTP_TTL_SEC,
} from "@/lib/auth/otp";
import { sendOtpSms, smsConfigured } from "@/lib/aliyun-sms";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const phone = String(body?.phone ?? "").trim();

  if (!isValidCnPhone(phone)) {
    return NextResponse.json({ error: "Enter a valid phone number" }, { status: 400 });
  }

  try {
    const now = Date.now();

    // 限流 1:同号 60s 内只能发一次
    const cooldownSince = new Date(now - OTP_RESEND_COOLDOWN_SEC * 1000);
    const [recent] = await db
      .select({ id: phoneOtps.id })
      .from(phoneOtps)
      .where(and(eq(phoneOtps.phone, phone), gte(phoneOtps.createdAt, cooldownSince)))
      .limit(1);
    if (recent) {
      return NextResponse.json({ error: "Verification codes were requested too frequently; try again later" }, { status: 429 });
    }

    // 限流 2:同号 24h 内最多 OTP_DAILY_CAP 条
    const daySince = new Date(now - 24 * 60 * 60 * 1000);
    const [{ count }] = await db
      .select({ count: sql<number>`count(*)::int` })
      .from(phoneOtps)
      .where(and(eq(phoneOtps.phone, phone), gte(phoneOtps.createdAt, daySince)));
    if (count >= OTP_DAILY_CAP) {
      return NextResponse.json({ error: "The daily verification-code limit has been reached" }, { status: 429 });
    }

    const code = generateCode();
    await db.insert(phoneOtps).values({
      phone,
      codeHash: hashCode(code, phone),
      expiresAt: new Date(now + OTP_TTL_SEC * 1000),
    });

    if (smsConfigured()) {
      const sent = await sendOtpSms(phone, code);
      if (!sent.ok) {
        return NextResponse.json({ error: sent.error }, { status: 502 });
      }
      return NextResponse.json({ ok: true });
    }

    // 短信未配置:开发环境直接回传验证码方便联调;生产环境拒绝。
    if (process.env.NODE_ENV !== "production") {
      return NextResponse.json({ ok: true, devCode: code });
    }
    return NextResponse.json({ error: "SMS service is not configured" }, { status: 503 });
  } catch (e) {
    console.error("[otp/send] failed:", e instanceof Error ? e.message : e);
    return NextResponse.json({ error: "Service temporarily unavailable; please try again later" }, { status: 500 });
  }
}
