import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Affordable Contractor Kashipur | Hire Smart on a Budget",

  description:
    "Need an affordable contractor in Kashipur? Learn how to find fair rates, negotiate safely, split work smartly and avoid cheap deals that cost more later.",

  keywords:
    "Find an affordable contractor in Kashipur for houses, repairs, extensions and shops. Learn fair pricing, safe negotiation, smart work splitting and checks that protect your budget and quality.",

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
      "https://www.spacebuild.co.in/affordable-contractor-in-kashipur",
  },

  openGraph: {
    title: "Affordable Contractor Kashipur | Hire Smart on a Budget",
    description:
      "Need an affordable contractor in Kashipur? Learn how to find fair rates, negotiate safely, split work smartly and avoid cheap deals that cost more later.",
    url: "https://www.spacebuild.co.in/affordable-contractor-in-kashipur",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Affordable Contractor Kashipur - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Affordable Contractor Kashipur | Hire Smart on a Budget",
    description:
      "Need an affordable contractor in Kashipur? Learn how to find fair rates, negotiate safely, split work smartly and avoid cheap deals that cost more later.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Affordable Contractor Kashipur | Hire Smart on a Budget",
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