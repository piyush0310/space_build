import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Flat Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
  description: "Flat Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Vastu solutions for apartments, flats, and modern residential layouts.",
  keywords: "flat vastu consultant chandausi, vastu for apartment chandausi, vastu solutions for flat chandausi, vasterior",
  alternates: {
    canonical: "https://www.vasterior.com/city/flat-vastu-consultant-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/flat-vastu-consultant-chandausi",
    title: "Flat Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
    description: "Flat Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Vastu solutions for apartments, flats, and modern residential layouts.",
    images: [{
      url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
      width: 1200,
      height: 630,
      alt: "Flat Vastu Consultant Chandausi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Flat Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
    description: "Flat Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Vastu solutions for apartments, flats, and modern residential layouts.",
    images: ["https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function FlatVastuConsultantChandausi() {
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
