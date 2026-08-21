import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Turnkey Interior Solutions in Moradabad | Space Build",
  description:
    "Turnkey Interior Solutions in Moradabad by Space Build for homes, offices, and commercial spaces. End-to-end interior design, execution, and project management under one roof.",
  keywords:
    "turnkey interior solutions Moradabad, turnkey interior design Moradabad, end to end interior design Moradabad, complete home interior solutions Moradabad, turnkey renovation Moradabad, one stop interior solution Moradabad, turnkey office interiors Moradabad, Space Build Moradabad, full home interior package Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/turnkey-interior-solutions-moradabad",
  },
  openGraph: {
    title: "Turnkey Interior Solutions in Moradabad | Space Build",
    description:
      "Turnkey Interior Solutions in Moradabad by Space Build for homes, offices, and commercial spaces. End-to-end interior design, execution, and project management under one roof.",
    url: "https://www.spacebuild.co.in/turnkey-interior-solutions-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Turnkey Interior Solutions in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Turnkey Interior Solutions in Moradabad | Space Build",
    description:
      "Turnkey Interior Solutions in Moradabad by Space Build for homes, offices, and commercial spaces. End-to-end interior design, execution, and project management under one roof.",
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