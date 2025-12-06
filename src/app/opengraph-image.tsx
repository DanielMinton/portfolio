import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Daniel Minton - Creative Technologist & Full-Stack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #09090b 0%, #18181b 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Dot pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(139,92,246,0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Gradient orbs */}
        <div
          style={{
            position: "absolute",
            left: -100,
            bottom: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(139,92,246,0.15)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -50,
            top: -50,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(217,70,239,0.1)",
            filter: "blur(80px)",
          }}
        />

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", zIndex: 10 }}>
          <span style={{ fontSize: 28, color: "#a1a1aa", marginBottom: 16 }}>
            Hello, I&apos;m
          </span>

          <span
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "white",
              marginBottom: 16,
            }}
          >
            Daniel Minton
          </span>

          <span
            style={{
              fontSize: 36,
              fontWeight: 600,
              background: "linear-gradient(90deg, #8b5cf6, #d946ef)",
              backgroundClip: "text",
              color: "transparent",
              marginBottom: 24,
            }}
          >
            Creative Technologist & Full-Stack Engineer
          </span>

          <span style={{ fontSize: 24, color: "#71717a", marginBottom: 40 }}>
            10+ years building production software
          </span>

          {/* Tech badges */}
          <div style={{ display: "flex", gap: 12 }}>
            {["React", "TypeScript", "Node.js", "AWS", "AI"].map((tech) => (
              <div
                key={tech}
                style={{
                  padding: "8px 16px",
                  borderRadius: 8,
                  background: "rgba(139,92,246,0.2)",
                  color: "#a78bfa",
                  fontSize: 16,
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Logo in corner */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            right: 80,
            fontSize: 48,
            fontWeight: 700,
            display: "flex",
          }}
        >
          <span style={{ color: "#8b5cf6" }}>D</span>
          <span style={{ color: "white" }}>M</span>
        </div>

        {/* Accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 80,
            width: 200,
            height: 4,
            borderRadius: 2,
            background: "linear-gradient(90deg, #8b5cf6, #d946ef)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
