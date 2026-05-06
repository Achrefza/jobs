import { MotionLink } from "./MotionLink";

const navLinks = [
  { href: "/#countries", label: "Countries" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-blue-100 bg-white/90 px-6 py-4 backdrop-blur lg:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4" aria-label="Primary navigation">
        <MotionLink className="focus-ring rounded-lg text-lg font-black tracking-tight text-slate-950" href="/" aria-label="InternshipsPlus home" lift="none">
          Internships<span className="text-[#0a66c2]">Plus</span>
        </MotionLink>
        <div className="flex items-center gap-2 sm:gap-3">
          {navLinks.map((link) => (
            <MotionLink
              className="focus-ring rounded-full px-3 py-2 text-sm font-bold text-slate-600 transition hover:bg-blue-50 hover:text-[#0a66c2] sm:px-4"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </MotionLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
