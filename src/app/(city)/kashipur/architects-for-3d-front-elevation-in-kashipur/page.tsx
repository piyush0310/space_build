import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Architects for 3D Front Elevation in Moradabad | Space Build",

  description:
    "Looking for expert architects for 3D front elevation in Moradabad? Space Build creates realistic, Vastu-friendly front elevation designs that bring your dream home's exterior to life.",

  keywords:
    "architects for 3D front elevation in Moradabad, 3D front elevation Moradabad, front elevation design Moradabad, best architect in Moradabad, 3D elevation designer Moradabad, house elevation architect Moradabad, modern front elevation Moradabad, Vastu elevation design Moradabad, architect near me Moradabad, residential elevation design Moradabad, front elevation architect near Moradabad, 3D house design Moradabad, elevation design company Moradabad, top architects in Moradabad, affordable elevation design Moradabad, duplex elevation design Moradabad, villa elevation design Moradabad, house design consultant Moradabad, Space Build Moradabad, front elevation rendering Moradabad, custom home elevation Moradabad",

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
    canonical:
      "https://www.spacebuild.co.in/architects-3d-front-elevation-moradabad",
  },

  openGraph: {
    title: "Architects for 3D Front Elevation in Moradabad | Space Build",
    description:
      "Looking for expert architects for 3D front elevation in Moradabad? Space Build creates realistic, Vastu-friendly front elevation designs that bring your dream home's exterior to life.",
    url: "https://www.spacebuild.co.in/architects-3d-front-elevation-moradabad",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Architects for 3D Front Elevation in Moradabad - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Architects for 3D Front Elevation in Moradabad | Space Build",
    description:
      "Space Build creates realistic, Vastu-friendly 3D front elevation designs in Moradabad for homes, duplexes, villas, shops, and commercial properties.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Architects for 3D Front Elevation in Moradabad | Space Build",
    "geo.placename": "Moradabad, Uttar Pradesh",
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