import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "2BHK Interior Design in Moradabad | Space Build Moradabad",
  description:
    "2BHK Interior Design in Moradabad by Space Build Moradabad for 2BHK apartments, compact homes, modular kitchens, small flat interiors, and complete renovation services.",
  keywords:
    "2BHK interior design Moradabad, 2BHK interior designer, 2BHK flat interior design, 2BHK home decor Moradabad, Space Build Moradabad, small flat interior design, 2 bedroom apartment design, 2BHK modular kitchen, 2BHK renovation Moradabad, compact home interior",
  alternates: {
    canonical: "https://www.spacebuild.co.in/2bhk-interior-design-moradabad",
  },
  openGraph: {
    title: "2BHK Interior Design in Moradabad | Space Build Moradabad",
    description:
      "2BHK Interior Design in Moradabad by Space Build Moradabad for 2BHK apartments, compact homes, modular kitchens, small flat interiors, and complete renovation services.",
    url: "https://www.spacebuild.co.in/2bhk-interior-design-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - 2BHK Interior Design in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "2BHK Interior Design in Moradabad | Space Build Moradabad",
    description:
      "2BHK Interior Design in Moradabad by Space Build Moradabad for 2BHK apartments, compact homes, modular kitchens, small flat interiors, and complete renovation services.",
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
