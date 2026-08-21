import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Best Modular Kitchen Brand in Moradabad | Space Build",
  description:
    "Space Build is the best modular kitchen brand in Moradabad, offering custom designs, quality materials, expert installation & affordable pricing.",
  keywords:
    "best modular kitchen brand Moradabad, modular kitchen Moradabad, modular kitchen designer Moradabad, modular kitchen manufacturer Moradabad, Space Build Moradabad, kitchen interior design Moradabad, modular kitchen dealers Moradabad, affordable modular kitchen Moradabad, L-shaped modular kitchen, modern kitchen design Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/best-modular-kitchen-brand-moradabad",
  },
  openGraph: {
    title: "Best Modular Kitchen Brand in Moradabad | Space Build",
    description:
      "Space Build is the best modular kitchen brand in Moradabad, offering custom designs, quality materials, expert installation & affordable pricing.",
    url: "https://www.spacebuild.co.in/best-modular-kitchen-brand-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Best Modular Kitchen Brand in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Modular Kitchen Brand in Moradabad | Space Build",
    description:
      "Space Build is the best modular kitchen brand in Moradabad, offering custom designs, quality materials, expert installation & affordable pricing.",
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