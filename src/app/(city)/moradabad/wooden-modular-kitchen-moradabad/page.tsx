import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Wooden Modular Kitchen in Moradabad | Space Build",
  description:
    "Explore wooden modular kitchen designs in Moradabad with Space Build. From warm veneer finishes to classic cabinetry, discover timeless wood kitchens built to last.",
  keywords:
    "wooden modular kitchen Moradabad, wood kitchen cabinets Moradabad, solid wood kitchen Moradabad, wooden kitchen design Moradabad, Space Build Moradabad, wood veneer kitchen Moradabad, wooden kitchen price Moradabad, teak wood kitchen Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/wooden-modular-kitchen-moradabad",
  },
  openGraph: {
    title: "Wooden Modular Kitchen in Moradabad | Space Build",
    description:
      "Explore wooden modular kitchen designs in Moradabad with Space Build. From warm veneer finishes to classic cabinetry, discover timeless wood kitchens built to last.",
    url: "https://www.spacebuild.co.in/wooden-modular-kitchen-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Wooden Modular Kitchen in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wooden Modular Kitchen in Moradabad | Space Build",
    description:
      "Explore wooden modular kitchen designs in Moradabad with Space Build. From warm veneer finishes to classic cabinetry, discover timeless wood kitchens built to last.",
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