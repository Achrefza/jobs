import type { MetadataRoute } from "next";
import { getCountries, siteConfig } from "./lib/data";

const staticRoutes = ["/about", "/contact", "/privacy-policy", "/terms-of-service"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route === "/about" || route === "/contact" ? 0.7 : 0.5,
    })),
    ...getCountries().map((country) => ({
      url: `${siteConfig.url}/countries/${country.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];
}
