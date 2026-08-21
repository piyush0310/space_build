import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Vastu Consultation Fees in Moradabad | Affordable Vastu Consultant | Space Build",
  description:
    "Looking for Vastu consultation fees in Moradabad? Space Build offers affordable and professional Vastu consultation for homes, offices, shops, factories, hotels, plots, and commercial properties with practical guidance.",
  keywords:
    "vastu consultation fees Moradabad, vastu consultant Moradabad, vastu charges Moradabad, home vastu consultation Moradabad, commercial vastu consultant Moradabad, office vastu Moradabad, plot vastu Moradabad, factory vastu Moradabad, best vastu consultant Moradabad, Space Build",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vastu-consultation-fees-moradabad",
  },
  openGraph: {
    title: "Vastu Consultation Fees in Moradabad | Affordable Vastu Consultant | Space Build",
    description:
      "Looking for Vastu consultation fees in Moradabad? Space Build offers affordable and professional Vastu consultation for homes, offices, shops, factories, hotels, plots, and commercial properties with practical guidance.",
    url: "https://www.spacebuild.co.in/vastu-consultation-fees-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu Consultation Fees in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu Consultation Fees in Moradabad | Affordable Vastu Consultant | Space Build",
    description:
      "Looking for Vastu consultation fees in Moradabad? Space Build offers affordable and professional Vastu consultation for homes, offices, shops, factories, hotels, plots, and commercial properties with practical guidance.",
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