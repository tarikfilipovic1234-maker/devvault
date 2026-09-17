import { cn } from "@/lib/utils";

type Tone = "default" | "accent" | "success" | "progress";

const tones: Record<Tone, string> = {
  default: "border-line bg-raised text-muted",
  accent: "border-accent/30 bg-accent/10 text-accent-soft",
  success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  progress: "border-amber-500/30 bg-amber-500/10 text-amber-300",
};

/** Small rectangular label, tech tags, statuses, categories. */
export function Badge({
  tone = "default",
  className,
  children,
}: {
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm border px-2 py-0.5 text-xs font-medium",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
