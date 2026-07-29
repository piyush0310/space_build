import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Wardrobe Design in Moradabad | Space Build – Custom & Modular Wardrobe Solutions",
  description:
    "Explore custom and modular wardrobe design solutions in Moradabad with Space Build. From sliding wardrobes to walk-in designs, get personalized storage that fits your space and style.",
  keywords:
    "wardrobe design Moradabad, modular wardrobe Moradabad, custom wardrobe design, sliding wardrobe design, walk-in wardrobe Moradabad, Space Build Moradabad, bedroom wardrobe ideas, wardrobe interior design, wooden wardrobe design, best wardrobe designer Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/wardrobe-design-moradabad",
  },
  openGraph: {
    title: "Wardrobe Design in Moradabad | Space Build – Custom & Modular Wardrobe Solutions",
    description:
      "Explore custom and modular wardrobe design solutions in Moradabad with Space Build. From sliding wardrobes to walk-in designs, get personalized storage that fits your space and style.",
    url: "https://www.spacebuild.co.in/wardrobe-design-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Wardrobe Design in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wardrobe Design in Moradabad | Space Build – Custom & Modular Wardrobe Solutions",
    description:
      "Explore custom and modular wardrobe design solutions in Moradabad with Space Build. From sliding wardrobes to walk-in designs, get personalized storage that fits your space and style.",
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