import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Modular Kitchen Design Ideas in Moradabad | Space Build",
  description:
    "Explore the best modular kitchen design ideas in Moradabad by Space Build. Discover layouts, colors, materials & storage solutions for your dream kitchen.",
  keywords:
    "modular kitchen design ideas Moradabad, modular kitchen designs Moradabad, kitchen design ideas Moradabad, Space Build modular kitchen, modern kitchen design Moradabad, L shape kitchen design, U shape kitchen design, small kitchen design ideas, kitchen interior ideas Moradabad, modular kitchen colors and finishes",
  alternates: {
    canonical: "https://www.spacebuild.co.in/modular-kitchen-design-ideas-moradabad",
  },
  openGraph: {
    title: "Modular Kitchen Design Ideas in Moradabad | Space Build",
    description:
      "Explore the best modular kitchen design ideas in Moradabad by Space Build. Discover layouts, colors, materials & storage solutions for your dream kitchen.",
    url: "https://www.spacebuild.co.in/modular-kitchen-design-ideas-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Modular Kitchen Design Ideas in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modular Kitchen Design Ideas in Moradabad | Space Build",
    description:
      "Explore the best modular kitchen design ideas in Moradabad by Space Build. Discover layouts, colors, materials & storage solutions for your dream kitchen.",
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