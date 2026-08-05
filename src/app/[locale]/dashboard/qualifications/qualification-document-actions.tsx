"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Pencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export type EditableQualificationDocument = {
  id: string;
  kind: "license" | "product" | "test" | "cert";
  status: string;
  fileName: string;
  issuer: string;
  certNo: string;
  validFrom: string;
  validTo: string;
};

export function QualificationDocumentActions({
  document,
}: {
  document: EditableQualificationDocument;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [fileName, setFileName] = useState(document.fileName);
  const [issuer, setIssuer] = useState(document.issuer);
  const [certNo, setCertNo] = useState(document.certNo);
  const [validFrom, setValidFrom] = useState(document.validFrom);
  const [validTo, setValidTo] = useState(document.validTo);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const extracting = document.status === "extracting";

  function edit() {
    setFileName(document.fileName);
    setIssuer(document.issuer);
    setCertNo(document.certNo);
    setValidFrom(document.validFrom);
    setValidTo(document.validTo);
    setError(null);
    setOpen(true);
  }

  function save(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    startTransition(async () => {
      const response = await fetch(`/api/qualifications/${document.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fileName, issuer, certNo, validFrom, validTo }),
      });
      const body = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(body?.error ?? "Document could not be updated.");
        return;
      }
      setOpen(false);
      router.refresh();
    });
  }

  function remove() {
    if (!confirm(`Delete ${document.fileName}? The uploaded file and its review record will be removed.`)) return;
    startTransition(async () => {
      const response = await fetch(`/api/qualifications/${document.id}`, {
        method: "DELETE",
      });
      const body = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(body?.error ?? "Document could not be deleted.");
        setOpen(true);
        return;
      }
      router.refresh();
    });
  }

  return (
    <>
      <div className="flex items-center gap-2">
        <Button type="button" size="sm" variant="outline" onClick={edit} disabled={pending || extracting}>
          <Pencil size={13} /> Edit details
        </Button>
        <Button type="button" size="sm" variant="outline" onClick={remove} disabled={pending || extracting}>
          <Trash2 size={13} /> Delete
        </Button>
      </div>

      <Dialog open={open} onOpenChange={(next) => !pending && setOpen(next)}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle>Edit uploaded document</DialogTitle>
            <DialogDescription>
              Editing reviewed metadata returns the document to pending review. The file itself can be replaced by deleting this upload and submitting a new one.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={save} className="space-y-4">
            <Field label="Display file name" value={fileName} onChange={setFileName} required />
            {document.kind === "cert" || document.kind === "test" ? (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Issuer" value={issuer} onChange={setIssuer} />
                  <Field label="Certificate / report number" value={certNo} onChange={setCertNo} />
                  <Field label="Valid from" value={validFrom} onChange={setValidFrom} type="date" />
                  <Field label="Valid to" value={validTo} onChange={setValidTo} type="date" />
                </div>
              </>
            ) : null}
            {error ? <div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800">{error}</div> : null}
            <div className="flex justify-end gap-2">
              <Button type="button" variant="ghost" onClick={() => setOpen(false)} disabled={pending}>Cancel</Button>
              <Button type="submit" disabled={pending}>{pending ? "Saving…" : "Save and resubmit"}</Button>
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
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: React.HTMLInputTypeAttribute;
  required?: boolean;
}) {
  return (
    <label className="block text-sm font-medium">
      {label}
      <Input className="mt-1.5" type={type} value={value} required={required} onChange={(event) => onChange(event.target.value)} />
    </label>
  );
}
