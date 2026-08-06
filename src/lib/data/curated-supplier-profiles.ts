import type { SupplierListing } from "@/lib/db/schema";
import { AOC_SUPPLIER_PROFILE } from "@/lib/data/aoc-supplier-profile";
import { CROTTI_SUPPLIER_PROFILE } from "@/lib/data/crotti-supplier-profile";
import { HORSE_CONSTRUCTION_SUPPLIER_PROFILE } from "@/lib/data/horse-construction-supplier-profile";
import { JUFA_SUPPLIER_PROFILE } from "@/lib/data/jufa-supplier-profile";
import {
  JUSHI_LEGACY_SLUG,
  JUSHI_SUPPLIER_PROFILE,
} from "@/lib/data/jushi-supplier-profile";
import { JIUDING_SUPPLIER_PROFILE } from "@/lib/data/jiuding-supplier-profile";
import { NOAH_COMPOSITES_SUPPLIER_PROFILE } from "@/lib/data/noah-composites-supplier-profile";
import { RUNSING_SUPPLIER_PROFILE } from "@/lib/data/runsing-supplier-profile";
import { SINAUVA_SUPPLIER_PROFILE } from "@/lib/data/sinauva-composites-supplier-profile";
import { SINO_COMPOSITE_SUPPLIER_PROFILE } from "@/lib/data/sino-composite-supplier-profile";
import { SPARE_COMPOSITES_SUPPLIER_PROFILE } from "@/lib/data/spare-composites-supplier-profile";
import { STRONGFIBRE_SUPPLIER_PROFILE } from "@/lib/data/strongfibre-supplier-profile";
import { TAISHAN_SUPPLIER_PROFILE } from "@/lib/data/taishan-supplier-profile";
import { TECHSTORM_SUPPLIER_PROFILE } from "@/lib/data/techstorm-supplier-profile";
import { TENGJUN_FRP_SUPPLIER_PROFILE } from "@/lib/data/tengjun-frp-supplier-profile";
import { WANHUA_SUPPLIER_PROFILE } from "@/lib/data/wanhua-supplier-profile";
import { WELLS_WAM_SUPPLIER_PROFILE } from "@/lib/data/wells-wam-supplier-profile";
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
  { profile: AOC_SUPPLIER_PROFILE },
  { profile: HORSE_CONSTRUCTION_SUPPLIER_PROFILE },
  { profile: WANHUA_SUPPLIER_PROFILE },
  { profile: JUSHI_SUPPLIER_PROFILE, legacySlugs: [JUSHI_LEGACY_SLUG] },
  { profile: TAISHAN_SUPPLIER_PROFILE },
  {
    profile: ZHONGFU_SHENYING_SUPPLIER_PROFILE,
    legacySlugs: [ZHONGFU_SHENYING_LEGACY_SLUG],
  },
  { profile: NOAH_COMPOSITES_SUPPLIER_PROFILE },
  { profile: SINAUVA_SUPPLIER_PROFILE },
  { profile: RUNSING_SUPPLIER_PROFILE },
  { profile: JIUDING_SUPPLIER_PROFILE },
  { profile: JUFA_SUPPLIER_PROFILE },
  { profile: CROTTI_SUPPLIER_PROFILE },
  { profile: STRONGFIBRE_SUPPLIER_PROFILE },
  { profile: SPARE_COMPOSITES_SUPPLIER_PROFILE },
  { profile: WELLS_WAM_SUPPLIER_PROFILE },
  { profile: TECHSTORM_SUPPLIER_PROFILE },
  { profile: TENGJUN_FRP_SUPPLIER_PROFILE },
  { profile: SINO_COMPOSITE_SUPPLIER_PROFILE },
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
  // Once a supplier has claimed and linked the profile, its database-managed
  // content becomes authoritative. Curated content remains a fallback for
  // public, unclaimed seed records.
  if (databaseProfile.enterpriseId) return databaseProfile;

  const curatedProfile =
    getCuratedSupplierProfile(databaseProfile.id) ??
    (databaseProfile.slug
      ? getCuratedSupplierProfile(databaseProfile.slug)
      : null);
  if (!curatedProfile) return databaseProfile;

  return {
    ...databaseProfile,
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
  };
}
