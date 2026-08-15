import assert from "node:assert/strict";
import test from "node:test";
import {
  buildChinaSourcingMapData,
  normalizeChinaProvince,
} from "./china-sourcing-map";

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
