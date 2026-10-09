
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "How to Choose an Interior Designer in Haldwani | 3-Meeting Question Guide 2026",
  description:
    "Choose an interior designer in Haldwani through three structured meetings. Get the exact questions to ask, how to read good and weak answers, and what to confirm before signing.",
  keywords: [
    "How to choose interior designer in Haldwani",
    "designer meeting questions",
    "interior designer interview",
    "first meeting checklist",
    "site visit questions",
    "quotation meeting",
    "designer red flags",
    "interior agreement",
    "home interior hiring",
    "modular kitchen designer",
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
      "How to Choose an Interior Designer in Haldwani | 3-Meeting Question Guide 2026",
    description:
      "Choose an interior designer in Haldwani through three structured meetings. Get the exact questions to ask, how to read good and weak answers, and what to confirm before signing.",
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
      "How to Choose an Interior Designer in Haldwani | 3-Meeting Question Guide 2026",
    description:
      "Choose an interior designer in Haldwani through three structured meetings. Get the exact questions to ask, how to read good and weak answers, and what to confirm before signing.",
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