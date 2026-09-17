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
      title: title ? `${title} · ${site.name}` : `${site.name}, ${site.role}`,
      description: desc,
      url,
      type: "website",
    },
  };
}

/**
 * schema.org Person markup for the site owner. Every field is sourced from
 * `content/site.ts`, so it never states anything the site does not.
 */
export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: baseUrl,
  email: `mailto:${site.social.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sarajevo",
    addressCountry: "BA",
  },
  sameAs: [site.social.github, site.social.linkedin],
} as const;
