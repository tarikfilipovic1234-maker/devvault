import { site } from "@/content/site";
import { getProjects } from "@/lib/projects";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { ArrowIcon, DownloadIcon } from "@/components/ui/icons";

// Interim landing for Milestone 2 — exercises the design system. The full
// animated hero and landing sections arrive in Milestone 3.
export default async function Home() {
  const projects = await getProjects();

  return (
    <Container className="flex min-h-[70vh] flex-col justify-center gap-6 py-24">
      <p className="eyebrow">{site.role}</p>
      <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
        Hi, I&apos;m {site.name.split(" ")[0]} — I build{" "}
        <GradientText>polished full-stack products</GradientText>.
      </h1>
      <p className="max-w-2xl text-lg leading-8 text-muted">{site.summary}</p>
      <div className="mt-2 flex flex-wrap gap-3">
        <Button href="/projects">
          View Projects <ArrowIcon />
        </Button>
        <Button href={site.cvPath} variant="secondary">
          <DownloadIcon /> Download CV
        </Button>
      </div>
      <p className="mt-2 font-mono text-xs text-faint">
        {projects.length} projects · design system online
      </p>
    </Container>
  );
}
