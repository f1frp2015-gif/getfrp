import type { SupplierListing } from "@/lib/db/schema";

export const LAP_LASER_SHANGHAI_SUPPLIER_ID = "sup-lap-laser-shanghai";
export const LAP_LASER_SHANGHAI_SUPPLIER_SLUG = "lap-laser-shanghai";

// Curated from LAP's current official China composite-layup, product and legal
// contact pages plus the CCE directory. The official LAP logo was downloaded
// from lap-laser.com.cn on 2026-08-25.
export const LAP_LASER_SHANGHAI_SUPPLIER_PROFILE: SupplierListing = {
  id: LAP_LASER_SHANGHAI_SUPPLIER_ID,
  name: "镭尔谱激光应用技术（上海）有限公司",
  nameEn: "LAP Laser Applications (Shanghai) Co., Ltd.",
  slug: LAP_LASER_SHANGHAI_SUPPLIER_SLUG,
  location: "上海浦东",
  locationEn: "Pudong, Shanghai, China",
  province: "上海",
  category: "equipment",
  products: ["CAD-PRO Xpert 激光投影仪", "CAD-PRO 系列激光投影仪", "PRO-SOFT 激光投影软件", "INSPECT-PRO 质量检查软件", "DTEC-PRO 数字摄像系统", "复合材料铺层激光投影系统", "风电叶片铺层定位系统", "工业线激光器", "投影系统校准、培训和服务"],
  productsEn: ["CAD-PRO Xpert laser projectors", "CAD-PRO laser projectors", "PRO-SOFT laser-projection software", "INSPECT-PRO quality-inspection software", "DTEC-PRO digital camera systems", "Laser-projection systems for composite layup", "Rotor-blade layup positioning systems", "Industrial line lasers", "Projection-system calibration, training and service"],
  processList: ["CAD 轮廓激光投影", "复材铺层定位与次序引导", "预浸料和干纤维铺放辅助", "芯材、嵌件和紧固件定位", "风电叶片叶根和腹板定位", "相机辅助投影校准", "投影轮廓质量检查与记录", "软件数据准备和系统集成", "现场校准、培训和维护"],
  processListEn: ["CAD-contour laser projection", "Composite-ply positioning and sequence guidance", "Prepreg and dry-fiber placement assistance", "Core, insert and fastener positioning", "Rotor-blade root and web positioning", "Camera-assisted projection calibration", "Projected-contour quality inspection and recording", "Software data preparation and system integration", "On-site calibration, training and maintenance"],
  established: null,
  verified: false,
  description:
    "镭尔谱激光应用技术（上海）有限公司是 LAP 在中国的激光投影与测量应用主体。中国国际复材展将其列为复合材料铺层激光投影辅助设备供应商；官网公开 CAD-PRO Xpert/CAD-PRO 投影仪、PRO-SOFT 软件、INSPECT-PRO 检查软件和 DTEC-PRO 摄像系统，并展示一般复材铺层与风电叶片制造应用。系统把 CAD 轮廓投射到模具或工件，用于铺层、芯材、嵌件、叶根和腹板等定位与质量辅助。投影仪、摄像机和软件不制造被定位的预浸料、干纤维、层合板或叶片，本页因此不把这些应用材料作为 LAP 的产品关键词，也不把定位辅助等同于材料或成品质量认证。",
  descriptionEn:
    "LAP Laser Applications (Shanghai) Co., Ltd. is LAP's China entity for laser-projection and measurement applications. China Composites Expo lists it as an auxiliary laser-projection equipment supplier for composite layup. The current official site publishes CAD-PRO Xpert and CAD-PRO projectors, PRO-SOFT projection software, INSPECT-PRO inspection software and DTEC-PRO camera systems, with solutions for general composite layup and rotor-blade manufacturing. The system projects CAD contours onto a mold or workpiece to guide ply, core, insert, root and web positioning and to support quality workflows. Projectors, cameras and software do not manufacture the prepreg, dry fiber, laminate or blade being positioned. GetFRP therefore excludes those application materials and finished products from LAP's supplier-keyword set, and it does not treat positioning assistance as product or laminate certification. Entity founding date, management certificates and application-specific accuracy or takt remain unverified unless supported by current scoped documents and an acceptance test.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "LAP 复材方案由 CAD-PRO 投影仪、PRO-SOFT 数据和投影软件、INSPECT-PRO 质量辅助以及 DTEC-PRO 摄像系统构成，可为普通复材和风电叶片铺层提供轮廓、次序和部件定位。询价应定义工件包络、投影距离/角度、线宽、可视环境、精度与重复性、CAD 格式、坐标和校准基准、投影数量和遮挡、配方权限、数据记录、网络接口、安全等级及节拍。FAT/SAT 应用买方真实模具和 CAD 数据验证校准、漂移、覆盖、重叠、换型、断电恢复、质量记录和操作培训，不能用官网通用应用图替代现场验收。",
  productsServicesSummaryEn:
    "LAP's composites solution combines CAD-PRO projectors, PRO-SOFT data preparation and projection software, INSPECT-PRO quality support and DTEC-PRO camera systems for contour, sequence and component-position guidance in general composite and rotor-blade layup. An RFQ should define the mold and workpiece envelope, curvature, projection distance and angle, mounting constraints, line color and width, ambient light, required visibility, dimensional accuracy and repeatability, working temperature, dust and vibration, number of simultaneous work zones and any operator or equipment occlusion. Add the CAD and manufacturing-data formats, coordinate system, datum strategy, ply naming and sequence, revision control, user roles, recipe approval, traceability, image or result retention, MES or PLM interfaces, backup, cybersecurity and permitted remote access. The supplier should produce a coverage and projector-layout study that identifies blind areas, overlap, calibration targets, structures, cabling and service access. Where multiple projectors share a work area, define blending or handover, coordinate alignment and recovery after a unit is moved. Camera-assisted calibration and INSPECT-PRO functions should be tied to measurable acceptance steps; a projected outline can guide an operator but does not itself prove ply material, orientation, debulk, cure or laminate quality. FAT should use representative CAD data and a suitable target or mold to test data import, projection geometry, calibration, drift, switching, alarms, user permissions and record export. SAT should repeat with the buyer's actual mold, lighting, fixtures, operators and network, including sustained use, changeover, power-loss recovery, backup restoration and training. For rotor blades, state shell, spar-cap, root, web, core and insert workflows separately, identify gantries or moving structures, and define how the system handles long molds and accumulated coordinate error. The quotation should separate projectors, mounts, cameras, calibration targets, workstations, software licences, interfaces, installation, commissioning, training, calibration, maintenance, spares and travel. Obtain current manuals, electrical and network requirements, laser classification and safety instructions, software support policy and service response. Published application pages establish an equipment use case only; they do not make LAP a manufacturer of prepreg, dry fiber, carbon or glass products, laminates or wind-turbine blades, so those product-demand keywords remain excluded.",
  ecatalogs: [
    { title: "LAP 中国官网", titleEn: "Official LAP China Website", description: "中国产品、行业和服务入口。", descriptionEn: "Official China product, industry and service entry.", url: "https://www.lap-laser.com.cn/", format: "Official website" },
    { title: "复合材料行业方案", titleEn: "Composites Industry Solutions", description: "复材激光投影应用总览。", descriptionEn: "Official composite laser-projection overview.", url: "https://www.lap-laser.com.cn/industries2/composites", format: "Industry page" },
    { title: "复合材料铺层", titleEn: "Composite Layup", description: "铺层轮廓和定位工作流。", descriptionEn: "Official ply-contour and positioning workflow.", url: "https://www.lap-laser.com.cn/industries/composite-layup", format: "Application page" },
    { title: "风电叶片制造", titleEn: "Rotor-Blade Manufacturing", description: "叶片铺层和部件定位应用。", descriptionEn: "Official blade-layup and component-positioning application.", url: "https://www.lap-laser.com.cn/industries4/rotor-blade-manufacturing", format: "Application page" },
    { title: "CAD-PRO Xpert", titleEn: "CAD-PRO Xpert", description: "激光投影仪产品说明。", descriptionEn: "Official laser-projector product page.", url: "https://www.lap-laser.com.cn/product4/cad-pro-xpert-%e6%bf%80%e5%85%89%e6%8a%95%e5%bd%b1%e4%bb%aa", format: "Product page" },
    { title: "LAP 中国法律信息", titleEn: "LAP China Imprint", description: "上海主体、地址、电话和邮箱。", descriptionEn: "Official Shanghai entity, address, telephone and email.", url: "https://www.lap-laser.com.cn/companyaddress/imprint/", format: "Legal contact" },
    { title: "中国国际复材展 L 字母页", titleEn: "China Composites Expo — L Directory", description: "上海主体与复材铺层投影设备范围。", descriptionEn: "Organizer source for the Shanghai entity and composite-layup projection scope.", url: "https://www.chinacompositesexpo.com/cn/netshow.php?head=L", format: "Exhibitor directory" },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/lap-shanghai-logo.png",
  contactEmail: "info@lap-laser.com",
  contactPhone: "+86 21 5047 8881",
  address: "4F East, Building 10, Lujiazui Software Park, No. 61 Lane 91 Eshan Road, Pudong, Shanghai 200127, China",
  website: "https://www.lap-laser.com.cn/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 26,
  viewCount: 0,
  capabilities: ["CAD laser projection", "composite layup guidance", "rotor-blade positioning", "projection software", "camera-assisted calibration", "quality-inspection software", "system integration", "calibration and training"],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
