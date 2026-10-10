
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "How to Choose an Interior Designer in Haldwani | 10 Decision Traps to Avoid 2026",

  description:
    "Choose an interior designer in Haldwani without regret: learn ten decision traps, from pretty portfolios to false discounts, and the simple counter-move that protects you from each one.",

  keywords: [
    "How to choose interior designer in Haldwani",
    "interior designer selection mistakes",
    "designer hiring traps",
    "portfolio trap",
    "discount trap",
    "interior quotation comparison",
    "designer red flags",
    "home interior hiring",
    "interior contract safety",
    "designer checklist",
  ],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/how-to-choose-interior-designer-haldwani",
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
      "How to Choose an Interior Designer in Haldwani | 10 Decision Traps to Avoid 2026",
    description:
      "Choose an interior designer in Haldwani without regret: learn ten decision traps, from pretty portfolios to false discounts, and the simple counter-move that protects you from each one.",
    url: "https://www.spacebuild.co.in/haldwani/how-to-choose-interior-designer-haldwani",
    siteName: "Space Build",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "How to Choose an Interior Designer in Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "How to Choose an Interior Designer in Haldwani | 10 Decision Traps to Avoid 2026",
    description:
      "Choose an interior designer in Haldwani without regret: learn ten decision traps, from pretty portfolios to false discounts, and the simple counter-move that protects you from each one.",
    images: ["/og-image.jpg"],
  },

  other: {
    "geo.placename": "Haldwani, Uttarakhand, India",
    "geo.region": "IN-UT",
    "geo.country": "IN",
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
