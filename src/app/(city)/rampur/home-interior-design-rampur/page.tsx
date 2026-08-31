import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Home Interior Design in Rampur | Space Build Rampur",

  description:
    "Transform your house into a dream home with expert home interior design in Rampur. Space Build Rampur offers personalised, budget-friendly design solutions. Visit https://www.spacebuild.co.in/.",

  keywords:
    "Home interior design Rampur, house interior design Rampur, home interior designer near me, residential interior design Rampur, home decor Rampur, bedroom interior design Rampur, living room design Rampur, modular kitchen home interior, home renovation Rampur, budget home interior design, Space Build Rampur, home interior design ideas, complete home interior packages, रामपुर में होम इंटीरियर डिजाइन, घर का इंटीरियर डिजाइन रामपुर, होम इंटीरियर डिजाइनर नियर मी, रेजिडेंशियल इंटीरियर डिजाइन रामपुर, होम डेकोर रामपुर, बेडरूम इंटीरियर डिजाइन रामपुर, लिविंग रूम डिजाइन रामपुर, घर रेनोवेशन रामपुर, स्पेस बिल्ड रामपुर, बजट होम इंटीरियर डिजाइन, Rampur me home interior design, ghar ka interior design Rampur, home interior designer near me Rampur, residential interior design Rampur me, home decor ideas Rampur, bedroom interior design Rampur, living room design Rampur, ghar renovation Rampur, Space Build Rampur home interior, budget home interior design Rampur",

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
    title: "Home Interior Design in Rampur | Space Build Rampur",
    description:
      "Personalised home interior design solutions for houses, flats, and apartments in Rampur by Space Build Rampur.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Rampur",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Home Interior Design in Rampur - Space Build Rampur",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Home Interior Design in Rampur | Space Build Rampur",
    description:
      "Trusted home interior design services in Rampur by Space Build Rampur. Book your consultation today.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Home Interior Design in Rampur | Space Build Rampur",
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