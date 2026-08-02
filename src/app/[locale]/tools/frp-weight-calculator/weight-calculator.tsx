"use client";

import { useMemo, useState } from "react";
import { Calculator, Scale } from "lucide-react";

type Shape = "plate" | "rod" | "tube";

const DENSITIES = [
  { label: "Pultruded GFRP (planning)", value: 1900 },
  { label: "Laminated / molded GFRP (planning)", value: 1800 },
  { label: "CFRP laminate (planning)", value: 1550 },
  { label: "BFRP composite (planning)", value: 2000 },
] as const;

function positive(value: string): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
}

export function FrpWeightCalculator() {
  const [shape, setShape] = useState<Shape>("plate");
  const [density, setDensity] = useState("1900");
  const [length, setLength] = useState("2");
  const [width, setWidth] = useState("1000");
  const [thickness, setThickness] = useState("6");
  const [diameter, setDiameter] = useState("25");
  const [outerDiameter, setOuterDiameter] = useState("50");
  const [wall, setWall] = useState("4");

  const result = useMemo(() => {
    const lengthM = positive(length);
    const densityKgM3 = positive(density);
    let volume = 0;
    if (shape === "plate") {
      volume = lengthM * (positive(width) / 1000) * (positive(thickness) / 1000);
    } else if (shape === "rod") {
      const radiusM = positive(diameter) / 2000;
      volume = Math.PI * radiusM * radiusM * lengthM;
    } else {
      const outerRadiusM = positive(outerDiameter) / 2000;
      const innerRadiusM = Math.max(0, outerRadiusM - positive(wall) / 1000);
      volume = Math.PI * (outerRadiusM ** 2 - innerRadiusM ** 2) * lengthM;
    }
    const kg = volume * densityKgM3;
    return { volume, kg, lb: kg * 2.2046226218 };
  }, [density, diameter, length, outerDiameter, shape, thickness, wall, width]);

  const inputClass =
    "mt-1.5 h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-[#0a756f] focus:ring-2 focus:ring-[#0a756f]/15";

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <div className="rounded-xl border border-border/70 bg-background p-5 sm:p-6">
        <div className="flex items-center gap-2">
          <Calculator size={18} className="text-[#0a756f]" />
          <h2 className="font-semibold">Dimensions and material</h2>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-medium">
            Shape
            <select value={shape} onChange={(event) => setShape(event.target.value as Shape)} className={inputClass}>
              <option value="plate">Solid plate / rectangular bar</option>
              <option value="rod">Solid round rod</option>
              <option value="tube">Round tube</option>
            </select>
          </label>
          <label className="text-sm font-medium">
            Density preset
            <select value={density} onChange={(event) => setDensity(event.target.value)} className={inputClass}>
              {DENSITIES.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
            </select>
          </label>
          <label className="text-sm font-medium">
            Density (kg/m³)
            <input type="number" min="1" step="1" value={density} onChange={(event) => setDensity(event.target.value)} className={inputClass} />
          </label>
          <label className="text-sm font-medium">
            Length (m)
            <input type="number" min="0" step="0.01" value={length} onChange={(event) => setLength(event.target.value)} className={inputClass} />
          </label>
          {shape === "plate" && (
            <>
              <label className="text-sm font-medium">
                Width (mm)
                <input type="number" min="0" step="0.1" value={width} onChange={(event) => setWidth(event.target.value)} className={inputClass} />
              </label>
              <label className="text-sm font-medium">
                Thickness (mm)
                <input type="number" min="0" step="0.1" value={thickness} onChange={(event) => setThickness(event.target.value)} className={inputClass} />
              </label>
            </>
          )}
          {shape === "rod" && (
            <label className="text-sm font-medium">
              Diameter (mm)
              <input type="number" min="0" step="0.1" value={diameter} onChange={(event) => setDiameter(event.target.value)} className={inputClass} />
            </label>
          )}
          {shape === "tube" && (
            <>
              <label className="text-sm font-medium">
                Outside diameter (mm)
                <input type="number" min="0" step="0.1" value={outerDiameter} onChange={(event) => setOuterDiameter(event.target.value)} className={inputClass} />
              </label>
              <label className="text-sm font-medium">
                Wall thickness (mm)
                <input type="number" min="0" step="0.1" value={wall} onChange={(event) => setWall(event.target.value)} className={inputClass} />
              </label>
            </>
          )}
        </div>
      </div>

      <aside className="rounded-xl border border-[#8dbab5] bg-[#eef7f6] p-6">
        <div className="flex items-center gap-2 text-[#0a756f]">
          <Scale size={18} />
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em]">Estimated weight</span>
        </div>
        <div className="mt-6 text-4xl font-semibold tracking-tight text-[#0b2938]">
          {result.kg.toLocaleString(undefined, { maximumFractionDigits: 3 })} kg
        </div>
        <div className="mt-2 text-sm text-[#526d75]">
          {result.lb.toLocaleString(undefined, { maximumFractionDigits: 3 })} lb
        </div>
        <div className="mt-6 border-t border-[#bad5d1] pt-4 text-xs leading-6 text-[#60777e]">
          Volume: {result.volume.toLocaleString(undefined, { maximumFractionDigits: 6 })} m³
        </div>
        <p className="mt-4 text-[11px] leading-5 text-[#60777e]">
          Planning estimate only. Use the supplier&apos;s mass per meter, mass per square meter or approved sample for purchasing and freight release.
        </p>
      </aside>
    </div>
  );
}
