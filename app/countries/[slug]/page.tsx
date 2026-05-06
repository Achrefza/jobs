import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCountries, getCountry, getCountryLinks, siteConfig } from "../../lib/data";

type CountryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getCountries().map((country) => ({ slug: country.slug }));
}

export async function generateMetadata({ params }: CountryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const country = getCountry(slug);

  if (!country) {
    return {};
  }

  const url = `${siteConfig.url}/countries/${country.slug}`;

  return {
    title: country.seoTitle,
    description: country.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: country.seoTitle,
      description: country.seoDescription,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: country.seoTitle,
      description: country.seoDescription,
    },
  };
}

export default async function CountryPage({ params }: CountryPageProps) {
  const { slug } = await params;
  const country = getCountry(slug);

  if (!country) {
    notFound();
  }

  const links = getCountryLinks(country.slug);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: country.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="border-b border-blue-100 bg-white/90 px-6 py-5 backdrop-blur lg:px-8">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4" aria-label="Country navigation">
          <Link className="focus-ring rounded-lg text-lg font-black tracking-tight text-slate-950" href="/">
            Euro<span className="text-[#0a66c2]">Gateway</span>
          </Link>
          <Link className="focus-ring rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-[#0a66c2]" href="/">
            Change country
          </Link>
        </nav>
      </header>

      <article className="px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
            <section className="animate-fade-up">
              <p className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-[#0a66c2]">
                {country.flag} {country.region} opportunity guide
              </p>
              <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">
                Paid internships and entry-level jobs in {country.name}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{country.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3" aria-label={`Popular cities in ${country.name}`}>
                {country.popularCities.map((city) => (
                  <span className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-bold text-slate-700" key={city}>
                    {city}
                  </span>
                ))}
              </div>
            </section>

            <aside className="rounded-3xl border border-blue-100 bg-white p-6 card-shadow" aria-label="Quick facts">
              <h2 className="text-xl font-black text-slate-950">Quick student checklist</h2>
              <ul className="mt-5 space-y-4 text-sm leading-6 text-slate-600">
                <li><strong className="text-slate-950">Best search terms:</strong> paid internship, working student, trainee, graduate program, junior role.</li>
                <li><strong className="text-slate-950">Start with:</strong> trusted portals, university career services, and employer career pages.</li>
                <li><strong className="text-slate-950">Tip:</strong> filter by English, hybrid, internship, and entry-level where available.</li>
              </ul>
            </aside>
          </div>

          <section className="mt-16 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]" aria-labelledby="english-requirements">
            <div className="rounded-3xl border border-blue-100 bg-white p-7">
              <h2 className="text-2xl font-black text-slate-950" id="english-requirements">English requirements in {country.name}</h2>
              <p className="mt-4 leading-8 text-slate-600">{country.englishRequirements}</p>
            </div>
            <div className="rounded-3xl border border-blue-100 bg-blue-50 p-7">
              <h2 className="text-2xl font-black text-slate-950">Popular cities for students</h2>
              <p className="mt-4 leading-8 text-slate-600">
                Start with {country.popularCities.slice(0, 3).join(", ")} for the largest mix of international employers, startups, and student-friendly roles. Smaller cities can be excellent for specialized industries and less competitive searches.
              </p>
            </div>
          </section>

          <section className="mt-16" aria-labelledby="opportunity-links">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h2 className="text-3xl font-black tracking-tight text-slate-950" id="opportunity-links">Curated opportunity links</h2>
                <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                  These external websites are selected as starting points. Always verify eligibility, visa rules, compensation, and contract details directly with the employer or portal.
                </p>
              </div>
            </div>
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {links.map((link) => (
                <article className="flex min-h-full flex-col rounded-3xl border border-blue-100 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl" key={link.url}>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0a66c2]">{link.category}</p>
                  <h3 className="mt-4 text-xl font-black text-slate-950">{link.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{link.description}</p>
                  <a
                    className="focus-ring mt-6 inline-flex items-center justify-center rounded-full bg-[#0a66c2] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#074f95]"
                    href={link.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Apply externally <span className="ml-2" aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-16" aria-labelledby="faq-heading">
            <h2 className="text-3xl font-black tracking-tight text-slate-950" id="faq-heading">FAQs about internships and jobs in {country.name}</h2>
            <div className="mt-8 divide-y divide-blue-100 overflow-hidden rounded-3xl border border-blue-100 bg-white">
              {country.faqs.map((faq) => (
                <details className="group p-6" key={faq.question}>
                  <summary className="cursor-pointer list-none text-lg font-black text-slate-950 focus:outline-none group-open:text-[#0a66c2]">
                    {faq.question}
                  </summary>
                  <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
