import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Civil Construction Services in Kashipur | Packages by Need",

  description:
    "Explore civil construction services in Kashipur by client type: homes, shops, factories and farms. See packages, delivery stages and how to pick yours.",

  keywords:
    "Choose civil construction services in Kashipur for homes, shops, factories, farms and institutions. Compare packages, stages, quality checks and contracts to pick the right provider.",

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
      "https://www.spacebuild.co.in/kashipur/civil-construction-services-in-kashipur",
  },

  openGraph: {
    title: "Civil Construction Services in Kashipur | Packages by Need",
    description:
      "Explore civil construction services in Kashipur by client type: homes, shops, factories and farms. See packages, delivery stages and how to pick yours.",
    url: "https://www.spacebuild.co.in/kashipur/civil-construction-services-in-kashipur",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Civil Construction Services in Kashipur - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Civil Construction Services in Kashipur | Packages by Need",
    description:
      "Explore civil construction services in Kashipur by client type: homes, shops, factories and farms. See packages, delivery stages and how to pick yours.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Civil Construction Services in Kashipur | Packages by Need",
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