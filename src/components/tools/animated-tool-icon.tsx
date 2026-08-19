import styles from "./animated-tool-icon.module.css";

export type ToolIconKind =
  | "weight"
  | "standards"
  | "calculator"
  | "span"
  | "price"
  | "thermal"
  | "method"
  | "validation";

function IconShell({ kind, children }: { kind: ToolIconKind; children: React.ReactNode }) {
  return (
    <svg
      aria-hidden="true"
      className={`${styles.root} ${styles[kind]}`}
      fill="none"
      focusable="false"
      viewBox="0 0 72 72"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className={styles.tile} height="64" rx="18" width="64" x="4" y="4" />
      {children}
    </svg>
  );
}

function WeightIcon() {
  return (
    <IconShell kind="weight">
      <g className={styles.mass}>
        <rect className={`${styles.softAqua} ${styles.ink}`} height="21" rx="3" strokeWidth="1.8" width="28" x="20" y="18" />
        <rect className={styles.ink} height="9" rx="1.5" strokeWidth="1.5" width="14" x="27" y="24" />
      </g>
      <path className={`${styles.measure} ${styles.aqua}`} d="M18 46h32m-32-3v6m32-6v6m-28-3 3-2m-3 2 3 2m21-2-3-2m3 2-3 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path className={`${styles.measure} ${styles.aqua}`} d="M55 18v21m-3-21h6m-6 21h6m-3-17-2 3m2-3 2 3m-2 10-2-3m2 3 2-3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path className={`${styles.scaleNeedle} ${styles.warm}`} d="M31 53h10m-8-6 3 6 3-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      <path className={styles.ink} d="M24 57h24" strokeLinecap="round" strokeWidth="1.8" />
    </IconShell>
  );
}

function StandardsIcon() {
  return (
    <IconShell kind="standards">
      <g className={styles.standardPage}>
        <path className={`${styles.softAqua} ${styles.ink}`} d="M14 18h17l4 4v33H14V18Z" strokeLinejoin="round" strokeWidth="1.7" />
        <path className={styles.ink} d="M31 18v5h4M19 29h10M19 35h8M19 41h10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
      </g>
      <g className={styles.standardPage}>
        <path className={`${styles.softWarm} ${styles.ink}`} d="M38 18h16l4 4v33H38V18Z" strokeLinejoin="round" strokeWidth="1.7" />
        <path className={styles.ink} d="M54 18v5h4M43 29h9M43 35h10M43 41h8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
      </g>
      <path className={`${styles.compareArrow} ${styles.aqua}`} d="m29 47 4 3-4 3m14 0-4-3 4-3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </IconShell>
  );
}

function CalculatorIcon() {
  return (
    <IconShell kind="calculator">
      <rect className={styles.softAqua} height="46" rx="7" width="36" x="18" y="13" />
      <rect className={styles.ink} height="46" rx="7" strokeWidth="1.8" width="36" x="18" y="13" />
      <rect fill="white" height="11" rx="2.5" width="24" x="24" y="20" />
      <path className={`${styles.result} ${styles.aqua}`} d="M28 26h16" strokeLinecap="round" strokeWidth="2" />
      <g>
        <rect className={styles.key} fill="#dfe9f6" height="6" rx="2" width="6" x="24" y="37" />
        <rect className={styles.key} fill="#dfe9f6" height="6" rx="2" width="6" x="33" y="37" />
        <rect className={styles.key} fill="#dfe9f6" height="6" rx="2" width="6" x="24" y="47" />
        <rect className={styles.key} fill="#dfe9f6" height="6" rx="2" width="6" x="33" y="47" />
      </g>
      <rect fill="#123f8c" height="16" rx="3" width="6" x="42" y="37" />
    </IconShell>
  );
}

function SpanIcon() {
  return (
    <IconShell kind="span">
      <path className={styles.ink} d="M15 54h42M19 54V43m34 11V43" strokeLinecap="round" strokeWidth="1.8" />
      <path className={`${styles.beam} ${styles.navy}`} d="M17 42c11 0 14 3 19 3s8-3 19-3" strokeLinecap="round" strokeWidth="3.2" />
      <g className={`${styles.loadArrow} ${styles.aqua}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
        <path d="M25 18v16m-4-4 4 4 4-4" />
      </g>
      <g className={`${styles.loadArrow} ${styles.aqua}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
        <path d="M36 15v19m-4-4 4 4 4-4" />
      </g>
      <g className={`${styles.loadArrow} ${styles.aqua}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
        <path d="M47 18v16m-4-4 4 4 4-4" />
      </g>
      <circle fill="#f0a43c" r="2.5" cx="36" cy="45" />
    </IconShell>
  );
}

function PriceIcon() {
  return (
    <IconShell kind="price">
      <path className={styles.ink} d="M15 48h42" strokeLinecap="round" strokeWidth="1.8" />
      <g>
        <ellipse className={`${styles.coin} ${styles.softWarm} ${styles.warm}`} cx="24" cy="43" rx="7" ry="3.2" strokeWidth="1.6" />
        <ellipse className={`${styles.coin} ${styles.softWarm} ${styles.warm}`} cx="24" cy="37" rx="7" ry="3.2" strokeWidth="1.6" />
        <ellipse className={`${styles.coin} ${styles.softWarm} ${styles.warm}`} cx="24" cy="31" rx="7" ry="3.2" strokeWidth="1.6" />
        <ellipse className={`${styles.coin} ${styles.softWarm} ${styles.warm}`} cx="24" cy="25" rx="7" ry="3.2" strokeWidth="1.6" />
      </g>
      <path className={styles.ink} d="M38 21h10l8 8-16 16-8-8 16-16" fill="white" strokeLinejoin="round" strokeWidth="1.8" />
      <circle className={styles.aqua} cx="48" cy="29" r="2.2" strokeWidth="1.6" />
      <path className={styles.navy} d="M45 33.5c-1.2-1.1-3.4-.3-3.4 1.2 0 2.4 5.8.8 5.8 3.3 0 1.6-2.3 2.3-3.8 1.1m1-7v8.5" strokeLinecap="round" strokeWidth="1.6" />
    </IconShell>
  );
}

function ThermalIcon() {
  return (
    <IconShell kind="thermal">
      <rect className={styles.ink} height="38" rx="3" strokeWidth="1.8" width="24" x="24" y="17" />
      <path className={styles.ink} d="M36 18v36M25 36h22" strokeWidth="1.4" />
      <path className={styles.aqua} d="M13 29c3-3 5 3 8 0M13 36c3-3 5 3 8 0M13 43c3-3 5 3 8 0" strokeLinecap="round" strokeWidth="1.7" />
      <g className={styles.sunRays}>
        <circle className={styles.warm} cx="57" cy="23" r="4" strokeWidth="1.7" />
        <path className={styles.warm} d="M57 15v-3m0 22v-3m8-8h3m-22 0h3m13.7-5.7 2.1-2.1M49.2 30.8l2.1-2.1m11.4 0 2.1 2.1M49.2 15.2l2.1 2.1" strokeLinecap="round" strokeWidth="1.5" />
      </g>
      <g fill="#20b8b3">
        <circle className={styles.flowDot} cx="29" cy="36" r="1.8" />
        <circle className={styles.flowDot} cx="36" cy="36" r="1.8" />
        <circle className={styles.flowDot} cx="43" cy="36" r="1.8" />
      </g>
    </IconShell>
  );
}

function MethodIcon() {
  return (
    <IconShell kind="method">
      <path className={`${styles.softAqua} ${styles.ink}`} d="M18 17h29l7 7v31H18V17Z" strokeLinejoin="round" strokeWidth="1.8" />
      <path className={`${styles.pageCorner} ${styles.ink}`} d="M47 17v8h7" fill="white" strokeLinejoin="round" strokeWidth="1.8" />
      <path className={`${styles.formula} ${styles.aqua}`} d="M25 29h14" strokeLinecap="round" strokeWidth="2" />
      <path className={`${styles.formula} ${styles.ink}`} d="M25 36h22" strokeLinecap="round" strokeWidth="1.7" />
      <path className={`${styles.formula} ${styles.ink}`} d="M25 43h16" strokeLinecap="round" strokeWidth="1.7" />
      <path className={styles.warm} d="m37 52 13-13 4 4-13 13-5 1 1-5Z" fill="white" strokeLinejoin="round" strokeWidth="1.7" />
    </IconShell>
  );
}

function ValidationIcon() {
  return (
    <IconShell kind="validation">
      <g className={styles.orbit}>
        <circle className={styles.aqua} cx="36" cy="36" r="23" strokeDasharray="2 6" strokeLinecap="round" strokeWidth="1.6" />
        <circle fill="#20b8b3" cx="36" cy="13" r="2.6" />
        <circle fill="#f0a43c" cx="56" cy="47" r="2.2" />
      </g>
      <path className={`${styles.softAqua} ${styles.ink}`} d="M36 20c5 4 10 4 15 5v10c0 9-6 15-15 19-9-4-15-10-15-19V25c5-1 10-1 15-5Z" strokeLinejoin="round" strokeWidth="1.8" />
      <path className={`${styles.check} ${styles.aqua}`} d="m28.5 36 5 5 10-11" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
    </IconShell>
  );
}

const icons: Record<ToolIconKind, () => React.JSX.Element> = {
  weight: WeightIcon,
  standards: StandardsIcon,
  calculator: CalculatorIcon,
  span: SpanIcon,
  price: PriceIcon,
  thermal: ThermalIcon,
  method: MethodIcon,
  validation: ValidationIcon,
};

export function AnimatedToolIcon({ kind }: { kind: ToolIconKind }) {
  const Icon = icons[kind];
  return <Icon />;
}
