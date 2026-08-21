import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Modular Kitchen Cabinets in Moradabad | Space Build",
  description:
    "Looking for modular kitchen cabinets in Moradabad? Space Build offers custom-designed, high-quality modular kitchen cabinets that combine style, storage, and durability for every home.",
  keywords:
    "modular kitchen cabinets Moradabad, modular kitchen Moradabad, kitchen cabinet design Moradabad, modular kitchen interior Moradabad, Space Build Moradabad, kitchen renovation Moradabad, modular kitchen manufacturers Moradabad, custom kitchen cabinets Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/modular-kitchen-cabinets-moradabad",
  },
  openGraph: {
    title: "Modular Kitchen Cabinets in Moradabad | Space Build",
    description:
      "Looking for modular kitchen cabinets in Moradabad? Space Build offers custom-designed, high-quality modular kitchen cabinets that combine style, storage, and durability for every home.",
    url: "https://www.spacebuild.co.in/modular-kitchen-cabinets-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Modular Kitchen Cabinets in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modular Kitchen Cabinets in Moradabad | Space Build",
    description:
      "Looking for modular kitchen cabinets in Moradabad? Space Build offers custom-designed, high-quality modular kitchen cabinets that combine style, storage, and durability for every home.",
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