import {
  CHINA_PROVINCE_MAP_REGIONS,
  type ChinaProvinceMapRegion,
} from "@/lib/data/china-province-map";

type CapacityMarker = {
  provinceId: string;
  number: string;
  province: string;
  value: string;
  material: string;
  company: string;
  tone: "glass" | "carbon";
};

const CAPACITY_MARKERS: readonly CapacityMarker[] = [
  {
    provinceId: "ZJ",
    number: "1",
    province: "Zhejiang",
    value: "2.0M t/yr",
    material: "glass fiber",
    company: "China Jushi",
    tone: "glass",
  },
  {
    provinceId: "CQ",
    number: "2",
    province: "Chongqing",
    value: "1.2M+ t/yr",
    material: "glass fiber",
    company: "CPIC",
    tone: "glass",
  },
  {
    provinceId: "SD",
    number: "3",
    province: "Shandong",
    value: "800K+ GF · 7.7K CF",
    material: "glass & carbon fiber",
    company: "Taishan · Guangwei",
    tone: "glass",
  },
  {
    provinceId: "JL",
    number: "4",
    province: "Jilin",
    value: "70K t/yr",
    material: "carbon fiber",
    company: "Jilin Chemical Fiber",
    tone: "carbon",
  },
  {
    provinceId: "JS",
    number: "5",
    province: "Jiangsu",
    value: "29K t/yr",
    material: "carbon fiber",
    company: "Zhongfu Shenying",
    tone: "carbon",
  },
] as const;

const REGION_FILL: Readonly<Record<string, string>> = {
  JL: "#176b78",
  HE: "#294e73",
  SD: "#1d7181",
  JS: "#27618a",
  SH: "#514f78",
  ZJ: "#1a7180",
  CQ: "#176b78",
  GD: "#294e73",
};

const MARKER_BY_PROVINCE = new Map(
  CAPACITY_MARKERS.map((marker) => [marker.provinceId, marker]),
);

function markerPosition(region: ChinaProvinceMapRegion) {
  const offsets: Readonly<Record<string, readonly [number, number]>> = {
    JL: [0, 0],
    SD: [1, 0],
    JS: [2, -1],
    ZJ: [2, 2],
    CQ: [0, 0],
  };
  const [offsetX, offsetY] = offsets[region.provinceId] ?? [0, 0];
  return {
    x: region.labelX + offsetX,
    y: region.labelY + offsetY,
  };
}

export function HomeChinaIndustryMap() {
  return (
    <div className="flex h-full flex-col bg-[radial-gradient(circle_at_72%_34%,rgba(25,195,200,0.13),transparent_34%),linear-gradient(145deg,rgba(5,23,40,0.64),rgba(10,31,68,0.18))] px-4 py-5 sm:px-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#7be4e1]">
            Capacity + capability geography
          </div>
          <h3 className="mt-1.5 text-lg font-semibold tracking-[-0.025em] text-white">
            China composite industry map
          </h3>
        </div>
        <div className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.13em] text-[#d9dfe8]">
          7 sourcing hubs
        </div>
      </div>

      <div className="mt-3 overflow-hidden rounded-xl border border-white/10 bg-[#061726]/75">
        <svg
          viewBox="125 70 675 455"
          className="h-auto w-full"
          role="img"
          aria-labelledby="home-china-map-title home-china-map-description"
          preserveAspectRatio="xMidYMid meet"
        >
          <title id="home-china-map-title">
            China composite material capacity and manufacturing cluster map
          </title>
          <desc id="home-china-map-description">
            A province map of China highlighting selected public glass-fiber
            and carbon-fiber capacity disclosures in Zhejiang, Chongqing,
            Shandong, Jilin and Jiangsu, together with downstream composite
            manufacturing clusters in Hebei and Guangdong.
          </desc>
          <defs>
            <filter id="home-map-marker-glow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g>
            {CHINA_PROVINCE_MAP_REGIONS.map((region) => {
              const marker = MARKER_BY_PROVINCE.get(region.provinceId);
              const capabilityFill = REGION_FILL[region.provinceId];
              const label = marker
                ? `${marker.province}: ${marker.value} ${marker.material}, ${marker.company}`
                : capabilityFill
                  ? `${region.provinceId}: representative composite manufacturing cluster`
                  : undefined;
              return (
                <path
                  key={region.provinceId}
                  d={region.path}
                  fill={capabilityFill ?? "#102f4b"}
                  fillRule="evenodd"
                  stroke={capabilityFill ? "#82deda" : "#496579"}
                  strokeWidth={capabilityFill ? 1.35 : 0.72}
                  vectorEffect="non-scaling-stroke"
                  opacity={capabilityFill ? 1 : 0.74}
                >
                  {label ? <title>{label}</title> : null}
                </path>
              );
            })}
          </g>

          <g aria-hidden="true" className="pointer-events-none">
            {CHINA_PROVINCE_MAP_REGIONS.map((region) => {
              const marker = MARKER_BY_PROVINCE.get(region.provinceId);
              if (!marker) return null;
              const { x, y } = markerPosition(region);
              const fill = marker.tone === "glass" ? "#7be4e1" : "#ff9f7a";
              return (
                <g key={marker.provinceId} transform={`translate(${x} ${y})`}>
                  <circle
                    r="18"
                    fill={fill}
                    opacity="0.18"
                    filter="url(#home-map-marker-glow)"
                  />
                  <circle
                    r="12.5"
                    fill={fill}
                    stroke="#f8fafc"
                    strokeWidth="1.5"
                    vectorEffect="non-scaling-stroke"
                  />
                  <text
                    y="0.5"
                    fill="#071d32"
                    fontSize="10"
                    fontWeight="800"
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    {marker.number}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>
      </div>

      <div className="mt-3 grid gap-1.5 sm:grid-cols-2">
        {CAPACITY_MARKERS.map((marker) => (
          <div
            key={marker.provinceId}
            className="flex min-w-0 items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.035] px-2.5 py-2"
          >
            <span
              className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-[#071d32]"
              style={{
                backgroundColor: marker.tone === "glass" ? "#7be4e1" : "#ff9f7a",
              }}
            >
              {marker.number}
            </span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-1.5">
                <span className="text-[10px] font-semibold text-white">
                  {marker.province}
                </span>
                <span className="font-mono text-[9px] font-semibold text-[#d9dfe8]">
                  {marker.value}
                </span>
              </div>
              <p className="truncate text-[8px] leading-3 text-[#9fb0c3]">
                {marker.material} · {marker.company}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 border-t border-white/10 pt-3 text-[9px] leading-4 text-[#b9c5d3]">
        <div className="flex flex-wrap gap-x-4 gap-y-1.5">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-sm bg-[#176b78]" />
            Reinforcement capacity anchors
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-sm bg-[#294e73]" />
            Finished FRP clusters
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-sm bg-[#514f78]" />
            Resin &amp; chemistry
          </span>
        </div>
        <p className="mt-1.5 text-[#91a3b7]">
          Selected company disclosures, not provincial totals. Downstream hubs:
          Hebei · Jiangsu · Shandong · Guangdong.
        </p>
      </div>
    </div>
  );
}
