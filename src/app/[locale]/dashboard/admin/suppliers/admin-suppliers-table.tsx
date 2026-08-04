"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ExternalLink, Pencil } from "lucide-react";

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
import { Textarea } from "@/components/ui/textarea";

export type AdminSupplierRow = {
  id: string;
  slug: string;
  name: string;
  nameEn: string;
  locationEn: string;
  category: string;
  website: string;
  descriptionEn: string;
  established: number | null;
  productsEn: string[];
  processListEn: string[];
  certificationsEn: string[];
  capabilities: string[];
  standardsSupported: string[];
  moqKg: number | null;
  leadTimeDays: number | null;
  verified: boolean;
  exportReady: boolean;
  profilePublished: boolean;
  claimed: boolean;
  updatedAt: string;
};

function lines(values: string[]): string {
  return values.join("\n");
}

function toArray(value: FormDataEntryValue | null): string[] {
  return String(value ?? "")
    .split(/[\n,，、]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

export function AdminSuppliersTable({ rows }: { rows: AdminSupplierRow[] }) {
  const router = useRouter();
  const [editing, setEditing] = useState<AdminSupplierRow | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function close() {
    setEditing(null);
    setError(null);
  }

  function submit(formData: FormData) {
    if (!editing) return;
    setError(null);
    startTransition(async () => {
      const numeric = (name: string) => {
        const value = String(formData.get(name) ?? "").trim();
        return value ? Number(value) : null;
      };
      const payload = {
        nameEn: String(formData.get("nameEn") ?? "").trim(),
        locationEn: String(formData.get("locationEn") ?? "").trim(),
        category: String(formData.get("category") ?? "").trim(),
        website: String(formData.get("website") ?? "").trim(),
        descriptionEn: String(formData.get("descriptionEn") ?? "").trim(),
        established: numeric("established"),
        productsEn: toArray(formData.get("productsEn")),
        processListEn: toArray(formData.get("processListEn")),
        certificationsEn: toArray(formData.get("certificationsEn")),
        capabilities: toArray(formData.get("capabilities")),
        standardsSupported: toArray(formData.get("standardsSupported")),
        moqKg: numeric("moqKg"),
        leadTimeDays: numeric("leadTimeDays"),
        verified: formData.get("verified") === "on",
        exportReady: formData.get("exportReady") === "on",
        profilePublished: formData.get("profilePublished") === "on",
      };

      const response = await fetch(`/api/admin/suppliers/${editing.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(body?.error ?? "Supplier record could not be updated.");
        return;
      }
      close();
      router.refresh();
    });
  }

  if (rows.length === 0) {
    return <Card><CardContent className="py-12 text-center text-sm text-muted-foreground">No supplier records match these filters.</CardContent></Card>;
  }

  return (
    <>
      <div className="space-y-3">
        {rows.map((row) => (
          <Card key={row.id}>
            <CardContent className="flex flex-col gap-4 p-4 lg:flex-row lg:items-center">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="font-semibold">{row.nameEn || row.name}</h2>
                  {row.verified && <Badge>Identity checked</Badge>}
                  {row.profilePublished && <Badge variant="signal">Published</Badge>}
                  {row.exportReady && <Badge variant="outline">Export ready</Badge>}
                  {row.claimed && <Badge variant="secondary">Claimed</Badge>}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {[row.locationEn, row.category, row.established ? `Est. ${row.established}` : ""]
                    .filter(Boolean)
                    .join(" · ")}
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {[...row.capabilities, ...row.standardsSupported].slice(0, 6).map((item) => (
                    <Badge key={item} variant="outline" className="text-[10px]">{item}</Badge>
                  ))}
                </div>
              </div>
              <div className="grid shrink-0 grid-cols-2 gap-4 text-xs sm:grid-cols-3">
                <div><span className="block text-muted-foreground">MOQ</span>{row.moqKg ? `${row.moqKg} kg` : "—"}</div>
                <div><span className="block text-muted-foreground">Lead time</span>{row.leadTimeDays ? `${row.leadTimeDays} days` : "—"}</div>
                <div><span className="block text-muted-foreground">Updated</span>{row.updatedAt.slice(0, 10)}</div>
              </div>
              <div className="flex shrink-0 gap-2">
                <Link href={`/suppliers/${row.slug}`} target="_blank" className="inline-flex h-9 items-center gap-1.5 rounded-md border px-3 text-sm hover:bg-muted">
                  View <ExternalLink size={13} />
                </Link>
                <Button type="button" variant="outline" onClick={() => setEditing(row)}>
                  <Pencil size={14} /> Edit
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={Boolean(editing)} onOpenChange={(open) => !open && close()}>
        <DialogContent className="max-h-[92vh] max-w-4xl overflow-y-auto">
          {editing ? (
            <>
              <DialogHeader>
                <DialogTitle>Edit supplier record</DialogTitle>
                <DialogDescription>
                  Public and sourcing-readiness fields for {editing.nameEn || editing.name}. Record ID: {editing.id}
                </DialogDescription>
              </DialogHeader>
              <form action={submit} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="English company name" name="nameEn" defaultValue={editing.nameEn} required />
                  <Field label="Location" name="locationEn" defaultValue={editing.locationEn} />
                  <Field label="Supplier category" name="category" defaultValue={editing.category} />
                  <Field label="Website" name="website" defaultValue={editing.website} type="url" />
                  <Field label="Established" name="established" defaultValue={editing.established ?? ""} type="number" />
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="MOQ (kg)" name="moqKg" defaultValue={editing.moqKg ?? ""} type="number" />
                    <Field label="Lead time (days)" name="leadTimeDays" defaultValue={editing.leadTimeDays ?? ""} type="number" />
                  </div>
                </div>
                <TextAreaField label="English description" name="descriptionEn" defaultValue={editing.descriptionEn} rows={4} />
                <div className="grid gap-4 sm:grid-cols-2">
                  <TextAreaField label="Products (one per line)" name="productsEn" defaultValue={lines(editing.productsEn)} />
                  <TextAreaField label="Processes (one per line)" name="processListEn" defaultValue={lines(editing.processListEn)} />
                  <TextAreaField label="Certifications (one per line)" name="certificationsEn" defaultValue={lines(editing.certificationsEn)} />
                  <TextAreaField label="Capabilities (one per line)" name="capabilities" defaultValue={lines(editing.capabilities)} />
                  <TextAreaField label="Supported standards (one per line)" name="standardsSupported" defaultValue={lines(editing.standardsSupported)} />
                </div>
                <div className="flex flex-wrap gap-6 rounded-lg border bg-muted/20 p-4">
                  <Check name="verified" label="Identity checked" defaultChecked={editing.verified} />
                  <Check name="exportReady" label="Export ready" defaultChecked={editing.exportReady} />
                  <Check name="profilePublished" label="Publish profile" defaultChecked={editing.profilePublished} />
                </div>
                {error ? <div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800">{error}</div> : null}
                <div className="flex justify-end gap-2">
                  <Button type="button" variant="ghost" onClick={close} disabled={pending}>Cancel</Button>
                  <Button type="submit" disabled={pending}>{pending ? "Saving…" : "Save supplier"}</Button>
                </div>
              </form>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}

function Field({ label, ...props }: React.ComponentProps<typeof Input> & { label: string }) {
  return <label className="block text-sm font-medium">{label}<Input className="mt-1.5" {...props} /></label>;
}

function TextAreaField({ label, ...props }: React.ComponentProps<typeof Textarea> & { label: string }) {
  return <label className="block text-sm font-medium">{label}<Textarea className="mt-1.5" rows={3} {...props} /></label>;
}

function Check({ name, label, defaultChecked }: { name: string; label: string; defaultChecked: boolean }) {
  return <label className="flex items-center gap-2 text-sm font-medium"><input type="checkbox" name={name} defaultChecked={defaultChecked} className="h-4 w-4 rounded border" />{label}</label>;
}
