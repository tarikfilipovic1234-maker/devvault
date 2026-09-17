import type { MetadataRoute } from "next";
import { getProjectSlugs } from "@/lib/projects";
import { baseUrl } from "@/lib/seo";

/** Static routes, highest priority first. */
const routes: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/projects", priority: 0.9 },
  { path: "/about", priority: 0.8 },
  { path: "/experience", priority: 0.7 },
  { path: "/skills", priority: 0.7 },
  { path: "/resume", priority: 0.7 },
  { path: "/contact", priority: 0.6 },
  { path: "/privacy", priority: 0.2 },
  { path: "/terms", priority: 0.2 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getProjectSlugs();
  const lastModified = new Date();

  return [
    ...routes.map(({ path, priority }) => ({
      url: new URL(path, baseUrl).toString(),
      lastModified,
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...slugs.map((slug) => ({
      url: new URL(`/projects/${slug}`, baseUrl).toString(),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
