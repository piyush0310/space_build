import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Modular Kitchen Near Me in Moradabad | Space Build",
  description:
    "Looking for a modular kitchen near you in Moradabad? Space Build offers local modular kitchen design, installation, and renovation services with trusted quality and quick support.",
  keywords:
    "modular kitchen near me Moradabad, modular kitchen Moradabad, modular kitchen dealers near me, modular kitchen showroom Moradabad, modular kitchen designer near me, Space Build Moradabad, local modular kitchen manufacturer, modular kitchen installation Moradabad, kitchen renovation near me, best kitchen interior Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/modular-kitchen-near-me-moradabad",
  },
  openGraph: {
    title: "Modular Kitchen Near Me in Moradabad | Space Build",
    description:
      "Looking for a modular kitchen near you in Moradabad? Space Build offers local modular kitchen design, installation, and renovation services with trusted quality and quick support.",
    url: "https://www.spacebuild.co.in/modular-kitchen-near-me-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Modular Kitchen Near Me in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modular Kitchen Near Me in Moradabad | Space Build",
    description:
      "Looking for a modular kitchen near you in Moradabad? Space Build offers local modular kitchen design, installation, and renovation services with trusted quality and quick support.",
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