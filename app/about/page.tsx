import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "../lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "Learn how InternshipsPlus helps international students discover country guides and trusted external portals for paid internships and first jobs in Europe.",
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    url: `${siteConfig.url}/about`,
    title: "About InternshipsPlus",
    description: "Independent country guides for international students searching internships and entry-level jobs in Europe.",
  },
};

export default function AboutPage() {
  return (
    <main className="px-6 py-16 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-[2rem] border border-blue-100 bg-white p-8 card-shadow lg:p-12">
        <p className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-[#0a66c2]">About InternshipsPlus</p>
        <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Independent guides for student career research in Europe.</h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          InternshipsPlus is a lightweight, independent resource that helps international students compare European destinations for paid internships, trainee programs, graduate roles, and entry-level jobs.
        </p>
        <section className="mt-10" aria-labelledby="mission-heading">
          <h2 className="text-2xl font-black text-slate-950" id="mission-heading">Our mission</h2>
          <p className="mt-4 leading-8 text-slate-600">
            Our goal is to make early-career research clearer by combining country-specific context, popular student cities, salary expectations, visa reminders, FAQs, and curated links to external opportunity portals.
          </p>
        </section>
        <section className="mt-10" aria-labelledby="trust-heading">
          <h2 className="text-2xl font-black text-slate-950" id="trust-heading">How we build trust</h2>
          <ul className="mt-4 grid gap-4 text-sm leading-6 text-slate-600 sm:grid-cols-2">
            <li className="rounded-2xl bg-blue-50 p-4 font-semibold">We do not sell jobs or guarantee employment outcomes.</li>
            <li className="rounded-2xl bg-blue-50 p-4 font-semibold">We clearly label external portals and send applications off-site.</li>
            <li className="rounded-2xl bg-blue-50 p-4 font-semibold">We encourage students to verify visa, contract, and salary details directly.</li>
            <li className="rounded-2xl bg-blue-50 p-4 font-semibold">We keep pages fast, accessible, and easy for search engines to crawl.</li>
          </ul>
        </section>
        <Link className="focus-ring mt-10 inline-flex rounded-full bg-[#0a66c2] px-6 py-3 text-sm font-black text-white" href="/#countries">
          Browse country guides
        </Link>
      </article>
    </main>
  );
}
