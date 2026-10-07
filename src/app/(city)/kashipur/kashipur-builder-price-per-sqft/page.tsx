import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Kashipur Builder Price Per Sqft | Rate Guide & Calculation",

  description:
    "Confused about Kashipur builder price per sqft? Learn what the rate covers, how to calculate your total cost and how to compare quotes without hidden extras.",

  keywords:
    "Kashipur builder price per sqft, builder price per square foot Kashipur, construction rate per sqft Kashipur, house construction cost Kashipur, builder rates Kashipur, construction cost per sqft Kashipur, villa construction cost Kashipur, shop construction cost Kashipur, renovation cost Kashipur, building rate Kashipur, civil construction rate Kashipur, material rate Kashipur, labour rate Kashipur, turnkey construction cost Kashipur, builder quotation Kashipur, construction estimate Kashipur, hidden construction costs Kashipur, compare builder quotes Kashipur, house construction budget Kashipur, reliable builders Kashipur, construction company Kashipur, building contractor Kashipur, sqft rate guide Kashipur",

  alternates: {
    canonical: "https://www.spacebuild.co.in/kashipur-builder-price-per-sqft",
  },

  openGraph: {
    title: "Kashipur Builder Price Per Sqft | Rate Guide & Calculation",
    description:
      "Confused about Kashipur builder price per sqft? Learn what the rate covers, how to calculate your total cost and how to compare quotes without hidden extras.",
    url: "https://www.spacebuild.co.in/kashipur-builder-price-per-sqft",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Kashipur Builder Price Per Sqft - Rate Guide & Calculation",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kashipur Builder Price Per Sqft | Rate Guide & Calculation",
    description:
      "Confused about Kashipur builder price per sqft? Learn what the rate covers, how to calculate your total cost and how to compare quotes without hidden extras.",
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