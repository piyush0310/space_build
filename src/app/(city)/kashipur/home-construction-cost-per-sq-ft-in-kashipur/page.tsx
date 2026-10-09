import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Home Construction Cost per Sq Ft in Kashipur | 2026 Rate Breakdown",

  description:
    "Know the home construction cost per sq ft in Kashipur with grey structure, turnkey and premium rates, stage-wise split, material impact, hidden charges and saving tips.",

  keywords: [
    "home construction cost per sq ft Kashipur",
    "construction rate per square foot",
    "house building rate Kashipur",
    "grey structure rate",
    "turnkey construction rate",
    "labour rate per sq ft",
    "premium finishing cost",
    "built-up area calculation",
    "house cost calculator",
    "residential construction rates",
    "construction budget Kashipur",
    "material cost share",
    "finishing cost per sq ft",
    "duplex construction rate",
    "hidden construction charges",
    "contractor rate comparison",
    "home construction estimate",
    "Uttarakhand building rates",
    "cost saving construction",
    "house building payment plan",
  ],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/kashipur/home-construction-cost-per-sq-ft-kashipur",
  },

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Home Construction Cost per Sq Ft in Kashipur | 2026 Rate Breakdown",
    description:
      "Know the home construction cost per sq ft in Kashipur with grey structure, turnkey and premium rates, stage-wise split, material impact, hidden charges and saving tips.",
    url: "https://www.spacebuild.co.in/kashipur/home-construction-cost-per-sq-ft-kashipur",
    siteName: "Space Build",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Home Construction Cost per Sq Ft in Kashipur - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Home Construction Cost per Sq Ft in Kashipur | 2026 Rate Breakdown",
    description:
      "Know the home construction cost per sq ft in Kashipur with grey structure, turnkey and premium rates, stage-wise split, material impact, hidden charges and saving tips.",
    images: ["/og-image.jpg"],
  },

  geo: {
    placename: "Kashipur, Uttarakhand, India",
    region: "IN-UT",
    country: "IN",
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