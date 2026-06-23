"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Re-mounts on every navigation, giving a smooth cross-page transition.
 * Honors prefers-reduced-motion by rendering without animation.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
