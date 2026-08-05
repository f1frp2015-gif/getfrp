import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  FileCheck2,
  PackageSearch,
  ShieldCheck,
} from "lucide-react";
import { setRequestLocale } from "next-intl/server";

import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { alternates, og } from "@/lib/seo";

const title = "Supplier Resources — Build a Buyer-Ready FRP Profile | getfrp";
const description =
  "Resources for China FRP manufacturers to claim a company profile, publish product capabilities and prepare verification evidence for international buyers.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: alternates("/suppliers/resources"),
  openGraph: og("/suppliers/resources", { title, description }),
};

const steps = [
  {
    icon: Building2,
    title: "Claim the correct company record",
    body: "Connect your account to the existing legal-company profile so buyer traffic, products and sourcing history stay in one place.",
    href: "/suppliers/claim",
    cta: "Claim your company",
  },
  {
    icon: PackageSearch,
    title: "Publish clear product capabilities",
    body: "Describe product families, processes, materials, standards and export markets in the language procurement teams use to shortlist factories.",
    href: "/products",
    cta: "Review product catalogs",
  },
  {
    icon: FileCheck2,
    title: "Prepare verification evidence",
    body: "Keep business identity, certifications, test reports and product-specific evidence separate so each claim can be reviewed on its own merits.",
    href: "/suppliers/certified",
    cta: "See verification signals",
  },
] as const;

export default async function SupplierResourcesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <section className="relative overflow-hidden border-b border-brand-blue bg-brand-navy text-white">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,#19c3c833,transparent_65%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-aqua">
            For FRP suppliers
          </div>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
            Build a profile buyers can evaluate with confidence
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-7 text-brand-cool-gray">
            Present the right company, product and evidence information at each stage of the sourcing process—from discovery to qualification.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/suppliers/claim"
              className={buttonVariants({
                size: "lg",
                className: "bg-brand-teal text-brand-navy hover:bg-brand-aqua",
              })}
            >
              Claim your company <ArrowRight size={15} />
            </Link>
            <Link
              href="/suppliers"
              className={buttonVariants({
                size: "lg",
                variant: "outline",
                className: "border-white/35 bg-transparent text-white hover:bg-white/10 hover:text-white",
              })}
            >
              View supplier discovery
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-5 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="group flex min-h-80 flex-col rounded-2xl border border-brand-cool-gray bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-brand-teal hover:shadow-lg hover:shadow-brand-navy/8"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-xl bg-brand-navy text-brand-aqua">
                  <step.icon size={20} aria-hidden="true" />
                </span>
                <span className="font-mono text-[11px] text-brand-blue">0{index + 1}</span>
              </div>
              <h2 className="mt-8 text-xl font-semibold text-brand-navy">{step.title}</h2>
              <p className="mt-3 text-sm leading-7 text-brand-graphite/70">{step.body}</p>
              <Link
                href={step.href as never}
                className="mt-auto flex items-center gap-2 border-t border-brand-cool-gray pt-5 text-sm font-semibold text-brand-blue transition-colors group-hover:text-brand-navy"
              >
                {step.cta} <ArrowRight size={14} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-brand-cool-gray bg-brand-cool-gray/25">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <div className="flex size-10 items-center justify-center rounded-xl bg-brand-blue text-white">
              <ShieldCheck size={19} aria-hidden="true" />
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-brand-navy">Verification is evidence-specific</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Legal company identity",
              "Manufacturing capabilities",
              "Management-system certificates",
              "Product test and lot evidence",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl bg-white p-4 text-sm text-brand-graphite shadow-sm">
                <BadgeCheck size={17} className="shrink-0 text-brand-teal" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
