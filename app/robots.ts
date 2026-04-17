import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://www.altiva.hk/sitemap.xml",
    host: "https://www.altiva.hk",
  };
}
