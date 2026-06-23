import Link from "next/link";
import type { Project } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ExternalIcon, GitHubIcon } from "@/components/ui/icons";
import { ProjectThumb } from "./ProjectThumb";

/**
 * Project card. Uses a "stretched link" so the whole card navigates to the
 * detail page, while the live/repo links stay independently clickable.
 */
export function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <Card
      interactive
      className="group relative flex flex-col overflow-hidden p-0"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line">
        <ProjectThumb project={project} priority={priority} />
        <div className="absolute right-3 top-3 z-20">
          <Badge tone={project.status === "Completed" ? "success" : "progress"}>
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            {project.status}
          </Badge>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="font-display text-xl font-semibold tracking-tight transition-colors group-hover:text-accent-soft">
            {project.name}
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted">
            {project.description}
          </p>
        </div>

        <ul className="space-y-1.5 text-sm text-faint">
          {project.keyFeatures.slice(0, 3).map((f) => (
            <li key={f} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.tech.slice(0, 4).map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
          {project.tech.length > 4 && (
            <Badge>+{project.tech.length - 4}</Badge>
          )}
        </div>

        {/* Action links sit above the stretched link */}
        <div className="relative z-20 flex items-center gap-4 border-t border-line pt-4 text-sm">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
            >
              Live demo <ExternalIcon />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
            >
              <GitHubIcon width={16} height={16} /> Code
            </a>
          )}
        </div>
      </div>

      {/* Stretched link to the detail page */}
      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`${project.name} — view details`}
      />
    </Card>
  );
}
