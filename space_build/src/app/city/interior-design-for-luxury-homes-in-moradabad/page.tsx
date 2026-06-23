import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Interior Design For Luxury Homes In Moradabad, UP| Vasterior",
  description: "Choose Vasterior for Interior Design for Luxury Homes in Moradabad. Our Interior Design for Luxury Homes in Moradabad service blends elegance and functionality.",
  keywords: "interior design for luxury homes Moradabad, luxury home interiors Moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/interior-design-for-luxury-homes-in-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/interior-design-for-luxury-homes-in-moradabad",
    title: "Interior Design For Luxury Homes In Moradabad, UP| Vasterior",
    description: "Choose Vasterior for Interior Design for Luxury Homes in Moradabad. Our Interior Design for Luxury Homes in Moradabad service blends elegance and functionality.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Interior Design For Luxury Homes In Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Interior Design For Luxury Homes In Moradabad, UP| Vasterior",
    description: "Choose Vasterior for Interior Design for Luxury Homes in Moradabad. Our Interior Design for Luxury Homes in Moradabad service blends elegance and functionality.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function InteriorDesignForLuxuryHomesInMoradabad() {
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
