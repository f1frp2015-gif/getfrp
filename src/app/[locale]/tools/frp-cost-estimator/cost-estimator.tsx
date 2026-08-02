"use client";

import { useMemo, useState } from "react";
import { Calculator, CircleDollarSign } from "lucide-react";

function amount(value: string): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
}

export function FrpCostEstimator() {
  const [currency, setCurrency] = useState("USD");
  const [quantity, setQuantity] = useState("1000");
  const [unitPrice, setUnitPrice] = useState("25");
  const [internationalFreight, setInternationalFreight] = useState("3500");
  const [dutyRate, setDutyRate] = useState("5");
  const [inspection, setInspection] = useState("600");
  const [domesticDelivery, setDomesticDelivery] = useState("800");
  const [contingencyRate, setContingencyRate] = useState("3");

  const result = useMemo(() => {
    const qty = amount(quantity);
    const goods = qty * amount(unitPrice);
    const freight = amount(internationalFreight);
    const duty = (goods + freight) * (amount(dutyRate) / 100);
    const beforeContingency = goods + freight + duty + amount(inspection) + amount(domesticDelivery);
    const contingency = beforeContingency * (amount(contingencyRate) / 100);
    const landed = beforeContingency + contingency;
    return { qty, goods, duty, contingency, landed, landedUnit: qty > 0 ? landed / qty : 0 };
  }, [contingencyRate, domesticDelivery, dutyRate, inspection, internationalFreight, quantity, unitPrice]);

  const money = (value: number) => new Intl.NumberFormat("en-US", { style: "currency", currency, maximumFractionDigits: 2 }).format(value);
  const inputClass = "mt-1.5 h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-[#0a756f] focus:ring-2 focus:ring-[#0a756f]/15";

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
      <div className="rounded-xl border border-border/70 bg-background p-5 sm:p-6">
        <div className="flex items-center gap-2"><Calculator size={18} className="text-[#0a756f]" /><h2 className="font-semibold">Quote and landed-cost inputs</h2></div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-medium">Currency<select value={currency} onChange={(event) => setCurrency(event.target.value)} className={inputClass}><option>USD</option><option>EUR</option><option>GBP</option><option>AUD</option><option>CAD</option></select></label>
          <label className="text-sm font-medium">Quantity / billable units<input type="number" min="0" step="1" value={quantity} onChange={(event) => setQuantity(event.target.value)} className={inputClass} /></label>
          <label className="text-sm font-medium">Supplier unit price<input type="number" min="0" step="0.01" value={unitPrice} onChange={(event) => setUnitPrice(event.target.value)} className={inputClass} /></label>
          <label className="text-sm font-medium">International freight<input type="number" min="0" step="1" value={internationalFreight} onChange={(event) => setInternationalFreight(event.target.value)} className={inputClass} /></label>
          <label className="text-sm font-medium">Planning duty rate (%)<input type="number" min="0" step="0.1" value={dutyRate} onChange={(event) => setDutyRate(event.target.value)} className={inputClass} /></label>
          <label className="text-sm font-medium">Inspection / testing<input type="number" min="0" step="1" value={inspection} onChange={(event) => setInspection(event.target.value)} className={inputClass} /></label>
          <label className="text-sm font-medium">Destination delivery<input type="number" min="0" step="1" value={domesticDelivery} onChange={(event) => setDomesticDelivery(event.target.value)} className={inputClass} /></label>
          <label className="text-sm font-medium">Contingency (%)<input type="number" min="0" step="0.1" value={contingencyRate} onChange={(event) => setContingencyRate(event.target.value)} className={inputClass} /></label>
        </div>
      </div>

      <aside className="rounded-xl border border-[#8dbab5] bg-[#eef7f6] p-6">
        <div className="flex items-center gap-2 text-[#0a756f]"><CircleDollarSign size={18} /><span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em]">Estimated landed cost</span></div>
        <div className="mt-6 text-4xl font-semibold tracking-tight text-[#0b2938]">{money(result.landed)}</div>
        <div className="mt-2 text-sm text-[#526d75]">{money(result.landedUnit)} per billable unit</div>
        <dl className="mt-6 space-y-2 border-t border-[#bad5d1] pt-4 text-xs text-[#60777e]">
          <div className="flex justify-between gap-4"><dt>Goods</dt><dd>{money(result.goods)}</dd></div>
          <div className="flex justify-between gap-4"><dt>Planning duty</dt><dd>{money(result.duty)}</dd></div>
          <div className="flex justify-between gap-4"><dt>Contingency</dt><dd>{money(result.contingency)}</dd></div>
        </dl>
        <p className="mt-5 text-[11px] leading-5 text-[#60777e]">Directional estimate only. Classification, customs value, trade remedies, taxes, brokerage, demurrage and destination charges require shipment-specific confirmation.</p>
      </aside>
    </div>
  );
}
