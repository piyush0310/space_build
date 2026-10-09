import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Best Civil Construction Company Kashipur | Health Check",

  description:
    "Which is the best civil construction company in Kashipur? Run a simple health check on ownership, people, systems and finances before you sign.",

  keywords:
    "Find the best civil construction company in Kashipur for foundations, RCC structures and drains. Check ownership, people, systems, finances and culture before you finally commit.",

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
      "https://www.spacebuild.co.in/best-civil-construction-company-in-kashipur",
  },

  openGraph: {
    title: "Best Civil Construction Company Kashipur | Health Check",
    description:
      "Which is the best civil construction company in Kashipur? Run a simple health check on ownership, people, systems and finances before you sign.",
    url: "https://www.spacebuild.co.in/best-civil-construction-company-in-kashipur",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Best Civil Construction Company in Kashipur - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Civil Construction Company Kashipur | Health Check",
    description:
      "Which is the best civil construction company in Kashipur? Run a simple health check on ownership, people, systems and finances before you sign.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Best Civil Construction Company Kashipur | Health Check",
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