"use client";

import { useState, useTransition } from "react";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export type ReviewProductRow = {
  id: string;
  name: string;
  supplierName: string;
  categoryName: string;
  material: string;
  imageCount: number;
  description: string;
  status: string;
  rejectionReason: string;
  isDemo: boolean;
};

export function UgcReviewManager({ rows }: { rows: ReviewProductRow[] }) {
  const router = useRouter();
  const [reason, setReason] = useState<Record<string, string>>({});
  const [error, setError] = useState("");
  const [pending, startTransition] = useTransition();

  function review(id: string, action: "approved" | "rejected") {
    setError("");
    startTransition(async () => {
      const response = await fetch(`/api/admin/product-pages/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, reason: reason[id] ?? "" }),
      });
      const body = await response.json().catch(() => ({}));
      if (!response.ok) setError(body?.error ?? "Review could not be saved.");
      else router.refresh();
    });
  }

  function remove(id: string) {
    if (!confirm("Delete this supplier product submission?")) return;
    startTransition(async () => {
      const response = await fetch(`/api/admin/product-pages/${id}`, { method: "DELETE" });
      if (!response.ok) setError("Product could not be deleted.");
      else router.refresh();
    });
  }

  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold">Supplier product review queue</h2>
        <p className="mt-1 text-sm text-muted-foreground">Approval makes a supplier product page indexable and eligible for category aggregation. Rejection keeps it private.</p>
      </div>
      {error ? <p className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800">{error}</p> : null}
      {rows.length ? rows.map((row) => (
        <Card key={row.id}>
          <CardContent className="space-y-4 p-4">
            <div className="flex flex-wrap items-center gap-2"><h3 className="font-semibold">{row.name}</h3><Badge variant={row.status === "approved" ? "signal" : row.status === "rejected" ? "destructive" : "outline"}>{row.status}</Badge><Badge variant="secondary">{row.categoryName}</Badge>{row.isDemo ? <Badge variant="destructive">DEMO · NEVER PUBLISH</Badge> : null}</div>
            <p className="text-xs text-muted-foreground">{row.supplierName} · {row.material} · {row.imageCount} image(s)</p>
            <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">{row.description}</p>
            {row.rejectionReason ? <p className="text-xs text-red-700">Previous reason: {row.rejectionReason}</p> : null}
            <Textarea value={reason[row.id] ?? ""} onChange={(event) => setReason((current) => ({ ...current, [row.id]: event.target.value }))} placeholder="Review note; required for rejection" rows={2} />
            <div className="flex justify-end gap-2"><Button variant="outline" onClick={() => remove(row.id)} disabled={pending}><Trash2 size={14} /> Delete</Button><Button variant="outline" onClick={() => review(row.id, "rejected")} disabled={pending}>Reject</Button><Button onClick={() => review(row.id, "approved")} disabled={pending || row.isDemo}>Approve</Button></div>
          </CardContent>
        </Card>
      )) : <p className="rounded-lg bg-muted/30 p-6 text-center text-sm text-muted-foreground">No supplier product submissions.</p>}
    </section>
  );
}
