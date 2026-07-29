import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "U-Shape Modular Kitchen in Moradabad | Space Build – Best U-Shaped Kitchen Designs",
  description:
    "Space Build offers the best U-shape modular kitchen designs in Moradabad, including large U-shaped layouts, island extensions and smart storage ideas. Get expert-designed, spacious and efficient U-shaped kitchen solutions for your home.",
  keywords:
    "U-shape modular kitchen Moradabad, U-shaped kitchen design, U-shape kitchen ideas, modular kitchen designer Moradabad, best U-shaped kitchen layout, Space Build Moradabad, U-shape kitchen with island, large U-shaped kitchen design, U-shape kitchen storage, U-shape kitchen cost Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/u-shape-modular-kitchen-moradabad",
  },
  openGraph: {
    title: "U-Shape Modular Kitchen in Moradabad | Space Build – Best U-Shaped Kitchen Designs",
    description:
      "Space Build offers the best U-shape modular kitchen designs in Moradabad, including large U-shaped layouts, island extensions and smart storage ideas. Get expert-designed, spacious and efficient U-shaped kitchen solutions for your home.",
    url: "https://www.spacebuild.co.in/u-shape-modular-kitchen-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - U-Shape Modular Kitchen in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "U-Shape Modular Kitchen in Moradabad | Space Build – Best U-Shaped Kitchen Designs",
    description:
      "Space Build offers the best U-shape modular kitchen designs in Moradabad, including large U-shaped layouts, island extensions and smart storage ideas. Get expert-designed, spacious and efficient U-shaped kitchen solutions for your home.",
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