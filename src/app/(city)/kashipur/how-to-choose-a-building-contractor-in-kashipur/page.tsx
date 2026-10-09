import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "How to Choose a Building Contractor in Kashipur | 7 Filters",

  description:
    "Learn how to choose a building contractor in Kashipur using seven simple filters that shrink a long list to one trusted, verified professional.",

  keywords:
    "Learn how to choose a building contractor in Kashipur using seven elimination filters. Check documents, work quality, pricing, people, contracts and references before hiring safely.",

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
      "https://www.spacebuild.co.in/kashipur/how-to-choose-a-building-contractor-in-kashipur",
  },

  openGraph: {
    title:
      "How to Choose a Building Contractor in Kashipur | 7 Filters",
    description:
      "Learn how to choose a building contractor in Kashipur using seven simple filters that shrink a long list to one trusted, verified professional.",
    url: "https://www.spacebuild.co.in/kashipur/how-to-choose-a-building-contractor-in-kashipur",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "How to Choose a Building Contractor in Kashipur - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "How to Choose a Building Contractor in Kashipur | 7 Filters",
    description:
      "Learn how to choose a building contractor in Kashipur using seven simple filters that shrink a long list to one trusted, verified professional.",
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