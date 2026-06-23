import { site } from "@/content/site";
import { getProjects } from "@/lib/projects";

// Placeholder landing page for Milestone 1 — confirms the content layer is
// wired up. The animated hero and landing sections arrive in Milestone 3.
export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-6 px-6 py-24">
      <p className="text-sm font-medium uppercase tracking-widest text-[#2e9bff]">
        {site.role}
      </p>
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        {site.name}
      </h1>
      <p className="max-w-prose text-lg leading-8 text-zinc-400">
        {site.summary}
      </p>
      <p className="text-sm text-zinc-500">
        {projects.length} projects loaded · build scaffolding ready.
      </p>
    </main>
  );
}
