import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Affordable Construction Company in Kashipur | Value Engineering Guide 2026",

  description:
    "Find an affordable construction company in Kashipur by learning value engineering, tiered packages, lifetime cost checks and smart questions that cut spending without cutting strength.",

  keywords:
    "affordable construction company Kashipur, value engineering construction, budget package tiers, lifetime building cost, low maintenance materials, cost efficient design, economical building firm, construction savings strategy, package comparison sheet, budget turnkey company, phased construction plan, bulk material purchase, cost per sq ft control, affordable commercial construction, low cost shop building, quality at low price, contractor margin check, construction budget reserve, finishing allowance planning",

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/kashipur/affordable-construction-company-kashipur",
  },
  openGraph: {
    url: "https://www.spacebuild.co.in/kashipur/affordable-construction-company-kashipur",
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