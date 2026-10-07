import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Where to Find Contractor in Kashipur | Sources by Job Type",

  description:
    "Where to find contractor in Kashipur? Match each job to the best source, use ready-made questions, track leads and shortlist safely before hiring.",

  keywords:
    "Learn where to find contractor in Kashipur for houses, repairs, extensions and shops. Explore local markets, online listings, referrals and live sites to shortlist professionals.",

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
      "https://www.spacebuild.co.in/where-to-find-contractor-in-kashipur",
  },

  openGraph: {
    title: "Where to Find Contractor in Kashipur | Sources by Job Type",
    description:
      "Where to find contractor in Kashipur? Match each job to the best source, use ready-made questions, track leads and shortlist safely before hiring.",
    url: "https://www.spacebuild.co.in/where-to-find-contractor-in-kashipur",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Where to Find Contractor in Kashipur - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Where to Find Contractor in Kashipur | Sources by Job Type",
    description:
      "Where to find contractor in Kashipur? Match each job to the best source, use ready-made questions, track leads and shortlist safely before hiring.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Where to Find Contractor in Kashipur | Sources by Job Type",
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