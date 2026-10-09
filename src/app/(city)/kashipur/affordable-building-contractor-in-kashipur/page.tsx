import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Affordable Building Contractor in Kashipur | Low Cost, Strong Quality 2026",

  description:
    "Looking for an affordable building contractor in Kashipur? Learn how to find a budget-friendly, reliable builder, compare rates, avoid hidden costs and protect quality.",

  keywords:
    "affordable building contractor Kashipur, low cost building contractor, budget contractor Kashipur, economical construction, cheap and best builder, building contractor rates, per sq ft construction rate, cost effective construction, small budget construction, house and shop construction, contractor quotation comparison, construction cost saving tips, reliable building contractor, labour and material contract, building agreement checklist, hidden construction charges, local contractor Uttarakhand, RCC building work, construction payment plan, value for money builder",

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
      "https://www.spacebuild.co.in/kashipur/affordable-building-contractor-in-kashipur",
  },

  openGraph: {
    title:
      "Affordable Building Contractor in Kashipur | Low Cost, Strong Quality 2026",
    description:
      "Looking for an affordable building contractor in Kashipur? Learn how to find a budget-friendly, reliable builder, compare rates, avoid hidden costs and protect quality.",
    url: "https://www.spacebuild.co.in/affordable-building-contractor-in-kashipur",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Affordable Building Contractor in Kashipur - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Affordable Building Contractor in Kashipur | Low Cost, Strong Quality 2026",
    description:
      "Looking for an affordable building contractor in Kashipur? Learn how to find a budget-friendly, reliable builder, compare rates, avoid hidden costs and protect quality.",
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