import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Vastu Renovation Services in Rampur | Space Build Moradabad",

  description:
    "Looking for trusted Vastu renovation services in Rampur? Space Build Moradabad offers expert Vastu-compliant home and office renovation solutions that bring harmony, prosperity, and positive energy to your space. Call us today for a free consultation.",

  keywords:
    "vastu renovation services Rampur, vastu renovation Rampur, vastu compliant renovation, vastu home renovation Rampur, vastu office renovation, vastu consultant Rampur, vastu renovation company, home renovation as per vastu, vastu remedies for home, Space Build Moradabad, Rampur mein vastu renovation service, vastu ke anusar ghar renovation, vastu dosh nivaran Rampur, vastu consultant Rampur, ghar ka vastu sahi karna, vastu renovation company Moradabad, purane ghar ka vastu renovation, vastu shastra renovation seva, ghar mein vastu dosh, vastu ke hisab se ghar banwana, vastu renovation, vastu Rampur, home renovation, vastu shastra, interior renovation, vastu remedies, Space Build Moradabad, vastu consultant, office renovation, vastu compliant homes",

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
    title: "Vastu Renovation Services in Rampur | Space Build Moradabad",
    description:
      "Looking for trusted Vastu renovation services in Rampur? Space Build Moradabad offers expert Vastu-compliant home and office renovation solutions that bring harmony, prosperity, and positive energy to your space. Call us today for a free consultation.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Vastu Renovation Services in Rampur - Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vastu Renovation Services in Rampur | Space Build Moradabad",
    description:
      "Looking for trusted Vastu renovation services in Rampur? Space Build Moradabad offers expert Vastu-compliant home and office renovation solutions that bring harmony, prosperity, and positive energy to your space.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Vastu Renovation Services in Rampur | Space Build Moradabad",
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