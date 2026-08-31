import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Best Interior Designer in Rampur | Space Build Moradabad",

  description:
    "Searching for the best interior designer in Rampur? Space Build Moradabad delivers award-worthy design, quality execution, and personalised service. Visit https://www.spacebuild.co.in/.",

  keywords:
    "Best interior designer Rampur, top interior designer Rampur, best interior design company Rampur, leading interior designer Moradabad, top rated interior designer near me, best home interior designer Rampur, best office interior designer Rampur, premium interior designer Rampur, best modular kitchen designer Rampur, Space Build Moradabad, trusted interior design firm Rampur, best interior decorator Rampur, रामपुर में सबसे अच्छा इंटीरियर डिजाइनर, टॉप इंटीरियर डिजाइनर रामपुर, बेस्ट इंटीरियर डिजाइन कंपनी रामपुर, प्रमुख इंटीरियर डिजाइनर मुरादाबाद, बेस्ट होम इंटीरियर डिजाइनर रामपुर, बेस्ट ऑफिस इंटीरियर डिजाइनर रामपुर, स्पेस बिल्ड मुरादाबाद, भरोसेमंद इंटीरियर डिजाइन फर्म रामपुर, Rampur me sabse achha interior designer, top interior designer Rampur, best interior design company Rampur me, leading interior designer Moradabad, top rated interior designer near me Rampur, best home interior designer Rampur, best office interior designer Rampur, Space Build Moradabad best designer, trusted interior design firm Rampur",

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
    title: "Best Interior Designer in Rampur | Space Build Moradabad",
    description:
      "Space Build Moradabad is recognised among the top interior designers serving Rampur, offering creative and high-quality design solutions.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Best Interior Designer in Rampur - Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Interior Designer in Rampur | Space Build Moradabad",
    description:
      "Discover why Space Build Moradabad is considered among the best interior designers in Rampur. Book your consultation today.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Best Interior Designer in Rampur | Space Build Moradabad",
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