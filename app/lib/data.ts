import countries from "../data/countries.json";
import externalLinks from "../data/external-links.json";

export type Country = (typeof countries)[number];
export type ExternalLink = {
  name: string;
  url: string;
  description: string;
  category: string;
};

export const siteConfig = {
  name: "Euro Internship Gateway",
  url: "https://euro-internship-gateway.vercel.app",
  description:
    "A lightweight curated gateway for international students searching for paid internships and entry-level jobs in Europe.",
};

export function getCountries(): Country[] {
  return countries;
}

export function getCountry(slug: string): Country | undefined {
  return countries.find((country) => country.slug === slug);
}

export function getCountryLinks(slug: string): ExternalLink[] {
  const linksByCountry = externalLinks as Record<string, ExternalLink[]>;
  return linksByCountry[slug] ?? [];
}
