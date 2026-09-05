import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Correction Services in Rampur | Space Build Moradabad",

  description:
    "Facing recurring problems at home or work? Space Build Moradabad offers expert Vastu correction services in Rampur to identify and resolve Vastu doshas, restoring balance, health, and prosperity to your space. Schedule a consultation today.",

  keywords:
    "vastu correction services Rampur, vastu correction Rampur, vastu dosh correction, vastu remedies Rampur, vastu consultant services, vastu correction company, vastu dosh nivaran services, vastu shastra correction, home vastu correction, Space Build Moradabad, Rampur mein vastu correction seva, vastu dosh sudhar Rampur, ghar ka vastu dosh theek karna, vastu correction company Moradabad, vastu upay Rampur, vastu dosh nivaran seva, vastu sahi karne ki seva, ghar office ka vastu correction, vastu shastra sudhar, vastu consultant Rampur",

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
    title: "Vastu Correction Services in Rampur | Space Build Moradabad",
    description:
      "Facing recurring problems at home or work? Space Build Moradabad offers expert Vastu correction services in Rampur to identify and resolve Vastu doshas, restoring balance, health, and prosperity to your space.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Vastu Correction Services in Rampur - Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vastu Correction Services in Rampur | Space Build Moradabad",
    description:
      "Expert Vastu correction services in Rampur by Space Build Moradabad to identify and resolve Vastu doshas, restoring balance, health, and prosperity to your space.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Vastu Correction Services in Rampur | Space Build Moradabad",
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