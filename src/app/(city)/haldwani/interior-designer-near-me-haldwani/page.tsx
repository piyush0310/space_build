import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Interior Designer Near Me in Haldwani | Costs, Styles and Hiring Guide 2026",

  description:
    "Searching for an interior designer near me in Haldwani? Compare costs, design styles for Kumaon weather, timelines, contracts and checks to hire the right studio.",

  keywords:
    "Interior designer near me Haldwani, home interior, modular kitchen, wardrobe design, false ceiling, living room design, bedroom interior, office interior, Vastu interiors, budget interiors, turnkey interiors, space planning, lighting design",

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
      "https://www.spacebuild.co.in/haldwani/interior-designer-near-me-in-haldwani",
  },

  openGraph: {
    title:
      "Interior Designer Near Me in Haldwani | Costs, Styles and Hiring Guide 2026",
    description:
      "Searching for an interior designer near me in Haldwani? Compare costs, design styles for Kumaon weather, timelines, contracts and checks to hire the right studio.",
    url: "https://www.spacebuild.co.in/haldwani/interior-designer-near-me-in-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Interior Designer Near Me in Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Interior Designer Near Me in Haldwani | Costs, Styles and Hiring Guide 2026",
    description:
      "Searching for an interior designer near me in Haldwani? Compare costs, design styles for Kumaon weather, timelines, contracts and checks to hire the right studio.",
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