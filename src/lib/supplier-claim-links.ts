export type SupplierClaimPath = `/suppliers/claim${string}`;

const SUPPLIER_CLAIM_PATH = "/suppliers/claim" as const;

export function supplierClaimPath(
  supplierKey?: string | null,
): SupplierClaimPath {
  return supplierKey
    ? `${SUPPLIER_CLAIM_PATH}?supplier=${encodeURIComponent(supplierKey)}`
    : SUPPLIER_CLAIM_PATH;
}

export const supplierClaimHref = supplierClaimPath;

function supplierClaimAuthHref<AuthPath extends "/sign-up" | "/sign-in">(
  authPath: AuthPath,
  supplierKey?: string | null,
): `${AuthPath}?${string}` {
  const redirectUrl = encodeURIComponent(supplierClaimPath(supplierKey));
  return `${authPath}?intent=supplier&redirect_url=${redirectUrl}` as `${AuthPath}?${string}`;
}

export function supplierClaimSignUpHref(
  supplierKey?: string | null,
): `/sign-up?${string}` {
  return supplierClaimAuthHref("/sign-up", supplierKey);
}

export function supplierClaimSignInHref(
  supplierKey?: string | null,
): `/sign-in?${string}` {
  return supplierClaimAuthHref("/sign-in", supplierKey);
}
