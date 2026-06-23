import { cn } from "@/lib/utils";

/** Renders its children with the electric-blue → violet gradient clip. */
export function GradientText({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <span className={cn("gradient-text", className)}>{children}</span>;
}
