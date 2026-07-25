import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Vastu for Commercial Shop in Moradabad | Space Build",
  description:
    "Learn Vastu tips for commercial shops in Moradabad with Space Build. Ideal direction, entrance, cash counter placement & remedies for business growth.",
  keywords:
    "vastu for commercial shop Moradabad, shop vastu tips, vastu for business success, Space Build vastu consultation, shop entrance direction vastu, cash counter vastu placement, vastu for retail store, vastu tips for shop Moradabad, vastu remedies for business, shop layout vastu guidelines",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vastu-for-commercial-shop-moradabad",
  },
  openGraph: {
    title: "Vastu for Commercial Shop in Moradabad | Space Build",
    description:
      "Learn Vastu tips for commercial shops in Moradabad with Space Build. Ideal direction, entrance, cash counter placement & remedies for business growth.",
    url: "https://www.spacebuild.co.in/vastu-for-commercial-shop-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu for Commercial Shop in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu for Commercial Shop in Moradabad | Space Build",
    description:
      "Learn Vastu tips for commercial shops in Moradabad with Space Build. Ideal direction, entrance, cash counter placement & remedies for business growth.",
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