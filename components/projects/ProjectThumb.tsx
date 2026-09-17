import Image from "next/image";
import type { Project } from "@/lib/types";

/**
 * Project screenshot. Rendered only once real images exist under
 * /public/projects/<slug>.png and NEXT_PUBLIC_HAS_SCREENSHOTS=1 is set.
 * Until then call sites omit the image slot entirely rather than showing
 * placeholder artwork.
 */
export const hasScreenshots = process.env.NEXT_PUBLIC_HAS_SCREENSHOTS === "1";

export function ProjectThumb({
  project,
  priority = false,
  sizes,
}: {
  project: Project;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <Image
      src={project.thumbnail}
      alt={`Screenshot of the ${project.name} interface`}
      fill
      sizes={sizes ?? "(max-width: 640px) 100vw, 50vw"}
      className="object-cover"
      priority={priority}
    />
  );
}
