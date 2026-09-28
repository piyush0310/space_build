import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Best Architect in kashipur | Space Build – Vastu & Interiors",

  description:
    "Looking for the best architect in kashipur? Space Build offers Vastu-aligned design, construction, renovation and interiors. Call +91 9927611780 today.",

  keywords:
    "best architect in kashipur, architect in kashipur, top architect in kashipur, architect in kashipur Moradabad, best architect in Moradabad, Vastu architect in kashipur, Vastu consultant in kashipur, house design in kashipur, home construction in kashipur, interior designer in kashipur, modular kitchen in kashipur, Vastu construction kashipur, Vastu renovation kashipur, residential architect kashipur, commercial architect kashipur, building design services kashipur, architects and interior designers kashipur, Space Build kashipur, Space Build Moradabad, MahaVastu expert Moradabad, project management consultation kashipur, home renovation in kashipur, Vastu compliant house plan, affordable architect in kashipur, pest control services kashipur",

  robots: {
    index: true,
    follow: true,
  },

  authors: [
    {
      name: "Space Build Moradabad",
    },
  ],

  alternates: {
    canonical: "https://www.spacebuild.co.in/",
  },

  openGraph: {
    title: "Best Architect in kashipur | Space Build – Vastu & Interiors",
    description:
      "Looking for the best architect in kashipur? Space Build offers Vastu-aligned design, construction, renovation and interiors. Call +91 9927611780 today.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Best Architect in kashipur - Space Build Vastu and Interior Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Architect in kashipur | Space Build – Vastu & Interiors",
    description:
      "Looking for the best architect in kashipur? Space Build offers Vastu-aligned design, construction, renovation and interiors.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Best Architect in kashipur | Space Build – Vastu & Interiors",
    "geo.placename": "kashipur, Moradabad, Uttar Pradesh",
    "geo.region": "IN-UP",
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