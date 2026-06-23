import type { ExperienceEntry } from "@/lib/types";

/**
 * Experience timeline. The "highlight" entries are derived from real shipped
 * projects. The "work" and "education" entries are PLACEHOLDERS — replace the
 * organization names, periods and descriptions with real history.
 */
export const experience: ExperienceEntry[] = [
  {
    kind: "highlight",
    title: "Built Darceflow — Multi-tenant BJJ SaaS",
    organization: "Personal project",
    period: "2026 — Present",
    description:
      "Designing and building a multi-tenant SaaS dashboard for Brazilian Jiu-Jitsu gyms with Stripe billing, attendance and scheduling — with strict per-tenant data isolation.",
    highlights: [
      "Tenant-scoped data access enforced at the data layer",
      "Stripe subscription billing reconciled via webhooks",
    ],
  },
  {
    kind: "highlight",
    title: "Shipped Enamel — Dental booking platform",
    organization: "Personal project",
    period: "2025",
    description:
      "Built a bilingual dental-clinic site with a real appointment-booking engine: availability computation, staff time-off and transactional overlap prevention, plus a staff admin area.",
    highlights: [
      "Server-side, transactional booking to guarantee no double-booking",
      "Full i18n and transactional email via Resend",
    ],
  },
  {
    kind: "highlight",
    title: "Shipped Voltra & USA2BIH",
    organization: "Personal projects",
    period: "2025",
    description:
      "Delivered an e-commerce storefront (Voltra) with Stripe checkout, inventory holds and loyalty tiers, and a vehicle-import platform (USA2BIH) with a tested landed-cost calculator and CI.",
    highlights: [
      "Inventory holds to prevent overselling under concurrency",
      "Unit-tested business logic with GitHub Actions CI",
    ],
  },
  {
    kind: "work",
    title: "Full-Stack Developer",
    organization: "Replace with real role / freelance",
    period: "Replace with period",
    description:
      "Placeholder — replace with real professional experience: responsibilities, stack and impact, written for recruiters skimming quickly.",
  },
  {
    kind: "education",
    title: "Replace with degree / program",
    organization: "Replace with institution",
    period: "Replace with period",
    description:
      "Placeholder — replace with real education or relevant training.",
  },
];
