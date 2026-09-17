import type { Metadata } from "next";
import { site } from "@/content/site";
import { experience } from "@/content/experience";
import { certificates, skillCategories } from "@/content/skills";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { DownloadIcon } from "@/components/ui/icons";

export const metadata: Metadata = pageMetadata({
  title: "Resume",
  description: `Resume and CV for ${site.name}, ${site.role}.`,
  path: "/resume",
});

export default function ResumePage() {
  const work = experience.filter((e) => e.kind !== "highlight");

  return (
    <Container className="py-16 sm:py-24">
      <header className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3">Resume</p>
          <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {site.name}
          </h1>
          <p className="mt-3 text-muted">
            {site.role}, {site.location}
          </p>
        </div>
        <Button href={site.cvPath}>
          <DownloadIcon /> Download CV (PDF)
        </Button>
      </header>

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Text summary */}
        <div className="flex flex-col gap-10">
          <section>
            <h2 className="font-display text-lg font-semibold tracking-tight">
              Experience &amp; education
            </h2>
            <ul className="mt-5 space-y-6">
              {work.map((e) => (
                <li key={`${e.title}-${e.period}`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="font-medium text-foreground">{e.title}</h3>
                    <span className="font-mono text-xs text-faint">
                      {e.period}
                    </span>
                  </div>
                  <p className="text-sm text-accent-soft">{e.organization}</p>
                  <p className="mt-1.5 text-sm leading-6 text-muted">
                    {e.description}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold tracking-tight">
              Skills
            </h2>
            <div className="mt-5 space-y-4">
              {skillCategories.map((c) => (
                <div key={c.name}>
                  <p className="text-xs uppercase tracking-wider text-faint">
                    {c.name}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {c.skills.map((s) => (
                      <Badge key={s}>{s}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold tracking-tight">
              Certificates
            </h2>
            <ul className="mt-4 space-y-2">
              {certificates.map((certificate) => (
                <li key={certificate} className="text-sm text-muted">
                  {certificate}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* PDF preview */}
        <aside className="hidden lg:block">
          <div className="panel sticky top-24 overflow-hidden rounded-lg p-2">
            <iframe
              src={`${site.cvPath}#view=FitH`}
              title={`${site.name} CV`}
              className="h-[640px] w-full rounded-md bg-white"
            />
            <p className="px-2 py-3 text-xs text-faint">
              Not seeing the document?{" "}
              <a
                href={site.cvPath}
                download
                className="text-accent-soft underline underline-offset-2 hover:text-accent"
              >
                Download the PDF
              </a>
              .
            </p>
          </div>
        </aside>
      </div>
    </Container>
  );
}
