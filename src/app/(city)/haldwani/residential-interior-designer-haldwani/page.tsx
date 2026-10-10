import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Residential Interior Designer in Haldwani | Rules, Ownership and Process Guide 2026",

  description:
    "Hire a residential interior designer in Haldwani with confidence: learn scope, society and landlord permissions, ownership-wise planning, homeowner duties, costs and agreement checks.",

  keywords:
    "Residential interior designer Haldwani, residential interiors, apartment interior rules, builder floor interior, rented home interior, society permission, homeowner responsibilities, residential design process, flat interior cost, house interior designer",

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
      "https://www.spacebuild.co.in/haldwani/residential-interior-designer-in-haldwani",
  },

  openGraph: {
    title:
      "Residential Interior Designer in Haldwani | Rules, Ownership and Process Guide 2026",
    description:
      "Hire a residential interior designer in Haldwani with confidence: learn scope, society and landlord permissions, ownership-wise planning, homeowner duties, costs and agreement checks.",
    url: "https://www.spacebuild.co.in/haldwani/residential-interior-designer-in-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Residential Interior Designer in Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Residential Interior Designer in Haldwani | Rules, Ownership and Process Guide 2026",
    description:
      "Hire a residential interior designer in Haldwani with confidence: learn scope, society and landlord permissions, ownership-wise planning, homeowner duties, costs and agreement checks.",
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