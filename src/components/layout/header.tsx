"use client";

import { useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/logo";

const navigation = [
  { href: "/suppliers", label: "Suppliers" },
  { href: "/suppliers/claim", label: "For suppliers" },
  { href: "/products", label: "Products" },
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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight hover:opacity-80"
        >
          <Logo />
        </Link>

        <nav className="hidden items-center gap-px md:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href as never}
              className={`relative px-2.5 py-1.5 text-[13px] transition-colors ${
                isActive(item.href)
                  ? "text-foreground"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute inset-x-2 -bottom-[1px] h-[2px] bg-[#0b8179]" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/rfq">
            <Button size="sm" className="bg-[#0b756f] text-white hover:bg-[#09645f]">
              Submit RFQ
            </Button>
          </Link>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground hover:bg-muted md:hidden"
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
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href as never}
                  onClick={() => setOpen(false)}
                  className="border-b py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/rfq" onClick={() => setOpen(false)} className="mt-5">
                <Button className="w-full bg-[#0b756f] text-white hover:bg-[#09645f]">
                  Submit RFQ
                </Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
