import type { MetadataRoute } from "next";
import { getCountries, siteConfig } from "./lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...getCountries().map((country) => ({
      url: `${siteConfig.url}/countries/${country.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];
}
