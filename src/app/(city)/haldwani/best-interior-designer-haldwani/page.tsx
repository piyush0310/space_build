import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Best Interior Designer Haldwani | 6 Tests Before You Hire",


  description:
    "Searching for the best interior designer in Haldwani? Run six simple tests on brief, drawings, materials, sites, budget and references before hiring.",


  keywords:
    "Find the best interior designer in Haldwani for homes, kitchens and offices. Test briefs, drawings, materials, sites, budgets and references before choosing trustworthy design professionals.",


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
      "https://www.spacebuild.co.in/haldwani/best-interior-designer-haldwani",
  },


  openGraph: {
    title: "Best Interior Designer Haldwani | 6 Tests Before You Hire",
    description:
      "Searching for the best interior designer in Haldwani? Run six simple tests on brief, drawings, materials, sites, budget and references before hiring.",
    url: "https://www.spacebuild.co.in/haldwani/best-interior-designer-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Best Interior Designer Haldwani - Space Build",
      },
    ],
  },


  twitter: {
    card: "summary_large_image",
    title: "Best Interior Designer Haldwani | 6 Tests Before You Hire",
    description:
      "Searching for the best interior designer in Haldwani? Run six simple tests on brief, drawings, materials, sites, budget and references before hiring.",
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