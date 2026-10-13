
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "2BHK Interior Design for Small Space | Space Build Haldwani",

  description:
    "Make a compact home feel open and organized with 2BHK interior design for small space by Space Build Haldwani. Smart layouts, storage, colour, and lighting ideas for tight floor plans. Book a free consultation today.",

  keywords:
    "2BHK interior design for small space, small 2BHK interior, compact 2BHK design, small flat interior design, space saving interior, small home storage ideas, small living room design, small bedroom design, small kitchen design, multi-purpose furniture, foldable furniture ideas, 2BHK interior ideas, budget small home interior, small apartment makeover, 2BHK interior cost, interior designer Haldwani, interior design Haldwani, Haldwani interiors, modular interiors, Space Build Haldwani",

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
      "https://www.spacebuild.co.in/2bhk-interior-design-for-small-space-haldwani",
  },

  openGraph: {
    title: "2BHK Interior Design for Small Space | Space Build Haldwani",
    description:
      "Make a compact home feel open and organized with 2BHK interior design for small space by Space Build Haldwani. Smart layouts, storage, colour, and lighting ideas for tight floor plans. Book a free consultation today.",
    url: "https://www.spacebuild.co.in/2bhk-interior-design-for-small-space-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "2BHK Interior Design for Small Space - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "2BHK Interior Design for Small Space | Space Build Haldwani",
    description:
      "Make a compact home feel open and organized with 2BHK interior design for small space by Space Build Haldwani. Smart layouts, storage, colour, and lighting ideas for tight floor plans. Book a free consultation today.",
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
