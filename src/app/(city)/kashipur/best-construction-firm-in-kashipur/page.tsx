import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Best Construction Firm in Kashipur | Scorecard to Judge Quality",

  description:
    "Which is the best construction firm in Kashipur? Use this simple scorecard to test track record, finances, transparency and service before you commit.",

  keywords:
    "best construction firm in Kashipur, house construction Kashipur, villa construction Kashipur, shop construction Kashipur, factory construction Kashipur, renovation contractor Kashipur, construction company Kashipur Uttarakhand, quality construction Kashipur, affordable construction firm Kashipur, turnkey construction Kashipur, residential construction Kashipur, commercial construction Kashipur, construction scorecard Kashipur, reliable builder Kashipur, after-sales construction service Kashipur",

  robots: {
    index: true,
    follow: true,
  },

  authors: [
    {
      name: "Space Build Moradabad",
    },
  ],

  alternates: {
    canonical: "https://www.spacebuild.co.in/kashipur/best-construction-firm-in-kashipur",
  },

  openGraph: {
    title: "Best Construction Firm in Kashipur | Scorecard to Judge Quality",
    description:
      "Which is the best construction firm in Kashipur? Use this simple scorecard to test track record, finances, transparency and service before you commit.",
    url: "https://www.spacebuild.co.in/kashipur/best-construction-firm-in-kashipur",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Best Construction Firm in Kashipur - Scorecard to Judge Quality",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Construction Firm in Kashipur | Scorecard to Judge Quality",
    description:
      "Choose a reliable construction firm in Kashipur by comparing track record, finances, transparency, workmanship and after-sales service.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Best Construction Firm in Kashipur | Scorecard to Judge Quality",
    "geo.placename": "Kashipur, Uttarakhand",
    "geo.region": "IN-UK",
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