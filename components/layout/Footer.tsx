import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/icons";
import { navItems } from "./nav-items";

export function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { label: "GitHub", href: site.social.github, Icon: GitHubIcon },
    { label: "LinkedIn", href: site.social.linkedin, Icon: LinkedInIcon },
    { label: "Email", href: `mailto:${site.social.email}`, Icon: MailIcon },
  ];

  return (
    <footer className="relative mt-24 border-t border-line">
      <Container className="py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-lg font-semibold tracking-tight">
              {site.name}
            </p>
            <p className="mt-3 text-sm leading-6 text-muted">
              {site.role} — building production-grade web apps with Next.js,
              React and TypeScript.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="glass flex h-10 w-10 items-center justify-center rounded-lg text-muted transition-colors hover:text-accent"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm sm:grid-cols-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p className="font-mono">Built with Next.js 16 · React 19 · Tailwind v4</p>
        </div>
      </Container>
    </footer>
  );
}
