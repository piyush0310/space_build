import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Luxury Home Interiors in Moradabad | Space Build – Premium Interior Design Solutions",
  description:
    "Luxury Home Interiors in Moradabad by Space Build – premium interior design solutions for luxury villas, high-end homes, bespoke interiors, designer kitchens, and upscale living spaces across Moradabad.",
  keywords:
    "luxury home interiors Moradabad, luxury interior designer Moradabad, premium home design, high-end interior design Moradabad, luxury villa interiors, Space Build Moradabad, designer homes Moradabad, luxury modular kitchen, premium living room design, bespoke interior design",
  alternates: {
    canonical: "https://www.spacebuild.co.in/luxury-home-interiors-moradabad",
  },
  openGraph: {
    title: "Luxury Home Interiors in Moradabad | Space Build – Premium Interior Design Solutions",
    description:
      "Luxury Home Interiors in Moradabad by Space Build – premium interior design solutions for luxury villas, high-end homes, bespoke interiors, designer kitchens, and upscale living spaces across Moradabad.",
    url: "https://www.spacebuild.co.in/luxury-home-interiors-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Luxury Home Interiors in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Home Interiors in Moradabad | Space Build – Premium Interior Design Solutions",
    description:
      "Luxury Home Interiors in Moradabad by Space Build – premium interior design solutions for luxury villas, high-end homes, bespoke interiors, designer kitchens, and upscale living spaces across Moradabad.",
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