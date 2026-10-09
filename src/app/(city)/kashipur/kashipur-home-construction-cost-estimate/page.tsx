import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Kashipur Home Construction Cost Estimate | 2026 Detailed Budget Guide",

  description:
    "Get a clear Kashipur home construction cost estimate with per sq ft rates, stage-wise budget, material costs, hidden charges and practical tips to plan your home.",

  keywords:
    "Kashipur home construction cost estimate, house construction cost Kashipur, construction cost per sq ft, home building budget, cost calculator for house, grey structure estimate, turnkey construction rate, material cost estimate, labour cost estimate, 2BHK construction cost, 3BHK construction cost, duplex construction cost, construction budget planning, hidden construction charges, building estimate sample, residential construction rates, finishing cost estimate, contractor quotation, home loan budget, Uttarakhand construction cost",

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
      "https://www.spacebuild.co.in/kashipur/kashipur-home-construction-cost-estimate",
  },

  openGraph: {
    title:
      "Kashipur Home Construction Cost Estimate | 2026 Detailed Budget Guide",
    description:
      "Get a clear Kashipur home construction cost estimate with per sq ft rates, stage-wise budget, material costs, hidden charges and practical tips to plan your home.",
    url: "https://www.spacebuild.co.in/kashipur/kashipur-home-construction-cost-estimate",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Kashipur Home Construction Cost Estimate - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Kashipur Home Construction Cost Estimate | 2026 Detailed Budget Guide",
    description:
      "Get a clear Kashipur home construction cost estimate with per sq ft rates, stage-wise budget, material costs, hidden charges and practical tips to plan your home.",
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