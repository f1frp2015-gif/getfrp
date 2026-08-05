import { eq } from "drizzle-orm";

import { getCurrentUser } from "@/lib/auth/current-user";
import { db } from "@/lib/db";
import { supplierListings, type SupplierListing, type User } from "@/lib/db/schema";
import { canEditSupplierProducts, canEditSupplierProfile } from "@/lib/permissions";

type SupplierPermission = "profile" | "products";

export type SupplierAccess =
  | { ok: true; user: User; supplier: SupplierListing }
  | { ok: false; status: 401 | 403 | 404; reason: string };

export async function gateSupplierAccess(
  permission: SupplierPermission,
): Promise<SupplierAccess> {
  const user = await getCurrentUser();
  if (!user) return { ok: false, status: 401, reason: "Please sign in." };

  const allowed =
    permission === "profile"
      ? canEditSupplierProfile(user)
      : canEditSupplierProducts(user);
  if (!allowed) {
    return {
      ok: false,
      status: 403,
      reason: "Your account does not have permission to edit this supplier.",
    };
  }

  const [supplier] = await db
    .select()
    .from(supplierListings)
    .where(eq(supplierListings.enterpriseId, user.enterpriseId!))
    .limit(1);
  if (!supplier) {
    return {
      ok: false,
      status: 404,
      reason: "No supplier profile is linked to your company.",
    };
  }

  return { ok: true, user, supplier };
}
