import type { Metadata } from "next";
import { desc, eq } from "drizzle-orm";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Circle,
  FileCheck2,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";
import { redirect } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { getCurrentUser } from "@/lib/auth/current-user";
import { db } from "@/lib/db";
import {
  enterprises,
  supplierClaims,
  supplierDocuments,
  supplierListings,
  supplierProducts,
} from "@/lib/db/schema";
import { supplierClaimPath } from "@/lib/supplier-claim-links";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Supplier Workspace | GetFRP",
  description: "Manage company claims, verification evidence and your GetFRP supplier profile.",
};

function statusVariant(status: string) {
  if (status === "approved" || status === "verified") return "default" as const;
  if (status === "rejected") return "destructive" as const;
  return "outline" as const;
}

export default async function SupplierWorkspacePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const me = await getCurrentUser();
  if (!me) redirect("/sign-in?intent=supplier&redirect_url=/dashboard/supplier");

  const [[enterprise], [linkedSupplier], [latestClaim], documents] = await Promise.all([
    me.enterpriseId
      ? db.select().from(enterprises).where(eq(enterprises.id, me.enterpriseId)).limit(1)
      : Promise.resolve([]),
    me.enterpriseId
      ? db
          .select()
          .from(supplierListings)
          .where(eq(supplierListings.enterpriseId, me.enterpriseId))
          .limit(1)
      : Promise.resolve([]),
    db
      .select({ claim: supplierClaims, supplier: supplierListings })
      .from(supplierClaims)
      .leftJoin(supplierListings, eq(supplierClaims.supplierListingId, supplierListings.id))
      .where(eq(supplierClaims.userId, me.id))
      .orderBy(desc(supplierClaims.createdAt))
      .limit(1),
    db
      .select()
      .from(supplierDocuments)
      .where(eq(supplierDocuments.uploadedByUserId, me.id))
      .orderBy(desc(supplierDocuments.createdAt)),
  ]);

  const approvedDocs = documents.filter((document) => document.status === "approved");
  const productLinks = linkedSupplier
    ? await db
        .select({ id: supplierProducts.id })
        .from(supplierProducts)
        .where(eq(supplierProducts.supplierListingId, linkedSupplier.id))
    : [];
  const licenseDocs = documents.filter((document) => document.kind === "license");
  const hasLicense = Boolean(enterprise?.businessLicense || licenseDocs.length);
  const activeSupplier = linkedSupplier ?? latestClaim?.supplier ?? null;
  const supplierSlug = activeSupplier?.slug ?? activeSupplier?.id;
  const claimPath = supplierClaimPath(supplierSlug);
  const companyComplete = Boolean(
    enterprise?.name &&
      enterprise.contactName &&
      enterprise.contactPhone &&
      enterprise.contactEmail &&
      enterprise.description &&
      enterprise.products?.length,
  );
  const publicReady = Boolean(linkedSupplier?.profilePublished);
  const completed = [
    true,
    latestClaim?.claim.status === "approved" || enterprise?.status === "verified",
    companyComplete,
    productLinks.length > 0,
    hasLicense,
    approvedDocs.length > 0,
    publicReady,
  ].filter(Boolean).length;

  const steps = [
    {
      title: "Supplier account",
      description: me.email ?? me.phone ?? "Signed-in GetFRP account",
      done: true,
      href: "/dashboard/profile" as const,
      action: "Manage account",
    },
    {
      title: "Company relationship",
      description: latestClaim
        ? `Latest claim: ${latestClaim.claim.status.replace("_", " ")}`
        : enterprise
          ? `Company registration: ${enterprise.status}`
          : "Claim an existing listing or register a new company.",
      done: latestClaim?.claim.status === "approved" || enterprise?.status === "verified",
      href: latestClaim ? "/dashboard/claims" : claimPath,
      action: latestClaim ? "View review status" : "Find or register company",
    },
    {
      title: "Company profile",
      description: companyComplete
        ? "Legal, contact, product and capability information is complete."
        : "Add legal company, contact, product and manufacturing information.",
      done: companyComplete,
      href: "/dashboard/enterprise" as const,
      action: companyComplete ? "Update company" : "Complete company profile",
    },
    {
      title: "Business license",
      description: hasLicense
        ? `${Math.max(licenseDocs.length, 1)} license document${Math.max(licenseDocs.length, 1) === 1 ? "" : "s"} uploaded.`
        : "Upload a legible business license or company registration document.",
      done: hasLicense,
      href: "/dashboard/qualifications" as const,
      action: "Manage documents",
    },
    {
      title: "Product catalog",
      description: productLinks.length
        ? `${productLinks.length} canonical product categor${productLinks.length === 1 ? "y" : "ies"} linked to your supplier profile.`
        : "Add product categories, supplier models, MOQs, lead times and evidence.",
      done: productLinks.length > 0,
      href: "/dashboard/supplier/products" as const,
      action: productLinks.length ? "Manage products" : "Add product offerings",
    },
    {
      title: "Capability evidence",
      description: approvedDocs.length
        ? `${approvedDocs.length} document${approvedDocs.length === 1 ? "" : "s"} approved by GetFRP.`
        : "Upload certificates, test reports and product evidence for review.",
      done: approvedDocs.length > 0,
      href: "/dashboard/qualifications" as const,
      action: "Upload evidence",
    },
    {
      title: "Public supplier profile",
      description: publicReady
        ? "Your reviewed company profile is available to overseas buyers."
        : "GetFRP publishes the profile after identity and company data review.",
      done: publicReady,
      href: supplierSlug
        ? (`/suppliers/${supplierSlug}` as "/suppliers")
        : ("/suppliers" as const),
      action: publicReady ? "View public profile" : "Browse supplier directory",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
            Supplier onboarding
          </div>
          <h1 className="mt-2 text-2xl font-bold">Supplier workspace</h1>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-muted-foreground">
            Claim or register your company, submit verification evidence and maintain the profile buyers use for comparison and RFQs.
          </p>
        </div>
        <Badge variant="outline" className="px-3 py-1.5">
          {completed} of {steps.length} steps ready
        </Badge>
      </div>

      {latestClaim?.claim.status === "rejected" && latestClaim.claim.reviewNote ? (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-900">
          <div className="font-semibold">Changes requested by GetFRP</div>
          <p className="mt-1">{latestClaim.claim.reviewNote}</p>
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <Building2 size={17} className="text-primary" />
            <div className="mt-3 text-xs text-muted-foreground">Company</div>
            <div className="mt-1 truncate font-semibold">
              {activeSupplier?.nameEn ?? activeSupplier?.name ?? enterprise?.name ?? "Not linked"}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <ShieldCheck size={17} className="text-primary" />
            <div className="mt-3 text-xs text-muted-foreground">Relationship review</div>
            <div className="mt-1 font-semibold capitalize">
              {latestClaim?.claim.status ?? enterprise?.status ?? "Not submitted"}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <FileCheck2 size={17} className="text-primary" />
            <div className="mt-3 text-xs text-muted-foreground">Evidence</div>
            <div className="mt-1 font-semibold">{documents.length} uploaded · {approvedDocs.length} approved</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <SearchCheck size={17} className="text-primary" />
            <div className="mt-3 text-xs text-muted-foreground">Buyer visibility</div>
            <div className="mt-1 font-semibold">{publicReady ? "Published" : "Pending review"}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Verification and profile checklist</CardTitle>
        </CardHeader>
        <CardContent className="divide-y p-0">
          {steps.map((step) => (
            <div key={step.title} className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center">
              {step.done ? (
                <CheckCircle2 size={20} className="shrink-0 text-emerald-600" />
              ) : (
                <Circle size={20} className="shrink-0 text-muted-foreground" />
              )}
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="font-semibold">{step.title}</h2>
                  <Badge variant={step.done ? "default" : "outline"}>
                    {step.done ? "Ready" : "Action needed"}
                  </Badge>
                </div>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{step.description}</p>
              </div>
              <Link
                href={step.href as never}
                prefetch={step.href === claimPath ? false : undefined}
                className={buttonVariants({ variant: "outline", size: "sm", className: "shrink-0" })}
              >
                {step.action} <ArrowRight size={13} />
              </Link>
            </div>
          ))}
        </CardContent>
      </Card>

      {latestClaim ? (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between gap-3 text-base">
              Latest claim
              <Badge variant={statusVariant(latestClaim.claim.status)} className="capitalize">
                {latestClaim.claim.status}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-2 text-sm sm:grid-cols-2">
            <div><span className="text-muted-foreground">Company: </span>{latestClaim.supplier?.nameEn ?? latestClaim.supplier?.name}</div>
            <div><span className="text-muted-foreground">Submitted: </span>{latestClaim.claim.createdAt.toISOString().slice(0, 10)}</div>
            <div><span className="text-muted-foreground">Contact: </span>{latestClaim.claim.contactName}</div>
            <div><span className="text-muted-foreground">Email: </span>{latestClaim.claim.contactEmail}</div>
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}
