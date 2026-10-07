import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Construction Company Quotes Kashipur | How to Compare",

  description:
    "Collecting construction company quotes in Kashipur? Learn how to request, read, compare and negotiate quotations so you avoid hidden charges and weak deals.",

  keywords:
    "Get construction company quotes in Kashipur for homes, shops and renovation. Learn to request, read, compare and negotiate quotations with scope, rates and payment terms.",

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
      "https://www.spacebuild.co.in/construction-company-quotes-kashipur",
  },

  openGraph: {
    title: "Construction Company Quotes Kashipur | How to Compare",
    description:
      "Collecting construction company quotes in Kashipur? Learn how to request, read, compare and negotiate quotations so you avoid hidden charges and weak deals.",
    url: "https://www.spacebuild.co.in/construction-company-quotes-kashipur",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Construction Company Quotes Kashipur - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Construction Company Quotes Kashipur | How to Compare",
    description:
      "Collecting construction company quotes in Kashipur? Learn how to request, read, compare and negotiate quotations so you avoid hidden charges and weak deals.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Construction Company Quotes Kashipur | How to Compare",
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