import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Kashipur Civil Construction Services | Structure & Site Works",

  description:
    "Need Kashipur civil construction services? Learn about earthwork, foundations, RCC, drainage, roads and testing, plus how to hire a capable civil team.",

  keywords:
    "Explore Kashipur civil construction services including earthwork, foundations, RCC structures, drainage, roads, boundary walls and industrial site works. Learn scope, quality checks and hiring tips for dependable civil contractors.",

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
      "https://www.spacebuild.co.in/kashipur/kashipur-civil-construction-services",
  },

  openGraph: {
    title: "Kashipur Civil Construction Services | Structure & Site Works",
    description:
      "Need Kashipur civil construction services? Learn about earthwork, foundations, RCC, drainage, roads and testing, plus how to hire a capable civil team.",
    url: "https://www.spacebuild.co.in/kashipur/kashipur-civil-construction-services",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Kashipur Civil Construction Services - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kashipur Civil Construction Services | Structure & Site Works",
    description:
      "Need Kashipur civil construction services? Learn about earthwork, foundations, RCC, drainage, roads and testing, plus how to hire a capable civil team.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Kashipur Civil Construction Services | Structure & Site Works",
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