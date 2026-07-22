import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Consultation Charges in Moradabad | Space Build Transparent Pricing",
  description:
    "Wondering about Vastu consultation charges in Moradabad? Space Build offers transparent, customized pricing for homes, offices & plots with no hidden fees.",
  keywords:
    "vastu consultation charges moradabad, vastu consultant fees, vastu consultation cost, vastu consultation pricing moradabad, affordable vastu consultant, vastu fees for home, vastu fees for office, space build vastu pricing, vastu consultation quote, vastu service charges",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vastu-consultation-charges-moradabad",
  },
  openGraph: {
    title: "Vastu Consultation Charges in Moradabad | Space Build Transparent Pricing",
    description:
      "Wondering about Vastu consultation charges in Moradabad? Space Build offers transparent, customized pricing for homes, offices & plots with no hidden fees.",
    url: "https://www.spacebuild.co.in/vastu-consultation-charges-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu Consultation Charges in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu Consultation Charges in Moradabad | Space Build Transparent Pricing",
    description:
      "Wondering about Vastu consultation charges in Moradabad? Space Build offers transparent, customized pricing for homes, offices & plots with no hidden fees.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },
  icons: {
    icon: "/favicon-v2.ico",
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