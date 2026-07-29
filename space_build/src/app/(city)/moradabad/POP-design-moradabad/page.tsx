import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "POP Design in Moradabad | Space Build – Best False Ceiling & POP Design Services",
  description:
    "POP Design in Moradabad by Space Build – expert false ceiling and plaster of Paris design services for living rooms, bedrooms, kitchens, and offices. Custom POP ceiling ideas, modern designs, and professional installation.",
  keywords:
    "POP design Moradabad, false ceiling design Moradabad, POP false ceiling, plaster of paris design, best POP contractor Moradabad, Space Build Moradabad, living room POP design, bedroom false ceiling design, POP ceiling ideas, modern false ceiling design",
  alternates: {
    canonical: "https://www.spacebuild.co.in/pop-design-moradabad",
  },
  openGraph: {
    title: "POP Design in Moradabad | Space Build – Best False Ceiling & POP Design Services",
    description:
      "POP Design in Moradabad by Space Build – expert false ceiling and plaster of Paris design services for living rooms, bedrooms, kitchens, and offices. Custom POP ceiling ideas, modern designs, and professional installation.",
    url: "https://www.spacebuild.co.in/pop-design-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - POP Design in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "POP Design in Moradabad | Space Build – Best False Ceiling & POP Design Services",
    description:
      "POP Design in Moradabad by Space Build – expert false ceiling and plaster of Paris design services for living rooms, bedrooms, kitchens, and offices. Custom POP ceiling ideas, modern designs, and professional installation.",
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