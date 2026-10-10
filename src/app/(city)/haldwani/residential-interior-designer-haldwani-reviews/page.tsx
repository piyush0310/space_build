import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Residential Interior Designer Haldwani Reviews | Read Feedback by Project Timeline 2026",

  description:
    "Read residential interior designer reviews in Haldwani by project timeline: what week-one, handover, first-monsoon and one-year feedback reveals, and how to judge each kind fairly.",

  keywords:
    "Residential interior designer Haldwani reviews, homeowner feedback, interior review timeline, handover feedback, one year review, monsoon review, designer ratings, post handover complaints, genuine home interior reviews, review checklist",

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
      "https://www.spacebuild.co.in/haldwani/residential-interior-designer-haldwani-reviews",
  },

  openGraph: {
    title:
      "Residential Interior Designer Haldwani Reviews | Read Feedback by Project Timeline 2026",
    description:
      "Read residential interior designer reviews in Haldwani by project timeline: what week-one, handover, first-monsoon and one-year feedback reveals, and how to judge each kind fairly.",
    url: "https://www.spacebuild.co.in/haldwani/residential-interior-designer-haldwani-reviews",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Residential Interior Designer Haldwani Reviews - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Residential Interior Designer Haldwani Reviews | Read Feedback by Project Timeline 2026",
    description:
      "Read residential interior designer reviews in Haldwani by project timeline: what week-one, handover, first-monsoon and one-year feedback reveals, and how to judge each kind fairly.",
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