export type SourcingMapSupplierRow = {
  province: string | null;
  category: string | null;
};

export type SourcingMapCategoryInput = {
  id: string;
  label: string;
};

export type ChinaProvinceDefinition = {
  id: string;
  name: string;
  code: string;
};

export type ChinaSourcingMapProvince = ChinaProvinceDefinition & {
  total: number;
  categoryCounts: Record<string, number>;
};

export type ChinaSourcingMapCategory = SourcingMapCategoryInput & {
  total: number;
};

export type ChinaSourcingMapData = {
  total: number;
  mappedTotal: number;
  unmappedTotal: number;
  provinces: ChinaSourcingMapProvince[];
  categories: ChinaSourcingMapCategory[];
};

export const CHINA_PROVINCES: readonly ChinaProvinceDefinition[] = [
  { id: "新疆", name: "Xinjiang", code: "XJ" },
  { id: "西藏", name: "Tibet", code: "XZ" },
  { id: "青海", name: "Qinghai", code: "QH" },
  { id: "云南", name: "Yunnan", code: "YN" },
  { id: "甘肃", name: "Gansu", code: "GS" },
  { id: "四川", name: "Sichuan", code: "SC" },
  { id: "贵州", name: "Guizhou", code: "GZ" },
  { id: "广西", name: "Guangxi", code: "GX" },
  { id: "内蒙古", name: "Inner Mongolia", code: "NM" },
  { id: "宁夏", name: "Ningxia", code: "NX" },
  { id: "重庆", name: "Chongqing", code: "CQ" },
  { id: "湖南", name: "Hunan", code: "HN" },
  { id: "广东", name: "Guangdong", code: "GD" },
  { id: "海南", name: "Hainan", code: "HI" },
  { id: "陕西", name: "Shaanxi", code: "SN" },
  { id: "湖北", name: "Hubei", code: "HB" },
  { id: "江西", name: "Jiangxi", code: "JX" },
  { id: "香港", name: "Hong Kong", code: "HK" },
  { id: "山西", name: "Shanxi", code: "SX" },
  { id: "河南", name: "Henan", code: "HA" },
  { id: "安徽", name: "Anhui", code: "AH" },
  { id: "福建", name: "Fujian", code: "FJ" },
  { id: "澳门", name: "Macao", code: "MO" },
  { id: "北京", name: "Beijing", code: "BJ" },
  { id: "河北", name: "Hebei", code: "HE" },
  { id: "山东", name: "Shandong", code: "SD" },
  { id: "江苏", name: "Jiangsu", code: "JS" },
  { id: "浙江", name: "Zhejiang", code: "ZJ" },
  { id: "台湾", name: "Taiwan", code: "TW" },
  { id: "天津", name: "Tianjin", code: "TJ" },
  { id: "上海", name: "Shanghai", code: "SH" },
  { id: "辽宁", name: "Liaoning", code: "LN" },
  { id: "吉林", name: "Jilin", code: "JL" },
  { id: "黑龙江", name: "Heilongjiang", code: "HL" },
];

const PROVINCE_ALIASES: Readonly<Record<string, string>> = {
  北京市: "北京",
  天津市: "天津",
  河北省: "河北",
  山西省: "山西",
  内蒙古自治区: "内蒙古",
  辽宁省: "辽宁",
  吉林省: "吉林",
  黑龙江省: "黑龙江",
  上海市: "上海",
  江苏省: "江苏",
  浙江省: "浙江",
  安徽省: "安徽",
  福建省: "福建",
  江西省: "江西",
  山东省: "山东",
  河南省: "河南",
  湖北省: "湖北",
  湖南省: "湖南",
  广东省: "广东",
  广西壮族自治区: "广西",
  海南省: "海南",
  重庆市: "重庆",
  四川省: "四川",
  贵州省: "贵州",
  云南省: "云南",
  西藏自治区: "西藏",
  陕西省: "陕西",
  甘肃省: "甘肃",
  青海省: "青海",
  宁夏回族自治区: "宁夏",
  新疆维吾尔自治区: "新疆",
  台湾省: "台湾",
  香港特别行政区: "香港",
  澳门特别行政区: "澳门",
};

const PROVINCE_BY_ID = new Map(
  CHINA_PROVINCES.map((province) => [province.id, province]),
);
const PROVINCE_BY_ENGLISH_NAME = new Map(
  CHINA_PROVINCES.map((province) => [province.name.toLowerCase(), province.id]),
);

export function normalizeChinaProvince(value: string | null): string | null {
  const cleaned = value?.trim();
  if (!cleaned) return null;
  if (PROVINCE_BY_ID.has(cleaned)) return cleaned;
  if (PROVINCE_ALIASES[cleaned]) return PROVINCE_ALIASES[cleaned];
  return PROVINCE_BY_ENGLISH_NAME.get(cleaned.toLowerCase()) ?? null;
}

function fallbackCategoryLabel(id: string): string {
  return id
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function buildChinaSourcingMapData(
  rows: readonly SourcingMapSupplierRow[],
  categoryInputs: readonly SourcingMapCategoryInput[],
): ChinaSourcingMapData {
  const categoryLabels = new Map(
    categoryInputs.map((category) => [category.id, category.label]),
  );
  const categoryTotals = new Map<string, number>();
  const provinceCategoryCounts = new Map<string, Map<string, number>>();
  let mappedTotal = 0;

  for (const row of rows) {
    const category = row.category?.trim() || "manufacturer";
    categoryTotals.set(category, (categoryTotals.get(category) ?? 0) + 1);

    const province = normalizeChinaProvince(row.province);
    if (!province) continue;
    mappedTotal += 1;
    const counts = provinceCategoryCounts.get(province) ?? new Map<string, number>();
    counts.set(category, (counts.get(category) ?? 0) + 1);
    provinceCategoryCounts.set(province, counts);
  }

  const categoryOrder = new Map(
    categoryInputs.map((category, index) => [category.id, index]),
  );
  const categories = Array.from(categoryTotals, ([id, total]) => ({
    id,
    label: categoryLabels.get(id) ?? fallbackCategoryLabel(id),
    total,
  })).sort(
    (a, b) =>
      (categoryOrder.get(a.id) ?? Number.MAX_SAFE_INTEGER) -
        (categoryOrder.get(b.id) ?? Number.MAX_SAFE_INTEGER) ||
      b.total - a.total ||
      a.label.localeCompare(b.label),
  );

  const provinces = CHINA_PROVINCES.map((province) => {
    const counts = provinceCategoryCounts.get(province.id) ?? new Map<string, number>();
    return {
      ...province,
      total: Array.from(counts.values()).reduce((sum, count) => sum + count, 0),
      categoryCounts: Object.fromEntries(counts),
    };
  });

  return {
    total: rows.length,
    mappedTotal,
    unmappedTotal: rows.length - mappedTotal,
    provinces,
    categories,
  };
}
