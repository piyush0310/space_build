
import type { Metadata } from "next";
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata: Metadata = {
  title:
    "Best Interior Designer Haldwani | 6 Tests Before You Hire",

  description:
    "Searching for the best interior designer in Haldwani? Run six simple tests on brief, drawings, materials, sites, budget and references before hiring.",

  keywords: [
    "best interior designer in Haldwani",
    "best interior designer Haldwani",
    "interior designers in Haldwani",
    "home interior designer Haldwani",
    "kitchen interior designer Haldwani",
    "office interior designer Haldwani",
    "interior design professionals",
    "interior designer hiring checklist",
    "interior design brief",
    "interior design drawings",
    "interior materials comparison",
    "interior design budget",
    "interior designer references",
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
      "https://www.spacebuild.co.in/haldwani/best-interior-designers-haldwani",
  },

  openGraph: {
    title:
      "Best Interior Designer Haldwani | 6 Tests Before You Hire",
    description:
      "Searching for the best interior designer in Haldwani? Run six simple tests on brief, drawings, materials, sites, budget and references before hiring.",
    url: "https://www.spacebuild.co.in/haldwani/best-interior-designers-haldwani",
    siteName: "Space Build",
    type: "article",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Best Interior Designer Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Best Interior Designer Haldwani | 6 Tests Before You Hire",
    description:
      "Searching for the best interior designer in Haldwani? Run six simple tests on brief, drawings, materials, sites, budget and references before hiring.",
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
