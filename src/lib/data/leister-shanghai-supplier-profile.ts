import type { SupplierListing } from "@/lib/db/schema";

export const LEISTER_SHANGHAI_SUPPLIER_ID = "sup-leister-shanghai";
export const LEISTER_SHANGHAI_SUPPLIER_SLUG = "leister-shanghai";

// Curated from Leister China's current official product, company and contact
// pages plus the CCE directory. The official logo was downloaded from
// leisterchina.com on 2026-08-25.
export const LEISTER_SHANGHAI_SUPPLIER_PROFILE: SupplierListing = {
  id: LEISTER_SHANGHAI_SUPPLIER_ID,
  name: "莱丹塑料焊接技术（上海）有限公司",
  nameEn: "Leister Technologies (Shanghai) Co., Ltd.",
  slug: LEISTER_SHANGHAI_SUPPLIER_SLUG,
  location: "上海闵行",
  locationEn: "Minhang, Shanghai, China",
  province: "上海",
  category: "equipment",
  products: ["手持式热风工具", "自动塑料焊接机", "塑料挤出焊枪", "工业空气加热器", "鼓风机与热风机组", "变频器和点火装置", "激光塑料焊接系统", "激光焊接光学组件与控制系统", "塑料焊接附件和工艺支持"],
  productsEn: ["Handheld hot-air tools", "Automatic plastic-welding machines", "Plastic extrusion welders", "Industrial process air heaters", "Blowers and hot-air units", "Frequency converters and ignition units", "Laser plastic-welding systems", "Laser-welding optics and control systems", "Plastic-welding accessories and process support"],
  processList: ["热风塑料焊接", "挤出塑料焊接", "自动搭接与卷材焊接", "工业流程空气加热", "鼓风与闭环温度控制", "激光塑料焊接", "焊接参数试验与应用选型", "设备安装、培训和维护", "备件与售后技术支持"],
  processListEn: ["Hot-air plastic welding", "Extrusion plastic welding", "Automatic overlap and web welding", "Industrial process-air heating", "Blower integration and closed-loop temperature control", "Laser plastic welding", "Welding-parameter trials and application selection", "Equipment installation, training and maintenance", "Spares and after-sales technical support"],
  established: 2004,
  verified: false,
  description:
    "莱丹塑料焊接技术（上海）有限公司是 Leister 在中国的销售、服务与部分产品运营主体，现行官网提供手持热风工具、自动焊接机、挤出焊枪、工业加热器、鼓风机、热风机组及激光塑料焊接系统。中国国际复材展把企业列为塑料焊接、加热和辅助设备供应商。官网对品牌和制造范围有明确边界：Leister 品牌产品说明为瑞士生产，WELDY 产品由上海组装和制造；本页不把整个集团的全球生产能力转移给上海法人。设备可参与复材相关热塑性连接或加热工序，但不代表该企业制造被焊接的玻纤、碳纤维、板材、管道或其他复材成品，因此不植入材料供应商关键词。",
  descriptionEn:
    "Leister Technologies (Shanghai) Co., Ltd. is Leister's China sales, service and selected product-operations entity. Its current official site lists handheld hot-air tools, automatic welders, extrusion welders, process-air heaters, blowers, hot-air units and laser plastic-welding systems, while China Composites Expo classifies the company as a plastic-welding, heating and auxiliary-equipment supplier. The published manufacturing boundary matters: Leister-branded products are described as made in Switzerland, whereas WELDY products are assembled and manufactured in Shanghai. GetFRP does not transfer the wider group's production claims to the Shanghai legal entity. These machines may support thermoplastic joining or heating in composite-related operations, but equipment compatibility does not mean the company manufactures the fiberglass, carbon fiber, sheet, pipe or finished composite being processed. Consequently, material-supplier search phrases are intentionally excluded. Establishment in China is based on the official 2004 company statement; certifications and product approvals remain unverified here.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "莱丹产品覆盖热风、挤出和激光塑料焊接以及工业流程加热。设备询价应从材料、接头、厚度、焊缝、温度窗口、速度、产能、供电/供气、现场环境和安全要求出发，明确手持、自动、在线或激光方案，并用实际材料做焊接试验。采购方还应区分 Leister 与 WELDY 品牌、制造地、合同和售后主体，锁定主机、光学件、夹具、软件、附件、易损件、培训、校准和保修边界。复材应用说明不能替代对实际热塑性基体、填料/纤维、表面状态和接头性能的验证。",
  productsServicesSummaryEn:
    "Leister China's official portfolio spans hot-air, extrusion and laser plastic welding plus industrial process heating. An RFQ should begin with the polymer or composite matrix, reinforcement or filler condition, part geometry, joint design, thickness, seam length, required appearance and strength, allowable heat-affected zone, production rate, duty cycle, utilities, work environment and applicable machine-safety rules. For handheld hot-air tools, define nozzle geometry, temperature and airflow range, operator ergonomics, field-power supply and the procedure used to qualify an operator. Automatic overlap or web-welding projects should add material feed, seam width, pressure, travel control, tracking, edge guidance, recipe storage, alarms and a sustained production trial. Extrusion-welding inquiries need compatible rod or granulate, preheat, extrusion output, shoe geometry, bead dimensions, surface preparation, weld orientation and repair access. Process-air heating systems require inlet and outlet temperature, airflow, pressure drop, heater power, sensor location, over-temperature protection, blower curve, ducting, control interface and safe shutdown. Laser plastic-welding projects should define wavelength compatibility, optical transmission and absorption of the real material stack, joint gap, clamping, contour or quasi-simultaneous route, line speed, optical working field, guarding, fume handling, traceability and inspection method. Require application trials with representative production material and record machine, nozzle or optics, temperature, flow, force, speed, environment and resulting weld quality. FAT and SAT should address output, repeatability, recipe control, alarms, guarding, emergency stop, restart, documentation and training. Buyers should separate main equipment, optics, controls, fixtures, software licences, extraction, installation, calibration, spares, wear parts, remote support and warranty in the quotation. The official China site distinguishes Leister-branded Swiss production from WELDY assembly and manufacturing in Shanghai; the offer should therefore identify the exact brand, model, manufacturing origin, seller, invoice, payee and service entity. Current manuals, declarations, electrical drawings, spare-parts lists and any product conformity evidence should match the quoted model and destination. No fiberglass, carbon-fiber, laminate or finished-part keyword is assigned simply because a welding or heating tool may be used in a composites plant.",
  ecatalogs: [
    { title: "莱丹中国官网", titleEn: "Official Leister China Website", description: "中国企业、产品和服务入口。", descriptionEn: "Official China company, product and service entry.", url: "https://www.leisterchina.com/", format: "Official website" },
    { title: "莱丹中国简介", titleEn: "About Leister China", description: "中国业务历史、品牌和制造边界。", descriptionEn: "Official China history, brand and manufacturing boundary.", url: "https://www.leisterchina.com/gywm/", format: "Company page" },
    { title: "塑料焊接产品", titleEn: "Plastic-Welding Products", description: "热风、自动和挤出焊接设备目录。", descriptionEn: "Official hot-air, automatic and extrusion-welding directory.", url: "https://www.leisterchina.com/PlasticWelding/", format: "Product category" },
    { title: "工业加热产品", titleEn: "Process-Heat Products", description: "空气加热器、鼓风机和热风机组目录。", descriptionEn: "Official air-heater, blower and hot-air-unit directory.", url: "https://www.leisterchina.com/ProcessHeat/", format: "Product category" },
    { title: "激光塑料焊接", titleEn: "Laser Plastic Welding", description: "激光系统、光学组件和控制范围。", descriptionEn: "Official laser system, optics and control scope.", url: "https://www.leisterchina.com/LaserPlasticWelding/", format: "Product category" },
    { title: "莱丹中国联系方式", titleEn: "Leister China Contact", description: "上海地址、电话和邮箱。", descriptionEn: "Official Shanghai address, telephone and email.", url: "https://www.leisterchina.com/lxfs/", format: "Contact page" },
    { title: "中国国际复材展 L 字母页", titleEn: "China Composites Expo — L Directory", description: "展商主体与焊接、加热及辅助设备范围。", descriptionEn: "Organizer source for the entity and welding, heating and auxiliary-equipment scope.", url: "https://www.chinacompositesexpo.com/cn/netshow.php?head=L", format: "Exhibitor directory" },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/leister-shanghai-logo.png",
  contactEmail: "leister@leister.cn",
  contactPhone: "+86 21 6442 2398",
  address: "Building 11, No. 155 Yuanke Road, Xinzhuang Industrial Zone, Minhang District, Shanghai 201109, China",
  website: "https://www.leisterchina.com/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 26,
  viewCount: 0,
  capabilities: ["hot-air plastic welding", "extrusion plastic welding", "automatic welding machines", "industrial process heating", "blowers and hot-air units", "laser plastic welding", "application trials", "installation and after-sales support"],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
