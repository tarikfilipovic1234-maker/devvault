import { ImageResponse } from "next/og";
import { getProject, getProjectSlugs } from "@/lib/projects";
import { site } from "@/content/site";

export const alt = "Project — Tarik Filipović";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);

  const name = project?.name ?? site.name;
  const description = project?.description ?? site.summary;
  const tech = project?.tech.slice(0, 5) ?? [];
  const status = project?.status;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#050609",
          backgroundImage:
            "radial-gradient(900px circle at 12% 0%, rgba(46,155,255,0.30), transparent 55%), radial-gradient(800px circle at 100% 100%, rgba(139,92,246,0.28), transparent 55%)",
          color: "#eef2f8",
          fontFamily: "sans-serif",
        }}
      >
        {/* top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#6cb8ff",
          }}
        >
          <span>Project</span>
          {status ? <span style={{ color: "#93a1ba" }}>{status}</span> : null}
        </div>

        {/* middle */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            {name}
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 30,
              lineHeight: 1.4,
              color: "#93a1ba",
              maxWidth: 900,
            }}
          >
            {description}
          </div>
        </div>

        {/* bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", maxWidth: 760 }}>
            {tech.map((t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  border: "1px solid #1b2742",
                  borderRadius: 10,
                  padding: "8px 16px",
                  fontSize: 22,
                  color: "#cdd6e6",
                }}
              >
                {t}
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 26,
              fontWeight: 600,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 48,
                height: 48,
                borderRadius: 12,
                background: "linear-gradient(135deg, #2e9bff, #8b5cf6)",
                fontSize: 22,
                fontWeight: 700,
              }}
            >
              TF
            </div>
            {site.name}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
