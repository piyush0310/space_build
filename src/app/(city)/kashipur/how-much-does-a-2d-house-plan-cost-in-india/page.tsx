import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "How Much Does a 2D House Plan Cost in India? | Space Build",

  description:
    "Wondering how much a 2D house plan costs in India? Learn about price ranges, cost factors, and what's included, and get a transparent 2D plan quotation from Space Build.",

  keywords:
    "how much does a 2D house plan cost in India, 2D house plan cost India, 2D floor plan price India, house plan cost per sq ft India, naksha banwane ka rate, house map cost India, 2D plan designer charges India, cost of house plan design, architect fees for house plan India, Vastu house plan cost, 2D floor plan rate per sq ft, affordable house plan India, custom house plan price India, 2D house plan online India, 2 BHK house plan cost, 3 BHK house plan cost, house plan design charges, low budget house plan India, ready-made house plan price, 2D plan and elevation cost, Space Build house plan",

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
      "https://www.spacebuild.co.in/kashipur/how-much-does-a-2d-house-plan-cost-in-india",
  },

  openGraph: {
    title: "How Much Does a 2D House Plan Cost in India? | Space Build",
    description:
      "Wondering how much a 2D house plan costs in India? Learn about price ranges, cost factors, and what's included, and get a transparent 2D plan quotation from Space Build.",
    url: "https://www.spacebuild.co.in/kashipur/how-much-does-a-2d-house-plan-cost-in-india",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "How Much Does a 2D House Plan Cost in India - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "How Much Does a 2D House Plan Cost in India? | Space Build",
    description:
      "Learn about 2D house plan price ranges, plan cost factors, Vastu planning, custom layouts, and transparent house plan quotations from Space Build.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "How Much Does a 2D House Plan Cost in India? | Space Build",
    "geo.placename": "India",
    "geo.region": "IN",
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