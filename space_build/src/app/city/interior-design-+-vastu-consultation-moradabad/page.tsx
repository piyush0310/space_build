import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Interior Design + Vastu Consultation Moradabad, UP| Vasterior",
  description: "Get expert Interior Design + Vastu Consultation Moradabad with Vasterior, offering professional Interior Design + Vastu Consultation Moradabad for balanced, beautiful homes.",
  keywords: "interior design and vastu consultant Moradabad, vastu with interior designer Moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/interior-design-+-vastu-consultation-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/interior-design-+-vastu-consultation-moradabad",
    title: "Interior Design + Vastu Consultation Moradabad, UP| Vasterior",
    description: "Get expert Interior Design + Vastu Consultation Moradabad with Vasterior, offering professional Interior Design + Vastu Consultation Moradabad for balanced, beautiful homes.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Interior Design + Vastu Consultation Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Interior Design + Vastu Consultation Moradabad, UP| Vasterior",
    description: "Get expert Interior Design + Vastu Consultation Moradabad with Vasterior, offering professional Interior Design + Vastu Consultation Moradabad for balanced, beautiful homes.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function InteriorDesignVastuConsultationMoradabad() {
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