import type { SupplierListing } from "@/lib/db/schema";

export const HONGFU_TONGXIN_SUPPLIER_ID = "sup-hongfu-tongxin";
export const HONGFU_TONGXIN_SUPPLIER_SLUG = "shenzhen-hongfu-tongxin";

// Curated from Shenzhen Hongfu Tongxin's official English company, history,
// factory, FRP product and contact pages. Factory scale, equipment, product
// and performance statements remain company-published and unverified by
// GetFRP. The site also uses the FORE / Foreth Industrial brand identity;
// buyers should confirm the contracting entity and manufacturing site during
// qualification. Official logo downloaded 2026-08-05 from:
// https://cdn.cloudbf.com/files/176/img/2023/10/30/202310301001110123257.png
export const HONGFU_TONGXIN_SUPPLIER_PROFILE: SupplierListing = {
  id: HONGFU_TONGXIN_SUPPLIER_ID,
  name: "Shenzhen Hongfu Tongxin Technology Co., Ltd.",
  nameEn: "Shenzhen Hongfu Tongxin Technology Co., Ltd.",
  slug: HONGFU_TONGXIN_SUPPLIER_SLUG,
  location: "广东深圳",
  locationEn: "Shenzhen, Guangdong, China",
  province: "广东",
  category: "manufacturer",
  products: [
    "光面、胶衣及压花玻璃钢平板",
    "冷藏车、房车、厢式车及墙体用玻璃钢夹芯板",
    "玻璃钢模塑格栅",
    "玻璃钢拉挤棒、管、槽钢和梁等型材",
    "透明、半透明及波纹玻璃钢采光屋面板",
    "SMC/BMC 玻璃钢井盖及模压制品",
  ],
  productsEn: [
    "Smooth, gel-coated and embossed FRP flat sheets",
    "FRP sandwich panels for refrigerated trucks, RVs, vehicle bodies and walls",
    "Molded FRP grating",
    "Pultruded FRP rods, tubes, channels, beams and custom profiles",
    "Transparent, translucent and corrugated FRP roofing sheets",
    "SMC/BMC composite manhole covers and molded parts",
  ],
  processList: [
    "玻璃钢平板连续化机械生产",
    "玻璃钢夹芯板真空压合",
    "玻璃钢格栅模塑成型",
    "玻璃钢型材拉挤成型",
    "玻璃钢屋面板连续化生产",
    "SMC/BMC 压缩模塑",
  ],
  processListEn: [
    "Continuous mechanized FRP sheet production",
    "Vacuum pressing of FRP sandwich panels",
    "Molded FRP grating production",
    "FRP profile pultrusion",
    "Continuous FRP roofing-sheet production",
    "SMC/BMC compression molding",
  ],
  established: null,
  verified: false,
  description:
    "Shenzhen Hongfu Tongxin Technology Co., Ltd. 官网将公司描述为玻璃纤维制品与塑料制品制造商，并同时使用 FORE / Foreth Industrial 品牌标识。官网称其集团在东莞设有玻璃钢生产工厂，在佛山设有塑料板挤出与真空吸塑工厂；公开玻璃钢产品覆盖平板、夹芯板、模塑格栅、拉挤型材、采光屋面板以及 SMC/BMC 井盖。官网列出的商务联系地址位于广东深圳。",
  descriptionEn:
    "Shenzhen Hongfu Tongxin Technology Co., Ltd. describes itself on its official website as a manufacturer of fiberglass and plastic products and also uses the FORE / Foreth Industrial brand identity. The company publishes an FRP production factory in Dongguan and a separate plastic-sheet extrusion and vacuum-forming factory in Foshan. Its listed FRP range includes flat sheets, sandwich panels, molded grating, pultruded profiles, roofing sheets and SMC/BMC manhole covers, while the published commercial contact address is in Shenzhen, Guangdong.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "官网工厂能力页称，玻璃钢业务拥有一条 80 米平板生产线、两台夹芯板真空压机、11 台格栅模具设备、8 台拉挤设备、一条 50 米屋面板生产线和 8 台 SMC/BMC 压机，并称玻璃钢工厂占地 30,000 平方米。公司历史页介绍其从手糊玻璃钢制品起步，随后开发机械化平板生产线，并面向冷链运输、房车、墙体、雷达罩和设备外壳等项目提供材料与 OEM/ODM 加工。以上产能、设备、工厂面积和产品性能均为企业公开信息；采购方应在询价及验厂时确认签约主体、东莞实际生产地址、树脂与增强体系、芯材和胶接体系、尺寸公差、表面质量、阻燃或力学报告、批次检验、MOQ、交期、包装和质保条件。",
  productsServicesSummaryEn:
    "The official factory-capability page lists one 80-meter FRP sheet line, two sandwich-panel vacuum presses, 11 grating molding machines, eight pultrusion machines, one 50-meter roofing-sheet line and eight SMC/BMC presses, and states that the FRP factory covers 30,000 m². The company history says the business began with hand-lay-up fiberglass products before developing a mechanized sheet line, and now supports material supply plus OEM/ODM processing for cold-chain vehicles, RVs, wall panels, radomes and equipment housings. These capacity, equipment, factory-area and performance statements are company-published. Buyers should confirm the contracting entity, the Dongguan production address, resin and reinforcement system, panel core and adhesive, dimensional tolerances, surface quality, fire or mechanical test reports, batch inspection, MOQ, lead time, packaging and warranty during RFQ and factory qualification.",
  ecatalogs: [
    {
      title: "宏富同鑫公司介绍",
      titleEn: "Hongfu Tongxin Company Profile",
      description: "公司身份、东莞玻璃钢工厂、佛山塑料工厂与项目服务概览。",
      descriptionEn:
        "Official overview of the company identity, Dongguan FRP factory, Foshan plastics factory and project support.",
      url: "https://www.frpmanufacturer.com/about-us/about-us.html",
      format: "Company profile",
    },
    {
      title: "公司发展与工艺沿革",
      titleEn: "Company History & Process Development",
      description: "手糊起步、机械化玻璃钢平板线及 OEM/ODM 服务介绍。",
      descriptionEn:
        "Official history of hand lay-up production, mechanized FRP sheet development and OEM/ODM services.",
      url: "https://www.frpmanufacturer.com/about-us/Our-History.html",
      format: "Company history",
    },
    {
      title: "玻璃钢工厂能力",
      titleEn: "FRP Factory Capabilities",
      description: "官网公开的厂房面积、平板、夹芯板、格栅、拉挤、屋面板及模压设备。",
      descriptionEn:
        "Company-published plant area and sheet, sandwich-panel, grating, pultrusion, roofing and molding equipment.",
      url: "https://www.frpmanufacturer.com/about-us/Factory-Strength.html",
      format: "Factory overview",
    },
    {
      title: "玻璃钢产品目录",
      titleEn: "FRP Product Directory",
      description: "平板、夹芯板、格栅、型材、屋面板与井盖产品入口。",
      descriptionEn:
        "Official directory for FRP sheets, sandwich panels, grating, profiles, roofing and manhole covers.",
      url: "https://www.frpmanufacturer.com/products/FRP-Product.htm",
      format: "Product directory",
    },
    {
      title: "玻璃钢平板目录",
      titleEn: "FRP Sheet Directory",
      description: "光面、胶衣、压花及车辆和墙体应用玻璃钢平板。",
      descriptionEn:
        "Official range of smooth, gel-coated and embossed FRP sheets for vehicle and wall applications.",
      url: "https://www.frpmanufacturer.com/products/FRP-Sheet.htm",
      format: "Product directory",
    },
    {
      title: "玻璃钢夹芯板目录",
      titleEn: "FRP Sandwich Panel Directory",
      description: "车辆、冷藏与墙体应用的泡沫及蜂窝芯玻璃钢夹芯板。",
      descriptionEn:
        "Official range of foam- and honeycomb-core FRP sandwich panels for vehicle, cold-chain and wall applications.",
      url: "https://www.frpmanufacturer.com/products/FRP-Sandwich-Panel.htm",
      format: "Product directory",
    },
    {
      title: "宏富同鑫官方联系方式",
      titleEn: "Hongfu Tongxin Official Contact",
      description: "深圳商务地址、电话、邮箱及公开销售联系人。",
      descriptionEn:
        "Official Shenzhen commercial address, telephone, email and published sales contacts.",
      url: "https://www.frpmanufacturer.com/contact-us.html",
      format: "Official contact",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-05T00:00:00.000Z"),
  logo: "/supplier-assets/hongfu-tongxin-logo.png",
  contactEmail: "info@fore-plastics.com",
  contactPhone: "+86 755 2832 9102",
  address:
    "Room 02, Floor 32, Block 6, Phase 3, Xieli Garden, Longcheng Street, Longgang District, Shenzhen, Guangdong 518172, China",
  website: "https://www.frpmanufacturer.com/",
  enterpriseId: null,
  scaleTier: "M",
  brandPriority: 18,
  viewCount: 0,
  capabilities: [
    "FRP flat sheets",
    "gel-coated and embossed FRP sheets",
    "FRP sandwich panels",
    "molded FRP grating",
    "pultruded FRP profiles",
    "FRP roofing sheets",
    "SMC/BMC manhole covers",
    "vacuum panel pressing",
    "compression molding",
    "OEM and ODM processing",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-05T00:00:00.000Z"),
  updatedAt: new Date("2026-08-05T00:00:00.000Z"),
};
