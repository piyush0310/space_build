import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Kashipur Construction Company Reviews | Decode Client Feedback",

  description:
    "Reading Kashipur construction company reviews? Learn to decode comments by theme, spot unreliable feedback and confirm opinions before you sign a contract.",

  keywords:
    "Read Kashipur construction company reviews for homes, shops, factories and renovation. Decode client comments by theme, test their honesty and verify feedback through calls, site visits and documents.",

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
      "https://www.spacebuild.co.in/kashipur-construction-company-reviews",
  },

  openGraph: {
    title: "Kashipur Construction Company Reviews | Decode Client Feedback",
    description:
      "Reading Kashipur construction company reviews? Learn to decode comments by theme, spot unreliable feedback and confirm opinions before you sign a contract.",
    url: "https://www.spacebuild.co.in/kashipur-construction-company-reviews",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Kashipur Construction Company Reviews - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kashipur Construction Company Reviews | Decode Client Feedback",
    description:
      "Reading Kashipur construction company reviews? Learn to decode comments by theme, spot unreliable feedback and confirm opinions before you sign a contract.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Kashipur Construction Company Reviews | Decode Client Feedback",
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