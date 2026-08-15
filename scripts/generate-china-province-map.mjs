import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const SOURCE_URL =
  "https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json";
const DEFAULT_OUTPUT = "src/lib/data/china-province-map.ts";
const WIDTH = 900;
const HEIGHT = 620;
const PADDING = 18;
const MIN_LONGITUDE = 73;
const MAX_LONGITUDE = 136;
const MIN_LATITUDE = 3;
const MAX_LATITUDE = 54.5;
const SIMPLIFY_TOLERANCE = 0.5;

const PROVINCE_IDS = new Map([
  ["北京市", "北京"],
  ["天津市", "天津"],
  ["河北省", "河北"],
  ["山西省", "山西"],
  ["内蒙古自治区", "内蒙古"],
  ["辽宁省", "辽宁"],
  ["吉林省", "吉林"],
  ["黑龙江省", "黑龙江"],
  ["上海市", "上海"],
  ["江苏省", "江苏"],
  ["浙江省", "浙江"],
  ["安徽省", "安徽"],
  ["福建省", "福建"],
  ["江西省", "江西"],
  ["山东省", "山东"],
  ["河南省", "河南"],
  ["湖北省", "湖北"],
  ["湖南省", "湖南"],
  ["广东省", "广东"],
  ["广西壮族自治区", "广西"],
  ["海南省", "海南"],
  ["重庆市", "重庆"],
  ["四川省", "四川"],
  ["贵州省", "贵州"],
  ["云南省", "云南"],
  ["西藏自治区", "西藏"],
  ["陕西省", "陕西"],
  ["甘肃省", "甘肃"],
  ["青海省", "青海"],
  ["宁夏回族自治区", "宁夏"],
  ["新疆维吾尔自治区", "新疆"],
  ["台湾省", "台湾"],
  ["香港特别行政区", "香港"],
  ["澳门特别行政区", "澳门"],
]);

function mercator(latitude) {
  const radians = (Math.max(-85, Math.min(85, latitude)) * Math.PI) / 180;
  return Math.log(Math.tan(Math.PI / 4 + radians / 2));
}

const minX = (MIN_LONGITUDE * Math.PI) / 180;
const maxX = (MAX_LONGITUDE * Math.PI) / 180;
const minY = mercator(MIN_LATITUDE);
const maxY = mercator(MAX_LATITUDE);
const scale = Math.min(
  (WIDTH - PADDING * 2) / (maxX - minX),
  (HEIGHT - PADDING * 2) / (maxY - minY),
);
const offsetX = (WIDTH - (maxX - minX) * scale) / 2;
const offsetY = (HEIGHT - (maxY - minY) * scale) / 2;

function project([longitude, latitude]) {
  return [
    offsetX + ((longitude * Math.PI) / 180 - minX) * scale,
    offsetY + (maxY - mercator(latitude)) * scale,
  ];
}

function distanceToSegment(point, start, end) {
  const dx = end[0] - start[0];
  const dy = end[1] - start[1];
  if (dx === 0 && dy === 0) return Math.hypot(point[0] - start[0], point[1] - start[1]);
  const amount = Math.max(
    0,
    Math.min(
      1,
      ((point[0] - start[0]) * dx + (point[1] - start[1]) * dy) /
        (dx * dx + dy * dy),
    ),
  );
  const x = start[0] + amount * dx;
  const y = start[1] + amount * dy;
  return Math.hypot(point[0] - x, point[1] - y);
}

function simplifyOpen(points, tolerance) {
  if (points.length <= 2) return points;
  let maxDistance = 0;
  let splitAt = 0;
  for (let index = 1; index < points.length - 1; index += 1) {
    const distance = distanceToSegment(
      points[index],
      points[0],
      points[points.length - 1],
    );
    if (distance > maxDistance) {
      maxDistance = distance;
      splitAt = index;
    }
  }
  if (maxDistance <= tolerance) return [points[0], points[points.length - 1]];
  const left = simplifyOpen(points.slice(0, splitAt + 1), tolerance);
  const right = simplifyOpen(points.slice(splitAt), tolerance);
  return [...left.slice(0, -1), ...right];
}

function simplifyRing(points) {
  if (points.length <= 4) return points;
  const open = points.slice(0, -1);
  let anchor = 0;
  for (let index = 1; index < open.length; index += 1) {
    if (open[index][0] < open[anchor][0]) anchor = index;
  }
  const rotated = [...open.slice(anchor), ...open.slice(0, anchor), open[anchor]];
  const simplified = simplifyOpen(rotated, SIMPLIFY_TOLERANCE);
  return simplified.length >= 4 ? simplified : points;
}

function round(value) {
  return Number(value.toFixed(1));
}

function ringToPath(ring) {
  const points = simplifyRing(ring.map(project));
  if (points.length < 4) return "";
  const [first, ...rest] = points;
  return `M${round(first[0])},${round(first[1])}${rest
    .map(([x, y]) => `L${round(x)},${round(y)}`)
    .join("")}Z`;
}

function geometryToPath(geometry) {
  const polygons =
    geometry.type === "Polygon" ? [geometry.coordinates] : geometry.coordinates;
  return polygons
    .flatMap((polygon) => polygon.map(ringToPath))
    .filter(Boolean)
    .join("");
}

async function loadSource(sourcePath) {
  if (sourcePath) return JSON.parse(await readFile(sourcePath, "utf8"));
  const response = await fetch(SOURCE_URL);
  if (!response.ok) throw new Error(`Map download failed: ${response.status}`);
  return response.json();
}

const sourcePath = process.argv[2];
const outputPath = path.resolve(process.argv[3] ?? DEFAULT_OUTPUT);
const source = await loadSource(sourcePath);
const regions = [];
const referencePaths = [];

for (const feature of source.features) {
  const featurePath = geometryToPath(feature.geometry);
  if (!featurePath) continue;
  if (feature.properties.adcode === "100000_JD") {
    referencePaths.push(featurePath);
    continue;
  }
  const provinceId = PROVINCE_IDS.get(feature.properties.name);
  if (!provinceId) throw new Error(`Unknown province: ${feature.properties.name}`);
  const labelPoint = project(
    feature.properties.centroid ?? feature.properties.center,
  );
  regions.push({
    provinceId,
    path: featurePath,
    labelX: round(labelPoint[0]),
    labelY: round(labelPoint[1]),
  });
}

if (regions.length !== PROVINCE_IDS.size) {
  throw new Error(`Expected ${PROVINCE_IDS.size} provinces, received ${regions.length}`);
}

const generated = `// Generated by scripts/generate-china-province-map.mjs.\n// Boundary source: ${SOURCE_URL}\n\nexport type ChinaProvinceMapRegion = {\n  provinceId: string;\n  path: string;\n  labelX: number;\n  labelY: number;\n};\n\nexport const CHINA_MAP_VIEW_BOX = "0 0 ${WIDTH} ${HEIGHT}";\n\nexport const CHINA_PROVINCE_MAP_REGIONS = ${JSON.stringify(regions)} as const satisfies readonly ChinaProvinceMapRegion[];\n\nexport const CHINA_MAP_REFERENCE_PATHS = ${JSON.stringify(referencePaths)} as const;\n`;

await writeFile(outputPath, generated);
console.log(`Wrote ${regions.length} province paths to ${outputPath}`);
