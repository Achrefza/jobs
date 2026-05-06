"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import type { Country } from "../lib/data";
import { AnimatedLoadingOverlay } from "./AnimatedLoadingOverlay";

const loadingMessages = [
  "Searching opportunities…",
  "Finding paid internships…",
  "Preparing your results…",
];

type CountrySearchProps = {
  countries: Country[];
};

export function CountrySearch({ countries }: CountrySearchProps) {
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();
  const [selectedCountry, setSelectedCountry] = useState(countries[0]?.slug ?? "");
  const [isLoading, setIsLoading] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  const selectedCountryName = useMemo(
    () => countries.find((country) => country.slug === selectedCountry)?.name ?? "your destination",
    [countries, selectedCountry],
  );

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    const interval = window.setInterval(() => {
      setMessageIndex((current) => (current + 1) % loadingMessages.length);
    }, 850);

    return () => window.clearInterval(interval);
  }, [isLoading]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!selectedCountry) {
      return;
    }

    setIsLoading(true);
    window.setTimeout(() => {
      router.push(`/countries/${selectedCountry}`);
    }, 1600);
  }

  return (
    <>
      <motion.form
        aria-label="Search internships and entry-level jobs by destination country"
        className="card-shadow mx-auto mt-10 grid max-w-4xl gap-4 rounded-3xl border border-blue-100 bg-white/95 p-4 sm:grid-cols-[1fr_auto] sm:p-5"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
        onSubmit={handleSubmit}
      >
        <label className="sr-only" htmlFor="country">
          Destination country
        </label>
        <select
          className="focus-ring min-h-14 rounded-2xl border border-blue-100 bg-blue-50 px-4 text-base font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white"
          id="country"
          name="country"
          onChange={(event) => setSelectedCountry(event.target.value)}
          value={selectedCountry}
        >
          {countries.map((country) => (
            <option key={country.slug} value={country.slug}>
              {country.flag} {country.name} — {country.region}
            </option>
          ))}
        </select>
        <motion.button
          className="focus-ring min-h-14 rounded-2xl bg-[#0a66c2] px-7 text-base font-bold text-white shadow-lg shadow-blue-700/20 transition hover:bg-[#074f95]"
          type="submit"
          whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.01 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
        >
          Search Opportunities
        </motion.button>
      </motion.form>

      <AnimatePresence>
        {isLoading ? (
          <AnimatedLoadingOverlay
            eyebrow={`Searching ${selectedCountryName}`}
            message={loadingMessages[messageIndex]}
            detail={`Building a curated results page for ${selectedCountryName}.`}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}
