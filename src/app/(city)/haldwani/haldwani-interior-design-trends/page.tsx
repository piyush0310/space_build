
import type { Metadata } from "next";
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata: Metadata = {
  title: "Haldwani Interior Design Trends 2026 | Styles, Materials and Costs",
  description:
    "Explore Haldwani interior design trends for 2026: warm palettes, fluted panels, Pahadi-inspired decor, smart storage, layered lighting and how to adopt them without regret.",
  keywords: [
    "Haldwani interior design trends",
    "2026 interior trends",
    "home decor trends",
    "kitchen trends",
    "wardrobe trends",
    "living room trends",
    "bedroom trends",
    "lighting trends",
    "Pahadi interior style",
    "earthy colour palette",
    "modern home design",
    "trending materials",
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Space Build" }],
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/haldwani-interior-design-trends",
  },
  openGraph: {
    title: "Haldwani Interior Design Trends 2026 | Styles, Materials and Costs",
    description:
      "Explore Haldwani interior design trends for 2026: warm palettes, fluted panels, Pahadi-inspired decor, smart storage, layered lighting and how to adopt them without regret.",
    url: "https://www.spacebuild.co.in/haldwani/haldwani-interior-design-trends",
    siteName: "Space Build",
    type: "article",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Haldwani Interior Design Trends 2026 - Space Build",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haldwani Interior Design Trends 2026 | Styles, Materials and Costs",
    description:
      "Explore Haldwani interior design trends for 2026: warm palettes, fluted panels, Pahadi-inspired decor, smart storage, layered lighting and how to adopt them without regret.",
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
