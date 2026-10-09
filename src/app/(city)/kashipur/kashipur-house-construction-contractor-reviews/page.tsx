import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Kashipur House Construction Contractor Reviews | Read Smart",

  description:
    "Reading Kashipur house construction contractor reviews? Match reviewers to your situation, mine feedback by house part and verify claims before hiring.",

  keywords:
    "Kashipur house construction contractor reviews, new home contractor reviews, house extension contractor reviews, renovation contractor reviews, reviewer profiles, contractor feedback, house construction reviews, contractor review verification, contractor hiring tips, house construction contractor Kashipur",

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
      "https://www.spacebuild.co.in/kashipur/kashipur-house-construction-contractor-reviews",
  },

  openGraph: {
    title:
      "Kashipur House Construction Contractor Reviews | Read Smart",
    description:
      "Reading Kashipur house construction contractor reviews? Match reviewers to your situation, mine feedback by house part and verify claims before hiring.",
    url: "https://www.spacebuild.co.in/kashipur/kashipur-house-construction-contractor-reviews",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Kashipur House Construction Contractor Reviews - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Kashipur House Construction Contractor Reviews | Read Smart",
    description:
      "Reading Kashipur house construction contractor reviews? Match reviewers to your situation, mine feedback by house part and verify claims before hiring.",
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