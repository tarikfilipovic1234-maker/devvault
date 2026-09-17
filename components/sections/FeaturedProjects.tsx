import Link from "next/link";
import { getFeaturedProjects } from "@/lib/projects";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ArrowIcon } from "@/components/ui/icons";

export async function FeaturedProjects() {
  const all = await getFeaturedProjects();
  // Four keeps the two-column grid balanced; the rest are one click away.
  const projects = all.slice(0, 4);
  const liveCount = all.filter((p) => p.liveUrl).length;

  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title="Projects"
      description={`${all.length} full-stack projects, ${liveCount} of them deployed and live. The source for each is public on GitHub.`}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} priority={i < 2} />
        ))}
      </div>

      <Link
        href="/projects"
        className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-accent-soft transition-colors hover:text-accent"
      >
        View all {all.length} projects
        <ArrowIcon className="transition-transform group-hover:translate-x-0.5" />
      </Link>
    </Section>
  );
}
