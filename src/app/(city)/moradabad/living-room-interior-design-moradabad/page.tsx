import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Living Room Interior Design in Moradabad | Space Build Moradabad",
  description:
    "Living Room Interior Design in Moradabad by Space Build Moradabad for living room decor, TV unit design, false ceiling design, sofa sets, lighting, and complete renovation services.",
  keywords:
    "living room interior design Moradabad, living room decor Moradabad, TV unit design Moradabad, living room false ceiling design, Space Build Moradabad, living room furniture design, living room lighting design, sofa set design Moradabad, living room renovation, drawing room interior design",
  alternates: {
    canonical: "https://www.spacebuild.co.in/living-room-interior-design-moradabad",
  },
  openGraph: {
    title: "Living Room Interior Design in Moradabad | Space Build Moradabad",
    description:
      "Living Room Interior Design in Moradabad by Space Build Moradabad for living room decor, TV unit design, false ceiling design, sofa sets, lighting, and complete renovation services.",
    url: "https://www.spacebuild.co.in/living-room-interior-design-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Living Room Interior Design in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Living Room Interior Design in Moradabad | Space Build Moradabad",
    description:
      "Living Room Interior Design in Moradabad by Space Build Moradabad for living room decor, TV unit design, false ceiling design, sofa sets, lighting, and complete renovation services.",
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