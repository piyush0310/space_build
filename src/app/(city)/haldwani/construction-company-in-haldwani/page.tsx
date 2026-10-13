
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Construction Company in Haldwani | Space Build Haldwani",

  description:
    "Looking for a construction company in Haldwani? Learn what services to expect, how to choose a builder, key checks, and how Space Build Haldwani plans homes and spaces from foundation to finishing. Book a free consultation.",

  keywords:
    "construction company in Haldwani, house construction Haldwani, home builders Haldwani, residential construction Haldwani, commercial construction Haldwani, civil contractor Haldwani, building contractor Haldwani, turnkey construction Haldwani, home construction services, renovation contractor Haldwani, construction cost Haldwani, how to choose construction company, earthquake resistant construction, construction with interiors, design and build Haldwani, interior designer Haldwani, interior design Haldwani, Haldwani construction, home building Uttarakhand, Space Build Haldwani",

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
      "https://www.spacebuild.co.in/haldwani/construction-company-in-haldwani",
  },

  openGraph: {
    title: "Construction Company in Haldwani | Space Build Haldwani",

    description:
      "Looking for a construction company in Haldwani? Learn what services to expect, how to choose a builder, key checks, and how Space Build Haldwani plans homes and spaces from foundation to finishing. Book a free consultation.",

    url: "https://www.spacebuild.co.in/haldwani/construction-company-in-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Construction Company in Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Construction Company in Haldwani | Space Build Haldwani",

    description:
      "Looking for a construction company in Haldwani? Learn what services to expect, how to choose a builder, key checks, and how Space Build Haldwani plans homes and spaces from foundation to finishing. Book a free consultation.",

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
