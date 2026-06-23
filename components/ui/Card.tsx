import { cn } from "@/lib/utils";

/**
 * Glassmorphism card. Set `interactive` for hover lift + accent edge,
 * used by linked cards (e.g. project cards).
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
        "glass rounded-2xl",
        interactive &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 " +
            "hover:shadow-[0_30px_70px_-30px] hover:shadow-accent/40",
        className,
      )}
    >
      {children}
    </div>
  );
}
