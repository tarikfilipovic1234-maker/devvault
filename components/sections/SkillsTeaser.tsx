import Link from "next/link";
import { skillCategories } from "@/content/skills";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ArrowIcon } from "@/components/ui/icons";

export function SkillsTeaser() {
  return (
    <Section
      eyebrow="02 / Toolkit"
      title="Technologies I work with"
      description="The stack behind the projects — front to back."
    >
      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <StaggerItem key={category.name}>
            <Card className="h-full p-6">
              <h3 className="font-display text-lg font-semibold tracking-tight">
                {category.name}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-line bg-white/[0.03] px-2.5 py-1 text-xs text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="mt-10">
        <Link
          href="/skills"
          className="group inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-soft"
        >
          Explore skills in detail
          <ArrowIcon className="transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </Section>
  );
}
