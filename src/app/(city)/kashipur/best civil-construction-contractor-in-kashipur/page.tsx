import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Best Civil Construction Contractor in Kashipur | Proof Guide",

  description:
    "Who is the best civil construction contractor in Kashipur? Learn the proof to demand: method plans, test records, safety habits and references.",

  keywords:
    "Find the best civil construction contractor in Kashipur for foundations, RCC structures and drains. Demand proof through test records, method plans, safety habits and references.",

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
      "https://www.spacebuild.co.in/kashipur/best%20civil-construction-contractor-in-kashipur",
  },

  openGraph: {
    title: "Best Civil Construction Contractor in Kashipur | Proof Guide",
    description:
      "Who is the best civil construction contractor in Kashipur? Learn the proof to demand: method plans, test records, safety habits and references.",
    url: "https://www.spacebuild.co.in/kashipur/best%20civil-construction-contractor-in-kashipur",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Best Civil Construction Contractor in Kashipur - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Civil Construction Contractor in Kashipur | Proof Guide",
    description:
      "Who is the best civil construction contractor in Kashipur? Learn the proof to demand: method plans, test records, safety habits and references.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Best Civil Construction Contractor in Kashipur | Proof Guide",
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