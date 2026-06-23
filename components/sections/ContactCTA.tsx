import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowIcon, DownloadIcon } from "@/components/ui/icons";

export function ContactCTA() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="ring-gradient relative overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-16">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/10 via-transparent to-violet/10" />
            <p className="eyebrow mb-4">03 / Let&apos;s talk</p>
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-5xl">
              Have a role or project in mind?{" "}
              <GradientText>Let&apos;s build it.</GradientText>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-muted">
              I&apos;m open to full-stack and front-end opportunities. The
              fastest way to reach me is the form — or grab my CV.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button href="/contact">
                Get in touch <ArrowIcon />
              </Button>
              <Button href={site.cvPath} variant="secondary">
                <DownloadIcon /> Download CV
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
