import { Container } from "@/components/ui/Container";

/** Shared shell for the privacy and terms pages: one narrow column of prose. */
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <Container className="py-16 sm:py-24">
      <div className="max-w-2xl">
        <p className="eyebrow mb-3">Legal</p>
        <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-sm text-faint">Last updated {updated}</p>
        <div className="mt-10 space-y-10">{children}</div>
      </div>
    </Container>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-lg font-semibold tracking-tight">
        {heading}
      </h2>
      <div className="mt-3 space-y-3 leading-7 text-muted">{children}</div>
    </section>
  );
}
