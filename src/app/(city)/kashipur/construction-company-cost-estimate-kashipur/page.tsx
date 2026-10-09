import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Construction Company Cost Estimate in Kashipur | How Estimates Are Built 2026",
  description:
    "Learn how a construction company prepares a cost estimate in Kashipur: estimate types, BOQ format, contingency, price escalation, accuracy checks and ways to challenge a quote.",
  keywords: [
    "construction company cost estimate Kashipur",
    "rough estimate vs detailed estimate",
    "bill of quantities format",
    "BOQ checking",
    "quantity takeoff",
    "rate analysis",
    "contingency allowance",
    "price escalation clause",
    "estimate accuracy",
    "preliminary estimate",
    "itemised construction quote",
    "estimate validity period",
    "cost plan by stage",
    "provisional sum items",
    "estimate revision process",
    "budget approval for construction",
    "estimate comparison method",
    "construction cost planning",
    "cost variance tracking",
    "Kashipur building estimate",
  ],
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/kashipur/construction-company-cost-estimate-kashipur",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Space Build" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title:
      "Construction Company Cost Estimate in Kashipur | How Estimates Are Built 2026",
    description:
      "Learn how a construction company prepares a cost estimate in Kashipur: estimate types, BOQ format, contingency, price escalation, accuracy checks and ways to challenge a quote.",
    url: "https://www.spacebuild.co.in/kashipur/construction-company-cost-estimate-kashipur",
    siteName: "Space Build",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Construction Company Cost Estimate in Kashipur - Space Build",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Construction Company Cost Estimate in Kashipur | How Estimates Are Built 2026",
    description:
      "Learn how a construction company prepares a cost estimate in Kashipur: estimate types, BOQ format, contingency, price escalation, accuracy checks and ways to challenge a quote.",
    images: ["/og-image.jpg"],
  },
  geo: {
    placename: "Kashipur, Uttarakhand, India",
    region: "IN-UT",
    country: "IN",
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