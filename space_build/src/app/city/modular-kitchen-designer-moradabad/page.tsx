import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Modular Kitchen Designer Moradabad, UP| Vasterior",
  description: "Need a Modular Kitchen Designer Moradabad? Vasterior, the professional Modular Kitchen Designer Moradabad, offers stylish, space-saving kitchen solutions.",
  keywords: "modular kitchen designer in Moradabad, custom modular kitchen designer Moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/modular-kitchen-designer-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/modular-kitchen-designer-moradabad",
    title: "Modular Kitchen Designer Moradabad, UP| Vasterior",
    description: "Need a Modular Kitchen Designer Moradabad? Vasterior, the professional Modular Kitchen Designer Moradabad, offers stylish, space-saving kitchen solutions.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Modular Kitchen Designer Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Modular Kitchen Designer Moradabad, UP| Vasterior",
    description: "Need a Modular Kitchen Designer Moradabad? Vasterior, the professional Modular Kitchen Designer Moradabad, offers stylish, space-saving kitchen solutions.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function ModularKitchenDesignerMoradabad() {
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
