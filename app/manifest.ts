import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sarker Trims Ltd.",
    short_name: "Sarker Trims",
    description:
      "Garment trims, narrow fabrics & export packaging manufacturer in Dhaka, Bangladesh.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#11137b",
    icons: [
      {
        src: "/media/logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
