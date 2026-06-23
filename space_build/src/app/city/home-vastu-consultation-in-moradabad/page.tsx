import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Home Vastu Consultation in Moradabad, UP | Vasterior",
  description:
    "Get expert Home Vastu Consultation in Moradabad, UP to ensure positive energy and peace. Choose reliable Home Vastu Consultation in Moradabad, UP.",
  keywords: "home vastu consultant moradabad, house vastu consultation moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/home-vastu-consultation-in-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/home-vastu-consultation-in-moradabad",
    title: "Home Vastu Consultation in Moradabad, UP | Vasterior",
    description:
      "Get expert Home Vastu Consultation in Moradabad, UP to ensure positive energy and peace. Choose reliable Home Vastu Consultation in Moradabad, UP.",
    images: [
      {
        url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
        width: 1200,
        height: 630,
        alt: "Home Vastu Consultation in Moradabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Home Vastu Consultation in Moradabad, UP | Vasterior",
    description:
      "Get expert Home Vastu Consultation in Moradabad, UP to ensure positive energy and peace. Choose reliable Home Vastu Consultation in Moradabad, UP.",
    images: [
      "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function HomeVastuConsultationMoradabad() {
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
