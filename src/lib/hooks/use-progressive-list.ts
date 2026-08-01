"use client";

// Progressive list pagination that resets when the result count changes.

import { useState, useCallback } from "react";

export function useProgressiveList<T>(items: T[], pageSize = 50) {
  const stateKey = `${items.length}:${pageSize}`;
  const [state, setState] = useState({ key: stateKey, shown: pageSize });
  const shown = state.key === stateKey ? state.shown : pageSize;

  const visible = items.slice(0, shown);
  const remaining = Math.max(0, items.length - shown);
  const expand = useCallback(() => {
    setState({
      key: stateKey,
      shown: Math.min(items.length, shown + pageSize),
    });
  }, [items.length, pageSize, shown, stateKey]);

  return { visible, remaining, total: items.length, shown, expand };
}
