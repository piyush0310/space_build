import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "3BHK Interior Design Before After | Space Build Haldwani",

  description:
    "See how a 3BHK home changes from plain and cluttered to bright and organized. Explore 3BHK interior design before after transformations, planning steps, and ideas from Space Build Haldwani. Book a free consultation.",

  keywords:
    "3BHK interior design before after, 3BHK home makeover, 3BHK transformation ideas, 3BHK renovation before after, 3BHK interior makeover, bare shell to finished home, old flat renovation, living room makeover, master bedroom makeover, kitchen makeover, wardrobe makeover, false ceiling makeover, budget home makeover, 3BHK interior ideas, 3BHK interior cost, interior designer Haldwani, interior design Haldwani, Haldwani interiors, home renovation, Space Build Haldwani",

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
      "https://www.spacebuild.co.in/haldwani/3bhk-interior-design-before-after",
  },

  openGraph: {
    title:
      "3BHK Interior Design Before After | Space Build Haldwani",
    description:
      "See how a 3BHK home changes from plain and cluttered to bright and organized. Explore 3BHK interior design before after transformations, planning steps, and ideas from Space Build Haldwani. Book a free consultation.",
    url: "https://www.spacebuild.co.in/haldwani/3bhk-interior-design-before-after",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "3BHK Interior Design Before After - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "3BHK Interior Design Before After | Space Build Haldwani",
    description:
      "See how a 3BHK home changes from plain and cluttered to bright and organized. Explore 3BHK interior design before after transformations, planning steps, and ideas from Space Build Haldwani. Book a free consultation.",
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