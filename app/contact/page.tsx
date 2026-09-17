import type { Metadata } from "next";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/contact/ContactForm";
import {
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/ui/icons";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: `Get in touch with ${site.name} about full-stack, front-end and back-end opportunities.`,
  path: "/contact",
});

export default function ContactPage() {
  const channels = [
    {
      label: "Email",
      value: site.social.email,
      href: `mailto:${site.social.email}`,
      Icon: MailIcon,
    },
    {
      label: "GitHub",
      value: "tarikfilipovic1234-maker",
      href: site.social.github,
      Icon: GitHubIcon,
    },
    {
      label: "LinkedIn",
      value: "Tarik Filipović",
      href: site.social.linkedin,
      Icon: LinkedInIcon,
    },
  ];

  return (
    <Container className="py-16 sm:py-24">
      <header className="mb-12 max-w-2xl">
        <p className="eyebrow mb-3">Contact</p>
        <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Get in touch
        </h1>
        <p className="mt-4 leading-7 text-muted">
          Send a message about a role, a project or a question and I&apos;ll
          reply from my own inbox. Email and the links below work just as well.
        </p>
      </header>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
        <ContactForm />

        <aside className="flex flex-col gap-4">
          <div className="panel rounded-lg p-5">
            <p className="eyebrow mb-3">Reach me directly</p>
            <ul className="flex flex-col">
              {channels.map(({ label, value, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http") ? "noopener noreferrer" : undefined
                    }
                    className="group flex items-center gap-3 rounded-md px-2 py-2.5 transition-colors hover:bg-raised"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-line text-muted transition-colors group-hover:text-foreground">
                      <Icon width={17} height={17} />
                    </span>
                    <span className="flex min-w-0 flex-col">
                      <span className="text-xs text-faint">{label}</span>
                      <span className="truncate text-sm text-foreground">
                        {value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel flex flex-col items-start gap-3 rounded-lg p-5">
            <p className="text-sm text-muted">
              Want the short version of my background?
            </p>
            <Button href={site.cvPath} variant="secondary" size="sm">
              <DownloadIcon /> Download CV
            </Button>
          </div>
        </aside>
      </div>
    </Container>
  );
}
