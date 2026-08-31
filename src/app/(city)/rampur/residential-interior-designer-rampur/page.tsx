import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Residential Interior Designer in Rampur | Space Build Moradabad",

  description:
    "Looking for a residential interior designer in Rampur? Space Build Moradabad offers custom home interiors, modular kitchens, bedrooms & living rooms at affordable prices. Visit spacebuild.co.in",

  keywords:
    "residential interior designer Rampur, home interior designer Rampur, house interior design Rampur, Space Build Moradabad, best residential interior company Rampur, modular kitchen designer Rampur, bedroom interior design Rampur, living room interior Rampur, affordable home interior Rampur, apartment interior design Rampur, villa interior designer Rampur, home renovation Rampur, Rampur me residential interior designer, ghar ka interior design karne wali company Rampur, Rampur me home interior designer, ghar sajane wali company Rampur, Space Build Moradabad residential interior, Rampur me sasta ghar interior, bedroom design Rampur me, drawing room interior design Rampur, flat interior design Rampur, ghar renovation Rampur me, makan ka interior Rampur, Rampur ke ghar ke liye best designer",

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
    title: "Residential Interior Designer in Rampur | Space Build Moradabad",
    description:
      "Custom residential interior design services in Rampur. Modular kitchens, bedrooms, living rooms & complete home interiors at affordable prices.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Residential Interior Designer in Rampur - Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Residential Interior Designer in Rampur | Space Build Moradabad",
    description:
      "Space Build Moradabad - Custom home interiors, modular kitchens, bedrooms & living rooms in Rampur at affordable prices.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Residential Interior Designer in Rampur | Space Build Moradabad",
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