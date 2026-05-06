"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import type { Country } from "../lib/data";

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
      <form
        aria-label="Search internships and entry-level jobs by destination country"
        className="card-shadow mx-auto mt-10 grid max-w-4xl gap-4 rounded-3xl border border-blue-100 bg-white/95 p-4 sm:grid-cols-[1fr_auto] sm:p-5"
        onSubmit={handleSubmit}
      >
        <label className="sr-only" htmlFor="country">
          Destination country
        </label>
        <select
          className="focus-ring min-h-14 rounded-2xl border border-blue-100 bg-blue-50 px-4 text-base font-semibold text-slate-900 transition hover:border-blue-300"
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
        <button
          className="focus-ring min-h-14 rounded-2xl bg-[#0a66c2] px-7 text-base font-bold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 hover:bg-[#074f95]"
          type="submit"
        >
          Search Opportunities
        </button>
      </form>

      {isLoading ? (
        <div
          aria-live="assertive"
          aria-label={`Searching opportunities in ${selectedCountryName}`}
          className="fixed inset-0 z-50 grid place-items-center bg-white/95 px-6 backdrop-blur-md"
          role="status"
        >
          <div className="text-center">
            <div className="mx-auto loader-ring" />
            <p className="mt-8 text-2xl font-bold text-slate-950">{loadingMessages[messageIndex]}</p>
            <p className="mt-3 text-sm font-medium text-slate-600">
              Building a curated results page for {selectedCountryName}.
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
