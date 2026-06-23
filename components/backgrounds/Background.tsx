/**
 * Site-wide ambient background: drifting aurora blobs + a faint technical grid.
 * Pure CSS (see globals.css), so it stays a server component and the animation
 * freezes under prefers-reduced-motion.
 */
export function Background() {
  return (
    <>
      <div className="aurora" aria-hidden />
      <div className="grid-overlay" aria-hidden />
    </>
  );
}
