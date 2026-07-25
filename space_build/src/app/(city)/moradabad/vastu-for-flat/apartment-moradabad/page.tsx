import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Vastu for Flat/Apartment in Moradabad | Space Build",
  description:
    "Learn Vastu tips for flats and apartments in Moradabad with Space Build. Ideal floor, direction, layout adjustments & remedies for balanced living.",
  keywords:
    "vastu for flat Moradabad, vastu for apartment Moradabad, flat vastu tips, Space Build vastu consultation, apartment direction as per vastu, vastu for high rise flats, vastu remedies for apartments, vastu tips for home Moradabad, best floor as per vastu, vastu for rented flat",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vastu-for-flat-apartment-moradabad",
  },
  openGraph: {
    title: "Vastu for Flat/Apartment in Moradabad | Space Build",
    description:
      "Learn Vastu tips for flats and apartments in Moradabad with Space Build. Ideal floor, direction, layout adjustments & remedies for balanced living.",
    url: "https://www.spacebuild.co.in/vastu-for-flat-apartment-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu for Flat/Apartment in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu for Flat/Apartment in Moradabad | Space Build",
    description:
      "Learn Vastu tips for flats and apartments in Moradabad with Space Build. Ideal floor, direction, layout adjustments & remedies for balanced living.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
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