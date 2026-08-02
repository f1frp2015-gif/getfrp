"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth/use-session";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function SupplierClaimButton({
  supplierId,
  supplierName,
  supplierPath = "/dashboard/claims",
}: {
  supplierId: string;
  supplierName: string;
  supplierPath?: string;
}) {
  const { isLoaded, user } = useSession();
  const isSignedIn = !!user;
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (!isLoaded) {
    return (
      <Button variant="outline" size="sm" disabled>
        Claim your company
      </Button>
    );
  }

  if (!isSignedIn) {
    return (
      <Link
        href={`/sign-in?redirect_url=${encodeURIComponent(supplierPath)}`}
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        Sign in to claim
      </Link>
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setMessage(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      contactName: String(data.get("contactName") || ""),
      contactTitle: String(data.get("contactTitle") || ""),
      contactPhone: String(data.get("contactPhone") || ""),
      contactEmail: String(data.get("contactEmail") || ""),
      businessLicenseUrl: String(data.get("businessLicenseUrl") || ""),
      note: String(data.get("note") || ""),
    };

    const res = await fetch(`/api/suppliers/${supplierId}/claim`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setSubmitting(false);
    const body = await res.json().catch(() => ({}));
    if (!res.ok) {
      setError(body?.error ?? "提交失败，请稍后重试");
      return;
    }
    setMessage(body?.data?.message ?? "申请已提交");
    form.reset();
    setTimeout(() => {
      setOpen(false);
      router.refresh();
    }, 1500);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className={buttonVariants({ variant: "outline", size: "sm" })}>
        Claim your company
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Claim “{supplierName}”</DialogTitle>
          <DialogDescription>
            After approval, you can update your company profile, upload product documents and manage buyer inquiries. We will verify the request by email or phone.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-medium">Contact name *</label>
              <Input name="contactName" required placeholder="Your name" />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium">Title</label>
              <Input name="contactTitle" placeholder="Sales director" />
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-medium">Phone *</label>
              <Input name="contactPhone" required placeholder="+1 555 123 4567" />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium">Company email *</label>
              <Input name="contactEmail" required type="email" placeholder="sales@company.com" />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium">Business license URL (optional)</label>
            <Input name="businessLicenseUrl" type="url" placeholder="https://..." />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium">Note</label>
            <Textarea name="note" rows={3} placeholder="Tell us how you are connected to the company." />
          </div>

          {error && (
            <div className="rounded-md border border-red-200 bg-red-50 p-2 text-sm text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300">
              {error}
            </div>
          )}
          {message && (
            <div className="rounded-md border border-green-200 bg-green-50 p-2 text-sm text-green-700 dark:border-green-900 dark:bg-green-950 dark:text-green-300">
              {message}
            </div>
          )}

          <div className="flex items-center justify-end gap-2 pt-2">
            <Button type="button" variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={submitting}>
              {submitting ? "Submitting…" : "Submit claim"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
