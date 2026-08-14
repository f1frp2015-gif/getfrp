"use client";

import { useState, useTransition } from "react";
import { ExternalLink, ImagePlus, Plus, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "@/i18n/navigation";

export type UGCProductRow = {
  id: string;
  slug: string;
  name: string;
  categoryId: string;
  categorySlug: string;
  categoryName: string;
  description: string;
  images: string[];
  material: string;
  processes: string[];
  applications: string[];
  standards: string[];
  parameters: Record<string, string>;
  certifications: string[];
  moq: number | null;
  moqUnit: string;
  exportMarkets: string[];
  videoUrl: string;
  priceRange: string;
  status: string;
  rejectionReason: string;
  publicHref: string;
};

type FormState = {
  categoryId: string;
  name: string;
  description: string;
  images: string[];
  material: string;
  processes: string;
  applications: string;
  standards: string;
  parameters: string;
  certifications: string;
  moq: string;
  moqUnit: string;
  exportMarkets: string;
  videoUrl: string;
  priceRange: string;
};

const empty = (categoryId = ""): FormState => ({
  categoryId,
  name: "",
  description: "",
  images: [],
  material: "",
  processes: "",
  applications: "",
  standards: "",
  parameters: "",
  certifications: "",
  moq: "",
  moqUnit: "pcs",
  exportMarkets: "",
  videoUrl: "",
  priceRange: "",
});

function lines(value: string) {
  return value.split("\n").map((item) => item.trim()).filter(Boolean);
}

function parameterObject(value: string) {
  return Object.fromEntries(
    lines(value).map((line) => {
      const [key = "", ...rest] = line.split("|");
      return [key.trim(), rest.join("|").trim()];
    }).filter(([key, value]) => Boolean(key && value)),
  );
}

function parameterText(value: Record<string, string>) {
  return Object.entries(value).map(([key, item]) => `${key} | ${item}`).join("\n");
}

export function SupplierProductPagesManager({
  rows,
  catalog,
}: {
  rows: UGCProductRow[];
  catalog: Array<{ id: string; name: string }>;
}) {
  const router = useRouter();
  const [editing, setEditing] = useState<UGCProductRow | "new" | null>(null);
  const [form, setForm] = useState<FormState>(empty(catalog[0]?.id));
  const [error, setError] = useState("");
  const [pending, startTransition] = useTransition();
  const [uploading, setUploading] = useState(false);

  function edit(row: UGCProductRow) {
    setEditing(row);
    setForm({
      categoryId: row.categoryId,
      name: row.name,
      description: row.description,
      images: row.images,
      material: row.material,
      processes: row.processes.join("\n"),
      applications: row.applications.join("\n"),
      standards: row.standards.join("\n"),
      parameters: parameterText(row.parameters),
      certifications: row.certifications.join("\n"),
      moq: row.moq == null ? "" : String(row.moq),
      moqUnit: row.moqUnit,
      exportMarkets: row.exportMarkets.join("\n"),
      videoUrl: row.videoUrl,
      priceRange: row.priceRange,
    });
    setError("");
  }

  function patch<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function upload(files: FileList | null) {
    if (!files?.length) return;
    setUploading(true);
    setError("");
    try {
      const uploaded: string[] = [];
      for (const file of Array.from(files)) {
        const sign = await fetch("/api/uploads/supplier-product", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fileName: file.name, contentType: file.type, size: file.size }),
        });
        const body = await sign.json();
        if (!sign.ok) throw new Error(body?.error ?? "Image upload could not start.");
        const put = await fetch(body.uploadUrl, {
          method: "PUT",
          headers: { "Content-Type": file.type },
          body: file,
        });
        if (!put.ok) throw new Error("Image upload failed.");
        uploaded.push(body.getUrl);
      }
      patch("images", [...form.images, ...uploaded].slice(0, 12));
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Image upload failed.");
    } finally {
      setUploading(false);
    }
  }

  function save(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!editing) return;
    setError("");
    startTransition(async () => {
      const payload = {
        categoryId: form.categoryId,
        name: form.name,
        description: form.description,
        images: form.images,
        material: form.material,
        manufacturingProcesses: lines(form.processes),
        applications: lines(form.applications),
        standards: lines(form.standards),
        parameters: parameterObject(form.parameters),
        certifications: lines(form.certifications),
        moq: form.moq ? Number(form.moq) : null,
        moqUnit: form.moqUnit,
        exportMarkets: lines(form.exportMarkets),
        videoUrl: form.videoUrl,
        priceRange: form.priceRange,
      };
      const response = await fetch(
        editing === "new" ? "/api/supplier/product-pages" : `/api/supplier/product-pages/${editing.id}`,
        {
          method: editing === "new" ? "POST" : "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );
      const body = await response.json().catch(() => ({}));
      if (!response.ok) return setError(body?.error ?? "Product could not be submitted.");
      setEditing(null);
      setForm(empty(catalog[0]?.id));
      router.refresh();
    });
  }

  function remove(row: UGCProductRow) {
    if (!confirm(`Delete ${row.name}?`)) return;
    startTransition(async () => {
      const response = await fetch(`/api/supplier/product-pages/${row.id}`, { method: "DELETE" });
      if (!response.ok) setError("Product could not be deleted.");
      else router.refresh();
    });
  }

  return (
    <section className="space-y-4 rounded-xl border border-border/70 p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold">Indexable supplier product pages</h2>
          <p className="mt-1 max-w-3xl text-sm text-muted-foreground">
            Upload a real product with an image and complete specifications. New or edited products return to review; only approved products are public and indexable.
          </p>
        </div>
        <Button onClick={() => { setEditing("new"); setForm(empty(catalog[0]?.id)); setError(""); }}>
          <Plus size={15} /> Upload product
        </Button>
      </div>

      {rows.length ? rows.map((row) => (
        <Card key={row.id}>
          <CardContent className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-semibold">{row.name}</h3>
                <Badge variant={row.status === "approved" ? "signal" : row.status === "rejected" ? "destructive" : "outline"}>{row.status}</Badge>
                <Badge variant="secondary">{row.categoryName}</Badge>
              </div>
              {row.rejectionReason ? <p className="mt-2 text-xs text-red-700">Review note: {row.rejectionReason}</p> : null}
            </div>
            <div className="flex gap-2">
              {row.status === "approved" ? <Link href={row.publicHref as never} target="_blank" className="inline-flex h-9 items-center gap-1 rounded-md border px-3 text-sm">View <ExternalLink size={13} /></Link> : null}
              <Button variant="outline" onClick={() => edit(row)}>Edit</Button>
              <Button variant="outline" onClick={() => remove(row)} disabled={pending}><Trash2 size={14} /></Button>
            </div>
          </CardContent>
        </Card>
      )) : <p className="rounded-lg bg-muted/30 p-6 text-center text-sm text-muted-foreground">No supplier-owned products yet.</p>}

      {editing ? (
        <form onSubmit={save} className="space-y-4 rounded-xl border bg-muted/15 p-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium">Product category<select className="mt-1.5 w-full rounded-md border bg-background px-3 py-2" value={form.categoryId} onChange={(event) => patch("categoryId", event.target.value)} required>{catalog.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}</select></label>
            <Field label="Product name" value={form.name} onChange={(value) => patch("name", value)} placeholder="FRP Pultruded Grating for Wastewater Treatment" required />
            <Field label="Material" value={form.material} onChange={(value) => patch("material", value)} placeholder="E-glass / vinyl ester" required />
            <Field label="MOQ" value={form.moq} onChange={(value) => patch("moq", value)} type="number" />
            <Field label="MOQ unit" value={form.moqUnit} onChange={(value) => patch("moqUnit", value)} />
            <Field label="Price range (optional)" value={form.priceRange} onChange={(value) => patch("priceRange", value)} />
          </div>
          <label className="block text-sm font-medium">Product description (minimum 100 characters)<Textarea className="mt-1.5" rows={6} value={form.description} onChange={(event) => patch("description", event.target.value)} required minLength={100} /></label>
          <label className="block rounded-lg border border-dashed p-4 text-sm font-medium"><span className="flex items-center gap-2"><ImagePlus size={16} /> Product images (at least one)</span><Input className="mt-2" type="file" accept="image/jpeg,image/png,image/webp" multiple onChange={(event) => upload(event.target.files)} disabled={uploading} /><span className="mt-2 block text-xs text-muted-foreground">{uploading ? "Uploading…" : `${form.images.length} image(s) uploaded`}</span></label>
          <div className="grid gap-4 sm:grid-cols-2">
            <Lines label="Manufacturing processes (one per line)" value={form.processes} onChange={(value) => patch("processes", value)} required />
            <Lines label="Applications (one per line)" value={form.applications} onChange={(value) => patch("applications", value)} />
            <Lines label="Standards (one per line)" value={form.standards} onChange={(value) => patch("standards", value)} />
            <Lines label="Export markets (one per line)" value={form.exportMarkets} onChange={(value) => patch("exportMarkets", value)} required />
            <Lines label="Certifications (one per line)" value={form.certifications} onChange={(value) => patch("certifications", value)} />
            <Lines label="Specifications: field | value" value={form.parameters} onChange={(value) => patch("parameters", value)} />
          </div>
          <Field label="Video URL (optional)" value={form.videoUrl} onChange={(value) => patch("videoUrl", value)} type="url" />
          {error ? <p className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800">{error}</p> : null}
          <div className="flex justify-end gap-2"><Button type="button" variant="ghost" onClick={() => setEditing(null)}>Cancel</Button><Button type="submit" disabled={pending || uploading || form.images.length === 0}>{pending ? "Submitting…" : "Submit for review"}</Button></div>
        </form>
      ) : null}
    </section>
  );
}

function Field({ label, value, onChange, type = "text", placeholder, required }: { label: string; value: string; onChange: (value: string) => void; type?: React.HTMLInputTypeAttribute; placeholder?: string; required?: boolean }) {
  return <label className="block text-sm font-medium">{label}<Input className="mt-1.5" value={value} onChange={(event) => onChange(event.target.value)} type={type} placeholder={placeholder} required={required} /></label>;
}

function Lines({ label, value, onChange, required }: { label: string; value: string; onChange: (value: string) => void; required?: boolean }) {
  return <label className="block text-sm font-medium">{label}<Textarea className="mt-1.5" rows={4} value={value} onChange={(event) => onChange(event.target.value)} required={required} /></label>;
}
