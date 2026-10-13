
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Haldwani Construction Company for Residential Projects | Space Build",

  description:
    "Planning a home in Haldwani? Learn how a construction company handles residential projects, from design and approvals to construction and handover, with transparent, Vastu-aware planning. Space Build, spacebuild.co.in.",

  keywords: [
    "Haldwani construction company for residential projects",
    "residential construction company Haldwani",
    "house construction Haldwani",
    "home builders in Haldwani",
    "residential building contractor Haldwani",
    "villa construction Haldwani",
    "independent house construction",
    "turnkey home construction Haldwani",
    "apartment construction Haldwani",
    "residential project planning",
    "construction company near me",
    "best construction company Haldwani",
    "home construction process",
    "Vastu friendly home construction",
    "construction company Nainital district",
    "construction company Kathgodam",
    "house construction Uttarakhand",
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
      "https://www.spacebuild.co.in/haldwani/residential-construction-projects",
  },

  openGraph: {
    title:
      "Haldwani Construction Company for Residential Projects | Space Build",

    description:
      "Planning a home in Haldwani? Learn how a construction company handles residential projects, from design and approvals to construction and handover, with transparent, Vastu-aware planning. Space Build, spacebuild.co.in.",

    url: "https://www.spacebuild.co.in/haldwani/residential-construction-projects",

    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Haldwani Construction Company for Residential Projects - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Haldwani Construction Company for Residential Projects | Space Build",

    description:
      "Learn how residential projects in Haldwani move from design and approvals to construction and handover with transparent, Vastu-aware planning from Space Build.",

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
