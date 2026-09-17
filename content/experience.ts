import type { ExperienceEntry } from "@/lib/types";

/**
 * Experience timeline, reverse-chronological. Work and education come from the
 * owner's CV; "highlight" entries surface real shipped projects.
 *
 * Date ranges use an en dash, the correct mark for a span.
 */
export const experience: ExperienceEntry[] = [
  {
    kind: "work",
    title: "Student Intern, Full-Stack Development",
    organization: "Assured, Sarajevo",
    period: "Aug 2025 – May 2026",
    description:
      "Worked on frontend and backend tasks across real web applications alongside the development team, on assigned features and ongoing project requirements.",
    highlights: [
      "Built and maintained web application features, frontend and backend",
      "Helped build and improve a Playwright end-to-end testing framework",
      "Took part in testing and debugging to improve performance and reliability",
    ],
  },
  {
    kind: "highlight",
    title: "Darceflow, multi-tenant SaaS for BJJ gyms",
    organization: "Personal project",
    period: "2026 – Present",
    description:
      "A multi-tenant SaaS dashboard for Brazilian Jiu-Jitsu gyms covering memberships, attendance and scheduling, with Stripe billing and strict per-tenant data isolation.",
    highlights: [
      "Tenant-scoped data access enforced at the data layer",
      "Stripe subscription billing reconciled through webhooks",
    ],
  },
  {
    kind: "highlight",
    title: "Enamel, Voltra and USA2BIH",
    organization: "Personal projects",
    period: "2025",
    description:
      "A dental booking platform with a real availability engine (Enamel), a storefront with Stripe checkout and inventory holds (Voltra), and a vehicle-import platform with a tested landed-cost calculator running in CI (USA2BIH).",
    highlights: [
      "Server-side transactional logic to prevent double-booking and overselling",
      "Unit-tested business logic with GitHub Actions CI",
    ],
  },
  {
    kind: "education",
    title: "BSc Information Technology (in progress)",
    organization: "International Burch University, Sarajevo",
    period: "Oct 2023 – Present",
    description:
      "Programming, databases, web development and software engineering, with a focus on practical full-stack work.",
  },
  {
    kind: "education",
    title: "IT-focused secondary education",
    organization: "First Gymnasium, Sarajevo",
    period: "Sep 2019 – Jul 2023",
    description:
      "IT curriculum covering C++, Android Studio, databases, and web development with HTML and CSS.",
  },
];
