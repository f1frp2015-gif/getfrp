"use client";

import { ChevronDown, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/logo";
import {
  APPLICATION_LINKS,
  HELP_LINKS,
  PROCESS_LINKS,
  PRODUCT_LINKS,
  SOURCING_GUIDE_LINKS,
  STANDARD_LINKS,
  TOOL_LINKS,
} from "@/lib/site-navigation";

const columns = [
  { heading: "Products", root: "/products", links: PRODUCT_LINKS },
  { heading: "Processes", root: "/manufacturing", links: PROCESS_LINKS },
  { heading: "Applications", root: "/applications", links: APPLICATION_LINKS },
  { heading: "Standards", root: "/standards", links: STANDARD_LINKS },
  { heading: "Sourcing Guide", root: "/source-from-china", links: SOURCING_GUIDE_LINKS },
  { heading: "Tools & Help", root: "/tools", links: [...TOOL_LINKS, ...HELP_LINKS] },
] as const;

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-[#d9dfe8] bg-[#f4f6f9]">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-5">
        <details className="group">
          <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-5 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-[#123f8c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f6f9] [&::-webkit-details-marker]:hidden">
            <div className="flex min-w-0 items-center gap-4 sm:gap-5">
              <Logo />
              <span className="hidden h-5 w-px shrink-0 bg-[#d9dfe8] sm:block" />
              <p className="hidden max-w-xl text-[12px] leading-5 text-[#5d6672] sm:block">
                China&apos;s specialist FRP marketplace for reviewed factory discovery,
                product evidence, controlled RFQs and export sourcing.
              </p>
            </div>
            <span className="flex shrink-0 items-center gap-2 text-[12px] font-semibold text-[#123f8c]">
              Explore directory
              <ChevronDown
                aria-hidden="true"
                size={15}
                className="transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
              />
            </span>
          </summary>

          <nav
            className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-[#d9dfe8] pb-3 pt-6 sm:grid-cols-3 xl:grid-cols-6"
            aria-label="Complete marketplace directory"
          >
            {columns.map((column) => (
              <section key={column.heading}>
                <h2 className="text-[12px] font-semibold text-[#0a1f44]">
                  <Link href={column.root as never} className="hover:text-[#123f8c]">{column.heading}</Link>
                </h2>
                <ul className="mt-3 space-y-2">
                  {column.links.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href as never} className="text-[11px] leading-4 text-[#5d6672] hover:text-[#123f8c] hover:underline">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </nav>
        </details>

        <div className="mt-4 flex flex-col gap-3 border-t border-[#d9dfe8] pt-4 text-[11px] text-[#5d6672] lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>{t("copyright", { year: new Date().getFullYear() })}</span>
            <span className="hidden items-center gap-1.5 sm:inline-flex"><ShieldCheck size={11} className="text-[#19c3c8]" /> Factory identity · MTC · PSI</span>
          </div>
          <nav className="flex flex-wrap gap-x-4 gap-y-2" aria-label="Company and legal">
            <Link href="/rfq" className="font-semibold text-[#123f8c] hover:text-[#0a1f44]">Post RFQ →</Link>
            <Link href="/about" className="hover:text-foreground">About</Link>
            <Link href="/contact" className="hover:text-foreground">Contact</Link>
            <Link href="/services/china-export-growth" className="font-semibold text-[#123f8c] hover:text-[#0a1f44]">China Export Services</Link>
            <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground">Terms</Link>
            <Link href="/sitemap" className="hover:text-foreground">Sitemap</Link>
            <Link href="/methodology" className="hover:text-foreground">Methodology</Link>
            <Link href="/image-credits" className="hover:text-foreground">{t("imageCredits")}</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
