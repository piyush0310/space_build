import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Interior Designer for House in Haldwani | Independent House Interior Guide 2026",

  description:
    "Planning interiors for an independent house in Haldwani? Learn floor-wise planning, staircase and terrace design, bare-shell steps, costs, timelines and how to hire the right designer.",

  keywords:
    "Interior designer for house Haldwani, independent house interior, kothi interior design, duplex interior, villa interior, staircase design, terrace design, floor-wise interior plan, bare shell interior, house interior cost, modular kitchen, Vastu house interior",

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
      "https://www.spacebuild.co.in/haldwani/interior-designer-for-house-in-haldwani",
  },

  openGraph: {
    title:
      "Interior Designer for House in Haldwani | Independent House Interior Guide 2026",
    description:
      "Planning interiors for an independent house in Haldwani? Learn floor-wise planning, staircase and terrace design, bare-shell steps, costs, timelines and how to hire the right designer.",
    url: "https://www.spacebuild.co.in/haldwani/interior-designer-for-house-in-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Interior Designer for House in Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Interior Designer for House in Haldwani | Independent House Interior Guide 2026",
    description:
      "Planning interiors for an independent house in Haldwani? Learn floor-wise planning, staircase and terrace design, bare-shell steps, costs, timelines and how to hire the right designer.",
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