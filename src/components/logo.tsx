type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className = "size-8" }: BrandMarkProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="11" fill="#0A1F44" />
      <rect x="4.5" y="20" width="8" height="8" rx="1.5" fill="#E54B4B" />
      <path
        d="m13.5 12 12 12-12 12"
        fill="none"
        stroke="#FFFFFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4.6"
      />
      <path
        d="m21.5 12 12 12-12 12"
        fill="none"
        stroke="#7BE4E1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4.6"
      />
      <path
        d="m29.5 12 12 12-12 12"
        fill="none"
        stroke="#19C3C8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4.6"
      />
    </svg>
  );
}

function BrandRoute() {
  return (
    <svg
      aria-hidden="true"
      className="h-7 w-[43px] shrink-0"
      viewBox="0 0 62 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="16" width="9" height="9" rx="1.6" fill="#E54B4B" />
      <path
        d="m17 5 17 15-17 15"
        fill="none"
        stroke="#0A1F44"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5.2"
      />
      <path
        d="m27 5 17 15-17 15"
        fill="none"
        stroke="#123F8C"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5.2"
      />
      <path
        d="m37 5 17 15-17 15"
        fill="none"
        stroke="#19C3C8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5.2"
      />
    </svg>
  );
}

export function Logo() {
  return (
    <span
      className="inline-flex shrink-0 items-center whitespace-nowrap text-[24px] leading-none text-brand-navy"
      aria-label="GetFRP"
    >
      <span className="font-bold tracking-[-0.06em]">Get</span>
      <span className="mx-1.5 inline-flex items-center">
        <BrandRoute />
      </span>
      <span className="font-extrabold tracking-[-0.035em]">FRP</span>
    </span>
  );
}
