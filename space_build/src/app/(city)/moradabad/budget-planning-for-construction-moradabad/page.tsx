import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Budget Planning for Construction in Moradabad | Space Build",
  description:
    "Space Build helps clients with budget planning for construction in Moradabad, covering funding, phasing, contingency, and cash flow management for building projects.",
  keywords:
    "budget planning for construction Moradabad, construction budget planning Moradabad, building budget consultant Moradabad, construction finance planning Moradabad, Space Build Moradabad, construction cash flow planning Moradabad, home construction budget Moradabad, commercial project budget Moradabad, construction contingency planning Moradabad, phased construction budget Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/budget-planning-construction-moradabad",
  },
  openGraph: {
    title: "Budget Planning for Construction in Moradabad | Space Build",
    description:
      "Space Build helps clients with budget planning for construction in Moradabad, covering funding, phasing, contingency, and cash flow management for building projects.",
    url: "https://www.spacebuild.co.in/budget-planning-construction-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Budget Planning for Construction in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Budget Planning for Construction in Moradabad | Space Build",
    description:
      "Space Build helps clients with budget planning for construction in Moradabad, covering funding, phasing, contingency, and cash flow management for building projects.",
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