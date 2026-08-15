export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 240"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M262 113C220 61 182 30 130 30C66 30 24 68 24 120C24 173 67 210 130 210C183 210 222 179 263 132L244 114C208 155 174 181 130 181C82 181 52 156 52 120C52 83 82 58 130 58C168 58 199 81 234 123L262 113Z"
        fill="currentColor"
      />
      <path
        d="M229 116C286 61 341 43 399 49C423 51 443 60 458 72C438 65 419 63 400 64C345 66 300 84 244 127L229 116Z"
        fill="#19C3C8"
      />
      <path
        d="M244 130C296 84 346 69 401 74C426 77 445 85 459 97C439 90 421 88 401 89C351 91 308 107 257 141L244 130Z"
        fill="#19C3C8"
      />
      <path
        d="M259 144C305 109 349 98 399 103C423 106 442 114 456 126C437 120 419 118 401 119C355 121 316 133 270 154L259 144Z"
        fill="#19C3C8"
      />
    </svg>
  );
}

export function Logo({ eager = false }: { eager?: boolean }) {
  // Kept for call-site compatibility; an inline SVG has no asset to preload.
  void eager;

  return (
    <span
      className="inline-flex h-8 shrink-0 items-center gap-2 text-brand-navy"
      aria-label="GetFRP"
      role="img"
    >
      <BrandMark className="h-8 w-auto" />
      <span
        aria-hidden="true"
        className="text-[29px] font-semibold leading-none tracking-[-0.055em]"
      >
        getfrp
      </span>
    </span>
  );
}
