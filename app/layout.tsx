import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { PageTransition } from "./components/PageTransition";
import { siteConfig } from "./lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: `${siteConfig.name} | Paid Internships and Entry-Level Jobs in Europe`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "paid internships Europe",
    "student jobs Europe",
    "entry-level jobs Europe",
    "international student internships",
    "graduate jobs Europe",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: { canonical: siteConfig.url },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Paid Internships and Entry-Level Jobs in Europe`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Paid Internships and Entry-Level Jobs in Europe`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <SiteHeader />
        <PageTransition>{children}</PageTransition>
        <SiteFooter />
      </body>
    </html>
  );
}
