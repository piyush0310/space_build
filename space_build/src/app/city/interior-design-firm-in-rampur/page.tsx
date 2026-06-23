import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Interior Design Firm In Rampur | Vasterior",
  description: "Interior Design Firm In Rampur – Vasterior offers full-service interior design, planning and execution for all spaces. Call +917906086899.",
  keywords: "Interior Firm Rampur, Interior Design Company Rampur, Vasterior Studio",
  alternates: {
    canonical: "https://www.vasterior.com/city/interior-design-firm-in-rampur",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/interior-design-firm-in-rampur",
    title: "Interior Design Firm In Rampur | Vasterior",
    description: "Interior Design Firm In Rampur – Vasterior offers full-service interior design, planning and execution for all spaces. Call +917906086899.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Interior Design Firm In Rampur",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Interior Design Firm In Rampur | Vasterior",
    description: "Interior Design Firm In Rampur – Vasterior offers full-service interior design, planning and execution for all spaces. Call +917906086899.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function InteriorDesignFirmInRampur() {
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
