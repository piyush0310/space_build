import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Kashipur Construction Contractors | Market Structure and Hiring Guide 2026",

  description:
    "Understand how construction contractors in Kashipur are organised: main contractors, labour thekedars, specialist trades and suppliers, plus how to hire, pay and manage each one.",

  keywords:
    "Kashipur construction contractors, main contractor, labour thekedar, subcontractor chain, specialist trade contractor, RCC shuttering contractor, plaster and masonry contractor, flooring contractor, plumbing contractor, electrical contractor, painting contractor, steel fabrication contractor, contractor hierarchy, contractor payment methods, work order format, site coordination, contractor accountability, construction labour market, hiring multiple contractors, Kashipur building trades",

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
      "https://www.spacebuild.co.in/kashipur/kashipur-construction-contractors",
  },

  openGraph: {
    title:
      "Kashipur Construction Contractors | Market Structure and Hiring Guide 2026",
    description:
      "Understand how construction contractors in Kashipur are organised: main contractors, labour thekedars, specialist trades and suppliers, plus how to hire, pay and manage each one.",
    url: "https://www.spacebuild.co.in/kashipur/kashipur-construction-contractors",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Kashipur Construction Contractors - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Kashipur Construction Contractors | Market Structure and Hiring Guide 2026",
    description:
      "Understand how construction contractors in Kashipur are organised: main contractors, labour thekedars, specialist trades and suppliers, plus how to hire, pay and manage each one.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    "geo.placename": "Kashipur, Uttarakhand",
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