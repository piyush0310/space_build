import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Modular Kitchen Price in Moradabad 2026 | Space Build",
  description:
    "Looking for modular kitchen price in Moradabad? Space Build offers affordable, custom modular kitchens with quality materials, expert design & installation.",
  keywords:
    "modular kitchen price in Moradabad, modular kitchen Moradabad, modular kitchen cost, kitchen interior Moradabad, Space Build modular kitchen, L shape modular kitchen price, U shape modular kitchen Moradabad, modern kitchen design Moradabad, kitchen renovation Moradabad, modular kitchen manufacturer Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/modular-kitchen-price-moradabad",
  },
  openGraph: {
    title: "Modular Kitchen Price in Moradabad 2026 | Space Build",
    description:
      "Looking for modular kitchen price in Moradabad? Space Build offers affordable, custom modular kitchens with quality materials, expert design & installation.",
    url: "https://www.spacebuild.co.in/modular-kitchen-price-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Modular Kitchen Price in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modular Kitchen Price in Moradabad 2026 | Space Build",
    description:
      "Looking for modular kitchen price in Moradabad? Space Build offers affordable, custom modular kitchens with quality materials, expert design & installation.",
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