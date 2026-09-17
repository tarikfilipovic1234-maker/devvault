import type { SkillCategory } from "@/lib/types";

/**
 * Skills grouped by category.
 *
 * Everything listed here is backed either by the owner's CV or by a project
 * on this site that states it in its own tech stack. Nothing is added just
 * because it commonly travels with the rest of the stack.
 */
export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Java",
      "C#",
      "C++",
      "SQL",
      "HTML",
      "CSS",
    ],
  },
  {
    name: "Frontend",
    skills: [
      "React 19",
      "Next.js 16 (App Router)",
      "Tailwind CSS v4",
      "Framer Motion",
    ],
  },
  {
    name: "Backend",
    skills: [
      "Node.js",
      "Next.js Server Actions / API Routes",
      "FastAPI",
      ".NET",
      "REST",
    ],
  },
  {
    name: "AI development",
    skills: [
      "Claude Agent SDK",
      "Prompt engineering",
      "AI-assisted development",
      "Generative AI tools",
      "Workflow automation",
    ],
  },
  {
    name: "Databases",
    skills: [
      "PostgreSQL",
      "Prisma 7",
      "SQLAlchemy",
      "Neon (serverless driver)",
    ],
  },
  {
    name: "Auth & tooling",
    skills: [
      "Neon Auth / Better Auth",
      "Auth.js v5",
      "Git",
      "GitHub Actions (CI)",
      "Vitest",
      "ESLint",
    ],
  },
  {
    name: "Cloud & deployment",
    skills: ["Vercel", "Vercel Blob", "Docker", "Resend"],
  },
];

/**
 * Certificates as listed on the CV. No dates are given there, so none are
 * shown here.
 */
export const certificates: string[] = [
  "Claude with the Anthropic AI",
  "AI Fluency: Framework & Foundations",
];
