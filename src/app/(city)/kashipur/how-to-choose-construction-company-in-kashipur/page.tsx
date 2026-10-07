import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "How to Choose Construction Company in Kashipur | 14-Day Plan",

  description:
    "Learn how to choose construction company in Kashipur with a simple 14-day plan covering research, meetings, quotations, contracts and final checks.",

  keywords:
    "Learn how to choose construction company in Kashipur for homes, shops, factories and renovation. Follow a selection plan covering research, meetings, quotations, contracts and verification.",

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
      "https://www.spacebuild.co.in/how-to-choose-construction-company-in-kashipur",
  },

  openGraph: {
    title: "How to Choose Construction Company in Kashipur | 14-Day Plan",
    description:
      "Learn how to choose construction company in Kashipur with a simple 14-day plan covering research, meetings, quotations, contracts and final checks.",
    url: "https://www.spacebuild.co.in/how-to-choose-construction-company-in-kashipur",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "How to Choose Construction Company in Kashipur - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "How to Choose Construction Company in Kashipur | 14-Day Plan",
    description:
      "Learn how to choose construction company in Kashipur with a simple 14-day plan covering research, meetings, quotations, contracts and final checks.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "How to Choose Construction Company in Kashipur | 14-Day Plan",
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