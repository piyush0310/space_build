import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "L-Shape Modular Kitchen in Moradabad | Space Build – Best L-Shaped Kitchen Designs",
  description:
    "Space Build offers the best L-shape modular kitchen designs in Moradabad, including small L-shaped layouts, corner kitchen ideas and L-shape kitchens with islands. Get expert-designed, space-efficient L-shaped kitchen solutions for your home.",
  keywords:
    "L-shape modular kitchen Moradabad, L-shaped kitchen design, L-shape kitchen ideas, modular kitchen designer Moradabad, best L-shaped kitchen layout, Space Build Moradabad, L-shape kitchen with island, small L-shaped kitchen design, corner kitchen design, L-shape kitchen cost Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/l-shape-modular-kitchen-moradabad",
  },
  openGraph: {
    title: "L-Shape Modular Kitchen in Moradabad | Space Build – Best L-Shaped Kitchen Designs",
    description:
      "Space Build offers the best L-shape modular kitchen designs in Moradabad, including small L-shaped layouts, corner kitchen ideas and L-shape kitchens with islands. Get expert-designed, space-efficient L-shaped kitchen solutions for your home.",
    url: "https://www.spacebuild.co.in/l-shape-modular-kitchen-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - L-Shape Modular Kitchen in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "L-Shape Modular Kitchen in Moradabad | Space Build – Best L-Shaped Kitchen Designs",
    description:
      "Space Build offers the best L-shape modular kitchen designs in Moradabad, including small L-shaped layouts, corner kitchen ideas and L-shape kitchens with islands. Get expert-designed, space-efficient L-shaped kitchen solutions for your home.",
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