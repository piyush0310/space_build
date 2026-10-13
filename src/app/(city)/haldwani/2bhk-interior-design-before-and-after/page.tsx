
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "2BHK Interior Design Before and After | Space Build Haldwani",

  description:
    "See how a 2BHK home changes from plain and cluttered to bright and organized. Explore 2BHK interior design before and after transformations, planning steps, and ideas from Space Build Haldwani. Book a free consultation.",

  keywords:
    "2BHK interior design before and after, 2BHK home makeover, 2BHK transformation ideas, 2BHK renovation before after, 2BHK interior makeover, bare shell to finished home, old flat renovation, living room makeover, bedroom makeover, kitchen makeover, wardrobe makeover, false ceiling makeover, budget home makeover, 2BHK interior ideas, 2BHK interior cost, interior designer Haldwani, interior design Haldwani, Haldwani interiors, home renovation, Space Build Haldwani",

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
      "https://www.spacebuild.co.in/2bhk-interior-design-before-and-after-haldwani",
  },

  openGraph: {
    title: "2BHK Interior Design Before and After | Space Build Haldwani",
    description:
      "See how a 2BHK home changes from plain and cluttered to bright and organized. Explore 2BHK interior design before and after transformations, planning steps, and ideas from Space Build Haldwani. Book a free consultation.",
    url: "https://www.spacebuild.co.in/2bhk-interior-design-before-and-after-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "2BHK Interior Design Before and After - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "2BHK Interior Design Before and After | Space Build Haldwani",
    description:
      "See how a 2BHK home changes from plain and cluttered to bright and organized. Explore 2BHK interior design before and after transformations, planning steps, and ideas from Space Build Haldwani. Book a free consultation.",
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
