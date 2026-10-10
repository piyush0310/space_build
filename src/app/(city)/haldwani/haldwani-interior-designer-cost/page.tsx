
import type { Metadata } from "next";
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata: Metadata = {
  title:
    "Haldwani Interior Designer Cost | Designer Fee Models and What You Pay For 2026",

  description:
    "Understand Haldwani interior designer cost from the fee side: fee models, what the charge includes, extra billing, negotiation tips and how to compare designer quotes fairly.",

  keywords: [
    "Haldwani interior designer cost",
    "interior designer fee",
    "design charges",
    "consultation fee",
    "per sq ft design fee",
    "percentage fee",
    "turnkey design cost",
    "3D design charges",
    "supervision fee",
    "designer quotation",
    "fee negotiation",
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
      "https://www.spacebuild.co.in/haldwani/haldwani-interior-designer-cost",
  },

  openGraph: {
    title:
      "Haldwani Interior Designer Cost | Designer Fee Models and What You Pay For 2026",
    description:
      "Understand Haldwani interior designer cost from the fee side: fee models, what the charge includes, extra billing, negotiation tips and how to compare designer quotes fairly.",
    url: "https://www.spacebuild.co.in/haldwani/haldwani-interior-designer-cost",
    siteName: "Space Build",
    type: "article",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Haldwani Interior Designer Cost - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Haldwani Interior Designer Cost | Designer Fee Models and What You Pay For 2026",
    description:
      "Understand Haldwani interior designer cost from the fee side: fee models, what the charge includes, extra billing, negotiation tips and how to compare designer quotes fairly.",
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
