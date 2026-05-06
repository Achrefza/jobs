import type { Metadata } from "next";
import { siteConfig } from "../lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the InternshipsPlus privacy policy, including information about external links, analytics readiness, and contact email data.",
  alternates: { canonical: `${siteConfig.url}/privacy-policy` },
  openGraph: { url: `${siteConfig.url}/privacy-policy`, title: "Privacy Policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="px-6 py-16 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-[2rem] border border-blue-100 bg-white p-8 card-shadow lg:p-12">
        <p className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-[#0a66c2]">Privacy Policy</p>
        <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm font-semibold text-slate-500">Last updated: May 6, 2026</p>
        <div className="mt-8 space-y-8 leading-8 text-slate-600">
          <section aria-labelledby="privacy-overview">
            <h2 className="text-2xl font-black text-slate-950" id="privacy-overview">Overview</h2>
            <p className="mt-3">InternshipsPlus provides informational country guides and links to external opportunity portals. We aim to collect as little personal information as possible.</p>
          </section>
          <section aria-labelledby="privacy-data">
            <h2 className="text-2xl font-black text-slate-950" id="privacy-data">Information we may receive</h2>
            <p className="mt-3">If you email us, we may receive your email address and message content so we can respond. We do not ask users to create accounts or submit job applications on this website.</p>
          </section>
          <section aria-labelledby="privacy-external">
            <h2 className="text-2xl font-black text-slate-950" id="privacy-external">External links</h2>
            <p className="mt-3">Country guides link to third-party websites. Those websites have their own privacy policies, cookies, analytics, and application processes. Review their terms before submitting personal data.</p>
          </section>
          <section aria-labelledby="privacy-ads">
            <h2 className="text-2xl font-black text-slate-950" id="privacy-ads">Advertising and analytics readiness</h2>
            <p className="mt-3">If advertising or analytics tools are added in the future, this page should be updated to explain the tools used, cookie choices, and applicable user controls.</p>
          </section>
          <section aria-labelledby="privacy-contact">
            <h2 className="text-2xl font-black text-slate-950" id="privacy-contact">Contact</h2>
            <p className="mt-3">For privacy questions, contact hello@internshipsplus.com.</p>
          </section>
        </div>
      </article>
    </main>
  );
}
