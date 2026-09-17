import type { Metadata } from "next";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { LegalPage, LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${site.name} handles the information collected through this website.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="17 September 2026">
      <LegalSection heading="Who runs this site">
        <p>
          This is the personal portfolio of {site.name}, based in{" "}
          {site.location}. Questions about anything on this page can go to{" "}
          <a
            href={`mailto:${site.social.email}`}
            className="text-accent-soft underline underline-offset-2 hover:text-accent"
          >
            {site.social.email}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading="What the contact form collects">
        <p>
          If you use the contact form, it collects the name, email address and
          message you type into it. That information is sent by email to my
          personal inbox through Resend, the email delivery service this site
          uses. It is used solely to read and reply to your message.
        </p>
        <p>
          The form stores nothing in a database. The record of your message is
          the email itself, which stays in my inbox until I delete it. I do not
          sell it, share it, or add it to a mailing list.
        </p>
      </LegalSection>

      <LegalSection heading="Cookies and analytics">
        <p>
          This site sets no cookies and runs no analytics, advertising or
          tracking scripts. Nothing follows you between visits, and no profile
          of you is built.
        </p>
      </LegalSection>

      <LegalSection heading="Hosting and server logs">
        <p>
          The site is hosted on Vercel. Like any web host, Vercel automatically
          records standard request data such as IP address, browser user agent
          and the page requested, which is used to serve the site and guard
          against abuse. That collection is Vercel&apos;s, governed by their
          privacy policy, and I do not use it to identify visitors.
        </p>
      </LegalSection>

      <LegalSection heading="Links to other sites">
        <p>
          Project pages link to live deployments and to GitHub repositories.
          Once you follow one of those links you are on someone else&apos;s
          site, under their privacy policy rather than this one.
        </p>
      </LegalSection>

      <LegalSection heading="Your rights">
        <p>
          You can ask me what information I hold about you, ask for a copy of
          it, or ask me to delete it. In practice that means the emails you have
          sent me. Email the address above and I will action it.
        </p>
      </LegalSection>

      <LegalSection heading="Changes">
        <p>
          If how this site handles information changes, this page changes with
          it, and the date at the top is updated.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
