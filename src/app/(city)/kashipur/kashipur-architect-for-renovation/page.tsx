
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Kashipur Architect for Renovation | Spacebuild Home & Office Makeovers",

  description:
    "Planning a renovation in Kashipur? Spacebuild's expert architects help modernize homes, offices, and old buildings with safe, budget-friendly, and stylish renovation solutions.",

  keywords:
    "Kashipur architect for renovation, home renovation Kashipur, house renovation architect Kashipur, office renovation Kashipur, building renovation services Kashipur, Spacebuild renovation, old house renovation Kashipur, renovation contractor Kashipur, structural renovation Kashipur, interior renovation Kashipur, budget renovation Kashipur, kitchen renovation Kashipur, bathroom renovation Kashipur, facade renovation Kashipur, home remodeling Kashipur, commercial renovation Kashipur, renovation architect near me, Uttarakhand renovation services, Udham Singh Nagar renovation, house extension Kashipur, renovation and restoration Kashipur, affordable renovation architect Kashipur",

  robots: {
    index: true,
    follow: true,
  },

  authors: [
    {
      name: "Spacebuild",
    },
  ],

  alternates: {
    canonical: "https://www.spacebuild.co.in/",
  },

  openGraph: {
    title:
      "Kashipur Architect for Renovation | Spacebuild Home & Office Makeovers",
    description:
      "Planning a renovation in Kashipur? Spacebuild's expert architects help modernize homes, offices, and old buildings with safe, budget-friendly, and stylish renovation solutions.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Spacebuild",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Kashipur Architect for Renovation - Spacebuild",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Kashipur Architect for Renovation | Spacebuild Home & Office Makeovers",
    description:
      "Modernize your Kashipur home, office, or old building with safe, stylish, and budget-friendly renovation solutions by Spacebuild.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title:
      "Kashipur Architect for Renovation | Spacebuild Home & Office Makeovers",
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