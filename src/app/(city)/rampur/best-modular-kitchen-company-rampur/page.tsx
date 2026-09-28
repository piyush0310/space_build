import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Best Modular Kitchen Company in Rampur | Space Build",

  description:
    "Space Build is a trusted modular kitchen company serving Rampur — Vastu-aligned designs, marine ply, branded hardware and on-time installation. Free 3D quote.",

  keywords:
    "best modular kitchen company Rampur, modular kitchen Rampur, modular kitchen price in Rampur, modular kitchen design Rampur, kitchen interior designer Rampur, Vastu modular kitchen Rampur, L shaped modular kitchen Rampur, U shaped modular kitchen design, parallel modular kitchen Rampur, island modular kitchen design, modular kitchen cost per sq ft India, acrylic modular kitchen Rampur, small modular kitchen design Rampur, modular kitchen accessories Rampur, kitchen Vastu direction, Space Build Rampur",

  robots: {
    index: true,
    follow: true,
  },

  authors: [
    {
      name: "Space Build Moradabad",
    },
  ],

  alternates: {
    canonical: "https://www.spacebuild.co.in/rampur/best-modular-kitchen-company-rampur",
  },

  openGraph: {
    title: "Best Modular Kitchen Company in Rampur | Space Build",
    description:
      "Space Build is a trusted modular kitchen company serving Rampur — Vastu-aligned designs, marine ply, branded hardware and on-time installation. Free 3D quote.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Best Modular Kitchen Company in Rampur - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Modular Kitchen Company in Rampur | Space Build",
    description:
      "Trusted modular kitchen company in Rampur with Vastu-aligned designs, marine ply, branded hardware and on-time installation. Free 3D quote.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Best Modular Kitchen Company in Rampur | Space Build",
    "geo.placename": "Rampur, Uttar Pradesh",
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