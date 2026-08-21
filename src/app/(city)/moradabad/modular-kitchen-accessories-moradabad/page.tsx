import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Modular Kitchen Accessories in Moradabad | Space Build",
  description:
    "Discover modular kitchen accessories in Moradabad with Space Build. From pull-out baskets to corner units, explore the fittings that make everyday cooking easier.",
  keywords:
    "modular kitchen accessories Moradabad, kitchen storage accessories Moradabad, kitchen hardware Moradabad, modular kitchen fittings Moradabad, Space Build Moradabad, pull out baskets Moradabad, kitchen organisers Moradabad, kitchen cabinet accessories Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/modular-kitchen-accessories-moradabad",
  },
  openGraph: {
    title: "Modular Kitchen Accessories in Moradabad | Space Build",
    description:
      "Discover modular kitchen accessories in Moradabad with Space Build. From pull-out baskets to corner units, explore the fittings that make everyday cooking easier.",
    url: "https://www.spacebuild.co.in/modular-kitchen-accessories-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Modular Kitchen Accessories in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modular Kitchen Accessories in Moradabad | Space Build",
    description:
      "Discover modular kitchen accessories in Moradabad with Space Build. From pull-out baskets to corner units, explore the fittings that make everyday cooking easier.",
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
