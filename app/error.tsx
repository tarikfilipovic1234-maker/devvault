"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/**
 * Route-level error boundary. Shows a recoverable message instead of a blank
 * screen; the underlying error is logged rather than shown, since it can carry
 * server detail.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="flex min-h-[60vh] flex-col justify-center py-20">
      <div className="max-w-lg">
        <p className="eyebrow mb-3">Error</p>
        <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Something went wrong
        </h1>
        <p className="mt-4 leading-7 text-muted">
          This page failed to load. Trying again often clears it.
        </p>
        {error.digest && (
          <p className="mt-2 font-mono text-xs text-faint">
            Reference: {error.digest}
          </p>
        )}
        <div className="mt-8 flex flex-wrap gap-3">
          <Button onClick={reset}>Try again</Button>
          <Button href="/" variant="secondary">
            Back to home
          </Button>
        </div>
      </div>
    </Container>
  );
}
