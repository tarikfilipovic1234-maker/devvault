/**
 * Re-mounts on every navigation. The `page-enter` class runs a short CSS
 * fade so route changes do not snap; it is disabled under
 * `prefers-reduced-motion` by the global rule in globals.css.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
