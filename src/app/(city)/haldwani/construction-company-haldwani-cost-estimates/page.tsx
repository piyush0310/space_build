
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Construction Company Haldwani Cost Estimates: Budget Planning Guide | Space Build",

  description:
    "Get clear construction cost estimates from a construction company in Haldwani. Learn how estimates, BOQs and budgets work, and how to plan your home or building project. Space Build, spacebuild.co.in.",

  keywords: [
    "construction company Haldwani cost estimates",
    "construction cost estimate Haldwani",
    "house construction budget Haldwani",
    "building cost estimation",
    "construction company in Haldwani",
    "BOQ for house construction",
    "grey structure cost",
    "turnkey construction cost",
    "construction rate per sq ft Haldwani",
    "residential construction estimate",
    "commercial construction estimate",
    "construction budget planning",
    "home building cost Uttarakhand",
    "construction company near me",
    "best construction company Haldwani",
    "construction company Nainital district",
    "construction company Kathgodam",
    "Vastu friendly construction",
    "Space Build Haldwani",
    "Space Build construction",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/construction-cost-estimates",
  },

  openGraph: {
    title:
      "Construction Company Haldwani Cost Estimates: Budget Planning Guide | Space Build",

    description:
      "Get clear construction cost estimates from a construction company in Haldwani. Learn how estimates, BOQs and budgets work, and how to plan your home or building project. Space Build, spacebuild.co.in.",

    url: "https://www.spacebuild.co.in/haldwani/construction-cost-estimates",

    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Construction Company Haldwani Cost Estimates - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Construction Company Haldwani Cost Estimates: Budget Planning Guide | Space Build",

    description:
      "Learn how construction estimates, BOQs and budgets work so you can plan your home or building project in Haldwani with Space Build.",

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
