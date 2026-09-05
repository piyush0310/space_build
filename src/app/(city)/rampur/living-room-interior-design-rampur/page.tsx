import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Living Room Interior Design in Rampur | Space Build Moradabad",

  description:
    "Looking for living room interior design in Rampur? Space Build Moradabad creates elegant, modern & functional living room designs. Visit https://www.spacebuild.co.in/",

  keywords:
    "living room interior design Rampur, living room design Rampur, drawing room interior design Rampur, hall interior design Rampur, living room decor Rampur, TV unit design Rampur, living room false ceiling Rampur, modern living room design Rampur, living room designer Rampur, living room furniture Rampur, best interior designer for living room Rampur, living room interior cost Rampur, home interior designer Rampur, Space Build Moradabad, interior designer Moradabad, living room lighting design Rampur, small living room design Rampur, living room wall design Rampur, sofa design Rampur, living room makeover Rampur, Rampur mein living room interior design, drawing room ka design Rampur, hall ka interior design Rampur, living room ki decoration Rampur, TV unit design Rampur, living room ka false ceiling Rampur, best living room designer Rampur, living room interior ka kharcha Rampur, Rampur mein ghar ka living room design, Space Build Moradabad living room interior, chhote hall ka design Rampur, living room wall design Rampur, sofa aur furniture design Rampur, ghar ka hall sajane ka idea Rampur, Moradabad interior designer living room",

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
    title: "Living Room Interior Design in Rampur | Space Build Moradabad",
    description:
      "Looking for living room interior design in Rampur? Space Build Moradabad creates elegant, modern, and functional living room designs.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Living Room Interior Design in Rampur - Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Living Room Interior Design in Rampur | Space Build Moradabad",
    description:
      "Elegant, modern, and functional living room interior design services in Rampur by Space Build Moradabad.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Living Room Interior Design in Rampur | Space Build Moradabad",
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