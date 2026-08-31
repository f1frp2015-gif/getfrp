"use client";

// Direct email+password sign-up/in for getfrp.com (en/overseas). No email
// verification (low-friction lead capture); password is the login factor.
// English-only (renders on the en locale), so strings are inline.
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const AUTH_REQUEST_TIMEOUT_MS = 15_000;

type Portal = "buyer" | "supplier" | "admin";

const PORTALS: Record<
  Portal,
  {
    label: string;
    shortDescription: string;
    signInTitle: string;
    signUpTitle: string;
    formDescription: string;
    destination: string;
  }
> = {
  buyer: {
    label: "Buyer",
    shortDescription: "Source products and manage requests",
    signInTitle: "Sign in to your buyer workspace",
    signUpTitle: "Create your buyer account",
    formDescription: "Manage sourcing requests, saved suppliers and conversations.",
    destination: "/dashboard",
  },
  supplier: {
    label: "Supplier",
    shortDescription: "Manage your company and evidence",
    signInTitle: "Sign in to your supplier workspace",
    signUpTitle: "Create your supplier account",
    formDescription: "Claim a company, upload evidence and manage buyer inquiries.",
    destination: "/dashboard/supplier",
  },
  admin: {
    label: "Administrator",
    shortDescription: "Review suppliers, users and evidence",
    signInTitle: "Sign in to the administrator portal",
    signUpTitle: "Administrator access",
    formDescription: "Authorized GetFRP administrators only.",
    destination: "/dashboard/admin",
  },
};

function safePath(value: string | null): string {
  if (!value) return "/dashboard";
  let candidate = value;
  try {
    if (/^https?:\/\//i.test(value)) {
      const u = new URL(value);
      candidate = `${u.pathname}${u.search}`;
    }
  } catch {
    return "/dashboard";
  }
  if (!candidate.startsWith("/") || candidate.startsWith("//")) return "/dashboard";
  return candidate;
}

function requestedPortal(
  portal: string | null,
  intent: string | null,
  redirectTo: string,
): Portal {
  if (portal === "buyer" || portal === "supplier" || portal === "admin") return portal;
  const workspacePath = redirectTo.replace(/^\/en(?=\/|$)/, "") || "/";
  if (intent === "supplier" || workspacePath.startsWith("/dashboard/supplier")) return "supplier";
  if (workspacePath.startsWith("/dashboard/admin")) return "admin";
  return "buyer";
}

export function EmailPasswordForm({ mode }: { mode: "signIn" | "signUp" }) {
  const searchParams = useSearchParams();
  // Accept both names while older links migrate to the canonical
  // redirect_url parameter.
  const redirectParam = searchParams.get("redirect_url") ?? searchParams.get("redirect");
  const isSignUp = mode === "signUp";
  const requestedRedirect = safePath(redirectParam);
  const initialPortal = requestedPortal(
    searchParams.get("portal"),
    searchParams.get("intent"),
    requestedRedirect,
  );
  const adminSignUpRequest = isSignUp && initialPortal === "admin";
  const [portal, setPortal] = useState<Portal>(adminSignUpRequest ? "buyer" : initialPortal);
  const [usePortalDestination, setUsePortalDestination] = useState(
    !redirectParam || adminSignUpRequest,
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const portalCopy = PORTALS[portal];
  const redirectTo = usePortalDestination ? portalCopy.destination : requestedRedirect;
  const portalOptions = (Object.keys(PORTALS) as Portal[]).filter(
    (option) => !isSignUp || option !== "admin",
  );

  function selectPortal(nextPortal: Portal) {
    setPortal(nextPortal);
    setUsePortalDestination(true);
    setError(null);
  }

  async function submit() {
    if (loading) return;
    if (!EMAIL_RE.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (isSignUp && password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }
    if (!password) {
      setError("Please enter your password");
      return;
    }
    setLoading(true);
    setError(null);
    const controller = new AbortController();
    const timeout = window.setTimeout(
      () => controller.abort(),
      AUTH_REQUEST_TIMEOUT_MS,
    );
    try {
      const res = await fetch(isSignUp ? "/api/auth/email-password/register" : "/api/auth/email-password/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        signal: controller.signal,
      });
      const data = (await res.json().catch(() => null)) as
        | { error?: string }
        | null;
      if (!res.ok) {
        setError(
          data?.error ??
            (res.status >= 500
              ? "The authentication service is temporarily unavailable. Please retry shortly."
              : "The server could not process this request. Please try again."),
        );
        return;
      }
      // Full navigation so the proxy/middleware reads the freshly-set cookie.
      window.location.assign(redirectTo);
    } catch (requestError) {
      setError(
        requestError instanceof DOMException && requestError.name === "AbortError"
          ? "The server took too long to respond. Please retry."
          : "Unable to contact the authentication service. Check your connection and retry.",
      );
    } finally {
      window.clearTimeout(timeout);
      setLoading(false);
    }
  }

  const switchParams = new URLSearchParams();
  switchParams.set("portal", portal);
  if (redirectParam && !usePortalDestination) switchParams.set("redirect_url", redirectParam);
  const switchHref = `${isSignUp ? "/sign-in" : "/sign-up"}${switchParams.size ? `?${switchParams}` : ""}`;

  return (
    <div className="w-full max-w-xl space-y-6">
      <div className="text-center">
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
          One account · Three workspaces
        </div>
        <h1 className="mt-2 text-2xl font-bold">
          {isSignUp ? portalCopy.signUpTitle : portalCopy.signInTitle}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {portalCopy.formDescription}
        </p>
      </div>

      <fieldset>
        <legend className="sr-only">Choose a workspace</legend>
        <div className={`grid gap-2 ${portalOptions.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>
          {portalOptions.map((option) => {
            const selected = portal === option;
            const optionCopy = PORTALS[option];
            return (
              <label
                key={option}
                className={`cursor-pointer rounded-lg border p-3 text-left transition-colors focus-within:ring-2 focus-within:ring-ring/50 ${
                  selected
                    ? "border-primary bg-primary/5 text-foreground"
                    : "border-border bg-background text-muted-foreground hover:border-foreground/30 hover:bg-muted/50"
                }`}
              >
                <input
                  type="radio"
                  name="workspace"
                  value={option}
                  checked={selected}
                  onChange={() => selectPortal(option)}
                  className="sr-only"
                />
                <span className="block text-sm font-semibold">{optionCopy.label}</span>
                <span className="mt-1 block text-xs leading-4">{optionCopy.shortDescription}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <form
        className="mx-auto max-w-sm space-y-3"
        onSubmit={(event) => {
          event.preventDefault();
          void submit();
        }}
      >
        <div>
          <label htmlFor="login-email" className="mb-1.5 block text-sm font-medium">
            Email
          </label>
          <Input
            id="login-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={email}
            placeholder="you@company.com"
            onChange={(e) => setEmail(e.target.value.trim())}
          />
        </div>
        <div>
          <label htmlFor="login-password" className="mb-1.5 block text-sm font-medium">
            Password
          </label>
          <Input
            id="login-password"
            type="password"
            autoComplete={isSignUp ? "new-password" : "current-password"}
            value={password}
            placeholder={isSignUp ? "At least 8 characters" : "Your password"}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && (
          <div
            role="alert"
            className="rounded-md border border-red-200 bg-red-50 p-2 text-sm text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300"
          >
            {error}
          </div>
        )}

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? (isSignUp ? "Creating account…" : "Signing in…") : isSignUp ? "Create account" : "Sign in"}
        </Button>
      </form>

      {portal === "admin" && !isSignUp ? (
        <p className="text-center text-sm text-muted-foreground">
          Administrator access is assigned by GetFRP and checked after sign-in.
        </p>
      ) : (
        <p className="text-center text-sm text-muted-foreground">
          {isSignUp ? "Already have an account? " : "Need an account? "}
          <Link href={switchHref as "/sign-in"} className="font-medium text-foreground hover:underline">
            {isSignUp ? "Sign in" : "Create one"}
          </Link>
        </p>
      )}
    </div>
  );
}
