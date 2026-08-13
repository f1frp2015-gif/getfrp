import type { SupplierListing } from "@/lib/db/schema";
import { AOC_SUPPLIER_PROFILE } from "@/lib/data/aoc-supplier-profile";
import { ANJIE_SUPPLIER_PROFILE } from "@/lib/data/anjie-supplier-profile";
import { CHANGSHENG_CARBON_SUPPLIER_PROFILE } from "@/lib/data/changsheng-carbon-supplier-profile";
import { CHONGQING_DUJIANG_SUPPLIER_PROFILE } from "@/lib/data/chongqing-dujiang-supplier-profile";
import { CPIC_SUPPLIER_PROFILE } from "@/lib/data/cpic-supplier-profile";
import { EASTFRP_SUPPLIER_PROFILE } from "@/lib/data/eastfrp-supplier-profile";
import { HEBEI_WEITONG_SUPPLIER_PROFILE } from "@/lib/data/hebei-weitong-supplier-profile";
import { CROTTI_SUPPLIER_PROFILE } from "@/lib/data/crotti-supplier-profile";
import { FANGHUA_SUPPLIER_PROFILE } from "@/lib/data/fanghua-supplier-profile";
import {
  F1_COMPOSITE_SUPPLIER_ID,
  F1_COMPOSITE_SUPPLIER_PROFILE,
} from "@/lib/data/f1-composite-supplier-profile";
import {
  HONGFU_TONGXIN_SUPPLIER_PROFILE,
} from "@/lib/data/hongfu-tongxin-supplier-profile";
import { HORSE_CONSTRUCTION_SUPPLIER_PROFILE } from "@/lib/data/horse-construction-supplier-profile";
import { JUFA_SUPPLIER_PROFILE } from "@/lib/data/jufa-supplier-profile";
import { KEERDA_SUPPLIER_PROFILE } from "@/lib/data/keerda-supplier-profile";
import {
  JUSHI_LEGACY_SLUG,
  JUSHI_SUPPLIER_PROFILE,
} from "@/lib/data/jushi-supplier-profile";
import { JIUDING_SUPPLIER_PROFILE } from "@/lib/data/jiuding-supplier-profile";
import { MAXTONE_SUPPLIER_PROFILE } from "@/lib/data/maxtone-supplier-profile";
import { MATEX_SUPPLIER_PROFILE } from "@/lib/data/matex-supplier-profile";
import { NANJING_EFG_SUPPLIER_PROFILE } from "@/lib/data/nanjing-efg-supplier-profile";
import { NANJING_LOYALTY_SUPPLIER_PROFILE } from "@/lib/data/nanjing-loyalty-supplier-profile";
import { NOAH_COMPOSITES_SUPPLIER_PROFILE } from "@/lib/data/noah-composites-supplier-profile";
import { PULWELL_SUPPLIER_PROFILE } from "@/lib/data/pulwell-supplier-profile";
import { RUNSING_SUPPLIER_PROFILE } from "@/lib/data/runsing-supplier-profile";
import { SHENGLI_LIMITED_SUPPLIER_PROFILE } from "@/lib/data/shengli-limited-supplier-profile";
import { SINAUVA_SUPPLIER_PROFILE } from "@/lib/data/sinauva-composites-supplier-profile";
import { SINO_COMPOSITE_SUPPLIER_PROFILE } from "@/lib/data/sino-composite-supplier-profile";
import { SUZHOU_GREENTECH_SUPPLIER_PROFILE } from "@/lib/data/suzhou-greentech-supplier-profile";
import { SPARE_COMPOSITES_SUPPLIER_PROFILE } from "@/lib/data/spare-composites-supplier-profile";
import { STRONGFIBRE_SUPPLIER_PROFILE } from "@/lib/data/strongfibre-supplier-profile";
import { TAISHAN_SUPPLIER_PROFILE } from "@/lib/data/taishan-supplier-profile";
import { TANGSHAN_RUNFENG_SUPPLIER_PROFILE } from "@/lib/data/tangshan-runfeng-supplier-profile";
import { TECHSTORM_SUPPLIER_PROFILE } from "@/lib/data/techstorm-supplier-profile";
import { TENGJUN_FRP_SUPPLIER_PROFILE } from "@/lib/data/tengjun-frp-supplier-profile";
import { TLB_SUPPLIER_PROFILE } from "@/lib/data/tlb-supplier-profile";
import { TUOTIAN_SUPPLIER_PROFILE } from "@/lib/data/tuotian-supplier-profile";
import { WANHUA_SUPPLIER_PROFILE } from "@/lib/data/wanhua-supplier-profile";
import { WELLS_WAM_SUPPLIER_PROFILE } from "@/lib/data/wells-wam-supplier-profile";
import { XIAMEN_LFT_SUPPLIER_PROFILE } from "@/lib/data/xiamen-lft-supplier-profile";
import { YUTO_NEW_MATERIAL_SUPPLIER_PROFILE } from "@/lib/data/yuto-new-material-supplier-profile";
import { ZHEJIANG_HUAFENG_SUPPLIER_PROFILE } from "@/lib/data/zhejiang-huafeng-supplier-profile";
import { ZHEJIANG_TIANHE_RESIN_SUPPLIER_PROFILE } from "@/lib/data/zhejiang-tianhe-resin-supplier-profile";
import {
  ZHONGSHENG_FIBERGLASS_SUPPLIER_PROFILE,
} from "@/lib/data/zhongsheng-fiberglass-supplier-profile";
import {
  ZHONGFU_SHENYING_LEGACY_SLUG,
  ZHONGFU_SHENYING_SUPPLIER_PROFILE,
} from "@/lib/data/zhongfu-shenying-supplier-profile";

type CuratedSupplierProfileEntry = {
  profile: SupplierListing;
  legacySlugs?: readonly string[];
};

// Git-backed public profiles are the resilient fallback for supplier pages and
// the directory. Unclaimed database rows retain their identity/trust state but
// receive reviewed public content from the matching Git profile.
export const CURATED_SUPPLIER_PROFILES: readonly CuratedSupplierProfileEntry[] = [
  { profile: F1_COMPOSITE_SUPPLIER_PROFILE },
  { profile: AOC_SUPPLIER_PROFILE },
  { profile: ANJIE_SUPPLIER_PROFILE },
  { profile: CHANGSHENG_CARBON_SUPPLIER_PROFILE },
  { profile: HONGFU_TONGXIN_SUPPLIER_PROFILE },
  { profile: HORSE_CONSTRUCTION_SUPPLIER_PROFILE },
  { profile: WANHUA_SUPPLIER_PROFILE },
  { profile: JUSHI_SUPPLIER_PROFILE, legacySlugs: [JUSHI_LEGACY_SLUG] },
  { profile: CPIC_SUPPLIER_PROFILE },
  { profile: EASTFRP_SUPPLIER_PROFILE },
  { profile: HEBEI_WEITONG_SUPPLIER_PROFILE },
  { profile: CHONGQING_DUJIANG_SUPPLIER_PROFILE },
  { profile: TAISHAN_SUPPLIER_PROFILE },
  {
    profile: ZHONGFU_SHENYING_SUPPLIER_PROFILE,
    legacySlugs: [ZHONGFU_SHENYING_LEGACY_SLUG],
  },
  { profile: NOAH_COMPOSITES_SUPPLIER_PROFILE },
  { profile: PULWELL_SUPPLIER_PROFILE },
  { profile: SINAUVA_SUPPLIER_PROFILE },
  { profile: RUNSING_SUPPLIER_PROFILE },
  { profile: SHENGLI_LIMITED_SUPPLIER_PROFILE },
  { profile: JIUDING_SUPPLIER_PROFILE },
  { profile: MAXTONE_SUPPLIER_PROFILE },
  { profile: MATEX_SUPPLIER_PROFILE },
  { profile: NANJING_EFG_SUPPLIER_PROFILE },
  { profile: NANJING_LOYALTY_SUPPLIER_PROFILE },
  { profile: JUFA_SUPPLIER_PROFILE },
  { profile: KEERDA_SUPPLIER_PROFILE },
  { profile: CROTTI_SUPPLIER_PROFILE },
  { profile: FANGHUA_SUPPLIER_PROFILE },
  { profile: STRONGFIBRE_SUPPLIER_PROFILE },
  { profile: SPARE_COMPOSITES_SUPPLIER_PROFILE },
  { profile: WELLS_WAM_SUPPLIER_PROFILE },
  { profile: TANGSHAN_RUNFENG_SUPPLIER_PROFILE },
  { profile: TECHSTORM_SUPPLIER_PROFILE },
  { profile: TENGJUN_FRP_SUPPLIER_PROFILE },
  { profile: TLB_SUPPLIER_PROFILE },
  { profile: TUOTIAN_SUPPLIER_PROFILE },
  { profile: SINO_COMPOSITE_SUPPLIER_PROFILE },
  { profile: SUZHOU_GREENTECH_SUPPLIER_PROFILE },
  { profile: XIAMEN_LFT_SUPPLIER_PROFILE },
  { profile: YUTO_NEW_MATERIAL_SUPPLIER_PROFILE },
  { profile: ZHEJIANG_HUAFENG_SUPPLIER_PROFILE },
  { profile: ZHEJIANG_TIANHE_RESIN_SUPPLIER_PROFILE },
  { profile: ZHONGSHENG_FIBERGLASS_SUPPLIER_PROFILE },
];

export function getCuratedSupplierProfile(
  idOrSlug: string,
): SupplierListing | null {
  const entry = CURATED_SUPPLIER_PROFILES.find(
    ({ profile, legacySlugs }) =>
      profile.id === idOrSlug ||
      profile.slug === idOrSlug ||
      legacySlugs?.includes(idOrSlug),
  );
  return entry?.profile ?? null;
}

export function getCuratedSupplierSlugs(): string[] {
  return CURATED_SUPPLIER_PROFILES.flatMap(({ profile }) =>
    profile.slug ? [profile.slug] : [],
  );
}

export function enrichSupplierWithCuratedProfile(
  databaseProfile: SupplierListing,
): SupplierListing {
  const curatedProfile =
    getCuratedSupplierProfile(databaseProfile.id) ??
    (databaseProfile.slug
      ? getCuratedSupplierProfile(databaseProfile.slug)
      : null);
  if (!curatedProfile) return databaseProfile;

  const isF1Composite = databaseProfile.id === F1_COMPOSITE_SUPPLIER_ID;

  // Once a supplier has claimed and linked the profile, its database-managed
  // content becomes authoritative. F1 Composite is the deliberate exception:
  // its verified sponsored identity and public presentation are also reviewed
  // in Git so a broken enterprise join cannot remove the logo or trust state.
  if (databaseProfile.enterpriseId && !isF1Composite) return databaseProfile;

  return {
    ...databaseProfile,
    // The Git-backed profile is the page content source, so its published
    // state must also drive directory filtering and ranking. Otherwise an old
    // database seed can have a live profile page but still rank as unpublished.
    profilePublished:
      databaseProfile.profilePublished || curatedProfile.profilePublished,
    location: curatedProfile.location,
    locationEn: curatedProfile.locationEn,
    province: curatedProfile.province,
    category: curatedProfile.category,
    products: curatedProfile.products,
    productsEn: curatedProfile.productsEn,
    processList: curatedProfile.processList,
    processListEn: curatedProfile.processListEn,
    established: curatedProfile.established,
    description: curatedProfile.description,
    descriptionEn: curatedProfile.descriptionEn,
    certifications: curatedProfile.certifications,
    certificationsEn: curatedProfile.certificationsEn,
    productsServicesSummary: curatedProfile.productsServicesSummary,
    productsServicesSummaryEn: curatedProfile.productsServicesSummaryEn,
    ecatalogs: curatedProfile.ecatalogs,
    profileReviewedAt: curatedProfile.profileReviewedAt,
    logo: curatedProfile.logo,
    contactEmail: curatedProfile.contactEmail,
    contactPhone: curatedProfile.contactPhone,
    address: curatedProfile.address,
    website: curatedProfile.website,
    scaleTier: curatedProfile.scaleTier ?? databaseProfile.scaleTier,
    capabilities: curatedProfile.capabilities,
    standardsSupported: curatedProfile.standardsSupported,
    exportReady: curatedProfile.exportReady,
    verified: isF1Composite
      ? Boolean(databaseProfile.verified || curatedProfile.verified)
      : databaseProfile.verified,
    enterpriseId: isF1Composite
      ? databaseProfile.enterpriseId ?? curatedProfile.enterpriseId
      : databaseProfile.enterpriseId,
    brandPriority: isF1Composite
      ? Math.max(
          databaseProfile.brandPriority ?? 0,
          curatedProfile.brandPriority ?? 0,
        )
      : databaseProfile.brandPriority,
  };
}
