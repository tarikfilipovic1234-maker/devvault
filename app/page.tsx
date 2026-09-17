import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { SkillsTeaser } from "@/components/sections/SkillsTeaser";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <SkillsTeaser />
      <ContactCTA />
    </>
  );
}
