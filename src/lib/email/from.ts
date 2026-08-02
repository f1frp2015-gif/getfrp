const DEFAULT_FROM_EMAIL = "noreply@f1composite.com";

/** Format a GetFRP sender using the Resend-verified production identity. */
export function getGetfrpFrom(label: string): string {
  const email = process.env.GETFRP_FROM_EMAIL?.trim() || DEFAULT_FROM_EMAIL;
  return `${label} <${email}>`;
}
