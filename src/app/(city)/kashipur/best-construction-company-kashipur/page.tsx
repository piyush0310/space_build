import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Best Construction Company in Kashipur | Match the Right Firm to Your Need 2026",

  description:
    "Find the best construction company in Kashipur by matching firm type to your profile: first-time owner, NRI, shop owner, factory unit or investor. Includes checks, rates and agreement tips.",

  keywords:
    "best construction company Kashipur, top building company, construction firm for NRI owners, first time home builder, shop construction company, factory construction company, investor construction partner, builder suitability check, construction company comparison, company selection matrix, turnkey building company, residential and commercial builder, construction rate per sq ft, construction company agreement, project handover quality, builder after sales support, local construction firm, verified construction company, home construction budget, Uttarakhand building company",

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
      "https://www.spacebuild.co.in/kashipur/best-construction-company-kashipur",
  },

  openGraph: {
    title:
      "Best Construction Company in Kashipur | Match the Right Firm to Your Need 2026",
    description:
      "Find the best construction company in Kashipur by matching firm type to your profile: first-time owner, NRI, shop owner, factory unit or investor. Includes checks, rates and agreement tips.",
    url: "https://www.spacebuild.co.in/kashipur/best-construction-company-kashipur",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Best Construction Company in Kashipur - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Best Construction Company in Kashipur | Match the Right Firm to Your Need 2026",
    description:
      "Find the best construction company in Kashipur by matching firm type to your profile: first-time owner, NRI, shop owner, factory unit or investor. Includes checks, rates and agreement tips.",
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