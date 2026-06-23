import type { Metadata } from "next";
import { experience } from "@/content/experience";
import { pageMetadata } from "@/lib/seo";
import type { ExperienceKind } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = pageMetadata({
  title: "Experience",
  description:
    "Work, education and notable project highlights — a quick, skimmable timeline.",
  path: "/experience",
});

const kindMeta: Record<
  ExperienceKind,
  { label: string; tone: "accent" | "default" | "success" }
> = {
  work: { label: "Work", tone: "accent" },
  education: { label: "Education", tone: "default" },
  highlight: { label: "Project", tone: "success" },
};

export default function ExperiencePage() {
  return (
    <Container className="py-20 sm:py-28">
      <header className="mb-14 max-w-2xl">
        <p className="eyebrow mb-4">Journey</p>
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Experience
        </h1>
        <p className="mt-4 text-lg leading-8 text-muted">
          Work, education and the projects that taught me the most.
        </p>
      </header>

      <div className="relative" role="list">
        {/* timeline rail */}
        <div
          aria-hidden
          className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-accent/50 via-line to-transparent sm:left-[9px]"
        />

        <div className="space-y-10">
          {experience.map((entry, i) => {
            const meta = kindMeta[entry.kind];
            return (
              <Reveal
                key={`${entry.title}-${entry.period}`}
                delay={Math.min(i, 7) * 0.07}
                className="relative pl-9 sm:pl-12"
              >
                <div role="listitem">
                  {/* dot */}
                  <span
                    aria-hidden
                    className="absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-accent/40 bg-ink sm:h-[19px] sm:w-[19px]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>

                  <div className="flex flex-col gap-1.5">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-xs text-faint">
                        {entry.period}
                      </span>
                      <Badge tone={meta.tone}>{meta.label}</Badge>
                    </div>
                    <h2 className="font-display text-xl font-semibold tracking-tight">
                      {entry.title}
                    </h2>
                    <p className="text-sm text-accent-soft">
                      {entry.organization}
                    </p>
                    <p className="mt-1 max-w-2xl leading-7 text-muted">
                      {entry.description}
                    </p>
                    {entry.highlights && entry.highlights.length > 0 && (
                      <ul className="mt-2 space-y-1.5">
                        {entry.highlights.map((h) => (
                          <li key={h} className="flex gap-2.5 text-sm text-faint">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
