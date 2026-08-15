import assert from "node:assert/strict";
import test from "node:test";
import {
  buildChinaSourcingMapData,
  CHINA_PROVINCES,
  normalizeChinaProvince,
} from "./china-sourcing-map";
import {
  CHINA_MAP_REFERENCE_PATHS,
  CHINA_PROVINCE_MAP_REGIONS,
} from "./china-province-map";

test("normalizes full Chinese administrative names and English province names", () => {
  assert.equal(normalizeChinaProvince("江苏省"), "江苏");
  assert.equal(normalizeChinaProvince("Chongqing"), "重庆");
  assert.equal(normalizeChinaProvince("广西壮族自治区"), "广西");
  assert.equal(normalizeChinaProvince("Unknown"), null);
});

test("builds province-by-category counts without inventing locations", () => {
  const data = buildChinaSourcingMapData(
    [
      { province: "江苏", category: "manufacturer" },
      { province: "江苏省", category: "fiber" },
      { province: "Shandong", category: "fiber" },
      { province: null, category: "resin" },
    ],
    [
      { id: "manufacturer", label: "Manufacturer" },
      { id: "fiber", label: "Fiber supplier" },
      { id: "resin", label: "Resin supplier" },
    ],
  );

  const jiangsu = data.provinces.find((province) => province.id === "江苏");
  const shandong = data.provinces.find((province) => province.id === "山东");

  assert.equal(data.total, 4);
  assert.equal(data.mappedTotal, 3);
  assert.equal(data.unmappedTotal, 1);
  assert.equal(jiangsu?.total, 2);
  assert.equal(jiangsu?.categoryCounts.fiber, 1);
  assert.equal(shandong?.categoryCounts.fiber, 1);
  assert.deepEqual(
    data.categories.map(({ id, total }) => [id, total]),
    [
      ["manufacturer", 1],
      ["fiber", 2],
      ["resin", 1],
    ],
  );
});

test("provides a geographic path for every province in the sourcing dataset", () => {
  assert.deepEqual(
    new Set(CHINA_PROVINCE_MAP_REGIONS.map((region) => region.provinceId)),
    new Set(CHINA_PROVINCES.map((province) => province.id)),
  );
  assert.ok(
    CHINA_PROVINCE_MAP_REGIONS.every((region) => region.path.startsWith("M")),
  );
  assert.ok(CHINA_MAP_REFERENCE_PATHS.length > 0);
});
