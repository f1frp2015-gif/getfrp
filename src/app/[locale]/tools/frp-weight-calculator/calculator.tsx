"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";

const DENSITIES = [
  { label: "Pultruded GFRP profile", value: 1850 },
  { label: "Molded fiberglass laminate", value: 1800 },
  { label: "Fiberglass sheet / panel", value: 1900 },
  { label: "Carbon fiber / epoxy laminate", value: 1550 },
] as const;

export function FrpWeightCalculator() {
  const [shape, setShape] = useState<"rectangle" | "rod" | "tube">("rectangle");
  const [density, setDensity] = useState(1850);
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(10);
  const [outer, setOuter] = useState(50);
  const [wall, setWall] = useState(4);
  const [length, setLength] = useState(1);
  const mass = useMemo(() => {
    const mm2 = shape === "rectangle"
      ? width * height
      : shape === "rod"
        ? Math.PI * outer * outer / 4
        : Math.PI * (outer * outer - Math.max(0, outer - 2 * wall) ** 2) / 4;
    return density * mm2 * 1e-6 * length;
  }, [density, height, length, outer, shape, wall, width]);
  return <div className="rounded-xl border bg-background p-6">
    <div className="grid gap-4 sm:grid-cols-2">
      <label className="text-sm font-medium">Shape<select className="mt-1.5 w-full rounded-md border bg-background px-3 py-2" value={shape} onChange={(event) => setShape(event.target.value as typeof shape)}><option value="rectangle">Rectangular solid / plate</option><option value="rod">Round solid rod</option><option value="tube">Round tube</option></select></label>
      <label className="text-sm font-medium">Material density<select className="mt-1.5 w-full rounded-md border bg-background px-3 py-2" value={density} onChange={(event) => setDensity(Number(event.target.value))}>{DENSITIES.map((item) => <option key={item.label} value={item.value}>{item.label} — {item.value} kg/m³</option>)}</select></label>
      {shape === "rectangle" ? <><NumberField label="Width (mm)" value={width} set={setWidth} /><NumberField label="Thickness / height (mm)" value={height} set={setHeight} /></> : <NumberField label="Outside diameter (mm)" value={outer} set={setOuter} />}
      {shape === "tube" ? <NumberField label="Wall thickness (mm)" value={wall} set={setWall} /> : null}
      <NumberField label="Length (m)" value={length} set={setLength} step="0.1" />
    </div>
    <div className="mt-6 rounded-xl bg-foreground p-6 text-background"><div className="text-xs uppercase tracking-wider text-background/65">Estimated mass</div><div className="mt-2 text-4xl font-semibold">{Number.isFinite(mass) ? mass.toFixed(3) : "0.000"} kg</div><div className="mt-2 text-sm text-background/70">{length > 0 ? (mass / length).toFixed(3) : "0.000"} kg/m</div></div>
  </div>;
}

function NumberField({ label, value, set, step = "1" }: { label: string; value: number; set: (value: number) => void; step?: string }) { return <label className="text-sm font-medium">{label}<Input className="mt-1.5" type="number" min="0" step={step} value={value} onChange={(event) => set(Number(event.target.value))} /></label>; }
