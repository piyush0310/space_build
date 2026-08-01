import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Modular Kitchen Price Per Sq Ft in Moradabad | Space Build",
  description:
    "Understand modular kitchen price per sq ft in Moradabad with Space Build's detailed breakdown of pricing methods, rate ranges, and factors that affect your final kitchen cost.",
  keywords:
    "modular kitchen price per sq ft Moradabad, modular kitchen rate per square foot Moradabad, kitchen price per sqft Moradabad, modular kitchen cost calculation Moradabad, Space Build Moradabad, kitchen pricing Moradabad, modular kitchen quotation Moradabad, kitchen cabinet rate Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/modular-kitchen-price-per-sq-ft-moradabad",
  },
  openGraph: {
    title: "Modular Kitchen Price Per Sq Ft in Moradabad | Space Build",
    description:
      "Understand modular kitchen price per sq ft in Moradabad with Space Build's detailed breakdown of pricing methods, rate ranges, and factors that affect your final kitchen cost.",
    url: "https://www.spacebuild.co.in/modular-kitchen-price-per-sq-ft-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Modular Kitchen Price Per Sq Ft in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modular Kitchen Price Per Sq Ft in Moradabad | Space Build",
    description:
      "Understand modular kitchen price per sq ft in Moradabad with Space Build's detailed breakdown of pricing methods, rate ranges, and factors that affect your final kitchen cost.",
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