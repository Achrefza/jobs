import type { Metadata } from "next";
import { siteConfig } from "../lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact InternshipsPlus for feedback, corrections, partnership questions, or country guide suggestions.",
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: {
    url: `${siteConfig.url}/contact`,
    title: "Contact InternshipsPlus",
    description: "Send feedback, corrections, or questions about InternshipsPlus country guides.",
  },
};

export default function ContactPage() {
  return (
    <main className="px-6 py-16 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-[2rem] border border-blue-100 bg-white p-8 card-shadow lg:p-12">
        <p className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-[#0a66c2]">Contact</p>
        <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Questions, feedback, or corrections?</h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          We welcome corrections, updated resource suggestions, and feedback that helps make InternshipsPlus more useful for students.
        </p>
        <section className="mt-10 grid gap-5 sm:grid-cols-2" aria-label="Contact options">
          <div className="rounded-3xl bg-blue-50 p-6">
            <h2 className="text-xl font-black text-slate-950">Email</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">For general questions and corrections, email us at:</p>
            <a className="focus-ring mt-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-[#0a66c2]" href="mailto:hello@internshipsplus.com">
              hello@internshipsplus.com
            </a>
          </div>
          <div className="rounded-3xl bg-blue-50 p-6">
            <h2 className="text-xl font-black text-slate-950">Response scope</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              We can respond to website feedback, but we cannot submit applications, provide immigration advice, or represent external employers and job boards.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
