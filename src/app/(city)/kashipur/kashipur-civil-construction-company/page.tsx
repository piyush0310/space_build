import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Kashipur Civil Construction Company | Inside the Teams",

  description:
    "Looking at a Kashipur civil construction company? Learn what each internal team does, from estimating to safety, and how to judge them before hiring.",

  keywords:
    "Kashipur civil construction company, civil construction company Kashipur, construction company departments, construction estimating, construction planning, procurement team, construction quality team, construction safety team, construction accounts, civil contractor Kashipur, construction company hiring, construction company capability, civil construction services Kashipur",

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
      "https://www.spacebuild.co.in/kashipur/kashipur-civil-construction-company",
  },

  openGraph: {
    title: "Kashipur Civil Construction Company | Inside the Teams",
    description:
      "Looking at a Kashipur civil construction company? Learn what each internal team does, from estimating to safety, and how to judge them before hiring.",
    url: "https://www.spacebuild.co.in/kashipur/kashipur-civil-construction-company",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Kashipur Civil Construction Company - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kashipur Civil Construction Company | Inside the Teams",
    description:
      "Looking at a Kashipur civil construction company? Learn what each internal team does, from estimating to safety, and how to judge them before hiring.",
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