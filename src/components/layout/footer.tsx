"use client";

import { ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/logo";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-[#ced9dd] bg-[#f7f9fa]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <Logo />
            <span className="hidden h-5 w-px bg-[#d3dde0] sm:block" />
            <p className="max-w-md text-[12px] leading-5 text-[#667983]">
              China&apos;s specialist FRP supply chain — factory matching,
              specification control, QA and export.
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] font-medium text-[#425d69]">
            <Link href="/suppliers" className="transition-colors hover:text-[#0b8179]">
              Suppliers
            </Link>
            <Link href="/products" className="transition-colors hover:text-[#0b8179]">
              Products
            </Link>
            <Link href="/suppliers/directory/1" className="transition-colors hover:text-[#0b8179]">
              Supplier directory
            </Link>
            <Link href="/suppliers/claim" className="transition-colors hover:text-[#0b8179]">
              Claim your company
            </Link>
            <Link href="/source-from-china" className="transition-colors hover:text-[#0b8179]">
              How to source
            </Link>
            <Link href="/guides" className="transition-colors hover:text-[#0b8179]">
              Guides
            </Link>
            <Link href="/tools" className="transition-colors hover:text-[#0b8179]">
              Tools
            </Link>
            <Link href="/rfq" className="font-semibold text-[#0a736d] transition-colors hover:text-[#095f5a]">
              Submit RFQ →
            </Link>
          </nav>
        </div>

        <div className="mt-7 flex flex-col gap-3 border-t border-[#dbe3e6] pt-5 text-[11px] text-[#667983] sm:flex-row sm:items-center sm:justify-between">
          <span>{t("copyright", { year: new Date().getFullYear() })}</span>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck size={11} className="text-[#0b8179]" />
              Factory identity · MTC · PSI
            </span>
            <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground">Terms</Link>
            <Link href="/sitemap" className="hover:text-foreground">Sitemap</Link>
            <Link href="/image-credits" className="hover:text-foreground">
              {t("imageCredits")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
