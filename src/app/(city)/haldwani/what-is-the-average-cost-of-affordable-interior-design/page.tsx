import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Average Cost of Affordable Interior Designer | Space Build Haldwani",

  description:
    "What is the average cost of an affordable interior designer? Learn fee models, per sq ft ranges, room-wise costs, and money-saving tips from Space Build Haldwani. Get a free, itemized estimate today.",

  keywords:
    "average cost of affordable interior designer, interior designer cost, interior designer fees, interior design cost per sq ft, affordable interior designer, budget interior design, home interior cost, 2BHK interior cost, 3BHK interior cost, modular kitchen cost, wardrobe cost, false ceiling cost, turnkey interior cost, interior design Haldwani, interior designer Haldwani, Haldwani interiors, low cost interiors, interior quote, interior budget, Space Build Haldwani",

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
      "https://www.spacebuild.co.in/haldwani/average-cost-affordable-interior-designer",
  },

  openGraph: {
    title: "Average Cost of Affordable Interior Designer | Space Build Haldwani",
    description:
      "What is the average cost of an affordable interior designer? Learn fee models, per sq ft ranges, room-wise costs, and money-saving tips from Space Build Haldwani. Get a free, itemized estimate today.",
    url: "https://www.spacebuild.co.in/haldwani/average-cost-affordable-interior-designer",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Average Cost of Affordable Interior Designer - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Average Cost of Affordable Interior Designer | Space Build Haldwani",
    description:
      "What is the average cost of an affordable interior designer? Learn fee models, per sq ft ranges, room-wise costs, and money-saving tips from Space Build Haldwani. Get a free, itemized estimate today.",
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