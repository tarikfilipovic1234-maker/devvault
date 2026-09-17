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
    "Full-stack projects by Tarik Filipović: booking engines, multi-tenant SaaS, Stripe storefronts and a vehicle-import calculator.",
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
    <Container className="py-16 sm:py-24">
      <header className="mb-10 max-w-2xl">
        <p className="eyebrow mb-3">Selected work</p>
        <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Projects
        </h1>
        <p className="mt-4 leading-7 text-muted">
          Everything I&apos;ve designed and built, with the source public on
          GitHub. Search by name or technology, or filter by category.
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
