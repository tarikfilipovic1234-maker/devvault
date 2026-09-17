import { cn } from "@/lib/utils";

/**
 * Flat surface panel. Set `interactive` for the hover treatment used by
 * linked cards (e.g. project cards): the border firms up, nothing moves.
 */
export function Card({
  interactive = false,
  className,
  children,
}: {
  interactive?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "panel rounded-lg",
        interactive &&
          "transition-colors duration-150 hover:border-line-strong",
        className,
      )}
    >
      {children}
    </div>
  );
}
