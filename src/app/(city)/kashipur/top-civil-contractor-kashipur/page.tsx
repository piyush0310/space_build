import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Top Civil Contractor Kashipur | Tiers, Capacity & Fit Guide",

  description:
    "Searching for a top civil contractor in Kashipur? Learn contractor tiers, capacity signs and how to match the size of a firm to your project.",

  keywords:
    "top civil contractor in Kashipur, civil contractor Kashipur, foundations contractor Kashipur, RCC structures Kashipur, drains contractor Kashipur, civil contractor tiers, contractor capacity Kashipur, civil contractor systems, contractor references Kashipur, contractor project size, top civil construction contractor Kashipur",

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
      "https://www.spacebuild.co.in/kashipur/top-civil-contractor-kashipur",
  },

  openGraph: {
    title:
      "Top Civil Contractor Kashipur | Tiers, Capacity & Fit Guide",
    description:
      "Searching for a top civil contractor in Kashipur? Learn contractor tiers, capacity signs and how to match the size of a firm to your project.",
    url: "https://www.spacebuild.co.in/kashipur/top-civil-contractor-kashipur",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Top Civil Contractor Kashipur - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Top Civil Contractor Kashipur | Tiers, Capacity & Fit Guide",
    description:
      "Searching for a top civil contractor in Kashipur? Learn contractor tiers, capacity signs and how to match the size of a firm to your project.",
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