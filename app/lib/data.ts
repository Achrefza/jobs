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
  name: "InternshipsPlus",
  url: "https://internshipsplus.vercel.app",
  description:
    "Independent country guides for international students searching for paid internships, student jobs, trainee programs, and entry-level careers in Europe.",
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
