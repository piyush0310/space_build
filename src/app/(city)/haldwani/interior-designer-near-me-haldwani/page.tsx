
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Interior Designer Near Me in Haldwani | Costs, Styles and Hiring Guide 2026",
  description:
    "Searching for an interior designer near me in Haldwani? Compare costs, design styles for Kumaon weather, timelines, contracts and checks to hire the right studio.",
  keywords: [
    "interior designer near me Haldwani",
    "home interior Haldwani",
    "modular kitchen Haldwani",
    "wardrobe design Haldwani",
    "false ceiling Haldwani",
    "living room design Haldwani",
    "bedroom interior Haldwani",
    "office interior Haldwani",
    "Vastu interiors Haldwani",
    "budget interiors Haldwani",
    "turnkey interiors Haldwani",
    "space planning Haldwani",
    "lighting design Haldwani",
  ],
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/interior-designer-near-me-haldwani",
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
      "Interior Designer Near Me in Haldwani | Costs, Styles and Hiring Guide 2026",
    description:
      "Searching for an interior designer near me in Haldwani? Compare costs, design styles for Kumaon weather, timelines, contracts and checks to hire the right studio.",
    url: "https://www.spacebuild.co.in/haldwani/interior-designer-near-me-haldwani",
    siteName: "Space Build",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Interior Designer Near Me in Haldwani",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Interior Designer Near Me in Haldwani | Costs, Styles and Hiring Guide 2026",
    description:
      "Searching for an interior designer near me in Haldwani? Compare costs, design styles for Kumaon weather, timelines, contracts and checks to hire the right studio.",
    images: ["/og-image.jpg"],
  },
  geo: {
    placename: "Haldwani, Uttarakhand, India",
    region: "IN-UT",
    country: "IN",
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