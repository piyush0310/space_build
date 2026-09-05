import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Modular Kitchen Designer in Rampur | Space Build Moradabad",

  description:
    "Hire an expert modular kitchen designer in Rampur at Space Build Moradabad. Get personalized kitchen designs, 3D visualizations, and end-to-end execution tailored to your space, style, and budget. Book your free design consultation today.",

  keywords:
    "modular kitchen designer Rampur, modular kitchen designer, best kitchen designer Rampur, kitchen interior designer Rampur, modular kitchen design expert, professional kitchen designer, kitchen design consultant Rampur, custom kitchen designer, kitchen designing company, Space Build Moradabad, Rampur mein modular kitchen designer, kitchen designer Rampur, best kitchen design expert Rampur, kitchen interior designer seva, professional kitchen designer Moradabad, kitchen design consultant Rampur, custom kitchen designer seva, kitchen design company Rampur, ghar ke liye kitchen designer, kitchen banane wala designer",

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
    title: "Modular Kitchen Designer in Rampur | Space Build Moradabad",
    description:
      "Hire an expert modular kitchen designer in Rampur at Space Build Moradabad. Get personalized kitchen designs, 3D visualizations, and end-to-end execution tailored to your space, style, and budget.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Modular Kitchen Designer in Rampur - Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Modular Kitchen Designer in Rampur | Space Build Moradabad",
    description:
      "Hire an expert modular kitchen designer in Rampur at Space Build Moradabad. Personalized kitchen designs, 3D visualizations, and end-to-end execution.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Modular Kitchen Designer in Rampur | Space Build Moradabad",
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