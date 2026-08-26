import type { SupplierListing } from "@/lib/db/schema";

export const NANTONG_JIUSHENG_SUPPLIER_ID = "sup-nantong-jiusheng-frp-grating";
export const NANTONG_JIUSHENG_SUPPLIER_SLUG = "nantong-jiusheng-frp-grating-profiles";

// Curated from Jiusheng's current official company, product and contact pages
// and the CCE N directory. The complete POWERGRID wordmark, grid symbol and
// registration mark were downloaded from powergrate.com without cropping.
export const NANTONG_JIUSHENG_SUPPLIER_PROFILE: SupplierListing = {
  id: NANTONG_JIUSHENG_SUPPLIER_ID,
  name: "南通久盛新材料科技有限公司",
  nameEn: "Nantong Jiusheng New Materials Technology Co., Ltd.",
  slug: NANTONG_JIUSHENG_SUPPLIER_SLUG,
  location: "江苏南通",
  locationEn: "Nantong, Jiangsu, China",
  province: "江苏",
  category: "manufacturer",
  products: ["模塑玻璃纤维增强塑料（FRP）格栅", "拉挤玻璃纤维增强塑料（FRP）格栅", "拉挤玻璃钢结构型材", "38×38、40×40、50×50 与 83×83 模塑格栅", "微孔及矩形网格 FRP 格栅板", "FRP 格栅表面类型和配色", "FRP 格栅安装夹具与配件", "玻璃钢模压制品", "玻璃钢手糊制品", "玻璃钢制品模具"],
  productsEn: ["Molded fiberglass-reinforced plastic (FRP) grating", "Pultruded fiberglass-reinforced plastic (FRP) grating", "Pultruded fiberglass structural profiles", "38×38, 40×40, 50×50 and 83×83 molded grating", "Mini-mesh and rectangular-mesh FRP grating panels", "FRP grating surface and color options", "FRP grating clips and installation accessories", "Compression-molded FRP products", "Hand-lay-up FRP products", "Molds for fiberglass products"],
  processList: ["玻璃钢格栅模塑成型", "玻璃钢格栅连续拉挤", "玻璃钢结构型材拉挤", "玻璃钢模压成型", "玻璃钢手糊成型", "格栅尺寸和网格规格选型", "表面、防滑和颜色配置", "切割、开孔和边缘处理", "安装夹具与支撑深化", "项目包装和出口交付"],
  processListEn: ["Fiberglass grating molding", "Continuous pultrusion of fiberglass grating", "Pultrusion of fiberglass structural profiles", "FRP compression molding", "Fiberglass hand lay-up", "Grating dimension and mesh selection", "Surface, slip-resistance and color configuration", "Cutting, drilling and edge finishing", "Clip and support detailing", "Project packing and export delivery"],
  established: 1998,
  verified: false,
  description: "南通久盛新材料科技有限公司官网列出模塑玻璃钢格栅、拉挤玻璃钢格栅、拉挤型材、模压制品、手糊制品和模具，并公开格栅网格尺寸、表面、力学、耐腐蚀和安装配件入口。官网公司简介记载成立日期为 1998 年 4 月 16 日；中国国际复材展 N 字母页第 2 页列出南通久盛。本页将有实际搜索量的 fiberglass grating、FRP grating、pultruded fiberglass 等词只植入对应产品，不用工程案例扩大产品范围，也不在证书原件未核对时写入已验证证书。",
  descriptionEn: "Nantong Jiusheng New Materials Technology Co., Ltd. publishes a POWERGRID portfolio of molded fiberglass-reinforced plastic grating, pultruded fiberglass grating, pultruded structural profiles, compression-molded and hand-lay-up FRP products, product molds and grating installation accessories. Its current site exposes mesh dimensions, surface options, mechanical and corrosion tables and installation content, while the official company profile gives a founding date of 16 April 1998. The second page of the China Composites Expo N directory independently lists Nantong Jiusheng. GetFRP therefore assigns demand phrases such as fiberglass grating, FRP grating and pultruded fiberglass only to the corresponding published products. Industrial, municipal, building, water-treatment and power-project examples illustrate use; they do not expand the catalog into every structure shown in a case study or replace project engineering and acceptance evidence.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary: "格栅和型材询价应附受控图纸，明确模塑或拉挤路线、树脂、玻纤增强、网格、厚度、板宽、跨度、支撑和集中/均布载荷；同时规定表面、防滑、颜色、UV、阻燃、烟毒、耐腐蚀、尺寸公差、切割开孔、封边、夹具、包装和安装责任。官网提到 ISO9001:2000、ASTM E84 与船级社测试，但这些历史或自述信息不替代当前证书和报告，故验证字段保持为空。",
  productsServicesSummaryEn: "A grating RFQ should state whether the requirement is molded or pultruded construction and include a controlled panel, support and cut-out drawing. Define resin chemistry and corrosion exposure, glass reinforcement, nominal panel size, mesh opening and pitch, bearing-bar depth and thickness, span and support width, uniformly distributed and concentrated loads, allowable deflection, impact, fatigue and service temperature. Identify the required top surface, grit or meniscus treatment, slip-resistance method, color, UV exposure, flame and smoke duty, electrical behavior and any hygiene or fire-code restrictions. Specify dimensional tolerances, cut panels, openings, notches, sealed edges, kick plates, clips, fasteners, support frames, field cutting, installation and inspection. A pultruded profile inquiry should additionally include section geometry, longitudinal and transverse properties, straightness, twist, cut length, holes, inserts and connection design; do not substitute molded-grating tables for pultruded-profile values. For compression-molded or hand-lay-up parts, provide laminate or molding-compound architecture, tooling responsibility, surface class, inserts, draft, dimensional control, first-article and production inspection. Request current grade data, resin and reinforcement identification, test methods, lot definition, traceability, CoA example, packing supports, container plan and change control. Jiusheng's website mentions ISO 9001:2000, ASTM E84 and classification-society testing, but a historical standard edition or marketing statement is not a current certificate or product approval. GetFRP leaves certification arrays empty until legal entity, production site, report or certificate number, product construction, test method, scope and validity are matched. Buyers should also verify which entity manufactures, quotes, invoices and exports, and should have the final structural layout, support, connection, fire, corrosion and installation design reviewed for the actual project rather than relying on a generic website table.",
  ecatalogs: [
    { title: "久盛官网", titleEn: "Official Jiusheng Website", description: "公司、产品和联系入口。", descriptionEn: "Official company, product and contact entry.", url: "https://powergrate.com/", format: "Official website" },
    { title: "久盛公司简介", titleEn: "Jiusheng Company Profile", description: "主体、成立日期和产品范围。", descriptionEn: "Official entity, founding date and product scope.", url: "https://powergrate.com/n-2/", format: "Company page" },
    { title: "久盛产品展示", titleEn: "Jiusheng Product Directory", description: "格栅、型材、模压件和模具目录。", descriptionEn: "Official grating, profile, molded-part and mold directory.", url: "https://powergrate.com/n-6/", format: "Product directory" },
    { title: "模塑格栅", titleEn: "Molded Grating", description: "模塑格栅规格和技术入口。", descriptionEn: "Official molded-grating specifications and technical entry.", url: "https://powergrate.com/n-7/", format: "Product category" },
    { title: "拉挤格栅", titleEn: "Pultruded Grating", description: "拉挤格栅规格和耐腐蚀入口。", descriptionEn: "Official pultruded-grating dimensions and corrosion entry.", url: "https://powergrate.com/n-8/", format: "Product category" },
    { title: "拉挤型材", titleEn: "Pultruded Profiles", description: "拉挤型材规格入口。", descriptionEn: "Official pultruded-profile specifications entry.", url: "https://powergrate.com/n-9/", format: "Product category" },
    { title: "久盛联系方式", titleEn: "Jiusheng Contact", description: "南通地址、电话和邮箱。", descriptionEn: "Official Nantong address, phone and email.", url: "https://powergrate.com/n-44/", format: "Contact page" },
    { title: "中国国际复材展 N 字母页（第 2 页）", titleEn: "China Composites Expo — N Directory, Page 2", description: "南通久盛展商记录。", descriptionEn: "Organizer source for the Nantong Jiusheng exhibitor.", url: "https://www.chinacompositesexpo.com/cn/netshow.php?_MULTI_PAGE_START=30&head=N", format: "Exhibitor directory" },
  ],
  profilePublished: true, profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/nantong-jiusheng-logo.png",
  contactEmail: "tommy@powergrate.com", contactPhone: "+86 513 8067 7832 / +86 136 1523 3818",
  address: "Chuangye Road, West Area, Liuqiao Town Industrial Park, Nantong, Jiangsu, China",
  website: "https://powergrate.com/", enterpriseId: null, scaleTier: null, brandPriority: 27, viewCount: 0,
  capabilities: ["molded FRP grating", "pultruded FRP grating", "fiberglass pultruded profiles", "FRP compression molding", "hand lay-up", "grating finishing", "installation accessories", "export packing"],
  standardsSupported: [], moqKg: null, leadTimeDays: null, exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"), updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
