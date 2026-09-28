import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "House Front Elevation Design in Kashipur | Space Build",
  description:
    "Planning house front elevation design in Kashipur? Space Build offers modern, Vastu-aligned 3D elevations, facade makeovers and expert guidance. Call today.",
  keywords:
    "house front elevation design Kashipur, front elevation design in Kashipur, home elevation design Kashipur, 3D elevation design Kashipur, modern front elevation design, Vastu front elevation design, house facade design, single floor elevation design, duplex house elevation design, villa elevation design, bungalow front design, residential elevation design, exterior house design Kashipur, elevation makeover, luxury house elevation, contemporary elevation design, house exterior design ideas, residential architect near Kashipur, house map designer in Kashipur, interior designer in Kashipur, Vastu consultant in Kashipur, home renovation Kashipur, compound wall and gate design, balcony and facade design, Space Build elevation design",
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/house-front-elevation-design-kashipur",
  },
  openGraph: {
    title: "House Front Elevation Design in Kashipur | Space Build",
    description:
      "Planning house front elevation design in Kashipur? Space Build offers modern, Vastu-aligned 3D elevations, facade makeovers and expert guidance. Call today.",
    url: "https://www.spacebuild.co.in/house-front-elevation-design-kashipur",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - House Front Elevation Design in Kashipur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "House Front Elevation Design in Kashipur | Space Build",
    description:
      "Planning house front elevation design in Kashipur? Space Build offers modern, Vastu-aligned 3D elevations, facade makeovers and expert guidance. Call today.",
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