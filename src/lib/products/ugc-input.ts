import { z } from "zod";

const trimmedList = z.array(z.string().trim().min(1).max(160)).max(40);

export const SupplierProductPageInput = z
  .object({
    categoryId: z.string().trim().min(1).max(100),
    name: z.string().trim().min(12).max(240),
    description: z.string().trim().min(100).max(20_000),
    images: z.array(z.string().trim().min(1).max(2_000)).min(1).max(12),
    material: z.string().trim().min(2).max(160),
    manufacturingProcesses: trimmedList.min(1),
    applications: trimmedList,
    standards: trimmedList,
    parameters: z.record(
      z.string().trim().min(1).max(160),
      z.string().trim().min(1).max(500),
    ),
    certifications: trimmedList,
    moq: z.number().int().positive().max(100_000_000).nullable(),
    moqUnit: z.string().trim().max(24),
    exportMarkets: trimmedList.min(1),
    videoUrl: z.string().trim().max(2_000),
    priceRange: z.string().trim().max(160),
  })
  .strict()
  .superRefine((value, ctx) => {
    for (const [index, image] of value.images.entries()) {
      if (!image.startsWith("/supplier-product-assets/") && !image.startsWith("/images/product-types/")) {
        ctx.addIssue({
          code: "custom",
          path: ["images", index],
          message: "Product images must use GetFRP's managed product-image storage.",
        });
      }
    }
    if (value.videoUrl && !/^https:\/\//i.test(value.videoUrl)) {
      ctx.addIssue({
        code: "custom",
        path: ["videoUrl"],
        message: "Video URL must use HTTPS.",
      });
    }
  });

export type SupplierProductPageValues = z.infer<typeof SupplierProductPageInput>;

export function supplierProductPageDbValues(value: SupplierProductPageValues) {
  return {
    ...value,
    moqUnit: value.moqUnit || null,
    videoUrl: value.videoUrl || null,
    priceRange: value.priceRange || null,
  };
}

export const ProductReviewInput = z
  .object({
    action: z.enum(["approved", "rejected"]),
    reason: z.string().trim().max(4_000),
  })
  .strict()
  .superRefine((value, ctx) => {
    if (value.action === "rejected" && value.reason.length < 5) {
      ctx.addIssue({
        code: "custom",
        path: ["reason"],
        message: "A rejection reason is required.",
      });
    }
  });
