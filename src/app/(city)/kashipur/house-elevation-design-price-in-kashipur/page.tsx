import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "House Elevation Design Price in Kashipur | Space Build",

  description:
    "Wondering about house elevation design price in Kashipur? Space Build offers transparent, budget-friendly elevation design packages tailored to your home's size, style, and requirements.",

  keywords:
    "house elevation design price in Kashipur, elevation design cost Kashipur, house elevation cost Kashipur, front elevation design price, 3D elevation design cost Kashipur, affordable elevation design Kashipur, elevation design charges Kashipur, house design price Kashipur, elevation designer fees Kashipur, cost of house elevation design, modern elevation design price, elevation design package Kashipur, Vastu elevation design cost, budget house elevation Kashipur, elevation design quotation Kashipur, house design company Kashipur, best elevation designer near me, Space Build Kashipur, elevation design consultation price, home elevation design rate Kashipur, duplex elevation design price Kashipur",

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
      "https://www.spacebuild.co.in/house-elevation-design-price-kashipur",
  },

  openGraph: {
    title: "House Elevation Design Price in Kashipur | Space Build",
    description:
      "Wondering about house elevation design price in Kashipur? Space Build offers transparent, budget-friendly elevation design packages tailored to your home's size, style, and requirements.",
    url: "https://www.spacebuild.co.in/house-elevation-design-price-kashipur",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "House Elevation Design Price in Kashipur - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "House Elevation Design Price in Kashipur | Space Build",
    description:
      "Get transparent and budget-friendly house elevation design pricing in Kashipur from Space Build for homes, duplexes, villas, and commercial properties.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "House Elevation Design Price in Kashipur | Space Build",
    "geo.placename": "Kashipur, Uttarakhand",
    "geo.region": "IN-UK",
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