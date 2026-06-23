import type { ExperienceEntry } from "@/lib/types";

/**
 * Experience timeline, reverse-chronological. Work + education are from the
 * owner's CV; "highlight" entries surface real shipped projects.
 */
export const experience: ExperienceEntry[] = [
  {
    kind: "work",
    title: "Student Intern — Full-Stack Development",
    organization: "Assured, Sarajevo",
    period: "Aug 2025 — May 2026",
    description:
      "Contributed to frontend and backend tasks on real web applications, working with the development team across assigned features and ongoing project requirements.",
    highlights: [
      "Built and maintained web application features (frontend & backend)",
      "Helped build and improve a Playwright end-to-end testing framework",
      "Participated in testing and debugging to improve performance and reliability",
    ],
  },
  {
    kind: "highlight",
    title: "Built Darceflow — Multi-tenant BJJ SaaS",
    organization: "Personal project",
    period: "2026 — Present",
    description:
      "Designing a multi-tenant SaaS dashboard for Brazilian Jiu-Jitsu gyms with Stripe billing, attendance and scheduling — with strict per-tenant data isolation.",
    highlights: [
      "Tenant-scoped data access enforced at the data layer",
      "Stripe subscription billing reconciled via webhooks",
    ],
  },
  {
    kind: "highlight",
    title: "Shipped Enamel, Voltra & USA2BIH",
    organization: "Personal projects",
    period: "2025",
    description:
      "Delivered a dental booking platform with a real availability engine (Enamel), an e-commerce storefront with Stripe checkout and inventory holds (Voltra), and a vehicle-import platform with a tested landed-cost calculator and CI (USA2BIH).",
    highlights: [
      "Server-side, transactional logic to prevent double-booking and overselling",
      "Unit-tested business logic with GitHub Actions CI",
    ],
  },
  {
    kind: "education",
    title: "BSc Information Technology (in progress)",
    organization: "International Burch University, Sarajevo",
    period: "Oct 2023 — Present",
    description:
      "Second-year IT student building foundations in programming, databases, web development and software engineering, focused on practical full-stack skills.",
  },
  {
    kind: "education",
    title: "IT-focused secondary education",
    organization: "First Gymnasium, Sarajevo",
    period: "Sep 2019 — Jul 2023",
    description:
      "IT-focused curriculum covering C++ programming, Android Studio, databases, and web development with HTML and CSS.",
  },
];
