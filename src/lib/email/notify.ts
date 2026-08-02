const FROM = "GetFRP <noreply@getfrp.com>";
const CC_OPS = ["support@getfrp.com"];

interface SendOpts {
  to: string;
  subject: string;
  html: string;
  cc?: string[];
}

/** Send a GetFRP system email. Delivery is best-effort. */
export async function sendEmail({ to, subject, html, cc }: SendOpts): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[email] RESEND_API_KEY not set — skipping send", { to, subject });
    return false;
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: FROM,
        to,
        cc: cc ?? CC_OPS,
        subject,
        html,
      }),
    });
    if (!res.ok) {
      console.error("[email] Resend error", res.status, await res.text());
      return false;
    }
    return true;
  } catch (err) {
    console.error("[email] fetch failed", err);
    return false;
  }
}
