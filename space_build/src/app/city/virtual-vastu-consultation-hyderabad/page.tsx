import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Virtual Vastu Consultation Hyderabad | Vasterior",
  description:
    "Virtual Vastu Consultation Hyderabad offering convenient online Vastu guidance and solutions.",
  keywords:
    "virtual vastu consultation hyderabad, remote vastu advice hyderabad, online property analysis",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/virtual-vastu-consultation-hyderabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/virtual-vastu-consultation-hyderabad",
    title: "Virtual Vastu Consultation Hyderabad | Vasterior",
    description:
      "Virtual Vastu Consultation Hyderabad offering convenient online Vastu guidance and solutions.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Virtual Vastu Consultation Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Virtual Vastu Consultation Hyderabad | Vasterior",
    description:
      "Virtual Vastu Consultation Hyderabad offering convenient online Vastu guidance and solutions.",
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
