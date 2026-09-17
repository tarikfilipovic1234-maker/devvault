import { ImageResponse } from "next/og";
import { getProject, getProjectSlugs } from "@/lib/projects";
import { site } from "@/content/site";

export const alt = `Project by ${site.name}`;
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
          backgroundColor: "#0a0c10",
          color: "#e9ecf1",
          fontFamily: "sans-serif",
          borderTop: "6px solid #2e9bff",
        }}
      >
        {/* top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 20,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#79818e",
          }}
        >
          <span>Project</span>
          {status ? <span>{status}</span> : null}
        </div>

        {/* middle */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 92,
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
              color: "#9aa3b2",
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
          <div
            style={{ display: "flex", gap: 12, flexWrap: "wrap", maxWidth: 760 }}
          >
            {tech.map((t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  border: "1px solid #333944",
                  borderRadius: 6,
                  padding: "8px 16px",
                  fontSize: 22,
                  color: "#9aa3b2",
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
                borderRadius: 8,
                background: "#2e9bff",
                color: "#061018",
                fontSize: 20,
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
