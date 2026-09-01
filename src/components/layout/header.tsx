"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, ChevronDown, Menu } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import {
  navigationHrefMatchesLocation,
  PRIMARY_NAVIGATION,
} from "@/lib/site-navigation";

function pathMatchesPrefix(pathname: string, prefix: string) {
  return pathname === prefix || pathname.startsWith(`${prefix}/`);
}

export function Header() {
  const pathname = usePathname();

  return (
    <Suspense
      fallback={<HeaderLayout pathname={pathname} currentSearch={null} />}
    >
      <QueryAwareHeader pathname={pathname} />
    </Suspense>
  );
}

function QueryAwareHeader({ pathname }: { pathname: string }) {
  const searchParams = useSearchParams();

  return (
    <HeaderLayout
      pathname={pathname}
      currentSearch={searchParams.toString()}
    />
  );
}

function HeaderLayout({
  pathname,
  currentSearch,
}: {
  pathname: string;
  currentSearch: string | null;
}) {
  const [open, setOpen] = useState(false);
  const activeGroup = PRIMARY_NAVIGATION.find((group) =>
    group.activePrefixes.some((prefix) => pathMatchesPrefix(pathname, prefix)),
  );

  return (
    <header
      data-navigation-layout="single-row"
      className="sticky top-0 z-50 w-full border-b border-brand-cool-gray/80 bg-white/95 backdrop-blur"
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center px-4 sm:px-6">
        <Link
          href="/"
          className="rounded-md transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
          aria-label="GetFRP home"
        >
          <Logo />
        </Link>

        <nav
          className="ml-auto hidden items-center gap-1 lg:flex"
          aria-label="Primary navigation"
        >
          {PRIMARY_NAVIGATION.map((group) => {
            const isActive = group.activePrefixes.some((prefix) =>
              pathMatchesPrefix(pathname, prefix),
            );
            const menuColumnCount = group.sections.length;

            return (
              <DropdownMenu key={group.label} modal={false}>
                <DropdownMenuTrigger
                  type="button"
                  className={cn(
                    "group relative inline-flex h-11 items-center gap-1 rounded-lg px-3 text-[13px] font-semibold outline-none transition-colors hover:bg-brand-aqua/15 hover:text-brand-navy focus-visible:ring-2 focus-visible:ring-brand-blue/50",
                    isActive
                      ? "text-brand-navy"
                      : "text-brand-graphite/70",
                  )}
                >
                  {group.label}
                  <ChevronDown
                    aria-hidden="true"
                    size={14}
                    className="text-brand-graphite/45 transition-transform duration-150 group-data-[popup-open]:rotate-180 motion-reduce:transition-none"
                  />
                  {isActive ? (
                    <span className="absolute inset-x-3 -bottom-[14px] h-0.5 bg-brand-teal" />
                  ) : null}
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  align={
                    group.label === "Products"
                      ? "start"
                      : group.label === "Sourcing"
                        ? "end"
                        : "center"
                  }
                  sideOffset={8}
                  className={cn(
                    "max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-brand-cool-gray bg-white p-0 shadow-2xl shadow-brand-navy/12",
                    menuColumnCount === 3
                      ? "w-[680px]"
                      : menuColumnCount === 2
                        ? "w-[520px]"
                        : "w-[400px]",
                  )}
                  aria-label={`${group.label} navigation`}
                >
                  <DropdownMenuItem
                    render={
                      <Link
                        href={group.href as never}
                        aria-current={
                          navigationHrefMatchesLocation(
                            pathname,
                            currentSearch,
                            group.href,
                          )
                            ? "page"
                            : undefined
                        }
                      />
                    }
                    className="group/overview flex cursor-pointer items-center justify-between gap-6 rounded-none border-b border-brand-cool-gray/80 bg-brand-aqua/10 px-5 py-4 focus:bg-brand-aqua/20"
                  >
                    <span>
                      <span className="block text-sm font-semibold text-brand-navy">
                        {group.ctaLabel}
                      </span>
                      <span className="mt-1 block text-[12px] leading-5 text-brand-graphite/65">
                        {group.description}
                      </span>
                    </span>
                    <ArrowRight
                      aria-hidden="true"
                      size={16}
                      className="shrink-0 text-brand-blue transition-transform group-hover/overview:translate-x-0.5 motion-reduce:transition-none"
                    />
                  </DropdownMenuItem>

                  <div
                    className={cn(
                      "grid gap-5 p-4",
                      menuColumnCount === 3
                        ? "grid-cols-3"
                        : menuColumnCount === 2
                          ? "grid-cols-2"
                          : "grid-cols-1",
                    )}
                  >
                    {group.sections.map((section) => (
                      <DropdownMenuGroup key={section.label}>
                        <DropdownMenuLabel className="mb-1 px-2.5 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-brand-navy">
                          {section.label}
                        </DropdownMenuLabel>

                        <div className="space-y-0.5">
                          {section.items.map((item) => (
                            <DropdownMenuItem
                              key={item.href}
                              render={
                                <Link
                                  href={item.href as never}
                                  aria-current={
                                    navigationHrefMatchesLocation(
                                      pathname,
                                      currentSearch,
                                      item.href,
                                    )
                                      ? "page"
                                      : undefined
                                  }
                                />
                              }
                              className="cursor-pointer rounded-lg px-2.5 py-2 text-[12px] leading-4 text-brand-graphite/75 focus:bg-brand-aqua/20 focus:text-brand-navy data-[highlighted]:bg-brand-aqua/20 data-[highlighted]:text-brand-navy"
                            >
                              {item.label}
                            </DropdownMenuItem>
                          ))}
                        </div>
                      </DropdownMenuGroup>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            );
          })}
        </nav>

        <div className="ml-4 hidden shrink-0 items-center gap-2 border-l border-brand-cool-gray/80 pl-4 lg:flex">
          <Link
            href="/sign-in"
            className="rounded-md px-2 py-2 text-[13px] font-medium text-brand-graphite/70 transition-colors hover:text-brand-blue focus-visible:outline-2 focus-visible:outline-brand-blue"
          >
            Sign in
          </Link>
          <Link
            href="/rfq"
            className="rounded-lg bg-brand-navy px-4 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-brand-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
          >
            Post RFQ
          </Link>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            type="button"
            className="ml-auto inline-flex size-10 items-center justify-center rounded-lg text-brand-navy hover:bg-brand-aqua/20 focus-visible:outline-2 focus-visible:outline-brand-blue lg:hidden"
            aria-label="Open navigation"
          >
            <Menu aria-hidden="true" size={21} />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[min(92vw,390px)] gap-0 overflow-hidden p-0"
          >
            <SheetHeader className="border-b border-brand-cool-gray/80 px-5 py-5 pr-14">
              <SheetTitle className="text-base font-semibold text-brand-navy">
                Browse GetFRP
              </SheetTitle>
              <SheetDescription className="mt-1 text-[12px] leading-5">
                Products, suppliers and sourcing guidance.
              </SheetDescription>
            </SheetHeader>

            <div className="min-h-0 flex-1 overflow-y-auto px-5">
              <nav aria-label="Mobile navigation">
                <Accordion
                  key={pathname}
                  defaultValue={activeGroup ? [activeGroup.label] : []}
                  className="border-b border-brand-cool-gray/80"
                >
                  {PRIMARY_NAVIGATION.map((group) => {
                    const isActive = group.activePrefixes.some((prefix) =>
                      pathMatchesPrefix(pathname, prefix),
                    );

                    return (
                      <AccordionItem
                        key={group.label}
                        value={group.label}
                        className="border-brand-cool-gray/80"
                      >
                        <AccordionTrigger
                          className={cn(
                            "min-h-14 rounded-none py-4 text-[14px] font-semibold hover:no-underline",
                            isActive
                              ? "text-brand-blue"
                              : "text-brand-navy",
                          )}
                        >
                          {group.label}
                        </AccordionTrigger>
                        <AccordionContent className="pb-5 [&_a]:no-underline">
                          <Link
                            href={group.href as never}
                            onClick={() => setOpen(false)}
                            className="group/mobile-overview flex items-center justify-between gap-4 rounded-xl bg-brand-aqua/12 px-4 py-3.5 hover:bg-brand-aqua/20"
                            aria-current={
                              navigationHrefMatchesLocation(
                                pathname,
                                currentSearch,
                                group.href,
                              )
                                ? "page"
                                : undefined
                            }
                          >
                            <span>
                              <span className="block text-[13px] font-semibold text-brand-navy">
                                {group.ctaLabel}
                              </span>
                              <span className="mt-1 block text-[11px] leading-4 text-brand-graphite/65">
                                {group.description}
                              </span>
                            </span>
                            <ArrowRight
                              aria-hidden="true"
                              size={15}
                              className="shrink-0 text-brand-blue transition-transform group-hover/mobile-overview:translate-x-0.5 motion-reduce:transition-none"
                            />
                          </Link>

                          <div className="mt-4 space-y-5">
                            {group.sections.map((section) => (
                              <div key={section.label}>
                                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-brand-blue">
                                  {section.label}
                                </p>
                                <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1">
                                  {section.items.map((item) => (
                                    <Link
                                      key={item.href}
                                      href={item.href as never}
                                      onClick={() => setOpen(false)}
                                      className={cn(
                                        "flex min-h-9 items-center rounded-md py-1.5 text-[12px] leading-4 transition-colors hover:text-brand-blue focus-visible:outline-2 focus-visible:outline-brand-blue",
                                        navigationHrefMatchesLocation(
                                          pathname,
                                          currentSearch,
                                          item.href,
                                        )
                                          ? "font-semibold text-brand-navy"
                                          : "text-brand-graphite/70",
                                      )}
                                      aria-current={
                                        navigationHrefMatchesLocation(
                                          pathname,
                                          currentSearch,
                                          item.href,
                                        )
                                          ? "page"
                                          : undefined
                                      }
                                    >
                                      {item.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </nav>
            </div>

            <div className="border-t border-brand-cool-gray/80 bg-white px-5 py-4">
              <Link
                href="/rfq"
                onClick={() => setOpen(false)}
                className={buttonVariants({ className: "h-11 w-full" })}
              >
                Post RFQ
              </Link>
              <div className="mt-3 flex items-center justify-center gap-2 text-[12px]">
                <Link
                  href="/sign-in"
                  onClick={() => setOpen(false)}
                  className="inline-flex min-h-9 items-center font-medium text-brand-navy hover:text-brand-blue"
                >
                  Sign in
                </Link>
                <span aria-hidden="true" className="text-brand-cool-gray">
                  ·
                </span>
                <Link
                  href="/sign-up"
                  onClick={() => setOpen(false)}
                  className="inline-flex min-h-9 items-center font-medium text-brand-blue hover:text-brand-navy"
                >
                  Create free account
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
