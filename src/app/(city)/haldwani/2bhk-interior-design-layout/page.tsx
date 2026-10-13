
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "2BHK Interior Design Layout | Space Build Haldwani",

  description:
    "Plan the perfect 2BHK interior design layout with Space Build Haldwani. Learn room placement, furniture arrangement, movement paths, and storage planning for a comfortable, well-organized home. Book a free consultation.",

  keywords:
    "2BHK interior design layout, 2BHK floor plan ideas, 2BHK layout planning, 2BHK furniture layout, 2BHK room arrangement, 2BHK kitchen layout, 2BHK living room layout, 2BHK bedroom layout, 2BHK space planning, small 2BHK layout, 2BHK open plan, 2BHK vastu layout, 2BHK interior ideas, 2BHK interior cost, interior designer Haldwani, interior design Haldwani, Haldwani interiors, home layout planning, modular interiors, Space Build Haldwani",

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
      "https://www.spacebuild.co.in/2bhk-interior-design-layout-haldwani",
  },

  openGraph: {
    title: "2BHK Interior Design Layout | Space Build Haldwani",
    description:
      "Plan the perfect 2BHK interior design layout with Space Build Haldwani. Learn room placement, furniture arrangement, movement paths, and storage planning for a comfortable, well-organized home. Book a free consultation.",
    url: "https://www.spacebuild.co.in/2bhk-interior-design-layout-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "2BHK Interior Design Layout - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "2BHK Interior Design Layout | Space Build Haldwani",
    description:
      "Plan the perfect 2BHK interior design layout with Space Build Haldwani. Learn room placement, furniture arrangement, movement paths, and storage planning for a comfortable, well-organized home. Book a free consultation.",
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
