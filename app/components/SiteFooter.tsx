import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-blue-100 bg-white px-6 py-10 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-start">
        <div>
          <Link className="focus-ring rounded-lg text-lg font-black tracking-tight text-slate-950" href="/">
            Internships<span className="text-[#0a66c2]">Plus</span>
          </Link>
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600">
            Independent student career guides with curated links to external opportunity portals. We do not charge applicants, process applications, or guarantee job outcomes.
          </p>
          <p className="mt-4 text-xs font-semibold text-slate-500">© {new Date().getFullYear()} InternshipsPlus. All rights reserved.</p>
        </div>
        <nav className="flex flex-wrap gap-3 md:justify-end" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <Link className="focus-ring rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-[#0a66c2]" href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
