import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Premium Villa Interior Design Rampur | Vasterior",
  description: "Premium Villa Interior Design Rampur – Vasterior delivers elite, bespoke villa interiors with luxury finishes. Call +917906086899.",
  keywords: "Premium Villa Interiors Rampur, Luxury Villa Design Rampur, Vasterior Elite",
  alternates: {
    canonical: "https://www.vasterior.com/city/premium-villa-interior-design-rampur",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/premium-villa-interior-design-rampur",
    title: "Premium Villa Interior Design Rampur | Vasterior",
    description: "Premium Villa Interior Design Rampur – Vasterior delivers elite, bespoke villa interiors with luxury finishes. Call +917906086899.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Premium Villa Interior Design Rampur",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Premium Villa Interior Design Rampur | Vasterior",
    description: "Premium Villa Interior Design Rampur – Vasterior delivers elite, bespoke villa interiors with luxury finishes. Call +917906086899.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function PremiumVillaInteriorDesignRampur() {
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
