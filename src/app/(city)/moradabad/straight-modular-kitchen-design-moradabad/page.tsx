import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Straight Modular Kitchen Design in Moradabad | Space Build – Single-Wall Kitchen Solutions",
  description:
    "Space Build offers straight modular kitchen design solutions in Moradabad, including single-wall kitchen layouts, compact designs and smart storage ideas. Get expert-designed, space-efficient straight modular kitchens for small apartments and homes.",
  keywords:
    "straight modular kitchen Moradabad, single wall kitchen design, straight kitchen layout, small kitchen design ideas, compact modular kitchen Moradabad, Space Build Moradabad, straight kitchen with island, single wall kitchen storage, straight kitchen cost Moradabad, modular kitchen for small apartments",
  alternates: {
    canonical: "https://www.spacebuild.co.in/straight-modular-kitchen-design-moradabad",
  },
  openGraph: {
    title: "Straight Modular Kitchen Design in Moradabad | Space Build – Single-Wall Kitchen Solutions",
    description:
      "Space Build offers straight modular kitchen design solutions in Moradabad, including single-wall kitchen layouts, compact designs and smart storage ideas. Get expert-designed, space-efficient straight modular kitchens for small apartments and homes.",
    url: "https://www.spacebuild.co.in/straight-modular-kitchen-design-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Straight Modular Kitchen Design in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Straight Modular Kitchen Design in Moradabad | Space Build – Single-Wall Kitchen Solutions",
    description:
      "Space Build offers straight modular kitchen design solutions in Moradabad, including single-wall kitchen layouts, compact designs and smart storage ideas. Get expert-designed, space-efficient straight modular kitchens for small apartments and homes.",
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