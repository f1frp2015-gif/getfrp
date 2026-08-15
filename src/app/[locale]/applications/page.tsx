import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Check, Layers3 } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { JsonLd } from "@/components/json-ld";
import { Link } from "@/i18n/navigation";
import { FRP_APPLICATIONS } from "@/lib/data/frp-applications";
import { alternates, og } from "@/lib/seo";
import { CURRENT_SITE_URL } from "@/lib/sites";

const title = "FRP Applications by Industry | Composite Solutions | getfrp";
const description =
  "Explore FRP applications across infrastructure, chemical processing, water, wind, marine, rail, utilities and aerospace, with matched products and suppliers.";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: { absolute: title },
    description,
    alternates: alternates("/applications"),
    openGraph: og("/applications", { title, description }),
  };
}

export default async function ApplicationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const pageUrl = `${CURRENT_SITE_URL}/applications`;

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": `${pageUrl}#collection`,
          url: pageUrl,
          name: title,
          description,
          inLanguage: "en",
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: FRP_APPLICATIONS.length,
            itemListElement: FRP_APPLICATIONS.map((application, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: application.title,
              description: application.description,
              url: application.detailPath
                ? `${CURRENT_SITE_URL}${application.detailPath}`
                : `${pageUrl}#${application.slug}`,
            })),
          },
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${CURRENT_SITE_URL}/` },
          { name: "Applications", url: pageUrl },
        ]}
      />

      <section className="relative overflow-hidden border-b border-white/10 bg-[#071a38] text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(123,228,225,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(123,228,225,0.16)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_right,black,transparent_75%)]"
        />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end lg:py-24">
          <div className="max-w-4xl">
            <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7be4e1]">
              FRP application index
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-balance sm:text-6xl lg:text-7xl">
              Where FRP earns its place.
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-[#d9dfe8] sm:text-base">
              Start with the service environment, not the material name. Browse
              the industries where fiber-reinforced polymers solve corrosion,
              weight, insulation and maintenance problems at system level.
            </p>
          </div>

          <div className="border-l border-white/15 pl-6">
            <div className="flex items-center gap-3 text-[#7be4e1]">
              <Layers3 size={19} aria-hidden="true" />
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em]">
                Industry coverage
              </span>
            </div>
            <div className="mt-4 text-4xl font-semibold">{FRP_APPLICATIONS.length}</div>
            <p className="mt-2 text-sm leading-6 text-[#d9dfe8]">
              End-use sectors connected to relevant FRP products and Chinese
              supply capability.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f6f9]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <div className="flex flex-col justify-between gap-5 border-b border-[#cbd3de] pb-7 md:flex-row md:items-end">
            <div>
              <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#123f8c]">
                Browse by operating environment
              </div>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.035em] text-[#0a1f44] sm:text-4xl">
                Eight industries. One connected FRP supply chain.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#5d6672]">
              Open an industry to search matching products and suppliers, or
              submit the service conditions for a specification-led shortlist.
            </p>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {FRP_APPLICATIONS.map((application, index) => (
              <Link
                id={application.slug}
                key={application.slug}
                href={
                  (application.detailPath ??
                    `/suppliers/search?q=${encodeURIComponent(application.searchQuery)}`) as never
                }
                className={`group relative min-h-[28rem] overflow-hidden rounded-xl bg-[#0a1f44] text-white shadow-sm outline-none transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-[#19c3c8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f6f9] ${
                  application.wide ? "xl:col-span-2" : ""
                }`}
                aria-label={
                  application.detailPath
                    ? `Explore FRP for ${application.title}`
                    : `Find ${application.title} FRP suppliers`
                }
              >
                <Image
                  src={application.image}
                  alt={application.imageAlt}
                  fill
                  quality={75}
                  sizes={
                    application.wide
                      ? "(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) 50vw, 50vw"
                      : "(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) 50vw, 25vw"
                  }
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.045] motion-reduce:transition-none"
                  style={{ objectPosition: application.imagePosition }}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#06152f] via-[#071a38]/55 to-[#071a38]/5 transition duration-300 group-hover:via-[#071a38]/45"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[#19c3c8] transition-transform duration-500 group-hover:scale-x-100"
                />

                <div className="relative flex h-full min-h-[28rem] flex-col justify-between p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <span className="rounded-full border border-white/25 bg-[#071a38]/35 px-3 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                      {application.eyebrow}
                    </span>
                    <span className="font-mono text-[10px] text-white/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div>
                    <h3 className="max-w-xl text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                      {application.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-[13px] leading-6 text-white/82">
                      {application.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/20 pt-4">
                      {application.products.map((product) => (
                        <span
                          key={product}
                          className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/90"
                        >
                          <Check size={11} className="text-[#7be4e1]" aria-hidden="true" />
                          {product}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#7be4e1]">
                      {application.detailPath
                        ? "Explore application"
                        : "Find matched suppliers"}
                      <ArrowRight
                        size={14}
                        aria-hidden="true"
                        className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid overflow-hidden rounded-xl border border-[#d9dfe8] bg-[#0a1f44] text-white lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="p-7 sm:p-9">
              <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7be4e1]">
                Application engineering
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em]">
                Have a service case, not a finished specification?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#d9dfe8]">
                Send the load, environment, standard and target quantity. We&apos;ll
                translate them into a material, process and supplier shortlist.
              </p>
            </div>
            <div className="flex flex-col gap-3 border-t border-white/15 p-7 sm:flex-row lg:border-l lg:border-t-0 lg:p-9">
              <Link
                href="/rfq"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#19c3c8] px-5 text-sm font-semibold text-[#0a1f44] transition hover:bg-[#7be4e1]"
              >
                Submit an application brief
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link
                href="/ai"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/25 px-5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/5"
              >
                Ask FRP AI
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
