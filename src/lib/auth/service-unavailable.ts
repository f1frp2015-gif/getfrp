import { NextResponse } from "next/server";

export type AuthOperation = "login" | "register";

type ErrorMetadata = {
  name: string;
  code?: string;
  status?: number;
};

function errorChain(error: unknown): unknown[] {
  const chain: unknown[] = [];
  const visited = new Set<unknown>();
  let current = error;

  while (current && !visited.has(current) && chain.length < 5) {
    chain.push(current);
    visited.add(current);
    if (typeof current !== "object" || !("cause" in current)) break;
    current = current.cause;
  }
  return chain;
}

export function authErrorMetadata(error: unknown): ErrorMetadata {
  const chain = errorChain(error);
  const named =
    chain.find(
      (entry): entry is { name: string } =>
        typeof entry === "object" &&
        entry !== null &&
        "name" in entry &&
        typeof entry.name === "string" &&
        entry.name.length > 0 &&
        entry.name !== "Error",
    ) ??
    chain.find(
      (entry): entry is { name: string } =>
        typeof entry === "object" &&
        entry !== null &&
        "name" in entry &&
        typeof entry.name === "string" &&
        entry.name.length > 0,
    );
  const coded = chain.find(
    (entry): entry is { code: string } =>
      typeof entry === "object" &&
      entry !== null &&
      "code" in entry &&
      typeof entry.code === "string" &&
      /^[A-Z0-9_-]{2,32}$/i.test(entry.code),
  );
  const status = chain
    .filter((entry): entry is Error => entry instanceof Error)
    .map((entry) => entry.message.match(/HTTP status (\d{3})/i)?.[1])
    .find(Boolean);

  return {
    name: named?.name ?? "UnknownError",
    code: coded?.code,
    status: status ? Number(status) : undefined,
  };
}

export function authServiceUnavailable(
  operation: AuthOperation,
  error: unknown,
): NextResponse {
  // Do not log Error.message here: database drivers may include the submitted
  // email address in query parameters. Name/code/status are enough to group
  // incidents without exposing submitted credentials or identifiers.
  const metadata = authErrorMetadata(error);
  console.error(`[email-password/${operation}] service unavailable`, metadata);

  return NextResponse.json(
    {
      error: "Authentication service temporarily unavailable. Please retry shortly.",
      code: "AUTH_SERVICE_UNAVAILABLE",
    },
    {
      status: 503,
      headers: {
        "Cache-Control": "no-store",
        "Retry-After": "60",
      },
    },
  );
}
