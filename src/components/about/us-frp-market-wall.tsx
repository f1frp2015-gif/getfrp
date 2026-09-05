import Image from "next/image";
import { ExternalLink, MapPin, Network } from "lucide-react";
import {
  US_FRP_MARKET_COMPANIES,
  US_FRP_MARKET_SOURCES,
} from "@/lib/data/us-frp-market-companies";

const STATE_COUNT = new Set(
  US_FRP_MARKET_COMPANIES.map((company) => company.location.split(", ").at(-1)),
).size;

export function UsFrpMarketWall() {
  return (
    <section
      aria-labelledby="us-frp-market-title"
      className="mb-12 overflow-hidden rounded-xl border border-border/70 bg-brand-navy text-white shadow-[0_18px_50px_rgba(10,31,68,0.14)]"
    >
      <div className="relative overflow-hidden border-b border-white/12 px-6 py-7 sm:px-8">
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-28 h-72 w-72 rounded-full border border-brand-teal/25"
        />
        <div
          aria-hidden="true"
          className="absolute -right-10 -top-16 h-48 w-48 rounded-full border border-brand-teal/20"
        />

        <div className="relative max-w-2xl">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-aqua">
            <Network size={13} strokeWidth={1.6} />
            U.S. composite market coverage
          </div>
          <h2
            id="us-frp-market-title"
            className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Mapped across the U.S. FRP buying ecosystem
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/68">
            A working market map of U.S.-listed distributors, fabricators and
            manufacturers with fiberglass or FRP capabilities. GetFRP uses this
            landscape to understand specifications, channels and sourcing needs
            across North America.
          </p>
        </div>

        <dl className="relative mt-6 grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-lg border border-white/12 bg-white/12">
          <Metric value={US_FRP_MARKET_COMPANIES.length.toString()} label="companies" />
          <Metric value={STATE_COUNT.toString()} label="U.S. states" />
          <Metric value="2" label="FRP directories" />
        </dl>
      </div>

      <div className="bg-[#f4f7fb] p-3 sm:p-4">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
          {US_FRP_MARKET_COMPANIES.map((company) => (
            <a
              key={company.name}
              href={company.website}
              target="_blank"
              rel="noreferrer"
              title={`${company.name} — ${company.location}`}
              className="group flex min-h-32 flex-col rounded-lg border border-brand-cool-gray/90 bg-white p-3 text-brand-graphite transition duration-200 hover:-translate-y-0.5 hover:border-brand-teal hover:shadow-[0_8px_22px_rgba(10,31,68,0.09)] focus-visible:ring-2 focus-visible:ring-brand-teal"
            >
              <div className="relative flex h-12 w-full items-center justify-center">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  fill
                  sizes="(max-width: 640px) 40vw, (max-width: 1024px) 26vw, 130px"
                  className="object-contain grayscale-[0.2] transition group-hover:grayscale-0"
                />
              </div>
              <div className="mt-auto pt-3">
                <div className="flex items-start justify-between gap-1">
                  <span className="line-clamp-2 text-[11px] font-semibold leading-tight">
                    {company.name}
                  </span>
                  <ExternalLink
                    aria-hidden="true"
                    size={10}
                    className="mt-0.5 shrink-0 text-brand-blue/45 transition group-hover:text-brand-blue"
                  />
                </div>
                <div className="mt-1 flex items-center gap-1 text-[9px] uppercase tracking-[0.08em] text-slate-500">
                  <MapPin aria-hidden="true" size={9} />
                  {company.location}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#071832] px-5 py-4 text-[10px] leading-relaxed text-white/50 sm:px-6">
        Market-reference set compiled from the public Thomasnet{" "}
        <a
          href={US_FRP_MARKET_SOURCES.shapes}
          target="_blank"
          rel="noreferrer"
          className="text-brand-aqua underline decoration-brand-aqua/35 hover:decoration-brand-aqua"
        >
          FRP Shapes
        </a>{" "}
        and{" "}
        <a
          href={US_FRP_MARKET_SOURCES.panels}
          target="_blank"
          rel="noreferrer"
          className="text-brand-aqua underline decoration-brand-aqua/35 hover:decoration-brand-aqua"
        >
          FRP Panels
        </a>{" "}
        directories; checked {US_FRP_MARKET_SOURCES.checkedAt}. Inclusion does
        not imply a current customer, buyer, partnership, approval or
        endorsement relationship with GetFRP. All trademarks belong to their
        respective owners.
      </div>
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white/6 px-3 py-3">
      <dt className="text-[9px] uppercase tracking-[0.12em] text-white/45">
        {label}
      </dt>
      <dd className="mt-0.5 text-xl font-semibold text-white">{value}</dd>
    </div>
  );
}
