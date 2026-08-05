"use client";

import { useState, useTransition } from "react";
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
import type { ProductFaq, ProductSpecification } from "@/lib/db/schema";

export type AdminProductRow = {
  id: string;
  slug: string;
  name: string;
  nameEn: string;
  shortName: string;
  category: string;
  summary: string;
  description: string;
  overview: string[];
  materials: string[];
  manufacturingProcesses: string[];
  applications: string[];
  standards: string[];
  specifications: ProductSpecification[];
  buyingChecks: string[];
  faqs: ProductFaq[];
  searchTerms: string[];
  imageUrl: string;
  imageAlt: string;
  status: "draft" | "published";
  source: string;
  linkedSupplierCount: number;
};

type ListKey =
  | "overview"
  | "materials"
  | "manufacturingProcesses"
  | "applications"
  | "standards"
  | "buyingChecks"
  | "searchTerms";

type ProductForm = Omit<
  AdminProductRow,
  "id" | "source" | "linkedSupplierCount" | ListKey | "specifications" | "faqs"
> & Record<ListKey, string>;

const EMPTY_FORM: ProductForm = {
  slug: "",
  name: "",
  nameEn: "",
  shortName: "",
  category: "",
  summary: "",
  description: "",
  overview: "",
  materials: "",
  manufacturingProcesses: "",
  applications: "",
  standards: "",
  buyingChecks: "",
  searchTerms: "",
  imageUrl: "",
  imageAlt: "",
  status: "draft",
};

function list(value: string): string[] {
  return value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

function specificationLines(items: ProductSpecification[]): string {
  return items
    .map((item) => `${item.field} | ${item.typicalRange} | ${item.sourcingNote}`)
    .join("\n");
}

function parseSpecifications(value: string): ProductSpecification[] {
  return list(value).map((line) => {
    const [field = "", typicalRange = "", ...note] = line.split("|");
    return {
      field: field.trim(),
      typicalRange: typicalRange.trim(),
      sourcingNote: note.join("|").trim(),
    };
  });
}

function faqLines(items: ProductFaq[]): string {
  return items.map((item) => `${item.question} | ${item.answer}`).join("\n");
}

function parseFaqs(value: string): ProductFaq[] {
  return list(value).map((line) => {
    const [question = "", ...answer] = line.split("|");
    return { question: question.trim(), answer: answer.join("|").trim() };
  });
}

export function AdminProductsManager({ rows }: { rows: AdminProductRow[] }) {
  const router = useRouter();
  const [editing, setEditing] = useState<AdminProductRow | "new" | null>(null);
  const [form, setForm] = useState<ProductForm>(EMPTY_FORM);
  const [specText, setSpecText] = useState("");
  const [faqText, setFaqText] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function openNew() {
    setEditing("new");
    setForm(EMPTY_FORM);
    setSpecText("");
    setFaqText("");
    setError(null);
  }

  function openEdit(row: AdminProductRow) {
    setEditing(row);
    setForm({
      slug: row.slug,
      name: row.name,
      nameEn: row.nameEn,
      shortName: row.shortName,
      category: row.category,
      summary: row.summary,
      description: row.description,
      overview: row.overview.join("\n"),
      materials: row.materials.join("\n"),
      manufacturingProcesses: row.manufacturingProcesses.join("\n"),
      applications: row.applications.join("\n"),
      standards: row.standards.join("\n"),
      buyingChecks: row.buyingChecks.join("\n"),
      searchTerms: row.searchTerms.join("\n"),
      imageUrl: row.imageUrl,
      imageAlt: row.imageAlt,
      status: row.status,
    });
    setSpecText(specificationLines(row.specifications));
    setFaqText(faqLines(row.faqs));
    setError(null);
  }

  function close() {
    if (pending) return;
    setEditing(null);
    setError(null);
  }

  function patch<K extends keyof ProductForm>(key: K, value: ProductForm[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    startTransition(async () => {
      const payload = {
        ...form,
        overview: list(form.overview),
        materials: list(form.materials),
        manufacturingProcesses: list(form.manufacturingProcesses),
        applications: list(form.applications),
        standards: list(form.standards),
        buyingChecks: list(form.buyingChecks),
        searchTerms: list(form.searchTerms),
        specifications: parseSpecifications(specText),
        faqs: parseFaqs(faqText),
      };
      const isNew = editing === "new";
      const response = await fetch(
        isNew ? "/api/admin/products" : `/api/admin/products/${editing?.id}`,
        {
          method: isNew ? "POST" : "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );
      const body = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(body?.error ?? "Product could not be saved.");
        return;
      }
      setEditing(null);
      router.refresh();
    });
  }

  function remove(row: AdminProductRow) {
    if (row.linkedSupplierCount > 0) return;
    if (!confirm(`Delete ${row.nameEn}? This cannot be undone.`)) return;
    setError(null);
    startTransition(async () => {
      const response = await fetch(`/api/admin/products/${row.id}`, {
        method: "DELETE",
      });
      const body = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(body?.error ?? "Product could not be deleted.");
        return;
      }
      router.refresh();
    });
  }

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="text-sm text-muted-foreground">
          {rows.length} canonical products · {rows.filter((row) => row.status === "published").length} published
        </div>
        <Button onClick={openNew}>
          <Plus size={15} /> New product
        </Button>
      </div>

      {error && !editing ? (
        <div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800">
          {error}
        </div>
      ) : null}

      <div className="space-y-3">
        {rows.map((row) => (
          <Card key={row.id}>
            <CardContent className="flex flex-col gap-4 p-4 lg:flex-row lg:items-center">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="font-semibold">{row.nameEn}</h2>
                  <Badge variant={row.status === "published" ? "default" : "outline"}>
                    {row.status}
                  </Badge>
                  <Badge variant="secondary">{row.category}</Badge>
                </div>
                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{row.summary}</p>
                <div className="mt-2 text-xs text-muted-foreground">
                  /products/{row.slug} · {row.linkedSupplierCount} linked suppliers · {row.source}
                </div>
              </div>
              <div className="flex shrink-0 gap-2">
                {row.status === "published" ? (
                  <Link
                    href={`/products/${row.slug}` as never}
                    target="_blank"
                    className="inline-flex h-9 items-center gap-1.5 rounded-md border px-3 text-sm hover:bg-muted"
                  >
                    View <ExternalLink size={13} />
                  </Link>
                ) : null}
                <Button variant="outline" onClick={() => openEdit(row)}>
                  <Pencil size={14} /> Edit
                </Button>
                <Button
                  variant="outline"
                  disabled={pending || row.linkedSupplierCount > 0}
                  title={row.linkedSupplierCount > 0 ? "Remove supplier links before deleting." : "Delete product"}
                  onClick={() => remove(row)}
                >
                  <Trash2 size={14} />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={editing !== null} onOpenChange={(open) => !open && close()}>
        <DialogContent className="max-h-[94vh] max-w-5xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editing === "new" ? "Create catalog product" : "Edit catalog product"}</DialogTitle>
            <DialogDescription>
              This is the platform-owned product definition. Supplier-specific names, MOQs and lead times are maintained in supplier workspaces.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={submit} className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="English name" value={form.nameEn} onChange={(value) => patch("nameEn", value)} required />
              <Field label="Internal / Chinese name" value={form.name} onChange={(value) => patch("name", value)} required />
              <Field label="URL slug" value={form.slug} onChange={(value) => patch("slug", value.toLowerCase())} required />
              <Field label="Short name" value={form.shortName} onChange={(value) => patch("shortName", value)} />
              <Field label="Category" value={form.category} onChange={(value) => patch("category", value)} required />
              <label className="block text-sm font-medium">
                Publication status
                <select
                  value={form.status}
                  onChange={(event) => patch("status", event.target.value as ProductForm["status"])}
                  className="mt-1.5 w-full rounded-md border bg-background px-3 py-2 text-sm"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </label>
            </div>
            <TextField label="Buyer summary" value={form.summary} onChange={(value) => patch("summary", value)} rows={3} required />
            <TextField label="Long description" value={form.description} onChange={(value) => patch("description", value)} rows={5} />
            <div className="grid gap-4 sm:grid-cols-2">
              <ListField label="Overview points" value={form.overview} onChange={(value) => patch("overview", value)} />
              <ListField label="Materials" value={form.materials} onChange={(value) => patch("materials", value)} />
              <ListField label="Manufacturing processes" value={form.manufacturingProcesses} onChange={(value) => patch("manufacturingProcesses", value)} />
              <ListField label="Applications" value={form.applications} onChange={(value) => patch("applications", value)} />
              <ListField label="Standards" value={form.standards} onChange={(value) => patch("standards", value)} />
              <ListField label="Buying checks" value={form.buyingChecks} onChange={(value) => patch("buyingChecks", value)} />
              <ListField label="Search terms" value={form.searchTerms} onChange={(value) => patch("searchTerms", value)} />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <TextField
                label="Specifications — one per line: field | typical range | sourcing note"
                value={specText}
                onChange={setSpecText}
                rows={6}
              />
              <TextField
                label="FAQs — one per line: question | answer"
                value={faqText}
                onChange={setFaqText}
                rows={6}
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Local image path (for example /product-assets/item.webp)" value={form.imageUrl} onChange={(value) => patch("imageUrl", value)} />
              <Field label="Image alt text" value={form.imageAlt} onChange={(value) => patch("imageAlt", value)} />
            </div>
            {error ? (
              <div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800">{error}</div>
            ) : null}
            <div className="flex justify-end gap-2">
              <Button type="button" variant="ghost" onClick={close} disabled={pending}>Cancel</Button>
              <Button type="submit" disabled={pending}>{pending ? "Saving…" : "Save product"}</Button>
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
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}) {
  return (
    <label className="block text-sm font-medium">
      {label}
      <Input className="mt-1.5" value={value} onChange={(event) => onChange(event.target.value)} required={required} />
    </label>
  );
}

function TextField({
  label,
  value,
  onChange,
  rows,
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  rows: number;
  required?: boolean;
}) {
  return (
    <label className="block text-sm font-medium">
      {label}
      <Textarea className="mt-1.5" value={value} onChange={(event) => onChange(event.target.value)} rows={rows} required={required} />
    </label>
  );
}

function ListField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <TextField
      label={`${label} — one per line`}
      value={value}
      onChange={onChange}
      rows={4}
    />
  );
}
