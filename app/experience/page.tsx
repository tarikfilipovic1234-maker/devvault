import type { Metadata } from "next";
import { experience } from "@/content/experience";
import { pageMetadata } from "@/lib/seo";
import type { ExperienceKind } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = pageMetadata({
  title: "Experience",
  description:
    "Work, education and project highlights for Tarik Filipović, in reverse-chronological order.",
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
    <Container className="py-16 sm:py-24">
      <header className="mb-12 max-w-2xl">
        <p className="eyebrow mb-3">Timeline</p>
        <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Experience
        </h1>
        <p className="mt-4 leading-7 text-muted">
          Work, education and the projects that taught me the most, most recent
          first.
        </p>
      </header>

      <div className="relative">
        {/* timeline rail */}
        <div
          aria-hidden
          className="absolute bottom-3 left-[7px] top-3 w-px bg-line"
        />

        <ol className="space-y-10">
          {experience.map((entry) => {
            const meta = kindMeta[entry.kind];
            return (
              <li
                key={`${entry.title}-${entry.period}`}
                className="relative pl-9 sm:pl-12"
              >
                {/* marker */}
                <span
                  aria-hidden
                  className="absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-line-strong bg-ink"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </span>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs text-faint">
                    {entry.period}
                  </span>
                  <Badge tone={meta.tone}>{meta.label}</Badge>
                </div>
                <h2 className="mt-2 font-display text-lg font-semibold tracking-tight">
                  {entry.title}
                </h2>
                <p className="mt-1 text-sm text-accent-soft">
                  {entry.organization}
                </p>
                <p className="mt-2.5 max-w-2xl leading-7 text-muted">
                  {entry.description}
                </p>
                {entry.highlights && entry.highlights.length > 0 && (
                  <ul className="mt-3 space-y-1.5">
                    {entry.highlights.map((h) => (
                      <li key={h} className="flex gap-2.5 text-sm text-faint">
                        <span
                          aria-hidden
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-line-strong"
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </Container>
  );
}
