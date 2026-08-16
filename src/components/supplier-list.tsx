import { ArrowRight, BadgeCheck, ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export type SupplierListSignal = {
  label: string;
  href?: string | null;
  className?: string;
};

export type SupplierListEntry = {
  id?: string;
  slug: string;
  name: string;
  location?: string | null;
  category?: string | null;
  description?: string | null;
  certifications?: string[];
  signals?: SupplierListSignal[];
  verified?: boolean;
  profilePublished?: boolean;
};

export function SupplierList({
  suppliers,
  startIndex = 0,
  showIndex = false,
  signalLimit = 3,
  className,
}: {
  suppliers: SupplierListEntry[];
  startIndex?: number;
  showIndex?: boolean;
  signalLimit?: number;
  className?: string;
}) {
  return (
    <div className={cn("min-w-0", className)} data-supplier-list="rows">
      <div className="hidden grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)_minmax(10rem,.9fr)_7.5rem] border-x border-t border-border/70 bg-muted/30 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground lg:grid">
        <span>Supplier</span>
        <span>Profile summary</span>
        <span>Evidence signals</span>
        <span className="text-right">Profile</span>
      </div>
      <ol
        start={showIndex ? startIndex + 1 : undefined}
        className="divide-y divide-border/70 overflow-hidden border border-border/70 bg-background lg:rounded-t-none"
      >
        {suppliers.map((supplier, index) => {
          const signals: SupplierListSignal[] = supplier.signals?.length
            ? supplier.signals.slice(0, signalLimit)
            : (supplier.certifications ?? [])
                .slice(0, signalLimit)
                .map((label) => ({ label }));
          const profileStatus = supplier.verified
            ? "Verified"
            : supplier.profilePublished
              ? "Public profile"
              : "Public record";

          return (
            <li
              key={supplier.id ?? supplier.slug}
              value={showIndex ? startIndex + index + 1 : undefined}
              className="min-w-0"
            >
              <article className="grid min-h-32 min-w-0 gap-4 px-5 py-5 transition-colors hover:bg-muted/35 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)_minmax(10rem,.9fr)_7.5rem] lg:items-center">
                <div className="min-w-0">
                  <div className="flex min-w-0 items-start gap-3">
                    {showIndex ? (
                      <span className="mt-0.5 inline-flex h-7 min-w-7 shrink-0 items-center justify-center rounded-full bg-[#123f8c]/8 px-2 font-mono text-[10px] font-semibold text-[#123f8c]">
                        {startIndex + index + 1}
                      </span>
                    ) : null}
                    <div className="min-w-0">
                      <Link
                        href={`/suppliers/${supplier.slug}` as never}
                        className="font-semibold leading-6 text-foreground transition-colors hover:text-[#123f8c] hover:underline"
                      >
                        {supplier.name}
                      </Link>
                      <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                        {supplier.location ? <span>{supplier.location}</span> : null}
                        {supplier.category ? <span>{supplier.category}</span> : null}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="line-clamp-3 min-w-0 text-sm leading-6 text-muted-foreground lg:line-clamp-2">
                  {supplier.description?.trim() ||
                    "Public China FRP supplier record. Confirm product scope and current evidence through a controlled RFQ."}
                </p>

                <div className="min-w-0">
                  <div className="mb-2 flex items-center gap-1.5 text-xs font-medium text-foreground">
                    {supplier.verified ? (
                      <BadgeCheck size={14} className="shrink-0 text-[#19aeb4]" />
                    ) : null}
                    <span>{profileStatus}</span>
                  </div>
                  {signals.length ? (
                    <div className="flex min-w-0 flex-wrap gap-1.5">
                      {signals.map((signal, signalIndex) => (
                        <Badge
                          key={`${signal.label}-${signalIndex}`}
                          variant="secondary"
                          className={cn(
                            "h-auto min-h-5 max-w-full whitespace-normal break-words py-1 text-left leading-4",
                            signal.className,
                          )}
                        >
                          {signal.href ? (
                            <a
                              href={signal.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 underline underline-offset-2"
                            >
                              {signal.label}
                              <ExternalLink size={10} className="shrink-0" />
                            </a>
                          ) : (
                            signal.label
                          )}
                        </Badge>
                      ))}
                    </div>
                  ) : (
                    <span className="text-xs text-muted-foreground">Evidence available on profile</span>
                  )}
                </div>

                <Link
                  href={`/suppliers/${supplier.slug}` as never}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#123f8c] lg:justify-end"
                >
                  View profile
                  <ArrowRight size={13} />
                </Link>
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
