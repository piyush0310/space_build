import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Best Civil Contractor Kashipur | 12 Myths vs Facts",

  description:
    "Searching for the best civil contractor in Kashipur? Separate 12 common myths from facts on experience, price, safety and contracts before you hire.",

  keywords:
    "Find the best civil contractor in Kashipur by separating myths from facts. Learn how to judge experience, pricing, safety, contracts and references before hiring safely.",

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
      "https://www.spacebuild.co.in/best-civil-contractor-in-kashipur",
  },

  openGraph: {
    title: "Best Civil Contractor Kashipur | 12 Myths vs Facts",
    description:
      "Searching for the best civil contractor in Kashipur? Separate 12 common myths from facts on experience, price, safety and contracts before you hire.",
    url: "https://www.spacebuild.co.in/best-civil-contractor-in-kashipur",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Best Civil Contractor in Kashipur - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Civil Contractor Kashipur | 12 Myths vs Facts",
    description:
      "Searching for the best civil contractor in Kashipur? Separate 12 common myths from facts on experience, price, safety and contracts before you hire.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Best Civil Contractor Kashipur | 12 Myths vs Facts",
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