import Link from "next/link";
import { cn } from "@/lib/utils";

/** TF monogram wordmark, links home. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-2.5 rounded-sm", className)}
      aria-label="Tarik Filipović, home"
    >
      <span
        aria-hidden
        className="flex h-8 w-8 items-center justify-center rounded-md border border-line-strong font-display text-[0.7rem] font-bold tracking-wide text-foreground"
      >
        TF
      </span>
      <span className="font-display text-[0.95rem] font-semibold tracking-tight">
        Tarik Filipović
      </span>
    </Link>
  );
}
