import type { Metadata } from "next";
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata: Metadata = {
  title: "Haldwani Interior Design Services | Season-Wise Calendar",

  description:
    "Planning Haldwani interior design services? Use a season-wise calendar for design, ordering, carpentry, painting and handover to avoid delays and damage.",

  keywords: [
    "Haldwani interior design services",
    "interior design services in Haldwani",
    "interior designer Haldwani",
    "season-wise interior design calendar",
    "interior design planning Haldwani",
    "interior design during monsoon Haldwani",
    "interior design during winter Haldwani",
    "interior design during summer Haldwani",
    "carpentry services Haldwani",
    "interior painting services Haldwani",
    "interior design project timeline Haldwani",
    "home interior design Haldwani",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/haldwani-interior-design-services",
  },

  openGraph: {
    title: "Haldwani Interior Design Services | Season-Wise Calendar",
    description:
      "Planning Haldwani interior design services? Use a season-wise calendar for design, ordering, carpentry, painting and handover to avoid delays and damage.",
    url: "https://www.spacebuild.co.in/haldwani/haldwani-interior-design-services",
    siteName: "Space Build",
    type: "article",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Haldwani Interior Design Services - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Haldwani Interior Design Services | Season-Wise Calendar",
    description:
      "Plan design, ordering, carpentry, painting and handover around Haldwani's seasons to reduce delays and protect finishes.",
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