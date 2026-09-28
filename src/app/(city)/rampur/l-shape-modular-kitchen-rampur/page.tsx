import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "L Shape Modular Kitchen Rampur | Custom Kitchen Solutions",

  description:
    "Transform your home with a premium L shape modular kitchen in Rampur. Space-efficient layouts, quality finishes & expert installation. Get a free quote!",

  keywords:
    "l shape modular kitchen rampur, modular kitchen rampur, l shaped kitchen design ideas, kitchen design rampur, top kitchen studios rampur, kitchen interiors rampur, l shape kitchen price rampur, l shape kitchen layout plan, modular kitchen fabricators rampur, kitchen makeover rampur, running foot kitchen pricing, kitchen cabinet design rampur, l shape kitchen inspiration, modular kitchen gallery rampur, tailored modular kitchen rampur, kitchen designer near rampur, HDHMR kitchen boards, laminate shutter kitchen, quartz countertop kitchen rampur, small kitchen layout ideas",

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
    canonical: "https://www.spacebuild.co.in/rampur/l-shape-modular-kitchen-rampur",
  },

  openGraph: {
    title: "L Shape Modular Kitchen Rampur | Custom Kitchen Solutions",
    description:
      "Transform your home with a premium L shape modular kitchen in Rampur. Space-efficient layouts, quality finishes & expert installation. Get a free quote!",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "L Shape Modular Kitchen Rampur - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "L Shape Modular Kitchen Rampur | Custom Kitchen Solutions",
    description:
      "Transform your home with a premium L shape modular kitchen in Rampur. Space-efficient layouts, quality finishes & expert installation. Get a free quote!",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "L Shape Modular Kitchen Rampur | Custom Kitchen Solutions",
    "geo.placename": "Rampur, Uttar Pradesh",
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