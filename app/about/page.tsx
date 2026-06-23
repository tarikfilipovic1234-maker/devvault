import type { Metadata } from "next";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/motion/Reveal";
import { Portrait } from "@/components/about/Portrait";
import { ArrowIcon, DownloadIcon } from "@/components/ui/icons";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: `About ${site.name} — ${site.role} based in ${site.location}, building full-stack products with Next.js, React and TypeScript.`,
  path: "/about",
});

const facts = [
  { label: "Based in", value: site.location },
  { label: "Role", value: site.role },
  { label: "Focus", value: "Next.js · React · TypeScript" },
  { label: "Currently", value: "Open to opportunities" },
];

export default function AboutPage() {
  return (
    <Container className="py-20 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
        {/* Bio */}
        <div className="max-w-2xl">
          <p className="eyebrow mb-4">About me</p>
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Developer who sweats the <GradientText>hard details</GradientText>.
          </h1>

          <div className="mt-8 space-y-5 text-lg leading-8 text-muted">
            <p>
              I&apos;m {site.name.split(" ")[0]}, a full-stack developer based in{" "}
              {site.location}. I build production-grade web apps end to end — the
              kind with real booking engines, multi-tenant data models, payments
              and internationalization, not just polished landing pages.
            </p>
            <p>
              I&apos;m a second-year Information Technology student at
              International Burch University, and I&apos;ve been interning at
              Assured in Sarajevo — contributing across the frontend and backend
              and helping build out a Playwright end-to-end testing framework.
              Most of what I know, though, comes from shipping real projects:
              dental booking (Enamel), an e-commerce store with Stripe and
              inventory holds (Voltra), a vehicle-import platform with a tested
              cost calculator (USA2BIH), and a multi-tenant SaaS dashboard
              (Darceflow).
            </p>
            <p>
              Away from the keyboard I train Brazilian Jiu-Jitsu and lift — the
              same appetite for steady, compounding progress that I bring to
              code. (Darceflow, my BJJ-gym SaaS, is no coincidence.)
            </p>
            <p>
              I care about clean architecture, accessibility, performance and
              the small interactions that make software feel considered. I&apos;m
              looking for a full-stack or front-end role where I can keep raising
              that bar.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/projects">
              See my work <ArrowIcon />
            </Button>
            <Button href={site.cvPath} variant="secondary">
              <DownloadIcon /> Download CV
            </Button>
          </div>
        </div>

        {/* Portrait + facts */}
        <Reveal className="lg:pt-4">
          <Portrait />
          <dl className="glass mt-6 space-y-3 rounded-2xl p-6">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-baseline justify-between gap-4 text-sm"
              >
                <dt className="text-faint">{fact.label}</dt>
                <dd className="text-right font-medium text-foreground">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Container>
  );
}
