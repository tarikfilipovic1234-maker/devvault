import Link from "next/link";
import { cn } from "@/lib/utils";

/** TF monogram wordmark, links home. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-lg",
        className,
      )}
      aria-label="Tarik Filipović — home"
    >
      <span className="ring-gradient flex h-9 w-9 items-center justify-center rounded-lg font-display text-sm font-bold tracking-tight text-foreground">
        TF
      </span>
      <span className="font-display text-[0.95rem] font-semibold tracking-tight">
        Tarik<span className="text-accent">.</span>
      </span>
    </Link>
  );
}
