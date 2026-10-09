import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Residential Building Contractors Kashipur | Stage-wise Guide",

  description:
    "Hiring residential building contractors in Kashipur? Follow a stage-wise home-building roadmap with owner checks, payments and handover tips.",

  keywords:
    "residential building contractors in Kashipur, houses, duplexes, villas, rental floors, stage-wise home building, owner checks, contractor payments, construction safety, home handover, durable family homes",

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
      "https://www.spacebuild.co.in/kashipur/kashipur-residential-building-contractors",
  },

  openGraph: {
    title:
      "Residential Building Contractors Kashipur | Stage-wise Guide",
    description:
      "Hiring residential building contractors in Kashipur? Follow a stage-wise home-building roadmap with owner checks, payments and handover tips.",
    url: "https://www.spacebuild.co.in/kashipur/kashipur-residential-building-contractors",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Residential Building Contractors Kashipur - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Residential Building Contractors Kashipur | Stage-wise Guide",
    description:
      "Hiring residential building contractors in Kashipur? Follow a stage-wise home-building roadmap with owner checks, payments and handover tips.",
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