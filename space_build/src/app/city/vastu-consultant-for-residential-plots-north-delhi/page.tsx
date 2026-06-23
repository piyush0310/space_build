import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";


import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog"


export const metadata: Metadata = {
  title: "Vastu Consultant For Residential Plots North Delhi | Vasterior",
  description: "Looking for Vastu Consultant For Residential Plots North Delhi? Vasterior - trusted Vastu Consultant For Residential Plots North Delhi.",
  keywords: "Vastu Consultant For Residential Plots North Delhi, Plot Vastu Expert Delhi, Residential Land Vastu NCR",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-consultant-for-residential-plots-north-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-consultant-for-residential-plots-north-delhi",
    title: "Vastu Consultant For Residential Plots North Delhi | Vasterior",
    description: "Looking for Vastu Consultant For Residential Plots North Delhi? Vasterior - trusted Vastu Consultant For Residential Plots North Delhi.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Consultant For Residential Plots North Delhi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Consultant For Residential Plots North Delhi | Vasterior",
    description: "Looking for Vastu Consultant For Residential Plots North Delhi? Vasterior - trusted Vastu Consultant For Residential Plots North Delhi.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};


export default function VastuConsultantForResidentialPlotsNorthDelhi() {
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
