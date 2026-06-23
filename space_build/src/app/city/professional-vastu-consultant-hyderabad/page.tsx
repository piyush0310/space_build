import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Professional Vastu Consultant Hyderabad | Vasterior",
  description:
    "Vasterior is where premium interior design meets powerful MahaVastu alignment—so your home or workspace in Hyderabad doesn’t just look stunning, it feels right, functions better, and supports real-life outcomes like peace, growth, stability, and clarity.",
  keywords:
    "professional vastu consultant hyderabad, mahavastu consultant hyderabad, vastu with interior design",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/professional-vastu-consultant-hyderabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/professional-vastu-consultant-hyderabad",
    title: "Professional Vastu Consultant Hyderabad | Vasterior",
    description:
      "Professional Vastu Consultant in Hyderabad offering MahaVastu-based guidance with integrated interior design for homes, offices, and commercial spaces.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Professional Vastu Consultant Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Professional Vastu Consultant Hyderabad | Vasterior",
    description:
      "Professional Vastu Consultant in Hyderabad combining MahaVastu principles with premium interior design for aligned, high-performance spaces.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function BestInteriorDesignerMoradabad() {
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
