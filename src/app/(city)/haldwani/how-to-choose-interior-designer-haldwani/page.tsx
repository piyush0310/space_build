import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title:
    "How to Choose an Interior Designer in Haldwani | 7-Test Scorecard 2026",


  description:
    "Learn how to choose an interior designer in Haldwani using a simple seven-test scorecard covering portfolio, process, quotes, materials, contracts, communication and after-sales care.",


  keywords:
    "How to choose interior designer Haldwani, interior designer selection, Haldwani home interiors, designer portfolio check, interior quotation, modular kitchen designer, design fee, turnkey interiors, Vastu interiors, interior contract",


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
      "https://www.spacebuild.co.in/haldwani/how-to-choose-an-interior-designer-in-haldwani",
  },


  openGraph: {
    title:
      "How to Choose an Interior Designer in Haldwani | 7-Test Scorecard 2026",
    description:
      "Learn how to choose an interior designer in Haldwani using a simple seven-test scorecard covering portfolio, process, quotes, materials, contracts, communication and after-sales care.",
    url: "https://www.spacebuild.co.in/haldwani/how-to-choose-an-interior-designer-in-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "How to Choose an Interior Designer in Haldwani - Space Build",
      },
    ],
  },


  twitter: {
    card: "summary_large_image",
    title:
      "How to Choose an Interior Designer in Haldwani | 7-Test Scorecard 2026",
    description:
      "Learn how to choose an interior designer in Haldwani using a simple seven-test scorecard covering portfolio, process, quotes, materials, contracts, communication and after-sales care.",
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