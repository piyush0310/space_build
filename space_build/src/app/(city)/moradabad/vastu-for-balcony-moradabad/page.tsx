import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu for Balcony in Moradabad | Space Build",
  description:
    "Learn Vastu tips for balcony design in Moradabad with Space Build. Ideal direction, plants, colors, furniture & remedies for positive home energy.",
  keywords:
    "vastu for balcony Moradabad, balcony vastu tips, vastu for terrace, Space Build vastu consultation, balcony direction as per vastu, vastu plants for balcony, balcony design ideas, vastu tips for home Moradabad, vastu remedies for balcony, terrace vastu guidelines",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vastu-for-balcony-moradabad",
  },
  openGraph: {
    title: "Vastu for Balcony in Moradabad | Space Build",
    description:
      "Learn Vastu tips for balcony design in Moradabad with Space Build. Ideal direction, plants, colors, furniture & remedies for positive home energy.",
    url: "https://www.spacebuild.co.in/vastu-for-balcony-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu for Balcony in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu for Balcony in Moradabad | Space Build",
    description:
      "Learn Vastu tips for balcony design in Moradabad with Space Build. Ideal direction, plants, colors, furniture & remedies for positive home energy.",
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