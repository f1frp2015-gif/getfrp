import type { SupplierListing } from "@/lib/db/schema";

export const NANTONG_FUYUAN_SUPPLIER_ID = "sup-nantong-fuyuan-recycled-carbon-fiber";
export const NANTONG_FUYUAN_SUPPLIER_SLUG = "nantong-fuyuan-recycled-carbon-fiber";

// Curated from FUY's current official company, history, product and contact
// pages and the CCE N directory. The complete official icon and Chinese
// wordmark were downloaded from rcffy.com on 2026-08-25 without cropping.
export const NANTONG_FUYUAN_SUPPLIER_PROFILE: SupplierListing = {
  id: NANTONG_FUYUAN_SUPPLIER_ID,
  name: "南通复源新材料科技有限公司",
  nameEn: "Nantong Fuyuan Carbon Fiber Recycling Co., Ltd.",
  slug: NANTONG_FUYUAN_SUPPLIER_SLUG,
  location: "江苏南通",
  locationEn: "Nantong, Jiangsu, China",
  province: "江苏",
  category: "manufacturer",
  products: ["3–12 mm 再生短切碳纤维", "再生纯碳纤维无纺毡", "150–1000 g/m² 再生碳纤维毡", "再生碳纤维/PP 混合无纺毡", "再生碳纤维/PA 混合无纺毡", "再生碳纤维/PPS 混合无纺毡", "固化与未固化预浸料废料回收服务", "碳纤维复材制品和边角料回收服务", "再生碳纤维增强改性塑料原料", "热压热塑性复材用再生碳纤维前驱毡"],
  productsEn: ["3–12 mm chopped recycled carbon fiber", "Pure recycled-carbon-fiber nonwoven mat", "150–1000 g/m² recycled-carbon-fiber mat", "Recycled-carbon-fiber and PP hybrid nonwoven mat", "Recycled-carbon-fiber and PA hybrid nonwoven mat", "Recycled-carbon-fiber and PPS hybrid nonwoven mat", "Cured and uncured prepreg-waste recycling service", "Carbon-composite part and offcut recycling service", "Recycled carbon fiber for reinforced thermoplastic compounds", "Recycled-carbon-fiber precursor mats for hot-pressed thermoplastic composites"],
  processList: ["碳纤维复材废弃物接收与分类", "固化和未固化预浸料废料资源化处理", "废复材制品和边角料回收处理", "再生碳纤维分离和质量控制", "再生长纤维机械短切", "再生纯碳纤维无纺成毡", "再生碳纤维与热塑纤维混合成毡", "面密度与纤维配比定制", "增强改性塑料应用支持", "回收批次和碳足迹资料协调"],
  processListEn: ["Carbon-composite waste intake and classification", "Cured and uncured prepreg-waste resource recovery", "Composite-part and offcut recycling", "Recycled-carbon-fiber separation and quality control", "Mechanical chopping of recovered long fibers", "Pure recycled-carbon-fiber nonwoven mat formation", "Recycled carbon and thermoplastic fiber blending into mats", "Areal-weight and fiber-ratio customization", "Reinforced-thermoplastic application support", "Recycling-lot and carbon-footprint document coordination"],
  established: 2017,
  verified: false,
  description: "南通复源新材料科技有限公司（FUY）官网显示其从事碳纤维复合材料废弃物资源化处理，接收固化/未固化预浸料、废复材制品和边角料，并供应 3–12 mm 再生短切碳纤维、纯再生碳纤维无纺毡及 PP、PA、PPS 热塑纤维混合毡。官网发展历程记载 FUY 于 2017 年 4 月 7 日注册成立；中国国际复材展 N 字母页也列出南通复源。本页只映射再生碳纤维、短切纤维和碳纤维毡实际产品，不把应用清单写成企业自产终端件。",
  descriptionEn: "Nantong Fuyuan Carbon Fiber Recycling Co., Ltd. (FUY) publishes a focused offer for resource recovery from carbon-fiber composite waste. Its official company page identifies cured and uncured prepreg waste, discarded composite parts and production offcuts as accepted streams, while current product pages list mechanically chopped 3–12 mm recycled carbon fiber, pure recycled-carbon-fiber nonwoven mat and hybrid precursor mats made with PP, PA or PPS thermoplastic fibers. The official history records FUY's registration on 7 April 2017, and the China Composites Expo N directory independently lists the Nantong exhibitor. GetFRP maps only the actual recovered-fiber, chopped-fiber, nonwoven-mat and recycling-service offer. Application examples such as reinforced plastics, conductive products, cement, refractory products or hot-pressed thermoplastic parts are qualification targets, not evidence that FUY manufactures every downstream finished product.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary: "回收项目需要提交废料法人归属、来源、形态、固化状态、树脂和纤维体系、污染物、危险性、包装、重量、追溯和处置合规要求。再生纤维采购需规定长度分布、碳含量、残余树脂/上浆、含水率、体积密度、团聚、金属异物和批次一致性；毡材还需规定面密度、厚度、幅宽、纤维配比、取向、热塑纤维类型和热压窗口。官网提到产能、奖项和碳足迹证书，但未取得与当前法人、牌号、生产地、编号和有效期匹配的原件前，验证字段保持为空。",
  productsServicesSummaryEn: "A waste-recycling inquiry should identify the legal owner and generator, source process, carbon-fiber grade if known, resin or thermoplastic matrix, cured or uncured state, form and dimensions, total mass, packaging, storage history, contaminants, inserts, metals, coatings, release films, solvents and any hazardous classification. Define whether material is prepreg trim, expired prepreg, dry fiber, laminate, molded component or machining offcut; provide representative photographs, SDS and composition evidence; and agree sampling, acceptance, rejection, transport, weighing, chain of custody, data protection, destruction evidence and regulatory responsibility. A recycled-fiber purchase needs a different specification. For chopped recycled carbon fiber, define nominal and allowable length distribution, fiber diameter, carbon content, residual resin or sizing, moisture, bulk density, agglomeration, foreign matter, metal contamination, electrical or mechanical targets, packaging, lot size and CoA tests. For pure recycled-carbon-fiber mat, specify areal weight within the published 150–1000 g/m² range, thickness, width, roll length, fiber distribution and orientation, binder if any, joins, defects and roll packing. For the PP, PA or PPS hybrid mats, state the thermoplastic fiber, carbon-fiber fraction, blend uniformity, target laminate thickness and fiber volume, drying, heating and consolidation window, tooling, pressure, cooling and acceptance coupon plan. FUY's application examples do not prove fitness for a customer's polymer, conductive, refractory, cement or thermal system; require controlled compounding or hot-press trials and test the actual production lot. The official website publishes a 1,500 t/year treatment-line statement, awards and carbon-footprint news, but GetFRP does not place these in verified certification or guaranteed-capacity fields without current documents matched to the legal entity, site, product, method, number and validity. Buyers should confirm the contracting, receiving, processing, invoicing and payment entity, transport licenses where applicable, waste-status transfer, recovered-product status, export classification and allocation of liability for rejected or hazardous loads.",
  ecatalogs: [
    { title: "复源公司简介", titleEn: "FUY Company Profile", description: "主体、回收范围和产品概况。", descriptionEn: "Official entity, recycling scope and product overview.", url: "https://www.rcffy.com/profile/index.aspx", format: "Company page" },
    { title: "复源发展历程", titleEn: "FUY History", description: "2017 年注册与产线发展记录。", descriptionEn: "Official 2017 registration and development record.", url: "https://www.rcffy.com/history/index.aspx", format: "Company history" },
    { title: "再生短切碳纤维", titleEn: "Chopped Recycled Carbon Fiber", description: "3–12 mm 短纤及应用说明。", descriptionEn: "Official 3–12 mm chopped-fiber product page.", url: "https://www.rcffy.com/product/info.aspx?itemid=12", format: "Product page" },
    { title: "再生碳纤维毡", titleEn: "Recycled Carbon-Fiber Mats", description: "纯碳纤毡和热塑混合毡。", descriptionEn: "Official pure and thermoplastic-hybrid mat page.", url: "https://www.rcffy.com/product/info.aspx?itemid=10", format: "Product page" },
    { title: "复源联系方式", titleEn: "FUY Contact", description: "南通地址、电话和邮箱。", descriptionEn: "Official Nantong address, phones and email.", url: "https://www.rcffy.com/contact/index.aspx", format: "Contact page" },
    { title: "中国国际复材展 N 字母页（第 2 页）", titleEn: "China Composites Expo — N Directory, Page 2", description: "南通复源展商记录。", descriptionEn: "Organizer source for the Nantong Fuyuan exhibitor.", url: "https://www.chinacompositesexpo.com/cn/netshow.php?_MULTI_PAGE_START=30&head=N", format: "Exhibitor directory" },
  ],
  profilePublished: true, profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/nantong-fuyuan-logo.png",
  contactEmail: "sales@rcffy.com", contactPhone: "+86 137 0175 4490 / +86 180 1241 9720",
  address: "No. 18 Jinding Road, Tongzhou District, Nantong, Jiangsu 226300, China",
  website: "https://www.rcffy.com/", enterpriseId: null, scaleTier: null, brandPriority: 26, viewCount: 0,
  capabilities: ["carbon-composite waste recycling", "recycled carbon fiber", "chopped carbon fiber", "recycled carbon-fiber nonwoven mats", "thermoplastic hybrid mats", "prepreg waste recovery", "offcut recycling", "application trials"],
  standardsSupported: [], moqKg: null, leadTimeDays: null, exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"), updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
