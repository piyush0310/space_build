import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Best Modular Kitchen Company in Moradabad | Space Build",
  description:
    "Space Build is the best modular kitchen company in Moradabad, offering custom designs, quality materials, expert installation & affordable pricing.",
  keywords:
    "best modular kitchen company in Moradabad, modular kitchen company Moradabad, modular kitchen manufacturer Moradabad, Space Build modular kitchen, top kitchen interior company Moradabad, modular kitchen designer Moradabad, kitchen renovation company Moradabad, custom modular kitchen Moradabad, modular kitchen dealer Moradabad, interior design company Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/best-modular-kitchen-company-moradabad",
  },
  openGraph: {
    title: "Best Modular Kitchen Company in Moradabad | Space Build",
    description:
      "Space Build is the best modular kitchen company in Moradabad, offering custom designs, quality materials, expert installation & affordable pricing.",
    url: "https://www.spacebuild.co.in/best-modular-kitchen-company-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Best Modular Kitchen Company in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Modular Kitchen Company in Moradabad | Space Build",
    description:
      "Space Build is the best modular kitchen company in Moradabad, offering custom designs, quality materials, expert installation & affordable pricing.",
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