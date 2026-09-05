import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Interior Design Cost Per Sq Ft in Rampur | Space Build Moradabad",

  description:
    "Wondering about interior design cost per sq ft in Rampur? Space Build Moradabad shares detailed pricing for home & commercial interiors. Visit https://www.spacebuild.co.in/",

  keywords:
    "interior design cost per sq ft Rampur, interior design price Rampur, home interior cost Rampur, office interior cost per sq ft Rampur, interior designer rates Rampur, interior design charges Rampur, cost of interior design Rampur, affordable interior designer Rampur, interior design budget Rampur, modular kitchen cost Rampur, false ceiling cost per sq ft Rampur, flat interior design cost Rampur, 2bhk interior design cost Rampur, 3bhk interior design cost Rampur, commercial interior cost Rampur, Space Build Moradabad, interior designer Moradabad price list, best interior design rates UP, turnkey interior cost Rampur, interior design estimate Rampur, Rampur mein interior design ka kharcha, Rampur interior design price per sq ft, ghar ka interior design cost Rampur, office interior design price Rampur, sasta interior designer Rampur, interior design ka rate Rampur, 2bhk interior design kharcha Rampur, 3bhk flat interior cost Rampur, modular kitchen ka price Rampur, false ceiling ka rate Rampur, Rampur mein sabse sasta interior designer, Space Build Moradabad price list, interior design budget kaise banaye Rampur, ghar sajane ka kharcha Rampur, Moradabad interior designer rate list",

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
    title: "Interior Design Cost Per Sq Ft in Rampur | Space Build Moradabad",
    description:
      "Get a clear idea of interior design cost per sq ft in Rampur for homes, offices, and commercial spaces from Space Build Moradabad.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Interior Design Cost Per Sq Ft in Rampur - Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Interior Design Cost Per Sq Ft in Rampur | Space Build Moradabad",
    description:
      "Detailed cost breakdown for interior design per sq ft in Rampur – homes, offices, and commercial spaces by Space Build Moradabad.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Interior Design Cost Per Sq Ft in Rampur | Space Build Moradabad",
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