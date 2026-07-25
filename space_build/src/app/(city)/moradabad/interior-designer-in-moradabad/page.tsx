import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Interior Designer in Moradabad | Space Build Interior Design Services",
  description:
    "Looking for a professional interior designer in Moradabad? Space Build offers customized residential & commercial interior design solutions for every budget.",
  keywords:
    "interior designer moradabad, interior design services moradabad, home interior designer, office interior design, modular kitchen designer moradabad, best interior designer moradabad, residential interior design, commercial interior design, space build interior designer, interior design company moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/interior-designer-moradabad",
  },
  openGraph: {
    title: "Interior Designer in Moradabad | Space Build Interior Design Services",
    description:
      "Looking for a professional interior designer in Moradabad? Space Build offers customized residential & commercial interior design solutions for every budget.",
    url: "https://www.spacebuild.co.in/interior-designer-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Interior Designer in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Designer in Moradabad | Space Build Interior Design Services",
    description:
      "Looking for a professional interior designer in Moradabad? Space Build offers customized residential & commercial interior design solutions for every budget.",
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