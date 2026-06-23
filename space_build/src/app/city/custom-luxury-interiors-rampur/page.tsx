import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Custom Luxury Interiors Rampur | Vasterior",
  description: "Custom Luxury Interiors Rampur – Vasterior creates fully customized luxury interiors with high-end detailing. Call +917906086899.",
  keywords: "Custom Interiors Rampur, Luxury Home Design Rampur, Vasterior Custom",
  alternates: {
    canonical: "https://www.vasterior.com/city/custom-luxury-interiors-rampur",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/custom-luxury-interiors-rampur",
    title: "Custom Luxury Interiors Rampur | Vasterior",
    description: "Custom Luxury Interiors Rampur – Vasterior creates fully customized luxury interiors with high-end detailing. Call +917906086899.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Custom Luxury Interiors Rampur",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Custom Luxury Interiors Rampur | Vasterior",
    description: "Custom Luxury Interiors Rampur – Vasterior creates fully customized luxury interiors with high-end detailing. Call +917906086899.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function CustomLuxuryInteriorsRampur() {
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
