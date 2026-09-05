import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Modular Kitchen in Rampur | Space Build Moradabad",

  description:
    "Upgrade your home with a stylish and functional modular kitchen in Rampur by Space Build Moradabad. Explore custom designs, premium finishes, and smart storage solutions tailored to your space and budget. Book a free consultation today.",

  keywords:
    "modular kitchen in Rampur, modular kitchen Rampur, modular kitchen design Rampur, modular kitchen manufacturers Rampur, modular kitchen cost Rampur, best modular kitchen company, modular kitchen interior design, L shaped modular kitchen, modular kitchen cabinets, Space Build Moradabad, Rampur mein modular kitchen, modular kitchen design Rampur, modular kitchen ki keemat Rampur, sasti modular kitchen Rampur, modular kitchen banane wali company, ghar ke liye modular kitchen, modular kitchen interior, L shape modular kitchen design, kitchen renovation Rampur, modular kitchen company Moradabad",

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
    title: "Modular Kitchen in Rampur | Space Build Moradabad",
    description:
      "Upgrade your home with a stylish and functional modular kitchen in Rampur by Space Build Moradabad. Explore custom designs, premium finishes, and smart storage solutions tailored to your space and budget.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Modular Kitchen in Rampur - Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Modular Kitchen in Rampur | Space Build Moradabad",
    description:
      "Upgrade your home with a stylish and functional modular kitchen in Rampur by Space Build Moradabad. Custom designs, premium finishes, and smart storage solutions.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Modular Kitchen in Rampur | Space Build Moradabad",
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