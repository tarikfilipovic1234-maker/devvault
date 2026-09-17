import type { Metadata } from "next";
import { skillCategories } from "@/content/skills";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = pageMetadata({
  title: "Skills",
  description:
    "Languages, frameworks, databases, authentication, cloud services and tooling I work with.",
  path: "/skills",
});

export default function SkillsPage() {
  return (
    <Container className="py-16 sm:py-24">
      <header className="mb-12 max-w-2xl">
        <p className="eyebrow mb-3">Toolkit</p>
        <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Skills and technologies
        </h1>
        <p className="mt-4 leading-7 text-muted">
          Everything listed here is something I have used to build and ship one
          of the projects on this site.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <Card key={category.name} className="h-full p-5">
            <h2 className="font-display text-base font-semibold tracking-tight">
              {category.name}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-sm border border-line bg-raised px-2 py-1 text-xs text-muted"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Container>
  );
}
