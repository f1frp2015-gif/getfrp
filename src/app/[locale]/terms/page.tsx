import type { Metadata } from "next";
import Link from "next/link";
import { alternates } from "@/lib/seo";
import { setRequestLocale } from "next-intl/server";

export const revalidate = 86400;

export function generateMetadata(): Metadata {
  return {
    title: "Terms of Use",
    description: "Terms governing your use of getfrp.",
    alternates: alternates("/terms"),
    robots: {
      index: false,
      follow: true,
      googleBot: { index: false, follow: true },
    },
  };
}

const LAST_UPDATED = "2026-07-31";

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <TermsEn />
      <p className="mt-12 text-xs text-muted-foreground">
        Last updated: {LAST_UPDATED}
      </p>
    </main>
  );
}

function TermsEn() {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      <h1>Terms of Use</h1>
      <p>
        These Terms govern your use of getfrp.com (the &ldquo;Service&rdquo;),
        operated by the getfrp team (&ldquo;getfrp&rdquo;, &ldquo;we&rdquo;,
        &ldquo;our&rdquo;). getfrp is not operated by or affiliated with
        Chongqing Yaoyi Advanced Materials Technology Co., Ltd. By using the
        Service you agree to these Terms.
      </p>

      <h2>1. The Service</h2>
      <p>
        getfrp is a sourcing and information platform for fiber-reinforced
        polymer (FRP / GFRP / CFRP) composites manufactured in China. We
        provide supplier directories, technical references, an AI
        assistant, and request-for-quotation (RFQ) routing.
      </p>

      <h2>2. No supply contract until signed</h2>
      <p>
        Quotes returned through getfrp are non-binding indications until a
        supply contract is signed between you and the relevant supplier
        or another commercial counterparty identified in writing for the
        specific RFQ. getfrp is not the seller or exporter unless a separate
        signed agreement expressly says so. Specifications, prices, and lead
        times in material datasheets, AI answers, or supplier listings are
        informational and may change.
      </p>

      <h2>3. AI assistant — no professional advice</h2>
      <p>
        The AI assistant returns best-effort technical information and
        cites the underlying source where possible. It is not a
        substitute for qualified engineering judgement. getfrp accepts no
        liability for design, regulatory, or safety decisions made on the
        basis of AI output.
      </p>

      <h2>4. Acceptable use</h2>
      <ul>
        <li>No automated scraping outside published API rate limits.</li>
        <li>No misrepresentation of identity or affiliation.</li>
        <li>No infringement of third-party intellectual property.</li>
      </ul>

      <h2>5. Intellectual property</h2>
      <p>
        Unless otherwise stated, getfrp&apos;s original database structure,
        written commentary, AI prompt stack, and visual design are maintained
        by the getfrp team. Standards text, papers, patents and supplier-owned
        materials remain the property of their respective rights holders; we
        publish bibliographic metadata, structured highlights, and DOI or
        publication-number references to enable lookup.
      </p>

      <h2>6. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by applicable law, getfrp&apos;s total
        liability arising from your use of the Service is limited to the fees
        you have paid directly for the Service in the 12 months preceding the
        claim. We are not liable for indirect, incidental, or consequential
        damages.
      </p>

      <h2>7. Applicable law and transactions</h2>
      <p>
        These platform Terms are subject to applicable law. Any purchase,
        inspection, logistics or supply transaction is governed by the signed
        agreement with the commercial counterparty identified for that project,
        including the governing-law and dispute clauses stated there.
      </p>

      <h2>8. Contact</h2>
      <p>
        Use the <Link href="/rfq">GetFRP contact form</Link>{" "}
        for any question regarding these Terms.
      </p>
    </div>
  );
}
