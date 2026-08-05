import type { Metadata } from "next";
import { and, desc, eq, ilike, isNull, or } from "drizzle-orm";
import { ArrowRight, Building2, CheckCircle2, Search, ShieldCheck } from "lucide-react";
import { setRequestLocale } from "next-intl/server";

import { QualificationsUploader } from "@/app/[locale]/dashboard/qualifications/qualifications-uploader";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "@/i18n/navigation";
import { getCurrentUser } from "@/lib/auth/current-user";
import { db } from "@/lib/db";
import { supplierClaims, supplierListings } from "@/lib/db/schema";
import { alternates } from "@/lib/seo";

import { ClaimCompanyForm } from "./claim-company-form";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Claim Your FRP Company Profile",
  description:
    "Claim an existing China FRP supplier profile, submit company information and upload verification documents for GetFRP review.",
  alternates: alternates("/suppliers/claim"),
};

function firstParam(value: string | string[] | undefined): string {
  return Array.isArray(value) ? value[0] ?? "" : value ?? "";
}

function claimStatusLabel(status: string): string {
  if (status === "approved") return "Approved";
  if (status === "rejected") return "Changes requested";
  if (status === "withdrawn") return "Withdrawn";
  return "Under review";
}

export default async function ClaimSupplierPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const [{ locale }, sp, me] = await Promise.all([
    params,
    searchParams,
    getCurrentUser(),
  ]);
  setRequestLocale(locale);

  const query = firstParam(sp.q).trim().slice(0, 100);
  const supplierKey = firstParam(sp.supplier).trim().slice(0, 180);

  const [selectedSupplier] = supplierKey
    ? await db
        .select()
        .from(supplierListings)
        .where(
          or(
            eq(supplierListings.id, supplierKey),
            eq(supplierListings.slug, supplierKey),
          ),
        )
        .limit(1)
    : [];

  const searchResults = query
    ? await db
        .select({
          id: supplierListings.id,
          slug: supplierListings.slug,
          name: supplierListings.nameEn,
          location: supplierListings.locationEn,
          category: supplierListings.category,
          verified: supplierListings.verified,
        })
        .from(supplierListings)
        .where(
          and(
            isNull(supplierListings.enterpriseId),
            or(
              ilike(supplierListings.nameEn, `%${query}%`),
              ilike(supplierListings.locationEn, `%${query}%`),
              ilike(supplierListings.descriptionEn, `%${query}%`),
            ),
          ),
        )
        .orderBy(desc(supplierListings.verified), supplierListings.nameEn)
        .limit(12)
    : [];

  const [latestClaim] = me && selectedSupplier
    ? await db
        .select()
        .from(supplierClaims)
        .where(
          and(
            eq(supplierClaims.userId, me.id),
            eq(supplierClaims.supplierListingId, selectedSupplier.id),
          ),
        )
        .orderBy(desc(supplierClaims.createdAt))
        .limit(1)
    : [];

  const selectedSlug = selectedSupplier?.slug ?? selectedSupplier?.id ?? "";
  const claimPath = selectedSlug
    ? `/suppliers/claim?supplier=${encodeURIComponent(selectedSlug)}`
    : "/suppliers/claim";
  const canSubmitClaim =
    Boolean(me && selectedSupplier && !selectedSupplier.enterpriseId) &&
    (!latestClaim || latestClaim.status === "rejected" || latestClaim.status === "withdrawn");

  return (
    <main>
      <section className="border-b border-border/80 bg-[#f4f6f9]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:py-16">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#19c3c8]">
              For FRP suppliers
            </div>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Claim your company and build a verified supplier profile
            </h1>
            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-muted-foreground">
              Connect your account to an existing GetFRP company record, submit
              official company information and upload business, product,
              certification and test evidence for review.
            </p>
          </div>

          <Card className="border-[#7be4e1] bg-white shadow-none">
            <CardHeader>
              <CardTitle className="text-base">What happens after you claim</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              {[
                "GetFRP checks your relationship to the legal company.",
                "Approved administrators can maintain the public supplier profile.",
                "Uploaded documents enter a separate evidence review queue.",
                "Business identity, capabilities and certifications receive distinct statuses.",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#19c3c8]" />
                  <span>{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[360px_minmax(0,1fr)]">
          <aside className="h-fit rounded-xl border bg-muted/20 p-5 lg:sticky lg:top-20">
            <h2 className="font-semibold">1. Find your company</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Search the public directory by English company name, brand or location.
            </p>
            <form className="mt-5 space-y-3" action="/suppliers/claim">
              <div className="relative">
                <Search
                  size={16}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <Input
                  name="q"
                  defaultValue={query}
                  className="pl-9"
                  placeholder="Company name or location"
                />
              </div>
              <button className={buttonVariants({ className: "w-full" })} type="submit">
                Search company
              </button>
            </form>

            <div className="mt-6 border-t pt-5">
              <p className="text-sm font-medium">Not listed yet?</p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                Register a new company record for administrator review.
              </p>
              <Link
                href={
                  me
                    ? "/dashboard/enterprise"
                    : (`/sign-up?intent=supplier&redirect_url=${encodeURIComponent("/dashboard/enterprise")}` as never)
                }
                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
              >
                Create a company profile <ArrowRight size={13} />
              </Link>
            </div>
          </aside>

          <div className="min-w-0 space-y-6">
            {!selectedSupplier && query && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {searchResults.length} possible matches
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid gap-3 sm:grid-cols-2">
                  {searchResults.map((supplier) => (
                    <Link
                      key={supplier.id}
                      href={`/suppliers/claim?supplier=${encodeURIComponent(supplier.slug ?? supplier.id)}` as never}
                      className="rounded-lg border p-4 transition-colors hover:border-primary/50 hover:bg-muted/20"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="font-semibold">{supplier.name}</div>
                          <div className="mt-1 text-xs text-muted-foreground">
                            {supplier.location || "China"}
                          </div>
                        </div>
                        {supplier.verified && <Badge variant="signal">Identity checked</Badge>}
                      </div>
                    </Link>
                  ))}
                  {searchResults.length === 0 && (
                    <div className="col-span-full rounded-lg border border-dashed p-8 text-center text-sm text-muted-foreground">
                      No unclaimed company matched “{query}”. Try a shorter legal or brand name.
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {!selectedSupplier && !query && (
              <div className="rounded-xl border border-dashed p-12 text-center">
                <Building2 className="mx-auto text-muted-foreground" size={28} />
                <h2 className="mt-4 text-xl font-semibold">Start with your company record</h2>
                <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
                  Selecting the existing record prevents duplicate profiles and keeps buyer traffic,
                  product links and sourcing history attached to the same company.
                </p>
              </div>
            )}

            {selectedSupplier && (
              <Card>
                <CardHeader className="border-b">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        Selected company
                      </div>
                      <CardTitle className="mt-2 text-2xl">
                        {selectedSupplier.nameEn ?? selectedSupplier.name}
                      </CardTitle>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {selectedSupplier.locationEn ?? selectedSupplier.location ?? "China"}
                      </p>
                    </div>
                    <Link
                      href={`/suppliers/${selectedSlug}` as never}
                      className={buttonVariants({ variant: "outline", size: "sm" })}
                    >
                      View public profile
                    </Link>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  {selectedSupplier.enterpriseId ? (
                    <div className="rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
                      This company already has an approved administrator. Contact GetFRP if the
                      ownership or administrator needs to be changed.
                    </div>
                  ) : !me ? (
                    <div className="rounded-xl border bg-muted/20 p-6">
                      <div className="flex gap-3">
                        <ShieldCheck size={20} className="mt-0.5 shrink-0 text-primary" />
                        <div>
                          <h2 className="font-semibold">2. Create or sign in to your supplier account</h2>
                          <p className="mt-2 text-sm leading-6 text-muted-foreground">
                            Your account becomes the administrator after GetFRP approves the company claim.
                          </p>
                          <div className="mt-4 flex flex-wrap gap-3">
                            <Link
                              href={`/sign-up?intent=supplier&redirect_url=${encodeURIComponent(claimPath)}` as never}
                              className={buttonVariants()}
                            >
                              Create supplier account
                            </Link>
                            <Link
                              href={`/sign-in?intent=supplier&redirect_url=${encodeURIComponent(claimPath)}` as never}
                              className={buttonVariants({ variant: "outline" })}
                            >
                              Sign in
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      {latestClaim && latestClaim.status !== "rejected" && latestClaim.status !== "withdrawn" ? (
                        <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-950">
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <div>
                              <div className="font-semibold">Claim status: {claimStatusLabel(latestClaim.status)}</div>
                              <p className="mt-1 text-emerald-900/75">
                                Submitted {latestClaim.createdAt.toISOString().slice(0, 10)}. You can upload
                                supporting documents while the administrator reviews the request.
                              </p>
                            </div>
                            <Link href="/dashboard/supplier" className={buttonVariants({ size: "sm" })}>
                              Open supplier workspace
                            </Link>
                          </div>
                        </div>
                      ) : null}

                      {latestClaim?.status === "rejected" && latestClaim.reviewNote && (
                        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-900">
                          <div className="font-semibold">Administrator requested changes</div>
                          <p className="mt-1">{latestClaim.reviewNote}</p>
                        </div>
                      )}

                      {canSubmitClaim && (
                        <ClaimCompanyForm
                          supplierId={selectedSupplier.id}
                          supplierName={selectedSupplier.nameEn ?? selectedSupplier.name}
                          defaults={{
                            contactName: me.name ?? "",
                            contactEmail: me.email ?? "",
                            contactPhone: me.phone ?? "",
                          }}
                        />
                      )}

                      <div>
                        <div className="mb-3">
                          <h2 className="font-semibold">3. Upload verification documents</h2>
                          <p className="mt-1 text-sm leading-6 text-muted-foreground">
                            Start with the business license. Product brochures, test reports and certificates
                            can be uploaded now or from the supplier workspace. Each document is reviewed separately.
                          </p>
                        </div>
                        <QualificationsUploader supplierListingId={selectedSupplier.id} initialKind="license" />
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
