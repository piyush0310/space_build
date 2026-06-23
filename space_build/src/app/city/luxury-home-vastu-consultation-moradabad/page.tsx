import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Luxury Home Vastu Consultation Moradabad, UP| Vasterior",
  description:
    "Looking for Luxury Home Vastu Consultation in Moradabad? Vasterior provides expert Luxury Home Vastu Consultation in Moradabad for perfect harmony.",
  keywords: "luxury home vastu consultation moradabad, luxury vastu expert moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/luxury-home-vastu-consultation-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/luxury-home-vastu-consultation-moradabad",
    title: "Luxury Home Vastu Consultation Moradabad, UP| Vasterior",
    description:
      "Looking for Luxury Home Vastu Consultation in Moradabad? Vasterior provides expert Luxury Home Vastu Consultation in Moradabad for perfect harmony.",
    images: [
      {
        url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
        width: 1200,
        height: 630,
        alt: "Luxury Home Vastu Consultation Moradabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Luxury Home Vastu Consultation Moradabad, UP| Vasterior",
    description:
      "Looking for Luxury Home Vastu Consultation in Moradabad? Vasterior provides expert Luxury Home Vastu Consultation in Moradabad for perfect harmony.",
    images: [
      "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuConsultantNoidaExtension() {
  return (
    <div className="min-h-screen bg-[#FFF1E0]">
      <Banner />
      <Content />
      
      <Portfolio />
      <Blog />
      <Testimonials />
    </div>
  );
}
