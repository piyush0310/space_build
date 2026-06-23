import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";


import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog"


export const metadata: Metadata = {
  title: "Vastu Compliant Interiors For Farmhouses Delhi | Vasterior",
  description: "Looking for Vastu Compliant Interiors For Farmhouses Delhi? Vasterior - expert Vastu Compliant Interiors For Farmhouses Delhi.",
  keywords: "Vastu Compliant Interiors For Farmhouses Delhi, Farmhouse Interior Vastu Delhi, Vastu Design For Farm NCR",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-compliant-interiors-for-farmhouses-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-compliant-interiors-for-farmhouses-delhi",
    title: "Vastu Compliant Interiors For Farmhouses Delhi | Vasterior",
    description: "Looking for Vastu Compliant Interiors For Farmhouses Delhi? Vasterior - expert Vastu Compliant Interiors For Farmhouses Delhi.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Compliant Interiors For Farmhouses Delhi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Compliant Interiors For Farmhouses Delhi | Vasterior",
    description: "Looking for Vastu Compliant Interiors For Farmhouses Delhi? Vasterior - expert Vastu Compliant Interiors For Farmhouses Delhi.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};


export default function VastuCompliantInteriorsForFarmhousesDelhi() {
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
