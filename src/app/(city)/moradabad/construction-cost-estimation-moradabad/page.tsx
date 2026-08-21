import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Construction Cost Estimation in Moradabad | Space Build",
  description:
    "Space Build offers accurate construction cost estimation in Moradabad, helping clients plan budgets for residential, commercial, and interior projects with confidence.",
  keywords:
    "construction cost estimation Moradabad, building cost estimate Moradabad, construction budgeting Moradabad, cost estimation company Moradabad, Space Build Moradabad, house construction cost Moradabad, commercial construction cost Moradabad, quantity surveying Moradabad, construction planning Moradabad, building cost calculator Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/construction-cost-estimation-moradabad",
  },
  openGraph: {
    title: "Construction Cost Estimation in Moradabad | Space Build",
    description:
      "Space Build offers accurate construction cost estimation in Moradabad, helping clients plan budgets for residential, commercial, and interior projects with confidence.",
    url: "https://www.spacebuild.co.in/construction-cost-estimation-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Construction Cost Estimation in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Cost Estimation in Moradabad | Space Build",
    description:
      "Space Build offers accurate construction cost estimation in Moradabad, helping clients plan budgets for residential, commercial, and interior projects with confidence.",
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