import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Villa Interior Design in Moradabad | Space Build",
  description:
    "Villa Interior Design in Moradabad by Space Build for luxury villa interiors, farmhouse interiors, independent houses, villa renovation, and premium home interiors.",
  keywords:
    "villa interior design Moradabad, luxury villa interiors Moradabad, villa interior designer Moradabad, farmhouse interior design Moradabad, independent house interior Moradabad, best interior designer for villas Moradabad, villa renovation Moradabad, Space Build Moradabad, premium home interiors Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/villa-interior-design-moradabad",
  },
  openGraph: {
    title: "Villa Interior Design in Moradabad | Space Build",
    description:
      "Villa Interior Design in Moradabad by Space Build for luxury villa interiors, farmhouse interiors, independent houses, villa renovation, and premium home interiors.",
    url: "https://www.spacebuild.co.in/villa-interior-design-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Villa Interior Design in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Villa Interior Design in Moradabad | Space Build",
    description:
      "Villa Interior Design in Moradabad by Space Build for luxury villa interiors, farmhouse interiors, independent houses, villa renovation, and premium home interiors.",
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