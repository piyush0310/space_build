import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "3BHK Interior Design in Moradabad | Space Build Moradabad",
  description:
    "3BHK Interior Design in Moradabad by Space Build Moradabad for 3BHK apartments, spacious flat interiors, modular kitchens, joint family homes, and complete renovation services.",
  keywords:
    "3BHK interior design Moradabad, 3BHK interior designer, 3BHK flat interior design, 3BHK home decor Moradabad, Space Build Moradabad, 3 bedroom apartment design, 3BHK modular kitchen, 3BHK renovation Moradabad, spacious flat interior design, joint family home interior",
  alternates: {
    canonical: "https://www.spacebuild.co.in/3bhk-interior-design-moradabad",
  },
  openGraph: {
    title: "3BHK Interior Design in Moradabad | Space Build Moradabad",
    description:
      "3BHK Interior Design in Moradabad by Space Build Moradabad for 3BHK apartments, spacious flat interiors, modular kitchens, joint family homes, and complete renovation services.",
    url: "https://www.spacebuild.co.in/3bhk-interior-design-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - 3BHK Interior Design in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "3BHK Interior Design in Moradabad | Space Build Moradabad",
    description:
      "3BHK Interior Design in Moradabad by Space Build Moradabad for 3BHK apartments, spacious flat interiors, modular kitchens, joint family homes, and complete renovation services.",
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