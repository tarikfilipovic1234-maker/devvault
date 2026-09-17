import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  ArrowIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/ui/icons";

const coreStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Prisma",
  "PostgreSQL",
  "Stripe",
];

/**
 * Above-the-fold introduction. Deliberately static: no entrance animation, so
 * the first thing a visitor reads is painted immediately.
 */
export function Hero() {
  const firstName = site.name.split(" ")[0];

  const socials = [
    { label: "GitHub", href: site.social.github, Icon: GitHubIcon },
    { label: "LinkedIn", href: site.social.linkedin, Icon: LinkedInIcon },
    { label: "Email", href: `mailto:${site.social.email}`, Icon: MailIcon },
  ];

  return (
    <section className="border-b border-line py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <p className="flex items-center gap-2 text-sm text-muted">
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full bg-emerald-400"
            />
            Open to full-stack, front-end and back-end roles
          </p>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            I&apos;m {firstName}, a full-stack developer in Sarajevo.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            I build web apps where the hard part sits behind the interface: an
            appointment-booking engine that computes real availability, a
            storefront with Stripe checkout and inventory holds, a
            vehicle-import cost calculator covered by tests in CI, and a
            multi-tenant SaaS dashboard.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="/projects">
              View projects <ArrowIcon />
            </Button>
            <Button href={site.cvPath} variant="secondary">
              <DownloadIcon /> Download CV
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <div className="flex items-center gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-muted transition-colors hover:border-line-strong hover:text-foreground"
                >
                  <Icon />
                </a>
              ))}
            </div>

            <ul className="flex flex-wrap items-center gap-x-5 gap-y-1.5 font-mono text-xs text-faint">
              {coreStack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
