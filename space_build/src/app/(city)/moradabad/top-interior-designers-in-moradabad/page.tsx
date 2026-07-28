import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Top Interior Designers in Moradabad | Space Build Moradabad",
  description:
    "Top Interior Designers in Moradabad by Space Build Moradabad for homes, offices, commercial spaces, modular kitchens, luxury interiors, and turnkey design solutions.",
  keywords:
    "top interior designers in Moradabad, best interior designer Moradabad, interior design company Moradabad, home interior designers Moradabad, office interior designers Moradabad, Space Build Moradabad, residential interior designer, commercial interior designer Moradabad, modular kitchen designer Moradabad, luxury interior design Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/top-interior-designers-in-moradabad",
  },
  openGraph: {
    title: "Top Interior Designers in Moradabad | Space Build Moradabad",
    description:
      "Top Interior Designers in Moradabad by Space Build Moradabad for homes, offices, commercial spaces, modular kitchens, luxury interiors, and turnkey design solutions.",
    url: "https://www.spacebuild.co.in/top-interior-designers-in-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Top Interior Designers in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Interior Designers in Moradabad | Space Build Moradabad",
    description:
      "Top Interior Designers in Moradabad by Space Build Moradabad for homes, offices, commercial spaces, modular kitchens, luxury interiors, and turnkey design solutions.",
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