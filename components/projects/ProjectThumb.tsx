import Image from "next/image";
import type { Project } from "@/lib/types";

/**
 * Project thumbnail. Renders a screenshot from /public when present; until real
 * screenshots are added, falls back to a designed gradient placeholder so cards
 * never show broken images.
 *
 * Set NEXT_PUBLIC_HAS_SCREENSHOTS=1 once images exist under /public/projects.
 */
const HAS_SCREENSHOTS = process.env.NEXT_PUBLIC_HAS_SCREENSHOTS === "1";

export function ProjectThumb({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  if (HAS_SCREENSHOTS) {
    return (
      <Image
        src={project.thumbnail}
        alt={`${project.name} screenshot`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
        priority={priority}
      />
    );
  }

  const initials = project.name.slice(0, 2).toUpperCase();
  return (
    <div
      aria-hidden
      className="absolute inset-0 flex items-center justify-center overflow-hidden bg-navy"
    >
      {/* gradient wash + grid texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/25 via-transparent to-violet/25" />
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <span className="font-display text-6xl font-bold tracking-tight text-white/85 text-glow">
        {initials}
      </span>
    </div>
  );
}
