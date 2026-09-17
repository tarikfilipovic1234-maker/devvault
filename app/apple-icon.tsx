import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen icon. Padded ground so iOS's mask does not clip the monogram. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0c10",
          color: "#2e9bff",
          fontSize: 78,
          fontWeight: 700,
          letterSpacing: -3,
        }}
      >
        TF
      </div>
    ),
    size,
  );
}
