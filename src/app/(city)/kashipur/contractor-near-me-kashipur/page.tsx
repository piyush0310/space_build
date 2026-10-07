import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Contractor Near Me Kashipur | Quick, Reliable Local Help",

  description:
    "Searching for a contractor near me in Kashipur? Learn how to match jobs to the right local pro, check trust signals, handle urgent repairs and avoid costly errors.",

  keywords:
    "Find a contractor near me in Kashipur for repairs, extensions, roofing, flooring and new construction. Learn how to check trust, compare quotes and hire dependable local professionals quickly.",

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
      "https://www.spacebuild.co.in/contractor-near-me-kashipur",
  },

  openGraph: {
    title: "Contractor Near Me Kashipur | Quick, Reliable Local Help",
    description:
      "Searching for a contractor near me in Kashipur? Learn how to match jobs to the right local pro, check trust signals, handle urgent repairs and avoid costly errors.",
    url: "https://www.spacebuild.co.in/contractor-near-me-kashipur",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Contractor Near Me Kashipur - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contractor Near Me Kashipur | Quick, Reliable Local Help",
    description:
      "Searching for a contractor near me in Kashipur? Learn how to match jobs to the right local pro, check trust signals, handle urgent repairs and avoid costly errors.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Contractor Near Me Kashipur | Quick, Reliable Local Help",
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