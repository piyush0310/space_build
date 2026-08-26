import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Pest Control Cost in Moradabad | Space Build – Value for Money Solutions",
  description:
    "Understand pest control cost in Moradabad with Space Build's clear breakdown of pricing based on property type, pest severity and treatment method. Get a free estimate at spacebuild.co.in.",
  keywords:
    "pest control cost Moradabad, cost of pest control services, termite treatment cost Moradabad, cheap pest control Moradabad, pest control estimate, home pest control cost, commercial pest control cost, Space Build Moradabad, annual pest control cost, cost effective pest control, मोरादाबाद में पेस्ट कंट्रोल की लागत, pest control ka total kharcha Moradabad, दीमक इलाज की कीमत मोरादाबाद, ghar ke liye pest control ka estimate, सस्ता और भरोसेमंद पेस्ट कंट्रोल, saal bhar ka pest control kharcha, Space Build ka pest control cost, office pest control ki lagat, मोरादाबाद में पेस्ट कंट्रोल एस्टिमेट, kam kharche mein pest control",
  authors: [
    {
      name: "Space Build",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.spacebuild.co.in/",
  },
  openGraph: {
    title: "Pest Control Cost in Moradabad | Space Build",
    description:
      "Space Build breaks down pest control cost factors in Moradabad, helping property owners plan their budget for termite and general pest treatment.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Pest Control Cost in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pest Control Cost in Moradabad | Space Build",
    description:
      "Space Build breaks down pest control cost factors in Moradabad, helping property owners plan their budget for termite and general pest treatment.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    language: "English",
    "geo.region": "IN-UP",
    "geo.placename": "Moradabad",
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