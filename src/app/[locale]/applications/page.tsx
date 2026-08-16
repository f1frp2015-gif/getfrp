import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Check, Layers3 } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { JsonLd } from "@/components/json-ld";
import { Link } from "@/i18n/navigation";
import {
  FRP_APPLICATION_GROUPS,
  FRP_APPLICATION_USE_CASE_COUNT,
  FRP_APPLICATIONS,
} from "@/lib/data/frp-applications";
import { alternates, og } from "@/lib/seo";
import { CURRENT_SITE_URL } from "@/lib/sites";

const title = "FRP Applications by Industry | Composite Solutions | getfrp";
const description =
  "Explore 120 FRP use cases across 20 industries, from aerospace, automotive and infrastructure to energy, water, mining, medical and consumer products.";

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

      <section className="fiber-surface-dark border-b border-white/10 text-white">
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
            <div className="mt-5 grid grid-cols-2 gap-5">
              <div>
                <div className="text-4xl font-semibold">{FRP_APPLICATIONS.length}</div>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.15em] text-[#d9dfe8]">
                  End-use sectors
                </p>
              </div>
              <div>
                <div className="text-4xl font-semibold">
                  {FRP_APPLICATION_USE_CASE_COUNT}
                </div>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.15em] text-[#d9dfe8]">
                  Example use cases
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-[#d9dfe8]">
              Each sector connects practical applications to relevant products
              and supply capability.
            </p>
          </div>
        </div>
      </section>

      <section className="fiber-surface-light">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <div className="flex flex-col justify-between gap-5 border-b border-[#cbd3de] pb-7 md:flex-row md:items-end">
            <div>
              <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#123f8c]">
                Browse by operating environment
              </div>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.035em] text-[#0a1f44] sm:text-4xl">
                Twenty industries. One connected FRP supply chain.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#5d6672]">
              Open an industry to search matching products and suppliers, or
              submit the service conditions for a specification-led shortlist.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {FRP_APPLICATION_GROUPS.map((group) => (
              <a
                key={group.id}
                href={`#${group.id}`}
                className="rounded-full border border-[#cbd3de] bg-white px-4 py-2 text-xs font-semibold text-[#123f8c] transition hover:border-[#19c3c8] hover:text-[#0a1f44]"
              >
                {group.title}
              </a>
            ))}
          </div>

          <p className="mt-5 max-w-4xl text-xs leading-5 text-[#6a7481]">
            Coverage is benchmarked against the end-use sectors published by{" "}
            <a
              href="https://www.jec-world.events/about-jec-world"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#123f8c] underline decoration-[#aeb8c6] underline-offset-4 hover:decoration-[#123f8c]"
            >
              JEC World
            </a>{" "}
            and the market segments listed by{" "}
            <a
              href="https://www.thecamx.org/why-attend/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#123f8c] underline decoration-[#aeb8c6] underline-offset-4 hover:decoration-[#123f8c]"
            >
              CAMX
            </a>
            , then extended with recurring industrial FRP use cases.
          </p>

          <div className="mt-14 space-y-16">
            {FRP_APPLICATION_GROUPS.map((group) => {
              const applications = FRP_APPLICATIONS.filter(
                (application) => application.group === group.id,
              );

              return (
                <section id={group.id} key={group.id} className="scroll-mt-24">
                  <div className="grid gap-3 border-t border-[#cbd3de] pt-6 md:grid-cols-[minmax(0,1fr)_minmax(18rem,30rem)] md:items-end">
                    <div>
                      <div className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#123f8c]">
                        {group.eyebrow}
                      </div>
                      <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[#0a1f44] sm:text-3xl">
                        {group.title}
                      </h2>
                    </div>
                    <p className="text-sm leading-6 text-[#5d6672]">
                      {group.description}
                    </p>
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {applications.map((application) => {
                      const index = FRP_APPLICATIONS.indexOf(application);

                      return (
                        <Link
                          id={application.slug}
                          key={application.slug}
                          href={
                            (application.detailPath ??
                              `/suppliers/search?q=${encodeURIComponent(application.searchQuery)}`) as never
                          }
                          className="group relative min-h-[31rem] overflow-hidden rounded-xl bg-[#0a1f44] text-white shadow-sm outline-none transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-[#19c3c8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f6f9]"
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
                            loading={index === 0 ? "eager" : "lazy"}
                            sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) 50vw, 33vw"
                            className="object-cover transition duration-700 ease-out group-hover:scale-[1.045] motion-reduce:transition-none"
                            style={{ objectPosition: application.imagePosition }}
                          />
                          <div
                            aria-hidden="true"
                            className="absolute inset-0 bg-gradient-to-t from-[#06152f] via-[#071a38]/62 to-[#071a38]/5 transition duration-300 group-hover:via-[#071a38]/52"
                          />
                          <div
                            aria-hidden="true"
                            className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[#19c3c8] transition-transform duration-500 group-hover:scale-x-100"
                          />

                          <div className="relative flex h-full min-h-[31rem] flex-col justify-between p-5 sm:p-6">
                            <div className="flex items-start justify-between gap-4">
                              <span className="rounded-full border border-white/25 bg-[#071a38]/35 px-3 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                                {application.eyebrow}
                              </span>
                              <span className="font-mono text-[10px] text-white/70">
                                {String(index + 1).padStart(2, "0")}
                              </span>
                            </div>

                            <div>
                              <h3 className="max-w-xl text-2xl font-semibold tracking-[-0.03em] sm:text-[1.7rem]">
                                {application.title}
                              </h3>
                              <p className="mt-3 max-w-xl text-[13px] leading-6 text-white/82">
                                {application.description}
                              </p>
                              <div className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2 border-t border-white/20 pt-4">
                                {application.useCases.map((useCase) => (
                                  <span
                                    key={useCase}
                                    className="inline-flex items-start gap-1.5 text-[10px] font-medium leading-4 text-white/90"
                                  >
                                    <Check
                                      size={11}
                                      className="mt-0.5 shrink-0 text-[#7be4e1]"
                                      aria-hidden="true"
                                    />
                                    {useCase}
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
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="fiber-surface-dark grid rounded-xl border border-[#d9dfe8] text-white lg:grid-cols-[1fr_auto] lg:items-center">
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
