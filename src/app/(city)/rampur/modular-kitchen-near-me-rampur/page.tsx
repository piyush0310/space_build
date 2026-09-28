import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Modular Kitchen Near Me in Rampur | Plan, Budget & Buy",

  description:
    "Want a modular kitchen near me in Rampur? Get family-wise planning, budget tips, and a showroom checklist before you finalise your kitchen design.",

  keywords:
    "modular kitchen near me Rampur, modular kitchen designers in Rampur, Indian modular kitchen design, modular kitchen for 2 BHK flat, parallel modular kitchen layout, island kitchen design, modular kitchen with chimney and hob, kitchen wardrobe and pantry unit, modular kitchen price list, modular kitchen quotation Rampur, waterproof kitchen cabinets, marine plywood kitchen, PU finish kitchen shutters, quartz kitchen countertop, kitchen backsplash tiles, old kitchen renovation Rampur, kitchen interior work Rampur UP, customised kitchen cabinets, modular kitchen accessories, modular kitchen warranty",

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
    title: "Modular Kitchen Near Me in Rampur | Plan, Budget & Buy",
    description:
      "Want a modular kitchen near me in Rampur? Get family-wise planning, budget tips, and a showroom checklist before you finalise your kitchen design.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Modular Kitchen Near Me in Rampur - Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Modular Kitchen Near Me in Rampur | Plan, Budget & Buy",
    description:
      "Want a modular kitchen near me in Rampur? Get family-wise planning, budget tips, and a showroom checklist before you finalise your kitchen design.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Modular Kitchen Near Me in Rampur | Plan, Budget & Buy",
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