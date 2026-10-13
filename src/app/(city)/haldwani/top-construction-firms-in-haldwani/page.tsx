
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Top Construction Firms in Haldwani | Space Build Haldwani",

  description:
    "Searching for top construction firms in Haldwani? Learn the types of firms in the market, how to build a shortlist, which documents to verify, and how to match a firm to your project, with guidance from Space Build Haldwani.",

  keywords:
    "top construction firms in Haldwani, construction firms Haldwani, building contractors Haldwani, home builders Haldwani, civil contractors Haldwani, residential builders Haldwani, commercial construction Haldwani, how to shortlist builders, builder verification checklist, construction firm comparison, turnkey construction Haldwani, design and build Haldwani, renovation contractors Haldwani, construction with interiors, house construction Haldwani, interior designer Haldwani, interior design Haldwani, Haldwani construction, home building Uttarakhand, Space Build Haldwani",

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
      "https://www.spacebuild.co.in/haldwani/top-construction-firms-in-haldwani",
  },

  openGraph: {
    title: "Top Construction Firms in Haldwani | Space Build Haldwani",

    description:
      "Searching for top construction firms in Haldwani? Learn the types of firms in the market, how to build a shortlist, which documents to verify, and how to match a firm to your project, with guidance from Space Build Haldwani.",

    url: "https://www.spacebuild.co.in/haldwani/top-construction-firms-in-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Top Construction Firms in Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Top Construction Firms in Haldwani | Space Build Haldwani",

    description:
      "Searching for top construction firms in Haldwani? Learn the types of firms in the market, how to build a shortlist, which documents to verify, and how to match a firm to your project, with guidance from Space Build Haldwani.",

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
