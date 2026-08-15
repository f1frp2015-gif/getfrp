import type { ReactNode } from "react";
import styles from "./process-card-visual.module.css";

type ProcessCardVisualProps = {
  process: string;
};

function TechnicalGrid() {
  return (
    <g className={styles.grid}>
      <path d="M0 32H320M0 64H320M0 96H320" />
      <path d="M40 0V128M80 0V128M120 0V128M160 0V128M200 0V128M240 0V128M280 0V128" />
    </g>
  );
}

function DirectionArrow({ x, y }: { x: number; y: number }) {
  return (
    <path
      className={styles.directionArrow}
      d={`M${x} ${y}h18m-5-5 5 5-5 5`}
    />
  );
}

function PultrusionVisual() {
  return (
    <svg viewBox="0 0 320 128" role="presentation">
      <TechnicalGrid />
      <g className={styles.pultrusionFibers}>
        <path d="M18 52H154" />
        <path d="M18 60H154" />
        <path d="M18 68H154" />
        <path d="M18 76H154" />
      </g>
      <path className={styles.resinBath} d="M72 45h57l-8 42H80z" />
      <path className={styles.resinSurface} d="M76 62c9-5 18 5 27 0s17 5 24 0" />
      <g className={styles.pultrusionDie}>
        <path d="M146 38h48l11 14v28l-11 12h-48z" />
        <path d="M154 58h43M154 72h43" />
      </g>
      <g className={styles.pultrusionProfile}>
        <rect x="201" y="56" width="99" height="19" rx="2" />
        <path d="M207 61h87M207 69h87" />
      </g>
      <g className={styles.pullArrows}>
        <DirectionArrow x={218} y={94} />
        <DirectionArrow x={254} y={94} />
      </g>
    </svg>
  );
}

function FilamentWindingVisual() {
  return (
    <svg viewBox="0 0 320 128" role="presentation">
      <TechnicalGrid />
      <g className={styles.rovingSpool}>
        <circle cx="37" cy="63" r="20" />
        <circle cx="37" cy="63" r="7" />
        <path d="M17 63h40M37 43v40" />
      </g>
      <path className={styles.feedTow} d="M55 57 90 48" />
      <g className={styles.mandrel}>
        <path d="M93 42h147v43H93" />
        <ellipse cx="93" cy="63.5" rx="12" ry="21.5" />
        <ellipse cx="240" cy="63.5" rx="12" ry="21.5" />
        <path className={styles.mandrelHighlight} d="M98 51h138M98 76h138" />
      </g>
      <g className={styles.windingBands}>
        <path d="m96 82 32-38m-6 40 34-41m-7 41 34-41m-7 41 34-41m-7 40 30-36" />
        <path d="m101 44 34 40m-7-41 35 41m-7-41 35 41m-7-41 35 41m-7-41 26 31" />
      </g>
      <g className={styles.windingCarriage}>
        <rect x="116" y="98" width="32" height="11" rx="3" />
        <path d="M132 98V84" />
      </g>
      <g className={styles.spinMarks}>
        <path d="M259 48c12 8 12 23 0 31" />
        <path d="m266 76-7 3 1-7" />
      </g>
    </svg>
  );
}

function HandLayupVisual() {
  return (
    <svg viewBox="0 0 320 128" role="presentation">
      <TechnicalGrid />
      <path className={styles.openMold} d="M36 54c25 43 67 55 124 55s99-12 124-55" />
      <g className={styles.laminateLayers}>
        <path d="M47 59c25 34 62 43 113 43s88-9 113-43" />
        <path d="M56 64c25 26 58 33 104 33s79-7 104-33" />
        <path d="M66 69c24 19 54 23 94 23s70-4 94-23" />
      </g>
      <path className={styles.wetOutTrail} d="M79 72c23 14 49 18 81 18s59-4 82-18" />
      <g className={styles.layupRoller}>
        <path d="m141 23 18 28" />
        <path d="m134 21 8-5 8 13-8 5z" />
        <rect x="148" y="48" width="43" height="14" rx="7" />
        <path d="M153 55h33" />
      </g>
      <g className={styles.laminateBubbles}>
        <circle cx="112" cy="78" r="3" />
        <circle cx="158" cy="84" r="2.5" />
        <circle cx="205" cy="80" r="3" />
      </g>
    </svg>
  );
}

function SmcMoldingVisual() {
  return (
    <svg viewBox="0 0 320 128" role="presentation">
      <TechnicalGrid />
      <g className={styles.pressColumns}>
        <path d="M57 22v88M263 22v88" />
        <path d="M46 22h22M252 22h22M46 110h22M252 110h22" />
      </g>
      <g className={styles.upperMold}>
        <path d="M87 31h146v18l-24 14h-98L87 49z" />
        <path d="M104 31V20h112v11" />
      </g>
      <g className={styles.smcCharge}>
        <path d="M128 76c9-10 20-13 32-7 12-7 26-3 32 7l-8 11h-48z" />
      </g>
      <g className={styles.lowerMold}>
        <path d="M87 97h146V82l-24-13h-98L87 82z" />
        <path d="M103 97v11h114V97" />
      </g>
      <g className={styles.pressPulse}>
        <path d="M148 11v12m-5-5 5 5 5-5M172 11v12m-5-5 5 5 5-5" />
      </g>
    </svg>
  );
}

function RtmVisual() {
  return (
    <svg viewBox="0 0 320 128" role="presentation">
      <TechnicalGrid />
      <g className={styles.rtmMold}>
        <path d="M55 36h207l15 18v38H42V54z" />
        <path d="M55 92h207M68 47h181l10 12v21H60V59z" />
      </g>
      <g className={styles.rtmPreform}>
        <path d="M68 52h181M68 59h181M68 66h181M68 73h181" />
      </g>
      <path className={styles.rtmResinFront} d="M61 49h195v29H61z" />
      <g className={styles.rtmInlet}>
        <path d="M20 64h40" />
        <path d="m53 58 7 6-7 6" />
        <circle cx="21" cy="64" r="7" />
      </g>
      <g className={styles.rtmOutlet}>
        <path d="M259 64h39" />
        <circle cx="299" cy="64" r="7" />
      </g>
      <g className={styles.resinParticles}>
        <circle cx="87" cy="58" r="2.5" />
        <circle cx="122" cy="70" r="2" />
        <circle cx="160" cy="58" r="2.5" />
        <circle cx="197" cy="70" r="2" />
        <circle cx="230" cy="58" r="2.5" />
      </g>
    </svg>
  );
}

export function ProcessCardVisual({ process }: ProcessCardVisualProps) {
  let visual: ReactNode;

  switch (process) {
    case "pultrusion":
      visual = <PultrusionVisual />;
      break;
    case "filament-winding":
      visual = <FilamentWindingVisual />;
      break;
    case "hand-layup":
      visual = <HandLayupVisual />;
      break;
    case "smc-molding":
      visual = <SmcMoldingVisual />;
      break;
    case "rtm":
      visual = <RtmVisual />;
      break;
    default:
      return null;
  }

  return (
    <div
      aria-hidden="true"
      className={styles.stage}
      data-process-animation={process}
    >
      {visual}
      <div className={styles.scanLine} />
    </div>
  );
}
