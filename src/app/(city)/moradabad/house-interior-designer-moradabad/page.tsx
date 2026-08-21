import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "House Interior Designer in Moradabad | Space Build Moradabad",
  description:
    "House Interior Designer in Moradabad by Space Build Moradabad for homes, villas, flats, independent houses, modular kitchens, bedrooms, and complete residential interior services.",
  keywords:
    "house interior designer Moradabad, home interior designer Moradabad, residential interior designer Moradabad, house interior design company, Space Build Moradabad, modular kitchen designer, bedroom interior design Moradabad, villa interior designer Moradabad, flat interior designer Moradabad, independent house interior Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/house-interior-designer-moradabad",
  },
  openGraph: {
    title: "House Interior Designer in Moradabad | Space Build Moradabad",
    description:
      "House Interior Designer in Moradabad by Space Build Moradabad for homes, villas, flats, independent houses, modular kitchens, bedrooms, and complete residential interior services.",
    url: "https://www.spacebuild.co.in/house-interior-designer-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - House Interior Designer in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "House Interior Designer in Moradabad | Space Build Moradabad",
    description:
      "House Interior Designer in Moradabad by Space Build Moradabad for homes, villas, flats, independent houses, modular kitchens, bedrooms, and complete residential interior services.",
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