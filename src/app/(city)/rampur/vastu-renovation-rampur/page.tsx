import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Renovation in Rampur | Space Build Moradabad",

  description:
    "Need Vastu renovation in Rampur? Space Build Moradabad corrects Vastu doshas in existing homes & offices without major demolition. Visit https://www.spacebuild.co.in/",

  keywords:
    "vastu renovation Rampur, vastu correction Rampur, vastu dosh remedy Rampur, vastu renovation company Rampur, vastu remedies for home Rampur, vastu correction without demolition Rampur, home renovation vastu Rampur, office renovation vastu Rampur, vastu dosh nivaran Rampur, vastu renovation contractor Rampur, vastu remodeling Rampur, vastu renovation services Rampur, vastu correction expert Rampur, Space Build Moradabad, renovation company Moradabad, vastu renovation ideas Rampur, vastu renovation cost Rampur, vastu fix for old house Rampur, vastu renovation consultant Rampur, best renovation company UP, Rampur mein vastu renovation, vastu dosh ka upay Rampur, ghar ka vastu correction Rampur, purane ghar ka vastu renovation Rampur, vastu dosh nivaran Rampur, bina todphod ke vastu correction Rampur, vastu remedies for ghar Rampur, office ka vastu renovation Rampur, Rampur mein vastu correction company, Space Build Moradabad vastu renovation, ghar ka vastu thik karna Rampur, vastu renovation ka kharcha Rampur, vastu expert Rampur renovation, purane makan ka vastu fix Rampur, Moradabad vastu renovation company",

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
    title: "Vastu Renovation in Rampur | Space Build Moradabad",
    description:
      "Need Vastu renovation in Rampur? Space Build Moradabad corrects Vastu doshas in existing homes & offices without major demolition.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Vastu Renovation in Rampur - Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vastu Renovation in Rampur | Space Build Moradabad",
    description:
      "Vastu renovation services in Rampur by Space Build Moradabad – correct doshas in existing homes & offices without major demolition.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Vastu Renovation in Rampur | Space Build Moradabad",
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