import type { SiteConfig } from "@/lib/types";

/**
 * Single source of truth for owner/site identity. Consumed by the hero,
 * contact, footer, metadata, sitemap and JSON-LD helpers.
 */
export const site: SiteConfig = {
  name: "Tarik Filipović",
  role: "Full-Stack Developer",
  summary:
    "Full-stack developer building production-grade web apps with Next.js, " +
    "React and TypeScript — from real booking engines and multi-tenant SaaS " +
    "to Stripe-powered storefronts. I care about clean architecture, " +
    "accessibility, and shipping polished, performant products.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://devvault.vercel.app",
  social: {
    github: "https://github.com/tarikfilipovic1234-maker",
    linkedin: "https://www.linkedin.com/in/tarik-filipovic-b41487333/",
    email: "tarikfilipovic1234@gmail.com",
  },
  cvPath: "/cv/Tarik-Filipovic-CV.pdf",
};
