import type { SupplierListing } from "@/lib/db/schema";

export const LIAONING_MEITUO_SUPPLIER_ID = "sup-liaoning-meituo";
export const LIAONING_MEITUO_SUPPLIER_SLUG = "liaoning-meituo-composite-cylinders";

// Curated from Meituo's current official company, product-category and contact
// pages plus the China Composites Expo L directory. The complete current header
// logo was downloaded on 2026-08-26 from:
// https://omo-oss-image.thefastimg.com/portal-saas/pg2025062317363374781/cms/image/571a8959-e243-4906-85b5-71d68f6208d2.png
export const LIAONING_MEITUO_SUPPLIER_PROFILE: SupplierListing = {
  id: LIAONING_MEITUO_SUPPLIER_ID,
  name: "辽宁美托科技股份有限公司",
  nameEn: "Liaoning Meituo Technology Co., Ltd.",
  slug: LIAONING_MEITUO_SUPPLIER_SLUG,
  location: "辽宁沈抚示范区",
  locationEn: "Shenfu Demonstration Zone, Liaoning, China",
  province: "辽宁",
  category: "manufacturer",
  products: ["碳纤维缠绕复合气瓶", "车用氢能复合气瓶", "正压式空气呼吸器复合气瓶", "工业特气瓶", "工业取样瓶", "潜水气瓶", "彩弹枪气瓶", "CO2 气瓶", "医用氧气瓶", "灭火器气瓶", "复合气瓶用铝合金内胆"],
  productsEn: ["Carbon-fiber overwrapped composite cylinders", "Vehicle hydrogen composite cylinders", "Positive-pressure breathing-apparatus composite cylinders", "Industrial specialty-gas cylinders", "Industrial sampling cylinders", "Diving cylinders", "Paintball cylinders", "CO2 cylinders", "Medical oxygen cylinders", "Fire-extinguisher cylinders", "Aluminum liners for composite cylinders"],
  processList: ["铝合金及金属承压内胆制造", "碳纤维缠绕复合气瓶制造", "高压气瓶设计与产品配置", "工业气体储运应用配套", "氢能车载储气应用配套", "消防救援与呼吸器气源配套", "医疗供氧气瓶配套", "潜水和休闲运动气瓶配套", "食品饮料 CO2 气瓶配套", "按目标市场标准和认证资料核验"],
  processListEn: ["Aluminum-alloy and metal pressure-liner manufacturing", "Carbon-fiber overwrapped composite-cylinder manufacturing", "High-pressure cylinder design and product configuration", "Industrial-gas storage application matching", "Vehicle hydrogen-storage application matching", "Fire-rescue and breathing-air cylinder matching", "Medical-oxygen cylinder matching", "Diving and recreational cylinder matching", "Food-and-beverage CO2 cylinder matching", "Target-market standard and approval evidence review"],
  established: 2010,
  verified: false,
  description: "辽宁美托科技股份有限公司在官网将自身定位为铝合金等金属高压气瓶、复合材料高压气瓶、金属承压容器内胆及延伸产品制造商，成立于 2010 年，位于辽宁省沈抚示范区。现行产品范围包括碳纤维缠绕复合气瓶、车用氢能气瓶、工业特气和取样气瓶、呼吸器、医疗、潜水、休闲运动、食品饮料及灭火器气瓶和铝合金内胆。中国国际复材展 L 字母页提供了展商主体线索。本页只把碳纤维写作复合气瓶的增强体，不把美托列为碳纤维原丝、织物、预浸料或通用碳制品供应商。官网提到的性能、标准、认证和出口范围均为企业发布信息，采购时仍需按型号、容积、压力、结构、材料、制造地点和目标市场核验。",
  descriptionEn: "Liaoning Meituo Technology Co., Ltd. describes itself on its current official website as a manufacturer of aluminum-alloy and other metal high-pressure cylinders, composite high-pressure cylinders, metal pressure-vessel liners and related products. The site dates the company to 2010 and locates it in Liaoning's Shenfu Demonstration Zone. Its published range includes carbon-fiber overwrapped composite cylinders, vehicle hydrogen cylinders, industrial specialty-gas and sampling cylinders, breathing-air, medical, diving, recreational, food-and-beverage and fire-extinguisher cylinders, plus aluminum liners. The China Composites Expo L directory supplies the exhibitor trail. Carbon fiber is the reinforcement in Meituo's composite-cylinder offer; the company is not presented here as a supplier of carbon-fiber tow, fabric, prepreg or generic carbon products. Performance, standard, certification, customer and export statements remain company-published claims. Qualification must match the quoted model, volume, pressure, liner and overwrap architecture, manufacturing site and destination-market approval evidence.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary: "美托的复材相关范围以高压复合气瓶和金属内胆为核心。询价应先说明盛装介质、用途、工作和试验压力、容积、瓶口与阀门接口、允许尺寸和质量、安装姿态、环境温度、循环次数、冲击与火烧场景、设计寿命、目标国家以及适用法规，再锁定内胆合金、碳纤维缠绕结构、树脂体系和表面防护。氢能、呼吸器、医用氧、潜水、消防和 CO2 应用的法规和验收路径不同，不能用同一通用气瓶页面替代型号证书。买方应索取当前图纸、型号级数据表、设计批准、型式试验、批次材料和制造记录、无损和压力试验、追溯标识、阀门兼容、使用和定检说明，并确认由哪个法律主体制造、检验、开票和承担质保。",
  productsServicesSummaryEn: "Meituo's composites-relevant offer centers on high-pressure composite cylinders and the metal liners used in them. An RFQ should start with the contained gas, service and installation, nominal and water volume, working and test pressure, filling and discharge cycle, neck and valve interface, allowable envelope and mass, mounting orientation, operating-temperature range, humidity, salt, vibration, impact and fire scenarios, service life and the destination-country rules. The buyer should then define or request the liner alloy and heat treatment, carbon-fiber overwrap architecture, resin system, boss and load-transfer design, external protection, marking and traceability. Vehicle hydrogen, breathing apparatus, medical oxygen, diving, paintball, fire-extinguisher, industrial sampling and beverage-CO2 duties follow different approval paths; a generic cylinder category cannot prove that one model is permitted for another service. Ask for the current model datasheet and drawing, bill of materials, design and type-approval documents, burst, pressure-cycle, leak, permeability, drop, impact, bonfire or other qualification results required by the governing scheme, plus liner and reinforcement batch records, winding and cure records, dimensional inspection, proof or hydrostatic test, valve compatibility, cleaning and gas-compatibility controls. Confirm whether the offered construction is all-metal, a metal-lined composite or another type, and do not infer the reinforcement grade or origin from the phrase carbon-fiber cylinder. Order documents should identify the exact manufacturing and inspection site, legal seller, approval holder, serial-number convention, marking language, first inspection date, periodic-inspection interval, rejected-product controls and warranty. For export, verify packaging, valve protection, dangerous-goods and empty-cylinder transport rules, shipping documents, local registration and after-sales responsibilities. Samples or pilot units should reproduce production materials and the qualified process. Website statements about low weight, strength, corrosion resistance, global sales and certification are useful supplier claims, not substitute evidence for the quoted model. GetFRP therefore maps composite-cylinder demand only and excludes raw carbon fiber, carbon fabric, prepreg and unrelated finished carbon-product keywords.",
  ecatalogs: [
    { title: "美托官方网站", titleEn: "Official Meituo Website", description: "企业、产品和联系信息入口。", descriptionEn: "Official company, product and contact entry.", url: "https://www.symtcl.com/", format: "Official website" },
    { title: "美托公司简介", titleEn: "About Meituo", description: "企业历史、主体和复合气瓶范围。", descriptionEn: "Official history, entity and composite-cylinder scope.", url: "https://www.symtcl.com/about.html", format: "Company page" },
    { title: "美托产品展示", titleEn: "Meituo Product Directory", description: "气瓶应用类别和金属内胆入口。", descriptionEn: "Official cylinder application categories and liner entry.", url: "https://www.symtcl.com/products_home.html", format: "Product directory" },
    { title: "美托新能源汽车产品", titleEn: "Meituo New-Energy Vehicle Products", description: "车用氢能产品类别入口。", descriptionEn: "Official vehicle-hydrogen product category.", url: "https://www.symtcl.com/product/26/", format: "Product category" },
    { title: "美托消防救援产品", titleEn: "Meituo Fire and Rescue Products", description: "消防和呼吸器气瓶类别入口。", descriptionEn: "Official fire-rescue and breathing-cylinder category.", url: "https://www.symtcl.com/product/21/", format: "Product category" },
    { title: "美托联系方式", titleEn: "Meituo Contact", description: "地址、内外贸邮箱与电话。", descriptionEn: "Official address, domestic/export email and telephone.", url: "https://www.symtcl.com/contact1.html", format: "Contact page" },
    { title: "中国国际复材展 L 字母页", titleEn: "China Composites Expo — L Directory", description: "辽宁美托展商主体线索。", descriptionEn: "Organizer directory source for the Liaoning Meituo exhibitor trail.", url: "https://www.chinacompositesexpo.com/cn/netshow.php?head=L", format: "Exhibitor directory" },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-26T00:00:00.000Z"),
  logo: "/supplier-assets/liaoning-meituo-logo.png",
  contactEmail: "rexliu@symtcl.com",
  contactPhone: "+86 24 56598671",
  address: "No. 7 Zhongxing Avenue (B1b Area), Shenfu Demonstration Zone, Liaoning 113122, China",
  website: "https://www.symtcl.com/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 27,
  viewCount: 0,
  capabilities: ["carbon-fiber overwrapped composite cylinders", "vehicle hydrogen cylinders", "breathing-air cylinders", "industrial gas cylinders", "medical oxygen cylinders", "diving cylinders", "CO2 cylinders", "aluminum pressure-vessel liners"],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-26T00:00:00.000Z"),
};
