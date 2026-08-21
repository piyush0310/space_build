import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Shop Interior Design in Moradabad | Space Build",
  description:
    "Shop Interior Design in Moradabad by Space Build for retail interior design, showroom interiors, boutique spaces, commercial stores, and shop renovation services.",
  keywords:
    "shop interior design Moradabad, retail interior design Moradabad, showroom interior design Moradabad, commercial interior designer Moradabad, store interior designer Moradabad, boutique interior design Moradabad, shop renovation Moradabad, Space Build Moradabad, retail store design company Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/shop-interior-design-moradabad",
  },
  openGraph: {
    title: "Shop Interior Design in Moradabad | Space Build",
    description:
      "Shop Interior Design in Moradabad by Space Build for retail interior design, showroom interiors, boutique spaces, commercial stores, and shop renovation services.",
    url: "https://www.spacebuild.co.in/shop-interior-design-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Shop Interior Design in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop Interior Design in Moradabad | Space Build",
    description:
      "Shop Interior Design in Moradabad by Space Build for retail interior design, showroom interiors, boutique spaces, commercial stores, and shop renovation services.",
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