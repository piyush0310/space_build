import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Kitchen Wardrobe Combo in Moradabad | Space Build",
  description:
    "Discover the benefits of a kitchen wardrobe combo in Moradabad with Space Build. Get matching, professionally designed kitchen and wardrobe solutions for your entire home.",
  keywords:
    "kitchen wardrobe combo Moradabad, kitchen and wardrobe package Moradabad, modular kitchen wardrobe Moradabad, home interior combo Moradabad, Space Build Moradabad, wardrobe and kitchen design Moradabad, complete home interior Moradabad, kitchen wardrobe offer Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/kitchen-wardrobe-combo-moradabad",
  },
  openGraph: {
    title: "Kitchen Wardrobe Combo in Moradabad | Space Build",
    description:
      "Discover the benefits of a kitchen wardrobe combo in Moradabad with Space Build. Get matching, professionally designed kitchen and wardrobe solutions for your entire home.",
    url: "https://www.spacebuild.co.in/kitchen-wardrobe-combo-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Kitchen Wardrobe Combo in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kitchen Wardrobe Combo in Moradabad | Space Build",
    description:
      "Discover the benefits of a kitchen wardrobe combo in Moradabad with Space Build. Get matching, professionally designed kitchen and wardrobe solutions for your entire home.",
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