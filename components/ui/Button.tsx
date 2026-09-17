import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-tight " +
  "transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-accent " +
  "focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
};

const variants: Record<Variant, string> = {
  // Solid accent with dark text, high contrast, no gradient.
  primary: "bg-accent text-accent-ink hover:bg-accent-soft",
  // Outlined surface.
  secondary:
    "panel text-foreground hover:border-line-strong hover:bg-raised",
  ghost: "text-muted hover:bg-raised hover:text-foreground",
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
    // Static files (e.g. the CV PDF), plain anchor so the browser downloads
    // it instead of attempting client-side route navigation.
    if (/\.[a-z0-9]+$/i.test(props.href)) {
      return (
        <a
          {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          className={classes}
          download
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
