"use client";

// Progressive disclosure for a list or grid:
//   <ProgressiveCollapse className="grid gap-4 md:grid-cols-2" pageSize={50}>
//     {items.map(it => <Card key={...}>...</Card>)}
//   </ProgressiveCollapse>
// Child visibility is updated directly without coupling to filter logic.

import { Children, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  children: React.ReactNode;
  /** Number of items revealed per step. */
  pageSize?: number;
  /** Layout classes for the wrapper element. */
  className?: string;
}

export function ProgressiveCollapse({
  children,
  pageSize = 50,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const total = Children.count(children);
  const stateKey = `${total}:${pageSize}`;
  const [state, setState] = useState({ key: stateKey, shown: pageSize });
  const shown = state.key === stateKey ? state.shown : pageSize;

  useEffect(() => {
    const list = ref.current;
    if (!list) return;
    const items = Array.from(list.children) as HTMLElement[];
    items.forEach((el, i) => {
      el.style.display = i < shown ? "" : "none";
    });
  }, [children, shown]);

  const remaining = Math.max(0, total - shown);

  return (
    <>
      <div ref={ref} className={className}>
        {children}
      </div>
      {remaining > 0 && (
        <div className="mt-6 flex justify-center">
          <Button
            variant="outline"
            onClick={() =>
              setState({
                key: stateKey,
                shown: Math.min(total, shown + pageSize),
              })
            }
          >
            Show {remaining} more
          </Button>
        </div>
      )}
    </>
  );
}
