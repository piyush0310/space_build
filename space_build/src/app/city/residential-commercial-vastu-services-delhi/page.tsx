import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";


import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog"


export const metadata: Metadata = {
  title: "Residential & Commercial Vastu Services Delhi | Vasterior",
  description: "Looking for Residential & Commercial Vastu Services Delhi? Vasterior - expert Residential & Commercial Vastu Services Delhi.",
  keywords: "Residential & Commercial Vastu Services Delhi, Home & Office Vastu Delhi, Best Vastu Services NCR",
  alternates: {
    canonical: "https://www.vasterior.com/city/residential-commercial-vastu-services-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/residential-commercial-vastu-services-delhi",
    title: "Residential & Commercial Vastu Services Delhi | Vasterior",
    description: "Looking for Residential & Commercial Vastu Services Delhi? Vasterior - expert Residential & Commercial Vastu Services Delhi.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Residential & Commercial Vastu Services Delhi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Residential & Commercial Vastu Services Delhi | Vasterior",
    description: "Looking for Residential & Commercial Vastu Services Delhi? Vasterior - expert Residential & Commercial Vastu Services Delhi.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};


export default function ResidentialCommercialVastuServicesDelhi() {
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
