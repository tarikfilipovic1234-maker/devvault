import type { Metadata } from "next";
import { skillCategories } from "@/content/skills";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

export const metadata: Metadata = pageMetadata({
  title: "Skills",
  description:
    "The technologies I work with — languages, frontend, backend, databases, auth, cloud and tooling.",
  path: "/skills",
});

export default function SkillsPage() {
  return (
    <Container className="py-20 sm:py-28">
      <header className="mb-14 max-w-2xl">
        <p className="eyebrow mb-4">Toolkit</p>
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Skills &amp; technologies
        </h1>
        <p className="mt-4 text-lg leading-8 text-muted">
          The stack behind my projects — chosen for shipping real, maintainable
          products front to back.
        </p>
      </header>

      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, i) => (
          <StaggerItem key={category.name}>
            <Card className="group h-full p-6">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="font-display text-lg font-semibold tracking-tight">
                  {category.name}
                </h2>
                <span className="font-mono text-xs text-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-line bg-white/[0.03] px-3 py-1.5 text-sm text-muted transition-colors group-hover:border-accent/20"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Container>
  );
}
