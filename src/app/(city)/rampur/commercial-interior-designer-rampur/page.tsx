import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Commercial Interior Designer in Rampur | Space Build Moradabad",

  description:
    "Looking for the best commercial interior designer in Rampur? Space Build Moradabad offers office, showroom, retail & restaurant interior design solutions. Visit https://www.spacebuild.co.in/",

  keywords:
    "commercial interior designer in Rampur, commercial interior design Rampur, office interior designer Rampur, interior design company Rampur, best interior designer near Rampur, showroom interior design Rampur, retail store interior designer Rampur, restaurant interior designer Rampur, corporate office interior design Rampur, interior designer Moradabad, Space Build Moradabad, commercial interior contractor Rampur, modular office furniture Rampur, false ceiling design Rampur, shop interior designer Rampur, bank interior design Rampur, hospital interior design Rampur, hotel interior designer Rampur, turnkey interior solutions Rampur, top interior design firm UP, Rampur mein commercial interior designer, Rampur ka best interior designer, office interior design Rampur, dukan interior design Rampur, showroom design Rampur, dukaan ka interior Rampur, ghar aur office interior Rampur, Moradabad interior designer company, commercial interior designer Moradabad, Rampur me interior designing company, sasta aur best interior designer Rampur, corporate office design Rampur, restaurant ka interior design Rampur, Space Build Moradabad interior company, professional interior designer Rampur UP, top interior design company Rampur Uttar Pradesh",

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
    title: "Commercial Interior Designer in Rampur | Space Build Moradabad",
    description:
      "Space Build Moradabad – trusted commercial interior designer serving Rampur with office, retail, showroom & restaurant interior design services.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Commercial Interior Designer in Rampur - Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Commercial Interior Designer in Rampur | Space Build Moradabad",
    description:
      "Get premium commercial interior design in Rampur for offices, showrooms, retail stores and restaurants by Space Build Moradabad.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Commercial Interior Designer in Rampur | Space Build Moradabad",
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