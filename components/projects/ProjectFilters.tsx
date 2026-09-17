"use client";

import type { ProjectCategory } from "@/lib/types";
import { cn } from "@/lib/utils";
import { SearchIcon } from "@/components/ui/icons";

export type SortKey = "newest" | "featured";

const sorts: { key: SortKey; label: string }[] = [
  { key: "newest", label: "Newest" },
  { key: "featured", label: "Featured" },
];

/** Presentational, controlled filter bar for the projects showcase. */
export function ProjectFilters({
  query,
  onQueryChange,
  categories,
  activeCategory,
  onCategoryChange,
  sort,
  onSortChange,
}: {
  query: string;
  onQueryChange: (value: string) => void;
  categories: ProjectCategory[];
  activeCategory: ProjectCategory | "all";
  onCategoryChange: (value: ProjectCategory | "all") => void;
  sort: SortKey;
  onSortChange: (value: SortKey) => void;
}) {
  const allCategories: (ProjectCategory | "all")[] = ["all", ...categories];

  return (
    <div className="flex flex-col gap-5">
      {/* Search */}
      <div className="relative max-w-md">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-faint">
          <SearchIcon />
        </span>
        <input
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search by name or technology"
          aria-label="Search projects"
          className="h-10 w-full rounded-md border border-line bg-surface pl-10 pr-4 text-base sm:text-sm text-foreground placeholder:text-faint transition-colors focus-visible:border-accent"
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Category pills */}
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {allCategories.map((cat) => {
            const active = cat === activeCategory;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onCategoryChange(cat)}
                aria-pressed={active}
                className={cn(
                  "rounded-md border px-3 py-1.5 text-sm transition-colors",
                  active
                    ? "border-accent/40 bg-accent/10 text-accent-soft"
                    : "border-line text-muted hover:border-line-strong hover:text-foreground",
                )}
              >
                {cat === "all" ? "All" : cat}
              </button>
            );
          })}
        </div>

        {/* Sort */}
        <div className="inline-flex self-start rounded-md border border-line bg-surface p-0.5" role="group" aria-label="Sort projects">
          {sorts.map((s) => {
            const active = s.key === sort;
            return (
              <button
                key={s.key}
                type="button"
                onClick={() => onSortChange(s.key)}
                aria-pressed={active}
                className={cn(
                  "rounded-sm px-3 py-1 text-sm transition-colors",
                  active
                    ? "bg-raised text-foreground"
                    : "text-muted hover:text-foreground",
                )}
              >
                {s.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
