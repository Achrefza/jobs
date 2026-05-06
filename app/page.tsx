import type { Metadata } from "next";
import { CountrySearch } from "./components/CountrySearch";
import { MotionLink } from "./components/MotionLink";
import { ScrollReveal } from "./components/ScrollReveal";
import { getCountries, siteConfig } from "./lib/data";

const trustPoints = [
  "Independent country guides",
  "No account required",
  "Curated external portals",
  "Student-first FAQs",
];

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
              Paid internships · Entry-level jobs · Europe
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
