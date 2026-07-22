import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Modular Kitchen Designer in Moradabad | Space Build",
  description:
    "Space Build offers expert modular kitchen designer services in Moradabad. Get personalized kitchen designs, 3D visualization & professional execution tailored to your lifestyle.",
  keywords:
    "modular kitchen designer moradabad, kitchen designer moradabad, modular kitchen design services, space build moradabad, interior designer for kitchen, custom kitchen designer moradabad, kitchen design consultant, best kitchen designer moradabad, modular kitchen planning, kitchen interior designer",
  alternates: {
    canonical: "https://www.spacebuild.co.in/modular-kitchen-designer-moradabad",
  },
  openGraph: {
    title: "Modular Kitchen Designer in Moradabad | Space Build",
    description:
      "Space Build offers expert modular kitchen designer services in Moradabad. Get personalized kitchen designs, 3D visualization & professional execution tailored to your lifestyle.",
    url: "https://www.spacebuild.co.in/modular-kitchen-designer-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Modular Kitchen Designer in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modular Kitchen Designer in Moradabad | Space Build",
    description:
      "Space Build offers expert modular kitchen designer services in Moradabad. Get personalized kitchen designs, 3D visualization & professional execution tailored to your lifestyle.",
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