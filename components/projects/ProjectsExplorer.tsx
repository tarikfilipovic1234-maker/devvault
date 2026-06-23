"use client";

import { useEffect, useMemo, useState } from "react";
import type { Project, ProjectCategory } from "@/lib/types";
import { ProjectCard } from "./ProjectCard";
import { ProjectFilters, type SortKey } from "./ProjectFilters";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

/**
 * Client-side projects showcase: search + category filter + sort over the full
 * project list. Initial state comes from the server (parsed from the URL), and
 * subsequent changes are mirrored back into the URL (?q=&category=&sort=) via
 * history.replaceState — shareable, and cheap (no RSC refetch per keystroke).
 */
export function ProjectsExplorer({
  projects,
  categories,
  initialQuery = "",
  initialCategory = "all",
  initialSort = "newest",
}: {
  projects: Project[];
  categories: ProjectCategory[];
  initialQuery?: string;
  initialCategory?: ProjectCategory | "all";
  initialSort?: SortKey;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState<ProjectCategory | "all">(
    initialCategory,
  );
  const [sort, setSort] = useState<SortKey>(initialSort);

  // Reflect state back into the URL without triggering navigation.
  useEffect(() => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (category !== "all") params.set("category", category);
    if (sort !== "newest") params.set("sort", sort);
    const qs = params.toString();
    window.history.replaceState(
      null,
      "",
      qs ? `${window.location.pathname}?${qs}` : window.location.pathname,
    );
  }, [query, category, sort]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = projects.filter((p) => {
      const matchesCategory =
        category === "all" || p.categories.includes(category);
      if (!matchesCategory) return false;
      if (!q) return true;
      const haystack = [p.name, p.description, ...p.tech].join(" ").toLowerCase();
      return haystack.includes(q);
    });

    return list.sort((a, b) => {
      if (sort === "featured" && a.featured !== b.featured) {
        return a.featured ? -1 : 1;
      }
      return b.order - a.order;
    });
  }, [projects, query, category, sort]);

  return (
    <div className="flex flex-col gap-10">
      <ProjectFilters
        query={query}
        onQueryChange={setQuery}
        categories={categories}
        activeCategory={category}
        onCategoryChange={setCategory}
        sort={sort}
        onSortChange={setSort}
      />

      <p className="font-mono text-xs text-faint" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "project" : "projects"}
      </p>

      {filtered.length > 0 ? (
        <Stagger
          key={`${category}-${sort}-${query}`}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </Stagger>
      ) : (
        <div className="glass flex flex-col items-center gap-4 rounded-2xl px-6 py-16 text-center">
          <p className="text-muted">No projects match your filters.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("all");
              setSort("newest");
            }}
            className="text-sm font-medium text-accent transition-colors hover:text-accent-soft"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
