import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Kashipur Contractor Reviews | Read Feedback Stage by Stage",

  description:
    "Reading Kashipur contractor reviews? Learn what feedback reveals at each project stage, how to verify comments and which questions to ask before hiring.",

  keywords:
    "Read Kashipur contractor reviews for houses, repairs, extensions and shops. Follow feedback across each project stage, verify comments and turn opinions into smart hiring questions.",

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
      "https://www.spacebuild.co.in/kashipur/kashipur-contractor-reviews",
  },

  openGraph: {
    title: "Kashipur Contractor Reviews | Read Feedback Stage by Stage",
    description:
      "Reading Kashipur contractor reviews? Learn what feedback reveals at each project stage, how to verify comments and which questions to ask before hiring.",
    url: "https://www.spacebuild.co.in/kashipur/kashipur-contractor-reviews",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Kashipur Contractor Reviews - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kashipur Contractor Reviews | Read Feedback Stage by Stage",
    description:
      "Reading Kashipur contractor reviews? Learn what feedback reveals at each project stage, how to verify comments and which questions to ask before hiring.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Kashipur Contractor Reviews | Read Feedback Stage by Stage",
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