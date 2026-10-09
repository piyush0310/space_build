import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Affordable House Builders in Kashipur | Budget Home Construction Guide",

  description:
    "Find affordable house builders in Kashipur with practical cost ranges, money-saving ideas, contract tips and checks to get a strong, budget-friendly home built.",

  keywords:
    "affordable house builders Kashipur, budget home construction, low cost house construction, cheap house builder Kashipur, economical home design, house construction cost per sq ft, small house construction, affordable turnkey builder, grey structure cost, budget friendly contractor, home building tips, cost saving construction, 2BHK house construction, low budget villa, construction quotation, material cost saving, trusted builder Uttarakhand, house construction agreement, quality at low cost, home loan construction",

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
      "https://www.spacebuild.co.in/kashipur/affordable-house-builders-in-kashipur",
  },

  openGraph: {
    title:
      "Affordable House Builders in Kashipur | Budget Home Construction Guide",
    description:
      "Find affordable house builders in Kashipur with practical cost ranges, money-saving ideas, contract tips and checks to get a strong, budget-friendly home built.",
    url: "https://www.spacebuild.co.in/kashipur/affordable-house-builders-in-kashipur",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Affordable House Builders in Kashipur - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Affordable House Builders in Kashipur | Budget Home Construction Guide",
    description:
      "Find affordable house builders in Kashipur with practical cost ranges, money-saving ideas, contract tips and checks to get a strong, budget-friendly home built.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title:
      "Affordable House Builders in Kashipur | Budget Home Construction Guide",
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