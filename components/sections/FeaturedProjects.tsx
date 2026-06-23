import Link from "next/link";
import { getFeaturedProjects } from "@/lib/projects";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ArrowIcon } from "@/components/ui/icons";

export async function FeaturedProjects() {
  const projects = await getFeaturedProjects();

  return (
    <Section
      id="work"
      eyebrow="01 / Selected work"
      title="Projects I've shipped"
      description="Real, deployed products — booking engines, multi-tenant SaaS, e-commerce and more."
    >
      <Stagger className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <StaggerItem key={project.slug}>
            <ProjectCard project={project} priority={i < 2} />
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="mt-10">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-soft"
        >
          View all projects
          <ArrowIcon className="transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </Section>
  );
}
