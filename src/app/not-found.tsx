import "./globals.css";
import Link from "next/link";
import { ArrowRight, Boxes, Building2, Compass, FileCheck, Search } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export const metadata = {
  title: "404 Page Not Found | GetFRP",
  description: "The page you requested could not be found. Browse FRP products and China manufacturers on GetFRP.",
  robots: { index: false, follow: true },
};

export default function RootNotFound() {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased">
        <main className="min-h-[80vh] flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/50 px-3.5 py-1 text-xs font-mono font-medium text-muted-foreground uppercase tracking-widest">
              <span>Error 404</span>
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              <span>Page Not Found</span>
            </div>

            <h1 className="mt-6 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl text-foreground">
              Looking for an FRP product or China manufacturer?
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground leading-relaxed">
              The link you followed may have been updated, renamed, or permanently moved.
              Use the core resources below to navigate directly to verified supply-chain data.
            </p>

            <div className="mt-10 grid gap-4 text-left sm:grid-cols-2">
              <Link
                href="/products"
                className="group flex flex-col justify-between rounded-xl border border-border/80 bg-card p-5 transition-all duration-150 hover:border-primary/50 hover:bg-muted/30"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-primary">
                      <Boxes className="h-4 w-4" />
                    </div>
                    <h2 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      FRP Products Catalog
                    </h2>
                  </div>
                  <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
                    Compare molded and pultruded grating, structural profiles, pipe, sheet, and rebar.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary">
                  <span>Explore</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>

              <Link
                href="/suppliers"
                className="group flex flex-col justify-between rounded-xl border border-border/80 bg-card p-5 transition-all duration-150 hover:border-primary/50 hover:bg-muted/30"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-primary">
                      <Building2 className="h-4 w-4" />
                    </div>
                    <h2 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      China Supplier Directory
                    </h2>
                  </div>
                  <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
                    Search verified FRP manufacturers, enterprise records, and production capabilities.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary">
                  <span>Explore</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>

              <Link
                href="/standards"
                className="group flex flex-col justify-between rounded-xl border border-border/80 bg-card p-5 transition-all duration-150 hover:border-primary/50 hover:bg-muted/30"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-primary">
                      <Compass className="h-4 w-4" />
                    </div>
                    <h2 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      Standards Crosswalk
                    </h2>
                  </div>
                  <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
                    Compare GB, ASTM, ISO, and EN test methods before specifying composite parts.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary">
                  <span>Explore</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>

              <Link
                href="/source-from-china"
                className="group flex flex-col justify-between rounded-xl border border-border/80 bg-card p-5 transition-all duration-150 hover:border-primary/50 hover:bg-muted/30"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-primary">
                      <FileCheck className="h-4 w-4" />
                    </div>
                    <h2 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      Source from China Playbook
                    </h2>
                  </div>
                  <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
                    Step-by-step guidance for RFQ preparation, QA inspection, and export logistics.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary">
                  <span>Explore</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/"
                className={buttonVariants({ variant: "default", size: "lg" })}
              >
                Return to Homepage
              </Link>
              <Link
                href="/suppliers"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                <Search className="mr-1.5 h-4 w-4" />
                Search Directory
              </Link>
              <Link
                href="/rfq"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                Submit an RFQ
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
