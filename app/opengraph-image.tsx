import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Default social card, used by every page without its own OG image. */
export default function Image() {
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 56,
            height: 56,
            borderRadius: 10,
            background: "#2e9bff",
            color: "#061018",
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          TF
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 82,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 34,
              lineHeight: 1.35,
              color: "#9aa3b2",
              maxWidth: 940,
            }}
          >
            {site.summary}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#79818e",
          }}
        >
          <span>{site.role}</span>
          <span>{site.location}</span>
        </div>
      </div>
    ),
    size,
  );
}
