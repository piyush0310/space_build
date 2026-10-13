
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "2BHK Interior Design Furniture | Space Build Haldwani",

  description:
    "Choose the right furniture for your 2BHK interior design with Space Build Haldwani. Explore fitted and loose furniture ideas, sizes, materials, and budget tips for every room. Book a free consultation today.",

  keywords: [
    "2BHK interior design furniture",
    "2BHK furniture ideas",
    "2BHK furniture layout",
    "2BHK furniture design",
    "fitted furniture 2BHK",
    "custom furniture 2BHK",
    "space saving furniture",
    "living room furniture 2BHK",
    "bedroom furniture 2BHK",
    "wardrobe design 2BHK",
    "TV unit design 2BHK",
    "multi-purpose furniture",
    "budget furniture 2BHK",
    "modular furniture",
    "2BHK interior cost",
    "interior designer Haldwani",
    "interior design Haldwani",
    "Haldwani interiors",
    "furniture for small homes",
    "Space Build Haldwani",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/2bhk-interior-design-furniture-haldwani",
  },

  openGraph: {
    title: "2BHK Interior Design Furniture | Space Build Haldwani",
    description:
      "Explore practical furniture ideas for every room in your 2BHK home, including fitted furniture, custom designs, space-saving solutions, materials, and budget tips from Space Build Haldwani.",
    url: "https://www.spacebuild.co.in/2bhk-interior-design-furniture-haldwani",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "2BHK Interior Design Furniture by Space Build Haldwani",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "2BHK Interior Design Furniture | Space Build Haldwani",
    description:
      "Find the right furniture for your 2BHK home with space-saving layouts, fitted furniture ideas, material options, and budget tips from Space Build Haldwani.",
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
