import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Civil Contractor Price Kashipur | Rate Build-Up Explained",

  description:
    "Wondering about civil contractor price in Kashipur? See how item rates are built, what drives them and how to compare bills without hidden extras.",

  keywords:
    "Understand civil contractor price in Kashipur for foundations, RCC structures, masonry, drains and site works. Learn rate build-up, measurement, billing and ways to compare quotations.",

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
      "https://www.spacebuild.co.in/kashipur/civil-contractor-price-kashipur",
  },

  openGraph: {
    title: "Civil Contractor Price Kashipur | Rate Build-Up Explained",
    description:
      "Wondering about civil contractor price in Kashipur? See how item rates are built, what drives them and how to compare bills without hidden extras.",
    url: "https://www.spacebuild.co.in/kashipur/civil-contractor-price-kashipur",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Civil Contractor Price Kashipur - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Civil Contractor Price Kashipur | Rate Build-Up Explained",
    description:
      "Wondering about civil contractor price in Kashipur? See how item rates are built, what drives them and how to compare bills without hidden extras.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Civil Contractor Price Kashipur | Rate Build-Up Explained",
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