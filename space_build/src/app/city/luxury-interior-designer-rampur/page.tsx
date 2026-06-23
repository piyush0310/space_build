import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Luxury Interior Designer Rampur | Vasterior",
  description: "Luxury Interior Designer Rampur – Vasterior delivers premium, modern and Vastu-aligned luxury interiors tailored to your lifestyle. Call +917906086899.",
  keywords: "Luxury Interiors Rampur, Premium Interior Designer Rampur, Vasterior Designs",
  alternates: {
    canonical: "https://www.vasterior.com/city/luxury-interior-designer-rampur",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/luxury-interior-designer-rampur",
    title: "Luxury Interior Designer Rampur | Vasterior",
    description: "Luxury Interior Designer Rampur – Vasterior delivers premium, modern and Vastu-aligned luxury interiors tailored to your lifestyle. Call +917906086899.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Luxury Interior Designer Rampur",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Luxury Interior Designer Rampur | Vasterior",
    description: "Luxury Interior Designer Rampur – Vasterior delivers premium, modern and Vastu-aligned luxury interiors tailored to your lifestyle. Call +917906086899.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function LuxuryInteriorDesignerRampur() {
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
