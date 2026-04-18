import type { MetadataRoute } from "next";

const siteUrl = "https://www.altiva.hk";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // Crawlers we explicitly welcome (keep defaults; this documents intent).
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "LinkedInBot", allow: "/" },
      { userAgent: "Applebot", allow: "/" },
      // Future-proofing — block staging / draft paths if we ever add them.
      { userAgent: "*", disallow: ["/draft/", "/admin/", "/*.tmp$"] },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
