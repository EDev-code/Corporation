import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "E.Dev - Portfolio Développeur Fullstack",
    short_name: "E.Dev",
    description: "Portfolio professionnel de Etienne, développeur fullstack web et mobile basé au Bénin et dans le monde entier.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    categories: ["business", "productivity", "developer"],
    lang: "fr",
    dir: "ltr",
  }
}
