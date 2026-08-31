export type RfqHrefOptions = {
  supplier?: string;
  product?: string;
  category?: string;
  combo?: string;
  topic?: string;
};

export function firstRfqSearchParam(
  value: string | string[] | undefined,
  maxLength = 300,
): string | undefined {
  const firstValue = Array.isArray(value) ? value[0] : value;
  const normalized = firstValue
    ?.replace(/[\u0000-\u001f\u007f]/g, " ")
    .trim();

  if (!normalized || normalized.length > maxLength) return undefined;
  return normalized;
}

export function getRfqInitialProduct(searchParams: {
  product?: string | string[];
  combo?: string | string[];
  topic?: string | string[];
}): string | undefined {
  return (
    firstRfqSearchParam(searchParams.product) ??
    firstRfqSearchParam(searchParams.combo) ??
    firstRfqSearchParam(searchParams.topic)
  );
}

export function rfqHref(options: RfqHrefOptions = {}): `/rfq${string}` {
  const query = new URLSearchParams();
  const orderedEntries = [
    ["product", options.product],
    ["supplier", options.supplier],
    ["category", options.category],
    ["combo", options.combo],
    ["topic", options.topic],
  ] as const;

  for (const [key, value] of orderedEntries) {
    const normalized = firstRfqSearchParam(value);
    if (normalized) query.set(key, normalized);
  }

  const search = query.toString();
  return search ? `/rfq?${search}` : "/rfq";
}
