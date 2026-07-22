import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Office Interior Design in Moradabad | Space Build",
  description:
    "Looking for office interior design in Moradabad? Space Build offers modern, functional & affordable office interior solutions tailored to your brand and workspace needs.",
  keywords:
    "office interior design Moradabad, interior designer Moradabad, office interior designer near me, commercial interior design Moradabad, corporate office design, office renovation Moradabad, Space Build interior design, workspace design company, modular office furniture Moradabad, office fit out Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/office-interior-design-moradabad",
  },
  openGraph: {
    title: "Office Interior Design in Moradabad | Space Build",
    description:
      "Looking for office interior design in Moradabad? Space Build offers modern, functional & affordable office interior solutions tailored to your brand and workspace needs.",
    url: "https://www.spacebuild.co.in/office-interior-design-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Office Interior Design in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Office Interior Design in Moradabad | Space Build",
    description:
      "Looking for office interior design in Moradabad? Space Build offers modern, functional & affordable office interior solutions tailored to your brand and workspace needs.",
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