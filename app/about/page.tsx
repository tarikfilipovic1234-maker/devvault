import type { Metadata } from "next";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Portrait } from "@/components/about/Portrait";
import { ArrowIcon, DownloadIcon } from "@/components/ui/icons";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: `About ${site.name}, a ${site.role.toLowerCase()} in ${site.location} who builds web apps with Next.js, React and TypeScript.`,
  path: "/about",
});

const facts = [
  { label: "Based in", value: site.location },
  { label: "Focus", value: "Next.js, React, TypeScript" },
  { label: "Also works in", value: "Python, C#, .NET" },
  { label: "Status", value: "Open to roles" },
];

export default function AboutPage() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_300px] lg:gap-20">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3">About</p>
          <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {site.name}
          </h1>

          <div className="mt-8 space-y-5 leading-8 text-muted">
            <p>
              I&apos;m a full-stack developer based in {site.location}. I build
              web apps end to end, and I gravitate towards the parts that are
              easy to get wrong: computing real appointment availability,
              holding inventory during checkout, isolating tenant data, keeping
              a cost calculation correct enough to put a number in front of a
              buyer, making an AI agent admit what it could not verify.
            </p>
            <p>
              I&apos;m a third-year Information Technology student at
              International Burch University. In 2025 I spent four months
              interning at Assured in Sarajevo, contributing to frontend and
              backend tasks and helping build out a Playwright end-to-end
              testing framework. Most of what I know in practice comes from
              shipping my own projects: GenLeadAI (a lead research agent that
              records what it could not verify), Enamel (dental booking),
              Voltra (Stripe storefront with inventory holds), USA2BIH
              (vehicle-import cost calculator with a test suite in CI) and
              Darceflow (multi-tenant SaaS).
            </p>
            <p>
              Away from the keyboard I train Brazilian Jiu-Jitsu and lift.
              Darceflow, my BJJ-gym SaaS, is not a coincidence.
            </p>
            <p>
              I&apos;m looking for a full-stack, front-end or back-end role
              where correctness matters and I can keep learning from people who
              have shipped more than I have.
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

        <div className="lg:pt-10">
          <Portrait />
          <dl className="panel mt-6 max-w-xs space-y-3 rounded-lg p-5">
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
        </div>
      </div>
    </Container>
  );
}
