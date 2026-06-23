import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, getProjectSlugs } from "@/lib/projects";
import { pageMetadata } from "@/lib/seo";
import type { Project } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectThumb } from "@/components/projects/ProjectThumb";
import {
  ArrowIcon,
  ExternalIcon,
  GitHubIcon,
} from "@/components/ui/icons";

// Prerender every project; unknown slugs 404 rather than render on-demand.
export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return {};
  return pageMetadata({
    title: project.name,
    description: project.description,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  return (
    <Container className="py-16 sm:py-24">
      <Link
        href="/projects"
        className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
      >
        <ArrowIcon className="rotate-180 transition-transform group-hover:-translate-x-1" />
        All projects
      </Link>

      {/* Header */}
      <header className="mt-8">
        <div className="flex flex-wrap items-center gap-2">
          {project.categories.map((c) => (
            <Badge key={c} tone="accent">
              {c}
            </Badge>
          ))}
          <Badge tone={project.status === "Completed" ? "success" : "progress"}>
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            {project.status}
          </Badge>
        </div>
        <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          <GradientText>{project.name}</GradientText>
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
          {project.description}
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          {project.liveUrl && (
            <Button href={project.liveUrl}>
              Live demo <ExternalIcon />
            </Button>
          )}
          {project.repoUrl && (
            <Button href={project.repoUrl} variant="secondary">
              <GitHubIcon width={18} height={18} /> View code
            </Button>
          )}
        </div>
      </header>

      {/* Cover */}
      <Reveal className="mt-12">
        <div className="relative aspect-[16/8] w-full overflow-hidden rounded-2xl border border-line">
          <ProjectThumb project={project} priority />
        </div>
      </Reveal>

      {/* Body */}
      <div className="mt-14 grid gap-12 lg:grid-cols-3">
        <article className="flex flex-col gap-12 lg:col-span-2">
          <Prose title="Overview">
            <p>{project.overview}</p>
          </Prose>
          <Prose title="Motivation">
            <p>{project.motivation}</p>
          </Prose>
          <Prose title="Key features">
            <BulletList items={project.features} />
          </Prose>
          <Prose title="Architecture">
            <p>{project.architecture}</p>
          </Prose>
          <Prose title="Challenges solved">
            <BulletList items={project.challenges} />
          </Prose>
          <Prose title="Lessons learned">
            <BulletList items={project.lessons} />
          </Prose>
        </article>

        {/* Aside */}
        <aside className="lg:col-span-1">
          <div className="glass sticky top-24 flex flex-col gap-7 rounded-2xl p-6">
            <Meta project={project} />
          </div>
        </aside>
      </div>

      {/* Footer nav */}
      <Reveal className="mt-16 border-t border-line pt-8">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-soft"
        >
          <ArrowIcon className="rotate-180 transition-transform group-hover:-translate-x-1" />
          Back to all projects
        </Link>
      </Reveal>
    </Container>
  );
}

function Prose({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <section>
        <h2 className="font-display text-xl font-semibold tracking-tight">
          {title}
        </h2>
        <div className="mt-4 space-y-3 leading-7 text-muted">{children}</div>
      </section>
    </Reveal>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Meta({ project }: { project: Project }) {
  return (
    <>
      <div>
        <p className="eyebrow mb-3">Tech stack</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </div>

      <div className="border-t border-line pt-6">
        <p className="eyebrow mb-3">At a glance</p>
        <dl className="space-y-2.5 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-faint">Status</dt>
            <dd className="text-foreground">{project.status}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-faint">Category</dt>
            <dd className="text-right text-foreground">
              {project.categories.join(", ")}
            </dd>
          </div>
        </dl>
      </div>

      {(project.liveUrl || project.repoUrl) && (
        <div className="flex flex-col gap-2 border-t border-line pt-6">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
            >
              <ExternalIcon /> Visit live site
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
            >
              <GitHubIcon width={16} height={16} /> Source on GitHub
            </a>
          )}
        </div>
      )}
    </>
  );
}
