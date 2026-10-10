
import type { Metadata } from "next";
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata: Metadata = {
  title:
    "Haldwani Interior Designer Cost for Residential | Unit Rates and Sample Quote 2026",

  description:
    "See Haldwani residential interior designer cost at item level: unit rates for kitchens, wardrobes, ceilings, paint and electrical, plus a worked 2BHK sample quotation you can copy.",

  keywords: [
    "Haldwani interior designer cost for residential",
    "interior unit rates",
    "wardrobe rate per sq ft",
    "false ceiling rate",
    "paint rate per sq ft",
    "electrical point rate",
    "sample interior quotation",
    "2BHK interior estimate",
    "itemised interior cost",
    "residential interior rate sheet",
  ],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/haldwani-interior-designer-cost-for-residential",
  },

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title:
      "Haldwani Interior Designer Cost for Residential | Unit Rates and Sample Quote 2026",
    description:
      "See Haldwani residential interior costs item by item, including kitchen, wardrobe, ceiling, painting and electrical rates with a sample 2BHK estimate.",
    url: "https://www.spacebuild.co.in/haldwani/haldwani-interior-designer-cost-for-residential",
    siteName: "Space Build",
    type: "article",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Haldwani Interior Designer Cost for Residential | Unit Rates and Sample Quote 2026",
    description:
      "Compare residential interior unit rates and review a sample 2BHK quotation for Haldwani.",
  },

  other: {
    "geo.region": "IN-UK",
    "geo.placename": "Haldwani, Uttarakhand, India",
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
