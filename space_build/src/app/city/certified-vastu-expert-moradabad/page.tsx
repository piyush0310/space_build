import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Certified Vastu Expert Moradabad, UP | Vasterior",
  description: "Looking for a Certified Vastu Expert in Moradabad, UP? Get trusted results with proven methods by choosing a Certified Vastu Expert in Moradabad, UP.",
  keywords: "certified vastu expert moradabad, licensed vastu consultant moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/certified-vastu-expert-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/certified-vastu-expert-moradabad",
    title: "Certified Vastu Expert Moradabad, UP | Vasterior",
    description: "Looking for a Certified Vastu Expert in Moradabad, UP? Get trusted results with proven methods by choosing a Certified Vastu Expert in Moradabad, UP.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Certified Vastu Expert Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Certified Vastu Expert Moradabad, UP | Vasterior",
    description: "Looking for a Certified Vastu Expert in Moradabad, UP? Get trusted results with proven methods by choosing a Certified Vastu Expert in Moradabad, UP.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function CertifiedVastuExpertMoradabad() {
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
