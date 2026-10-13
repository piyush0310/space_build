import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "3BHK Interior Design Layout | Space Build Haldwani",

  description:
    "Plan the right 3BHK interior design layout with Space Build Haldwani. Learn zoning, room placement, furniture arrangement, movement paths, and storage planning for a comfortable family home. Book a free consultation.",

  keywords:
    "3BHK interior design layout, 3BHK floor plan ideas, 3BHK layout planning, 3BHK furniture layout, 3BHK room arrangement, 3BHK kitchen layout, 3BHK living room layout, 3BHK bedroom layout, 3BHK space planning, 3BHK open plan, 3BHK vastu layout, 3BHK dining layout, family home layout, 3BHK interior ideas, 3BHK interior cost, interior designer Haldwani, interior design Haldwani, Haldwani interiors, home layout planning, Space Build Haldwani",

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
      "https://www.spacebuild.co.in/haldwani/3bhk-interior-design-layout",
  },

  openGraph: {
    title:
      "3BHK Interior Design Layout | Space Build Haldwani",
    description:
      "Plan the right 3BHK interior design layout with Space Build Haldwani. Learn zoning, room placement, furniture arrangement, movement paths, and storage planning for a comfortable family home. Book a free consultation.",
    url: "https://www.spacebuild.co.in/haldwani/3bhk-interior-design-layout",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "3BHK Interior Design Layout - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "3BHK Interior Design Layout | Space Build Haldwani",
    description:
      "Plan the right 3BHK interior design layout with Space Build Haldwani. Learn zoning, room placement, furniture arrangement, movement paths, and storage planning for a comfortable family home. Book a free consultation.",
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