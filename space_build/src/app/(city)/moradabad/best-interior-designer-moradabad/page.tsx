import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Best Interior Designer in Moradabad | Space Build Design Experts",
  description:
    "Searching for the best interior designer in Moradabad? Space Build delivers personalized, high-quality residential & commercial interior design solutions.",
  keywords:
    "best interior designer moradabad, top interior designer moradabad, interior design experts moradabad, best home interior designer, best office interior designer, interior designer near me, space build interior design, trusted interior designer moradabad, luxury interior designer moradabad, affordable interior designer moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/best-interior-designer-moradabad",
  },
  openGraph: {
    title: "Best Interior Designer in Moradabad | Space Build Design Experts",
    description:
      "Searching for the best interior designer in Moradabad? Space Build delivers personalized, high-quality residential & commercial interior design solutions.",
    url: "https://www.spacebuild.co.in/best-interior-designer-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Best Interior Designer in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Interior Designer in Moradabad | Space Build Design Experts",
    description:
      "Searching for the best interior designer in Moradabad? Space Build delivers personalized, high-quality residential & commercial interior design solutions.",
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