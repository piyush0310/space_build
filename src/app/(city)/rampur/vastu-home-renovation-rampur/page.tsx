import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Home Renovation in Rampur | Space Build Moradabad",

  description:
    "Transform your house into a home filled with positivity through expert Vastu home renovation in Rampur. Space Build Moradabad offers customized Vastu-compliant renovation solutions for lasting peace, health, and prosperity. Book your consultation today.",

  keywords:
    "vastu home renovation Rampur, vastu home renovation, home renovation as per vastu Rampur, vastu compliant home design, vastu home makeover Rampur, home renovation company Rampur, vastu home improvement, vastu shastra home renovation, residential vastu renovation, Space Build Moradabad, Rampur mein vastu ghar renovation, ghar ka vastu renovation Rampur, vastu ke anusar ghar sudhar, purane ghar ka vastu theek karna, ghar mein vastu badlav, vastu shastra ke hisab se ghar, ghar ki renovation vastu se, vastu dosh nivaran ghar, ghar ka vastu naksha sudhar, ghar renovation company Moradabad",

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
    title: "Vastu Home Renovation in Rampur | Space Build Moradabad",
    description:
      "Transform your house into a home filled with positivity through expert Vastu home renovation in Rampur. Space Build Moradabad offers customized Vastu-compliant renovation solutions for lasting peace, health, and prosperity.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Vastu Home Renovation in Rampur - Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vastu Home Renovation in Rampur | Space Build Moradabad",
    description:
      "Transform your house into a home filled with positivity through expert Vastu home renovation in Rampur by Space Build Moradabad.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Vastu Home Renovation in Rampur | Space Build Moradabad",
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