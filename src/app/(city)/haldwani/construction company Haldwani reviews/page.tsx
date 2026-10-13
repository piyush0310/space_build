
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Construction Company Haldwani Reviews | Space Build Haldwani",

  description:
    "How should you read construction company Haldwani reviews? Learn where to find reviews, how to judge them, spot fake ones, and verify claims with site visits and references, with guidance from Space Build Haldwani.",

  keywords: [
    "construction company Haldwani reviews",
    "Haldwani builder reviews",
    "construction company ratings Haldwani",
    "how to read builder reviews",
    "fake review signs",
    "builder reference check",
    "construction company feedback",
    "home builder reviews",
    "verify construction company",
    "past client references",
    "completed project visit",
    "construction company checklist",
    "house construction Haldwani",
    "residential construction Haldwani",
    "construction with interiors",
    "interior designer Haldwani",
    "interior design Haldwani",
    "Haldwani construction",
    "home building Uttarakhand",
    "Space Build Haldwani",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/construction-company-haldwani-reviews",
  },

  openGraph: {
    title: "Construction Company Haldwani Reviews | Space Build Haldwani",

    description:
      "How should you read construction company Haldwani reviews? Learn where to find reviews, how to judge them, spot fake ones, and verify claims with site visits and references, with guidance from Space Build Haldwani.",

    url: "https://www.spacebuild.co.in/haldwani/construction-company-haldwani-reviews",

    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Construction Company Haldwani Reviews - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Construction Company Haldwani Reviews | Space Build Haldwani",

    description:
      "Learn how to evaluate construction company reviews, spot fake feedback, and verify builders through site visits and client references with Space Build Haldwani.",

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
