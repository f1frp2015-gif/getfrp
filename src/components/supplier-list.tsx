import {
  SupplierResultRow,
  type SupplierResultEntry,
  type SupplierResultSignal,
} from "@/components/supplier-result-row";
import { cn } from "@/lib/utils";

export type SupplierListSignal = SupplierResultSignal;

export type SupplierListEntry = SupplierResultEntry & {
  signals?: SupplierListSignal[];
  actionHref?: string;
  actionLabel?: string;
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
      <ol
        start={showIndex ? startIndex + 1 : undefined}
        className="list-none space-y-3"
      >
        {suppliers.map((supplier, index) => {
          const signals = supplier.signals?.slice(0, signalLimit) ?? [];

          return (
            <li
              key={supplier.id || supplier.slug}
              value={showIndex ? startIndex + index + 1 : undefined}
              className="min-w-0"
            >
              <SupplierResultRow
                supplier={supplier}
                signals={signals}
                showDefaultActions={!supplier.actionHref}
                primaryActionHref={supplier.actionHref}
                primaryActionLabel={supplier.actionLabel}
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
}
