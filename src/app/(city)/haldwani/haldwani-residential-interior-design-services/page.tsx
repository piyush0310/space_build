
import type { Metadata } from "next";
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata: Metadata = {
  title:
    "Haldwani Residential Interior Design Services | Package Comparison Guide 2026",

  description:
    "Compare Haldwani residential interior design services by package: consultation, design-only, supervised and turnkey tiers, with inclusions, exclusions, costs and who each suits.",

  keywords: [
    "Haldwani residential interior design services",
    "interior design packages",
    "turnkey interior package",
    "design only package",
    "supervised interior package",
    "consultation package",
    "phased interior package",
    "package comparison",
    "residential interiors",
    "interior inclusions",
  ],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/haldwani-residential-interior-design-services",
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
      "Haldwani Residential Interior Design Services | Package Comparison Guide 2026",
    description:
      "Compare residential interior design packages in Haldwani, including inclusions, exclusions, costs, supervision and turnkey options.",
    url: "https://www.spacebuild.co.in/haldwani/haldwani-residential-interior-design-services",
    siteName: "Space Build",
    type: "article",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Haldwani Residential Interior Design Services | Package Comparison Guide 2026",
    description:
      "Compare Haldwani interior design packages by inclusions, exclusions, costs and service levels.",
  },

  other: {
    "geo.region": "IN-UK",
    "geo.placename": "Haldwani, Uttarakhand, India",
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
