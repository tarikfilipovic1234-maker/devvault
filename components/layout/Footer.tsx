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
    <footer className="border-t border-line">
      <Container className="py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-base font-semibold tracking-tight">
              {site.name}
            </p>
            <p className="mt-3 text-sm leading-6 text-muted">
              {site.role} in {site.location}, open to new roles.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-muted transition-colors hover:border-line-strong hover:text-foreground"
                >
                  <Icon width={17} height={17} />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-12 gap-y-2.5 text-sm sm:grid-cols-3">
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

        <p className="mt-12 border-t border-line pt-6 text-xs text-faint">
          © {year} {site.name}
        </p>
      </Container>
    </footer>
  );
}
