import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Office Interior Design in Rampur | Space Build Moradabad",

  description:
    "Upgrade your workplace with professional office interior design in Rampur. Space Build Moradabad creates functional, brand-focused office spaces. Visit https://www.spacebuild.co.in/.",

  keywords:
    "Office interior design Rampur, office interior designer Rampur, commercial interior design Rampur, corporate office design Rampur, workspace design Rampur, office renovation Rampur, modern office interior Rampur, small office interior design, office cabin design Rampur, coworking space design Rampur, Space Build Moradabad, office fit out Rampur, office furniture and design, रामपुर में ऑफिस इंटीरियर डिजाइन, ऑफिस इंटीरियर डिजाइनर रामपुर, कमर्शियल इंटीरियर डिजाइन रामपुर, कॉर्पोरेट ऑफिस डिजाइन रामपुर, वर्कस्पेस डिजाइन रामपुर, ऑफिस रेनोवेशन रामपुर, मॉडर्न ऑफिस इंटीरियर रामपुर, स्पेस बिल्ड मुरादाबाद, ऑफिस केबिन डिजाइन रामपुर, Rampur me office interior design, office interior designer Rampur, commercial interior design Rampur me, corporate office design Rampur, workspace design Rampur, office renovation Rampur, modern office interior Rampur me, office cabin design Rampur, Space Build Moradabad office design, small office interior design Rampur",

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
    title: "Office Interior Design in Rampur | Space Build Moradabad",
    description:
      "Functional, brand-aligned office interior design for corporate offices, shops, and coworking spaces in Rampur by Space Build Moradabad.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Office Interior Design in Rampur - Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Office Interior Design in Rampur | Space Build Moradabad",
    description:
      "Trusted office interior design services in Rampur by Space Build Moradabad. Book your consultation today.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Office Interior Design in Rampur | Space Build Moradabad",
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