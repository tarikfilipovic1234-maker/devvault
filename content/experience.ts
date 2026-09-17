import type { ExperienceEntry } from "@/lib/types";

/**
 * Experience timeline, reverse-chronological. Work and education are taken
 * from the owner's CV and follow it where the two disagree; "highlight"
 * entries surface real shipped projects.
 *
 * Date ranges use an en dash, the correct mark for a span.
 */
export const experience: ExperienceEntry[] = [
  {
    kind: "highlight",
    title: "GenLeadAI, lead research agent",
    organization: "Personal project",
    period: "2026",
    description:
      "An AI agent that researches real businesses against real sources, scores them as sales leads, and records what it could not verify instead of guessing. Python and FastAPI backend, Next.js frontend.",
    highlights: [
      "Agent selects its own tools rather than following a fixed script",
      "Every collected field labelled verified, inferred or unverified",
    ],
  },
  {
    kind: "highlight",
    title: "Darceflow, multi-tenant SaaS for BJJ gyms",
    organization: "Personal project",
    period: "2026",
    description:
      "A dashboard covering memberships, attendance, belt progression and class scheduling for Brazilian Jiu-Jitsu gyms, with Stripe billing and per-tenant data isolation.",
    highlights: [
      "Tenant-scoped data access enforced at the data layer",
      "Stripe subscription billing reconciled through webhooks",
    ],
  },
  {
    kind: "work",
    title: "Student Intern, Full-Stack Development",
    organization: "Assured, Sarajevo",
    period: "Aug 2025 – Nov 2025",
    description:
      "Contributed to frontend and backend development tasks on real web applications, working with the development team on assigned features and ongoing project requirements.",
    highlights: [
      "Assisted in building and maintaining web application features",
      "Helped build and improve a Playwright end-to-end testing framework",
      "Took part in testing and debugging to improve application performance and reliability",
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
    title: "BSc Information Technology (third year)",
    organization: "International Burch University, Sarajevo",
    period: "Oct 2023 – Present",
    description:
      "Programming, databases, web development and software engineering, focused on building practical technical skills and a foundation for full-stack development.",
  },
  {
    kind: "education",
    title: "IT-focused secondary education",
    organization: "First Gymnasium, Sarajevo",
    period: "Sep 2019 – Jul 2023",
    description:
      "IT curriculum covering C++, Android Studio, basic databases, and web development with HTML and CSS.",
  },
];
