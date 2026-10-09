import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Kashipur Architectural Design – Styles, Trends & Vastu Planning | Space Build",
  description:
    "Explore modern architectural design in Kashipur — popular styles, vastu integration, climate-smart planning and material choices. Get expert design support from Space Build.",
  keywords:
    "kashipur architectural design, architectural design kashipur, modern architecture kashipur, house design trends kashipur, vastu architectural design, residential architecture design kashipur, commercial architectural design kashipur, industrial architecture design kashipur, contemporary house design kashipur, architectural styles india, 3d architectural design kashipur, building design trends 2026, vastu integrated architecture, climate responsive design kashipur, facade design kashipur, space build architectural design, home design company kashipur, structural design coordination kashipur, eco friendly architecture kashipur, interior and architectural design kashipur, modern fusion architecture, traditional architecture design kashipur",
  alternates: {
    canonical: "https://www.spacebuild.co.in/kashipur/kashipur-architectural-design",
  },
  openGraph: {
    title:
      "Kashipur Architectural Design – Styles, Trends & Vastu Planning | Space Build",
    description:
      "Explore modern architectural design in Kashipur — popular styles, vastu integration, climate-smart planning and material choices. Get expert design support from Space Build.",
    url: "https://www.spacebuild.co.in/kashipur/kashipur-architectural-design",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Kashipur Architectural Design",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Kashipur Architectural Design – Styles, Trends & Vastu Planning | Space Build",
    description:
      "Explore modern architectural design in Kashipur — popular styles, vastu integration, climate-smart planning and material choices. Get expert design support from Space Build.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
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