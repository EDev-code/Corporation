import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Étienne - Développeur Fullstack Portfolio"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1e40af",
        backgroundImage: "linear-gradient(45deg, #1e40af 0%, #3730a3 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 40,
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 48,
            fontWeight: "bold",
            color: "#1e40af",
            marginRight: 40,
          }}
        >
          E.Dev
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1
            style={{
              fontSize: 72,
              fontWeight: "bold",
              color: "white",
              margin: 0,
              lineHeight: 1,
            }}
          >
            E.Dev
          </h1>
          <p
            style={{
              fontSize: 32,
              color: "#e0e7ff",
              margin: 0,
              marginTop: 10,
            }}
          >
            Développeur Fullstack Web & Mobile
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: 30,
          marginTop: 20,
        }}
      >
        {["Next.js", "Laravel","WordPress","Django", "Flutter", "Firebase"].map((tech) => (
          <div
            key={tech}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              padding: "12px 24px",
              borderRadius: 25,
              color: "white",
              fontSize: 20,
              fontWeight: 500,
            }}
          >
            {tech}
          </div>
        ))}
      </div>
      <p
        style={{
          position: "absolute",
          bottom: 40,
          fontSize: 18,
          color: "#e0e7ff",
          margin: 0,
        }}
      >
        🇧🇯 Basé au Bénin • Portfolio {new Date().getFullYear()}
      </p>
    </div>,
    {
      ...size,
    },
  )
}
