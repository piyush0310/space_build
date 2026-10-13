import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Interior Designer Cost Per Square Foot | Space Build Moradabad",

  description:
    "Understand interior designer cost per square foot with clear price ranges, package types, and budget tips from Space Build Moradabad. Get a transparent quote for your home or office interiors today.",

  keywords:
    "interior designer cost per square foot, interior cost per sq ft, interior design price, home interior cost, turnkey interiors, interior designer fees, interior budget, interior quote, interior packages, interior designer Rampur, interior designer Moradabad, modular kitchen cost, wardrobe design cost, false ceiling cost, living room interior, bedroom interior, office interior, luxury interiors, affordable interiors, Space Build Moradabad",

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
      "https://www.spacebuild.co.in/moradabad/interior-designer-cost-per-square-foot",
  },

  openGraph: {
    title:
      "Interior Designer Cost Per Square Foot | Space Build Moradabad",
    description:
      "Understand interior designer cost per square foot with clear price ranges, package types, and budget tips from Space Build Moradabad. Get a transparent quote for your home or office interiors today.",
    url: "https://www.spacebuild.co.in/moradabad/interior-designer-cost-per-square-foot",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Interior Designer Cost Per Square Foot - Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Interior Designer Cost Per Square Foot | Space Build Moradabad",
    description:
      "Understand interior designer cost per square foot with clear price ranges, package types, and budget tips from Space Build Moradabad. Get a transparent quote for your home or office interiors today.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    "geo.placename": "Moradabad, Uttar Pradesh",
    "geo.region": "IN-UP",
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