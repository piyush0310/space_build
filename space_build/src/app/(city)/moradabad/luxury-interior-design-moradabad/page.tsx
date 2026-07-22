import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Luxury Interior Design in Moradabad | Space Build",
  description:
    "Space Build offers premium luxury interior design in Moradabad for homes, villas & offices, blending elegant aesthetics, high-end materials & personalized design solutions.",
  keywords:
    "luxury interior design Moradabad, luxury interior designer Moradabad, premium interior design company, high end home interiors, villa interior design Moradabad, Space Build luxury interiors, designer homes Moradabad, luxury office interiors, best luxury interior designer near me, premium interior decor Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/luxury-interior-design-moradabad",
  },
  openGraph: {
    title: "Luxury Interior Design in Moradabad | Space Build",
    description:
      "Space Build offers premium luxury interior design in Moradabad for homes, villas & offices, blending elegant aesthetics, high-end materials & personalized design solutions.",
    url: "https://www.spacebuild.co.in/luxury-interior-design-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Luxury Interior Design in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Interior Design in Moradabad | Space Build",
    description:
      "Space Build offers premium luxury interior design in Moradabad for homes, villas & offices, blending elegant aesthetics, high-end materials & personalized design solutions.",
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