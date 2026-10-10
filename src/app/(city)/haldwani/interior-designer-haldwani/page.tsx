
import type { Metadata } from "next";

import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";

export const metadata: Metadata = {
  title:
    "Interior Designer in Haldwani | Vastu-Friendly Home Interiors – Space Build",

  description:
    "Looking for an interior designer in Haldwani? Space Build plans Vastu-aligned homes, modular kitchens and offices with clear budgets, smart storage and neat finishing.",

  keywords: [
    "interior designer Haldwani",
    "Haldwani interiors",
    "home interior Haldwani",
    "modular kitchen Haldwani",
    "Vastu consultant Haldwani",
    "false ceiling Haldwani",
    "office interior Haldwani",
    "2 BHK interior",
    "3 BHK interior",
    "wardrobe design",
    "living room design",
    "bedroom interior",
    "renovation Haldwani",
    "luxury interiors",
    "affordable interior designer",
    "interior designer near me",
    "Haldwani ghar ka interior",
    "rasoi design Haldwani",
    "Vastu ke anusar interior",
    "Space Build Haldwani",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/interior-designer-in-haldwani",
  },

  openGraph: {
    title:
      "Interior Designer in Haldwani | Vastu-Friendly Home Interiors – Space Build",
    description:
      "Looking for an interior designer in Haldwani? Space Build plans Vastu-aligned homes, modular kitchens and offices with clear budgets, smart storage and neat finishing.",
    url: "https://www.spacebuild.co.in/haldwani/interior-designer-in-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Interior Designer in Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Interior Designer in Haldwani | Vastu-Friendly Home Interiors – Space Build",
    description:
      "Vastu-friendly home interiors, modular kitchens and office interiors in Haldwani by Space Build.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    "geo.placename": "Haldwani, Uttarakhand",
    "geo.region": "IN-UT",
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
