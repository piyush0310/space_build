import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Luxury Home Interiors in Rampur | Space Build Moradabad",

  description:
    "Looking for luxury home interiors in Rampur? Space Build Moradabad creates premium, elegant & personalized luxury home designs. Visit https://www.spacebuild.co.in/",

  keywords:
    "luxury home interiors Rampur, luxury interior designer Rampur, premium interior design Rampur, high end interior design Rampur, luxury villa interior Rampur, luxury home decor Rampur, designer home interiors Rampur, premium home interior designer Rampur, luxury interior design company Rampur, luxury modular kitchen Rampur, luxury living room design Rampur, luxury bedroom design Rampur, exclusive interior designer Rampur, Space Build Moradabad, interior designer Moradabad, best luxury interior designer UP, custom luxury interiors Rampur, elegant home interior design Rampur, luxury false ceiling design Rampur, premium interior design packages Rampur, Rampur mein luxury home interior, luxury interior designer Rampur, premium ghar ka interior design Rampur, high end interior design Rampur, luxury villa ka interior Rampur, best luxury interior designer Rampur, luxury modular kitchen Rampur, luxury living room design Rampur, Rampur mein designer ghar ka interior, Space Build Moradabad luxury interior, mehenga aur premium interior design Rampur, luxury bedroom interior Rampur, exclusive interior designer Rampur, sabse acha luxury interior designer Rampur, Moradabad premium interior design company",

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
    title: "Luxury Home Interiors in Rampur | Space Build Moradabad",
    description:
      "Looking for luxury home interiors in Rampur? Space Build Moradabad creates premium, elegant, and personalized luxury home designs.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury Home Interiors in Rampur - Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Luxury Home Interiors in Rampur | Space Build Moradabad",
    description:
      "Premium, elegant, and personalized luxury home interior design services in Rampur by Space Build Moradabad.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Luxury Home Interiors in Rampur | Space Build Moradabad",
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