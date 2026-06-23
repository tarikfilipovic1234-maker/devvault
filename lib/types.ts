/**
 * Core content types for the portfolio.
 *
 * These shapes are the contract for the `content/` data files and the `lib/`
 * data layer. They are intentionally framework-agnostic so the data source can
 * later move from typed content files to Prisma/Neon without touching pages.
 */

export type ProjectStatus = "Completed" | "In Progress";

/** Filterable categories used by the projects showcase. */
export type ProjectCategory =
  | "SaaS"
  | "E-commerce"
  | "Booking"
  | "Full-stack";

/** A single technology badge (label only; icon resolved in the UI layer). */
export type Tech = string;

export interface Project {
  /** URL slug, e.g. "enamel" -> /projects/enamel */
  slug: string;
  /** Display name, e.g. "Enamel" */
  name: string;
  /** One-line summary shown on cards. */
  description: string;
  /** Categories this project belongs to (drives filtering). */
  categories: ProjectCategory[];
  /** Technology badges. */
  tech: Tech[];
  /** Live deployment URL, or null when not yet deployed. */
  liveUrl: string | null;
  /** Public source repository URL, or null when private. */
  repoUrl: string | null;
  /** Short bullet list of headline features (cards + detail). */
  keyFeatures: string[];
  status: ProjectStatus;
  /** Whether to surface on the home page / "featured" sort. */
  featured: boolean;
  /**
   * Sort key for "newest" ordering. Higher = newer. Decoupled from real dates
   * so ordering stays stable and editorial.
   */
  order: number;
  /** Path under /public for the card thumbnail/screenshot. */
  thumbnail: string;

  /** Long-form fields for the detail page. */
  overview: string;
  motivation: string;
  /** Detailed feature list for the detail page. */
  features: string[];
  /** Architecture summary paragraph(s). */
  architecture: string;
  /** Notable challenges solved. */
  challenges: string[];
  /** Lessons learned. */
  lessons: string[];
}

export interface SkillCategory {
  /** Category label, e.g. "Frontend". */
  name: string;
  /** Skills within the category. */
  skills: string[];
}

export type ExperienceKind = "work" | "education" | "highlight";

export interface ExperienceEntry {
  kind: ExperienceKind;
  /** Role / title / project name. */
  title: string;
  /** Company / school / context. */
  organization: string;
  /** Human-readable period, e.g. "2024 — Present". */
  period: string;
  /** Short description, recruiter-skimmable. */
  description: string;
  /** Optional bullet highlights. */
  highlights?: string[];
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  /** Short professional summary for hero/about. */
  summary: string;
  /** Public site URL (used for metadata/OG/sitemap). */
  url: string;
  social: SocialLinks;
  /** Path under /public to the downloadable CV. */
  cvPath: string;
}
