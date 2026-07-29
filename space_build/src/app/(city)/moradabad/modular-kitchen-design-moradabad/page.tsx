import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Modular Kitchen Design in Moradabad | Space Build – Custom Modular Kitchen Solutions",
  description:
    "Space Build offers custom modular kitchen design solutions in Moradabad, including L-shaped, U-shaped and modern kitchen layouts. Get expert kitchen interior design, cabinet ideas and cost-effective modular kitchen options.",
  keywords:
    "modular kitchen design Moradabad, modular kitchen Moradabad, L-shaped kitchen design, U-shaped kitchen design, best modular kitchen designer Moradabad, Space Build Moradabad, kitchen interior design ideas, modular kitchen cost Moradabad, kitchen cabinet design, modern kitchen design ideas",
  alternates: {
    canonical: "https://www.spacebuild.co.in/modular-kitchen-design-moradabad",
  },
  openGraph: {
    title: "Modular Kitchen Design in Moradabad | Space Build – Custom Modular Kitchen Solutions",
    description:
      "Space Build offers custom modular kitchen design solutions in Moradabad, including L-shaped, U-shaped and modern kitchen layouts. Get expert kitchen interior design, cabinet ideas and cost-effective modular kitchen options.",
    url: "https://www.spacebuild.co.in/modular-kitchen-design-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Modular Kitchen Design in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modular Kitchen Design in Moradabad | Space Build – Custom Modular Kitchen Solutions",
    description:
      "Space Build offers custom modular kitchen design solutions in Moradabad, including L-shaped, U-shaped and modern kitchen layouts. Get expert kitchen interior design, cabinet ideas and cost-effective modular kitchen options.",
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