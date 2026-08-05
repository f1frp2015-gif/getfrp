import { z } from "zod";

const optionalNumber = (max: number) =>
  z.number().int().min(0).max(max).nullable();

export const SupplierProductInput = z
  .object({
    relationshipType: z.enum(["manufacturer", "supplier", "distributor", "agent"]),
    supplierProductName: z.string().trim().max(200),
    supplierSku: z.string().trim().max(120),
    isPrimary: z.boolean(),
    customAvailable: z.boolean(),
    moq: optionalNumber(100_000_000),
    moqUnit: z.string().trim().max(24),
    leadTimeDays: optionalNumber(3650),
    specificationOverrides: z.record(z.string().trim().min(1).max(160), z.string().trim().max(500)),
    evidence: z
      .object({
        sourceType: z.string().trim().max(80),
        sourceUrl: z.string().trim().max(1_000),
        note: z.string().trim().max(2_000),
      })
      .strict(),
  })
  .strict()
  .superRefine((value, ctx) => {
    if (value.evidence.sourceUrl && !/^https:\/\//i.test(value.evidence.sourceUrl)) {
      ctx.addIssue({
        code: "custom",
        path: ["evidence", "sourceUrl"],
        message: "Evidence URL must use HTTPS.",
      });
    }
  });

export type SupplierProductValues = z.infer<typeof SupplierProductInput>;

export function supplierProductDbValues(value: SupplierProductValues) {
  return {
    relationshipType: value.relationshipType,
    supplierProductName: value.supplierProductName || null,
    supplierSku: value.supplierSku || null,
    isPrimary: value.isPrimary,
    customAvailable: value.customAvailable,
    moq: value.moq,
    moqUnit: value.moqUnit || null,
    leadTimeDays: value.leadTimeDays,
    specificationOverrides: value.specificationOverrides,
    evidence:
      value.evidence.sourceType || value.evidence.sourceUrl || value.evidence.note
        ? {
            sourceType: value.evidence.sourceType || undefined,
            sourceUrl: value.evidence.sourceUrl || undefined,
            note: value.evidence.note || undefined,
          }
        : null,
  };
}
