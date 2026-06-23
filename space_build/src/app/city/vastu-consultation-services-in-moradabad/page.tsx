import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Consultation Services in Moradabad, UP | Vasterior",
  description: "Looking for professional Vastu Consultation Services in Moradabad, UP? Get reliable and result-driven solutions with Vastu Consultation Services in Moradabad, UP.",
  keywords: "vastu consultation services moradabad, vastu shastra consultation moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-consultation-services-in-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-consultation-services-in-moradabad",
    title: "Vastu Consultation Services in Moradabad, UP | Vasterior",
    description: "Looking for professional Vastu Consultation Services in Moradabad, UP? Get reliable and result-driven solutions with Vastu Consultation Services in Moradabad, UP.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Consultation Services in Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Consultation Services in Moradabad, UP | Vasterior",
    description: "Looking for professional Vastu Consultation Services in Moradabad, UP? Get reliable and result-driven solutions with Vastu Consultation Services in Moradabad, UP.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuConsultationServicesMoradabad() {
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
