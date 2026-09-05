import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "2BHK Interior Design in Rampur | Space Build Moradabad",

  description:
    "Planning your 2BHK interior design in Rampur? Space Build Moradabad offers stylish, functional & budget-friendly 2BHK home interiors. Visit https://www.spacebuild.co.in/",

  keywords:
    "2bhk interior design Rampur, 2bhk home interior Rampur, 2bhk flat interior designer Rampur, 2bhk interior design cost Rampur, 2bhk apartment interior Rampur, 2bhk modular kitchen Rampur, 2bhk living room design Rampur, 2bhk bedroom design Rampur, best interior designer for 2bhk Rampur, affordable 2bhk interior Rampur, home interior designer Rampur, 2bhk full home interior Rampur, Space Build Moradabad, interior designer Moradabad, 2bhk flat design ideas Rampur, small flat interior design Rampur, 2bhk turnkey interior Rampur, false ceiling 2bhk Rampur, wardrobe design 2bhk Rampur, budget home interior Rampur, 2bhk interior design Rampur mein, 2bhk ghar ka interior design Rampur, 2bhk flat ka interior Rampur, 2bhk makan interior design Rampur, sasta 2bhk interior designer Rampur, 2bhk interior design ka kharcha Rampur, 2bhk modular kitchen design Rampur, 2bhk bedroom interior Rampur, 2bhk living room ka design Rampur, Rampur mein best home interior designer, Space Build Moradabad 2bhk interior, chhote flat ka interior design Rampur, 2bhk ghar sajane ka idea Rampur, budget mein 2bhk interior Rampur, Moradabad interior designer 2bhk flat",

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
    title: "2BHK Interior Design in Rampur | Space Build Moradabad",
    description:
      "Planning your 2BHK interior design in Rampur? Space Build Moradabad offers stylish, functional, and budget-friendly 2BHK home interiors.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "2BHK Interior Design in Rampur - Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "2BHK Interior Design in Rampur | Space Build Moradabad",
    description:
      "Stylish, functional, and budget-friendly 2BHK home interior design services in Rampur by Space Build Moradabad.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "2BHK Interior Design in Rampur | Space Build Moradabad",
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