import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "3BHK Interior Design App | Space Build Haldwani",

  description:
    "Explore how a 3BHK interior design app can help you plan layouts, try colors, and preview furniture, and where a professional designer fits in. Practical guidance from Space Build Haldwani. Book a free consultation.",

  keywords:
    "3BHK interior design app, interior design app for 3BHK, 3BHK room planner app, 3BHK floor plan app, 3D home design app, virtual interior design app, room layout app, furniture placement app, home design app India, free interior design app, 3BHK layout planning, 3BHK interior ideas, 3BHK interior cost, interior designer Haldwani, interior design Haldwani, Haldwani interiors, home planning app, AR room design, 3BHK interior planning, Space Build Haldwani",

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
      "https://www.spacebuild.co.in/haldwani/3bhk-interior-design-app",
  },

  openGraph: {
    title:
      "3BHK Interior Design App | Space Build Haldwani",
    description:
      "Explore how a 3BHK interior design app can help you plan layouts, try colors, and preview furniture, and where a professional designer fits in. Practical guidance from Space Build Haldwani. Book a free consultation.",
    url: "https://www.spacebuild.co.in/haldwani/3bhk-interior-design-app",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "3BHK Interior Design App - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "3BHK Interior Design App | Space Build Haldwani",
    description:
      "Explore how a 3BHK interior design app can help you plan layouts, try colors, and preview furniture, and where a professional designer fits in. Practical guidance from Space Build Haldwani. Book a free consultation.",
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