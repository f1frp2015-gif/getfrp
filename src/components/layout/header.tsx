"use client";

import { useState } from "react";
import { ChevronDown, ClipboardCheck, PackageSearch, PanelsTopLeft, ScrollText, ShieldCheck } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/logo";

const navigationGroups = [
  {
    label: "For buyers",
    items: [
      {
        href: "/suppliers",
        label: "Supplier discovery",
        description: "Find and compare China FRP manufacturers.",
        icon: PackageSearch,
      },
      {
        href: "/products",
        label: "Product catalogs",
        description: "Browse FRP products, materials and processes.",
        icon: PanelsTopLeft,
      },
      {
        href: "/services/frp-engineering-qa",
        label: "Engineering & QA",
        description: "Control specifications, suppliers and inspection evidence.",
        icon: ClipboardCheck,
      },
    ],
  },
  {
    label: "For suppliers",
    items: [
      {
        href: "/suppliers/claim",
        label: "Claim your company",
        description: "Manage your profile and verification evidence.",
        icon: ShieldCheck,
      },
      {
        href: "/suppliers/resources",
        label: "Resources",
        description: "Build a buyer-ready presence on GetFRP.",
        icon: ScrollText,
      },
    ],
  },
] as const;

const navigation = [
  { href: "/tools", label: "Tools" },
  { href: "/source-from-china", label: "How to source" },
  { href: "/ai", label: "Ask AI" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    const basePath = href.split("#")[0];
    return basePath === "/" ? pathname === "/" : pathname.startsWith(basePath);
  };

  const isGroupActive = (items: (typeof navigationGroups)[number]["items"]) =>
    items.some((item) => isActive(item.href));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-cool-gray/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center hover:opacity-85"
          aria-label="getfrp home"
        >
          <Logo eager />
        </Link>

        <nav className="hidden items-center gap-px md:flex" aria-label="Primary navigation">
          {navigationGroups.map((group) => {
            const active = isGroupActive(group.items);

            return (
              <DropdownMenu key={group.label}>
                <DropdownMenuTrigger
                  className={`group relative inline-flex items-center gap-1 px-2.5 py-5 text-[13px] transition-colors outline-none ${
                    active
                      ? "text-brand-navy"
                      : "text-brand-graphite/70 hover:text-brand-navy data-popup-open:text-brand-navy"
                  }`}
                >
                  {group.label}
                  <ChevronDown
                    size={13}
                    className="transition-transform duration-150 group-data-[popup-open]:rotate-180"
                    aria-hidden="true"
                  />
                  {active && (
                    <span className="absolute inset-x-2 -bottom-px h-0.5 bg-brand-teal" />
                  )}
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  sideOffset={0}
                  className="w-72 rounded-xl border border-brand-cool-gray bg-white p-2 shadow-xl shadow-brand-navy/10"
                >
                  {group.items.map((item) => (
                    <DropdownMenuItem
                      key={item.href}
                      render={<Link href={item.href as never} />}
                      className="cursor-pointer items-start gap-3 rounded-lg px-3 py-3 focus:bg-brand-aqua/20"
                    >
                      <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-navy text-white">
                        <item.icon size={15} aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-[13px] font-semibold text-brand-navy">
                          {item.label}
                        </span>
                        <span className="mt-0.5 block text-[11px] leading-4 text-brand-graphite/65">
                          {item.description}
                        </span>
                      </span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            );
          })}
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href as never}
              className={`relative px-2.5 py-5 text-[13px] transition-colors ${
                isActive(item.href)
                  ? "text-brand-navy"
                  : "text-brand-graphite/70 hover:text-brand-navy"
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute inset-x-2 -bottom-px h-0.5 bg-brand-teal" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/rfq"
            className={buttonVariants({
              size: "sm",
              className: "bg-brand-blue text-white hover:bg-brand-navy",
            })}
          >
            Submit RFQ
          </Link>
          <Link href="/sign-in" className={buttonVariants({ size: "sm", variant: "outline" })}>
            Login
          </Link>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-brand-navy hover:bg-brand-aqua/20 md:hidden"
            aria-label="Open navigation"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 p-0">
            <nav className="flex flex-col p-4 pt-12" aria-label="Mobile navigation">
              {navigationGroups.map((group) => (
                <div key={group.label} className="border-b border-brand-cool-gray/80 py-3">
                  <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-blue">
                    {group.label}
                  </div>
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href as never}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-2 rounded-md py-2 text-sm text-brand-graphite transition-colors hover:text-brand-blue"
                    >
                      <item.icon size={15} className="text-brand-teal" aria-hidden="true" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href as never}
                  onClick={() => setOpen(false)}
                  className="border-b border-brand-cool-gray/80 py-3 text-sm text-brand-graphite/75 transition-colors hover:text-brand-blue"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-5 grid grid-cols-2 gap-2">
                <Link
                  href="/rfq"
                  onClick={() => setOpen(false)}
                  className={buttonVariants({
                    className: "w-full bg-brand-blue text-white hover:bg-brand-navy",
                  })}
                >
                  Submit RFQ
                </Link>
                <Link
                  href="/sign-in"
                  onClick={() => setOpen(false)}
                  className={buttonVariants({ className: "w-full", variant: "outline" })}
                >
                  Login
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
