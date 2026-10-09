import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Civil Contractor Kashipur Cost | Item-Wise Charges and Budget Planning 2026",

  description:
    "Understand civil contractor cost in Kashipur through item-wise charges, project-type rates, negotiation tips, overrun causes and a clear method to keep spending under control.",

  keywords:
    "civil contractor Kashipur cost, civil work charges, item-wise construction rate, contractor fee structure, civil work estimate Kashipur, RCC work cost, brickwork and plaster rate, flooring work charges, house construction price, shop construction cost, industrial shed cost, boundary wall rate, renovation work charges, cost overrun causes, contractor negotiation tips, construction budget control, labour and material cost, GST on civil work, payment schedule planning, Kashipur construction rates",

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
      "https://www.spacebuild.co.in/kashipur/civil-contractor-kashipur-cost",
  },

  openGraph: {
    title:
      "Civil Contractor Kashipur Cost | Item-Wise Charges and Budget Planning 2026",
    description:
      "Understand civil contractor cost in Kashipur through item-wise charges, project-type rates, negotiation tips, overrun causes and a clear method to keep spending under control.",
    url: "https://www.spacebuild.co.in/kashipur/civil-contractor-kashipur-cost",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Civil Contractor Kashipur Cost - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Civil Contractor Kashipur Cost | Item-Wise Charges and Budget Planning 2026",
    description:
      "Understand civil contractor cost in Kashipur through item-wise charges, project-type rates, negotiation tips, overrun causes and a clear method to keep spending under control.",
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