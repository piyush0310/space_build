import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "False Ceiling Design in Rampur | Space Build Moradabad",

  description:
    "Looking for false ceiling design in Rampur? Space Build Moradabad offers POP, gypsum & PVC false ceiling designs for homes & offices. Visit https://www.spacebuild.co.in/",

  keywords:
    "false ceiling design Rampur, false ceiling contractor Rampur, POP false ceiling Rampur, gypsum false ceiling Rampur, false ceiling for living room Rampur, false ceiling for bedroom Rampur, false ceiling cost Rampur, false ceiling designer Rampur, PVC false ceiling Rampur, office false ceiling design Rampur, false ceiling with lighting Rampur, best false ceiling company Rampur, false ceiling design ideas Rampur, false ceiling installation Rampur, Space Build Moradabad, interior designer Moradabad, false ceiling near me Rampur, modern false ceiling design Rampur, false ceiling for hall Rampur, commercial false ceiling Rampur, Rampur mein false ceiling design, false ceiling ka design Rampur, false ceiling ka rate Rampur, POP false ceiling Rampur, gypsum false ceiling design Rampur, living room false ceiling Rampur, bedroom false ceiling design Rampur, false ceiling ka kharcha Rampur, best false ceiling designer Rampur, Rampur mein false ceiling company, Space Build Moradabad false ceiling, hall ka false ceiling design Rampur, office ka false ceiling Rampur, false ceiling lighting design Rampur, sasta false ceiling Rampur",

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
    title: "False Ceiling Design in Rampur | Space Build Moradabad",
    description:
      "Looking for false ceiling design in Rampur? Space Build Moradabad offers POP, gypsum, and PVC false ceiling designs for homes and offices.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "False Ceiling Design in Rampur - Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "False Ceiling Design in Rampur | Space Build Moradabad",
    description:
      "POP, gypsum, and PVC false ceiling design services for homes, offices, showrooms, and commercial spaces in Rampur.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "False Ceiling Design in Rampur | Space Build Moradabad",
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