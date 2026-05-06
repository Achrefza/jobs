import type { Metadata } from "next";
import { siteConfig } from "../lib/data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the InternshipsPlus terms of service, including informational-use terms, external-link disclaimers, and user responsibilities.",
  alternates: { canonical: `${siteConfig.url}/terms-of-service` },
  openGraph: { url: `${siteConfig.url}/terms-of-service`, title: "Terms of Service" },
};

export default function TermsOfServicePage() {
  return (
    <main className="px-6 py-16 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-[2rem] border border-blue-100 bg-white p-8 card-shadow lg:p-12">
        <p className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-[#0a66c2]">Terms of Service</p>
        <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Terms of Service</h1>
        <p className="mt-4 text-sm font-semibold text-slate-500">Last updated: May 6, 2026</p>
        <div className="mt-8 space-y-8 leading-8 text-slate-600">
          <section aria-labelledby="terms-use">
            <h2 className="text-2xl font-black text-slate-950" id="terms-use">Informational use</h2>
            <p className="mt-3">InternshipsPlus provides general information for students researching internships and entry-level jobs. Content is not legal, immigration, tax, employment, or financial advice.</p>
          </section>
          <section aria-labelledby="terms-external">
            <h2 className="text-2xl font-black text-slate-950" id="terms-external">External opportunity portals</h2>
            <p className="mt-3">We link to external websites for applications and further research. We do not control those websites, represent their employers, verify every listing, or guarantee any offer, interview, salary, or outcome.</p>
          </section>
          <section aria-labelledby="terms-user">
            <h2 className="text-2xl font-black text-slate-950" id="terms-user">User responsibilities</h2>
            <p className="mt-3">Before applying or accepting an offer, users should verify eligibility, visa and work authorization rules, contract terms, compensation, working hours, and employer legitimacy.</p>
          </section>
          <section aria-labelledby="terms-changes">
            <h2 className="text-2xl font-black text-slate-950" id="terms-changes">Changes</h2>
            <p className="mt-3">We may update these terms as the website evolves. Continued use of InternshipsPlus means you accept the current version of these terms.</p>
          </section>
          <section aria-labelledby="terms-contact">
            <h2 className="text-2xl font-black text-slate-950" id="terms-contact">Contact</h2>
            <p className="mt-3">For terms-related questions, contact hello@internshipsplus.com.</p>
          </section>
        </div>
      </article>
    </main>
  );
}
