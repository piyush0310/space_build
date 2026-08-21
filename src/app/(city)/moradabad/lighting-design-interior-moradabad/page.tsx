import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Lighting Design for Interiors in Moradabad | Space Build – Expert Interior Lighting Solutions",
  description:
    "Transform your space with expert lighting design solutions in Moradabad. From ambient to task and accent lighting, Space Build creates layered, energy-efficient designs for homes and offices.",
  keywords:
    "lighting design Moradabad, interior lighting design, home lighting ideas, false ceiling lighting, LED lighting design Moradabad, Space Build Moradabad, living room lighting design, bedroom lighting ideas, ambient lighting design, office lighting solutions Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/lighting-design-interior-moradabad",
  },
  openGraph: {
    title: "Lighting Design for Interiors in Moradabad | Space Build – Expert Interior Lighting Solutions",
    description:
      "Transform your space with expert lighting design solutions in Moradabad. From ambient to task and accent lighting, Space Build creates layered, energy-efficient designs for homes and offices.",
    url: "https://www.spacebuild.co.in/lighting-design-interior-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Lighting Design for Interiors in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lighting Design for Interiors in Moradabad | Space Build – Expert Interior Lighting Solutions",
    description:
      "Transform your space with expert lighting design solutions in Moradabad. From ambient to task and accent lighting, Space Build creates layered, energy-efficient designs for homes and offices.",
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