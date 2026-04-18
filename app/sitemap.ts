import type { MetadataRoute } from "next";

const siteUrl = "https://www.altiva.hk";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: `${siteUrl}/`,
          fr: `${siteUrl}/?lang=fr`,
          "x-default": `${siteUrl}/`,
        },
      },
    },
  ];
}
