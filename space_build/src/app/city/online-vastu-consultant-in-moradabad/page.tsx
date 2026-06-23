import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Online Vastu Consultant in Moradabad, UP | Vasterior",
  description: "Reliable Online Vastu Consultant in Moradabad, UP. Get expert guidance remotely with the support of a trusted Online Vastu Consultant in Moradabad, UP.",
  keywords: "online vastu consultant moradabad, virtual vastu services moradabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/online-vastu-consultant-in-moradabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/online-vastu-consultant-in-moradabad",
    title: "Online Vastu Consultant in Moradabad, UP | Vasterior",
    description: "Reliable Online Vastu Consultant in Moradabad, UP. Get expert guidance remotely with the support of a trusted Online Vastu Consultant in Moradabad, UP.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Online Vastu Consultant in Moradabad",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Online Vastu Consultant in Moradabad, UP | Vasterior",
    description: "Reliable Online Vastu Consultant in Moradabad, UP. Get expert guidance remotely with the support of a trusted Online Vastu Consultant in Moradabad, UP.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function OnlineVastuConsultantMoradabad() {
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
