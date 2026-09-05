import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Modular Kitchen Price in Rampur | Space Build Moradabad",

  description:
    "Wondering about modular kitchen price in Rampur? Space Build Moradabad offers transparent pricing, quality materials, and customized designs to fit every budget. Get a detailed quote and free consultation today.",

  keywords:
    "modular kitchen price Rampur, modular kitchen cost Rampur, modular kitchen price list, affordable modular kitchen Rampur, modular kitchen cost per sq ft, modular kitchen budget, modular kitchen price estimate, cheap modular kitchen Rampur, modular kitchen rate, Space Build Moradabad, Rampur mein modular kitchen ki price, modular kitchen ka rate Rampur, sasti modular kitchen kimat, modular kitchen ka budget, modular kitchen cost per sq ft Rampur, modular kitchen price list Rampur, kam kharch mein modular kitchen, modular kitchen ka andazan kharch, modular kitchen banane ka kharch, modular kitchen company Moradabad",

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
    canonical: "https://www.spacebuild.co.in/",
  },

  openGraph: {
    title: "Modular Kitchen Price in Rampur | Space Build Moradabad",
    description:
      "Wondering about modular kitchen price in Rampur? Space Build Moradabad offers transparent pricing, quality materials, and customized designs to fit every budget.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Modular Kitchen Price in Rampur - Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Modular Kitchen Price in Rampur | Space Build Moradabad",
    description:
      "Wondering about modular kitchen price in Rampur? Space Build Moradabad offers transparent pricing, quality materials, and customized designs to fit every budget.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Modular Kitchen Price in Rampur | Space Build Moradabad",
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