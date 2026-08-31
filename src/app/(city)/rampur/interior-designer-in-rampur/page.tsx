import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Interior Designer in Rampur | Space Build Rampur",

  description:
    "Looking for a professional interior designer in Rampur? Space Build Rampur offers creative, functional interior design solutions for homes and offices. Visit https://www.spacebuild.co.in/.",

  keywords:
    "Interior designer Rampur, best interior designer Rampur, home interior design Rampur, office interior designer Rampur, interior design company Rampur, residential interior designer, commercial interior designer Rampur, modular kitchen designer Rampur, false ceiling design Rampur, interior decorator near me, Space Build Rampur, affordable interior designer Rampur, interior design services Rampur, रामपुर में इंटीरियर डिजाइनर, बेस्ट इंटीरियर डिजाइनर रामपुर, घर का इंटीरियर डिजाइन रामपुर, ऑफिस इंटीरियर डिजाइनर रामपुर, इंटीरियर डिजाइन कंपनी रामपुर, मॉड्यूलर किचन डिजाइनर रामपुर, फॉल सीलिंग डिजाइन रामपुर, स्पेस बिल्ड रामपुर, किफायती इंटीरियर डिजाइनर रामपुर, Rampur me interior designer, best interior designer Rampur me, ghar ka interior design Rampur, office interior designer Rampur, interior design company Rampur me, modular kitchen designer Rampur, false ceiling design Rampur, interior decorator near me Rampur, Space Build Rampur interior services, affordable interior designer Rampur",

  robots: {
    index: true,
    follow: true,
  },

  authors: [
    {
      name: "Space Build Rampur",
    },
  ],

  alternates: {
    canonical: "https://www.spacebuild.co.in/",
  },

  openGraph: {
    title: "Interior Designer in Rampur | Space Build Rampur",
    description:
      "Creative and functional interior design solutions for homes, offices, and commercial spaces in Rampur by Space Build Rampur.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Rampur",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Interior Designer in Rampur - Space Build Rampur",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Interior Designer in Rampur | Space Build Rampur",
    description:
      "Trusted interior design services in Rampur by Space Build Rampur. Book your consultation today.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Interior Designer in Rampur | Space Build Rampur",
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