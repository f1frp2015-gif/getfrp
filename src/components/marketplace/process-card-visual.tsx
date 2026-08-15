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

function SprayUpVisual() {
  return (
    <svg viewBox="0 0 320 128" role="presentation">
      <TechnicalGrid />
      <path className={styles.sprayMold} d="M44 88c35 21 78 27 116 27s81-6 116-27" />
      <g className={styles.sprayLaminate}>
        <path d="M56 87c31 15 67 20 104 20s73-5 104-20" />
        <path d="M65 85c29 12 61 16 95 16s67-4 95-16" />
      </g>
      <g className={styles.chopperGun}>
        <path d="M43 24h47l14 13-12 13H53z" />
        <path d="m56 49-5 24h14l11-24" />
        <circle cx="82" cy="37" r="7" />
        <path d="M104 37h24" />
      </g>
      <g className={styles.sprayFan}>
        <path d="m127 37 91 42" />
        <path d="m127 37 70 50" />
        <path d="m127 37 42 55" />
      </g>
      <g className={styles.choppedFibers}>
        <path d="m151 51 8 4m18 7 8 4m17 5 8 4m-62-6 8 4m18 6 8 4m17 3 8 4" />
      </g>
    </svg>
  );
}

function VacuumBaggingVisual() {
  return (
    <svg viewBox="0 0 320 128" role="presentation">
      <TechnicalGrid />
      <path className={styles.vacuumTool} d="M42 96h236" />
      <g className={styles.vacuumLaminate}>
        <path d="M71 83h178" />
        <path d="M71 88h178" />
        <path d="M71 93h178" />
      </g>
      <path className={styles.vacuumBag} d="M57 94V49c26-17 58-23 103-23s77 6 103 23v45" />
      <g className={styles.bagSeal}>
        <rect x="49" y="90" width="24" height="8" rx="3" />
        <rect x="247" y="90" width="24" height="8" rx="3" />
      </g>
      <g className={styles.vacuumPort}>
        <path d="M160 28V12h48" />
        <circle cx="214" cy="12" r="8" />
        <path d="m210 12 5-4" />
      </g>
      <g className={styles.vacuumArrows}>
        <path d="M102 49v23m-5-6 5 6 5-6M160 43v29m-5-6 5 6 5-6M218 49v23m-5-6 5 6 5-6" />
      </g>
    </svg>
  );
}

function VacuumInfusionVisual() {
  return (
    <svg viewBox="0 0 320 128" role="presentation">
      <TechnicalGrid />
      <g className={styles.infusionTool}>
        <rect x="55" y="39" width="210" height="57" rx="7" />
        <path d="M65 49h190M65 58h190M65 67h190M65 76h190M65 85h190" />
      </g>
      <path className={styles.infusionFront} d="M61 43h198v49H61z" />
      <g className={styles.infusionInlet}>
        <path d="M16 67h44" />
        <circle cx="17" cy="67" r="7" />
        <path d="m53 61 7 6-7 6" />
      </g>
      <g className={styles.infusionVacuum}>
        <path d="M260 67h42" />
        <circle cx="303" cy="67" r="7" />
        <path d="m267 61-7 6 7 6" />
      </g>
      <g className={styles.infusionBubbles}>
        <circle cx="94" cy="55" r="2.5" />
        <circle cx="131" cy="79" r="2" />
        <circle cx="174" cy="55" r="2.5" />
        <circle cx="214" cy="79" r="2" />
      </g>
    </svg>
  );
}

function AutoclaveVisual() {
  return (
    <svg viewBox="0 0 320 128" role="presentation">
      <TechnicalGrid />
      <g className={styles.autoclaveShell}>
        <path d="M49 28h219v76H49" />
        <ellipse cx="49" cy="66" rx="18" ry="38" />
        <ellipse cx="268" cy="66" rx="18" ry="38" />
        <path d="M54 39h208M54 93h208" />
      </g>
      <g className={styles.autoclaveTrolley}>
        <path d="M89 81h125v10H89z" />
        <circle cx="105" cy="96" r="5" />
        <circle cx="199" cy="96" r="5" />
        <path d="M103 79c17-21 72-21 93 0" />
        <path d="M111 76c16-14 59-14 76 0" />
      </g>
      <g className={styles.autoclaveHeat}>
        <path d="M118 66c-8-8 8-12 0-20M151 64c-8-8 8-12 0-20M184 66c-8-8 8-12 0-20" />
      </g>
      <g className={styles.pressureRings}>
        <ellipse cx="269" cy="66" rx="8" ry="22" />
        <ellipse cx="269" cy="66" rx="13" ry="30" />
      </g>
    </svg>
  );
}

function AfpVisual() {
  return (
    <svg viewBox="0 0 320 128" role="presentation">
      <TechnicalGrid />
      <path className={styles.afpTool} d="M36 101c45-35 92-48 143-44 43 3 77 17 106 44" />
      <g className={styles.afpCourses}>
        <path d="M54 94c39-26 80-35 125-32 36 3 66 13 91 32" />
        <path d="M65 89c35-20 73-27 114-24 32 2 58 10 80 24" />
        <path d="M79 83c31-14 64-19 100-16 26 2 49 7 67 16" />
      </g>
      <g className={styles.afpHead}>
        <path d="M121 18h45l13 18-13 21h-45l-10-21z" />
        <circle cx="157" cy="48" r="9" />
        <path d="M134 57v13M145 57v11M157 57v10" />
      </g>
      <g className={styles.afpTape}>
        <path d="M134 69 121 88M145 68l-10 17M157 67l-8 16" />
      </g>
      <g className={styles.afpDirection}>
        <DirectionArrow x={112} y={110} />
        <DirectionArrow x={151} y={110} />
      </g>
    </svg>
  );
}

function BraidingVisual() {
  return (
    <svg viewBox="0 0 320 128" role="presentation">
      <TechnicalGrid />
      <g className={styles.braidMandrel}>
        <path d="M94 51h165v31H94" />
        <ellipse cx="94" cy="66.5" rx="9" ry="15.5" />
        <ellipse cx="259" cy="66.5" rx="9" ry="15.5" />
      </g>
      <g className={styles.braidYarns}>
        <path d="m99 81 25-30m-3 31 26-31m-3 31 26-31m-3 31 26-31m-3 31 26-31m-3 31 25-30" />
        <path d="m99 52 25 30m-3-31 26 31m-3-31 26 31m-3-31 26 31m-3-31 26 31m-3-31 25 30" />
      </g>
      <g className={styles.braiderRing}>
        <ellipse cx="80" cy="66" rx="37" ry="51" />
        <ellipse cx="80" cy="66" rx="19" ry="32" />
        <circle cx="80" cy="15" r="5" />
        <circle cx="112" cy="40" r="5" />
        <circle cx="112" cy="92" r="5" />
        <circle cx="80" cy="117" r="5" />
        <circle cx="48" cy="92" r="5" />
        <circle cx="48" cy="40" r="5" />
      </g>
      <g className={styles.braidFeed}>
        <path d="M98 43 126 52M99 89l27-7" />
      </g>
    </svg>
  );
}

function CompositePrintingVisual() {
  return (
    <svg viewBox="0 0 320 128" role="presentation">
      <TechnicalGrid />
      <g className={styles.printerFrame}>
        <path d="M43 105V20h234v85M43 31h234M61 105h198" />
      </g>
      <g className={styles.printHead}>
        <rect x="107" y="35" width="48" height="24" rx="4" />
        <path d="M119 59h24l-5 15h-14z" />
        <path d="M131 74v9" />
      </g>
      <g className={styles.printLayers}>
        <path d="M91 101h138l-13-8H104z" />
        <path d="M104 93h112l-12-8h-88z" />
        <path d="M116 85h88l-13-8h-62z" />
      </g>
      <path className={styles.extrusionBead} d="M131 78c0 9 17 4 25 9s16 4 25 0" />
      <g className={styles.printDirection}>
        <DirectionArrow x={182} y={48} />
      </g>
      <g className={styles.fiberFeed}>
        <path d="M87 14h43v21" />
        <circle cx="78" cy="14" r="9" />
      </g>
    </svg>
  );
}

function ThermoplasticFormingVisual() {
  return (
    <svg viewBox="0 0 320 128" role="presentation">
      <TechnicalGrid />
      <g className={styles.thermoPress}>
        <path d="M60 22v88M260 22v88" />
        <path d="M49 22h22M249 22h22M49 110h22M249 110h22" />
      </g>
      <g className={styles.thermoUpperTool}>
        <path d="M91 29h138v17l-30 16h-78L91 46z" />
      </g>
      <path className={styles.heatedSheet} d="M83 70h154" />
      <g className={styles.thermoLowerTool}>
        <path d="M91 99h138V83l-30-16h-78L91 83z" />
      </g>
      <g className={styles.sheetHeat}>
        <path d="M113 63c-7-7 7-10 0-17M145 63c-7-7 7-10 0-17M177 63c-7-7 7-10 0-17M209 63c-7-7 7-10 0-17" />
      </g>
      <g className={styles.formingArrows}>
        <path d="M145 10v15m-5-5 5 5 5-5M175 10v15m-5-5 5 5 5-5" />
      </g>
    </svg>
  );
}

function ContinuousLaminationVisual() {
  return (
    <svg viewBox="0 0 320 128" role="presentation">
      <TechnicalGrid />
      <g className={styles.laminationInputs}>
        <path d="M18 33h58l41 31M18 64h99M18 95h58l41-31" />
        <circle cx="18" cy="33" r="8" />
        <circle cx="18" cy="64" r="8" />
        <circle cx="18" cy="95" r="8" />
      </g>
      <g className={styles.laminationRollers}>
        <circle cx="129" cy="47" r="16" />
        <circle cx="129" cy="81" r="16" />
        <path d="M129 31v32M113 47h32M129 65v32M113 81h32" />
      </g>
      <g className={styles.laminationPanel}>
        <path d="M145 59h157v18H145z" />
        <path d="M151 64h145M151 72h145" />
      </g>
      <g className={styles.cureLamps}>
        <path d="M186 24h71v17h-71z" />
        <path d="M197 41v10M221 41v10M245 41v10" />
      </g>
      <g className={styles.panelDirection}>
        <DirectionArrow x={223} y={94} />
        <DirectionArrow x={260} y={94} />
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
    case "spray-up":
      visual = <SprayUpVisual />;
      break;
    case "vacuum-bagging":
      visual = <VacuumBaggingVisual />;
      break;
    case "vacuum-infusion":
      visual = <VacuumInfusionVisual />;
      break;
    case "prepreg-autoclave":
      visual = <AutoclaveVisual />;
      break;
    case "automated-fiber-placement":
      visual = <AfpVisual />;
      break;
    case "fiber-braiding":
      visual = <BraidingVisual />;
      break;
    case "composite-3d-printing":
      visual = <CompositePrintingVisual />;
      break;
    case "thermoplastic-forming":
      visual = <ThermoplasticFormingVisual />;
      break;
    case "continuous-lamination":
      visual = <ContinuousLaminationVisual />;
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
