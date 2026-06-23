import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Residential & Commercial Vastu Services Moradabad, UP | Vasterior",
  description: "Looking for Residential & Commercial Vastu Services in Moradabad, UP? Get expert solutions for both with trusted Residential & Commercial Vastu Services in Moradabad, UP.",
  keywords: "residential vastu services moradabad, commercial vastu services moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/residential-commercial-vastu-services-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/residential-commercial-vastu-services-moradabad",
    title: "Residential & Commercial Vastu Services Moradabad, UP | Vasterior",
    description: "Looking for Residential & Commercial Vastu Services in Moradabad, UP? Get expert solutions for both with trusted Residential & Commercial Vastu Services in Moradabad, UP.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Residential & Commercial Vastu Services Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Residential & Commercial Vastu Services Moradabad, UP | Vasterior",
    description: "Looking for Residential & Commercial Vastu Services in Moradabad, UP? Get expert solutions for both with trusted Residential & Commercial Vastu Services in Moradabad, UP.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function ResidentialCommercialVastuMoradabad() {
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
