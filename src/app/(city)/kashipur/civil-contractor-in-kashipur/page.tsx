import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Civil Contractor in Kashipur | Plot Problem Solutions Guide",

  description:
    "Hiring a civil contractor in Kashipur? Learn how to match skills to plot problems like soft soil, waterlogging, slope and narrow access.",

  keywords:
    "Match a civil contractor in Kashipur to plot problems like soft soil, waterlogging, slope, narrow access and old structures for safer, smarter and longer-lasting building.",

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
      "https://www.spacebuild.co.in/civil-contractor-in-kashipur",
  },

  openGraph: {
    title: "Civil Contractor in Kashipur | Plot Problem Solutions Guide",
    description:
      "Hiring a civil contractor in Kashipur? Learn how to match skills to plot problems like soft soil, waterlogging, slope and narrow access.",
    url: "https://www.spacebuild.co.in/civil-contractor-in-kashipur",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Civil Contractor in Kashipur - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Civil Contractor in Kashipur | Plot Problem Solutions Guide",
    description:
      "Hiring a civil contractor in Kashipur? Learn how to match skills to plot problems like soft soil, waterlogging, slope and narrow access.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Civil Contractor in Kashipur | Plot Problem Solutions Guide",
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