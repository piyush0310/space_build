import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Low Cost House Construction in Kashipur | Budget Home Building Guide 2026",

  description:
    "Plan low cost house construction in Kashipur with smart design, material choices, realistic rates, contractor tips and savings methods that keep your home strong and affordable.",

  keywords:
    "low cost house construction Kashipur, budget home building, economical house design, small house construction cost, cheap house construction, affordable home plans, cost saving building materials, 2BHK low cost house, single floor house construction, per sq ft house rate, low budget home Uttarakhand, house construction estimate, budget friendly contractor, phase wise house building, compact home design, construction savings tips, material cost control, home construction planning, house building agreement, strong house in low budget",

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
      "https://www.spacebuild.co.in/kashipur/low-cost-house-construction-in-kashipur",
  },

  openGraph: {
    title:
      "Low Cost House Construction in Kashipur | Budget Home Building Guide 2026",
    description:
      "Plan low cost house construction in Kashipur with smart design, material choices, realistic rates, contractor tips and savings methods that keep your home strong and affordable.",
    url: "https://www.spacebuild.co.in/kashipur/low-cost-house-construction-in-kashipur",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Low Cost House Construction in Kashipur - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Low Cost House Construction in Kashipur | Budget Home Building Guide 2026",
    description:
      "Plan low cost house construction in Kashipur with smart design, material choices, realistic rates, contractor tips and savings methods that keep your home strong and affordable.",
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