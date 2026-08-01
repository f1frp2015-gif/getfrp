// Extended per-fiber-system detail data: typical properties, grades, major
// brands, recommended applications. Matrix feasibility lives in matrix.ts.
// Keep strings bilingual-agnostic here — translations route through messages.

export type FiberDetail = {
  slug: string;
  /** Which resin slugs (from matrix.ts) pair well, ordered by practicality. */
  recommendedResins: string[];
  /** Which process slugs (from matrix.ts) this fiber is well-suited for. */
  recommendedProcesses: string[];
  /** Representative products / brands. Data is real public catalog. */
  brands: Array<{ name: string; region: "CN" | "Intl"; products: string }>;
  /** Property bands displayed as stat cards. */
  properties: Array<{ key: string; value: string }>;
};

export const FIBER_DETAIL: Record<string, FiberDetail> = {
  glass: {
    slug: "glass",
    recommendedResins: ["upr", "ver", "epoxy", "phenolic", "pu", "pa"],
    recommendedProcesses: [
      "hand-layup",
      "pultrusion",
      "winding",
      "rtm",
      "vartm",
      "smc",
    ],
    brands: [
      { name: "Jushi Group", region: "CN", products: "188 / 386 / 988 / EWR / EMC / TM7" },
      { name: "Taishan Fiberglass", region: "CN", products: "TDR / TCR / T438 / TWR / TM-S2" },
      { name: "Chongqing Polycomp International (CPIC)", region: "CN", products: "TufRov® 4588 / 4510 / 4575 / 4599" },
      { name: "Changhai", region: "CN", products: "Roving / fabric / chemicals" },
      { name: "Owens Corning", region: "Intl", products: "Advantex® / WindStrand® / HydroStrand™" },
      { name: "PPG / Nitto Boseki", region: "Intl", products: "ECR / high-modulus yarn" },
    ],
    properties: [
      { key: "density", value: "2.54 – 2.75 g/cm³" },
      { key: "tensile", value: "3.1 – 4.8 GPa" },
      { key: "modulus", value: "72 – 95 GPa" },
      { key: "elongation", value: "3.5 – 5.0%" },
      { key: "tempLimit", value: "Below 500 °C" },
      { key: "costLevel", value: "$ Low · mainstream industrial grade" },
    ],
  },
  carbon: {
    slug: "carbon",
    recommendedResins: ["epoxy", "bmi", "cyanate", "peek", "pps", "pa", "phenolic"],
    recommendedProcesses: [
      "pultrusion",
      "winding",
      "rtm",
      "hp-rtm",
      "vartm",
      "afp",
    ],
    brands: [
      { name: "Zhongfu Shenying", region: "CN", products: "T300 / T700 / T800" },
      { name: "Weihai Guangwei", region: "CN", products: "GW-T300-3K / prepreg" },
      { name: "Jiangsu Hengshen", region: "CN", products: "Kilotonne-scale T800 aerospace grade" },
      { name: "Jilin Chemical Fiber", region: "CN", products: "48K large-tow for wind energy" },
      { name: "Toray Industries", region: "Intl", products: "T300 / T700S / T800H / T1000G / M40J / M55J" },
      { name: "Mitsubishi Chemical / Teijin", region: "Intl", products: "Pyrofil / Tenax" },
    ],
    properties: [
      { key: "density", value: "1.76 – 1.95 g/cm³" },
      { key: "tensile", value: "3.4 – 6.7 GPa" },
      { key: "modulus", value: "220 – 570 GPa" },
      { key: "elongation", value: "1.2 – 2.1%" },
      { key: "tempLimit", value: "Below 500 °C (matrix-limited)" },
      { key: "costLevel", value: "$$$ High · structural grade" },
    ],
  },
  basalt: {
    slug: "basalt",
    recommendedResins: ["upr", "ver", "epoxy", "phenolic"],
    recommendedProcesses: [
      "pultrusion",
      "winding",
      "hand-layup",
      "vartm",
      "rtm",
    ],
    brands: [
      { name: "Sichuan Aerospace Tuoxin", region: "CN", products: "BF basalt fiber" },
      { name: "Zhejiang Shijin Jiwazhuang", region: "CN", products: "Basalt yarn / BF composite products" },
      { name: "Kamenny Vek (Russia)", region: "Intl", products: "BCF" },
      { name: "Mafic (Ireland)", region: "Intl", products: "Basalt roving" },
    ],
    properties: [
      { key: "density", value: "2.60 – 2.75 g/cm³" },
      { key: "tensile", value: "3.0 – 4.8 GPa" },
      { key: "modulus", value: "80 – 95 GPa" },
      { key: "elongation", value: "2.6 – 3.2%" },
      { key: "tempLimit", value: "700 °C service temperature" },
      { key: "costLevel", value: "$$ Medium · sustainable heat-resistant alternative" },
    ],
  },
  aramid: {
    slug: "aramid",
    recommendedResins: ["epoxy", "phenolic", "ver", "cyanate"],
    recommendedProcesses: ["hand-layup", "rtm", "vartm", "winding"],
    brands: [
      { name: "Yantai Taihe New Materials", region: "CN", products: "Para-aramid / meta-aramid" },
      { name: "Jiangsu Hongyi", region: "CN", products: "Meta-aramid staple fiber / pulp" },
      { name: "DuPont Kevlar (USA)", region: "Intl", products: "Kevlar 29 / 49 / 149" },
      { name: "Teijin Twaron (Netherlands / Japan)", region: "Intl", products: "Twaron 1000 / 2200" },
      { name: "Kolon Heracron (South Korea)", region: "Intl", products: "Heracron HF / HT" },
    ],
    properties: [
      { key: "density", value: "1.35 – 1.46 g/cm³" },
      { key: "tensile", value: "2.8 – 3.3 GPa" },
      { key: "modulus", value: "60 – 140 GPa" },
      { key: "elongation", value: "2.4 – 4.5%" },
      { key: "tempLimit", value: "LOI ≥ 28% · self-extinguishing" },
      { key: "costLevel", value: "$$$ High · protective grade" },
    ],
  },
  bio: {
    slug: "bio",
    recommendedResins: ["bio-epoxy", "upr", "epoxy", "pa"],
    recommendedProcesses: ["hand-layup", "rtm", "vartm", "smc"],
    brands: [
      { name: "Bcomp (Switzerland)", region: "Intl", products: "ampliTex® (flax)" },
      { name: "Ecotechnilin (France)", region: "Intl", products: "Flax fiber mat" },
      { name: "Lineo (Belgium)", region: "Intl", products: "Flax prepreg" },
      { name: "Changchun Jingkai CJETS", region: "CN", products: "Ramie fiber" },
      { name: "Zhejiang Jixiang Hemp", region: "CN", products: "Hemp fiber" },
    ],
    properties: [
      { key: "density", value: "1.30 – 1.50 g/cm³" },
      { key: "tensile", value: "0.4 – 1.5 GPa" },
      { key: "modulus", value: "30 – 70 GPa" },
      { key: "elongation", value: "1.6 – 3.0%" },
      { key: "tempLimit", value: "Below 200 °C" },
      { key: "costLevel", value: "$ Low · sustainable" },
    ],
  },
};
