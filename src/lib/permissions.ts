import type { User } from "@/lib/db/schema";

export const USER_ROLES = [
  "individual",
  "enterprise_admin",
  "enterprise_member",
  "moderator",
  "admin",
] as const;

export const MEMBERSHIP_TIERS = ["free", "basic", "pro", "enterprise"] as const;

export type UserRole = (typeof USER_ROLES)[number];
export type MembershipTier = (typeof MEMBERSHIP_TIERS)[number];

export type RoleCapability = {
  supplierProfile: boolean;
  supplierProducts: boolean;
  ownDocuments: boolean;
  platformModeration: boolean;
  platformAdministration: boolean;
};

export const ROLE_CAPABILITIES: Record<UserRole, RoleCapability> = {
  individual: {
    supplierProfile: false,
    supplierProducts: false,
    ownDocuments: true,
    platformModeration: false,
    platformAdministration: false,
  },
  enterprise_member: {
    supplierProfile: true,
    supplierProducts: true,
    ownDocuments: true,
    platformModeration: false,
    platformAdministration: false,
  },
  enterprise_admin: {
    supplierProfile: true,
    supplierProducts: true,
    ownDocuments: true,
    platformModeration: false,
    platformAdministration: false,
  },
  moderator: {
    supplierProfile: false,
    supplierProducts: false,
    ownDocuments: true,
    platformModeration: true,
    platformAdministration: false,
  },
  admin: {
    supplierProfile: true,
    supplierProducts: true,
    ownDocuments: true,
    platformModeration: true,
    platformAdministration: true,
  },
};

type PermissionUser = Pick<User, "role" | "enterpriseId">;

export function isEnterpriseRole(role: UserRole): boolean {
  return role === "enterprise_admin" || role === "enterprise_member";
}

export function canEditSupplierProfile(user: PermissionUser): boolean {
  return Boolean(user.enterpriseId && ROLE_CAPABILITIES[user.role].supplierProfile);
}

export function canEditSupplierProducts(user: PermissionUser): boolean {
  return Boolean(user.enterpriseId && ROLE_CAPABILITIES[user.role].supplierProducts);
}

export function canEditOwnDocuments(user: Pick<User, "role">): boolean {
  return ROLE_CAPABILITIES[user.role].ownDocuments;
}

export function roleRequiresEnterprise(role: UserRole): boolean {
  return isEnterpriseRole(role);
}
