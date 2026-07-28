import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Restaurant Interior Design in Moradabad | Space Build",
  description:
    "Restaurant Interior Design in Moradabad by Space Build for cafe interior design, restaurant renovation, dhaba and restaurant design, food outlet interiors, and restaurant fit-out services.",
  keywords:
    "restaurant interior design Moradabad, cafe interior design Moradabad, restaurant interior designer Moradabad, restaurant renovation Moradabad, dhaba and restaurant design Moradabad, restaurant fit-out Moradabad, best restaurant interior designer Moradabad, Space Build Moradabad, food outlet interior design Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/restaurant-interior-design-moradabad",
  },
  openGraph: {
    title: "Restaurant Interior Design in Moradabad | Space Build",
    description:
      "Restaurant Interior Design in Moradabad by Space Build for cafe interior design, restaurant renovation, dhaba and restaurant design, food outlet interiors, and restaurant fit-out services.",
    url: "https://www.spacebuild.co.in/restaurant-interior-design-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Restaurant Interior Design in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Interior Design in Moradabad | Space Build",
    description:
      "Restaurant Interior Design in Moradabad by Space Build for cafe interior design, restaurant renovation, dhaba and restaurant design, food outlet interiors, and restaurant fit-out services.",
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