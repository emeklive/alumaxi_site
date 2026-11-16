import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Alumaxi Fortaleza",
    short_name: "Alumaxi",
    description: "Vidros, alumínio, ferragens e acessórios em Fortaleza.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#006868",
    lang: "pt-BR",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
