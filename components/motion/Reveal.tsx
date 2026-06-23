"use client";

import { Children, cloneElement, isValidElement } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Scroll-triggered reveal primitives built on Framer Motion. All respect
 * `prefers-reduced-motion`: when reduced, content renders in place with no
 * animation.
 *
 * Each item animates independently via `whileInView` (rather than parent
 * variant orchestration) so a card can never get stuck invisible — once ~15%
 * of it is on screen it reliably animates to full opacity.
 */

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

/** Single element that fades + rises into view once when scrolled to. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Container for a staggered group. Renders a plain element and hands each
 * direct child an index so it can offset its own reveal — no fragile parent →
 * child animation propagation.
 */
export function Stagger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  let index = 0;
  return (
    <div className={className}>
      {Children.map(children, (child) => {
        // Only inject the cascade index into StaggerItem children, so the
        // index prop never leaks onto a plain DOM element as an attribute.
        if (!isValidElement(child) || child.type !== StaggerItem) return child;
        const el = child as React.ReactElement<{ index?: number }>;
        return cloneElement(el, { index: index++ });
      })}
    </div>
  );
}

export function StaggerItem({
  children,
  className,
  index = 0,
}: {
  children: React.ReactNode;
  className?: string;
  index?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      // Cap the cascade so later items in long lists don't lag too far behind.
      transition={{ duration: 0.55, ease: EASE, delay: (index % 8) * 0.07 }}
    >
      {children}
    </motion.div>
  );
}
