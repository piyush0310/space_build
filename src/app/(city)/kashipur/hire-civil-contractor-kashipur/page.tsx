import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Hire Civil Contractor in Kashipur | Step-by-Step Process",

  description:
    "Planning to hire civil contractor in Kashipur? Follow a clear process covering scope, bids, interviews, contracts, site start and final closeout.",

  keywords:
    "Hire a civil contractor in Kashipur for foundations, RCC structures, drains and site works. Learn scoping, bidding, interviews, contracts, onboarding and monitoring for smooth projects.",

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
      "https://www.spacebuild.co.in/kashipur/hire-civil-contractor-kashipur",
  },

  openGraph: {
    title: "Hire Civil Contractor in Kashipur | Step-by-Step Process",
    description:
      "Planning to hire civil contractor in Kashipur? Follow a clear process covering scope, bids, interviews, contracts, site start and final closeout.",
    url: "https://www.spacebuild.co.in/kashipur/hire-civil-contractor-kashipur",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Hire Civil Contractor in Kashipur - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hire Civil Contractor in Kashipur | Step-by-Step Process",
    description:
      "Planning to hire civil contractor in Kashipur? Follow a clear process covering scope, bids, interviews, contracts, site start and final closeout.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Hire Civil Contractor in Kashipur | Step-by-Step Process",
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