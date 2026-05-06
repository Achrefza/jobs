import type { Metadata } from "next";
import { CountrySearch } from "./components/CountrySearch";
import { MotionAnchor, MotionLink } from "./components/MotionLink";
import { ScrollReveal } from "./components/ScrollReveal";
import { getCountries, siteConfig } from "./lib/data";

const trustPoints = [
  "Independent country guides",
  "No account required",
  "Curated external portals",
  "Student-first FAQs",
];

const opportunityPlatforms = [
  {
    name: "LinkedIn",
    logo: "in",
    description: "Professional network with broad internship, graduate, and recruiter-led job listings.",
    href: "https://www.linkedin.com/jobs/",
    accent: "from-[#0a66c2] to-[#084f95]",
  },
  {
    name: "Indeed",
    logo: "id",
    description: "Large job-search engine for comparing roles across employers and locations.",
    href: "https://www.indeed.com/jobs?q=internship&l=Europe",
    accent: "from-[#164081] to-[#0a66c2]",
  },
  {
    name: "Glassdoor",
    logo: "gd",
    description: "Jobs, company reviews, and salary context to evaluate opportunities before applying.",
    href: "https://www.glassdoor.com/Job/europe-internship-jobs-SRCH_IL.0,6_IN228_KO7,17.htm",
    accent: "from-[#0c8f7a] to-[#0a66c2]",
  },
  {
    name: "ErasmusIntern",
    logo: "ei",
    description: "Student-focused traineeship marketplace connected with the Erasmus community.",
    href: "https://erasmusintern.org/traineeships",
    accent: "from-[#1d4ed8] to-[#2563eb]",
  },
  {
    name: "EURES",
    logo: "eu",
    description: "Official European job mobility portal for cross-border roles and work guidance.",
    href: "https://eures.europa.eu/index_en",
    accent: "from-[#075985] to-[#0a66c2]",
  },
  {
    name: "Welcome to the Jungle",
    logo: "wj",
    description: "Curated company profiles and job listings with a strong European startup presence.",
    href: "https://www.welcometothejungle.com/en/jobs",
    accent: "from-[#0f766e] to-[#0a66c2]",
  },
  {
    name: "JobTeaser",
    logo: "jt",
    description: "Early-career platform for internships, apprenticeships, and first jobs.",
    href: "https://www.jobteaser.com/en/job-offers?locale=en",
    accent: "from-[#2563eb] to-[#38bdf8]",
  },
  {
    name: "Graduateland",
    logo: "gl",
    description: "Career network for students and graduates exploring jobs and internships.",
    href: "https://graduateland.com/jobs",
    accent: "from-[#1e40af] to-[#0ea5e9]",
  },
] as const;

const howItWorks = [
  "Choose a country guide built around student search intent.",
  "Compare cities, salary context, visa notes, and local application terms.",
  "Open external opportunity portals and verify details with the employer.",
];

export const metadata: Metadata = {
  title: "Paid Internships and Entry-Level Jobs in Europe",
  description:
    "Find curated country guides for paid internships, graduate roles, student jobs, salaries, visa notes, and trusted external opportunity portals across Europe.",
  alternates: { canonical: siteConfig.url },
  openGraph: {
    url: siteConfig.url,
    title: "Paid Internships and Entry-Level Jobs in Europe",
    description:
      "Curated SEO-friendly country guides for international students searching paid internships and first jobs in Europe.",
  },
};

export default function Home() {
  const countries = getCountries();

  return (
    <main>
      <section className="relative overflow-hidden px-6 py-16 sm:py-20 lg:px-8 lg:py-28" aria-labelledby="home-hero-title">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(circle_at_center,rgba(10,102,194,0.16),transparent_42rem)]" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <ScrollReveal>
            <p className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-[#0a66c2]">
              Internships · Entry-level jobs · Europe
            </p>
            <h1 className="max-w-5xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl" id="home-hero-title">
              Find trusted internship and first-job portals across Europe.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              InternshipsPlus helps international students compare destinations, understand practical job-search basics,
              and reach curated external portals for paid internships, trainee programs, and graduate roles.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="focus-ring inline-flex items-center justify-center rounded-full bg-[#0a66c2] px-7 py-4 text-base font-black text-white shadow-xl shadow-blue-700/20 transition hover:-translate-y-0.5 hover:bg-[#074f95]" href="#country-search">
                Start your search <span className="ml-2" aria-hidden="true">→</span>
              </a>
              <MotionLink className="focus-ring inline-flex items-center justify-center rounded-full border border-blue-100 bg-white px-7 py-4 text-base font-black text-[#0a66c2] transition hover:border-blue-300 hover:bg-blue-50" href="/about" lift="md">
                Why trust us
              </MotionLink>
            </div>
            <div id="country-search">
              <CountrySearch countries={countries} />
            </div>
            <ul className="mt-8 grid gap-3 text-sm font-semibold text-slate-600 sm:grid-cols-2" aria-label="Platform benefits">
              {trustPoints.map((point) => (
                <li className="flex items-center gap-3" key={point}>
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-blue-100 text-[#0a66c2]" aria-hidden="true">
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal as="aside" className="animate-float rounded-[2rem] border border-blue-100 bg-white p-5 card-shadow" aria-label="Featured countries preview" delay={0.08}>
            <div className="rounded-[1.5rem] bg-gradient-to-br from-blue-50 to-white p-6">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#0a66c2]">Popular routes</p>
              <div className="mt-6 space-y-4">
                {countries.slice(0, 5).map((country) => (
                  <MotionLink
                    className="focus-ring block rounded-2xl border border-blue-100 bg-white p-4 transition hover:border-blue-300 hover:shadow-lg"
                    href={`/countries/${country.slug}`}
                    key={country.slug}
                    lift="md"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-black text-slate-950">
                          <span aria-hidden="true">{country.flag}</span> {country.name}
                        </p>
                        <p className="mt-1 text-sm text-slate-500">Internships, trainee roles, and graduate jobs</p>
                      </div>
                      <span className="text-[#0a66c2]" aria-hidden="true">→</span>
                    </div>
                  </MotionLink>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ScrollReveal as="section" className="px-6 py-16 lg:px-8" id="find-opportunities" aria-labelledby="find-opportunities-title">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#0a66c2]">Curated job platforms</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl" id="find-opportunities-title">Find Opportunities</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Start with trusted external platforms students and graduates commonly use to discover internships,
              entry-level jobs, company research, and cross-border opportunities in Europe.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" role="list" aria-label="External internship and job search platforms">
            {opportunityPlatforms.map((platform, index) => (
              <ScrollReveal
                as="article"
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-700/10"
                key={platform.name}
                delay={index * 0.035}
                role="listitem"
              >
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="flex items-start justify-between gap-4">
                  <div className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${platform.accent} text-sm font-black uppercase tracking-tight text-white shadow-lg shadow-blue-700/20`} aria-hidden="true">
                    {platform.logo}
                  </div>
                  <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-[#0a66c2]">
                    External
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-black text-slate-950">{platform.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{platform.description}</p>
                <MotionAnchor
                  className="focus-ring mt-6 inline-flex items-center justify-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-black text-[#0a66c2] transition group-hover:border-blue-300 group-hover:bg-[#0a66c2] group-hover:text-white"
                  href={platform.href}
                  lift="md"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${platform.name} in a new tab`}
                >
                  Search jobs <span className="ml-2" aria-hidden="true">↗</span>
                </MotionAnchor>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="px-6 py-16 lg:px-8" aria-labelledby="how-it-works-title">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-blue-100 bg-white p-8 card-shadow lg:p-10">
          <h2 className="text-3xl font-black tracking-tight text-slate-950" id="how-it-works-title">A clearer path from research to applications</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {howItWorks.map((item, index) => (
              <ScrollReveal as="article" className="rounded-3xl bg-blue-50 p-6" key={item} delay={index * 0.04}>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0a66c2]">Step {index + 1}</p>
                <h3 className="mt-4 text-xl font-black text-slate-950">{item}</h3>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="px-6 py-16 lg:px-8" id="countries" aria-labelledby="countries-title">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl" id="countries-title">SEO-friendly country guides for student job searches</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Each destination page is designed to match how international students search: paid internships,
              English-speaking jobs, popular cities, salary expectations, visa basics, and trusted external application websites.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {countries.map((country) => (
              <ScrollReveal as="article" className="rounded-3xl border border-blue-100 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl" key={country.slug}>
                <p className="text-4xl" aria-hidden="true">{country.flag}</p>
                <h3 className="mt-4 text-2xl font-black text-slate-950">{country.name}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{country.intro}</p>
                <MotionLink className="focus-ring mt-6 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-[#0a66c2]" href={`/countries/${country.slug}`}>
                  View country guide <span aria-hidden="true">→</span>
                </MotionLink>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </main>
  );
}
