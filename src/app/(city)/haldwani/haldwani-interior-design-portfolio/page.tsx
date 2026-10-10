
import type { Metadata } from "next";
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata: Metadata = {
  title:
    "Haldwani Interior Design Portfolio | Website, PDF, Instagram and Video Formats 2026",

  description:
    "Compare interior design portfolio formats in Haldwani: website, PDF, Instagram, WhatsApp catalogue and video walkthroughs, with what each proves, how to review it and how studios can use it.",

  keywords: [
    "Haldwani interior design portfolio",
    "interior design portfolio formats",
    "website interior design portfolio",
    "PDF interior design portfolio",
    "Instagram interior design portfolio",
    "WhatsApp interior design catalogue",
    "interior design video walkthrough",
    "interior project gallery Haldwani",
    "interior design portfolio review",
    "interior design portfolio maintenance",
    "interior designer Haldwani",
    "interior design projects Haldwani",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/haldwani-interior-design-portfolio",
  },

  openGraph: {
    title:
      "Haldwani Interior Design Portfolio | Website, PDF, Instagram and Video Formats 2026",
    description:
      "Compare website, PDF, Instagram, WhatsApp catalogue and video walkthrough portfolios, and learn how to review interior design work in Haldwani.",
    url: "https://www.spacebuild.co.in/haldwani/haldwani-interior-design-portfolio",
    siteName: "Space Build",
    type: "article",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Haldwani Interior Design Portfolio - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Haldwani Interior Design Portfolio | Website, PDF, Instagram and Video Formats 2026",
    description:
      "Compare interior design portfolio formats and learn what to check before choosing an interior design studio in Haldwani.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    "geo.placename": "Haldwani, Uttarakhand",
    "geo.region": "IN-UT",
    "content-language": "en-IN",
  },
};

export default function Page() {
  return (
    <>
      <Banner />
      <Content />
      <Portfolio />
    </>
  );
}

