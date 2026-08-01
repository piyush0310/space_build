import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Modular Kitchen Cost in Moradabad | Space Build",
  description:
    "Wondering about modular kitchen cost in Moradabad? Space Build breaks down the factors that affect pricing, helping homeowners plan a kitchen that fits their budget and needs.",
  keywords:
    "modular kitchen cost Moradabad, modular kitchen price Moradabad, modular kitchen budget Moradabad, kitchen renovation cost Moradabad, Space Build Moradabad, affordable modular kitchen Moradabad, modular kitchen quotation Moradabad, kitchen cabinet price Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/modular-kitchen-cost-moradabad",
  },
  openGraph: {
    title: "Modular Kitchen Cost in Moradabad | Space Build",
    description:
      "Wondering about modular kitchen cost in Moradabad? Space Build breaks down the factors that affect pricing, helping homeowners plan a kitchen that fits their budget and needs.",
    url: "https://www.spacebuild.co.in/modular-kitchen-cost-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Modular Kitchen Cost in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modular Kitchen Cost in Moradabad | Space Build",
    description:
      "Wondering about modular kitchen cost in Moradabad? Space Build breaks down the factors that affect pricing, helping homeowners plan a kitchen that fits their budget and needs.",
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