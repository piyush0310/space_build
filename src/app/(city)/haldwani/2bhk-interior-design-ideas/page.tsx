

import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "2BHK Interior Design Ideas | Space Build Haldwani",

  description:
    "Get fresh 2BHK interior design ideas for living rooms, bedrooms, kitchens, and storage from Space Build Haldwani. Practical, stylish, budget-friendly inspiration for your home. Book a free consultation today.",

  keywords: [
    "2BHK interior design ideas",
    "2BHK home decor ideas",
    "2BHK living room ideas",
    "2BHK bedroom ideas",
    "2BHK kitchen ideas",
    "small home interior ideas",
    "2BHK flat design ideas",
    "space saving ideas",
    "wardrobe design ideas",
    "false ceiling ideas",
    "TV unit ideas",
    "colour combination ideas",
    "budget interior ideas",
    "modern 2BHK ideas",
    "2BHK makeover",
    "interior designer Haldwani",
    "interior design Haldwani",
    "Haldwani interiors",
    "home decor",
    "Space Build Haldwani",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/2bhk-interior-design-ideas-haldwani",
  },

  openGraph: {
    title: "2BHK Interior Design Ideas | Space Build Haldwani",
    description:
      "Discover practical and stylish 2BHK interior design ideas for living rooms, bedrooms, kitchens, storage, lighting, and colour combinations with Space Build Haldwani.",
    url: "https://www.spacebuild.co.in/2bhk-interior-design-ideas-haldwani",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "2BHK Interior Design Ideas by Space Build Haldwani",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "2BHK Interior Design Ideas | Space Build Haldwani",
    description:
      "Explore fresh, practical, and budget-friendly 2BHK interior design ideas for your home with Space Build Haldwani.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    "geo.region": "IN-UT",
    "geo.placename": "Haldwani, Uttarakhand",
    "geo.position": "29.2183;79.5130",
    ICBM: "29.2183, 79.5130",
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
