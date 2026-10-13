import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "3BHK Interior Design Cost Per Sq Ft | Space Build Haldwani",

  description:
    "Understand 3BHK interior design cost per sq ft with rate bands, area types, calculation examples, and saving tips from Space Build Haldwani. Get a clear, itemized estimate for your home today.",

  keywords:
    "3BHK interior design cost per sq ft, 3BHK interior rate per sq ft, interior cost per square foot, 3BHK interior price per sq ft, 3BHK interior cost calculator, 3BHK carpet area interior cost, 3BHK turnkey interior rate, 3BHK modular kitchen cost per sq ft, 3BHK wardrobe cost per sq ft, 3BHK painting cost per sq ft, 3BHK false ceiling cost per sq ft, budget 3BHK interior, 3BHK interior package, 3BHK interior budget, interior designer Haldwani, interior design Haldwani, Haldwani interiors, interior quote, home interior rate, Space Build Haldwani",

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
      "https://www.spacebuild.co.in/haldwani/3bhk-interior-design-cost-per-sq-ft",
  },

  openGraph: {
    title:
      "3BHK Interior Design Cost Per Sq Ft | Space Build Haldwani",
    description:
      "Understand 3BHK interior design cost per sq ft with rate bands, area types, calculation examples, and saving tips from Space Build Haldwani. Get a clear, itemized estimate for your home today.",
    url: "https://www.spacebuild.co.in/haldwani/3bhk-interior-design-cost-per-sq-ft",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "3BHK Interior Design Cost Per Sq Ft - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "3BHK Interior Design Cost Per Sq Ft | Space Build Haldwani",
    description:
      "Understand 3BHK interior design cost per sq ft with rate bands, area types, calculation examples, and saving tips from Space Build Haldwani. Get a clear, itemized estimate for your home today.",
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