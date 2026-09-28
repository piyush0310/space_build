import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "U-Shaped Modular Kitchen Design in Rampur | Best Modular Kitchen Dealers",

  description:
    "Looking for a U shape modular kitchen in Rampur? Get expert design, space-saving layouts, premium materials & affordable prices. Free consultation today!",

  keywords:
    "u shape modular kitchen rampur, modular kitchen rampur, u shaped kitchen design, modular kitchen design rampur, best modular kitchen dealers rampur, kitchen interior rampur, modular kitchen cost rampur, u shape kitchen layout, modular kitchen manufacturers rampur, kitchen renovation rampur, modular kitchen price per foot, kitchen cabinets rampur, u shape kitchen design ideas, modular kitchen showroom rampur, custom modular kitchen rampur, kitchen interior designer rampur, modular kitchen material, plywood modular kitchen, granite countertop kitchen rampur, kitchen work triangle design",

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
    title: "U-Shaped Modular Kitchen Design in Rampur | Best Modular Kitchen Dealers",
    description:
      "Looking for a U shape modular kitchen in Rampur? Get expert design, space-saving layouts, premium materials & affordable prices. Free consultation today!",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "U-Shaped Modular Kitchen Design in Rampur - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "U-Shaped Modular Kitchen Design in Rampur | Best Modular Kitchen Dealers",
    description:
      "Looking for a U shape modular kitchen in Rampur? Get expert design, space-saving layouts, premium materials & affordable prices. Free consultation today!",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "U-Shaped Modular Kitchen Design in Rampur | Best Modular Kitchen Dealers",
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