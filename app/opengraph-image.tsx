import { ImageResponse } from "next/og";
import fs from "node:fs/promises";
import path from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const markData = await fs.readFile(
    path.join(process.cwd(), "public/atlas-mark.png"),
  );
  const markSrc = `data:image/png;base64,${markData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#09090b",
          backgroundImage:
            "radial-gradient(circle at 25% 20%, rgba(99,102,241,0.35), transparent 55%), radial-gradient(circle at 80% 80%, rgba(56,189,248,0.25), transparent 55%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={markSrc} width={140} height={140} style={{ marginBottom: 36 }} />
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: -1.5,
          }}
        >
          Atlas
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#a1a1aa",
            marginTop: 20,
            maxWidth: 900,
            textAlign: "center",
          }}
        >
          Une seule API. Des centaines de modèles IA. Gratuit d&apos;abord.
        </div>
      </div>
    ),
    { ...size },
  );
}
