"use client";

import { useSession } from "@/lib/auth/use-session";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";

export function SupplierClaimButton({
  supplierId,
}: {
  supplierId: string;
  supplierName: string;
}) {
  const { isLoaded, user } = useSession();
  const claimPath = `/suppliers/claim?supplier=${encodeURIComponent(supplierId)}`;

  if (!isLoaded) {
    return (
      <Button variant="outline" size="sm" disabled>
        Claim your company
      </Button>
    );
  }

  if (!user) {
    return (
      <Link
        href={`/sign-up?intent=supplier&redirect_url=${encodeURIComponent(claimPath)}`}
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        Claim your company
      </Link>
    );
  }

  return (
    <Link
      href={claimPath}
      className={buttonVariants({ variant: "outline", size: "sm" })}
    >
      Claim your company
    </Link>
  );
}
