import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";


import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog"


export const metadata: Metadata = {
  title: "Residential Vastu Consultant Delhi | Vasterior",
  description: "Looking for Residential Vastu Consultant Delhi? Vasterior - your trusted Residential Vastu Consultant Delhi for happy homes.",
  keywords: "Residential Vastu Consultant Delhi, House Vastu Expert Delhi, Vastu Shastra For Homes Delhi",
  alternates: {
    canonical: "https://www.vasterior.com/city/residential-vastu-consultant-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/residential-vastu-consultant-delhi",
    title: "Residential Vastu Consultant Delhi | Vasterior",
    description: "Looking for Residential Vastu Consultant Delhi? Vasterior - your trusted Residential Vastu Consultant Delhi for happy homes.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Residential Vastu Consultant Delhi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Residential Vastu Consultant Delhi | Vasterior",
    description: "Looking for Residential Vastu Consultant Delhi? Vasterior - your trusted Residential Vastu Consultant Delhi for happy homes.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};


export default function ResidentialVastuConsultantDelhi() {
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
