import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Modular Kitchen Manufacturer in Moradabad | Space Build – Factory-Made Quality Kitchens",
  description:
    "Space Build is a leading modular kitchen manufacturer in Moradabad, offering factory-made quality kitchens with durable cabinets, shutters and modular furniture. Get expert-designed, precision-built modular kitchens for your home.",
  keywords:
    "modular kitchen manufacturer Moradabad, modular kitchen factory Moradabad, kitchen cabinet manufacturer, modular kitchen manufacturing process, best modular kitchen company Moradabad, Space Build Moradabad, kitchen manufacturing unit, modular furniture manufacturer, kitchen shutter manufacturer, wholesale modular kitchen Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/modular-kitchen-manufacturer-moradabad",
  },
  openGraph: {
    title: "Modular Kitchen Manufacturer in Moradabad | Space Build – Factory-Made Quality Kitchens",
    description:
      "Space Build is a leading modular kitchen manufacturer in Moradabad, offering factory-made quality kitchens with durable cabinets, shutters and modular furniture. Get expert-designed, precision-built modular kitchens for your home.",
    url: "https://www.spacebuild.co.in/modular-kitchen-manufacturer-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Modular Kitchen Manufacturer in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modular Kitchen Manufacturer in Moradabad | Space Build – Factory-Made Quality Kitchens",
    description:
      "Space Build is a leading modular kitchen manufacturer in Moradabad, offering factory-made quality kitchens with durable cabinets, shutters and modular furniture. Get expert-designed, precision-built modular kitchens for your home.",
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