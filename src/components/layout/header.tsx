"use client";

import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
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
import { PRIMARY_NAVIGATION } from "@/lib/site-navigation";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-cool-gray/80 bg-white/95 backdrop-blur">
      <div className="border-b border-brand-cool-gray/70 bg-brand-navy text-white">
        <div className="mx-auto grid min-h-9 max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 text-[11px] sm:px-6">
          <div className="flex items-center gap-2" aria-label="Language availability">
            <span className="font-semibold text-brand-aqua">EN</span>
          </div>
          <Link href="/rfq" className="font-semibold text-white underline decoration-brand-teal decoration-2 underline-offset-4 hover:text-brand-aqua">
            Post RFQ
          </Link>
          <div className="flex justify-end gap-3">
            <Link href="/sign-up" className="font-semibold hover:text-brand-aqua">Join Free</Link>
            <Link href="/sign-in" className="text-white/80 hover:text-brand-aqua">Sign in</Link>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center hover:opacity-85" aria-label="getfrp home">
          <Logo eager />
        </Link>

        <nav className="hidden items-center lg:flex" aria-label="Primary navigation">
          {PRIMARY_NAVIGATION.map((group) => (
            <div key={group.href} className="flex items-center">
              <Link href={group.href as never} className={`relative px-2 py-5 text-[12px] font-medium transition-colors ${isActive(group.href) ? "text-brand-navy" : "text-brand-graphite/70 hover:text-brand-navy"}`}>
                {group.label}
                {isActive(group.href) ? <span className="absolute inset-x-2 bottom-0 h-0.5 bg-brand-teal" /> : null}
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger aria-label={`Open ${group.label} menu`} className="-ml-2 rounded p-1 text-brand-graphite/55 outline-none hover:bg-brand-aqua/20 hover:text-brand-navy">
                  <ChevronDown size={13} />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" sideOffset={12} className={`rounded-xl border border-brand-cool-gray bg-white p-2 shadow-xl shadow-brand-navy/10 ${group.label === "Products" ? "grid w-[520px] grid-cols-2" : "w-72"}`}>
                  <DropdownMenuItem render={<Link href={group.href as never} />} className="col-span-full cursor-pointer rounded-lg px-3 py-2 font-semibold text-brand-navy focus:bg-brand-aqua/20">
                    Browse all {group.label.toLowerCase()}
                  </DropdownMenuItem>
                  {group.items.map((item) => (
                    <DropdownMenuItem key={item.href} render={<Link href={item.href as never} />} className="cursor-pointer rounded-lg px-3 py-2 text-[12px] focus:bg-brand-aqua/20">
                      {item.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ))}
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="inline-flex size-9 items-center justify-center rounded-md text-brand-navy hover:bg-brand-aqua/20 lg:hidden" aria-label="Open navigation">
            <Menu size={20} />
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(90vw,360px)] overflow-y-auto p-5 pt-12">
            <nav aria-label="Mobile navigation">
              {PRIMARY_NAVIGATION.map((group) => (
                <div key={group.href} className="border-b border-brand-cool-gray/80 py-3">
                  <Link href={group.href as never} onClick={() => setOpen(false)} className="font-semibold text-brand-navy">{group.label}</Link>
                  <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-2">
                    {group.items.map((item) => <Link key={item.href} href={item.href as never} onClick={() => setOpen(false)} className="text-xs text-brand-graphite/70 hover:text-brand-blue">{item.label}</Link>)}
                  </div>
                </div>
              ))}
              <div className="mt-5 grid grid-cols-2 gap-2">
                <Link href="/rfq" onClick={() => setOpen(false)} className={buttonVariants({ className: "w-full" })}>Post RFQ</Link>
                <Link href="/sign-up" onClick={() => setOpen(false)} className={buttonVariants({ className: "w-full", variant: "outline" })}>Join Free</Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

    </header>
  );
}
