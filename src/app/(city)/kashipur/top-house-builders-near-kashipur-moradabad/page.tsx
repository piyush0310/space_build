import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Top House Builders Near Kashipur & Moradabad | Trusted Home Builder Guide 2026",

  description:
    "Find top house builders near Kashipur and Moradabad. Learn how to compare nearby builders, check quality, understand rates, avoid hidden costs and sign a safe agreement.",

  keywords:
    "top house builders near Kashipur Moradabad, home builders Kashipur Moradabad, house construction Moradabad road, residential builders Uttarakhand UP border, trusted builders near me, turnkey house builder, house construction cost Moradabad, Kashipur Jaspur builders, affordable home builders, builder comparison guide, construction company selection, home building rate per sq ft, quality house construction, builder verification checklist, house construction agreement, budget home construction, construction timeline planning, material quality standards, local house contractor, new house construction",

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
      "https://www.spacebuild.co.in/kashipur/top-house-builders-near-kashipur-moradabad",
  },

  openGraph: {
    title:
      "Top House Builders Near Kashipur & Moradabad | Trusted Home Builder Guide 2026",
    description:
      "Find top house builders near Kashipur and Moradabad. Learn how to compare nearby builders, check quality, understand rates, avoid hidden costs and sign a safe agreement.",
    url: "https://www.spacebuild.co.in/kashipur/top-house-builders-near-kashipur-moradabad",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Top House Builders Near Kashipur & Moradabad - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Top House Builders Near Kashipur & Moradabad | Trusted Home Builder Guide 2026",
    description:
      "Find top house builders near Kashipur and Moradabad. Learn how to compare nearby builders, check quality, understand rates, avoid hidden costs and sign a safe agreement.",
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