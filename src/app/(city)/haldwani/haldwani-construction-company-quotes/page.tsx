
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Haldwani Construction Company Quotes: How to Get, Read & Compare | Space Build",

  description:
    "Looking for construction company quotes in Haldwani? Learn how to request, read and compare quotes, spot hidden charges and choose a reliable builder. Transparent guidance from Space Build, spacebuild.co.in.",

  keywords: [
    "Haldwani construction company quotes",
    "construction quotation Haldwani",
    "get construction quote Haldwani",
    "compare construction quotes",
    "house construction quotation",
    "building contractor quotes Haldwani",
    "construction company in Haldwani",
    "residential construction quote",
    "commercial construction quote",
    "how to read a construction quote",
    "construction quotation format",
    "construction price comparison",
    "free construction quote",
    "turnkey construction quote",
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
      "https://www.spacebuild.co.in/haldwani/construction-company-quotes",
  },

  openGraph: {
    title:
      "Haldwani Construction Company Quotes: How to Get, Read & Compare | Space Build",

    description:
      "Looking for construction company quotes in Haldwani? Learn how to request, read and compare quotes, spot hidden charges and choose a reliable builder. Transparent guidance from Space Build, spacebuild.co.in.",

    url: "https://www.spacebuild.co.in/haldwani/construction-company-quotes",

    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Haldwani Construction Company Quotes - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Haldwani Construction Company Quotes: How to Get, Read & Compare | Space Build",

    description:
      "Learn how to request, read and compare construction quotes in Haldwani, identify hidden charges and choose a reliable builder with Space Build.",

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
