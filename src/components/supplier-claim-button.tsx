import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { supplierClaimPath } from "@/lib/supplier-claim-links";

export function SupplierClaimButton({
  supplierId,
}: {
  supplierId: string;
  supplierName: string;
}) {
  return (
    <Link
      href={supplierClaimPath(supplierId)}
      prefetch={false}
      className={buttonVariants({ variant: "outline", size: "sm" })}
    >
      Claim your company
    </Link>
  );
}
