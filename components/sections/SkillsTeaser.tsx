import Link from "next/link";
import { skillCategories } from "@/content/skills";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ArrowIcon } from "@/components/ui/icons";

export function SkillsTeaser() {
  return (
    <Section
      eyebrow="Toolkit"
      title="Technologies I work with"
      description="The stack behind the projects above, front to back."
      className="border-t border-line"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <Card key={category.name} className="h-full p-5">
            <h3 className="font-display text-base font-semibold tracking-tight">
              {category.name}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-sm border border-line bg-raised px-2 py-0.5 text-xs text-muted"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <Link
        href="/skills"
        className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-accent-soft transition-colors hover:text-accent"
      >
        See the full toolkit
        <ArrowIcon className="transition-transform group-hover:translate-x-0.5" />
      </Link>
    </Section>
  );
}
