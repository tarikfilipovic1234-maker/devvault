import type { Metadata } from "next";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { LegalPage, LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = pageMetadata({
  title: "Terms & Conditions",
  description: `The terms that apply to using ${site.name}'s portfolio website.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions" updated="17 September 2026">
      <LegalSection heading="What this site is">
        <p>
          This is the personal portfolio of {site.name}. It exists to show my
          work and to let people get in touch. It is not a product, and nothing
          on it is sold.
        </p>
      </LegalSection>

      <LegalSection heading="Content and ownership">
        <p>
          The text, design and source code of this site are mine. You are
          welcome to read it, link to it, and quote it with attribution. Please
          don&apos;t republish it wholesale or present it as your own work.
        </p>
        <p>
          The projects described here are my own. Third-party names such as
          Next.js, React, Stripe and Vercel belong to their respective owners
          and are mentioned only to describe what a project is built with.
        </p>
      </LegalSection>

      <LegalSection heading="Accuracy">
        <p>
          I keep this site accurate and up to date as best I can, but project
          details and availability change. Linked demos are hosted on free
          infrastructure and may be offline, mid-deployment or in an unfinished
          state at any given moment. Nothing here is a guarantee or a
          professional commitment; treat it as a portfolio, not a contract.
        </p>
      </LegalSection>

      <LegalSection heading="External links">
        <p>
          Links to live deployments, repositories and other sites are provided
          for convenience. I don&apos;t control what those sites contain and am
          not responsible for them.
        </p>
      </LegalSection>

      <LegalSection heading="Using the contact form">
        <p>
          Please use the contact form for genuine enquiries. Automated
          submissions, spam and abusive messages are not welcome and may be
          blocked.
        </p>
      </LegalSection>

      <LegalSection heading="Liability">
        <p>
          This site is provided as it is. To the extent the law allows, I am not
          liable for any loss arising from using it or from relying on its
          contents.
        </p>
      </LegalSection>

      <LegalSection heading="Governing law">
        <p>
          These terms are governed by the law of Bosnia and Herzegovina.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          Questions about these terms can go to{" "}
          <a
            href={`mailto:${site.social.email}`}
            className="text-accent-soft underline underline-offset-2 hover:text-accent"
          >
            {site.social.email}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
