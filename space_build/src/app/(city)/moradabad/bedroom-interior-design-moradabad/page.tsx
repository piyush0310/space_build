import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Bedroom Interior Design in Moradabad | Space Build Moradabad",
  description:
    "Bedroom Interior Design in Moradabad by Space Build Moradabad for master bedrooms, kids bedrooms, wardrobe design, bedroom furniture, and complete bedroom renovation services.",
  keywords:
    "bedroom interior design Moradabad, master bedroom design Moradabad, wardrobe design Moradabad, kids bedroom interior, Space Build Moradabad, bedroom furniture design, bedroom false ceiling design, bedroom lighting design Moradabad, bedroom renovation Moradabad, bedroom decor ideas",
  alternates: {
    canonical: "https://www.spacebuild.co.in/bedroom-interior-design-moradabad",
  },
  openGraph: {
    title: "Bedroom Interior Design in Moradabad | Space Build Moradabad",
    description:
      "Bedroom Interior Design in Moradabad by Space Build Moradabad for master bedrooms, kids bedrooms, wardrobe design, bedroom furniture, and complete bedroom renovation services.",
    url: "https://www.spacebuild.co.in/bedroom-interior-design-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Bedroom Interior Design in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bedroom Interior Design in Moradabad | Space Build Moradabad",
    description:
      "Bedroom Interior Design in Moradabad by Space Build Moradabad for master bedrooms, kids bedrooms, wardrobe design, bedroom furniture, and complete bedroom renovation services.",
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