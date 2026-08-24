import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Mosquito Control Services in Moradabad | Space Build Pest Control Experts",
  description:
    "Looking for reliable mosquito control services in Moradabad? Space Build offers safe, effective, and long-lasting mosquito treatment for homes, offices, and commercial spaces. Book a free inspection today.",
  keywords:
    "mosquito control services Moradabad, mosquito control Moradabad, best pest control Moradabad, mosquito fogging Moradabad, anti mosquito treatment Moradabad, mosquito spray services Moradabad, dengue mosquito control Moradabad, malaria control services Moradabad, residential mosquito control Moradabad, commercial mosquito control Moradabad, Space Build Moradabad, pest control company Moradabad, Moradabad mein machar niyantran seva, machar control Moradabad, machar bhagane ki seva Moradabad, ghar ke liye machar spray Moradabad, dengue se bachav Moradabad, malaria machar upchar Moradabad, best machar control company Moradabad, sasti pest control seva Moradabad, machar fogging seva Moradabad, Space Build pest control Moradabad, mosquito control, pest control Moradabad, mosquito fogging, dengue prevention, malaria prevention, mosquito spray, Space Build, home pest control, commercial pest control, Uttar Pradesh pest control",
  authors: [
    {
      name: "Space Build Moradabad",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.spacebuild.co.in/mosquito-control-moradabad",
  },
  openGraph: {
    title:
      "Mosquito Control Services in Moradabad | Space Build Pest Control Experts",
    description:
      "Looking for reliable mosquito control services in Moradabad? Space Build offers safe, effective, and long-lasting mosquito treatment for homes, offices, and commercial spaces. Book a free inspection today.",
    url: "https://www.spacebuild.co.in/mosquito-control-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Mosquito Control Services in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Mosquito Control Services in Moradabad | Space Build Pest Control Experts",
    description:
      "Looking for reliable mosquito control services in Moradabad? Space Build offers safe, effective, and long-lasting mosquito treatment for homes, offices, and commercial spaces. Book a free inspection today.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    language: "English",
    "geo.region": "IN-UP",
    "geo.placename": "Moradabad",
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