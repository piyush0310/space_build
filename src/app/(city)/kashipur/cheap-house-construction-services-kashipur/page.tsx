import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Cheap House Construction Services in Kashipur | Budget Builders Guide 2026",

  description:
    "Explore cheap house construction services in Kashipur: what they include, price ranges, how to avoid poor quality, compare offers and hire a budget builder safely.",

  keywords:
    "cheap house construction services Kashipur, budget house builders, low price home construction, inexpensive building services, economical construction packages, cheap contractor Kashipur, house construction offers, basic construction package, small house builders, per sq ft cheap rate, labour and material service, budget turnkey service, value home construction, construction service comparison, cost saving house plan, builder quality check, house construction payment terms, hidden charges in cheap offers, local construction services, Uttarakhand budget builders.",

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
      "https://www.spacebuild.co.in/kashipur/cheap-house-construction-services-kashipur",
  },

  openGraph: {
    title:
      "Cheap House Construction Services in Kashipur | Budget Builders Guide 2026",
    description:
      "Explore cheap house construction services in Kashipur: what they include, price ranges, how to avoid poor quality, compare offers and hire a budget builder safely.",
    url: "https://www.spacebuild.co.in/kashipur/cheap-house-construction-services-kashipur",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Cheap House Construction Services in Kashipur - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Cheap House Construction Services in Kashipur | Budget Builders Guide 2026",
    description:
      "Explore cheap house construction services in Kashipur: what they include, price ranges, how to avoid poor quality, compare offers and hire a budget builder safely.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title:
      "Cheap House Construction Services in Kashipur | Budget Builders Guide 2026",
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