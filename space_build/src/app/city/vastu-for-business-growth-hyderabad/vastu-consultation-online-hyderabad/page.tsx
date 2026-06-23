import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Consultation Online Hyderabad | Vasterior",
  description:
    "Vastu Consultation Online Hyderabad providing remote Vastu services with accurate property evaluation.",
  keywords:
    "vastu consultation online hyderabad, digital vastu analysis hyderabad, online expert guidance",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-consultation-online-hyderabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-consultation-online-hyderabad",
    title: "Vastu Consultation Online Hyderabad | Vasterior",
    description:
      "Vastu Consultation Online Hyderabad providing remote Vastu services with accurate property evaluation.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Vastu Consultation Online Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Consultation Online Hyderabad | Vasterior",
    description:
      "Vastu Consultation Online Hyderabad providing remote Vastu services with accurate property evaluation.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function BestInteriorDesignerMoradabad() {
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
