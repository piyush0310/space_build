import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Construction Company in Rampur | Space Build Moradabad",

  description:
    "Looking for a Vastu construction company in Rampur? Space Build Moradabad builds Vastu-compliant homes & offices with proper planning. Visit https://www.spacebuild.co.in/",

  keywords:
    "vastu construction company Rampur, vastu compliant construction Rampur, vastu home builder Rampur, vastu house construction Rampur, vastu consultant Rampur, vastu architect Rampur, vastu based construction company Rampur, vastu shastra construction Rampur, vastu construction near me Rampur, vastu builder Rampur, vastu office construction Rampur, vastu friendly home Rampur, best vastu construction company Rampur, Space Build Moradabad, construction company Moradabad, vastu house design Rampur, vastu compliant office Rampur, vastu construction services Rampur, vastu planning company Rampur, top construction company UP, Rampur mein vastu construction company, vastu ke hisab se ghar banane wali company Rampur, vastu compliant ghar Rampur, vastu shastra construction Rampur, vastu consultant Rampur, vastu ke anusar ghar ka nirman Rampur, vastu wala architect Rampur, best vastu construction company Rampur, Rampur mein vastu builder, Space Build Moradabad vastu construction, vastu ke hisab se office banwana Rampur, ghar banwane wali vastu company Rampur, vastu shastra ke niyam Rampur, Moradabad ki vastu construction company, vastu ke anusar makan design Rampur",

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
    title: "Vastu Construction Company in Rampur | Space Build Moradabad",
    description:
      "Looking for a Vastu construction company in Rampur? Space Build Moradabad builds Vastu-compliant homes and offices with proper planning.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Vastu Construction Company in Rampur - Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vastu Construction Company in Rampur | Space Build Moradabad",
    description:
      "Vastu-compliant home, office, and commercial construction services in Rampur by Space Build Moradabad.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Vastu Construction Company in Rampur | Space Build Moradabad",
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