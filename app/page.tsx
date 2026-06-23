import { getProjects } from "@/lib/projects";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { SkillsTeaser } from "@/components/sections/SkillsTeaser";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default async function Home() {
  const projects = await getProjects();
  const completedCount = projects.filter((p) => p.status === "Completed").length;

  return (
    <>
      <Hero projectCount={projects.length} completedCount={completedCount} />
      <FeaturedProjects />
      <SkillsTeaser />
      <ContactCTA />
    </>
  );
}
