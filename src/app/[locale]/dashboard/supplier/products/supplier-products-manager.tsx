"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { ExternalLink, Pencil, Plus, Trash2 } from "lucide-react";

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
import { Link } from "@/i18n/navigation";

export type CatalogOption = {
  id: string;
  slug: string;
  nameEn: string;
  category: string;
};

export type SupplierProductRow = {
  id: string;
  productId: string;
  productSlug: string;
  productName: string;
  category: string;
  relationshipType: string;
  supplierProductName: string;
  supplierSku: string;
  isPrimary: boolean;
  isVerified: boolean;
  customAvailable: boolean;
  moq: number | null;
  moqUnit: string;
  leadTimeDays: number | null;
  specificationOverrides: Record<string, string>;
  evidence: {
    sourceType?: string;
    sourceUrl?: string;
    reviewedAt?: string;
    note?: string;
  } | null;
};

type FormState = {
  productId: string;
  relationshipType: "manufacturer" | "supplier" | "distributor" | "agent";
  supplierProductName: string;
  supplierSku: string;
  isPrimary: boolean;
  customAvailable: boolean;
  moq: string;
  moqUnit: string;
  leadTimeDays: string;
  specificationText: string;
  evidenceSourceType: string;
  evidenceSourceUrl: string;
  evidenceNote: string;
};

const EMPTY_FORM: FormState = {
  productId: "",
  relationshipType: "manufacturer",
  supplierProductName: "",
  supplierSku: "",
  isPrimary: false,
  customAvailable: false,
  moq: "",
  moqUnit: "",
  leadTimeDays: "",
  specificationText: "",
  evidenceSourceType: "",
  evidenceSourceUrl: "",
  evidenceNote: "",
};

function overridesText(overrides: Record<string, string>): string {
  return Object.entries(overrides)
    .map(([key, value]) => `${key} | ${value}`)
    .join("\n");
}

function parseOverrides(value: string): Record<string, string> {
  return Object.fromEntries(
    value
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const [key = "", ...rest] = line.split("|");
        return [key.trim(), rest.join("|").trim()];
      })
      .filter(([key]) => Boolean(key)),
  );
}

function nullableNumber(value: string): number | null {
  if (!value.trim()) return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? Math.round(parsed) : null;
}

export function SupplierProductsManager({
  rows,
  catalog,
}: {
  rows: SupplierProductRow[];
  catalog: CatalogOption[];
}) {
  const router = useRouter();
  const [editing, setEditing] = useState<SupplierProductRow | "new" | null>(null);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const availableProducts = useMemo(() => {
    const linked = new Set(rows.map((row) => row.productId));
    return catalog.filter((product) => !linked.has(product.id));
  }, [catalog, rows]);

  function patch<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function openNew() {
    setEditing("new");
    setForm({ ...EMPTY_FORM, productId: availableProducts[0]?.id ?? "" });
    setError(null);
  }

  function openEdit(row: SupplierProductRow) {
    setEditing(row);
    setForm({
      productId: row.productId,
      relationshipType: ["manufacturer", "supplier", "distributor", "agent"].includes(row.relationshipType)
        ? (row.relationshipType as FormState["relationshipType"])
        : "manufacturer",
      supplierProductName: row.supplierProductName,
      supplierSku: row.supplierSku,
      isPrimary: row.isPrimary,
      customAvailable: row.customAvailable,
      moq: row.moq == null ? "" : String(row.moq),
      moqUnit: row.moqUnit,
      leadTimeDays: row.leadTimeDays == null ? "" : String(row.leadTimeDays),
      specificationText: overridesText(row.specificationOverrides),
      evidenceSourceType: row.evidence?.sourceType ?? "",
      evidenceSourceUrl: row.evidence?.sourceUrl ?? "",
      evidenceNote: row.evidence?.note ?? "",
    });
    setError(null);
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!editing) return;
    setError(null);
    startTransition(async () => {
      const payload = {
        relationshipType: form.relationshipType,
        supplierProductName: form.supplierProductName,
        supplierSku: form.supplierSku,
        isPrimary: form.isPrimary,
        customAvailable: form.customAvailable,
        moq: nullableNumber(form.moq),
        moqUnit: form.moqUnit,
        leadTimeDays: nullableNumber(form.leadTimeDays),
        specificationOverrides: parseOverrides(form.specificationText),
        evidence: {
          sourceType: form.evidenceSourceType,
          sourceUrl: form.evidenceSourceUrl,
          note: form.evidenceNote,
        },
        ...(editing === "new" ? { productId: form.productId } : {}),
      };
      const response = await fetch(
        editing === "new" ? "/api/supplier/products" : `/api/supplier/products/${editing.id}`,
        {
          method: editing === "new" ? "POST" : "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );
      const body = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(body?.error ?? "Product offering could not be saved.");
        return;
      }
      setEditing(null);
      router.refresh();
    });
  }

  function remove(row: SupplierProductRow) {
    if (!confirm(`Remove ${row.productName} from your supplier profile?`)) return;
    startTransition(async () => {
      const response = await fetch(`/api/supplier/products/${row.id}`, { method: "DELETE" });
      const body = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(body?.error ?? "Product offering could not be removed.");
        return;
      }
      router.refresh();
    });
  }

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="text-sm text-muted-foreground">{rows.length} linked product categories</div>
        <Button onClick={openNew} disabled={!availableProducts.length}>
          <Plus size={15} /> Add product category
        </Button>
      </div>

      {error && !editing ? <div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800">{error}</div> : null}

      {rows.length ? (
        <div className="space-y-3">
          {rows.map((row) => (
            <Card key={row.id}>
              <CardContent className="flex flex-col gap-4 p-4 lg:flex-row lg:items-center">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="font-semibold">{row.supplierProductName || row.productName}</h2>
                    <Badge variant="secondary">{row.relationshipType}</Badge>
                    {row.isPrimary ? <Badge>Primary</Badge> : null}
                    {row.isVerified ? <Badge variant="signal">GetFRP reviewed</Badge> : <Badge variant="outline">Review pending</Badge>}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {row.productName} · {row.supplierSku || "No SKU"} · MOQ {row.moq ?? "—"} {row.moqUnit} · lead time {row.leadTimeDays ?? "—"} days
                  </div>
                </div>
                <div className="flex shrink-0 gap-2">
                  <Link href={`/products/${row.productSlug}` as never} target="_blank" className="inline-flex h-9 items-center gap-1.5 rounded-md border px-3 text-sm hover:bg-muted">
                    View <ExternalLink size={13} />
                  </Link>
                  <Button variant="outline" onClick={() => openEdit(row)}><Pencil size={14} /> Edit</Button>
                  <Button variant="outline" onClick={() => remove(row)} disabled={pending}><Trash2 size={14} /></Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card><CardContent className="py-12 text-center text-sm text-muted-foreground">No product categories linked yet.</CardContent></Card>
      )}

      <Dialog open={editing !== null} onOpenChange={(open) => !open && !pending && setEditing(null)}>
        <DialogContent className="max-h-[94vh] max-w-3xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editing === "new" ? "Add product offering" : "Edit product offering"}</DialogTitle>
            <DialogDescription>
              Describe your company-specific commercial offering. The platform product definition remains controlled by GetFRP.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={submit} className="space-y-5">
            {editing === "new" ? (
              <label className="block text-sm font-medium">
                Catalog product
                <select value={form.productId} onChange={(event) => patch("productId", event.target.value)} required className="mt-1.5 w-full rounded-md border bg-background px-3 py-2 text-sm">
                  {availableProducts.map((product) => <option key={product.id} value={product.id}>{product.nameEn} · {product.category}</option>)}
                </select>
              </label>
            ) : null}
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium">
                Relationship
                <select value={form.relationshipType} onChange={(event) => patch("relationshipType", event.target.value as FormState["relationshipType"])} className="mt-1.5 w-full rounded-md border bg-background px-3 py-2 text-sm">
                  <option value="manufacturer">Manufacturer</option>
                  <option value="supplier">Supplier</option>
                  <option value="distributor">Distributor</option>
                  <option value="agent">Agent</option>
                </select>
              </label>
              <Field label="Your product name" value={form.supplierProductName} onChange={(value) => patch("supplierProductName", value)} />
              <Field label="SKU / model" value={form.supplierSku} onChange={(value) => patch("supplierSku", value)} />
              <div className="grid grid-cols-2 gap-3">
                <Field label="MOQ" value={form.moq} onChange={(value) => patch("moq", value)} type="number" />
                <Field label="MOQ unit" value={form.moqUnit} onChange={(value) => patch("moqUnit", value)} placeholder="kg, m, pcs" />
              </div>
              <Field label="Lead time (days)" value={form.leadTimeDays} onChange={(value) => patch("leadTimeDays", value)} type="number" />
              <div className="flex flex-wrap items-end gap-5 pb-2 text-sm font-medium">
                <Check label="Primary offering" checked={form.isPrimary} onChange={(value) => patch("isPrimary", value)} />
                <Check label="Customization available" checked={form.customAvailable} onChange={(value) => patch("customAvailable", value)} />
              </div>
            </div>
            <label className="block text-sm font-medium">
              Specification overrides — one per line: field | your value
              <Textarea className="mt-1.5 font-mono text-xs" rows={5} value={form.specificationText} onChange={(event) => patch("specificationText", event.target.value)} />
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Evidence type" value={form.evidenceSourceType} onChange={(value) => patch("evidenceSourceType", value)} placeholder="datasheet, test report, catalog" />
              <Field label="Evidence URL (HTTPS)" value={form.evidenceSourceUrl} onChange={(value) => patch("evidenceSourceUrl", value)} type="url" />
            </div>
            <label className="block text-sm font-medium">
              Evidence note
              <Textarea className="mt-1.5" rows={3} value={form.evidenceNote} onChange={(event) => patch("evidenceNote", event.target.value)} />
            </label>
            {error ? <div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800">{error}</div> : null}
            <div className="flex justify-end gap-2">
              <Button type="button" variant="ghost" onClick={() => setEditing(null)} disabled={pending}>Cancel</Button>
              <Button type="submit" disabled={pending || !form.productId}>{pending ? "Saving…" : "Save offering"}</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
}) {
  return (
    <label className="block text-sm font-medium">
      {label}
      <Input className="mt-1.5" type={type} value={value} placeholder={placeholder} onChange={(event) => onChange(event.target.value)} />
    </label>
  );
}

function Check({ label, checked, onChange }: { label: string; checked: boolean; onChange: (value: boolean) => void }) {
  return <label className="flex items-center gap-2"><input type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} className="h-4 w-4 rounded border" />{label}</label>;
}
