import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Shastra Expert Chandausi, Uttar Pradesh| Vasterior",
  description: "Vastu Shastra Expert in Chandausi, Uttar Pradesh by Vasterior. Authentic Vastu Shastra guidance for homes, offices, and businesses.",
  keywords: "vastu shastra expert chandausi, vastu shastra consultant chandausi, vastu advice chandausi, vasterior",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-shastra-expert-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-shastra-expert-chandausi",
    title: "Vastu Shastra Expert Chandausi, Uttar Pradesh| Vasterior",
    description: "Vastu Shastra Expert in Chandausi, Uttar Pradesh by Vasterior. Authentic Vastu Shastra guidance for homes, offices, and businesses.",
    images: [{
      url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
      width: 1200,
      height: 630,
      alt: "Vastu Shastra Expert Chandausi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Shastra Expert Chandausi, Uttar Pradesh| Vasterior",
    description: "Vastu Shastra Expert in Chandausi, Uttar Pradesh by Vasterior. Authentic Vastu Shastra guidance for homes, offices, and businesses.",
    images: ["https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuShastraExpertChandausi() {
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
