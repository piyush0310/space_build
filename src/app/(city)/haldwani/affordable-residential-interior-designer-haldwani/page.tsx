
import type { Metadata } from "next";
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata: Metadata = {
  title:
    "Affordable Residential Interior Designer in Haldwani | Fixed-Budget Playbook 2026",

  description:
    "Find an affordable residential interior designer in Haldwani with a fixed-budget playbook: what each budget buys, where to save, what never to cut and how to compare offers.",

  keywords: [
    "Affordable residential interior designer Haldwani",
    "budget interior designer",
    "low cost home interiors",
    "2BHK interior budget",
    "budget wardrobe",
    "affordable modular kitchen",
    "interior cost control",
    "fixed budget interiors",
    "value interiors",
    "budget friendly designer",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [
    {
      name: "Space Build",
    },
  ],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/affordable-residential-interior-designer-haldwani",
  },

  openGraph: {
    title:
      "Affordable Residential Interior Designer in Haldwani | Fixed-Budget Playbook 2026",
    description:
      "Find an affordable residential interior designer in Haldwani with a fixed-budget playbook: what each budget buys, where to save, what never to cut and how to compare offers.",
    url: "https://www.spacebuild.co.in/haldwani/affordable-residential-interior-designer-haldwani",
    siteName: "Space Build",
    type: "article",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Affordable Residential Interior Designer in Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Affordable Residential Interior Designer in Haldwani | Fixed-Budget Playbook 2026",
    description:
      "Find an affordable residential interior designer in Haldwani with a fixed-budget playbook: what each budget buys, where to save, what never to cut and how to compare offers.",
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
