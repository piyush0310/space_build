import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";


import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog"


export const metadata: Metadata = {
  title: "Vastu For Villa Construction South Delhi | Vasterior",
  description: "Looking for Vastu For Villa Construction South Delhi? Vasterior - trusted Vastu For Villa Construction South Delhi.",
  keywords: "Vastu For Villa Construction South Delhi, Villa Design Vastu Expert Delhi, South Delhi Villa Vastu Consultant",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-for-villa-construction-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-for-villa-construction-south-delhi",
    title: "Vastu For Villa Construction South Delhi | Vasterior",
    description: "Looking for Vastu For Villa Construction South Delhi? Vasterior - trusted Vastu For Villa Construction South Delhi.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu For Villa Construction South Delhi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu For Villa Construction South Delhi | Vasterior",
    description: "Looking for Vastu For Villa Construction South Delhi? Vasterior - trusted Vastu For Villa Construction South Delhi.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};


export default function VastuForVillaConstructionSouthDelhi() {
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
