import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Interior Design Services in Moradabad | Space Build Moradabad",
  description:
    "Interior Design Services in Moradabad by Space Build Moradabad for homes, offices, commercial spaces, modular kitchens, false ceilings, and turnkey interiors.",
  keywords:
    "interior design services in Moradabad, interior designers in Moradabad, home interior Moradabad, office interior design Moradabad, best interior design company Moradabad, Space Build Moradabad, residential interior design, commercial interior design Moradabad, modular kitchen Moradabad, false ceiling design Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/interior-design-services-in-moradabad",
  },
  openGraph: {
    title: "Interior Design Services in Moradabad | Space Build Moradabad",
    description:
      "Interior Design Services in Moradabad by Space Build Moradabad for homes, offices, commercial spaces, modular kitchens, false ceilings, and turnkey interiors.",
    url: "https://www.spacebuild.co.in/interior-design-services-in-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Interior Design Services in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Services in Moradabad | Space Build Moradabad",
    description:
      "Interior Design Services in Moradabad by Space Build Moradabad for homes, offices, commercial spaces, modular kitchens, false ceilings, and turnkey interiors.",
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