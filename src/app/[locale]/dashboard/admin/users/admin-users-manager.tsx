"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Pencil, Search } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  MEMBERSHIP_TIERS,
  ROLE_CAPABILITIES,
  USER_ROLES,
  isEnterpriseRole,
  type MembershipTier,
  type UserRole,
} from "@/lib/permissions";

export type AdminUserRow = {
  id: string;
  name: string;
  contact: string;
  role: UserRole;
  membershipTier: MembershipTier;
  enterpriseId: string | null;
  enterpriseName: string;
  createdAt: string;
  isCurrentUser: boolean;
};

export type EnterpriseOption = {
  id: string;
  name: string;
  status: string;
};

const ROLE_DESCRIPTIONS: Record<UserRole, string> = {
  individual: "Personal account. May manage only its own uploads and listings.",
  enterprise_member: "May edit the linked supplier profile, supplier product offerings and their own uploads.",
  enterprise_admin: "Full supplier-side editing for the linked company and its catalog content.",
  moderator: "Reserved platform moderation role; no database administration access.",
  admin: "Full platform administration, product catalog and user permission access.",
};

export function AdminUsersManager({
  rows,
  enterprises,
}: {
  rows: AdminUserRow[];
  enterprises: EnterpriseOption[];
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [editing, setEditing] = useState<AdminUserRow | null>(null);
  const [role, setRole] = useState<UserRole>("individual");
  const [membershipTier, setMembershipTier] = useState<MembershipTier>("free");
  const [enterpriseId, setEnterpriseId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const visibleRows = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return rows;
    return rows.filter((row) =>
      [row.name, row.contact, row.enterpriseName, row.role]
        .join(" ")
        .toLowerCase()
        .includes(needle),
    );
  }, [query, rows]);

  function open(row: AdminUserRow) {
    setEditing(row);
    setRole(row.role);
    setMembershipTier(row.membershipTier);
    setEnterpriseId(row.enterpriseId ?? "");
    setError(null);
  }

  function changeRole(nextRole: UserRole) {
    setRole(nextRole);
    if (!isEnterpriseRole(nextRole)) setEnterpriseId("");
  }

  function save() {
    if (!editing) return;
    setError(null);
    startTransition(async () => {
      const response = await fetch(`/api/admin/users/${editing.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          role,
          membershipTier,
          enterpriseId: enterpriseId || null,
        }),
      });
      const body = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(body?.error ?? "User permissions could not be saved.");
        return;
      }
      setEditing(null);
      router.refresh();
    });
  }

  const capabilities = ROLE_CAPABILITIES[role];

  return (
    <>
      <div className="relative max-w-md">
        <Search className="pointer-events-none absolute left-3 top-2.5 text-muted-foreground" size={15} />
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search name, email, company or role"
          className="pl-9"
        />
      </div>

      <div className="space-y-3">
        {visibleRows.map((row) => (
          <Card key={row.id}>
            <CardContent className="flex flex-col gap-4 p-4 lg:flex-row lg:items-center">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="font-semibold">{row.name}</h2>
                  <Badge variant={row.role === "admin" ? "default" : "secondary"}>{row.role.replaceAll("_", " ")}</Badge>
                  {row.isCurrentUser ? <Badge variant="outline">You</Badge> : null}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{row.contact || "No contact"}</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {row.enterpriseName || "No linked company"} · {row.membershipTier} membership · joined {row.createdAt}
                </div>
              </div>
              <Button variant="outline" onClick={() => open(row)}>
                <Pencil size={14} /> Permissions
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={editing !== null} onOpenChange={(openState) => !openState && !pending && setEditing(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>User role and permissions</DialogTitle>
            <DialogDescription>
              {editing?.name} · {editing?.contact || "No contact"}. Supplier edits are always restricted to the assigned company.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium">
                Role
                <select
                  value={role}
                  onChange={(event) => changeRole(event.target.value as UserRole)}
                  disabled={editing?.isCurrentUser}
                  className="mt-1.5 w-full rounded-md border bg-background px-3 py-2 text-sm disabled:opacity-60"
                >
                  {USER_ROLES.map((item) => (
                    <option key={item} value={item}>{item.replaceAll("_", " ")}</option>
                  ))}
                </select>
              </label>
              <label className="block text-sm font-medium">
                Membership
                <select
                  value={membershipTier}
                  onChange={(event) => setMembershipTier(event.target.value as MembershipTier)}
                  className="mt-1.5 w-full rounded-md border bg-background px-3 py-2 text-sm"
                >
                  {MEMBERSHIP_TIERS.map((item) => <option key={item} value={item}>{item}</option>)}
                </select>
              </label>
            </div>

            {isEnterpriseRole(role) ? (
              <label className="block text-sm font-medium">
                Assigned company
                <select
                  value={enterpriseId}
                  onChange={(event) => setEnterpriseId(event.target.value)}
                  required
                  className="mt-1.5 w-full rounded-md border bg-background px-3 py-2 text-sm"
                >
                  <option value="">Select a company…</option>
                  {enterprises.map((enterprise) => (
                    <option key={enterprise.id} value={enterprise.id}>
                      {enterprise.name} ({enterprise.status})
                    </option>
                  ))}
                </select>
              </label>
            ) : null}

            <div className="rounded-lg border bg-muted/20 p-4">
              <div className="font-medium">Effective permissions</div>
              <p className="mt-1 text-sm text-muted-foreground">{ROLE_DESCRIPTIONS[role]}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <PermissionBadge enabled={capabilities.supplierProfile} label="Edit supplier profile" />
                <PermissionBadge enabled={capabilities.supplierProducts} label="Edit supplier products" />
                <PermissionBadge enabled={capabilities.ownDocuments} label="Edit own uploads" />
                <PermissionBadge enabled={capabilities.platformModeration} label="Moderation role" />
                <PermissionBadge enabled={capabilities.platformAdministration} label="Platform admin" />
              </div>
            </div>

            {error ? <div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800">{error}</div> : null}
            <div className="flex justify-end gap-2">
              <Button variant="ghost" onClick={() => setEditing(null)} disabled={pending}>Cancel</Button>
              <Button onClick={save} disabled={pending || (isEnterpriseRole(role) && !enterpriseId)}>
                {pending ? "Saving…" : "Save permissions"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

function PermissionBadge({ enabled, label }: { enabled: boolean; label: string }) {
  return (
    <Badge variant={enabled ? "default" : "outline"} className={!enabled ? "opacity-50" : ""}>
      {enabled ? "Allowed" : "Not allowed"}: {label}
    </Badge>
  );
}
