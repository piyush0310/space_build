
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "2BHK Interior Design Inspiration | Space Build Haldwani",

  description:
    "Looking for 2BHK interior design inspiration? Discover style themes, color stories, and room-wise looks to shape your dream home, with practical guidance from Space Build Haldwani. Book a free consultation today.",

  keywords:
    "2BHK interior design inspiration, 2BHK home inspiration, 2BHK style ideas, 2BHK theme ideas, 2BHK color inspiration, modern 2BHK inspiration, Scandinavian 2BHK, Japandi 2BHK, boho 2BHK, classic 2BHK interior, 2BHK mood board, living room inspiration, bedroom inspiration, kitchen inspiration, budget home inspiration, 2BHK interior cost, interior designer Haldwani, interior design Haldwani, Haldwani interiors, Space Build Haldwani",

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
      "https://www.spacebuild.co.in/2bhk-interior-design-inspiration-haldwani",
  },

  openGraph: {
    title: "2BHK Interior Design Inspiration | Space Build Haldwani",
    description:
      "Looking for 2BHK interior design inspiration? Discover style themes, color stories, and room-wise looks to shape your dream home, with practical guidance from Space Build Haldwani. Book a free consultation today.",
    url: "https://www.spacebuild.co.in/2bhk-interior-design-inspiration-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "2BHK Interior Design Inspiration - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "2BHK Interior Design Inspiration | Space Build Haldwani",
    description:
      "Looking for 2BHK interior design inspiration? Discover style themes, color stories, and room-wise looks to shape your dream home, with practical guidance from Space Build Haldwani. Book a free consultation today.",
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
