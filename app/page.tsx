import Link from "next/link";
import { CountrySearch } from "./components/CountrySearch";
import { getCountries } from "./lib/data";

const trustPoints = [
  "No account required",
  "Curated external portals",
  "Static pages optimized for Google",
  "Built for international students",
];

export default function Home() {
  const countries = getCountries();

  return (
    <main>
      <section className="relative overflow-hidden px-6 py-8 sm:py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6" aria-label="Top navigation">
          <Link className="focus-ring rounded-lg text-lg font-black tracking-tight text-slate-950" href="/">
            Internships<span className="text-[#0a66c2]">Plus</span>
          </Link>
          <a className="focus-ring rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-bold text-[#0a66c2] shadow-sm" href="#countries">
            Browse countries
          </a>
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div className="animate-fade-up">
            <p className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-[#0a66c2]">
              Paid internships · Entry-level jobs · Europe
            </p>
            <h1 className="max-w-4xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Find trusted internship and first-job portals across Europe.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              Choose your destination and open a fast SEO-focused country guide with curated external websites,
              student-friendly context, English-language expectations, and practical FAQs.
            </p>
            <CountrySearch countries={countries} />
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
          </div>

          <aside className="animate-float rounded-[2rem] border border-blue-100 bg-white p-5 card-shadow" aria-label="Featured countries preview">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-blue-50 to-white p-6">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#0a66c2]">Popular routes</p>
              <div className="mt-6 space-y-4">
                {countries.slice(0, 4).map((country) => (
                  <Link
                    className="focus-ring block rounded-2xl border border-blue-100 bg-white p-4 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                    href={`/countries/${country.slug}`}
                    key={country.slug}
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
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8" id="countries">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Static country guides built for search intent</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Each destination page is designed to match how international students search: paid internships,
              English-speaking jobs, popular cities, and trusted external application websites.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {countries.map((country) => (
              <article className="rounded-3xl border border-blue-100 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl" key={country.slug}>
                <p className="text-4xl" aria-hidden="true">{country.flag}</p>
                <h3 className="mt-4 text-2xl font-black text-slate-950">{country.name}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{country.intro}</p>
                <Link className="focus-ring mt-6 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-[#0a66c2]" href={`/countries/${country.slug}`}>
                  View opportunities <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
