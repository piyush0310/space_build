import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Affordable Interior Designer | How Pricing Models Work",

  description:
    "Looking for an affordable interior designer? Learn how designers charge, spot hidden markups and pick the pricing model that protects your budget.",

  keywords:
    "Hire an affordable interior designer by understanding fee models, material markups, package inclusions and payment stages. Compare transparent quotations and protect your whole budget wisely.",

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
      "https://www.spacebuild.co.in/affordable-interior-designer-pricing-models",
  },

  openGraph: {
    title: "Affordable Interior Designer | How Pricing Models Work",
    description:
      "Looking for an affordable interior designer? Learn how designers charge, spot hidden markups and pick the pricing model that protects your budget.",
    url: "https://www.spacebuild.co.in/affordable-interior-designer-pricing-models",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Affordable Interior Designer - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Affordable Interior Designer | How Pricing Models Work",
    description:
      "Looking for an affordable interior designer? Learn how designers charge, spot hidden markups and pick the pricing model that protects your budget.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
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