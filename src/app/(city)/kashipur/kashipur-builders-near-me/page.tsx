import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Kashipur Builders Near Me | Find Trusted Local Home Builders 2026",

  description:
    "Searching for Kashipur builders near me? Learn how to locate nearby home builders, compare services and costs, check quality and sign a safe construction agreement.",

  keywords:
    "Kashipur builders near me, nearby home builders, local builders Kashipur, house builders near me, residential builders Kashipur, construction company near me, affordable builders, turnkey home builders, builders and contractors, trusted builders Uttarakhand, house construction rate, builder selection guide, home construction services, quality builders, builder verification, construction agreement tips, new home builders, independent house builders, builder comparison, budget home building.",

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
      "https://www.spacebuild.co.in/kashipur-builders-near-me",
  },

  openGraph: {
    title: "Kashipur Builders Near Me | Find Trusted Local Home Builders 2026",
    description:
      "Searching for Kashipur builders near me? Learn how to locate nearby home builders, compare services and costs, check quality and sign a safe construction agreement.",
    url: "https://www.spacebuild.co.in/kashipur-builders-near-me",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Kashipur Builders Near Me - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kashipur Builders Near Me | Find Trusted Local Home Builders 2026",
    description:
      "Searching for Kashipur builders near me? Learn how to locate nearby home builders, compare services and costs, check quality and sign a safe construction agreement.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Kashipur Builders Near Me | Find Trusted Local Home Builders 2026",
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