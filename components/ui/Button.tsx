import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight " +
  "transition-all duration-200 focus-visible:outline-2 focus-visible:outline-accent " +
  "focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-12 px-6 text-[0.95rem]",
};

const variants: Record<Variant, string> = {
  // Electric-blue → violet gradient with a soft glow on hover.
  primary:
    "bg-gradient-to-r from-accent to-violet text-white shadow-[0_8px_30px_-8px] shadow-accent/60 " +
    "hover:shadow-[0_10px_40px_-6px] hover:shadow-accent/70 hover:brightness-110 active:scale-[0.98]",
  // Glass outline.
  secondary:
    "glass text-foreground hover:border-accent/40 hover:text-white active:scale-[0.98]",
  ghost:
    "text-muted hover:text-foreground hover:bg-white/5 active:scale-[0.98]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps &
  Omit<React.ComponentProps<typeof Link>, "className"> & { href: string };

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: undefined;
  };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  // Destructure once: the style props below are all used, and `rest` holds the
  // forwardable DOM attributes (including `href` for the link branches).
  const { variant = "primary", size = "md", className, children, ...rest } =
    props;
  const classes = cn(base, sizes[size], variants[variant], className);

  if ("href" in props && props.href !== undefined) {
    if (props.href.startsWith("http")) {
      return (
        <a
          {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        {...(rest as Omit<React.ComponentProps<typeof Link>, "className">)}
        className={classes}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      className={classes}
    >
      {children}
    </button>
  );
}
