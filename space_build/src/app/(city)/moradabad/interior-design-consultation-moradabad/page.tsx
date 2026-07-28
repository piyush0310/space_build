import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Interior Design Consultation in Moradabad | Space Build",
  description:
    "Interior Design Consultation in Moradabad by Space Build for homes, offices, and commercial spaces. Get expert design advice, site visits, and personalized interior planning.",
  keywords:
    "interior design consultation Moradabad, free interior design consultation Moradabad, interior designer consultation Moradabad, home design consultation Moradabad, interior consultation service Moradabad, book interior designer Moradabad, Space Build Moradabad, interior design advice Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/interior-design-consultation-moradabad",
  },
  openGraph: {
    title: "Interior Design Consultation in Moradabad | Space Build",
    description:
      "Interior Design Consultation in Moradabad by Space Build for homes, offices, and commercial spaces. Get expert design advice, site visits, and personalized interior planning.",
    url: "https://www.spacebuild.co.in/interior-design-consultation-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Interior Design Consultation in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Consultation in Moradabad | Space Build",
    description:
      "Interior Design Consultation in Moradabad by Space Build for homes, offices, and commercial spaces. Get expert design advice, site visits, and personalized interior planning.",
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