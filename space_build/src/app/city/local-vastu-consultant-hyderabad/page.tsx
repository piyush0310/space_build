import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Local Vastu Consultant Hyderabad | Vasterior",
  description:
    "Local Vastu Consultant Hyderabad providing personalized Vastu guidance, site visits and online consultation services for homes and offices.",
  keywords:
    "local vastu consultant hyderabad, nearby vastu expert hyderabad, vastu near me",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/local-vastu-consultant-hyderabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/local-vastu-consultant-hyderabad",
    title: "Local Vastu Consultant Hyderabad | Vasterior",
    description:
      "Local Vastu Consultant Hyderabad providing personalized Vastu guidance, site visits and online consultation services for homes and offices.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Local Vastu Consultant Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Local Vastu Consultant Hyderabad | Vasterior",
    description:
      "Local Vastu Consultant Hyderabad providing personalized Vastu guidance, site visits and online consultation services for homes and offices.",
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
