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
        <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-faint">
          <SearchIcon />
        </span>
        <input
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search projects, tech…"
          aria-label="Search projects"
          className="glass h-11 w-full rounded-xl pl-11 pr-4 text-sm text-foreground placeholder:text-faint focus-visible:border-accent/40"
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
                  "rounded-full border px-3.5 py-1.5 text-sm transition-colors",
                  active
                    ? "border-accent/40 bg-accent/15 text-accent-soft"
                    : "border-line text-muted hover:border-line hover:text-foreground hover:bg-white/[0.03]",
                )}
              >
                {cat === "all" ? "All" : cat}
              </button>
            );
          })}
        </div>

        {/* Sort */}
        <div className="glass inline-flex rounded-xl p-1" role="group" aria-label="Sort projects">
          {sorts.map((s) => {
            const active = s.key === sort;
            return (
              <button
                key={s.key}
                type="button"
                onClick={() => onSortChange(s.key)}
                aria-pressed={active}
                className={cn(
                  "rounded-lg px-3 py-1.5 text-sm transition-colors",
                  active
                    ? "bg-white/[0.06] text-foreground"
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
