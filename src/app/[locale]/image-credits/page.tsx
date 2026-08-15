import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { alternates } from "@/lib/seo";
import { FRP_APPLICATIONS } from "@/lib/data/frp-applications";
import { SUPPLIER_CATEGORY_PAGES } from "@/lib/data/supplier-category-pages";
import { SUPPLIER_CATEGORY_IMAGES } from "@/lib/data/supplier-category-images";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  await params;

  return {
    title: "Image credits",
    description: "Source and license details for third-party product and application images used by getfrp.",
    alternates: alternates("/image-credits"),
    robots: { index: false, follow: true },
  };
}

export default async function ImageCreditsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight">
        Image credits
      </h1>
      <p className="mt-4 text-sm leading-6 text-muted-foreground">
        The temporary product-category and application images below were cropped, resized and converted to WebP for this site. Each adapted image remains available under its source license; no creator or source endorses getfrp.
      </p>

      <ul className="mt-10 divide-y divide-border/70 border-y border-border/70">
        {SUPPLIER_CATEGORY_PAGES.map((category) => {
          const { credit } = SUPPLIER_CATEGORY_IMAGES[category.slug];
          return (
            <li key={category.slug} className="py-5">
              <h2 className="font-semibold">{category.shortName}</h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                <a
                  href={credit.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
                >
                  {credit.title}
                </a>{" "}
                · by {credit.creator} ·{" "}
                <a
                  href={credit.licenseUrl}
                  target="_blank"
                  rel="license noopener noreferrer"
                  className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
                >
                  {credit.license}
                </a>
              </p>
            </li>
          );
        })}
      </ul>

      <h2 className="mt-12 text-xl font-semibold">
        Application cover images
      </h2>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        These temporary application covers were downloaded, compressed and converted to SEO-named WebP files for local delivery.
      </p>
      <ul className="mt-6 divide-y divide-border/70 border-y border-border/70">
        {FRP_APPLICATIONS.map((application) => (
          <li key={application.slug} className="py-5">
            <h3 className="font-semibold">{application.title}</h3>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              <a
                href={application.credit.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
              >
                {application.credit.title}
              </a>{" "}
              · by {application.credit.creator} ·{" "}
              <a
                href={application.credit.licenseUrl}
                target="_blank"
                rel="license noopener noreferrer"
                className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
              >
                {application.credit.license}
              </a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
