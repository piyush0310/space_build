import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Best Modular Kitchen Company in Rampur | Space Build",
  description:
    "Looking for the best modular kitchen company in Rampur? Space Build designs premium modular kitchens with smart storage, elegant finishes & expert installation. Book a free consultation today.",
  keywords:
    "best modular kitchen company in Rampur, modular kitchen Rampur, modular kitchen design Rampur, modular kitchen dealers Rampur, modular kitchen interior Rampur, kitchen interior designer Rampur, modular kitchen manufacturer Rampur, L shaped modular kitchen Rampur, U shaped modular kitchen Rampur, straight modular kitchen Rampur, island modular kitchen Rampur, modular kitchen cost Rampur, affordable modular kitchen Rampur, luxury modular kitchen Rampur, modular kitchen installation Rampur, kitchen cabinet designer Rampur, modular kitchen near me, best interior designer Rampur, modular kitchen with Vastu Rampur, custom modular kitchen Rampur, modular kitchen renovation Rampur, small kitchen design Rampur, kitchen designer Moradabad Rampur, modular kitchen showroom Rampur, modular kitchen warranty Rampur, best kitchen contractor Rampur",
  alternates: {
    canonical: "https://www.spacebuild.co.in/rampur/best-modular-kitchen-company-rampur",
  },
  openGraph: {
    title: "Best Modular Kitchen Company in Rampur | Space Build",
    description:
      "Looking for the best modular kitchen company in Rampur? Space Build designs premium modular kitchens with smart storage, elegant finishes & expert installation. Book a free consultation today.",
    url: "https://www.spacebuild.co.in/rampur/best-modular-kitchen-company-rampur",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Best Modular Kitchen Company in Rampur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Modular Kitchen Company in Rampur | Space Build",
    description:
      "Looking for the best modular kitchen company in Rampur? Space Build designs premium modular kitchens with smart storage, elegant finishes & expert installation. Book a free consultation today.",
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