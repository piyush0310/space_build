import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Turnkey Interior Design And Vastu Consultation Rampur | Vasterior",
  description: "Turnkey Interior Design And Vastu Consultation Rampur – Vasterior offers complete turnkey interiors with expert Vastu guidance. Call +917906086899.",
  keywords: "Turnkey Interiors Rampur, Vastu Consultation Rampur, Vasterior Vastu",
  alternates: {
    canonical: "https://www.vasterior.com/city/turnkey-interior-design-and-vastu-consultation-rampur",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/turnkey-interior-design-and-vastu-consultation-rampur",
    title: "Turnkey Interior Design And Vastu Consultation Rampur | Vasterior",
    description: "Turnkey Interior Design And Vastu Consultation Rampur – Vasterior offers complete turnkey interiors with expert Vastu guidance. Call +917906086899.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Turnkey Interior Design And Vastu Consultation Rampur",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Turnkey Interior Design And Vastu Consultation Rampur | Vasterior",
    description: "Turnkey Interior Design And Vastu Consultation Rampur – Vasterior offers complete turnkey interiors with expert Vastu guidance. Call +917906086899.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function TurnkeyInteriorDesignAndVastuConsultationRampur() {
  return (
    <div className="min-h-screen bg-[#FFF1E0]">
      <Banner />
      <Content />
      <Services />
      <Portfolio />
      <Blog />
      <Testimonials />
    </div>
  );
}
