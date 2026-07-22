import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Pest Control Services in Moradabad | Space Build",
  description:
    "Space Build offers reliable pest control services in Moradabad for homes & businesses, using safe treatments for termites, cockroaches, rodents & more.",
  keywords:
    "pest control services Moradabad, pest control company Moradabad, termite control Moradabad, cockroach control services, rodent control Moradabad, Space Build pest control, residential pest control Moradabad, commercial pest control services, mosquito control services Moradabad, best pest control company Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/pest-control-services-moradabad",
  },
  openGraph: {
    title: "Pest Control Services in Moradabad | Space Build",
    description:
      "Space Build offers reliable pest control services in Moradabad for homes & businesses, using safe treatments for termites, cockroaches, rodents & more.",
    url: "https://www.spacebuild.co.in/pest-control-services-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Pest Control Services in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pest Control Services in Moradabad | Space Build",
    description:
      "Space Build offers reliable pest control services in Moradabad for homes & businesses, using safe treatments for termites, cockroaches, rodents & more.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },
  icons: {
    icon: "/favicon-v2.ico",
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