import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Interior Designer and Architect in Kashipur | Space Build",
  description:
    "Looking for an interior designer and architect in Kashipur? Space Build offers Vastu-based architecture, interiors and modular kitchens under one roof. Call today.",
  keywords:
    "interior designer and architect in Kashipur, interior designer in Kashipur, architect in Kashipur, best interior designer Kashipur, architect and interior designer near me, home interior design Kashipur, residential interior designer, Vastu interior design, Vastu consultant in Kashipur, modular kitchen Kashipur, house design Kashipur, luxury interior design, home renovation Kashipur, turnkey interior solutions, bedroom and living room design, wardrobe and storage design, false ceiling and lighting design, residential architect near Kashipur, house map designer in Kashipur, house front elevation design Kashipur, architectural services cost in Kashipur, project management consultation, villa and bungalow interior, office interior design, Space Build interiors",
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/kashipur/interior-designer-and-architect-in-kashipur",
  },
  openGraph: {
    title: "Interior Designer and Architect in Kashipur | Space Build",
    description:
      "Looking for an interior designer and architect in Kashipur? Space Build offers Vastu-based architecture, interiors and modular kitchens under one roof. Call today.",
    url: "https://www.spacebuild.co.in/kashipur/interior-designer-and-architect-in-kashipur",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Interior Designer and Architect in Kashipur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Designer and Architect in Kashipur | Space Build",
    description:
      "Looking for an interior designer and architect in Kashipur? Space Build offers Vastu-based architecture, interiors and modular kitchens under one roof. Call today.",
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