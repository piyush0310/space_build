import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Modular Kitchen Designer Rampur | Vasterior",
  description: "Modular Kitchen Designer Rampur – Vasterior builds modern, space-efficient modular kitchens with premium materials. Call +917906086899.",
  keywords: "Modular Kitchen Rampur, Kitchen Designer Rampur, Vasterior Kitchens",
  alternates: {
    canonical: "https://www.vasterior.com/city/modular-kitchen-designer-rampur",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/modular-kitchen-designer-rampur",
    title: "Modular Kitchen Designer Rampur | Vasterior",
    description: "Modular Kitchen Designer Rampur – Vasterior builds modern, space-efficient modular kitchens with premium materials. Call +917906086899.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Modular Kitchen Designer Rampur",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Modular Kitchen Designer Rampur | Vasterior",
    description: "Modular Kitchen Designer Rampur – Vasterior builds modern, space-efficient modular kitchens with premium materials. Call +917906086899.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function ModularKitchenDesignerRampur() {
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
