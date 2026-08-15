export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 440 192"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M228 96C186 44 158 20 116 20C62 20 20 53 20 96C20 139 62 172 116 172C161 172 193 145 236 96"
        fill="none"
        stroke="currentColor"
        strokeWidth="28"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M232 96C278 45 320 24 388 24M251 116C295 74 334 56 396 56M271 136C311 104 347 92 392 92"
        fill="none"
        stroke="#19C3C8"
        strokeWidth="18"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({ eager = false }: { eager?: boolean }) {
  // Kept for call-site compatibility; an inline SVG has no asset to preload.
  void eager;

  return (
    <span
      className="inline-flex h-8 shrink-0 items-center gap-1.5 text-brand-navy"
      aria-label="GetFRP"
      role="img"
    >
      <BrandMark className="h-7 w-auto" />
      <span
        aria-hidden="true"
        className="text-[30px] font-bold leading-none tracking-[-0.065em]"
      >
        getfrp
      </span>
    </span>
  );
}
