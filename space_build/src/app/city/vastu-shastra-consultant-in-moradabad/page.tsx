import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Shastra Consultant in Moradabad, UP | Vasterior",
  description: "Trusted Vastu Shastra Consultant in Moradabad, UP. Get personalized remedies and guidance with an experienced Vastu Shastra Consultant in Moradabad, UP.",
  keywords: "vastu shastra consultant moradabad, vastu shastra expert moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-shastra-consultant-in-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-shastra-consultant-in-moradabad",
    title: "Vastu Shastra Consultant in Moradabad, UP | Vasterior",
    description: "Trusted Vastu Shastra Consultant in Moradabad, UP. Get personalized remedies and guidance with an experienced Vastu Shastra Consultant in Moradabad, UP.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Vastu Shastra Consultant in Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Shastra Consultant in Moradabad, UP | Vasterior",
    description: "Trusted Vastu Shastra Consultant in Moradabad, UP. Get personalized remedies and guidance with an experienced Vastu Shastra Consultant in Moradabad, UP.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuShastraConsultantMoradabad() {
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
