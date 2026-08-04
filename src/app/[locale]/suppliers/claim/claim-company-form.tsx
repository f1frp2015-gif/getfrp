"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ClaimCompanyForm({
  supplierId,
  supplierName,
  defaults,
}: {
  supplierId: string;
  supplierName: string;
  defaults: {
    contactName: string;
    contactEmail: string;
    contactPhone: string;
  };
}) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [pending, startTransition] = useTransition();

  function submit(formData: FormData) {
    setError(null);
    startTransition(async () => {
      const payload = {
        contactName: String(formData.get("contactName") ?? "").trim(),
        contactTitle: String(formData.get("contactTitle") ?? "").trim(),
        contactPhone: String(formData.get("contactPhone") ?? "").trim(),
        contactEmail: String(formData.get("contactEmail") ?? "").trim(),
        note: String(formData.get("note") ?? "").trim(),
      };

      const response = await fetch(`/api/suppliers/${supplierId}/claim`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(body?.error ?? "The claim could not be submitted. Please try again.");
        return;
      }
      setSubmitted(true);
      router.refresh();
    });
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-950">
        Claim submitted. Upload the business license and supporting evidence below while GetFRP reviews your request.
      </div>
    );
  }

  return (
    <form action={submit} className="space-y-4 rounded-xl border p-5">
      <div>
        <h2 className="font-semibold">2. Confirm your relationship to {supplierName}</h2>
        <p className="mt-1 text-sm leading-6 text-muted-foreground">
          Use an official company email where possible. GetFRP may confirm the request by email or phone.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="claim-contact-name" className="mb-1.5 block text-sm font-medium">
            Contact name
          </label>
          <Input
            id="claim-contact-name"
            name="contactName"
            defaultValue={defaults.contactName}
            autoComplete="name"
            required
          />
        </div>
        <div>
          <label htmlFor="claim-contact-title" className="mb-1.5 block text-sm font-medium">
            Job title
          </label>
          <Input id="claim-contact-title" name="contactTitle" placeholder="Sales director" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="claim-contact-email" className="mb-1.5 block text-sm font-medium">
            Company email
          </label>
          <Input
            id="claim-contact-email"
            name="contactEmail"
            type="email"
            defaultValue={defaults.contactEmail}
            autoComplete="email"
            required
          />
        </div>
        <div>
          <label htmlFor="claim-contact-phone" className="mb-1.5 block text-sm font-medium">
            Phone
          </label>
          <Input
            id="claim-contact-phone"
            name="contactPhone"
            type="tel"
            defaultValue={defaults.contactPhone}
            autoComplete="tel"
            placeholder="+86 138 0000 0000"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="claim-note" className="mb-1.5 block text-sm font-medium">
          Relationship and verification note
        </label>
        <Textarea
          id="claim-note"
          name="note"
          rows={3}
          placeholder="Explain your role and which official domain, phone number or document can be used to verify it."
        />
      </div>

      {error && (
        <div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800" role="alert">
          {error}
        </div>
      )}

      <div className="flex justify-end">
        <Button type="submit" disabled={pending}>
          {pending ? "Submitting claim…" : "Submit company claim"}
        </Button>
      </div>
    </form>
  );
}
