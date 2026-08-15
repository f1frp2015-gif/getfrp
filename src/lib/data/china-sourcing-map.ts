export type SourcingMapSupplierRow = {
  province: string | null;
  category: string | null;
};

export type SourcingMapCategoryInput = {
  id: string;
  label: string;
};

export type ChinaProvinceTile = {
  id: string;
  name: string;
  code: string;
  column: number;
  row: number;
};

export type ChinaSourcingMapProvince = ChinaProvinceTile & {
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

// A geographic tile map keeps every province legible and clickable on small
// screens while preserving the broad north/south/east/west relationships.
// It also avoids implying survey-grade boundary precision in an aggregate
// sourcing visualization.
export const CHINA_PROVINCE_TILES: readonly ChinaProvinceTile[] = [
  { id: "新疆", name: "Xinjiang", code: "XJ", column: 1, row: 2 },
  { id: "西藏", name: "Tibet", code: "XZ", column: 1, row: 5 },
  { id: "青海", name: "Qinghai", code: "QH", column: 3, row: 4 },
  { id: "云南", name: "Yunnan", code: "YN", column: 3, row: 6 },
  { id: "甘肃", name: "Gansu", code: "GS", column: 4, row: 3 },
  { id: "四川", name: "Sichuan", code: "SC", column: 4, row: 5 },
  { id: "贵州", name: "Guizhou", code: "GZ", column: 4, row: 6 },
  { id: "广西", name: "Guangxi", code: "GX", column: 4, row: 7 },
  { id: "内蒙古", name: "Inner Mongolia", code: "NM", column: 5, row: 2 },
  { id: "宁夏", name: "Ningxia", code: "NX", column: 5, row: 3 },
  { id: "重庆", name: "Chongqing", code: "CQ", column: 5, row: 5 },
  { id: "湖南", name: "Hunan", code: "HN", column: 5, row: 6 },
  { id: "广东", name: "Guangdong", code: "GD", column: 5, row: 7 },
  { id: "海南", name: "Hainan", code: "HI", column: 5, row: 8 },
  { id: "陕西", name: "Shaanxi", code: "SN", column: 6, row: 4 },
  { id: "湖北", name: "Hubei", code: "HB", column: 6, row: 5 },
  { id: "江西", name: "Jiangxi", code: "JX", column: 6, row: 6 },
  { id: "香港", name: "Hong Kong", code: "HK", column: 6, row: 8 },
  { id: "山西", name: "Shanxi", code: "SX", column: 7, row: 3 },
  { id: "河南", name: "Henan", code: "HA", column: 7, row: 4 },
  { id: "安徽", name: "Anhui", code: "AH", column: 7, row: 5 },
  { id: "福建", name: "Fujian", code: "FJ", column: 7, row: 7 },
  { id: "澳门", name: "Macao", code: "MO", column: 7, row: 8 },
  { id: "北京", name: "Beijing", code: "BJ", column: 8, row: 2 },
  { id: "河北", name: "Hebei", code: "HE", column: 8, row: 3 },
  { id: "山东", name: "Shandong", code: "SD", column: 8, row: 4 },
  { id: "江苏", name: "Jiangsu", code: "JS", column: 8, row: 5 },
  { id: "浙江", name: "Zhejiang", code: "ZJ", column: 8, row: 6 },
  { id: "台湾", name: "Taiwan", code: "TW", column: 8, row: 7 },
  { id: "天津", name: "Tianjin", code: "TJ", column: 9, row: 3 },
  { id: "上海", name: "Shanghai", code: "SH", column: 9, row: 5 },
  { id: "辽宁", name: "Liaoning", code: "LN", column: 10, row: 3 },
  { id: "吉林", name: "Jilin", code: "JL", column: 10, row: 2 },
  { id: "黑龙江", name: "Heilongjiang", code: "HL", column: 10, row: 1 },
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

const TILE_BY_ID = new Map(CHINA_PROVINCE_TILES.map((tile) => [tile.id, tile]));
const TILE_BY_ENGLISH_NAME = new Map(
  CHINA_PROVINCE_TILES.map((tile) => [tile.name.toLowerCase(), tile.id]),
);

export function normalizeChinaProvince(value: string | null): string | null {
  const cleaned = value?.trim();
  if (!cleaned) return null;
  if (TILE_BY_ID.has(cleaned)) return cleaned;
  if (PROVINCE_ALIASES[cleaned]) return PROVINCE_ALIASES[cleaned];
  return TILE_BY_ENGLISH_NAME.get(cleaned.toLowerCase()) ?? null;
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

  const provinces = CHINA_PROVINCE_TILES.map((tile) => {
    const counts = provinceCategoryCounts.get(tile.id) ?? new Map<string, number>();
    return {
      ...tile,
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
