import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { MarketplacePage } from "@/lib/data/seo-marketplace-pages";
import { ProcessCardVisual } from "@/components/marketplace/process-card-visual";

type DirectoryHubProps = {
  title: string;
  description: string;
  pages: MarketplacePage[];
  cardVisual?: "process";
};

export function DirectoryHub({
  title,
  description,
  pages,
  cardVisual,
}: DirectoryHubProps) {
  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
        {title}
      </h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
        {description}
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {pages.map((page) => (
          <Link
            key={page.path}
            href={page.path as never}
            className="group rounded-xl border p-6 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-foreground/40 hover:shadow-lg hover:shadow-brand-navy/5 focus-visible:ring-2 focus-visible:ring-brand-teal motion-reduce:transform-none motion-reduce:transition-none"
          >
            {cardVisual === "process" ? (
              <ProcessCardVisual process={page.slug} />
            ) : null}
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-xl font-semibold">{page.h1}</h2>
              <ArrowRight
                size={16}
                className="mt-1 shrink-0 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {page.summary}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
