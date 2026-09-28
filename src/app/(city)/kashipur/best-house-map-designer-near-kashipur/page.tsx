import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Best House Map Designer Near Kashipur | Space Build",

  description:
    "Searching for the best house map designer near Kashipur? Space Build offers accurate, Vastu-friendly house map designs with expert consultation, affordable pricing, and quick delivery.",

  keywords:
    "best house map designer near Kashipur, house map designer near me, house map design Kashipur, home map designer Kashipur, house naksha designer Kashipur, Vastu house map Kashipur, best naksha designer near me, house map design company Kashipur, residential map designer Kashipur, affordable house map designer Kashipur, house plan and map Kashipur, building map designer Kashipur, house naksha near Kashipur, map design for house construction, 2D house map Kashipur, custom house map designer, Vastu compliant house map, top house map designer Kashipur, Space Build Kashipur, house map consultant near me, front elevation and map designer Kashipur",

  robots: {
    index: true,
    follow: true,
  },

  authors: [
    {
      name: "Space Build",
    },
  ],

  alternates: {
    canonical: "https://www.spacebuild.co.in/best-house-map-designer-kashipur",
  },

  openGraph: {
    title: "Best House Map Designer Near Kashipur | Space Build",
    description:
      "Searching for the best house map designer near Kashipur? Space Build offers accurate, Vastu-friendly house map designs with expert consultation, affordable pricing, and quick delivery.",
    url: "https://www.spacebuild.co.in/best-house-map-designer-kashipur",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Best House Map Designer Near Kashipur - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best House Map Designer Near Kashipur | Space Build",
    description:
      "Space Build offers accurate, Vastu-friendly, affordable house map and naksha design services near Kashipur with expert consultation and quick delivery.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Best House Map Designer Near Kashipur | Space Build",
    "geo.placename": "Kashipur, Uttarakhand",
    "geo.region": "IN-UK",
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