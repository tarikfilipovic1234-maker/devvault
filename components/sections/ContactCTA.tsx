import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowIcon, DownloadIcon } from "@/components/ui/icons";

export function ContactCTA() {
  return (
    <section className="pb-20 pt-4 sm:pb-24 sm:pt-6">
      <Container>
        <div className="panel flex flex-col gap-8 rounded-lg p-8 sm:p-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Looking for a developer?
            </h2>
            <p className="mt-4 leading-7 text-muted">
              I&apos;m open to full-stack, front-end and back-end roles. The
              contact form reaches my inbox directly, or you can read the CV
              first.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/contact">
              Get in touch <ArrowIcon />
            </Button>
            <Button href={site.cvPath} variant="secondary">
              <DownloadIcon /> Download CV
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
