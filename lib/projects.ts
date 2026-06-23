import { projects } from "@/content/projects";
import type { Project, ProjectCategory } from "@/lib/types";

/**
 * Data-access layer for projects — the single seam between the app and the
 * content source. Today it reads from typed content files; later these
 * functions can be backed by Prisma/Neon without changing any callers.
 *
 * Functions are async so the contract already matches a future database
 * implementation.
 */

/** All projects, ordered newest-first by default. */
export async function getProjects(): Promise<Project[]> {
  return [...projects].sort((a, b) => b.order - a.order);
}

/** A single project by slug, or null if not found. */
export async function getProject(slug: string): Promise<Project | null> {
  return projects.find((p) => p.slug === slug) ?? null;
}

/** Featured projects only, newest-first. */
export async function getFeaturedProjects(): Promise<Project[]> {
  return (await getProjects()).filter((p) => p.featured);
}

/** Slugs for static generation (generateStaticParams). */
export async function getProjectSlugs(): Promise<string[]> {
  return projects.map((p) => p.slug);
}

/** Distinct categories present across all projects (for filter UI). */
export async function getProjectCategories(): Promise<ProjectCategory[]> {
  const set = new Set<ProjectCategory>();
  for (const p of projects) for (const c of p.categories) set.add(c);
  return [...set];
}
