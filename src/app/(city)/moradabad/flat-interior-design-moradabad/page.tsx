import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Flat Interior Design in Moradabad | Space Build Moradabad",
  description:
    "Flat Interior Design in Moradabad by Space Build Moradabad for apartments, 2BHK, 3BHK, compact homes, modular kitchens, and complete flat renovation services.",
  keywords:
    "flat interior design Moradabad, apartment interior design Moradabad, 2BHK interior design Moradabad, 3BHK interior design Moradabad, flat interior designer, Space Build Moradabad, small space interior design, modular kitchen for flats, apartment renovation Moradabad, compact home interior design",
  alternates: {
    canonical: "https://www.spacebuild.co.in/flat-interior-design-moradabad",
  },
  openGraph: {
    title: "Flat Interior Design in Moradabad | Space Build Moradabad",
    description:
      "Flat Interior Design in Moradabad by Space Build Moradabad for apartments, 2BHK, 3BHK, compact homes, modular kitchens, and complete flat renovation services.",
    url: "https://www.spacebuild.co.in/flat-interior-design-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Flat Interior Design in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flat Interior Design in Moradabad | Space Build Moradabad",
    description:
      "Flat Interior Design in Moradabad by Space Build Moradabad for apartments, 2BHK, 3BHK, compact homes, modular kitchens, and complete flat renovation services.",
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