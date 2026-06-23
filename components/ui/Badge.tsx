import { cn } from "@/lib/utils";

type Tone = "default" | "accent" | "success" | "progress";

const tones: Record<Tone, string> = {
  default: "border-line bg-white/[0.03] text-muted",
  accent: "border-accent/30 bg-accent/10 text-accent-soft",
  success: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  progress: "border-amber-400/30 bg-amber-400/10 text-amber-300",
};

/** Small pill label — tech badges, statuses, categories. */
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
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
