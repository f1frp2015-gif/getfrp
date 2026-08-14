import type { Metadata } from "next";
import { ArrowRight, Building2, ClipboardList, MessageSquareText } from "lucide-react";
import { setRequestLocale } from "next-intl/server";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { alternates } from "@/lib/seo";
import { CURRENT_SITE_URL } from "@/lib/sites";

const title = "Contact GetFRP | Buyer RFQs & Supplier Support";
const description = "Contact GetFRP through the correct workflow for a buyer RFQ, supplier registration, company profile claim or marketplace support request.";

export async function generateMetadata(): Promise<Metadata> {
  return { title: { absolute: title }, description, alternates: alternates("/contact") };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <BreadcrumbJsonLd items={[{ name: "Home", url: `${CURRENT_SITE_URL}/` }, { name: "Contact", url: `${CURRENT_SITE_URL}/contact` }]} />
      <nav className="text-xs text-muted-foreground" aria-label="Breadcrumb"><Link href="/">Home</Link><span className="mx-2">›</span><span>Contact</span></nav>
      <h1 className="mt-7 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">Contact GetFRP</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">Choose the route that preserves the product requirements, supplier identity and review context needed to answer you accurately.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <ContactCard icon={<ClipboardList />} title="Buyer sourcing request" text="Send drawings, standards, quantity and delivery destination in one controlled RFQ." href="/rfq" cta="Post an RFQ" />
        <ContactCard icon={<Building2 />} title="Supplier registration" text="Create a free account to claim a company profile and submit product pages for review." href="/sign-up" cta="Join Free" />
        <ContactCard icon={<MessageSquareText />} title="Marketplace help" text="Use the help center for search, verification and RFQ workflow guidance." href="/help/how-to-search-suppliers" cta="Open Help" />
      </div>
    </main>
  );
}

function ContactCard({ icon, title, text, href, cta }: { icon: React.ReactNode; title: string; text: string; href: string; cta: string }) {
  return <section className="rounded-xl border p-6">{icon}<h2 className="mt-4 text-xl font-semibold">{title}</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p><Link href={href as never} className={`${buttonVariants({ variant: "outline" })} mt-6`}>{cta}<ArrowRight size={14} /></Link></section>;
}
