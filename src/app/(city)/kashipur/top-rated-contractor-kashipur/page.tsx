import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Top Rated Contractor Kashipur | How Ratings Really Work",

  description:
    "Looking for a top rated contractor in Kashipur? Learn what ratings really measure, how to verify scores and which proof matters before you hire.",

  keywords:
    "Find a top-rated contractor in Kashipur for houses, shops, repairs and site works. Learn how ratings work, verify scores, compare feedback and hire dependable professionals.",

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
      "https://www.spacebuild.co.in/top-rated-contractor-kashipur",
  },

  openGraph: {
    title: "Top Rated Contractor Kashipur | How Ratings Really Work",
    description:
      "Looking for a top rated contractor in Kashipur? Learn what ratings really measure, how to verify scores and which proof matters before you hire.",
    url: "https://www.spacebuild.co.in/top-rated-contractor-kashipur",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Top Rated Contractor Kashipur - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Top Rated Contractor Kashipur | How Ratings Really Work",
    description:
      "Looking for a top rated contractor in Kashipur? Learn what ratings really measure, how to verify scores and which proof matters before you hire.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Top Rated Contractor Kashipur | How Ratings Really Work",
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