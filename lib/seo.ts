import type { Metadata } from "next";
import { site } from "@/content/site";

/** Absolute base URL for metadata, OG images, sitemap and JSON-LD. */
export const baseUrl = site.url;

/**
 * Build per-page metadata with sensible portfolio defaults. Title is composed
 * via the root layout's title template, so pass the bare page title here.
 */
export function pageMetadata({
  title,
  description,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const desc = description ?? site.summary;
  const url = new URL(path, baseUrl).toString();
  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title: title ? `${title} · ${site.name}` : `${site.name} · ${site.role}`,
      description: desc,
      url,
      type: "website",
    },
  };
}
