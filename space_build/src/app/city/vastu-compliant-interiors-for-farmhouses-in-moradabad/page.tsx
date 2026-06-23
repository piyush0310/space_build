import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Compliant Interiors For Farmhouses In Moradabad, UP| Vasterior",
  description: "Want Vastu Compliant Interiors for Farmhouses in Moradabad? Vasterior designs Vastu Compliant Interiors for Farmhouses in Moradabad with perfection.",
  keywords: "vastu compliant interiors farmhouses moradabad, farmhouse vastu interiors moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-compliant-interiors-for-farmhouses-in-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-compliant-interiors-for-farmhouses-in-moradabad",
    title: "Vastu Compliant Interiors For Farmhouses In Moradabad, UP| Vasterior",
    description: "Want Vastu Compliant Interiors for Farmhouses in Moradabad? Vasterior designs Vastu Compliant Interiors for Farmhouses in Moradabad with perfection.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Compliant Interiors For Farmhouses In Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Compliant Interiors For Farmhouses In Moradabad, UP| Vasterior",
    description: "Want Vastu Compliant Interiors for Farmhouses in Moradabad? Vasterior designs Vastu Compliant Interiors for Farmhouses in Moradabad with perfection.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuCompliantInteriorsForFarmhousesInMoradabad() {
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
