import { cn } from "@/lib/utils";
import { Container } from "./Container";

/**
 * A vertical page section with consistent rhythm. Optionally renders a
 * monospace eyebrow label and a heading.
 */
export function Section({
  id,
  eyebrow,
  title,
  description,
  className,
  containerClassName,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  children?: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("py-20 sm:py-28", className)}>
      <Container className={containerClassName}>
        {(eyebrow || title || description) && (
          <div className="mb-12 max-w-2xl">
            {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
            {title && (
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-lg leading-8 text-muted">{description}</p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
