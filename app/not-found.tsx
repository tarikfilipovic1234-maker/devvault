import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col justify-center py-20">
      <div className="max-w-lg">
        <p className="eyebrow mb-3">Error 404</p>
        <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          This page doesn&apos;t exist
        </h1>
        <p className="mt-4 leading-7 text-muted">
          The link may be out of date, or the address may have a typo in it.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/">
            Back to home <ArrowIcon />
          </Button>
          <Button href="/projects" variant="secondary">
            Browse projects
          </Button>
        </div>
        <p className="mt-8 text-sm text-muted">
          Something here should work but doesn&apos;t?{" "}
          <Link
            href="/contact"
            className="text-accent-soft underline underline-offset-2 hover:text-accent"
          >
            Let me know
          </Link>
          .
        </p>
      </div>
    </Container>
  );
}
