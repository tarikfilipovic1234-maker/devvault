import type { SkillCategory } from "@/lib/types";

/** Skills grouped by category, pre-populated from the owner's real stack. */
export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["TypeScript", "JavaScript", "C#", "SQL"],
  },
  {
    name: "Frontend",
    skills: ["React 19", "Next.js 16 (App Router)", "Tailwind CSS v4", "Framer Motion"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Next.js Server Actions / API Routes", ".NET", "REST"],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "Prisma 7", "Neon (serverless driver)"],
  },
  {
    name: "Authentication",
    skills: ["Neon Auth / Better Auth", "Auth.js v5"],
  },
  {
    name: "Cloud & Deployment",
    skills: ["Vercel", "Vercel Blob", "Resend"],
  },
  {
    name: "Tools",
    skills: ["Git", "Vitest", "ESLint", "GitHub Actions (CI)"],
  },
];
