import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Residential Interior Designer in Moradabad | Space Build",
  description:
    "Space Build is a leading residential interior designer in Moradabad offering personalized home interiors, modular kitchens, wardrobes & full home design solutions.",
  keywords:
    "residential interior designer Moradabad, home interior designer Moradabad, best residential interior design company, home interior design services, modular kitchen designer Moradabad, Space Build home interiors, apartment interior design Moradabad, house interior designer near me, residential interior decor, home renovation Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/residential-interior-designer-moradabad",
  },
  openGraph: {
    title: "Residential Interior Designer in Moradabad | Space Build",
    description:
      "Space Build is a leading residential interior designer in Moradabad offering personalized home interiors, modular kitchens, wardrobes & full home design solutions.",
    url: "https://www.spacebuild.co.in/residential-interior-designer-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Residential Interior Designer in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Residential Interior Designer in Moradabad | Space Build",
    description:
      "Space Build is a leading residential interior designer in Moradabad offering personalized home interiors, modular kitchens, wardrobes & full home design solutions.",
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