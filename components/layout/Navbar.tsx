"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Logo } from "./Logo";
import { navItems } from "./nav-items";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuRoute, setMenuRoute] = useState(pathname);

  // Close the mobile menu on navigation, including browser back/forward.
  // Adjusted during render rather than in an effect, so the menu never paints
  // open for a frame on the new route.
  if (menuRoute !== pathname) {
    setMenuRoute(pathname);
    setOpen(false);
  }

  // Lock body scroll and allow Escape to dismiss while the menu is open.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="panel-overlay fixed inset-x-0 top-0 z-50 rounded-none border-x-0 border-t-0">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-8"
      >
        <Logo />

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "relative block rounded-sm px-3 py-2 text-sm transition-colors",
                  isActive(item.href)
                    ? "text-foreground after:absolute after:inset-x-3 after:-bottom-[9px] after:h-px after:bg-accent"
                    : "text-muted hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button href="/contact" size="sm" variant="secondary">
            Get in touch
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="-mr-2 flex h-10 w-10 items-center justify-center rounded-sm text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <Hamburger open={open} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-line bg-ink md:hidden"
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={cn(
                  "block rounded-md px-3 py-3 text-base transition-colors",
                  isActive(item.href)
                    ? "bg-raised text-foreground"
                    : "text-muted hover:bg-raised hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="px-3 pb-1 pt-3">
            <Button
              href="/contact"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Get in touch
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}

function Hamburger({ open }: { open: boolean }) {
  return (
    <span aria-hidden className="relative block h-3.5 w-5">
      <span
        className={cn(
          "absolute left-0 h-px w-5 bg-current transition-all duration-200",
          open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0",
        )}
      />
      <span
        className={cn(
          "absolute left-0 top-1/2 h-px w-5 -translate-y-1/2 bg-current transition-opacity duration-200",
          open && "opacity-0",
        )}
      />
      <span
        className={cn(
          "absolute left-0 h-px w-5 bg-current transition-all duration-200",
          open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0",
        )}
      />
    </span>
  );
}
