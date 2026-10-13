
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "How to Choose a Construction Company in Haldwani | Space Build Haldwani",

  description:
    "Learn how to choose a construction company in Haldwani with a clear 10-step process: define your project, set a budget, shortlist, interview, compare quotes, and sign a safe agreement. Guidance from Space Build Haldwani.",

  keywords: [
    "how to choose a construction company in Haldwani",
    "choosing a builder Haldwani",
    "select construction company",
    "construction company selection steps",
    "builder interview questions",
    "compare construction quotes",
    "construction agreement checklist",
    "construction planning steps",
    "house construction Haldwani",
    "residential construction Haldwani",
    "turnkey construction Haldwani",
    "construction budget planning",
    "construction timeline planning",
    "construction with interiors",
    "interior designer Haldwani",
    "interior design Haldwani",
    "Haldwani construction",
    "home building Uttarakhand",
    "builder selection checklist",
    "Space Build Haldwani",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/how-to-choose-construction-company",
  },

  openGraph: {
    title:
      "How to Choose a Construction Company in Haldwani | Space Build Haldwani",

    description:
      "Learn how to choose a construction company in Haldwani with a clear 10-step process: define your project, set a budget, shortlist, interview, compare quotes, and sign a safe agreement. Guidance from Space Build Haldwani.",

    url: "https://www.spacebuild.co.in/haldwani/how-to-choose-construction-company",

    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "How to Choose a Construction Company in Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "How to Choose a Construction Company in Haldwani | Space Build Haldwani",

    description:
      "Follow a 10-step process to shortlist builders, compare quotes, plan your budget, and review your construction agreement in Haldwani.",

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
