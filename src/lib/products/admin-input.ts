import { z } from "zod";

const shortText = (max: number) => z.string().trim().max(max);
const stringList = z.array(z.string().trim().min(1).max(300)).max(100);

const specification = z.object({
  field: shortText(160).min(1),
  typicalRange: shortText(300),
  sourcingNote: shortText(600),
});

const faq = z.object({
  question: shortText(500).min(1),
  answer: z.string().trim().min(1).max(4_000),
});

export const ProductAdminInput = z
  .object({
    slug: z
      .string()
      .trim()
      .min(2)
      .max(120)
      .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use a lowercase URL slug."),
    name: shortText(200).min(1),
    nameEn: shortText(200).min(1),
    shortName: shortText(120),
    category: shortText(80).min(1),
    summary: z.string().trim().min(1).max(2_000),
    description: z.string().trim().max(20_000),
    overview: stringList,
    materials: stringList,
    manufacturingProcesses: stringList,
    applications: stringList,
    standards: stringList,
    specifications: z.array(specification).max(50),
    buyingChecks: stringList,
    faqs: z.array(faq).max(50),
    searchTerms: stringList,
    imageUrl: z.string().trim().max(1_000),
    imageAlt: shortText(300),
    status: z.enum(["draft", "published"]),
  })
  .strict()
  .superRefine((value, ctx) => {
    if (value.imageUrl && !value.imageUrl.startsWith("/")) {
      ctx.addIssue({
        code: "custom",
        path: ["imageUrl"],
        message: "Image URL must be a local public path beginning with /.",
      });
    }
  });

export type ProductAdminValues = z.infer<typeof ProductAdminInput>;

export function productDbValues(value: ProductAdminValues) {
  return {
    ...value,
    shortName: value.shortName || null,
    description: value.description || null,
    imageUrl: value.imageUrl || null,
    imageAlt: value.imageAlt || null,
  };
}
