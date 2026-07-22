import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Vastu Based Construction in Moradabad | Space Build",
  description:
    "Space Build offers expert Vastu based construction in Moradabad for homes, offices & commercial spaces. Get durable structures designed with positive energy, proper direction & modern planning.",
  keywords:
    "vastu based construction moradabad, vastu construction moradabad, vastu house construction, vastu building design moradabad, space build moradabad, vastu compliant construction company, residential vastu construction, commercial vastu construction moradabad, vastu architects moradabad, vastu civil construction",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vastu-based-construction-moradabad",
  },
  openGraph: {
    title: "Vastu Based Construction in Moradabad | Space Build",
    description:
      "Space Build offers expert Vastu based construction in Moradabad for homes, offices & commercial spaces. Get durable structures designed with positive energy, proper direction & modern planning.",
    url: "https://www.spacebuild.co.in/vastu-based-construction-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu Based Construction in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu Based Construction in Moradabad | Space Build",
    description:
      "Space Build offers expert Vastu based construction in Moradabad for homes, offices & commercial spaces. Get durable structures designed with positive energy, proper direction & modern planning.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },
  icons: {
    icon: "/favicon-v2.ico",
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