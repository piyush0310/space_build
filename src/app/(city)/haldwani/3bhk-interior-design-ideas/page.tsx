import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "3BHK Interior Design Ideas | Space Build Haldwani",

  description:
    "Discover practical 3BHK interior design ideas for living rooms, bedrooms, kitchens, study zones, and storage from Space Build Haldwani. Stylish, budget-aware inspiration for family homes. Book a free consultation today.",

  keywords:
    "3BHK interior design ideas, 3BHK home decor ideas, 3BHK living room ideas, 3BHK bedroom ideas, 3BHK kitchen ideas, 3BHK flat design ideas, 3BHK interior layout, 3BHK false ceiling ideas, 3BHK wardrobe design, 3BHK TV unit ideas, 3BHK pooja room ideas, 3BHK study room ideas, family home interior ideas, modern 3BHK interior, budget 3BHK interior, 3BHK interior cost, interior designer Haldwani, interior design Haldwani, Haldwani interiors, Space Build Haldwani",

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
      "https://www.spacebuild.co.in/haldwani/3bhk-interior-design-ideas",
  },

  openGraph: {
    title:
      "3BHK Interior Design Ideas | Space Build Haldwani",
    description:
      "Discover practical 3BHK interior design ideas for living rooms, bedrooms, kitchens, study zones, and storage from Space Build Haldwani. Stylish, budget-aware inspiration for family homes. Book a free consultation today.",
    url: "https://www.spacebuild.co.in/haldwani/3bhk-interior-design-ideas",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "3BHK Interior Design Ideas - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "3BHK Interior Design Ideas | Space Build Haldwani",
    description:
      "Discover practical 3BHK interior design ideas for living rooms, bedrooms, kitchens, study zones, and storage from Space Build Haldwani. Stylish, budget-aware inspiration for family homes. Book a free consultation today.",
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