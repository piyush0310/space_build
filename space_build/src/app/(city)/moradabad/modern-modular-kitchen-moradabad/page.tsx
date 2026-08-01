import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Modern Modular Kitchen Designs in Moradabad | Space Build",
  description:
    "Explore modern modular kitchen designs in Moradabad with Space Build. Sleek finishes, smart storage, and contemporary layouts crafted to suit today's lifestyles.",
  keywords:
    "modern modular kitchen Moradabad, modern kitchen design Moradabad, contemporary kitchen Moradabad, modular kitchen trends Moradabad, Space Build Moradabad, sleek kitchen design Moradabad, modern kitchen cabinets Moradabad, minimalist kitchen Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/modern-modular-kitchen-moradabad",
  },
  openGraph: {
    title: "Modern Modular Kitchen Designs in Moradabad | Space Build",
    description:
      "Explore modern modular kitchen designs in Moradabad with Space Build. Sleek finishes, smart storage, and contemporary layouts crafted to suit today's lifestyles.",
    url: "https://www.spacebuild.co.in/modern-modular-kitchen-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Modern Modular Kitchen Designs in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Modular Kitchen Designs in Moradabad | Space Build",
    description:
      "Explore modern modular kitchen designs in Moradabad with Space Build. Sleek finishes, smart storage, and contemporary layouts crafted to suit today's lifestyles.",
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