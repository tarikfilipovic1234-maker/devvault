import type { Metadata } from "next";
import { getProjects, getProjectCategories } from "@/lib/projects";
import { pageMetadata } from "@/lib/seo";
import type { ProjectCategory } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer";
import type { SortKey } from "@/components/projects/ProjectFilters";

export const metadata: Metadata = pageMetadata({
  title: "Projects",
  description:
    "Real, deployed full-stack projects — booking engines, multi-tenant SaaS, e-commerce and more. Search, filter and explore.",
  path: "/projects",
});

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; category?: string; sort?: string }>;
}) {
  const [projects, categories, sp] = await Promise.all([
    getProjects(),
    getProjectCategories(),
    searchParams,
  ]);

  // Parse/validate URL params for initial filter state.
  const initialQuery = typeof sp.q === "string" ? sp.q : "";
  const initialCategory: ProjectCategory | "all" =
    typeof sp.category === "string" &&
    categories.includes(sp.category as ProjectCategory)
      ? (sp.category as ProjectCategory)
      : "all";
  const initialSort: SortKey = sp.sort === "featured" ? "featured" : "newest";

  return (
    <Container className="py-20 sm:py-28">
      <header className="mb-12 max-w-2xl">
        <p className="eyebrow mb-4">Selected work</p>
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Projects
        </h1>
        <p className="mt-4 text-lg leading-8 text-muted">
          A collection of products I&apos;ve designed and built — most are live,
          with source on GitHub. Search by name or tech, filter by category, or
          sort.
        </p>
      </header>

      <ProjectsExplorer
        projects={projects}
        categories={categories}
        initialQuery={initialQuery}
        initialCategory={initialCategory}
        initialSort={initialSort}
      />
    </Container>
  );
}
