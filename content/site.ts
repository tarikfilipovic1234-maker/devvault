import type { SiteConfig } from "@/lib/types";

/**
 * Single source of truth for owner/site identity. Consumed by the hero,
 * contact, footer, metadata, sitemap and JSON-LD helpers.
 */
export const site: SiteConfig = {
  name: "Tarik Filipović",
  role: "Full-Stack Developer",
  // Kept under ~160 characters: this is the default meta description and the
  // Open Graph / Twitter description for every page.
  summary:
    "Full-stack developer in Sarajevo building production web apps with " +
    "Next.js, React and TypeScript: booking engines, multi-tenant SaaS and " +
    "Stripe storefronts.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://devvault-three.vercel.app",
  social: {
    github: "https://github.com/tarikfilipovic1234-maker",
    linkedin: "https://www.linkedin.com/in/tarik-filipovic-b41487333/",
    email: "tarikfilipovic1234@gmail.com",
  },
  cvPath: "/cv/Tarik-Filipovic-CV.pdf",
  photo: "/tarik.png",
  location: "Sarajevo, Bosnia & Herzegovina",
};
