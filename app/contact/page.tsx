import type { Metadata } from "next";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
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
    { label: "Email", value: site.social.email, href: `mailto:${site.social.email}`, Icon: MailIcon },
    { label: "GitHub", value: "tarikfilipovic1234-maker", href: site.social.github, Icon: GitHubIcon },
    { label: "LinkedIn", value: "Tarik Filipović", href: site.social.linkedin, Icon: LinkedInIcon },
  ];

  return (
    <Container className="py-20 sm:py-28">
      <header className="mb-12 max-w-2xl">
        <p className="eyebrow mb-4">Contact</p>
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Let&apos;s <GradientText>work together</GradientText>.
        </h1>
        <p className="mt-4 text-lg leading-8 text-muted">
          Got a role, project, or just a question? Send a message and I&apos;ll
          get back to you. Prefer email or socials? Those work too.
        </p>
      </header>

      <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:gap-16">
        <ContactForm />

        <aside className="flex flex-col gap-6">
          <div className="glass flex flex-col gap-1 rounded-2xl p-6">
            <p className="eyebrow mb-3">Reach me directly</p>
            <ul className="flex flex-col gap-1">
              {channels.map(({ label, value, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-3 rounded-xl px-2 py-2.5 transition-colors hover:bg-white/[0.03]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-muted transition-colors group-hover:text-accent">
                      <Icon />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-xs text-faint">{label}</span>
                      <span className="text-sm text-foreground">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass flex flex-col items-start gap-3 rounded-2xl p-6">
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
